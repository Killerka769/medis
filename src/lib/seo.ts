export const SITE_URL = "https://medis05.ru";
export const SITE_NAME = "Медис";
export const SITE_TITLE = "Медицинский центр Медис в Махачкале";
export const SITE_DESCRIPTION = "Платный приём врачей, УЗИ, урология, гинекология и процедуры в Махачкале. Запись онлайн, ежедневно с 09:00 до 23:00. ул. Ахульго, 77.";
export const OG_IMAGE = "/hero-v2.webp";
export const PHONE = "+79285558818";
export const PHONE_DISPLAY = "+7 928 555-88-18";
export const EMAIL = "medis-medcentr@mail.ru";
export const ADDRESS = "г. Махачкала, ул. Ахульго, 77";

export const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: "Медицинский центр Медис",
    url: SITE_URL,
    image: `${SITE_URL}${OG_IMAGE}`,
    logo: `${SITE_URL}/logo.webp`,
    telephone: PHONE_DISPLAY,
    email: EMAIL,
    address: {
        "@type": "PostalAddress",
        streetAddress: "ул. Ахульго, 77",
        addressLocality: "Махачкала",
        addressRegion: "Республика Дагестан",
        addressCountry: "RU",
    },
    openingHours: "Mo-Su 09:00-23:00",
    priceRange: "₽₽",
};
