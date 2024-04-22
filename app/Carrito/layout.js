import Navbar from '../../components/Layout/Navbar'
import Footer from '../../components/Layout/Footer';

export default function RootLayout({ children }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
  }