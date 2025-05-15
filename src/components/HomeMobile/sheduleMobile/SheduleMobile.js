import '../../HomeMobile/sheduleMobile/sheduleMobile.css'



const style1 = {
    color: '#775C8A',
    background: '#FFFDE9'
}

const style1text ={
    color: '#775C8A',
    background: '#FFFDE9'

}

const style2 = {
    color: 'white',
    background: '#997EAC'
}

const style3 = {
    color: '#775C8A',
    background:  '#FFED87'
}

function SheduleMobile () {
    return (
        <div className="schedule-container__mobile">
            <h2 className='logo__shedule__mobile'>Распорядок дня</h2>
            <div className="schedule-row__mobile">
                <div style={style1} className="time-col__mobile">09:00 - 10:00</div>
                <div style={style1text} className="activity-col__mobile">зарядка и обсуждение плана</div>
            </div>

            <div className="schedule-row__mobile">
                <div style={style2} className="time-col__mobile">10:00 - 11:30</div>
                <div style={style2} className="activity-col__mobile">занятия по программированию и изучению нейросетей</div>
            </div>

            <div className="schedule-row__mobile">
                <div style={style3} className="time-col__mobile">11:30 - 11:45</div>
                <div style={style3} className="activity-col__mobile">первый перекус</div>
            </div>

            <div className="schedule-row__mobile">
                <div style={style2} className="time-col__mobile">11:45 - 13:15</div>
                <div style={style2} className="activity-col__mobile">занятия по программированию и изучению нейросетей</div>
            </div>

            <div className="schedule-row__mobile">
                <div style={style3} className="time-col__mobile">13:30 - 14:30</div>
                <div style={style3} className="activity-col__mobile">обед</div>
            </div>

            <div className="schedule-row__mobile">
                <div style={style1} className="time-col__mobile">14:30 - 15:30</div>
                <div style={style1text} className="activity-col__mobile">игры на свежем воздухе</div>
            </div>

            <div className="schedule-row__mobile">
                <div style={style3} className="time-col__mobile">15:30 - 15:45</div>
                <div style={style3} className="activity-col__mobile">второй перекус</div>
            </div>

            <div className="schedule-row__mobile">
                <div style={style1} className="time-col__mobile">15:45 - 17:30</div>
                <div style={style1text} className="activity-col__mobile">мастер-классы / выезды / отрядные игры</div>
            </div>

            <div className="schedule-row__mobile">
                <div style={style1} className="time-col__mobile">17:30 - 18:00</div>
                <div style={style1text} className="activity-col__mobile">подведение итогов дня</div>
            </div>
        </div>
    )
}

export default SheduleMobile;
