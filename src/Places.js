import { useState } from "react";
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { IconButton } from '@mui/material';
import { useHistory } from 'react-router-dom';
import InfoIcon from '@mui/icons-material/Info';

export function Places({ name, poster, summary,deleteButton,editButton,id}) {
    const history=useHistory();
    const [show, setShow] = useState(true);
    const descriptionStyles = { display: show ? "block" : "none" };
    return (
        <Card className='places-container'>
            <img
                src={poster}
                alt=''
                className='places-poster' />
            <CardContent>
            <h3 className='places-name'>{name}</h3>
            <ArrowDropDownCircleOutlinedIcon onClick={() => setShow(!show)}>Toggle Summary</ArrowDropDownCircleOutlinedIcon>
            {show ? <p className='places-summary'>{summary}</p> : ""}
            <IconButton onClick={()=>history.push(`/places/${id}`)}>
            <InfoIcon/>
            </IconButton>
            {deleteButton}
            {editButton}
            </CardContent>
        </Card>
    );
}
