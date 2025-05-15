import './tarif.css'


function Tarif() {
    return (
        <section className="tariff-section">
            <h2 className="tariff-title">Тарифы</h2>

            <div className="tariff-cards">
                <div className="tariff-card">
                    <div className="tariff-text-and-price">
                        <span>Одна неделя</span>
                        <span className="tariff-price">17 900 р.</span>
                    </div>
                    <div className="tariff-dots">
                        <span></span>
                    </div>
                </div>

                <div className="tariff-card">
                    <div className="tariff-text-and-price">
                        <span>Две недели</span>
                        <span className="tariff-price">32 800 р.</span>
                    </div>
                    <div className="tariff-dots">
                        <span></span><span></span>
                    </div>
                </div>

                <div className="tariff-card">
                    <div className="tariff-text-and-price">
                        <span>Четыре недели</span>
                        <span className="tariff-price">60 000 р.</span>
                    </div>
                    <div className="tariff-dots">
                        <span></span><span></span><span></span><span></span>
                    </div>
                </div>
            </div>

            <p className="tariff-note">
                Есть вариант рассрочки платежа или оплаты с помощью <br/>
                материнского капитала
            </p>

            <div className="tariff-icon">
                <i className="fa-solid fa-money-check-dollar"></i>
            </div>
        </section>
    )
}

export default Tarif;
