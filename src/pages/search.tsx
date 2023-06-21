import { default as SearchContainer } from "../containers/search/search";
import Layout from "../components/layout/layout/layout";

const Home = () => {
  return (
    <Layout active="search">
      <SearchContainer />
    </Layout>
  );
};

export default Home;
