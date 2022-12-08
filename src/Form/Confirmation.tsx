import { Form as FormTypes } from "./formBluePrintInterface";

type Props = {
  formBlueprint: FormTypes;
  formContent: FormData | undefined;
  setFormContent: (value: undefined) => void;
};

function Confirmation({ formBlueprint, formContent, setFormContent }: Props) {
  return (
    <div style={{ counterReset: "answer-counter" }}>
      <h2 className="text-2xl font-semibold">{formBlueprint.title}</h2>
      <div className="grid items-center gap-5 mt-8">
        {formBlueprint?.fields?.map((field, index) => {
          const value = formContent?.getAll(field.slug) as unknown as string[];
          if (value?.join() !== "") {
            return (
              <div>
                <div className="font-semibold text-lg">{field.title}</div>
                <div>
                  {value?.map((item) => {
                    if (field.type === "grade") {
                      return (
                        <div>
                          {item} av {field?.options?.length}
                        </div>
                      );
                    } else {
                      return <div>{item}</div>;
                    }
                  })}
                </div>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="mt-10">
        <div className="py-5 mb-5 text-center rounded bg-green-50">
          Tack för din feedback, nu kan du stänga denna sida.
        </div>
        <button
          className="w-full flex items-center justify-center  bg-white border border-gray-300 hover:bg-gray-50 focus:ring-4 focus:ring-blue-600 font-medium rounded-lg text-lg px-5 py-3  text-center mr-2   dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => setFormContent(undefined)}
        >
          Återställ formuläret{" "}
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2"
          >
            <path
              d="M7 8.99997H8.5V15.5H7V8.99997ZM13 8.99997H11.5V15.5H13V8.99997ZM20 5.55502V7.05502L19.78 7.01999C19.025 6.93499 18.28 6.86502 17.5 6.80002V13C17.5009 14.4019 17.4191 15.8026 17.255 17.1949C17.1628 17.9845 16.8046 18.7192 16.2394 19.278C15.6741 19.8369 14.9355 20.1868 14.145 20.27C11.3902 20.5767 8.60981 20.5767 5.85498 20.27C5.06445 20.1868 4.32587 19.8369 3.76062 19.278C3.19537 18.7192 2.83715 17.9845 2.745 17.1949C2.58089 15.8026 2.49909 14.4019 2.5 13V6.81992C1.735 6.88492 0.974971 6.95501 0.219971 7.04001L0 7.07492V5.57492H0.0550537C1.69505 5.38992 3.35001 5.255 5.01001 5.16C5.01001 4.35 5.07004 3.53495 5.16504 2.72495C5.23006 2.20056 5.46952 1.71334 5.84497 1.34152C6.22042 0.969701 6.70999 0.73495 7.23499 0.675019C9.07289 0.475026 10.9271 0.475026 12.765 0.675019C13.29 0.73495 13.7796 0.969701 14.155 1.34152C14.5305 1.71334 14.7699 2.20056 14.835 2.72495C14.93 3.53495 14.975 4.35 14.99 5.16C16.65 5.255 18.3049 5.38992 19.9449 5.57492L20 5.55502ZM6.5 5.05502C7.665 5.01002 8.825 4.97995 10 4.97995C11.175 4.97995 12.325 5.01002 13.5 5.05502C13.5 4.32002 13.44 3.58495 13.355 2.85495C13.3302 2.6667 13.2426 2.49227 13.1066 2.35983C12.9705 2.2274 12.7938 2.14469 12.605 2.12497C10.8804 1.93165 9.13964 1.93165 7.41504 2.12497C7.22619 2.14469 7.0494 2.2274 6.91333 2.35983C6.77726 2.49227 6.68985 2.6667 6.66504 2.85495C6.57004 3.60495 6.525 4.33992 6.5 5.07492V5.05502ZM16 6.68991C14 6.55491 12 6.47995 10 6.47995C8 6.47995 6 6.55491 4 6.68991V13C4.00074 14.345 4.07919 15.689 4.23499 17.025C4.29358 17.4749 4.50128 17.8922 4.82483 18.2103C5.14838 18.5284 5.56915 18.729 6.02002 18.78C8.66357 19.0733 11.3314 19.0733 13.975 18.78C14.4267 18.7301 14.8487 18.53 15.1732 18.2118C15.4978 17.8936 15.7062 17.4757 15.765 17.025C15.9208 15.689 15.9993 14.345 16 13V6.68991Z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Confirmation;
