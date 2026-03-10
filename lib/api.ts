import { ContactFormData, LeadFormData, ShortLeadFormData } from "@/types";

type ApiResponse = {
  error?: string;
  [key: string]: unknown;
};

/**
 * Submit lead form data
 */
export async function submitLeadForm(data: LeadFormData) {
  try {
    const response = await fetch("/api/leads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = (await response.json()) as ApiResponse;

    if (!response.ok) {
      const message = typeof result.error === "string" ? result.error : "Failed to submit form";
      throw new Error(message);
    }

    return result;
  } catch (error) {
    console.error("Error submitting form:", error);
    throw error;
  }
}

/**
 * Submit short lead form data
 */
export async function submitShortLeadForm(data: ShortLeadFormData) {
  try {
    const response = await fetch("/api/leads/short", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = (await response.json()) as ApiResponse;

    if (!response.ok) {
      const message = typeof result.error === "string" ? result.error : "Failed to submit form";
      throw new Error(message);
    }

    return result;
  } catch (error) {
    console.error("Error submitting form:", error);
    throw error;
  }
}

/**
 * Submit contact form data
 */
export async function submitContactForm(data: ContactFormData) {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = (await response.json()) as ApiResponse;

    if (!response.ok) {
      const message = typeof result.error === "string" ? result.error : "Failed to submit contact form";
      throw new Error(message);
    }

    return result;
  } catch (error) {
    console.error("Error submitting contact form:", error);
    throw error;
  }
}
