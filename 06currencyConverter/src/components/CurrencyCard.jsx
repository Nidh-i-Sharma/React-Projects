import React from "react";
import { Card, CardContent, TextField, FormControl, InputLabel, Select, MenuItem, Box } from "@mui/material";

const CurrencyCard = ({ 
    label, 
    className = "" ,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = ['INR', 'USD', 'EUR'],
    selectCurrency ='USD',
    amountDisable = false       ,
    currencyDisable = false

}) => {
  return (
    <Card sx={{ p: 2, borderRadius: 2, display: "flex", alignItems: "center" }}>
      <CardContent sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
        
        {/* Left Section - Input Field */}
        <Box sx={{ width: "48%" }}>
          <InputLabel sx={{ color: "rgba(0, 0, 0, 0.4)", mb: 1 }} >{label}</InputLabel>
          <TextField 
            fullWidth 
            variant="standard"
            type="number" 
            placeholder="Amount" 
            disabled={amountDisable}
            value={amount}
            onChange={(e)=>{ onAmountChange && onAmountChange(Number(e.target.value))}}
            InputProps={{ disableUnderline: true }} 
          />
        </Box>

        {/* Right Section - Currency Dropdown */}
        <Box sx={{ width: "48%", textAlign: "right" }}>
          <InputLabel sx={{ color: "rgba(0, 0, 0, 0.4)", mb: 1 }}>Currency Type</InputLabel>
          <FormControl fullWidth>
            <Select 
              defaultValue="usd"
              value = {selectCurrency}
              onChange={(e)=>{ onCurrencyChange && onCurrencyChange(e.target.value)}}
              disabled={currencyDisable}
              sx={{ borderRadius: 1, backgroundColor: "rgba(0, 0, 0, 0.05)", px: 1 }}
            >
                {currencyOptions.map((currency)=>
                     ( 
                    <MenuItem key = {currency} value={currency} >  {currency}  </MenuItem>
                    )
                )
                }

            </Select>
          </FormControl>
        </Box>

      </CardContent>
    </Card>
  );
};

export default CurrencyCard;
// Important Note:
//use () is jsx instead of {}