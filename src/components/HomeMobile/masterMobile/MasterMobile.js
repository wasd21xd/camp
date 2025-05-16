import './masterMobile.css'
import imgMaster from '../../../imgown/img/master/image18.png'

function MasterMobile () {
    return(
        <section className='master__mobile__container'>
            <h2 className='logo__master__mobile'>Мастер-классы</h2>
            <p className='text__master__mobile'>Ключевой навык для успеха в современном мире - soft skills (мягкие навыки) и мы уделяем этому особое внимание!</p>
            <div className='flex__master__mobile'>
                <div className='left__master__mobile'>
                <img className='img__mobile__master' src={imgMaster} alt=""/>
                </div>
                <div className="block__text__master__mobile">
                    <p className="name__block__mobile">Изучим, как:</p>
                    <ul className="ul__master__mobile">
                        <li className="item__li__mobile">планировать</li>
                        <li className="item__li__mobile">достигать целей</li>
                        <li className="item__li__mobile">развивать лидерские качества, общаться</li>
                        <li className="item__li__mobile">выражать свои эмоции</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}


export default MasterMobile;
