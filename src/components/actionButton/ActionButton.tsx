import {FC} from "react";

import './actionButton.css';

interface ActionButtonProps {
    Icon: any;
    active?: boolean;
}

const ActionButton: FC<ActionButtonProps> = ({Icon, active}) => {
    return (
        <div className={`action_button ${active ? 'active' : ''}`}>
            <Icon size={25} color="#969696"/>
        </div>
    )
}

export default ActionButton;
