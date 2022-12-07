import { FormFields, Options } from "./formDataTypes";
type Props = {
  field: FormFields;
  disabled: boolean;
};

function Grade({ field, disabled }: Props) {
  return (
    <fieldset
      className="flex flex-nowrap gap-x-[6px]"
      style={{ counterIncrement: "field-counter" }}
      disabled={disabled}
    >
      <legend className="font-semibold text-lg before:inline-block before:pr-1 before:content-[counter(field-counter)'.']">
        {field.title}
      </legend>

      {field?.options?.map((option: Options, index) => {
        return (
          <div key={field.slug + option.id}>
            <input
              id={field.slug + option.id}
              className="peer opacity-0 w-1 h-1 appearance-none absolute"
              type="radio"
              name={field.slug}
              value={option.value}
              required={field.required}
            />
            <label
              className="flex items-center justify-center select-none w-12 h-12 mt-2 text-center hover:bg-[#fcfdff] bg-white border border-gray-300 rounded-lg cursor-pointer peer-focus:ring-2 peer-focus:ring-blue-600  peer-focus:ring-offset-2  peer-checked:bg-blue-600 peer-checked:border-blue-600 peer-checked:text-white md:w-9 md:h-9"
              htmlFor={field.slug + option.id}
            >
              {option.value}
            </label>
          </div>
        );
      })}
    </fieldset>
  );
}

export default Grade;
