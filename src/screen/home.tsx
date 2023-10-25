import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import { useEffect, useState } from 'react';
import { fbGet, fbLogOut } from '../config/firebasemethods';
import CPButton from '../component/CPbutton';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

export default function Home() {
  const [data , setData] = useState<any>([]);
  const navigate = useNavigate();
  const getData = () => {
    fbGet("users")
    .then((res : any) => {
      console.log(res);
      setData([...res])
    })
    .catch((err) =>{
     console.log(err)
    });
  };
useEffect(() => {
  getData();
},[])
const acceptor = () => {
  navigate("/acceptor")
}
const donor = () => {
  navigate("/donor")
};

let logOut = () => {
  fbLogOut()
    .then((res) => {
      navigate("/login");
    })
    .catch((err) => {
      console.log(err);
    });
};
  return (
    <div className='mdvh'>
      <div className='container' >
          
        <h1>MODULE "B" HACKATHON</h1>
        <h1>BLOOD BANK(APPLICATION)</h1>
      </div><br />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
  <CPButton style={{ color: "black", backgroundColor: "#55c2da", margin: "5px" }} label="Blood Need" onClick={acceptor} />
  <CPButton style={{ color: "black", backgroundColor: "#55c2da", margin: "5px"}} label="Blood Donate" onClick={donor} />
</div>

        <div className='cards'>
          {data.map((x:any) =>
          <div className='cardin'>
            <h2>BLOOD DONORS/ACCEPTORS</h2>
            <h4>Name= {x.name}</h4>
            <p>Blood Group= {x.bloodG}</p>
            <p>Username= {x.Username}</p>
            <p>Contact= {x.Contact}</p>
            <p>Email= {x.Email}</p>
          </div>
          )}
        </div>
        <div className='sgnout' style={{ display: 'flex', justifyContent: 'center' }}>
        <CPButton style={{ color: "white", backgroundColor: "red" }} label="LogOut" onClick={logOut} />
        </div>
    </div>
  )
}
