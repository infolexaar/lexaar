import { useState } from "react";
import { trackFormSubmission, trackFacebookEvent } from "../utils/analytics";
import type { FormData } from "../types";
import { sendContactEmail } from "../services/firebaseEmailService";

interface UseContactFormOptions {
  onSuccess?: () => void;
}

export const useContactForm = (options?: UseContactFormOptions) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Track form submission
    trackFormSubmission("contact_form");
    trackFacebookEvent("Lead", {
      content_name: "Contact Form Submission",
      content_category: "Kitchen Furniture",
      value: 1,
      currency: "EUR",
    });

    try {
      // Отправляем email
      const emailSent = await sendContactEmail({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        message: "Cerere de ofertă pentru bucătării la comandă",
      });

      if (emailSent) {
        setIsSubmitted(true);

        // Автоматически очистить форму через 3 секунды
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: "", phone: "", email: "" });
          if (options?.onSuccess) {
            options.onSuccess();
          }
        }, 3000);
      } else {
        alert(
          "A apărut o eroare la trimiterea mesajului. Vă rugăm să încercați din nou."
        );
      }
    } catch {
      alert(
        "A apărut o eroare la trimiterea mesajului. Vă rugăm să încercați din nou."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return {
    formData,
    isSubmitting,
    isSubmitted,
    handleSubmit,
    handleChange,
  };
};






