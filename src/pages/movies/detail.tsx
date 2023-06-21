import { default as MoviesDetailContainer } from "../../containers/movies/detail/detail";
import Layout from "../../components/layout/layout/layout";

const Sports = () => {
  return (
    <Layout active="movies">
      <MoviesDetailContainer />
    </Layout>
  );
};

export default Sports;
