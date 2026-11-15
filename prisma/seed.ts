import "dotenv/config";
import { db, connectDatabase } from "../src/prisma/db.ts";

function slugify(text: string) {
    const dictionary: Record<string, string> = {
        а: "a", б: "b", в: "v", г: "g", д: "d", е: "e", ё: "yo",
        ж: "zh", з: "z", и: "i", й: "y", к: "k", л: "l", м: "m",
        н: "n", о: "o", п: "p", р: "r", с: "s", т: "t", у: "u",
        ф: "f", х: "kh", ц: "ts", ч: "ch", ш: "sh", щ: "shch",
        ь: "", ы: "y", ъ: "", э: "e", ю: "yu", я: "ya",
    };

    return text
        .toString()
        .toLowerCase()
        .trim()
        .split("")
        .map((char) => (dictionary[char] !== undefined ? dictionary[char] : char))
        .join("")
        .replace(/[^a-z0-9 -]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-+|-+$/g, "");
}

type SeedService = {
    title: string;
    price?: number | null;
    priceFrom?: boolean;
    description?: string | null;
    content?: string | null;
    duration?: number | null;
};

const CATEGORIES = [
    { title: "Консультации", sortOrder: 1 },
    { title: "УЗИ-диагностика", sortOrder: 2 },
    { title: "Амбулаторные процедуры", sortOrder: 3 },
    { title: "Физиопроцедуры", sortOrder: 4 },
    { title: "Процедурный кабинет", sortOrder: 5 },
    { title: "Урология/Операции", sortOrder: 6 },
];

const DOCTORS = [
    {
        name: "Исмаилов Абдул Абакарович",
        specialization: "Врач-уролог",
        experienceYears: 46,
        photoUrl: "/ismailov.webp",
        bio: "Практикующий уролог, хирург. Проводит диагностику и лечение бесплодия, ИППП. Работает с 1980 года.",
    },
    {
        name: "Качаев Эмин Рагимович",
        specialization: "Врач-уролог высшей категории, андролог",
        experienceYears: 29,
        photoUrl: null as string | null,
        bio: "Урологическая патология, лечение воспалительных заболеваний (уретриты, циститы, простатиты, включая ФТЛ), ИППП (урогенитальные инфекции), консервативное лечение недержания мочи у женщин, диагностика и лечение различных форм бесплодия, предгравидарная подготовка, подготовка пациентов к вспомогательным репродуктивным технологиям, андрология (исключение сексология).",
        tags: ["Мужское здоровье", "Бесплодие", "Простатит", "Урогенитальные инфекции"],
    },
    {
        name: "Курбанов Руслан Аладинович",
        specialization: "Врач-уролог",
        experienceYears: 0,
        photoUrl: null,
        bio: null,
    },
    {
        name: "Таирова Марина Абдуловна",
        specialization: "Врач-гинеколог, УЗИ-специалист",
        experienceYears: 0,
        photoUrl: null,
        bio: null,
    },
    {
        name: "Идрисов Хаджимурад Абдулаевич",
        specialization: "Врач-флеболог",
        experienceYears: 0,
        photoUrl: null,
        bio: null,
    },
    {
        name: "Исмаилова Земфира Латифовна",
        specialization: "Врач-дерматолог",
        experienceYears: 0,
        photoUrl: null,
        bio: null,
    },
    {
        name: "Каласов Нурмагомед Магомедович",
        specialization: "Врач-генетик",
        experienceYears: 0,
        photoUrl: null,
        bio: null,
    },
    {
        name: "Исаева Ханума Вазировна",
        specialization: "Врач-эндокринолог",
        experienceYears: 0,
        photoUrl: null,
        bio: null,
    },
    {
        name: "Раджабова Женнет Мурадагаевна",
        specialization: "УЗИ-специалист",
        experienceYears: 0,
        photoUrl: null,
        bio: null,
    },
];

