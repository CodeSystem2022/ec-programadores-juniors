
import Footer from "../containers/Footer/Footer"
import Header from "../containers/Header/Header"


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