import { NavLink } from "react-router-dom"
import { DivNavigation } from "./MainMenu.styled"
export default function MainMenu() {
    return (
        <DivNavigation>
             <NavLink to="/" style={{ textDecoration: 'none' }}>Home</NavLink>
            <NavLink to="/contacts" style={{ textDecoration: 'none' }}>Contacts</NavLink>
        </DivNavigation>
    )
}