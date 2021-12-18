import {IonItem, IonLabel, IonList} from "@ionic/react";
import {CSSProperties} from "react";
import _ from 'lodash'
import {Kounter} from "../components/kounter";

const subTextProps: CSSProperties = {
    fontSize: 'small',
    opacity: '50%'
}

interface IListItem {
    title: string
    subTitle?: string
    action: () => void
}

const SettingsPage = () => {

    const menuOptions: Array<IListItem> = [
        {title: "My Info", subTitle: "Setup your profile", action: () => {}},
        {title: "Accounts", action: () => {}},
        {title: "Default account for new contacts", action: () => {}},
        {title: "Contacts to display", subTitle: "All contacts", action: () => {}},
        {title: "Sort by", action: () => {}},
        {title: "Name format", subTitle: "First name first", action: () => {}},
        {title: "Import", action: () => {}},
        {title: "Export", action: () => {}},
        {title: "Blocked numbers", action: () => {}},
        {title: "About RNContacts", action: () => {}},
    ]
    const RenderLineItem = (info: IListItem) => {
        const sub = _.has(info, 'subTitle') ? (
            <>
                <br/>
                <span style={subTextProps}>{info.subTitle}</span>
            </>
        ) : (<></>)
        return (
            <IonItem onTouchEnd={info.action}>
                <IonLabel>
                    {info.title}
                    {sub}
                </IonLabel>
            </IonItem>
        )
    }

    return (
        <IonList>
            {menuOptions.map(v => RenderLineItem(v))}
            <IonItem>
                <Kounter/>
            </IonItem>
        </IonList>
    )
}

export default SettingsPage