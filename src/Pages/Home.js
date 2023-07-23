import React,{useEffect, useState} from "react";
import "../Css/Home.css";
import Cards from "../Components/Cards";
import BetTokens from "../Components/BetTokens";
import BetButtons from "../Components/BetButtons";
import ClockTimer from "../Components/ClockTimer";
import NewBetButtons from "../Components/NewBetButtons";
// import { io } from "socket.io-client";
import axios from "axios";

const Home = () => {
  const [parentVariable, setParentVariable] = useState(false);
  // useEffect(() => {
  //   const socket = io.connect('https://localhost:3001'); // Replace with your server URL
  //   // const socket = io.connect('https://localhost:3001'); // Replace with your server URL
    
  //   socket.on('connect', () => {
  //     console.log('Connected to Socket.io server');
  //   });

  //   socket.on('disconnect', () => {
  //     console.log('Disconnected from Socket.io server');
  //   });

  //   // Clean up the socket connection when the component unmounts
  //   return () => {
  //     socket.disconnect();
  //   };
  // }, []);

  const [objects, setObject] = useState({
    userId: "64b57c4ccbf349ceabb25522",
    betType: "",
    betAmount: [],
    selectedNumbers: [],
    round_id: "03",
  });

  const makeRequest = async (payload) => {
    try {
      const url = "https://api.matkaking.fun/api/bet";
        const response = await axios.post(url, payload);
        console.log("Response:", response.data);
    } catch (error) {
      console.log(error);
      
    }
  }
  // const serializedPayload = customStringify(payload);
  
  useEffect(() => {
    var payLoad = JSON.parse(localStorage.getItem('payLoad'));
    if (payLoad)
    { // console.log(payLoad.betType);
      makeRequest(payLoad);
      // localStorage.clear();  
    }
  }, [parentVariable]);

  const handleChildVariableChange = (newValue) => {
    setParentVariable(newValue);
  }

  return (
    <div className="container1">
      <h1>MATKA UI</h1>
      <Cards />
      <BetTokens objects={objects} />
      <ClockTimer />
      <BetButtons />
      <NewBetButtons
        objects={objects}
        parentVariable={parentVariable}
        onChildVariableChange={handleChildVariableChange}
      />
    </div>
  );
};

export default Home;