
import React from "react";
import SideBarView from "../views/sidebarView";



function SideBarPresenter(props) {

    //State for  the sidebar is openned(visible) or close (hidden)
    const [sidebarOpen, SetSidebarOpen] = React.useState(false);

    return <SideBarView open = {sidebarOpen}
                         setopen = {SetSidebarOpen}

    />
}

export default SideBarPresenter;