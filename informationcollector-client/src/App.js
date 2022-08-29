import React, { useEffect } from "react";
import axios from "axios";
import LandingPage from "./component/landingpage";
import Navbar from "./component/navbar";
import collate from "./Utils/collator";

function App() {
  useEffect(() => {
    let call = async () => {
      let details = await collate();
      let {screen} = details;
      details.dimension = `${screen.availWidth} x ${screen.availHeight}`;      
      axios.post(`/app`, { details });
    };

    call();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <LandingPage />
    </div>
  );
}

export default App;
