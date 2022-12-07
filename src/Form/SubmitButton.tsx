type Props = {
  buttonText: string;
  sendingText: string;
  sending: boolean;
};

function Form({ buttonText, sendingText, sending }: Props) {
  return (
    <button
      disabled={sending}
      className="w-full flex items-center justify-center text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-600 font-medium rounded-lg text-lg px-5 py-3  text-center mr-2   dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      {sending ? sendingText : buttonText}
      {sending ? (
        <svg
          className="animate-spin ml-1 mr-3 h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      ) : null}
    </button>
  );
}

export default Form;
