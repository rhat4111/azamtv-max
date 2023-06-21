import { default as TVSeriesContainer } from "../../containers/tv-series/tv-series/tv-series";
import Layout from "../../components/layout/layout/layout";

const TVSeries = () => {
  return (
    <Layout active="tv-series">
      <TVSeriesContainer />
    </Layout>
  );
};

export default TVSeries;
