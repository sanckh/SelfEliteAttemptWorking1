import {useAppSelector, useAppDispatch} from "../State/hooks";
import {IonItem, IonLabel, IonList} from "@ionic/react";
import _ from 'lodash'
import {useEffect} from "react";
import {addAchievement} from "../State/Achievements";

export function AchievementsPage() {
    const achievements = useAppSelector(state => state.achievements.value)
    const dispatch = useAppDispatch()

    // Test add some achievement to the global state machine
    useEffect(() => {
        dispatch(addAchievement({
            id: "123123",
            value: {
                category: "Sleep",
                description: "Derp",
                icon: "",
                title: "Go to sleep"
            }
        }))
    }, [])
    
    return (
        <IonList>
            {_.keys(achievements).map(value => {
                return (
                    <IonItem key={value}>
                        <IonLabel>
                            {achievements[value].title}
                        </IonLabel>
                    </IonItem>
                )
            })}
        </IonList>
    )
}