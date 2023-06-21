import { default as LiveTVContainer } from "../containers/live-tv/live-tv";
import Layout from "../components/layout/layout/layout";

const Sports = () => {
  return (
    <Layout active="live-tv">
      <LiveTVContainer />
    </Layout>
  );
};

export default Sports;
