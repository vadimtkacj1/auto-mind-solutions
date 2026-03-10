"use client";

import { useCallback, useMemo, useState, type FormEvent } from "react";
import type { ContactFormData } from "@/types";
import { submitContactForm } from "@/lib/api";
import { validateIsraeliPhone } from "@/lib/utils";

const INITIAL_CONTACT_FORM_DATA: ContactFormData = {
  name: "",
  phone: "",
};

type UseContactFormResult = {
  formData: ContactFormData;
  setName: (value: string) => void;
  setPhone: (value: string) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  isSubmitting: boolean;
  isSubmitDisabled: boolean;
  errorMessage: string;
  showSuccessPopup: boolean;
  setShowSuccessPopup: (open: boolean) => void;
};

export function useContactForm(): UseContactFormResult {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_CONTACT_FORM_DATA);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const setName = useCallback((value: string) => {
    setFormData((prev) => ({ ...prev, name: value }));
  }, []);

  const setPhone = useCallback((value: string) => {
    setFormData((prev) => ({ ...prev, phone: value }));
  }, []);

  const isSubmitDisabled = useMemo(() => {
    return isSubmitting || !formData.name || !formData.phone;
  }, [formData.name, formData.phone, isSubmitting]);

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setErrorMessage("");

      if (isSubmitDisabled) return;

      if (!validateIsraeliPhone(formData.phone)) {
        setErrorMessage("מספר טלפון לא תקין. נא להזין מספר ישראלי תקין");
        return;
      }

      setIsSubmitting(true);

      try {
        await submitContactForm(formData);
        setShowSuccessPopup(true);
        setFormData(INITIAL_CONTACT_FORM_DATA);
      } catch (err) {
        const message = err instanceof Error ? err.message : "אירעה שגיאה בשליחת הטופס. נסו שוב";
        setErrorMessage(message);
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData, isSubmitDisabled],
  );

  return {
    formData,
    setName,
    setPhone,
    handleSubmit,
    isSubmitting,
    isSubmitDisabled,
    errorMessage,
    showSuccessPopup,
    setShowSuccessPopup,
  };
}
