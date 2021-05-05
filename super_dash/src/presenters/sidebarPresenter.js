
import React from "react";
import SideBarView from "../views/sidebarView";
import TodoPresenter from "./todoPresenter";



function SideBarPresenter(props) {

    //State for  the sidebar is openned(visible) or close (hidden)
    const [sidebarOpen, SetSidebarOpen] = React.useState(false);
    //State for the sidebar's content depending if the setting or Googleapps is clicked
    const [ContentSidebar,SetContent] = React.useState(<div></div>);

    return <SideBarView open = {sidebarOpen}
                        setopen = {SetSidebarOpen}
                        content = {Content}
                        setcontent = {SetContent}
                        model={props.model}

    />
}

export default SideBarPresenter;