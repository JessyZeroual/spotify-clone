import React from "react";
import { Container } from "../../styles/commonStyled";
import NewRelease from "../NewReleaseList/NewReleaseList";

const HomePage: React.FC = () => {
  return (
    <Container>
      <NewRelease />
    </Container>
  );
};

export default HomePage;
