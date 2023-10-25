import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CPButton from "../component/CPbutton";
import CPInput from "../component/CPinput";
import {  fbSignUp } from "../config/firebasemethods";
import CPSelect from "../component/CPselect";

const containerStyle = {
    height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};
// shahmeer@gmail.com
const formStyle = {
  width: '500px',
  backgroundColor: '#FF7417',
  padding: '20px',
  borderRadius: '15px',
};

const headingStyle = {

  fontFamily: 'verdana',
  display: 'flex',
  justifyContent: 'center',
  fontSize: '2.5rem',
  fontWeight: '500',
  color: 'white',
};

const loginButtonStyle = {
  cursor: 'pointer',
  fontFamily: 'serif',
  color: 'white',
  padding: '5px 10px',
  margin: '0 0 0 0 ',
  transition: 'all 0.1s ease',
  backgroundColor:"gray",
  width:"9%",
};

export default function SignUp() {
  const [model, setModel] = useState<any>({});
  const navigate = useNavigate();
  const fillModel = (key: string, val: any) => {
    setModel({ ...model, [key]: val });
  };

  const handleSubmit  = () => {
    fbSignUp(model).then((res:any) => {
      console.log(...res)
      navigate(`/login`)
    }) .catch((err:any) =>{
      console.log(err)
    } )

  }

  const handleLogin = () => {
    navigate(`/login`)
  }

  return (
    <div style={containerStyle}>
      <div style={formStyle}>
        <div style={{ padding: '20px' }}>
          <h1 style={headingStyle}>SIGN UP</h1>
        </div>

        <div style={{ padding: '17px' }}>
          <CPInput
            value={model.name}
            onChange={(e: any) => fillModel("name", e.target.value)}
            label="Name"
            style={{ width: '100%' }}
          />
            </div>
            <div style={{ padding: '17px' }}>
          <CPInput
            value={model.email}
            onChange={(e: any) => fillModel("email", e.target.value)}
            label="Email"
            style={{ width: '100%' }}
          />
         
            </div>
            <div  style={{ padding: '17px' }}>
            <CPInput
            value={model.Username}
            onChange={(e: any) => fillModel("Username", e.target.value)}
            label="Username"
            style={{ width: '100%' }}
          />
          </div>
          <div  style={{ padding: '17px' }}>
            <CPInput
            value={model.Contact}
            onChange={(e: any) => fillModel("Contact", e.target.value)}
            label="Contact"
            style={{ width: '100%' }}
          />
          </div>
        <div style={{ padding: '17px' }}>
          <CPInput
            value={model.password}
            onChange={(e: any) => fillModel("password", e.target.value)}
            label="Password"
            type="password"
            style={{ width: '100%' }}
          />
        </div>
        <div style={{ padding: '17px' }}>
        <CPSelect
              label="Blood Group"
              onChange={(e:any) => fillModel("bloodG", e.target.value)}
              options={[
                {       
                 displayName: "none"
               },
               {
                 value: "O",
                 displayName: "O",
               },
               {
                 value: "O+",
                 displayName: "O+",
               },
               {
                 value: "O-",
                 displayName: "O-",
               },
               {
                 value: "A",
                 displayName: "A",
               },
               {
                 value: "A+",
                 displayName: "A+",
               },
               {
                 value: "B",
                 displayName: "B",
               },
               {
                 value: "B+",
                 displayName: "B+",
               },
               {
                 value: "AB",
                 displayName: "AB",
               },
             ]}
            />
        </div>
        <div style={{ padding: '16px' ,  justifyContent: 'center' , display: 'flex' }}>
          <CPButton style={{ color: "white", backgroundColor: "#33b249" }} onClick={handleSubmit} label="Sign Up" className="login" />
        </div>
        <div style={{ padding: '16px' ,  justifyContent: 'center' , display: 'flex' }}>
        <p  className="login2"  style={{ color: "white"  }} onClick={handleLogin}>Login</p>
        </div>
      </div>
    </div>
  );
}
