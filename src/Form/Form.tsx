import { useRef, useState, ReactNode } from "react";
import { Form as FormTypes } from "./formBluePrintInterface";
import Radio from "./Radio";
import CheckBox from "./CheckBox";
import TextArea from "./TextArea";
import Grade from "./Grade";
import SubmitButton from "./SubmitButton";

type Props = {
  formBlueprint: FormTypes;
  children?: ReactNode;
  sending: boolean;
  onSubmit: (formValues: FormData) => void;
};

function Form({ formBlueprint, onSubmit, sending }: Props) {
  const formRef = useRef<HTMLFormElement>(null);
  const [invalidFields, setInvalidFields] = useState<(string | undefined)[]>(
    []
  );
  const formIsNotValid = invalidFields.length !== 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const formValues = new FormData(target);
    const invalidFields = findInvalidFields(formBlueprint, formValues);
    setInvalidFields(invalidFields);
    target.reportValidity();
    if (target.checkValidity()) {
      onSubmit(formValues);
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={(e) => handleSubmit(e)}
      style={{ counterReset: "field-counter" }}
      noValidate
      className="group/form"
    >
      <h2 className="text-2xl font-bold">{formBlueprint.title}</h2>

      <div className="grid grid-cols-1 items-center gap-5 mt-4 md:mt-8">
        {formBlueprint.fields.map((field) => {
          switch (field.type) {
            case "radio":
              return (
                <Radio
                  key={field.id}
                  field={field}
                  disabled={sending}
                  invalidFields={invalidFields}
                />
              );

            case "checkbox":
              return (
                <CheckBox
                  key={field.id}
                  field={field}
                  disabled={sending}
                  invalidFields={invalidFields}
                />
              );

            case "grade":
              return (
                <Grade
                  key={field.id}
                  field={field}
                  disabled={sending}
                  invalidFields={invalidFields}
                />
              );

            case "textarea":
              return (
                <TextArea
                  key={field.id}
                  field={field}
                  disabled={sending}
                  invalidFields={invalidFields}
                />
              );

            case "submit":
              return (
                <SubmitButton
                  key={field.id}
                  sending={sending}
                  buttonText={field.title}
                  sendingText={field.activeTitle}
                />
              );

            default:
              break;
          }
        })}
      </div>

      {formIsNotValid && (
        <div className="hidden text-pink-600 p-3 text-center group-invalid/form:block">
          {formBlueprint.error}
        </div>
      )}
      <input name="formId" value={formBlueprint.id} type="hidden" />
    </form>
  );
}

export default Form;

const findInvalidFields = (
  formBlueprint: FormTypes,
  formValues: FormData
): (string | undefined)[] => {
  const result = formBlueprint?.fields
    ?.map((field, index) => {
      const value = formValues?.getAll(field.slug) as unknown as string[];
      if (value?.join() === "" && field.required === true) {
        return field.slug;
      }
    })
    .filter((field) => field !== undefined && field !== "");
  return result;
};
