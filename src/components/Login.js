import React, { useState } from "react";
import { Box, styled, Stack, Button, Typography } from "@mui/material";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
// import { AccountCircleRounded } from "@mui/icons-material";
import VpnKeyRoundedIcon from "@mui/icons-material/VpnKeyRounded";
import MarkEmailUnreadRoundedIcon from "@mui/icons-material/MarkEmailUnreadRounded";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { BeatLoader} from "react-spinners";

const FormBox = styled(Stack)(({ theme }) => ({
  height: "500px",
  width: "30%",
  borderRadius: "10px",
  background: "linear-gradient(315deg, #cacaca, #f0f0f0)",
  boxShadow: "-3px -5px 12px #c7c7c7, 10px 10px 12px #f9f9f9",

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
    <Stack sx={{ height: "100vh" }} justifyContent="center" alignItems="center">
      <FormBox spacing={5} justifyContent="center" alignItems="center">
        <Box>
          <Typography variant="h2">👋 Welcome</Typography>
        </Box>
        <form onSubmit={handleSubmit}>
          {invalid ? <p>Please put in the correct credentials </p> : ""}
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
      </FormBox>
    </Stack>
  );
}

export default Login;
