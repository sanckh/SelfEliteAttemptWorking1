import {IonAvatar, IonGrid, IonRow, IonCol, IonLabel, IonText, IonList, IonItem, IonImg} from "@ionic/react";
import {useState} from "react";
import './Profile.css'
const ProfilePage = () => {
    const [emoji, setEmoji] = useState(String.fromCodePoint(parseInt('1f600', 16)))

    return (
            <div style={{display: 'flex', flexDirection: 'column', width: '100vw', justifyContent: 'center', padding: '1rem', alignItems: 'center'}}>
                <div style={{display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'center', paddingBottom: '2rem'}}>
                    <IonAvatar>
                        <img src="/default_profile.png"/>
                    </IonAvatar>
                    <div style={{display: 'flex', flexDirection: 'column', paddingLeft: 16}}>
                        <IonText><span style={{fontSize: 'large'}}>SelfElite User</span></IonText>
                        <IonText><span>You are feeling {emoji} today</span></IonText>
                    </div>
                </div>
                <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', borderRadius: '15px', backgroundColor: 'rgba(102,102,102,0.18)', width: '100%', padding: '1rem'}}>
                    <div style={{display: "flex", justifyContent: 'space-around', width: '100%'}}>
                        <IonAvatar>
                            <img src='https://www.pngitem.com/pimgs/m/72-724011_transparent-achievement-icon-png-success-flat-icon-png.png'/>
                        </IonAvatar>
                        <IonAvatar>
                            <img src='https://www.pngitem.com/pimgs/m/72-724011_transparent-achievement-icon-png-success-flat-icon-png.png'/>
                        </IonAvatar>
                        <IonAvatar>
                            <img src='https://www.pngitem.com/pimgs/m/72-724011_transparent-achievement-icon-png-success-flat-icon-png.png'/>
                        </IonAvatar>
                    </div>
                    <IonItem routerLink={'/page/Achievements'}>
                        <a href={'#'}>Achievements</a>
                    </IonItem>
                </div>
            </div>
    )
}

export default ProfilePage