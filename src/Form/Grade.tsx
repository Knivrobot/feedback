import { FormFields, Options } from "./formBluePrintInterface";
type Props = {
  field: FormFields;
  disabled: boolean;
  invalidFields: (string | undefined)[];
};

function Grade({ field, disabled, invalidFields }: Props) {
  return (
    <fieldset disabled={disabled} className="group">
      <legend className="font-semibold text-lg">
        {field.order}. {field.title}
      </legend>

      <div className="flex flex-nowrap gap-x-[6px] mb-1">
        {field?.options?.map((option: Options, index) => {
          return (
            <div key={option.id}>
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
      </div>
      {invalidFields.includes(field.slug) && (
        <div className="hidden text-pink-600 mt-2 px-2 py-1 border border-pink-300 bg-pink-50 rounded group-invalid:block">
          {field.error}
        </div>
      )}
    </fieldset>
  );
}

export default Grade;
