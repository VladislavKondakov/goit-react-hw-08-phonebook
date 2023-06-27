import { useState } from "react"
import { useDispatch } from "react-redux"
import { register } from "reduce/auth-operations"
import {
  FormRegistration,
  DivRegistration,
  LabelRegistration,
  InputRegistration,
  ParagraphRegistration
} from "components/Registration.styled"

export default function Registration() {
    
    const dispatch = useDispatch()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
    
    
   const handleChange = (event) => {
  const { name, value } = event.target;
  if (name === "name") {
    setName(value);
  } else if (name === "email") {
    setEmail(value);
  } else if (name === "password") {
    setPassword(value);
  }
};


    const handleSubmit = e => {
        e.preventDefault();
        dispatch(register({ name, email, password }));
        setName('')
        setEmail('')
        setPassword('')
    }
    
    return (
        <DivRegistration>
            <h1>Registration page</h1>
            <FormRegistration action="" onSubmit={handleSubmit}>
                <LabelRegistration htmlFor="">
                   <ParagraphRegistration>Name</ParagraphRegistration> 
                    <InputRegistration type="text" name="name" value={name} onChange={handleChange} />
                </LabelRegistration>
            
                <LabelRegistration htmlFor="">
                    <ParagraphRegistration>Email</ParagraphRegistration>
                    <InputRegistration type="email" name="email" value={email} onChange={handleChange} />
                </LabelRegistration>
            
                      <LabelRegistration htmlFor="">
                   <ParagraphRegistration>Password</ParagraphRegistration> 
                    <InputRegistration type="text" name="password" value={password} onChange={handleChange} />
                </LabelRegistration>
            
                <button type="submit">Registration</button>
                </FormRegistration>
        </DivRegistration>
    )
}