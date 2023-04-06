
import {useState,useEffect} from 'react';
import axios from 'axios';
import { Typography } from '@mui/material';

export default function Projects(){
const [loader,setLoader] = useState(true);
    const [projects,setProjects] = useState(null);

    const connectToServer = async  () => axios.get('http://localhost:9000/Projects')
                                            .then(res=>{
                                        
                                                console.log(res.data);
                                                setProjects(res.data);
                                                setLoader(false)
                                            }).catch(err=>console.log(err))
useEffect(()=>{
   connectToServer();
},[])

    return(
<>
<h5>FRESHER</h5>
</>    
    )
    
}