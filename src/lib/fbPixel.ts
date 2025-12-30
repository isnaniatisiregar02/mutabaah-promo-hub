// Facebook Pixel Utility
const FB_PIXEL_ID = "1226897449337706";

declare global {
  interface Window {
    fbq: (...args: unknown[]) => void;
    _fbq: unknown;
  }
}

// Initialize Facebook Pixel
export const initFacebookPixel = () => {
  if (typeof window !== "undefined" && !window.fbq) {
    const f = window;
    const b = document;
    const e = "script";
    
    const n = function (...args: unknown[]) {
      n.callMethod ? n.callMethod.apply(n, args) : n.queue.push(args);
    } as typeof window.fbq & { callMethod?: (...args: unknown[]) => void; queue: unknown[]; loaded: boolean; version: string; push: (...args: unknown[]) => void };
    
    n.push = n;
    n.loaded = true;
    n.version = "2.0";
    n.queue = [];
    f.fbq = n;

    const t = b.createElement(e) as HTMLScriptElement;
    t.async = true;
    t.src = "https://connect.facebook.net/en_US/fbevents.js";
    const s = b.getElementsByTagName(e)[0];
    s?.parentNode?.insertBefore(t, s);

    window.fbq("init", FB_PIXEL_ID);
  }
};

// Track Page View
export const trackPageView = () => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "PageView");
  }
};

// Track View Content
export const trackViewContent = () => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "ViewContent", {
      content_name: "Mutabaah Hafalan Quran Landing Page",
      content_category: "Landing Page",
    });
  }
};

// Track Add To Cart
export const trackAddToCart = () => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "AddToCart", {
      content_name: "Mutabaah Hafalan Quran",
      content_category: "Digital Product",
      value: 99000,
      currency: "IDR",
    });
  }
};
