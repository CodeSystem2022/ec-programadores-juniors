import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"


const FullWidthLayout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default FullWidthLayout