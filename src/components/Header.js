import { Box, Stack, Typography, styled } from "@mui/material";
import React, { useState, useEffect } from "react";
import BeachAccessRoundedIcon from "@mui/icons-material/BeachAccessRounded";
import MainSummer from "../images/main-summer.jpg";
import Sample from "../images/sample.jpg";
import Clear from "../images/clear.jpg";
import Calm from "../images/calm.jpg";
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

const HeaderBox = styled(Box)(({ theme }) => ({
  height: 710,
  boxShadow: '-3px 30px 15px 0px rgba(0,0,0,0.1)',
  // backgroundColor: "grey",
  color: "#f5f5f5",
  padding: "0px 100px",

  [theme.breakpoints.down("sm")]: {
    padding: "0px 30px",
    height: '568px'
  },
  [theme.breakpoints.between("sm", 'md')]: {
    padding: "0px 50px",
    height: '568px'
  },
}));

const QuoteBox = styled("blockquote")(({ theme }) => ({
  width: '40%',
  color: "#ccc",
  padding: "0px 100px",
  fontFamily: 'Fredoka',
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
    width: '80%',
    fontSize: "16px",
  },
  // [theme.breakpoints.only("sm")]: {
  //   padding: "0px 50px",
  // },
}));

function Header() {
  const [photo, setPhoto] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      change();
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, [photo]);

  const change = () => {
    if (photo === 4) {
      setPhoto(1);
      return;
    }

    setPhoto((prev) => prev + 1);
  };

  const returnPhotoURL = () => {
    switch (photo) {
      case 1:
        return Sample;
      case 2:
        return MainSummer;
      case 3:
        return Clear;
      case 4:
        return Calm;
      default:
        return null;
    }
  };

  return (
    <HeaderBox
      loading="lazy"
      sx={{
        backgroundImage: `url(${returnPhotoURL()})`,
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
          spacing={5}
          sx={{ display: { xs: "none", sm: "flex" } }}
        >
          <Typography variant="h5">Events</Typography>
          <Typography variant="h5">Gallery</Typography>
          <Typography variant="h5">Calender</Typography>
          <Typography variant="h5">Bookings</Typography>
          <LogoutRoundedIcon/>
        </Stack>
      </Stack>

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