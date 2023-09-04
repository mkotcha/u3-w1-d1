import Button from "react-bootstrap/Button";

const ButtonComponent = props => (
  <Button variant="primary" className="w-50">
    {props.buttonText}
  </Button>
);

export default ButtonComponent;
