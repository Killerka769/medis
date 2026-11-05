"use client"
import Link from "next/link";

export default function AdminPanelClient() {
    
    return<main>
    <h1>Панель администратора</h1>
    <section>
        <h3>Категории</h3>
        <ul>
            <Link href="/admin/service-categories"><li>Услуг</li></Link>
            <Link href="/admin/article-categories"><li>Блога</li></Link>
            <Link href="/admin/product-categories"><li>Товаров</li></Link>
        </ul>
        <Link href="/admin/doctors">Докторы</Link>
    </section>
</main>
}