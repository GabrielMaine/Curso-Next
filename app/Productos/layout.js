import Navbar from '../../components/Layout/Navbar'
import Footer from '../../components/Layout/Footer';
import CategoryMenu from '@/components/Products/CategoryMenu';

export default function RootLayout({ children }) {
    return (
        <>
            <Navbar />
            <main className="flex min-h-[calc(100vh-15rem)]"> 
                <CategoryMenu/>
                {children}
            </main>
            <Footer />
        </>
    );
  }
  
