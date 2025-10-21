// Google Analytics 4 Configuration
export const GA_TRACKING_ID =
  import.meta.env.VITE_GA_TRACKING_ID || "G-XXXXXXXXXX";

// Facebook Pixel Configuration
export const FACEBOOK_PIXEL_ID =
  import.meta.env.VITE_FACEBOOK_PIXEL_ID || "XXXXXXXXXXXXXXX";

// Initialize Google Analytics
export const initGA = () => {
  // Проверяем согласие на куки
  const cookieConsent = localStorage.getItem("cookieConsent");
  if (cookieConsent !== "accepted") return;

  if (typeof window !== "undefined" && GA_TRACKING_ID) {
    // Load Google Analytics script
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    document.head.appendChild(script1);

    // Initialize gtag
    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_TRACKING_ID}', {
        page_title: document.title,
        page_location: window.location.href,
      });
    `;
    document.head.appendChild(script2);
  }
};

// Track page views
export const trackPageView = (url: string, title: string) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("config", GA_TRACKING_ID, {
      page_path: url,
      page_title: title,
    });
  }
};

// Track events
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track form submissions
export const trackFormSubmission = (formName: string) => {
  trackEvent("form_submit", "engagement", formName);
};

// Track button clicks
export const trackButtonClick = (buttonName: string) => {
  trackEvent("click", "engagement", buttonName);
};

// Track phone calls
export const trackPhoneCall = () => {
  trackEvent("phone_call", "contact", "phone_number");
};

// Track email clicks
export const trackEmailClick = () => {
  trackEvent("email_click", "contact", "email_address");
};

// Initialize Facebook Pixel
export const initFacebookPixel = () => {
  // Проверяем согласие на куки
  const cookieConsent = localStorage.getItem("cookieConsent");
  if (cookieConsent !== "accepted") return;

  if (
    typeof window !== "undefined" &&
    FACEBOOK_PIXEL_ID &&
    FACEBOOK_PIXEL_ID !== "XXXXXXXXXXXXXXX"
  ) {
    const script = document.createElement("script");
    script.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '${FACEBOOK_PIXEL_ID}');
      fbq('track', 'PageView');
    `;
    document.head.appendChild(script);
  }
};

// Track Facebook Pixel events
export const trackFacebookEvent = (eventName: string, parameters?: any) => {
  if (typeof window !== "undefined" && (window as any).fbq) {
    (window as any).fbq("track", eventName, parameters);
  }
};

// Initialize all analytics
export const initAnalytics = () => {
  initGA();
  initFacebookPixel();
};

// Re-initialize analytics after cookie consent
export const initAnalyticsAfterConsent = () => {
  initGA();
  initFacebookPixel();
};
