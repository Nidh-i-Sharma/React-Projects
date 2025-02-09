import React, { useCallback, useEffect } from 'react';
import { TextField, Button, FormControlLabel, Checkbox, Slider, Box, Typography } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const PasswordGeneratorUI = () => {
  const [password, setPassword] = React.useState('');
  const [buttonText, setButtonText] = React.useState("Copy");
  const [includeNumbers, setIncludeNumbers] = React.useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = React.useState(true);
  const [passwordLength, setPasswordLength] = React.useState(6);


  //useRef Hook
  const handleCopyPassword = () => {
    window.navigator.clipboard.writeText(password);
    setButtonText("Copied"); // Change text to "Copied"
    
    setTimeout(() => {
      setButtonText("Copy"); // Revert back to "Copy" after 2 seconds
    }, 2000);
  };

  const handleSliderChange = (event, newValue) => {
    setPasswordLength(newValue);
  };

  const passwordGenerator = useCallback(() => {
    let letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let numbers = '1234567890';
    let specialChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let charSet = letters;

    if (includeNumbers) charSet += numbers;
    if (includeSpecialChars) charSet += specialChars;

    let password = '';

    for (let i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * charSet.length);
        password += charSet[randomIndex]; // Append random character
    }
    setPassword(password);

  }, [passwordLength, includeNumbers, includeSpecialChars, setPassword])

  useEffect(()=>{
    passwordGenerator()
  }, [passwordLength, includeNumbers, includeSpecialChars, passwordGenerator])


  return (
    <Box sx={{ maxWidth: 400, margin: 'auto', padding: 3 }}>

      <Typography variant="h5" gutterBottom>
        Password Generator
      </Typography>

      <TextField
        fullWidth
        label="Generated Password"
        value={password}
        variant="outlined"
        margin="normal"
        InputProps={{
          readOnly: true,
        }}
      />

      <Button
        variant="contained"
        color="primary"
        startIcon={<ContentCopyIcon />}
        onClick={handleCopyPassword}
        fullWidth
        sx={{ marginBottom: 2 }}
      >
        {buttonText}
      </Button>

      <FormControlLabel
        control={
          <Checkbox
            checked={includeNumbers}
            onChange={(e) => setIncludeNumbers((e.target.checked))}
            color="primary"
          />
        }
        label="Include Numbers"
      />

      <FormControlLabel
        control={
          <Checkbox
            checked={includeSpecialChars}
            onChange={(e) => setIncludeSpecialChars(e.target.checked)}
            color="primary"
          />
        }
        label="Include Special Characters"
      />

      <Typography id="password-length-slider" gutterBottom>
        Password Length: {passwordLength}
      </Typography>

      <Slider
        value={passwordLength}
        onChange={handleSliderChange}
        aria-labelledby="password-length-slider"
        valueLabelDisplay="auto"
        step={2}
        marks
        min={6}
        max={32}
      />
    </Box>
  );
};

export default PasswordGeneratorUI;