const SERVICES: Record<string, SeedService[]> = {
    "Консультации": [
        { title: "Консультация уролога первичная", price: 2500 },
        { title: "Консультация уролога в течение 14 дней", price: 1000 },
        { title: "Консультация андролога первичная", price: 2500 },
        { title: "Консультация андролога в течение 14 дней", price: 1000 },
        { title: "Консультация по мужскому бесплодию", price: 5500 },
        { title: "Консультация гинеколога первичная", price: 2500 },
        { title: "Консультация гинеколога в течение 7 дней", price: 0 },
        { title: "Консультация кардиолога первичная", price: 2500 },
        { title: "Консультация кардиолога в течение 7 дней", price: 0 },
        { title: "Консультация генетика", price: 2500 },
        { title: "Консультация генетика в течение 7 дней", price: 0 },
        { title: "Консультация дерматолога", price: 2500 },
        { title: "Консультация дерматолога в течение 7 дней", price: 0 },
        { title: "Консультация флеболога", price: 2500 },
        { title: "Консультация флеболога в течение 7 дней", price: 0 },
    ],
    "УЗИ-диагностика": [
        { title: "УЗИ сердца", price: 2000 },
        { title: "УЗИ органов малого таза (трансвагинальное)", price: 1600 },
        { title: "УЗИ органов малого таза (трансректальное)", price: 1800 },
        { title: "УЗИ комплексное", price: 4000, description: "По акции 3000" },
        { title: "УЗИ предстательной железы", price: 1500 },
        { title: "УЗИ органов мошонки", price: 1500 },
        { title: "УЗИ молочных желез", price: 1500 },
        { title: "УЗИ почек, мочевого пузыря, надпочечников", price: 1600 },
        { title: "ТРУЗИ", price: 2000 },
        { title: "УЗИ щитовидной железы", price: 1000 },
    ],
    "Амбулаторные процедуры": [
        { title: "Катетеризация мочевого пузыря", price: 2000 },
        { title: "Инстилляция мочевого пузыря", price: 2500 },
        { title: "Забор урологического материала", price: 1000 },
        { title: "Замена эпицистостомы", price: 1500 },
        { title: "Установка цистостомы", price: 10000 },
        { title: "Удаление эпицистостомы", price: 1500 },
        { title: "Пункция плевральной полости", price: 5000 },
        { title: "Пункция кисты почки", price: 10000, priceFrom: true },
        { title: "Цистоскопия", price: 7000 },
        { title: "Уретероскопия", price: 7000 },
        { title: "Удаление мочеточникового стента", price: 7500 },
        { title: "Удаление атеромы", price: 4000, priceFrom: true },
        { title: "Варикоцеле", price: 20000 },
        { title: "Обрезание", price: 10000 },
    ],
    "Физиопроцедуры": [
        { title: "Интратон 5 электростимулятор", price: 2000 },
        { title: "Ректальный лазер «Матрикс Уролог»", price: 1000 },
        { title: "Магнитотерапия", price: 500 },
        { title: "Электрофорез Поток - 1", price: 1000 },
        { title: "Массаж предстательной железы", price: 1000 },
        { title: "Инстилляции уретры", price: 500 },
        { title: "Фалломассаж", price: 1000 },
    ],
    "Процедурный кабинет": [
        { title: "Внутривенное капельное введение лекарственного раствора взрослому", price: 400 },
        { title: "Забор крови", price: 200 },
        { title: "Инъекция внутримышечная", price: 100 },
        { title: "Снятие швов", price: 500 },
        { title: "ЭКГ", price: 350, description: "с расшифровкой - 700" },
        { title: "Инъекция внутривенная", price: 200 },
    ],
    "Урология/Операции": [
        {
            title: "Фаллопротезирование",
            price: null,
            duration: null,
            description: "В нашем центре Исмаилов Абдул Абакарович проводит уникальную операцию — фаллопротезирование. В Махачкале и Республике Дагестан больше нигде эту операцию не делают.",
            content: "Фаллопротезирование — операция при эректильной дисфункции, когда консервативное лечение уже не даёт результата. В медицинском центре «Медис» её проводит врач-уролог Исмаилов Абдул Абакарович.\n\nЭто единственная клиника в Махачкале и Республике Дагестан, где выполняют фаллопротезирование. Пациентам из региона не нужно уезжать в другие города: консультация, обследование и операция доступны на месте.\n\nВид протеза и объём вмешательства врач подбирает индивидуально после очного осмотра. Стоимость уточняется на консультации.",
        },
    ],
};

async function upsertCategory(title: string, sortOrder: number) {
    const slug = slugify(title);
    const existing = await db.orm.public.ServiceCategory.where({ slug }).first();

    if (existing) {
        await db.orm.public.ServiceCategory.where({ id: existing.id }).update({
            title,
            slug,
            sortOrder,
            isActive: true,
        });
        return existing.id as string;
    }

    const created = await db.orm.public.ServiceCategory.create({
        title,
        slug,
        sortOrder,
        isActive: true,
    });
    return created.id as string;
}

async function upsertDoctor(doctor: (typeof DOCTORS)[number] & { tags?: string[] }) {
    const slug = slugify(doctor.name);
    const existing = await db.orm.public.Doctor.where({ slug }).first();
    const education = doctor.tags
        ? { text: typeof existing?.education === "object" && existing?.education && "text" in (existing.education as object) ? String((existing.education as { text?: string }).text || "") : "", tags: doctor.tags }
        : existing?.education ?? null;

    const payload = {
        name: doctor.name,
        slug,
        specialization: doctor.specialization,
        experienceYears: doctor.experienceYears,
        bio: doctor.bio ?? existing?.bio ?? null,
        photoUrl: existing?.photoUrl || doctor.photoUrl,
        isActive: true,
        education,
    };

    if (existing) {
        await db.orm.public.Doctor.where({ id: existing.id }).update(payload);
        return existing.id as string;
    }

    const created = await db.orm.public.Doctor.create({
        ...payload,
        certificates: [],
    });
    return created.id as string;
}

