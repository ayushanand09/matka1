import React,{useEffect} from "react";
import "../Css/Home.css";
import Cards from "../Components/Cards";
import BetTokens from "../Components/BetTokens";
import BetButtons from "../Components/BetButtons";
import ClockTimer from "../Components/ClockTimer";
import NewBetButtons from "../Components/NewBetButtons";
import { io } from "socket.io-client";

const Home = () => {
  useEffect(() => {
    const socket = io.connect('https://localhost:3001'); // Replace with your server URL
    // const socket = io.connect('https://localhost:3001'); // Replace with your server URL
    
    socket.on('connect', () => {
      console.log('Connected to Socket.io server');
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from Socket.io server');
    });

    // Clean up the socket connection when the component unmounts
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="container1">
      <h1>MATKA UI</h1>
      <Cards />
      <BetTokens />
      <ClockTimer />
      <BetButtons/>
      <NewBetButtons/>
    </div>
  );
};

export default Home;
