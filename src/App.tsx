import { useState } from "react";
import Form from "./Form/Form";
import formBlueprint from "./Form/formBluePrint.json";
import Confirmation from "./Form/Confirmation";

function Survey() {
  const [formContent, setFormContent] = useState<FormData | undefined>();
  const [sending, setSending] = useState(false);

  const handleSubmit = (formValues: FormData) => {
    setSending(true);
    /* Faking fetch */
    setTimeout(() => {
      setFormContent(formValues);
      setSending(false);
    }, 2000);
  };

  return (
    <div className="p-5 max-w-2xl mx-auto bg-white rounded-xl md:p-10">
      {formContent === undefined ? (
        <Form
          formBlueprint={formBlueprint}
          onSubmit={handleSubmit}
          sending={sending}
        />
      ) : (
        <Confirmation
          formBlueprint={formBlueprint}
          formContent={formContent}
          setFormContent={setFormContent}
        />
      )}
    </div>
  );
}

export default Survey;
