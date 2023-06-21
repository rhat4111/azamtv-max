import { default as HomeContainer } from "../containers/home/home";
import Radio from "../components/radio/radio";
import Layout from "../components/layout/layout/layout";

const Player = () => {
  return (
    <>
      <Layout active="radio">
        <HomeContainer />
      </Layout>
      <Radio />
    </>
  );
};

export default Player;
