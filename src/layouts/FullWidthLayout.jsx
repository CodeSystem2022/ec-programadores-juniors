import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import { Toaster } from 'sonner'

const FullWidthLayout = ({ children }) => {
    return (
        <>
            <Toaster />
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default FullWidthLayout