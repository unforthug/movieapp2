import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const movieSlice = createSlice({

    name : "movie",

    initialState : {movies  : [{
        id : uuidv4(),
        title : "the godfather",
        description : "Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.",
        posterUrl : "https://upload.wikimedia.org/wikipedia/en/a/af/The_Godfather%2C_The_Game.jpg" ,
        rating : 9 ,
        videoUrl : "https://youtu.be/UaVTIH8mujA",
        isUpdated : false,
    },{
        id : uuidv4(),
        title : "The lord of the rings",
        description : "The Lord of the Rings is a series of three epic fantasy adventure films directed by Peter Jackson, based on the novel The Lord of the Rings by J. R. R. Tolkien. The films are subtitled The Fellowship of the Ring, The Two Towers, and The Return of the King." ,
        posterUrl : "https://i.pinimg.com/originals/f1/43/69/f14369fb56e47283f02038b920654056.jpg",
        rating : 10,
        videoUrl : "https://youtu.be/x8UAUAuKNcU",
        isUpdated : false,
    },{
        id : uuidv4(),
        title : "The Shawshank Redemption",
        description : "Andy Dufresne, a successful banker, is arrested for the murders of his wife and her lover, and is sentenced to life imprisonment at the Shawshank prison. He becomes the most unconventional prisoner.",
        posterUrl : "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg" ,
        rating : 8,
        videoUrl : "https://youtu.be/NmzuHjWmXOc",
        isUpdated : false,
    },{
        id : uuidv4(),
        title : "Fight Club",
        description : "Unhappy with his capitalistic lifestyle, a white-collared insomniac forms an underground fight club with Tyler, a careless soap salesman. Soon, their venture spirals down into something sinister.",
        posterUrl : "https://flxt.tmsimg.com/assets/p23069_p_v8_aa.jpg" ,
        rating : 6,
        videoUrl : "https://youtu.be/qtRKdVHc-cE",
        isUpdated : false,
    },{
        id : uuidv4(),
        title : "Seven",
        description : "A serial killer begins murdering people according to the seven deadly sins, and it is up to a detective who is about to retire and another who just moved to the city to bring him to justice.",
        posterUrl : "https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg" ,
        rating : 5,
        videoUrl : "https://youtu.be/znmZoVkCjpI",
        isUpdated : false, 
    }]},

    reducers : {
    deleteMovie : (state,action)=>{
    state.movies = state.movies.filter((el)=> el.id !== action.payload   )   
    },
    updateStat : (state,action) => {
    state.movies.map((el)=> el.id !== action.payload ? el : el.isUpdated = true)
    },
    changeStat : (state,action) => {
    state.movies.map((el) => el.isUpdated ? el.isUpdated = false : el )
    },
    AddMovie : (state,action) =>{
    state.movies.push(action.payload)
    },
    SearchMovie : (state,action) =>{
     state.movies.filter((el)=> el.title.trim().toLocaleLowerCase().includes(action.payload))
    },
}})

export const {deleteMovie,updateStat,changeStat,AddMovie,SearchMovie} = movieSlice.actions
export default movieSlice.reducer