import { useState } from "react";
import TextField from '@mui/material/TextField';
import { useHistory } from 'react-router-dom';
import { Button } from "@mui/material";

export function AddPlaces() {
    const [name, setName] = useState("");
    const [poster, setPoster] = useState("");
    const [summary, setSummary] = useState("");
    const [trailer, setTrailer] = useState("");
    const addPlace=() => {
        const newPlace = {
            name,
            poster,
            summary,
            trailer
        };
        
        fetch(`https://619dc51f131c600017089034.mockapi.io/tourist`,{
            method:"POST",
            body:JSON.stringify(newPlace),
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then((data)=>data.json())
        .then(()=>history.push('/places'))

    }
    const history = useHistory();
    return (
        <div className='add-place'>
            <TextField
            variant="filled"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder='Enter the Name' />
            <TextField
            variant="filled"
                value={poster}
                onChange={(event) => setPoster(event.target.value)}
                placeholder='Enter the Place URL' />
            <TextField
            variant="filled"
                value={summary}
                onChange={(event) => setSummary(event.target.value)}
                placeholder='Enter the Summary' />
            <TextField
            variant="filled"
                value={trailer}
                onChange={(event) => setTrailer(event.target.value)}
                placeholder='Enter the Summary' />
            <Button  onClick={addPlace}>
                Add Place
            </Button>
        </div>
    );
}
