import { useState,useEffect } from "react";
import { useHistory,useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";

export function EditPlace(){
    const { id } = useParams();
    const [list,setPlace]=useState(null);
    const getList=()=>{
        fetch(`https://619dc51f131c600017089034.mockapi.io/tourist/${id}`,{
            method:"GET",
        })
        .then((data)=>data.json())
        .then((mvs)=>setPlace(mvs));
    };
    useEffect(getList,[]);
    // const lists = list[id];
    // console.log(lists);
    console.log(list)

    return list? <UpdatePlace list={list}/>:"";
}

function UpdatePlace({list}) {
    console.log("updateMovie",list)
    const [name, setName] = useState(list.name);
    const [poster, setPoster] = useState(list.poster);
    const [summary, setSummary] = useState(list.summary);
    const [trailer, setTrailer] = useState(list.trailer);
    const editPlace=() => {
        const updatedPlace = {
            name,
            poster,
            summary,
            trailer
        };
        
        fetch(`https://619dc51f131c600017089034.mockapi.io/tourist/${list.id}`,{
            method:"PUT",
            body:JSON.stringify(updatedPlace),
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then((data)=>data.json())
        .then(()=>history.push('/places'))

    }
    const history = useHistory();
    return (
        <div className='edit-place'>
            <TextField variant="filled"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder='Enter the Name' />
                <br/>
            <TextField variant="filled"
                value={poster}
                onChange={(event) => setPoster(event.target.value)}
                placeholder='Enter the Place URL' />
                <br/>
            <TextField variant="filled"
                value={summary}
                onChange={(event) => setSummary(event.target.value)}
                placeholder='Enter the Summary' />
                <br/>
            <TextField variant="filled"
                value={trailer}
                onChange={(event) => setTrailer(event.target.value)}
                placeholder='Enter the trailer url' />
                <br/>
            <Button onClick={editPlace}>
                Save
            </Button>
        </div>
    );
}
