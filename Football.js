'use strict'

// GET ALL THE ELEMENTS
const NAME = document.querySelector("#name");
const STADIUMNAME = document.querySelector("#stadiumName");
const PLAYERS = document.querySelector("#noOfPlayers");
const YEARFOUNDED = document.querySelector("#yearFounded");
const DIV = document.querySelector("#responsefromdb");
let submitButton = document.querySelector("#btn");

const DELETEID = document.querySelector("#deleteID");
let delBTN = document.querySelector("#delBtn");


// CREATE THE CUSTOM METHOD
const printToScreen = (msg) => {
    const P = document.createElement("p");
    const TEXT = document.createTextNode(msg);

    P.appendChild(TEXT);
    DIV.appendChild(P);
}


const createFootball = (e) => {
    e.preventDefault();

    // get the value from the element
    const NAME_VALUE = NAME.value; 
    const STADIUM_VALUE = STADIUMNAME.value; 
    const PLAYER_VALUE = PLAYERS.value; 
    const YEARF_VALUE = YEARFOUNDED.value; 

    console.log(NAME_VALUE,STADIUM_VALUE,PLAYER_VALUE,YEARF_VALUE);

    // CREATE THE OBJECT TO BE SENT TO THE API

    let data = {
        name: NAME_VALUE,
        stadiumName: STADIUM_VALUE,
        noOfPlayers: PLAYER_VALUE,
        yearFounded: YEARF_VALUE
    };

    axios.post(`http://localhost:9092/football/create`, data, {
        headers: {
            'Access-Control-Allow-Origin': '*',
        }})
        .then((response) => printToScreen("Success!"))
        .catch((error) =>  printToScreen("ERROR!!!"));
}



const deleteTeam = () => {

    // GET THE VALUE FROM THE ID ELEMENT
    const DELID = Number(DELETEID.value);

    axios.delete(`http://localhost:9092/football/delete/${DELID}`, {
        headers:{
            'Access-Control-Allow-Origin': '*'
        }
    })
        .then((response) => printToScreen("YAY! WE DELETED IT!"))
        .catch((error) => printToScreen("SOMETHING WENT HORRIBLY WRONG"));
}


submitButton.addEventListener('click',createFootball);
delBTN.addEventListener('click',deleteTeam);



// EXERCISE

// 1. GET REQUEST

axios.get("https://reqres.in/api/users/2")
    .then( (response) => printToScreen(response.data.data.first_name))
    .catch(( error) => printToScreen("Something went wrong!!"));