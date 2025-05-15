import './place.css'
import img1 from '../../../imgown/img/place/1.png'
import img2 from '../../../imgown/img/place/2.png'
import img3 from '../../../imgown/img/place/3.png'



function Place  () {
    return (
        <section className="place__container">
            <div className="left__place">
                <h1 className="title__place">Место проведения</h1>
                <p className="text__place">г. Санкт-Петербург
                    ул. Наличная д.5</p>
                <iframe className="map"
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3A43666f355a6fe9c4dd2deb510c8a559ea9bc2ad576b0a46acea136a23944cf33&amp;source=constructor"
                        frameBorder="0"></iframe>
            </div>
            <div className="right__place">
                <div className="place__1">
                    <img src={img1} alt="1"/>
                </div>
                <div className="place__2">
                    <img src={img2} alt="2"/>
                </div>
                <div className="place__3">
                    <img src={img3} alt="3"/>
                </div>
            </div>
        </section>
    )
}

export default Place;
