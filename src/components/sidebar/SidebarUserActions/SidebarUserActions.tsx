import React, {FC} from "react";
import ActionButton from "../../actionButton/ActionButton";
import {IoIosLogOut} from "react-icons/io";
import './SidebarUserActions.css'

interface SidebarUserActionsProps {}

const SidebarUserActions: FC<SidebarUserActionsProps> = () => (
    <div className="sidebar_user_actions">
        <div className="profile_img">A</div>
        <span className="profile_label">My Profile </span>
        <br/><br/>
        <ActionButton Icon={IoIosLogOut} />
    </div>
);

export default SidebarUserActions;
