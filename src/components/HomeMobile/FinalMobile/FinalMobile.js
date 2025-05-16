import './finalMobile.css'
import imgfinal from "../../../imgown/img/final/Group146.png";


function FinalMobile () {
    return (
        <section className="final__mobile__container">
            <h2 className="final__title__mobile">На какую смену пойдем?</h2>
            <p className='text__final__mobile'>Уже выбрали даты?</p>
            <button className="final__circle__mobile ">
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
