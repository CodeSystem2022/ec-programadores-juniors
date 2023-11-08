import CarouselText from "../../components/CarouselText/CarouselText.jsx"
import NavbarComponent from "../Navbar/Navbar"
import ShippingLine from "../ShippingLine/ShippingLine"

const Header = () => {
    return (
        <>
            <ShippingLine />
            <NavbarComponent />
            <CarouselText />
        </>
    )
}

export default Header