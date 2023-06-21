import { default as TVSeriesDetailContainer } from "../../containers/tv-series/detail/detail";
import Layout from "../../components/layout/layout/layout";

const TVSeriesDetail = () => {
  return (
    <Layout active="tv-series">
      <TVSeriesDetailContainer />
    </Layout>
  );
};

export default TVSeriesDetail;
