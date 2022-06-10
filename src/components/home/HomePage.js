import Welcome from "./Welcome";
import SuccessfulTransports from "../common/successful/SuccessfulTransports";
import UnreliableTransporters from "../common/unreliable/UnreliableTransporters";

import "./HomePage.css";

const HomePage = (props) => {
  return (
    <>
      <Welcome></Welcome>
      <SuccessfulTransports total={10}></SuccessfulTransports>
      <UnreliableTransporters></UnreliableTransporters>
    </>
  );
};

export default HomePage;
