import React, { useState, useRef } from "react";
import Form from "./Form/Form";
import formData from "./formData.json";
import Confirmation from "./Form/Confirmation";

function Survey() {
  const [formContent, setFormContent] = useState<FormData | undefined>();
  const [sending, setSending] = useState(false);

  const sendForm = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    const target = e.target as HTMLFormElement;
    const formData = new FormData(target);
    setTimeout(() => {
      setFormContent(formData);
      setSending(false);
    }, 2000);
  };

  return (
    <div className="p-5 max-w-2xl mx-auto bg-white rounded-xl md:p-10">
      {formContent === undefined ? (
        <Form formData={formData} onSubmit={sendForm} sending={sending} />
      ) : (
        <Confirmation
          formData={formData}
          formContent={formContent}
          setFormContent={setFormContent}
        />
      )}
    </div>
  );
}

export default Survey;
