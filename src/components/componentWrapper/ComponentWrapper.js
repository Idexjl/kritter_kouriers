import "./ComponentWrapper.css";

const ComponentWrapper = (props) => {
  return (
    <section className="background-section">
      {props.children}
      <br />
      <br />
    </section>
  );
};

export default ComponentWrapper;