async function upsertService(categoryId: string, service: SeedService) {
    const slug = slugify(service.title);
    const payload = {
        title: service.title,
        slug,
        description: service.description ?? null,
        content: service.content ?? null,
        price: service.price ?? null,
        priceFrom: service.priceFrom === true,
        categoryId,
        isOms: false,
        duration: service.duration === undefined ? 30 : service.duration,
        imageUrl: null,
        isActive: true,
    };

    const existing = await db.orm.public.Service.where({ slug }).first();
    if (existing) {
        await db.orm.public.Service.where({ id: existing.id }).update(payload);
        return existing.id as string;
    }

    const created = await db.orm.public.Service.create(payload);
    return created.id as string;
}

function doctorIdsByNames(doctorIds: Record<string, string>, names: string[]) {
    return names.map((name) => doctorIds[name]).filter(Boolean);
}

function doctorsForSeedService(
    categoryTitle: string,
    serviceTitle: string,
    doctorIds: Record<string, string>,
): string[] {
    const title = serviceTitle.toLowerCase();
    const urologists = doctorIdsByNames(doctorIds, [
        "Исмаилов Абдул Абакарович",
        "Качаев Эмин Рагимович",
        "Курбанов Руслан Аладинович",
    ]);
    const gynecologist = doctorIdsByNames(doctorIds, ["Таирова Марина Абдуловна"]);
    const phlebologist = doctorIdsByNames(doctorIds, ["Идрисов Хаджимурад Абдулаевич"]);
    const dermatologist = doctorIdsByNames(doctorIds, ["Исмаилова Земфира Латифовна"]);
    const geneticist = doctorIdsByNames(doctorIds, ["Каласов Нурмагомед Магомедович"]);
    const endocrinologist = doctorIdsByNames(doctorIds, ["Исаева Ханума Вазировна"]);
    const sonographer = doctorIdsByNames(doctorIds, ["Раджабова Женнет Мурадагаевна"]);

    if (categoryTitle === "Консультации") {
        if (title.includes("уролог") || title.includes("андролог") || title.includes("бесплод")) return urologists;
        if (title.includes("гинеколог")) return gynecologist;
        if (title.includes("флеболог")) return phlebologist;
        if (title.includes("дерматолог")) return dermatologist;
        if (title.includes("генетик")) return geneticist;
        if (title.includes("эндокрин")) return endocrinologist;
        return [];
    }

    if (categoryTitle === "УЗИ-диагностика") {
        if (title.includes("трансвагиналь") || title.includes("молочн")) {
            return [...new Set([...sonographer, ...gynecologist])];
        }
        if (
            title.includes("предстатель") ||
            title.includes("мошонк") ||
            title.includes("трузи") ||
            title.includes("трансректаль") ||
            title.includes("почек")
        ) {
            return [...new Set([...sonographer, ...urologists])];
        }
        if (title.includes("щитовидн")) {
            return [...new Set([...sonographer, ...endocrinologist])];
        }
        return sonographer;
    }

    if (categoryTitle === "Амбулаторные процедуры") {
        if (title.includes("атером")) return dermatologist;
        if (title.includes("плевраль")) return [];
        return urologists;
    }

    if (categoryTitle === "Физиопроцедуры") return urologists;

    if (categoryTitle === "Урология/Операции" || title.includes("фаллопротез")) {
        return doctorIdsByNames(doctorIds, ["Исмаилов Абдул Абакарович"]);
    }

    return [];
}

async function linkDoctorToService(doctorId: string, serviceId: string) {
    const existing = await db.orm.public.DoctorService.where({ doctorId, serviceId }).first();
    if (existing) return false;
    await db.orm.public.DoctorService.create({ doctorId, serviceId });
    return true;
}

async function main() {
    await connectDatabase();

    const categoryIds: Record<string, string> = {};
    for (const category of CATEGORIES) {
        const id = await upsertCategory(category.title, category.sortOrder);
        categoryIds[category.title] = id;
        console.log(`Категория: ${category.title}`);
    }

    const doctorIds: Record<string, string> = {};
    for (const doctor of DOCTORS) {
        const id = await upsertDoctor(doctor);
        doctorIds[doctor.name] = id;
        console.log(`Врач: ${doctor.name}`);
    }

    let linkedCount = 0;
    for (const [categoryTitle, services] of Object.entries(SERVICES)) {
        const categoryId = categoryIds[categoryTitle];
        if (!categoryId) {
            throw new Error(`Категория не найдена: ${categoryTitle}`);
        }
        for (const service of services) {
            const serviceId = await upsertService(categoryId, service);
            console.log(`Услуга: ${service.title}`);

            const linkedDoctors = doctorsForSeedService(categoryTitle, service.title, doctorIds);
            for (const doctorId of linkedDoctors) {
                const created = await linkDoctorToService(doctorId, serviceId);
                if (created) linkedCount += 1;
            }
        }
    }

    console.log(`Связей врач–услуга создано: ${linkedCount}`);
    console.log("Сиды успешно применены.");
}

main()
    .catch((error) => {
        console.error("Ошибка сида:", error);
        process.exitCode = 1;
    })
    .finally(async () => {
        process.exit();
    });
