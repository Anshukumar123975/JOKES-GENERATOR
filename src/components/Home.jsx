import {React, useState} from "react"

const Home = () => {
    const[joke,setJoke] = useState("");
    const jokeChange = () => {
        fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
            .then((res) => res.json())
            .then((data) => setJoke(data.joke));
    }
    return(
        <div className="flex flex-col justify-center items-center bg-blue-600 bg-center bg-cover min-h-screen">
            <h1 className="text-yellow-300 p-6 text-3xl">Generate a joke by clicking on the button</h1>
            <button onClick={jokeChange} className="bg-green-400 rounded p-3 text-white">Generate a joke</button>
            <p className="p-6 text-xl text-white">{joke}</p>
        </div>
    );
};

export default Home;