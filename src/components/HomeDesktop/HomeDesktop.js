import '../../styles/scrollanimations.css';
import Header from "../HomeDesktop/header/Header";
import Place from "../HomeDesktop/place/Place";
import Shedule from "../HomeDesktop/shedule/Shedule";
import Food from "../HomeDesktop/food/Food";
import Walks from "../HomeDesktop/walks/Walks";
import Trips from "../HomeDesktop/trips/Trips";
import Master from "../HomeDesktop/master/Master";
import Art from "../HomeDesktop/art/Art";
import Tg from "../HomeDesktop/tg/Tg";
import Weeks from "../HomeDesktop/weeks/Weeks";
import Tarif from "../HomeDesktop/tarif/Tarif";
import Final from "../HomeDesktop/final/Final";
import {useEffect} from "react";

export default function HomeDesktop() {
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
        <div className='App'>
            <Header />
            <Place />
            <Shedule />
            <Food />
            <Walks />
            <Trips />
            <Master />
            <Art />
            <Tg />
            <Weeks />
            <Tarif />
            <Final />
        </div>
    );
}
