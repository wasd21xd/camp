// src/components/HomeMobile/HomeMobile.js
import HeaderMobile from "../../components/HomeMobile/headerMobile/HeaderMobile";
import PlaceMobile from "../../components/HomeMobile/placeMobile/PlaceMobile";
import SheduleMobile from "../../components/HomeMobile/sheduleMobile/SheduleMobile";
import FoodMobile from "../../components/HomeMobile/food/FoodMobile"  ;
import WalksMobile from "../../components/HomeMobile/walksMobile/WalksMobile";
import TravelMobile from "../../components/HomeMobile/travelMobile/TravelMobile";

export default function HomeMobile() {
    return (
        <div className="App">
            <HeaderMobile />
            <PlaceMobile/>
            <SheduleMobile />
            <FoodMobile />
            <WalksMobile />
            <TravelMobile />
        </div>
    );
}
