import Button from "react-bootstrap/Button";

const CustomButton = ({ text, action, variantName }) => {
  return (
    <Button variant={variantName} onClick={action}>
      {text}
    </Button>
  );
};

export default CustomButton;
