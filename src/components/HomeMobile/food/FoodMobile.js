import './foodMobile.css'

import img5 from '../../../imgown/img/food/image1.png';
import img4 from '../../../imgown/img/food/fac854b8fd11ee90ac6de10bdb2ae170bdd33d1c.png';

const style0 = {
    background: '#FFED8796'
}

const style1text ={
    color: '#775C8A',
    background: '#FFFDE9'

}

const style2 = {
    color: 'white',
    background: '##FFED87'
}

const style3 = {
    color: '#775C8A',
    background:  '#FFED87'
}

const stylebold = {
    fontWeight: 900,
}

function FoodMobile () {
    return(
        <section className='food__mobile__container'>
            <h2 className='logo__food__mobile'>Питание</h2>
            <img className='img__food__mobile' src={img4} alt=""/>
            <div className="snacks-container__mobile">
                <div className="snack-item__mobile">
                    <div style={style0} className="location-col__mobile">перекусы</div>
                    <div style={style0} className="food-col__mobile">
                        <p className='text__food__mobil'>
                            <span style={stylebold}>На основной площадке</span> <span className='span__food__mobil'>(сок, печенье/пряник/пирожное, фрукт)</span>
                        </p>
                    </div>
                </div>

                <div className="snack-item__mobile">
                    <div style={style3} className="location-col__mobile">обед</div>
                    <div style={style3} className="food-col__mobile">
                        <p className='text__food__mobil'>
                            <span style={stylebold}>В ресторане "Катушка" в СевкабельПорте</span> <span className='span__food__mobil'>(суп, горячее, напиток)</span>
                        </p>
                    </div>
                </div>
            </div>
            <img className='map__food__mobile' src={img5} alt=""/>
        </section>
    )
}


export default FoodMobile;
