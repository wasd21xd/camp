import './placeMobile.css'
import img1 from "../../../imgown/img/place/1.png";
import img2 from "../../../imgown/img/place/2.png";
import img3 from "../../../imgown/img/place/3.png";

function PlaceMobile() {
 return(
     <section className='place__mobile__container'>
         <div className='content__place__mobile'>
             <h1 className='logo__place__mobile'>Место проведения</h1>
             <p className='text__section__mobile'>г. Санкт-Петербург
                 ул. Наличная д.5</p>
             <iframe className="map"
                     id='map'
                     src="https://yandex.ru/map-widget/v1/?um=constructor%3A43666f355a6fe9c4dd2deb510c8a559ea9bc2ad576b0a46acea136a23944cf33&amp;source=constructor"
                     title='map'
                     frameBorder="0"></iframe>
             <div className="right__place__mobile">
                 <div className="place__1__mobile">
                     <img src={img1} alt="1"/>
                 </div>
                 <div className="place__2__mobile">
                     <img src={img2} alt="2"/>
                 </div>
                 <div className="place__3__mobile">
                     <img src={img3} alt="3"/>
                 </div>
             </div>
         </div>
     </section>
 )
}




export default PlaceMobile;
