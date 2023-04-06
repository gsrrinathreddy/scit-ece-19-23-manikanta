import { Typography } from '@mui/material';
import {useState,useEffect} from 'react';
import axios from 'axios';

export default function Aboutme(){
const [loader,setLoader] = useState(true);
    const [aboutme,setAboutme] = useState(null);

    const connectToServer = async  () => axios.get('http://localhost:9000/aboutme')
                                            .then(res=>{
                                        
                                                console.log(res.data);
                                                setAboutme(res.data);
                                                setLoader(false)
                                            }).catch(err=>console.log(err))
useEffect(()=>{
   connectToServer();
},[])


    return(
        <>
<Typography>Name: MANIKANTA</Typography>
<Typography>Father Name: KUMARASWAMY</Typography>
<Typography>Mother Name:KALYANI</Typography>
<Typography>Email: gmanikanta1144@gmail.com</Typography>
<Typography>Phone No.: 7995522302</Typography>
        </>
        
    )
    }