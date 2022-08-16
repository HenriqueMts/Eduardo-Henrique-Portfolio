import Header from "../Components/Header";
import HomeAbout from "../Components/Section-Home-About";
import HomeMain from "../Components/Section-Home-Main";
import HomeProjects from "../Components/Section-Home-Projects";

import { Main } from "./styles";

const Home = () => {
  return (
    <Main>
      <Header />
      <HomeMain />
      <HomeProjects />
      <HomeAbout />
    </Main>
  );
};
export default Home;
