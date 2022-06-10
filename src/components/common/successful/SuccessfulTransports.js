import PropTypes from "prop-types";
import Card from "../card/Card";

const renderBanner = (total) => {
  if (total > 0) {
    return <h1>Here are some of the last completed transports</h1>;
  } else {
    return <h1>Completed Transports</h1>;
  }
};

const SuccessfulTransports = ({ total }) => {
  return (
    <Card>
      {renderBanner(total)}
      <p>
        <strong>REPLACE ME WITH A GRID OF LAST TRANSPORTS</strong>
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Interdum consectetur
        libero id faucibus nisl tincidunt eget nullam. Elit pellentesque
        habitant morbi tristique senectus et netus et malesuada. Venenatis a
        condimentum vitae sapien. Sociis natoque penatibus et magnis dis. Nisi
        lacus sed viverra tellus in. Consequat semper viverra nam libero justo
        laoreet. At consectetur lorem donec massa sapien faucibus et molestie
        ac. Lorem ipsum dolor sit amet consectetur adipiscing.
      </p>
    </Card>
  );
};

SuccessfulTransports.propTypes = {
  total: PropTypes.number,
};

export default SuccessfulTransports;
