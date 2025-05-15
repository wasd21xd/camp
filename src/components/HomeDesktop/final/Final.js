import './final.css'
import imgfinal from '../../../imgown/img/final/Group146.png'


function Final() {
    return (
        <section className="final__container">
            <h2 className="final__title">На какую смену пойдем?</h2>
            <div className="final__block">
                <img src={imgfinal} className="final__img"/>
                <div className="final__right">
                    <button className="final__circle question">
                        Уже выбрали даты?
                    </button>
                    <button className="final__circle request">
                        Забронировать
                    </button>
                    прямо сейчас и получить скидку
                </div>
            </div>
            <div className="final__ps">Если у вас остались вопросы,<br/>
                напишите или позвоните нам и мы<br/>
                с радостью Вам поможем!
            </div>
        </section>
    )
}

export default Final;
