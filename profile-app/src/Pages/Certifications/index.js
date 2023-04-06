
import {useState,useEffect} from 'react';
import axios from 'axios';
import { Typography } from '@mui/material';
export default function Certifications(){
const [loader,setLoader] = useState(true);
    const [certifications,setCertifications] = useState(null);

    const connectToServer = async  () => axios.get('http://localhost:9000/Certifications')
                                            .then(res=>{
                                        
                                                console.log(res.data);
                                                setCertifications(res.data);
                                                setLoader(false)
                                            }).catch(err=>console.log(err))
useEffect(()=>{
   connectToServer();
},[])

    return(
<>
<h5>Goldsmansach
    google
</h5>
</>    
    )
    
}