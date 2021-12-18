import {IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import {useParams} from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './MainPage.css';
import HomePage from "./Home";
import ProfilePage from "./Profile";
import CalendarPage from "./Calendar";
import SettingsPage from "./Settings";
import {auth} from '../State/Firebase'
import {useAuthState} from "react-firebase-hooks/auth";
import firebase from "firebase/compat";
import {AchievementsPage} from "./AchievementsPage";

const MainPage: React.FC = () => {
    const [user, loading, error] = useAuthState(auth)

    const {name} = useParams<{ name: string; }>();

    const RenderPage = () => {
        switch (name) {
            case 'Home':
                return <HomePage/>
            case 'Profile':
                return <ProfilePage/>
            case 'Calendar':
                return <CalendarPage/>
            case 'Settings':
                return <SettingsPage/>
            case 'Achievements':
                return <AchievementsPage/>
            default:
                return (<ExploreContainer name={name}/>)
        }
    }

    const LoginPage = () => {
        return (
            <IonPage>
                <IonHeader>

                </IonHeader>
            </IonPage>
        )
    }

    if (loading) {
        return (
            <></>
        )
    }
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton/>
                    </IonButtons>
                    <IonTitle>{name}</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen slot={'fixed'}>
                <RenderPage/>
            </IonContent>
        </IonPage>
    );
};

export default MainPage;
