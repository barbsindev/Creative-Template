import "./App.css";
import React from "react";
import FirstSection from "./sections/firstsection/FirstSection";
import SecondSection from "./sections/secondsection/SecondSection";
import ThirdSection from "./sections/thirdsection/ThirdSection";
import FourthSection from "./sections/fourthsection/FourthSection";
import FifthSection from "./sections/fifthsection/FifthSection";
import SixthSection from "./sections/sixthsection/SixthSection";
import LastSection from "./sections/lastsection/LastSection";
import { userContext } from "./components/context/UserContext";

function App() {
  // const { user, changeUser } = useContext(userContext);
  // const { user, changeUser } = useContext(userContext);
  // console.log(user);
  // const [stopScroll, setStopScroll] = useState(false);

  // useEffect(() => {
  //   if (!user.canScroll) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "initial";
  //   }
  // }, [user, changeUser]);

  return (
    // <div className={user.canScroll ? "stop_scroll" : "scroll"}>
    <>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <LastSection />
    </>
  );
}

export default App;
