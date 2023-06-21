import { default as SportsContainer } from "../containers/sports/sports";
import Layout from "../components/layout/layout/layout";

const Sports = () => {
  return (
    <Layout active="sports">
      <SportsContainer />
    </Layout>
  );
};

export default Sports;
