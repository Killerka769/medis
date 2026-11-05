import { AdminSidebar } from "../components/AdminSidebar/AdminSidebar"; 
import styles from "./AdminLayout.module.scss";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.adminLayout}>
            <AdminSidebar />
            <main className={styles.content}>
                <div className={styles.contentInner}>
                    {children}
                </div>
            </main>
        </div>
    );
}