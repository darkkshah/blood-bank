import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fbAuth } from "../config/firebasemethods";

export default function Protect(props:any) {
    const {Screen} = props;
    
    const [loader , setLoader] = useState(true);
    const navigate = useNavigate();
    
    let checkAuth = () => {
        setLoader(true);

        fbAuth()
        .then((res:any)=> {
            setLoader(false);
        })
        .catch((err:any) => {
            setLoader(false);
            navigate("/login");
        })}
        useEffect(() => {
            checkAuth()
        },[]);
  return loader? 
  <>
  Loading....
  </>: 
  <div>
  <Screen/>
  </div>
  
  
}
