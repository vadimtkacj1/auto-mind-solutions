"use client";

import { useCallback, useState, type ChangeEvent, type FormEvent } from "react";
import { submitLeadForm } from "@/lib/api";
import type { LeadFormData } from "@/types";

const INITIAL_LEAD_FORM_DATA: LeadFormData = {
  name: "",
  phone: "",
  email: "",
  businessType: "",
};

type LeadFormFieldName = keyof LeadFormData;

function isLeadFormFieldName(value: string): value is LeadFormFieldName {
  return value === "name" || value === "phone" || value === "email" || value === "businessType";
}

type UseLeadFormResult = {
  formData: LeadFormData;
  setField: (name: LeadFormFieldName, value: string) => void;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent) => Promise<void>;
  isSubmitting: boolean;
  error: string | null;
  showSuccessModal: boolean;
  closeSuccessModal: () => void;
};

export function useLeadForm(): UseLeadFormResult {
  const [formData, setFormData] = useState<LeadFormData>(INITIAL_LEAD_FORM_DATA);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const setField = useCallback((name: LeadFormFieldName, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const fieldName = e.target.name;
      if (!isLeadFormFieldName(fieldName)) return;
      setField(fieldName, e.target.value);
    },
    [setField],
  );

  const closeSuccessModal = useCallback(() => {
    setShowSuccessModal(false);
  }, []);

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      setError(null);
      setIsSubmitting(true);

      try {
        await submitLeadForm(formData);
        setShowSuccessModal(true);
        setFormData(INITIAL_LEAD_FORM_DATA);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "שגיאה בשליחת הטופס. אנא נסה שוב.";
        setError(errorMessage);
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData],
  );

  return {
    formData,
    setField,
    handleInputChange,
    handleSubmit,
    isSubmitting,
    error,
    showSuccessModal,
    closeSuccessModal,
  };
}
