import { default as MoviesContainer } from "../../containers/movies/movies/movies";
import Layout from "../../components/layout/layout/layout";

const Sports = () => {
  return (
    <Layout active="movies">
      <MoviesContainer />
    </Layout>
  );
};

export default Sports;
