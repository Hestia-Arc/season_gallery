import React, { useState } from "react";
import { Box, styled, Stack, Button, Typography } from "@mui/material";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
// import { AccountCircleRounded } from "@mui/icons-material";
import VpnKeyRoundedIcon from '@mui/icons-material/VpnKeyRounded';
import MarkEmailUnreadRoundedIcon from '@mui/icons-material/MarkEmailUnreadRounded';
import TextField from "@mui/material/TextField";

const FormBox = styled(Stack)(({theme}) => ({
  height: "50%",
  width: "30%",
  borderRadius: "10px",
  background: "linear-gradient(315deg, #cacaca, #f0f0f0)",
  boxShadow: "-3px -5px 12px #c7c7c7, 10px 10px 12px #f9f9f9",

  [theme.breakpoints.down("sm")]: {
    width: "90%",
    fontSize: "16px",
  },
  [theme.breakpoints.between("sm", 'md')]: {
    width: "80%",
    fontSize: "16px",
  },
  [theme.breakpoints.only("md")]: {
    width: "60%",
    fontSize: "16px",
  },
}));

// ----------------------------------
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { userLogin, authUser } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await userLogin(email, password);

        if ( localStorage.getItem('loggedIn')) {
      navigate("/gallery");
        }
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };

  return (
    <Stack sx={{ height: "100vh" }} justifyContent="center" alignItems="center">
     
        
        
        <FormBox  spacing={5} justifyContent="center" alignItems="center">

        <Box >
        <Typography variant="h2">👋 Welcome</Typography>
      </Box>
        <form onSubmit={handleSubmit}>
          <Box sx={{ display: "flex", alignItems: "flex-end", marginBottom: 3 }}>
            <MarkEmailUnreadRoundedIcon
              sx={{ color: "action.active", mr: 1, my: 0.5 }}
            />
            <TextField
              id="input-with-sx"
              label="Enter your email..."
              variant="standard"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>

          <Box sx={{ display: "flex", alignItems: "flex-end", marginBottom: 3 }}>
            <VpnKeyRoundedIcon
              sx={{ color: "action.active", mr: 1, my: 0.5 }}
            />
            <TextField
            // error
              id="input-with-sx"
              type="password"
              label="Enter your password..."
              variant="standard"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>

          <Stack direction='row' justifyContent='flex-end'>
          <Button variant="contained" type="submit">Log In</Button>
          </Stack>
         
        </form>
      </FormBox>
    </Stack>
  );
}

export default Login;
