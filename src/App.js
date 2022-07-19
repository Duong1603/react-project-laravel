import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
// code for firebase
// --------------------------------------------------------------//
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBRjk7DWnH4GHbQJMPw3ajpbExE-OhcEpo",
//   authDomain: "phi-phi.firebaseapp.com",
//   projectId: "phi-phi",
//   storageBucket: "phi-phi.appspot.com",
//   messagingSenderId: "88924290787",
//   appId: "1:88924290787:web:b07e792062b8546b9c4fd6",
//   measurementId: "G-TZTYM030P9"
// };
// --------------------------------------------------------------//
// Initialize Firebase




// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
function App() {
    return (
        <Router>
            <Routes>
            {
                publicRoutes.map((route,index)=>{
                const Page = route.component;
                return <Route key={index} path={route.path} element={<Page/>} />
                })
            }
            </Routes>
        </Router>
    )
}

export default App;
