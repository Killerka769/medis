export function getDoctorTags(doctor: { education?: unknown }): string[] {
    const education = doctor.education;
    if (!education || typeof education !== "object") return [];
    const tags = (education as { tags?: unknown }).tags;
    if (!Array.isArray(tags)) return [];
    return tags.map((tag) => String(tag).trim()).filter(Boolean);
}

export function parseTagLines(value: string) {
    return value.split("\n").map((item) => item.trim()).filter(Boolean);
}
