// import "./App.css";
// import React, { useEffect, useState } from "react";
// import Login from "./components/login";
// import { SocialIcon } from 'react-social-icons';

function App() {
  const [showFormFb, setShowFormFb] = useState(false);
  const [showFormTw, setShowFormTw] = useState(false);
  const [showFormSc, setShowFormSc] = useState(false);
  const [showFormIg, setShowFormIg] = useState(false);
  const [showFormtiktok, setShowFormtiktok] = useState(false);
  const handleClickFb = () => {
    
    setShowFormFb(true);
    setShowFormTw(false);
    setShowFormSc(false);
    setShowFormIg(false);
    setShowFormtiktok(false);
  };
  const handleClickTw = () => {
    setShowFormTw(true);
    setShowFormFb(false);
    setShowFormSc(false);
    setShowFormIg(false);
    setShowFormtiktok(false);
  };
  const handleClickSc = () => {
    setShowFormSc(true);
    setShowFormFb(false);
    setShowFormTw(false);
    setShowFormIg(false);
    setShowFormtiktok(false);

  };
  const handleClickIg = () => {
    setShowFormIg(true);
    setShowFormFb(false);
    setShowFormTw(false);
    setShowFormSc(false);
    setShowFormtiktok(false);

  };
  const handleClickTiktok = () => {
    setShowFormIg(false);
    setShowFormFb(false);
    setShowFormTw(false);
    setShowFormSc(false);
    setShowFormtiktok(true);

//   };

  return (
    <div className="Homecontainer">
      <h1>Welcome to Survey</h1>
      <button onClick={handleClickFb}>Login with Facebook    <SocialIcon network="facebook"/></button>
      {showFormFb && (
        <Login platform = "Facebook"/>
      )}
      <button onClick={handleClickTw}>Login with Twitter     <SocialIcon network="twitter"/></button>
      {showFormTw && (
        <Login platform = "Twitter"/>
      )}
      <button onClick={handleClickSc}>Login with Snapchat    <SocialIcon network="snapchat"/></button>
      {showFormSc && (
        <Login platform = "Snapchat"/>
      )}
      <button onClick={handleClickTiktok}>Login with Tiktok    <SocialIcon network="tiktok" bgColor="#db0441"/></button>
      {showFormtiktok && (
        <Login platform = "Tiktok"/>
      )}
      <button onClick={handleClickIg}>Login with Instagram    <SocialIcon network="instagram"/></button>
      {showFormIg && (
        <Login platform = "Instagram"/>
      )}
    </div>
  );
}

// export default App;
