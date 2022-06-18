import './NavbarForm.css';
import {InputText} from "primereact/inputtext";
import {Dropdown} from "primereact/dropdown";

const NavbarForm = ({options = []}) => {
    return (
        <form className="navbar-form">
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText className="form-sidebar-input-text-sm"  placeholder="Search" />
            </span>
            <Dropdown className="form-sidebar-input-text-sm" options={options} optionLabel="name" placeholder="Select a City" />
        </form>
    )
}
export default NavbarForm
