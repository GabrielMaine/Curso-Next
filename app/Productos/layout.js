import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer';
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
  
