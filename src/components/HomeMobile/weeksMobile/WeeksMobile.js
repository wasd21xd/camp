import './weeksMobile.css'


function WeeksMobile () {
    return (
        <section className="weeks__mobile__container">
            <div className="schedule-block">
                <h2 className="schedule-title__mobile">Расписание по неделям</h2>
                <p className="schedule-subtitle">Вы можете выбрать любые недели, когда вам удобно посещать программу</p>

                <div className="schedule-months">
                    <div className="month-column">
                        <h3 className="month-name">ИЮНЬ</h3>
                        <div className="weeks-list">
                            <div className="week-item">
                                <span className="week-number-circle">1</span>
                                <span className="date-range">2 - 6 июня</span>
                                <div className="weekend-indicators">
                                    <span className="day-indicator sat">СБ</span>
                                    <span className="day-indicator sun">ВС</span>
                                </div>
                            </div>
                            <div className="week-item">
                                <span className="week-number-circle">2</span>
                                <span className="date-range">9-13 июня</span>
                                <div className="weekend-indicators">
                                    <span className="day-indicator sat">СБ</span>
                                    <span className="day-indicator sun">ВС</span>
                                </div>
                            </div>
                            <div className="week-item">
                                <span className="week-number-circle">3</span>
                                <span className="date-range">16-20 июня</span>
                                <div className="weekend-indicators">
                                    <span className="day-indicator sat">СБ</span>
                                    <span className="day-indicator sun">ВС</span>
                                </div>
                            </div>
                            <div className="week-item">
                                <span className="week-number-circle">4</span>
                                <span className="date-range">16-20 июня</span>
                                <div className="weekend-indicators">
                                    <span className="day-indicator sat">СБ</span>
                                    <span className="day-indicator sun">ВС</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="month-column">
                        <h3 className="month-name">ИЮЛЬ</h3>
                        <div className="weeks-list">
                            <div className="week-item">
                                <span className="week-number-circle">5</span>
                                <span className="date-range">30 июня-4 июля</span>
                                <div className="weekend-indicators">
                                    <span className="day-indicator sat">СБ</span>
                                    <span className="day-indicator sun">ВС</span>
                                </div>
                            </div>
                            <div className="week-item">
                                <span className="week-number-circle">6</span>
                                <span className="date-range">7-11 июля</span>
                                <div className="weekend-indicators">
                                    <span className="day-indicator sat">СБ</span>
                                    <span className="day-indicator sun">ВС</span>
                                </div>
                            </div>
                            <div className="week-item">
                                <span className="week-number-circle">7</span>
                                <span className="date-range">14-18 июля</span>
                                <div className="weekend-indicators">
                                    <span className="day-indicator sat">СБ</span>
                                    <span className="day-indicator sun">ВС</span>
                                </div>
                            </div>
                            <div className="week-item">
                                <span className="week-number-circle">8</span>
                                <span className="date-range">21-25 июля</span>
                                <div className="weekend-indicators">
                                    <span className="day-indicator sat">СБ</span>
                                    <span className="day-indicator sun">ВС</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="month-column">
                        <h3 className="month-name">АВГУСТ</h3>
                        <div className="weeks-list">
                            <div className="week-item">
                                <span className="week-number-circle">9</span>
                                <span className="date-range">28 июля-1 августа</span>
                                <div className="weekend-indicators">
                                    <span className="day-indicator sat">СБ</span>
                                    <span className="day-indicator sun">ВС</span>
                                </div>
                            </div>
                            <div className="week-item">
                                <span className="week-number-circle">10</span>
                                <span className="date-range">4-8 августа</span>
                                <div className="weekend-indicators">
                                    <span className="day-indicator sat">СБ</span>
                                    <span className="day-indicator sun">ВС</span>
                                </div>
                            </div>
                            <div className="week-item">
                                <span className="week-number-circle">11</span>
                                <span className="date-range">11-15 августа</span>
                                <div className="weekend-indicators">
                                    <span className="day-indicator sat">СБ</span>
                                    <span className="day-indicator sun">ВС</span>
                                </div>
                            </div>
                            <div className="week-item">
                                <span className="week-number-circle">12</span>
                                <span className="date-range">18-22 августа</span>
                                <div className="weekend-indicators">
                                    <span className="day-indicator sat">СБ</span>
                                    <span className="day-indicator sun">ВС</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default WeeksMobile;
