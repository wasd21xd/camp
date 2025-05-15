import './master.css'
import imgMaster from '../../../imgown/img/master/image18.png'


function Master() {
    return (
        <section className="master__container">
            <div className="left__master">
                <h2 className="logo__master">Мастер-классы</h2>
                <p className="text__master">Ключевой навык для успеха в современном мире - <span
                    className="span__master">soft skills (мягкие навыки)</span> и мы уделяем этому особое внимание!</p>
                <div className="block__text__master">
                    <p className="name__block">Изучим, как:</p>
                    <ul className="ul__master">
                        <li className="item__li">планировать</li>
                        <li className="item__li">достигать целей,</li>
                        <li className="item__li">развивать лидерские качества, общаться</li>
                        <li className="item__li">выражать свои эмоции</li>
                    </ul>
                    <p className="text__master-block">и многое другое!</p>
                </div>
            </div>
            <div className="right__master">
                <img className="img__master" src={imgMaster} alt=""/>
            </div>
        </section>
    )
}

export default Master;
