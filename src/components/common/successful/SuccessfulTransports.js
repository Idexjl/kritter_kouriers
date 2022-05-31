import PropTypes from "prop-types";

const SuccessfulTransports = ({ total }) => {
  return <h1>Here are up to the last {total} successful transports</h1>;
};

SuccessfulTransports.propTypes = {
  total: PropTypes.number,
};

export default SuccessfulTransports;
