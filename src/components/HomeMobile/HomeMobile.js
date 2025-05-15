// src/components/HomeMobile/HomeMobile.js
import HeaderMobile from "../../components/HomeMobile/headerMobile/HeaderMobile";
import PlaceMobile from "../../components/HomeMobile/placeMobile/PlaceMobile";
import SheduleMobile from "../../components/HomeMobile/sheduleMobile/SheduleMobile";

export default function HomeMobile() {
    return (
        <div className="App">
            <HeaderMobile />
            <PlaceMobile/>
            <SheduleMobile />
        </div>
    );
}
