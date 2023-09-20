import { Box, Stack, Typography, styled } from "@mui/material";
import React from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Calm from '../images/calm.jpg'


const FooterBox = styled(Box)({
  minHeight: 200, borderRadius: 6,
  border: "1px solid black",
});

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src={Calm} style={{height: 200, borderRadius: 6}} onDragStart={handleDragStart} role="presentation" />,
  <img src={Calm} style={{height: 200, borderRadius: 6}} onDragStart={handleDragStart} role="presentation" />,
  <img src={Calm} style={{height: 200, borderRadius: 6}} onDragStart={handleDragStart} role="presentation" />,
  <img src={Calm} style={{height: 200, borderRadius: 6}} onDragStart={handleDragStart} role="presentation" />,
  <img src={Calm} style={{height: 200, borderRadius: 6}} onDragStart={handleDragStart} role="presentation" />,
  <img src={Calm} style={{height: 200, borderRadius: 6}} onDragStart={handleDragStart} role="presentation" />,
  <img src={Calm} style={{height: 200, borderRadius: 6}} onDragStart={handleDragStart} role="presentation" />,
  <img src={Calm} style={{height: 200, borderRadius: 6}} onDragStart={handleDragStart} role="presentation" />,
  <img src={Calm} style={{height: 200, borderRadius: 6}} onDragStart={handleDragStart} role="presentation" />,
];

const responsive = {
  0: { items: 1, itemsFit: 'fill', },
  600: { items: 2 },
  1024: { items: 3 },
  1400: { items: 5 },
}



function Footer() {
  return (
    <FooterBox>
      <Box  sx={{
          
          height: 80,
          textAlign: "center",
        }}>
        <Typography>Browse more from Unsplash</Typography>
      </Box>
      <Box
        sx={{
          background: "black",
          color: "#fff",
          height: 80,
          textAlign: "center",
        }}
      >
        <Typography  
          
        >Browse more from Unsplash</Typography>
      </Box>

      <Box sx={{height: 300, margin: '20px 0' }}>
      <AliceCarousel mouseTracking items={items}  responsive={responsive}/>
      </Box>
      {/* <Stack direction="row">
        <FooterItem />
        <FooterItem />
        <FooterItem />
        <FooterItem />
        <FooterItem />
      </Stack> */}
      <Box  sx={{
          
      
          height: 80,
          textAlign: "center",
        }}>
        <Typography>Browse more from Unsplash</Typography>
      </Box>
    </FooterBox>
  );
}

export default Footer;

const FooterItem = (props) => {
  return (
    <Box
      sx={{
        // border: "1px solid black",
        backgroundImage: `url(${props.img})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundColor: "grey",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        borderRadius: "10px",
        boxShadow: "2px 6px 17px rgba(0,0,0,.1)",
        border: "solid 1px #ebebeb",
        // height: 400,
        width: { xs: "100%", sm: 200, borderRadius: 6, md: "20%" },
        height: { xs: 100, sm: 200, borderRadius: 6, md: 250 },
      }}
    ></Box>
  );
};
