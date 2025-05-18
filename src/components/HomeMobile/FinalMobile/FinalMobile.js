import './finalMobile.css'
import imgfinal from "../../../imgown/img/final/Group146.png";


function FinalMobile () {
    return (
        <section className="final__mobile__container">
            <h2 className="final__title__mobile">На какую смену пойдем?</h2>
            <p className='text__final__mobile'>Уже выбрали даты?</p>
            <button onClick={() => window.location.href ="https://wa.me/79062694845?text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C!%20%D0%A5%D0%BE%D1%82%D0%B5%D0%BB%D0%B8%20%D0%B1%D1%8B%20%D1%83%D0%B7%D0%BD%D0%B0%D1%82%D1%8C%20%D0%BF%D1%80%D0%BE%20%D0%B2%D0%B0%D1%88%D0%B8%20%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D1%8B%20%F0%9F%92%BB"}
                className="final__circle__mobile ">
                Забронировать
            </button>
            <p className='text__final__mobile'>прямо сейчас и получить скидку</p>
                <img src={imgfinal} className="final__img__mobile" alt='123'/>

                <h2 className='final__title__mobile'>ПРОВЕДЕМ ЭТО ЛЕТО ВМЕСТЕ!</h2>
            <div className="final__ps__mobile">Если у вас остались вопросы,<br/>
                напишите или позвоните нам и мы<br/>
                с радостью Вам поможем!
            </div>
        </section>
    )
}


export default FinalMobile;
