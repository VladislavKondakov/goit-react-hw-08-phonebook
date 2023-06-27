import UserMenu from "./UserMenu";
import MainMenu from "./MainLinks";
import RegistrationMenu from "./RegistrationMenu";
import { DivMenu } from "./MainMenu.styled";
import { authSelectors } from "reduce/auth-selectors";
import { useSelector } from "react-redux";


export default function AllMenus() {
    
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
    return (
        <DivMenu>
            {isLoggedIn ? <UserMenu /> : <RegistrationMenu /> }
            
            <MainMenu />
            
        </DivMenu>
    )
}