import React,{useState,useEffect} from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom'
import Logo from '../Assets/removedbg.png'
import '../index.css';

const FormContainer = styled.div`
height: 100vh;
width:100vw;
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;
background-color:#131324 ;
gap:1rem;

.brand{
   display: flex;
   align-items: center;
   gap: 1 rem;
   justify-content: center;
   img{
      height: 5rem;
   }
   h2{
      color: white;
      text-transform: uppercase;

   }
}
form{
   display: flex;
   flex-direction: column;
   gap: 1rem;
   background-color: #00000076;
   border-radius:2rem;
   padding:3rem 5rem;
   input{
      background-color: transparent;
      padding: 1rem;
      border: 0.1rem solid #4e0eff;
      border-radius:0.4rem;
      color:white;
      width:100%;
      font-size:1rem;
      &:focus{
         border:.1rem solid #997af0;
         outline:none;

      }

   }
   button{
      background-color:#997af0;
      letter-spacing: 0.15rem;
      color:white;
      padding:1rem 2rem; 
      border:none;
      font-weight:bold;
      cursor:pointer;
      border-radius:0.4rem;
      font-size:1rem;
      text-transform: uppercase;
      transition: 0.5s ease-in-out;
      &:hover{
         background-color:#4e0eff;
      }
   }
   span{
      color:white;
      /* text-transform:uppercase; */
      a{
         color:#7648f7;
         font-weight:bold;
         text-decoration:none;
      

      }
   }
}
`;



function Register() {
   const [values, setValues] = useState({
      username:'',
      email:'',
      password:'',
      confirmPassword:'',
   })
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("form");
  };

  const handleChange = (e) => {
      setValues({...values,[e.target.name]:e.target.value})
  };
  return (
   <>
    <FormContainer>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <div className="brand">
          <img src={Logo} alt="Logo" />
          <h2>MIRChat</h2>
        </div>
        <input
          type="text"
          placeholder="Username"
          name="username"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          onChange={(e) => handleChange(e)}
        />
        <button type='submit'>Create User</button>
        <span>Already Have An Account? <Link to='/login'>Login</Link></span>
      </form>
    </FormContainer>
    </> 
  );
}

export default Register;
