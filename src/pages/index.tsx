import { default as HomeContainer } from "../containers/home/home";
import Layout from "../components/layout/layout/layout";

const Home = () => {
  return (
    <Layout active="home" authorized={false}>
      <HomeContainer />
    </Layout>
  );
};

export default Home;
