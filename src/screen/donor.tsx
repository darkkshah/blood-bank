import React, { useEffect, useState } from 'react'
import { fbGet } from '../config/firebasemethods';
import { useSelector } from 'react-redux';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';

export default function Donor() {
    const [data , setData] = useState<any>([]);
    const selector = useSelector((state:any) => state.user)
    const blood = selector && selector[0] && selector[0].bloodG;

    const O = "O";
    const A = "A";
    const B = "B";
    const AB = "AB";

    const getData = () => {
        fbGet("users")
        .then((res : any) => {
            console.log(res);
            if( blood == O)
            { 
                const a = res.map((x:any) => x )
                setData([...a])
                const b = res.filter((x:any) => x.bloodG == blood )
                setData([...b])
            }
            if(blood == A)
            {
                const a = res.filter((x:any) => x.bloodG == AB )
                const b = res.filter((x:any) => x.bloodG == blood )
                setData([...a,...b])
            }
            if(blood == B) 
            {
                const a = res.filter((x:any) => x.bloodG == AB )
                const b = res.filter((x:any) => x.bloodG == blood )
                setData([...a,...b])
            }
            if(blood == AB)
            {
                const b = res.filter((x:any) => x.bloodG == blood )
                setData([...b])
            }
        })
        .catch((err) =>{
         console.log(err)
        });
      };
    useEffect(() => {
      getData();
    },[])
  return (
    <div>
      <div className='cards'>
          {data.map((x:any) =>
          <div className='cardin'>
            <p>BLOOD ACCEPTORS</p>
            <h5>Name: {x.name}</h5>
            <p>Blood Group: {x.bloodG}</p>
            <p>Username= {x.Username}</p>
            <p>Contact= {x.Contact}</p>
            <p>Email= {x.Email}</p>
          </div>
          )}
        </div>
    </div>
  )
}
