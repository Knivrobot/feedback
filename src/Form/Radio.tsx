import { FormFields, Options } from "./formBluePrintInterface";
type Props = {
  field: FormFields;
  disabled: boolean;
  invalidFields: (string | undefined)[];
};

function Radio({ field, disabled, invalidFields }: Props) {
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
              className="cursor-pointer w-5 h-5 md:w-4 md:h-4"
              type="radio"
              name={field.slug}
              value={option.value}
              required={field.required}
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

export default Radio;
