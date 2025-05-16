import './travelMobile.css'
import img9 from '../../../imgown/img/trips/image18.png'
import img10 from '../../../imgown/img/trips/2.png'
import img11 from '../../../imgown/img/trips/3.png'
import img12 from '../../../imgown/img/trips/4.png'


function TravelMobile () {
    return (
        <section className='trips__mobile__container'>
            <h2 className='logo__travel__mobile'>Выезды</h2>
            <p className="trips__text__mobile">Раз в неделю организовываем “выезд”</p>
            <div className="trips__highlight__mobile">
                Батутный парк / Научный музей / театр / кино / различные мастер классы
            </div>
            <p className="trips__text__mobile">Передвигаться будем пешком или на общественном транспорте</p>
            <p className="trips__text__mobile">За проезд платить не нужно, все включено в стоимость.</p>
            <div className="trips__left__mobile">
                <div className="trips__main-img__mobile">
                    <img className='img__own' src={img9} alt="основное фото выезда"/>
                </div>
                <div className="trips__row__mobile">
                    <img src={img10} alt="квест"/>
                    <img src={img11} alt="батут"/>
                    <img src={img12} alt="VR"/>
                </div>
            </div>
        </section>
    )
}



export default TravelMobile;
