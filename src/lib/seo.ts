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
    name: "Медицинский центр «Медис»",
    legalName: "ООО «МЕДИС»",
    url: SITE_URL,
    image: `${SITE_URL}${OG_IMAGE}`,
    logo: `${SITE_URL}/logo.webp`,
    telephone: "+7-928-555-88-18",
    email: EMAIL,
    address: {
        "@type": "PostalAddress",
        streetAddress: "ул. Ахульго, 77",
        addressLocality: "Махачкала",
        addressRegion: "Республика Дагестан",
        addressCountry: "RU",
    },
    openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "09:00",
        closes: "23:00",
    },
    medicalSpecialty: ["Urology", "Gynecology", "Diagnostic"],
    identifier: {
        "@type": "PropertyValue",
        name: "Лицензия",
        value: "№ ЛО-05-01-002258 от 21.11.2019 г.",
    },
    additionalProperty: [
        {
            "@type": "PropertyValue",
            name: "Лицензия",
            value: "№ ЛО-05-01-002258 от 21.11.2019 г.",
        },
        {
            "@type": "PropertyValue",
            name: "ИНН",
            value: "0573010778",
        },
    ],
    priceRange: "₽₽",
};

export function physicianJsonLd(doctor: {
    name: string;
    slug: string;
    specialization: string;
    photoUrl?: string | null;
    bio?: string | null;
    experienceYears?: number | null;
}) {
    const image = doctor.photoUrl
        ? (doctor.photoUrl.startsWith("http") ? doctor.photoUrl : `${SITE_URL}${doctor.photoUrl.startsWith("/") ? "" : "/"}${doctor.photoUrl}`)
        : undefined;

    return {
        "@context": "https://schema.org",
        "@type": "Physician",
        name: doctor.name,
        medicalSpecialty: doctor.specialization,
        description: doctor.bio || undefined,
        image,
        url: `${SITE_URL}/doctors/${doctor.slug}`,
        ...(doctor.experienceYears ? { yearsOfExperience: doctor.experienceYears } : {}),
        worksFor: {
            "@type": "MedicalClinic",
            name: "Медицинский центр «Медис»",
            url: SITE_URL,
            telephone: "+7-928-555-88-18",
        },
    };
}
