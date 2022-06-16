import React, {FC} from "react";
import ActionButton from "../../actionButton/ActionButton";
import  './SidebarActions.css'
import {SidebarActionsType} from "../../../resources/types/SidebarActions.type";

interface SidebarActionsProps {
    actionList: SidebarActionsType[]
}

const SidebarActions: FC<SidebarActionsProps> = ({ actionList  }) => (
    <div className="sidebar_actions">
        <div className="sidebar_actions_list">
            {actionList.map(action => (<ActionButton key={action.Icon} active={action.active} Icon={action.Icon}/>))}
        </div>
    </div>
)

export default SidebarActions;
