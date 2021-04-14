import React from "react";
import {Container} from "react-bootstrap";
import Sidebar from "react-sidebar";
import SettingIcon from "../resources/setting-icon.png";

function SideBarView (props) {
    //React stles for the React-Sidebar component
    const styles = { sidebar: { background: "white" , width: 500},
        root:{ textAlign: "center"} }
    //Html code inside the sidebar
    const sidebarContent = [
        <div>
            <div className="m-4">
                <strong >User</strong>
                <p>hectorgc@kth.se</p>
            </div>
            <div className="m-4">
                <strong>Position</strong>
                <p>Longitude: 123456789 <br/>
                    Latitude: 123456789</p>
            </div>
            <div className="m-4">
                <strong>Planet</strong>
                <p>Tatooine</p>
            </div>
            <div className="m-4">
                <strong>Character</strong>
                <p>Yoda</p>
            </div>
        </div>]

    return (
        <Container >
            <Sidebar
                sidebar={sidebarContent}
                open={props.open}
                onSetOpen={props.setopen}
                styles={styles}
                pullRight={true}           //property for putting the sidebar on the right side
            >

                <img onClick={() => props.setopen(true)} src={SettingIcon} height="75px" class="float-right m-1"   />

            </Sidebar>


        </Container>
    );

}
export default SideBarView;