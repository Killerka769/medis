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
    price: number;
    priceFrom?: boolean;
    description?: string | null;
};

const CATEGORIES = [
    { title: "Консультации", sortOrder: 1 },
    { title: "УЗИ-диагностика", sortOrder: 2 },
    { title: "Амбулаторные процедуры", sortOrder: 3 },
    { title: "Физиопроцедуры", sortOrder: 4 },
    { title: "Процедурный кабинет", sortOrder: 5 },
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
        specialization: "Врач-уролог",
        experienceYears: 0,
        photoUrl: null as string | null,
        bio: null as string | null,
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

async function upsertDoctor(doctor: (typeof DOCTORS)[number]) {
    const slug = slugify(doctor.name);
    const payload = {
        name: doctor.name,
        slug,
        specialization: doctor.specialization,
        experienceYears: doctor.experienceYears,
        education: null,
        certificates: [] as string[],
        bio: doctor.bio,
        photoUrl: doctor.photoUrl,
        isActive: true,
    };

    const existing = await db.orm.public.Doctor.where({ slug }).first();
    if (existing) {
        await db.orm.public.Doctor.where({ id: existing.id }).update(payload);
        return existing.id as string;
    }

    const created = await db.orm.public.Doctor.create(payload);
    return created.id as string;
}

async function upsertService(categoryId: string, service: SeedService) {
    const slug = slugify(service.title);
    const payload = {
        title: service.title,
        slug,
        description: service.description ?? null,
        content: null,
        price: service.price,
        priceFrom: service.priceFrom === true,
        categoryId,
        isOms: false,
        duration: 30,
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

async function main() {
    await connectDatabase();

    const categoryIds: Record<string, string> = {};
    for (const category of CATEGORIES) {
        const id = await upsertCategory(category.title, category.sortOrder);
        categoryIds[category.title] = id;
        console.log(`Категория: ${category.title}`);
    }

    for (const doctor of DOCTORS) {
        await upsertDoctor(doctor);
        console.log(`Врач: ${doctor.name}`);
    }

    for (const [categoryTitle, services] of Object.entries(SERVICES)) {
        const categoryId = categoryIds[categoryTitle];
        if (!categoryId) {
            throw new Error(`Категория не найдена: ${categoryTitle}`);
        }
        for (const service of services) {
            await upsertService(categoryId, service);
            console.log(`Услуга: ${service.title}`);
        }
    }

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
