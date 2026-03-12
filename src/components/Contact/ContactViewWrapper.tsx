"use client";

import { useContactForm } from "@/hooks/useContactForm";
import { ContactView } from "./ContactView";

export function ContactViewWrapper() {
  const {
    formData,
    setName,
    setPhone,
    handleSubmit,
    isSubmitting,
    isSubmitDisabled,
    errorMessage,
    showSuccessPopup,
    setShowSuccessPopup,
  } = useContactForm();

  return (
    <ContactView
      formData={formData}
      onNameChange={setName}
      onPhoneChange={setPhone}
      onSubmit={handleSubmit}
      isSubmitting={isSubmitting}
      isSubmitDisabled={isSubmitDisabled}
      errorMessage={errorMessage}
      showSuccessPopup={showSuccessPopup}
      onSuccessPopupChange={setShowSuccessPopup}
    />
  );
}
