import { useRef, FormEvent, ReactNode } from "react";
import { Form as FormTypes } from "./formDataTypes";
import Radio from "./Radio";
import CheckBox from "./CheckBox";
import TextArea from "./TextArea";
import Grade from "./Grade";

import SubmitButton from "./SubmitButton";

type Props = {
  formData: FormTypes;
  children?: ReactNode;
  sending: boolean;
  onSubmit: (e: FormEvent) => void;
};

function Form({ formData, onSubmit, sending }: Props) {
  const formRef = useRef<HTMLFormElement>(null);
  return (
    <form
      ref={formRef}
      onSubmit={(e) => onSubmit(e)}
      style={{ counterReset: "field-counter" }}
    >
      <h2 className="text-2xl font-semibold">{formData.title}</h2>

      <div className="grid items-center gap-5 mt-8">
        {formData.fields.map((field) => {
          switch (field.type) {
            case "radio":
              return <Radio key={field.id} field={field} disabled={sending} />;

            case "checkbox":
              return (
                <CheckBox key={field.id} field={field} disabled={sending} />
              );

            case "grade":
              return <Grade key={field.id} field={field} disabled={sending} />;

            case "textarea":
              return (
                <TextArea key={field.id} field={field} disabled={sending} />
              );

            case "submit":
              return (
                <SubmitButton
                  key={field.id}
                  sending={sending}
                  buttonText={field.title}
                  sendingText="Skickar..."
                />
              );

            default:
              break;
          }
        })}
      </div>
      <input name="formId" value={formData.id} type="hidden" />
    </form>
  );
}

export default Form;
