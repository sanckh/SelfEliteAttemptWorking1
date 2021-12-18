import Calendar from 'react-calendar'
import {useState} from "react";
import './Calendar.css'
import {IonHeader, IonItem, IonLabel, IonList, IonListHeader} from "@ionic/react";

const CalendarPage = () => {
    const [date, setDate] = useState(new Date())
    const agenda = []
    return (
        <div>
            <Calendar
                onChange={setDate}
                value={date}
            />
            <IonList>
                <IonListHeader>Agenda</IonListHeader>
                <IonItem>
                    <IonLabel>Do laundry</IonLabel>
                </IonItem>
            </IonList>
        </div>
    )
}

export default CalendarPage