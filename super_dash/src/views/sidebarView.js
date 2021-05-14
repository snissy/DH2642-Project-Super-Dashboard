import React from "react";
import Sidebar from "react-sidebar";
import SettingIcon from "../resources/setting-icon.png";
import AppsIcon from "../resources/Apps-Google-Chrome-App-List-icon.png";
import ChromeIcon from "../resources/chrome.png"
import DriveIcon from "../resources/drive.png"
import GmailIcon from "../resources/gmail.png"
import MapsIcon from "../resources/maps.png"
import YtIcon from  "../resources/yt.png"
import {Button} from "react-bootstrap";
import CharacterSettingsPresenter from "../presenters/sidebarPresenters/characterSettingsPresenter"
import {LogPresenter} from "../presenters/sidebarPresenters/logPresenter";
import PlanetSettingsPresenter from "../presenters/sidebarPresenters/planetSettingsPresenter";
import VisibilitySettingsPresenter from "../presenters/sidebarPresenters/visibilitySettingsPresenter";
import PositionSettingsPresenter from "../presenters/sidebarPresenters/positionSettingPresenter";
import {EmailPresenter} from "../presenters/sidebarPresenters/emailPresenter"
import '../css/sidebar.css';

function SideBarView (props) {
    //Styles for the React-Sidebar component
    const styles = { sidebar: { background: "white" , width: 500}, root:{ textAlign: "center"} }

    //Html content inside the sidebar for Settings Button
    const settingContent = [
        <div>
            <div style={{position:"absolute"}} className={'float-left ml-3 mt-3 '} >
                <Button variant="danger" onClick={() => props.setopen(false)} >X</Button>
            </div>
            <LogPresenter model={props.model}/>
            <br/>
            <div className={'position-static'}>
                <EmailPresenter  model={props.model}/>
                <div className="mt-4 mb-4">
                    <PositionSettingsPresenter model={props.model}/>
                </div>
                <div className="mt-4 mb-4">
                    <strong>Planet</strong>
                    <PlanetSettingsPresenter model={props.model}/>
                </div>
                <div className="mt-4 mb-4">
                    <strong>Character</strong>
                    <CharacterSettingsPresenter model={props.model}/>
                </div>
            </div>
            <VisibilitySettingsPresenter model={props.model}/>
        </div>]

    //Html Content inside the sidebar for GoogleApps Button
    const appsContent = [
        <div>
            <Button variant="danger" onClick={() => props.setopen(false)} className={'float-left m-3'}>X</Button>
            <br/>
            <div className="row" >
                <div className="col m-4">
                    <a href={'https://www.google.com'}>
                        <img src={ChromeIcon} className={'m-2'} height={'70px'} alt={'Google'}/>
                    </a>
                </div>
                <div className="col m-4">
                    <a href={'https://www.gmail.com'}>
                        <img src={GmailIcon} className={'m-2'} height={'70px'} alt={'Gmail'}/>
                    </a>
                </div>
                <div className="col m-4">
                    <a href={'https://drive.google.com/'}>
                        <img src={DriveIcon} className={'m-2'} height={'70px'} alt={'Drive'}/>
                    </a>
                </div>

                <div className="col m-4">
                    <a href={'https://www.youtube.com' }>
                        <img src={YtIcon} className={'m-2'} height={'70px'} alt={'YouTube'}/>
                    </a>
                </div>

                <div className="col m-4">
                    <a href={'https://maps.google.com' }>
                        <img src={MapsIcon} className={'m-2'} height={'70px'} alt={'Maps'}/>
                    </a>
                </div>
            </div>
        </div>
    ]
    return (
        <div className="spinImage">
            <Sidebar
                sidebar={props.content}
                open={props.open}
                onSetOpen={props.setopen}
                styles={styles}
                pullRight={true}           //property for putting the sidebar on the right side
            >
                <img onClick={() =>{props.setopen(true); props.setcontent(settingContent);} } src={SettingIcon} height="75px" style={{ cursor: 'pointer'}} className="float-right m-1" alt={'cogwheel icon'} draggable="false"/>
                <img onClick={() => {props.setopen(true); props.setcontent(appsContent);}} src={AppsIcon} height="75px" style={{marginRight : 30, cursor: 'pointer'}} className="float-right m-1" alt={'Google Apps'} draggable="false"/>
            </Sidebar>
        </div>
    );
}
export default SideBarView;