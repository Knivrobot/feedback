import { FormFields, Options } from "./formDataTypes";

type Props = {
  field: FormFields;
  disabled: boolean;
};

function CheckBox({ field, disabled }: Props) {
  return (
    <fieldset style={{ counterIncrement: "field-counter" }} disabled={disabled}>
      <legend className="font-semibold text-lg before:inline-block before:pr-1 before:content-[counter(field-counter)'.']">
        {field.title}
      </legend>

      {field?.options?.map((option: Options) => {
        return (
          <label
            key={field.slug + option.id}
            className="flex align-middle border rounded-lg items-center cursor-pointer gap-x-2 p-3 mt-1 md:p-1 md:border-none md:mt-0"
          >
            <input
              className="rounded cursor-pointer w-5 h-5 md:w-4 md:h-4"
              type="checkbox"
              name={field.slug}
              value={option.value}
              required={field.required}
            />
            {option.value}
          </label>
        );
      })}
    </fieldset>
  );
}

export default CheckBox;
