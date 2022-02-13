import "./App.css";
import React, { useState, useContext, useEffect } from "react";
import FirstPage from "../src/Pages/FirstPage/FirstPage";
import SecondPage from "../src/Pages/SecondPage/SecondPage";
import ThirdPage from "../src/Pages/ThirdPage/ThirdPage";
import FourthPage from "../src/Pages/FourthPage/FourthPage";
import FifthPage from "./Pages/FifthPage/FifthPage";
import SixthPage from "./Pages/SixthPage/SixthPage";
import LastPage from "./Pages/LastPage/LastPage";
import { userContext } from "./components/Context/UserContext";

function App() {
  // const { user, changeUser } = useContext(userContext);
  const { user, changeUser } = useContext(userContext);
  console.log(user);
  const [stopScroll, setStopScroll] = useState(false);

  // useEffect(() => {
  //   if (!user.canScroll) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "initial";
  //   }
  // }, [user, changeUser]);

  return (
    <div className={user.canScroll ? "stop_scroll" : "scroll"}>
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <FifthPage />
      <SixthPage />
      <LastPage />
    </div>
  );
}

export default App;
