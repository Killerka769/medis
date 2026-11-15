type DoctorLike = {
    id: string;
    name: string;
    specialization: string;
    isActive?: boolean;
};

function bySpec<T extends DoctorLike>(doctors: T[], ...needles: string[]) {
    return doctors.filter((doctor) => {
        const spec = doctor.specialization.toLowerCase();
        return needles.some((needle) => spec.includes(needle));
    });
}

function uniqueDoctors<T extends DoctorLike>(doctors: T[]) {
    const seen = new Set<string>();
    return doctors.filter((doctor) => {
        const id = String(doctor.id);
        if (seen.has(id)) return false;
        seen.add(id);
        return true;
    });
}

export function matchDoctorsForService<T extends DoctorLike>(
    categoryTitle: string,
    serviceTitle: string,
    doctors: T[],
): T[] {
    const title = serviceTitle.toLowerCase();
    const category = categoryTitle.toLowerCase();
    const active = doctors.filter((doctor) => doctor.isActive !== false);

    const urologists = bySpec(active, "уролог");
    const gynecologists = bySpec(active, "гинеколог");
    const phlebologists = bySpec(active, "флеболог");
    const dermatologists = bySpec(active, "дерматолог");
    const geneticists = bySpec(active, "генетик");
    const endocrinologists = bySpec(active, "эндокрин");
    const sonographers = bySpec(active, "узи");
    const cardiologists = bySpec(active, "кардиолог");

    if (category.includes("консультац")) {
        if (title.includes("уролог") || title.includes("андролог") || title.includes("бесплод")) return urologists;
        if (title.includes("гинеколог")) return gynecologists;
        if (title.includes("флеболог")) return phlebologists;
        if (title.includes("дерматолог")) return dermatologists;
        if (title.includes("генетик")) return geneticists;
        if (title.includes("эндокрин")) return endocrinologists;
        if (title.includes("кардиолог")) return cardiologists;
    }

    if (category.includes("узи")) {
        if (title.includes("трансвагиналь") || title.includes("молочн")) {
            return uniqueDoctors([...sonographers, ...gynecologists]);
        }
        if (
            title.includes("предстатель") ||
            title.includes("мошонк") ||
            title.includes("трузи") ||
            title.includes("трансректаль") ||
            title.includes("почек")
        ) {
            return uniqueDoctors([...sonographers, ...urologists]);
        }
        if (title.includes("щитовидн")) {
            return uniqueDoctors([...sonographers, ...endocrinologists]);
        }
        if (title.includes("сердц") || title.includes("экг") || title.includes("кардио")) {
            return uniqueDoctors([...sonographers, ...cardiologists]);
        }
        return sonographers;
    }

    if (category.includes("амбулаторн")) {
        if (title.includes("атером")) return dermatologists;
        if (title.includes("плевраль")) return uniqueDoctors([...urologists, ...dermatologists]);
        return urologists;
    }

    if (category.includes("физио")) return urologists;

    if (title.includes("фаллопротез") || category.includes("операц")) {
        const surgeon = active.filter((doctor) => doctor.name.toLowerCase().includes("исмаилов абдул"));
        return surgeon.length ? surgeon : urologists;
    }

    if (category.includes("процедурн")) return active;

    return active;
}
