import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import {
  archiveOutline,
  archiveSharp,
  bookmarkOutline, calendar, cog,
  heartOutline,
  heartSharp,
  home,
  mailOutline,
  mailSharp,
  paperPlaneOutline,
  paperPlaneSharp, personCircleOutline,
  trashOutline,
  trashSharp,
  warningOutline,
  warningSharp
} from 'ionicons/icons';
import './Menu.css';
import {PropsWithChildren} from "react";

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Home',
    url: '/page/Home',
    iosIcon: home,
    mdIcon: home
  },
  {
    title: 'Profile',
    url: '/page/Profile',
    iosIcon: personCircleOutline,
    mdIcon: personCircleOutline
  },
  {
    title: 'Calendar',
    url: '/page/Calendar',
    iosIcon: calendar,
    mdIcon: calendar
  },
  {
    title: 'Settings',
    url: '/page/Settings',
    iosIcon: cog,
    mdIcon: cog
  },
];

const labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

const Menu: React.FC <{disabled?: boolean}> = ({disabled}) => {
  const location = useLocation();
if(disabled)
{
  return <></>
}
  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <div style={{height: '20px'}}></div> {/*  */}
          <IonListHeader>SelfElite</IonListHeader>
          {/*<IonNote>hi@ionicframework.com</IonNote>*/}
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
