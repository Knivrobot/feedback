import { Form as FormTypes } from "./formDataTypes";

type Props = {
  formData: FormTypes;
  formContent: FormData | undefined;
  setFormContent: (value: undefined) => void;
};

function Confirmation({ formData, formContent, setFormContent }: Props) {
  return (
    <div style={{ counterReset: "answer-counter" }}>
      <h2 className="text-2xl font-semibold">{formData.title}</h2>
      <div className="grid items-center gap-5 mt-8">
        {formData?.fields?.map((field, index) => {
          const value = formContent?.getAll(field.slug) as unknown as string[];
          if (value?.length !== 0) {
            return (
              <div style={{ counterIncrement: "answer-counter" }}>
                <div className="font-semibold text-lg before:inline-block before:pr-1 before:content-[counter(answer-counter)'.']">
                  {field.title}
                </div>
                <div>
                  {value?.map((item) => {
                    return <div>{item}</div>;
                  })}
                </div>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
      <button
        className="w-full flex items-center justify-center text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-600 font-medium rounded-lg text-lg px-5 py-3  text-center mr-2   dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={() => setFormContent(undefined)}
      >
        Reset
      </button>
    </div>
  );
}

export default Confirmation;
