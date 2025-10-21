// Firebase Functions URL
const FIREBASE_FUNCTIONS_URL =
  "https://sendcontactemail-64uvmgchzq-uc.a.run.app";

export interface EmailData {
  name: string;
  phone: string;
  email: string;
  message?: string;
}

export const sendContactEmail = async (data: EmailData): Promise<boolean> => {
  try {
    const response = await fetch(FIREBASE_FUNCTIONS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        phone: data.phone,
        email: data.email,
        message: data.message || "Cerere de ofertă pentru bucătării la comandă",
      }),
    });

    if (!response.ok) {
      return false;
    }

    return true;
  } catch (error) {
    return false;
  }
};

// Fallback method for local development
export const sendEmailFallback = async (data: EmailData): Promise<boolean> => {
  try {
    // Для локальной разработки можно использовать Formspree или другой сервис
    const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        phone: data.phone,
        email: data.email,
        message: data.message || "Cerere de ofertă pentru bucătării la comandă",
        _subject: "Nouă cerere de ofertă - LexAar Bucătării",
      }),
    });

    return response.ok;
  } catch (error) {
    return false;
  }
};
