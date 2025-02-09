import React, { useState } from "react";
import { Box, Button, Paper } from "@mui/material";
import CurrencyCard from "./components/CurrencyCard";
import useCurrencyInfo from "./hooks/useCurrencyInfo";


const App = () => {
  const [amount, setAmount ] = useState(0);
  const [to, setTo ] = useState('INR');
  const [from, setFrom ] = useState('USD');
  const [convertedAmount, setConvertedAmount ] = useState(0);

  const currencyInfo = useCurrencyInfo(from.toUpperCase());

  const currencyOptions = Object.keys(currencyInfo);

  const swap = ()=>{
    setFrom(to);
    setTo(from);
  } 

  const convert = () =>{
    setConvertedAmount(amount * currencyInfo[to])
  }

  const BackgroundImage =
    "https://images.pexels.com/photos/3801458/pexels-photo-3801458.jpeg?auto=compress&cs=tinysrgb&w=600";

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        p: 2, // Adds padding to prevent edge tightness
      }}
    >
      <Paper
        elevation={5}
        sx={{
          width: "100%",
          maxWidth: 400,
          p: 4, // Adds padding inside the form
          borderRadius: 3,
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(255, 255, 255, 0.4)",
          textAlign: "center", // Aligns content inside the card
          m: 2, // Adds margin for spacing
        }}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          {/* From Currency */}
          <Box sx={{ width: "100%", mb: 2 }}>
            <CurrencyCard label="From" 
            amount={amount}
            onAmountChange={(amount)=>setAmount(amount)}
            currencyOptions={currencyOptions}
            onCurrencyChange={(currency)=>{
              setFrom(currency)
            }}
            selectCurrency={from}
            />
          </Box>

          {/* Swap Button */}
          <Box sx={{ my: 2 }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#1E88E5",
                color: "white",
                "&:hover": { backgroundColor: "#1565C0" },
              }}
              onClick={swap}
            >
              Swap
            </Button>
          </Box>

          {/* To Currency */}
          <Box sx={{ width: "100%", mb: 4 }}>
            <CurrencyCard label="To" 
              amount={convertedAmount}
              // onAmountChange={(convertedAmount)=>setAmount(convertedAmount)}
              currencyOptions={currencyOptions}
              onCurrencyChange={(currency)=>{
                setTo(currency)
              }}
              selectCurrency={to}/>
          </Box>

          {/* Convert Button */}
          <Button
            type="submit"
            onClick={(e)=>{
              e.preventDefault();
              convert()
            }}
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "#1E88E5",
              color: "white",
              py: 1.5,
              "&:hover": { backgroundColor: "#1565C0" },
            }}
          >
            Convert  {from} To {to}
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default App;