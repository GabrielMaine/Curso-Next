'use client'
import Navbar from '../../components/Layout/Navbar'
import Footer from '../../components/Layout/Footer';
import AdminMenu from '@/components/Admin/AdminMenu';
import { useAuthContext } from '@/components/Context/AuthContext';

export default function RootLayout({ children, login }) {

    const {user} = useAuthContext()

    return (
        <>
            <Navbar />
            <main className="min-h-[calc(100vh-15rem)]">
                <>
                {user.isAdmin?
                <>
                    <AdminMenu/>
                    {children}
                </>
                :login
                }
                </>
            </main>
            <Footer />
        </>
    );
  }