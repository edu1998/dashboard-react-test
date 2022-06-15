import {FC} from "react";

import './actionButton.css';
import {SidebarActionsType} from "../../resources/types/SidebarActions.type";


const ActionButton: FC<SidebarActionsType> = ({Icon, active}) => {
    return (
        <div className={`action_button ${active ? 'active' : ''}`}>
            <Icon size={25} color="#969696"/>
        </div>
    )
}

export default ActionButton;
