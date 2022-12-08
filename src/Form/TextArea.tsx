import { FormFields } from "./formBluePrintInterface";
type Props = {
  field: FormFields;
  disabled: boolean;
  invalidFields: (string | undefined)[];
};

function TextArea({ field, disabled, invalidFields }: Props) {
  return (
    <fieldset className="group" disabled={disabled}>
      <label className="font-semibold text-lg ">
        {field.order}. {field.title}
        <textarea
          className="mt-2 block w-full px-3 py-2 font-normal bg-white border border-slate-300 rounded-md text-base shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-blue-600"
          rows={5}
          name={field.slug}
          placeholder={field.placeholder}
          required={field.required}
        ></textarea>
      </label>
      {invalidFields.includes(field.slug) && (
        <div className="hidden text-pink-600 mt-2 px-2 py-1 border border-pink-300 bg-pink-50 rounded group-invalid:block">
          {field.error}
        </div>
      )}
    </fieldset>
  );
}

export default TextArea;
