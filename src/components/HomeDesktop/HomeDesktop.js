
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

export default function Home() {
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
