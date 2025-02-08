import { Button } from "@mui/material";

const ColorButton = ({ color, setColor }) => {
  return (
    <Button
      variant="contained"
      onClick={() => setColor(color)}
      style={{ backgroundColor: color, color: color === "black" ? "white" : "black" }}
    >
      {color.charAt(0).toUpperCase() + color.slice(1)}
    </Button>
   
  
  );
};

export default ColorButton;
