import './food.css';

import img4 from '../../../imgown/img/food/fac854b8fd11ee90ac6de10bdb2ae170bdd33d1c.png';
import img5 from '../../../imgown/img/food/Group103.png';

function Food() {
    return (
        <section className="food__container">
            <h1 className="title">Питание</h1>
            <div className="content-layout">
                <div className="elements-grid">
                    <button className="styled-box button perekusi">перекусы</button>

                    <div className="styled-box info-box ploshadka">
                        <div className="info-box-content">
                            <div className="main-text">На основной площадке</div>
                            <div className="sub-text">(сок, печенье/пряник/пирожное, фрукт)</div>
                        </div>
                    </div>

                    <button className="styled-box button obed yellow-bg">обед</button>

                    <div className="styled-box info-box katushka yellow-bg">
                        <div className="info-box-content yellow-bg">
                            <div className="main-text yellow-bg">
                                В ресторане "Катушка" в СевкабельПорте
                            </div>
                            <div className="sub-text yellow-bg">
                                (суп, горячее, напиток)
                            </div>
                        </div>
                    </div>

                    <div className="placeholder-div large-placeholder photo">
                        <img
                            className="img__food"
                            src={img4}
                            alt=""
                        />
                    </div>
                </div>

                <div className="map-container">
                    <div className="placeholder-div map-placeholder">
                        <img
                            className="img__map"
                            src={img5}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Food;
