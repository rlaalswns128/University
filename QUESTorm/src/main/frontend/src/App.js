import MainLayout from "./view/layout/Main";

export default function App() {

  return (
    <MainLayout />
  );
} 


// 하단부터 폐기 자료
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import logo from "./logo.svg";


// import SignUp from "./views/Authentification/SignUp";
// function App() {
//   // const [connection, setConnection] = useState('');

//   // const connectionTest = () => {
//   //   axios.get('http://localhost:8080').then((response) => {
//   //     setConnection(response.data);
//   //   }).catch((error) => {
//   //     setConnection(error.message);
//   //   })
//   // }

//   // useEffect(() => {
//   //   connectionTest();
//   // }, []);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//       </header>
//       <SignUp />
//     </div>
//   );
// }

// export default App;