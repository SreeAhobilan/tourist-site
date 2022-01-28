import { useParams, useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useEffect, useState } from "react";

export function PlaceDetails() {
    const { id } = useParams();
    const [list,setPlace]=useState([]);
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
    const history = useHistory();
    return (
        <div className='place-details-container'>
            <iframe
                width="100%"
                height="523"
                src={list.trailer}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
            <Button onClick={() => history.push(`/places`)} variant="contained">Back</Button>
        </div>
    );
}
