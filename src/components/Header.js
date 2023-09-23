import { Box, Stack, Typography, styled, Button } from "@mui/material";
import React, { useState } from "react";
// import BeachAccessRoundedIcon from "@mui/icons-material/BeachAccessRounded";
// import Autumn1 from "../images/autumn/autumn-large1.jpg";
// import Summer from "../images/summer/summer-large.jpg";
import Winter from "../images/wnt/w-large.jpg";
// import Spring from "../images/spring/spring-large.jpg";
// import Autumn2 from "../images/autumn/autumn-large2.jpg";

// import MainSummer from "../images/main-summer.jpg";
// import Sample from "../images/sample.jpg";
// import Clear from "../images/clear.jpg";
// import Calm from "../images/calm.jpg";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
// import { Carousel } from 'react-responsive-carousel';

const HeaderBox = styled(Box)(({ theme }) => ({
  height: 710,
  boxShadow: "-3px 30px 15px 0px rgba(0,0,0,0.1)",
  // backgroundColor: "grey",
  color: "#f5f5f5",
  padding: "0px 100px",

  [theme.breakpoints.down("sm")]: {
    padding: "0px 30px",
    height: "568px",
  },
  [theme.breakpoints.between("sm", "md")]: {
    padding: "0px 50px",
    height: "568px",
  },
  [theme.breakpoints.up("xl")]: {
    padding: "0px 400px",
    height: "778px",
  },
}));

const QuoteBox = styled("blockquote")(({ theme }) => ({
  width: "40%",
  color: "#ccc",
  padding: "0px 100px",
  fontFamily: "Fredoka",
  fontSize: "26px",
  // background: '#f9f9f9',
  borderLeft: "5px solid #ccc",
  margin: "1.5em 10px",
  padding: "0.5em 10px",
  quotes: "hello",

  "&:before": {
    color: "#ccc",

    content: "open-quote",
    fontSize: "4em",
    lineHeight: "0.1em",
    marginRight: "0.25em",
    verticalAlign: "-0.4em",
  },

  [theme.breakpoints.down("sm")]: {
    width: "80%",
    fontSize: "16px",
  },
  [theme.breakpoints.only("sm")]: {
    width: "70%",
    fontSize: "16px",
  },
  [theme.breakpoints.only("md")]: {
    width: "50%",
    fontSize: "20px",
  },
}));

function Header() {
  const [photo, setPhoto] = useState(1);
  const { authUser, userLogout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await userLogout();
      navigate("/");
      console.log("You are currently logged out");
    } catch (error) {
      console.log(error.message);
    }
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     change();
  //   }, 10000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [photo]);

  // const change = () => {
  //   if (photo === 5) {
  //     setPhoto(1);
  //     return;
  //   }

  //   setPhoto((prev) => prev + 1);
  // };

  // const returnPhotoURL = () => {
  //   switch (photo) {
  //     case 1:
  //       return Autumn1;
  //     case 2:
  //       return Winter;
  //     case 3:
  //       return Spring;
  //     case 4:
  //       return Autumn2;
  //     case 5:
  //       return Summer;
  //     default:
  //       return null;
  //   }
  // };

  return (
    <HeaderBox
      sx={{
        backgroundImage: `url(${Winter})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignContent="center"
        sx={{ padding: " 30px 0 10px 0" }}
      >
        <Stack direction="row" spacing={0.3}>
          {/* <BeachAccessRoundedIcon /> */}
          <Typography variant="h4">BLOSSOM_ED</Typography>
        </Stack>

        <Stack
          direction="row"
          alignItems="center"
          spacing={{ sm: 1, md: 5 }}
          sx={{ display: { xs: "none", sm: "flex" } }}
        >
          <Button
            onClick={handleLogout}
            variant="contained"
            endIcon={<LogoutRoundedIcon />}
          >
            LogOut
          </Button>
        </Stack>

        <Box
          sx={{
            display: { xs: "block", sm: "none" },
            // paddingTop: 0.5,
            cursor: "pointer",
          }}
        >
          <Button
            onClick={handleLogout}
            variant="contained"
            endIcon={<LogoutRoundedIcon />}
          >
            LogOut
          </Button>
        </Box>
      </Stack>

      {/* <Stack direction="row" justifyContent="flex-end" sx={{ color: "orange" }}>
        {authUser.email}
      </Stack> */}

      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: 600 }}>
          THERE IS A SEASON FOR EVERYTHING
        </Typography>

        <QuoteBox>
          He has made everything beautiful in its time. He has also set eternity
          in the human heart; yet no one can fathom what God has done from
          beginning to end.
        </QuoteBox>
      </Box>
    </HeaderBox>
  );
}

export default Header;
