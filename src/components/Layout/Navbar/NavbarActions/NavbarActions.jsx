import  './NavbarActions.css';

const NavbarActions = ({actions}) => {
    return (
        <div className="navbar-content-actions">
            {actions?.length && actions.map((action, index) => {
                return (
                    <div key={index} className="action-button" onClick={() => action.handleClick(action) }>
                        <action.icon size={20}/>
                    </div>
                )
            })}
        </div>
    )
}

export default NavbarActions;
