import { FormFields } from "./formDataTypes";
type Props = {
  field: FormFields;
  disabled: boolean;
};

function TextArea({ field, disabled }: Props) {
  return (
    <fieldset style={{ counterIncrement: "field-counter" }} disabled={disabled}>
      <legend className="font-semibold text-lg before:inline-block before:pr-1 before:content-[counter(field-counter)'.']">
        {field.title}
      </legend>

      <div>
        <textarea
          className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-base shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-blue-600
      "
          rows={5}
          name={field.slug}
          required={field.required}
        ></textarea>
      </div>
    </fieldset>
  );
}

export default TextArea;
