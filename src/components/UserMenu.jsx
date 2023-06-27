import { useSelector } from "react-redux"
import { authSelectors } from "reduce/auth-selectors"
import { useDispatch } from "react-redux"
import { logOut } from "reduce/auth-operations"
import { DivUserMenu } from "./MainMenu.styled"

export default function UserMenu() {
    const name = useSelector(authSelectors.getUserName)
    const dispatch = useDispatch()
    
    return (
        <DivUserMenu>
            <p>{name}</p>
             <button type="button" onClick={() => dispatch(logOut())} >Logout</button>
        </DivUserMenu>
    )
}