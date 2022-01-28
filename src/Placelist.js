import { Places } from "./Places";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


export function Placelist() {
    const [list,setPlaceList]=useState([]);
    const getList=()=>{
        fetch("https://619dc51f131c600017089034.mockapi.io/tourist",{
            method:"GET",
        })
        .then((data)=>data.json())
        .then((mvs)=>setPlaceList(mvs));
    };
    useEffect(getList,[]);
    const deletePlace=(id,index)=>{
    // const deleteIndex=index;
    // const remainingPlaces=list.filter((mv,idx)=>{
    //     return deleteIndex!==idx});
    //         setPlaceList(remainingPlaces);

            fetch(`https://619dc51f131c600017089034.mockapi.io/tourist/${id}`,{
            method:"DELETE",
            })
            .then((data)=>data.json())
            .then(()=>getList())
            // .then((mvs)=>setPlaceList(mvs));
            };
    const history=useHistory();
    return (
        <div className='places-list'>
            <h1>welcome to the place collections</h1>
            <div className="places-head">
            {list.map(({ name, poster, summary,id},index) => (
                <Places
                    key={id}
                    deleteButton={
                        <IconButton onClick={()=>deletePlace(id)} 
                        aria-label="delete" 
                        size="large">
                        <DeleteIcon />
                        </IconButton>}
                    editButton={
                            <IconButton onClick={()=>history.push(`/places/edit/${id}`)} 
                            aria-label="delete" 
                            size="large">
                            <EditIcon />
                            </IconButton>}
                    id={id}
                    name={name}
                    poster={poster}
                    summary={summary}
                    />
            ))}
            </div>
        </div>
    );
}

