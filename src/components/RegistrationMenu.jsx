import { NavLink } from "react-router-dom"
import { DivNavigation } from "./MainMenu.styled"

export default function RegistrationMenu() {
    return (
        <DivNavigation>
            <NavLink to="/registration" style={{ textDecoration: 'none' }}>Registration</NavLink>
             <NavLink to="/login" style={{ textDecoration: 'none' }}>Login</NavLink>
        </DivNavigation>
    )
}