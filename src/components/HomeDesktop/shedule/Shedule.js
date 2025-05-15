import './shedule.css'


function Shedule () {
    return (
        <section className="schedule__container">
            <div className="daily-schedule-block">
                <div className="schedule-list-column">
                    <div className="schedule-item">
                        <div className="duration-cell"></div>
                        <span className="time-slot activity-light">09:00 - 10:00</span>
                        <span className="activity-description activity-light">зарядка и обсуждение плана</span>
                    </div>

                    <div className="schedule-item">
                        <div className="duration-cell">
                            <span className="duration-indicator">1,5 часа</span>
                        </div>
                        <span className="time-slot activity-purple">10:00 - 11:30</span>
                        <span className="activity-description activity-purple">занятия по программированию и изучению нейросетей</span>
                    </div>

                    <div className="schedule-item">
                        <div className="duration-cell"></div>
                        <span className="time-slot activity-yellow">11:30 - 11:45</span>
                        <span className="activity-description activity-yellow">первый перекус</span>
                    </div>

                    <div className="schedule-item">
                        <div className="duration-cell">
                            <span className="duration-indicator">1,5 часа</span>
                        </div>
                        <span className="time-slot activity-purple">11:45 - 13:15</span>
                        <span className="activity-description activity-purple">занятия по программированию и изучению нейросетей</span>
                    </div>

                    <div className="schedule-item">
                        <div className="duration-cell"></div>
                        <span className="time-slot activity-yellow">13:30 - 14:30</span>
                        <span className="activity-description activity-yellow">обед</span>
                    </div>

                    <div className="schedule-item">
                        <div className="duration-cell"></div>
                        <span className="time-slot activity-light">14:30 - 15:30</span>
                        <span className="activity-description activity-light">игры на свежем воздухе</span>
                    </div>

                    <div className="schedule-item">
                        <div className="duration-cell"></div>
                        <span className="time-slot activity-yellow">15:30 - 15:45</span>
                        <span className="activity-description activity-yellow">второй перекус</span>
                    </div>

                    <div className="schedule-item">
                        <div className="duration-cell"></div>
                        <span className="time-slot activity-light">15:45 - 17:30</span>
                        <span
                            className="activity-description activity-light">мастер-классы / выезды / отрядные игры</span>
                    </div>

                    <div className="schedule-item">
                        <div className="duration-cell"></div>
                        <span className="time-slot activity-light">17:30 - 18:00</span>
                        <span className="activity-description activity-light">подведение итогов дня</span>
                    </div>

                </div>
                <div className="schedule-title-column">
                    <h2 className="main-title">Распорядок дня</h2>
                    <div className="schedule-icon">
                        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="50" cy="50" r="42" stroke="var(--icon-stroke-color)" strokeWidth="6"
                                    strokeDasharray="7 7" pathLength="100" className="dashed-circle-animation"/>
                            <line x1="50" y1="50" x2="50" y2="25" stroke="var(--icon-stroke-color)" strokeWidth="7"
                                  strokeLinecap="round"/>
                            <path d="M50 50 L75 62" stroke="var(--icon-stroke-color)" strokeWidth="7"
                                  strokeLinecap="round"/>
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Shedule;
