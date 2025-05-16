// src/components/HomeMobile/HomeMobile.js
import { useEffect } from 'react';
import '../../styles/scrollanimations.css';
import HeaderMobile from "../../components/HomeMobile/headerMobile/HeaderMobile";
import PlaceMobile from "../../components/HomeMobile/placeMobile/PlaceMobile";
import SheduleMobile from "../../components/HomeMobile/sheduleMobile/SheduleMobile";
import FoodMobile from "../../components/HomeMobile/food/FoodMobile"  ;
import WalksMobile from "../../components/HomeMobile/walksMobile/WalksMobile";
import TravelMobile from "../../components/HomeMobile/travelMobile/TravelMobile";
import MasterMobile from "../../components/HomeMobile/masterMobile/MasterMobile";
import ArtMobile from "../../components/HomeMobile/artMobile/ArtMobile";
import TgMobile from "../../components/HomeMobile/tgMobile/TgMobile";
import WeeksMobile from "../../components/HomeMobile/weeksMobile/WeeksMobile";
import TarifMobile from "../../components/HomeMobile/tarifMobile/TarifMobile";
import FinalMobile from "../../components/HomeMobile/FinalMobile/FinalMobile";



export default function HomeMobile() {
    useEffect(() => {
        const sections = document.querySelectorAll('section');

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.2,
        });

        sections.forEach(section => observer.observe(section));

        return () => {
            sections.forEach(section => observer.unobserve(section));
        };
    }, []);

    return (
        <div className="App">
            <HeaderMobile />
            <PlaceMobile/>
            <SheduleMobile />
            <FoodMobile />
            <WalksMobile />
            <TravelMobile />
            <MasterMobile />
            <ArtMobile />
            <TgMobile />
            <WeeksMobile />
            <TarifMobile />
            <FinalMobile />
        </div>
    );
}
