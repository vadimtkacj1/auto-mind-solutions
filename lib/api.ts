import { LeadFormData, ShortLeadFormData } from "@/types";

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

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || "Failed to submit form");
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

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || "Failed to submit form");
    }

    return result;
  } catch (error) {
    console.error("Error submitting form:", error);
    throw error;
  }
}
