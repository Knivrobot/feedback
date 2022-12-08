import { FormFields, Options } from "./formBluePrintInterface";
import { useState } from "react";

type Props = {
  field: FormFields;
  disabled: boolean;
  invalidFields: (string | undefined)[];
};

function CheckBox({ field, disabled, invalidFields }: Props) {
  /* Validation of checkbox-groups is missing in HTML-spec so we need fix it with js */
  const [checked, setChecked] = useState(0);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setChecked(checked + 1);
    } else {
      setChecked(checked - 1);
    }
  };
  const atLeastOneIsChecked = checked > 0;

  return (
    <fieldset className="group" disabled={disabled}>
      <legend className="font-semibold text-lg">
        {field.order}. {field.title}
      </legend>

      {field?.options?.map((option: Options) => {
        return (
          <label
            key={option.id}
            className="flex align-middle border rounded-lg items-center cursor-pointer gap-x-2 p-3 mt-1 md:p-1 md:border-none md:mt-0"
          >
            <input
              className="rounded cursor-pointer w-5 h-5 md:w-4 md:h-4"
              type="checkbox"
              name={field.slug}
              value={option.value}
              required={atLeastOneIsChecked ? false : field.required}
              onChange={(e) => onChange(e)}
            />
            {option.value}
          </label>
        );
      })}
      {invalidFields.includes(field.slug) && (
        <div className="hidden text-pink-600 mt-2 px-2 py-1 border border-pink-300 bg-pink-50 rounded group-invalid:block">
          {field.error}
        </div>
      )}
    </fieldset>
  );
}

export default CheckBox;
