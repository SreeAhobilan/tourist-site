import './App.css';
import {useHistory,Route,Switch} from "react-router-dom";
import{useEffect, useState} from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AppBar, Toolbar } from '@mui/material';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Placelist } from './Placelist';
import { EditPlace } from './EditPlace';
import { AddPlaces } from './AddPlaces';
import { NotFound } from './NotFound';
import { PlaceDetails } from './PlaceDetails';

export default 

function App(){
    const [mode,setMode]=useState("dark");
    const theme = createTheme({
        palette: {
            mode: mode,
        },
    });
    const history=useHistory();
    // const INITIAL_PLACES=[
    //     {
    //     "name": "Rameshwaram",
    //     "trailer":"https://www.youtube.com/embed/_22G4cUsEGQ",
    //     "poster": "https://static.toiimg.com/photo/71048356/rameshwaram.jpg?width=748&resize=4",
    //     "summary": "Rameswaram is a town on Pamban Island, in the southeast Indian state of Tamil Nadu. It’s known for Ramanathaswamy Temple, a Hindu pilgrimage site with ornate corridors, huge sculpted pillars and sacred water tanks. Devotees bathe in the waters of Agni Theertham, off the beach east of the temple. Gandamadana Parvatham is a hill with island views. A chakra (wheel) here is said to bear an imprint of Lord Rama’s feet.",
    //     "id": "101"
    //     },
    //     {
    //     "name": "Hampi",
    //     "trailer":"https://www.youtube.com/embed/K4YGq312gpE",
    //     "poster": "https://images.newindianexpress.com/uploads/user/imagelibrary/2021/11/15/w1200X800/Highlight_on.jpg",
    //     "summary": "Hampi is an ancient village in the south Indian state of Karnataka. It’s dotted with numerous ruined temple complexes from the Vijayanagara Empire. On the south bank of the River Tungabhadra is the 7th-century Hindu Virupaksha Temple, near the revived Hampi Bazaar. A carved stone chariot stands in front of the huge Vittala Temple site. Southeast of Hampi, Daroji Bear Sanctuary is home to the Indian sloth bear.",
    //     "id": "102"
    //     },
    //     {
    //     "name": "Madurai",
    //     "trailer":"https://www.youtube.com/embed/bygqUbmPslE",
    //     "poster": "https://upload.wikimedia.org/wikipedia/commons/7/7c/Temple_de_M%C3%AEn%C3%A2ksh%C3%AE01.jpg",
    //     "summary": "Madurai is an energetic, ancient city on the Vaigai River in the South Indian state of Tamil Nadu. Its skyline is dominated by the 14 colorful gopurams (gateway towers) of Meenakshi Amman Temple. Covered in bright carvings of Hindu gods, the Dravidian-style temple is a major pilgrimage site. Millions attend the processions and ceremonies of April's Chithirai Festival celebrating Meenakshi and Lord Vishnu.",
    //     "id": "103"
    //     },
    //     {
    //     "name": "Kodaikanal",
    //     "trailer":"https://www.youtube.com/embed/EY49HSGGZKA",
    //     "poster": "https://travocrm-images.s3.ap-south-1.amazonaws.com/16230638041.jpg",
    //     "summary": "Kodaikanal is a hill town in the southern Indian state of Tamil Nadu. It’s set in an area of granite cliffs, forested valleys, lakes, waterfalls and grassy hills. At 2,000 meters above sea level, the town centers around man-made, star-shaped Kodaikanal Lake, bordered by evergreen forest. Rowing boats can be hired, and hikers and cyclists follow the 5k Lake Road path around the shore.",
    //     "id": "104"
    //     },
    //     {
    //     "name": "Hyderabad",
    //     "trailer":"https://www.youtube.com/embed/RAcf5EJmbq0",
    //     "poster": "https://oneday.travel/wp-content/uploads/one-day-hyderabad-local-sightseeing-tour-package-private-cab-header.jpg",
    //     "summary": "Hyderabad is the capital of southern India's Telangana state. A major center for the technology industry, it's home to many upscale restaurants and shops. Its historic sites include Golconda Fort, a former diamond-trading center that was once the Qutb Shahi dynastic capital. The Charminar, a 16th-century mosque whose 4 arches support towering minarets, is an old city landmark near the long-standing Laad Bazaar.",
    //     "id": "105"
    //     },
    //     {
    //     "name": "Kanyakumari",
    //     "trailer":"https://www.youtube.com/embed/8QuuRsH-GkI",
    //     "poster": "https://kanyakumaritourism.in/images/headers/kanyakumari-tourism-kanyakumari-tourist-places-to-visit-kanyakumari-packages.jpg",
    //     "summary": "Kanyakumari is a coastal town in the state of Tamil Nadu on India's southern tip. Jutting into the Laccadive Sea, the town was known as Cape Comorin during British rule and is popular for watching sunrise and sunset over the ocean. It's also a noted pilgrimage site thanks to its Bagavathi Amman Temple, dedicated to a consort of Shiva, and its Our Lady of Ransom Church, a center of Indian Catholicism.",
    //     "id": "106"
    //     },
    //     {
    //     "name": "Chennai",
    //     "trailer":"https://www.youtube.com/embed/1D9-LfV-2ZI",
    //     "poster": "https://upload.wikimedia.org/wikipedia/commons/d/d9/Chennai_-_bird%27s-eye_view.jpg",
    //     "summary": "Chennai, on the Bay of Bengal in eastern India, is the capital of the state of Tamil Nadu. The city is home to Fort St. George, built in 1644 and now a museum showcasing the city’s roots as a British military garrison and East India Company trading outpost, when it was called Madras. Religious sites include Kapaleeshwarar Temple, adorned with carved and painted gods, and St. Mary’s, a 17th-century Anglican church.",
    //     "id": "107"
    //     }
    // ];
    const [placeList,setPlaceList]=useState([]);

    useEffect(()=>{
        fetch("https://619dc51f131c600017089034.mockapi.io/tourist",{
            method:"GET",
        })
        .then((data)=>data.json())
        .then((mvs)=>setPlaceList(mvs));
    },[]);

    return(
        <ThemeProvider theme={theme}>
            <Paper sx={{minHeight:"100vh"}} elevation={3} >
                <div className='App'>
            <AppBar position="static">
                <Toolbar>
                    <Button color='inherit' onClick={()=>history.push("/")}>Home</Button>
                    <Button color='inherit' onClick={()=>history.push("/places")}>Places</Button>
                    <Button color='inherit' onClick={()=>history.push("/places/add")}>Add Places</Button>
                    <Button
                    style={{marginLeft:"auto"}}
                    startIcon={theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />} 
                    color='inherit' 
                    onClick={()=>setMode(mode==="light"?"dark":"light")}>
                        {mode==="light"?"dark":"light"}Theme
                    </Button>
                </Toolbar>
            </AppBar>

        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/places">
                <Placelist/>
            </Route>
            <Route exact path="/places/add">
                <AddPlaces/>
            </Route>
            <Route exact path="/places/:id">
                <PlaceDetails/>
            </Route>
            <Route exact path="/places/edit/:id">
            <EditPlace/>
            </Route>
            <Route exact path="**">
                <NotFound/>
            </Route>
        </Switch>
                </div>
            </Paper>
        </ThemeProvider>
    );
}

function Home(){
    return(
    <div className='home'>
        <h1 className='home-text'>Explore South India</h1>
    </div>
    )}
