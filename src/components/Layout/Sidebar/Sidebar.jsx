import './Sidebar.css'
import {RiArrowLeftSLine, RiArrowRightSLine} from "react-icons/ri";


const Sidebar = ({onChangeStatus, status}) => {
    return (
        <>
            <div className={`${status ? 'open-button' : 'close-button'}`} onClick={() => onChangeStatus()}>
                {status ? <RiArrowLeftSLine size={25}/> : <RiArrowRightSLine size={25}/> }
            </div>
        </>
    )
}

export default  Sidebar;
