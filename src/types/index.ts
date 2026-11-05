export type TUser = {
    id: string,
    email: string,
    phone: string,
    password?: string,
    username: string | null,
    role: "patient" | "admin",
    isBanned: boolean;
    bannedUntil: string | null;
    banReason: string | null;
    createdAt: Date | string,
    updatedAt: Date | string
}

export type TDoctors = {
    id: string,
    name: string,
    slug: string,
    specialization: string,
    experienceYears: number,
    education: string,
    certificates: string[],
    bio?:string,
    photoUrl?: string,
    isActive: boolean,
    createdAt: Date | string,
    updatedAt: Date | string,
  
    appointments: TAppointments[]
    // services:   DoctorService[]
}

export type TServiceCategory = {
    id: string,
    title: string,
    slug: string,
    sortOrder: number,
    isActive: boolean,
    createdAt: Date | string,
    updatedAt: Date | string
  
    services: TServices[]
  }

export type TArticleCategory = {
    id: string,
    title: string,
    slug: string,
    sortOrder: number,
    isActive: boolean,
    createdAt: Date | string,
    updatedAt: Date | string
}

export type TProductCategory = {
    id: string;
    title: string;
    slug: string;
    sortOrder: number;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}

export type TArticles = {
    id: string;
    title: string;
    slug: string;
    excerpt: string | null;
    content: string;
    coverUrl: string | null;
    categoryId: string | null;
    status: "draft" | "published";
    publishedAt: string | null;
    createdAt: string;
    updatedAt: string;
}

export type TProducts = {
    id: string;
    title: string;
    slug: string;
    description: string | null;
    content: string | null;
    price: number;
    categoryId: string;
    imageUrl: string | null;
    images: string[];
    inStock: boolean;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}

export type TServices = {
    id: string;
    title: string;
    slug: string;
    description: string | null;
    content: string | null;
    price: number | null;
    priceFrom: boolean;
    categoryId: string;
    isOms: boolean;
    duration: number | null;
    imageUrl: string | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    doctors?: { doctorId: string }[]; 
}

export type TAppointments = {
    id: string;
    patientId: string;
    doctorId: string;
    serviceId: string;
    date: string;
    status: "pending" | "confirmed" | "cancelled" | "completed" | "no_show";
    comment: string | null;
    adminComment: string | null;
    createdAt: string;
    updatedAt: string;
    patient?: { username: string | null; phone: string };
    doctor?: { name: string };
    service?: { title: string };
}

export type TProductRequests = {
    id: string;
    productId: string;
    userId: string;
    name: string;
    phone: string;
    comment: string | null;
    status: "new" | "processed" | "done";
    createdAt: string;
    updatedAt: string;
    product?: { title: string };
    user?: { username: string | null; email: string };
}