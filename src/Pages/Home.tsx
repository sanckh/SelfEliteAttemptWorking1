import {CSSProperties} from "react";
import './Home.css'
import {IonButton, IonCheckbox, IonIcon, IonInput, IonItem, IonLabel, IonList, IonToggle} from "@ionic/react";
import UseColorScheme from '../Utilities/UsePrefersColorScheme'
import {lockClosed, logoFacebook, logoGoogle, person} from "ionicons/icons";
import selfEliteName from "../images/big-brain-self-elite[2535].png";

const containerStyle: CSSProperties = {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
}
const headerStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    height: '150px!important',
    width: '100%',
    justifyContent: 'center'
}

const hpLinkStyle: CSSProperties = {
    textDecoration: 'none',
    color: '#f55a5a',
}

const HomePage = () => {
    const colorSchema = UseColorScheme()

    return (
        <div style={containerStyle} className='containerStyle'>
            <div style={headerStyle}>
                <div className = "header-img">
                    <img src = {selfEliteName} />
                </div>
            </div>
            <div className='contentStyle contentBg'>
                <div style={{padding: '1rem', paddingBottom: '.5rem', display: 'flex', flexDirection: 'column'}}>
                    <h1>Welcome</h1>
                    <span>
                        Don't have an account?&nbsp;
                    </span>
                    <span>
                        <a href='#' style={hpLinkStyle}>
                            <i>Register now!</i>
                        </a>
                    </span>
                </div>
                <div style={{padding: '.5rem'}}>
                    <IonLabel position={'stacked'}>Email ID</IonLabel>
                    <IonItem className={'loginInput'}>
                        <IonIcon slot={'start'} icon={person}/>
                        <IonInput
                            value=''
                            type={'email'}
                        />
                    </IonItem>
                    <IonLabel position={'stacked'}>Password</IonLabel>
                    <IonItem className={'loginInput'}>
                        <IonIcon slot={'start'} icon={lockClosed}/>
                        <IonInput value='' type={'password'} />
                    </IonItem>
                </div>
                <div style={{paddingTop: '1rem', paddingBottom: '1rem', display: 'flex', justifyContent: 'space-between'}}>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <IonCheckbox />
                        <IonLabel style={{paddingLeft: '10px'}}>Remember Me</IonLabel>
                    </div>
                    <div>
                        <a href={"#"} style={{fontSize: 'small'}}>Forgot Password?</a>
                    </div>
                </div>
                <div style={{padding: '1rem', display: 'block'}}>
                    <IonButton className={'loginBtn'} expand={'block'}>Login</IonButton>
                    <div style={{display: 'flex', paddingBottom: '1rem'}}>
                        <div style={{flexGrow: 1}}/>
                        <IonLabel>or Login With</IonLabel>
                        <div style={{flexGrow: 1}}/>
                    </div>
                    <IonButton expand={'block'}>
                        <IonIcon icon={logoFacebook}/>
                        //this is where we will make the facebook button function
                    </IonButton>
                    <IonButton expand={'block'} color={'danger'}>
                        <IonIcon icon={logoGoogle}/>
                    </IonButton>
                </div>
            </div>
        </div>
    )
}

export default HomePage