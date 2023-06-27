import { useState } from "react"
import { useDispatch } from "react-redux"
import { logIn } from "reduce/auth-operations"
import { FormLogin,DivLogin,LabelLogin } from "Login.styled"

export default function Login() {
    
    const dispatch = useDispatch()
    const [email, setEmail] = useState()
    const [password,setPassword] = useState()
    
 const handleChange = (event) => {
  const { name, value } = event.target;
   if (name === "email") {
    setEmail(value);
  } else if (name === "password") {
    setPassword(value);
  }
};


    const handleSubmit = e => {
        e.preventDefault()
        dispatch(logIn({ email, password }))
        setEmail('')
        setPassword('')
    }
   return (
       <DivLogin>
           <h1>Registration</h1>
        <FormLogin  onSubmit={handleSubmit}>
            
               <LabelLogin htmlFor="email">
                Email
                <input type="email" name="email" value={email} onChange={handleChange} />
            </LabelLogin>

            <LabelLogin htmlFor="password">
                Password
                <input type="password" name="password" value={password} onChange={handleChange}  autocomplete="current-password"/>
            </LabelLogin>

            <button type="submit">Login</button>
        </FormLogin>
    </DivLogin>
)

}