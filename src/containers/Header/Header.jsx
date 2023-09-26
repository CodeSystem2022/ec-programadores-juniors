import CarouselText from "../../components/CarouselText/CarouselText.JSX"
import NavbarComponent from "../../components/Navbar/Navbar"
import ShippingLine from "../../components/ShippingLine/ShippingLine"

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