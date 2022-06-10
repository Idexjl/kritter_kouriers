import { useNavigate } from "react-router";
import Button from "@mui/material/Button";
import Card from "../components/common/card/Card";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <Card>
      <h1>Oops! We couldn't find what you are looking for.</h1>
      <br />
      <Button
        onClick={() => {
          navigate("/");
        }}
      >
        Main Page
      </Button>
    </Card>
  );
};

export default PageNotFound;
