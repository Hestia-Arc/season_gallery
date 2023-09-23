import React, { useState } from "react";
import { Box, styled, Stack, Button, Typography } from "@mui/material";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
// import { AccountCircleRounded } from "@mui/icons-material";
import VpnKeyRoundedIcon from "@mui/icons-material/VpnKeyRounded";
import MarkEmailUnreadRoundedIcon from "@mui/icons-material/MarkEmailUnreadRounded";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { BeatLoader } from "react-spinners";

const LoginBox = styled(Stack)({
  height: "100vh",
  background: '#F3904F',  /* fallback for old browsers */
  background: '-webkit-linear-gradient(to right, #3B4371, #F3904F)',  /* Chrome 10-25, Safari 5.1-6 */
  background: 'linear-gradient(to right, #3B4371, #F3904F)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  
  // background: "linear-gradient(-45deg, #ee5552, #e73e9e, #23ebd5, #23d5ab)",
  animation: "gradient 10s ease infinite",

  "@keyframes gradient": {
    "0%": {
      backgroundPosition: "0% 50%",
    },
    "50%": {
      backgroundPosition: "100% 50%",
    },
    "100%": {
      backgroundPosition: "0% 50%",
    },
  },
});

const FormBox = styled(Stack)(({ theme }) => ({
  height: "500px",
  width: "30%",
  borderRadius: "10px",
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(2px)',
  boxShadow: '0 25px 45px rgba(0, 0, 0, 0.2)',
  // color: '#fefefe',
  // background: "linear-gradient(315deg, #cacaca, #f0f0f0)",
  // boxShadow: "-3px -5px 12px #c7c7c7, 10px 10px 12px #f9f9f9",

  [theme.breakpoints.down("sm")]: {
    width: "90%",
    fontSize: "16px",
  },
  [theme.breakpoints.between("sm", "md")]: {
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
  const [invalid, setInvalid] = useState(false);
  const [loading, setLoading] = useState(false);

  const { userLogin } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      setLoading(true);
      await userLogin(email, password);

      if (localStorage.getItem("loggedIn")) {
        navigate("/gallery");
      } else {
        setInvalid(true);
      }
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoginBox sx={{}} justifyContent="center" alignItems="center">
      <FormBox spacing={5} justifyContent="center" alignItems="center">
        <Box>
          <Typography variant="h2">👋 Welcome</Typography>
        </Box>
        <form onSubmit={handleSubmit}>
          {/* {invalid ? <p>Please put in the correct credentials </p> : ""} */}
          <Box
            sx={{ display: "flex", alignItems: "flex-end", marginBottom: 2 }}
          >
            {/* <MarkEmailUnreadRoundedIcon
              sx={{ color: "action.active", mr: 1, my: 0.5 }}
            /> */}
            <TextField
              id="input-with-icon-textfield"
              type="email"
              label="Enter your email..."
              error={invalid}
              helperText={invalid ? "Invalid Credentals!!" : " "}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MarkEmailUnreadRoundedIcon />
                  </InputAdornment>
                ),
              }}
              variant="standard"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Box>

          <Box
            sx={{ display: "flex", alignItems: "flex-end", marginBottom: 3 }}
          >
            <TextField
              id="input-with-icon-textfield"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <VpnKeyRoundedIcon />
                  </InputAdornment>
                ),
              }}
              type="password"
              error={invalid}
              helperText={invalid ? "Invalid Credentals!" : " "}
              label="Enter your password..."
              variant="standard"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Box>

          <Stack direction="row" justifyContent="flex-end">
            <Button variant="contained" type="submit">
              {loading ? (
                <>
                  Loading
                  <BeatLoader
                    aria-label="Loading Spinner"
                    size={4}
                    color="#36d7b7"
                  />
                </>
              ) : (
                "Log In"
              )}
            </Button>
          </Stack>
        </form>

        <Stack
          direction="row"
          alignItems="center"
          spacing={0.2}
          sx={{
            border: "1px solid #5555",
            p: "4px 20px",
            borderRadius: "5px",
          }}
        >
          <Typography>A new user?</Typography>
          <Button sx={{color: '#fff'}}>Sign up</Button>
        </Stack>
      </FormBox>
    </LoginBox>
  );
}

export default Login;
