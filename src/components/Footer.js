import { Box, Stack, Typography, styled } from "@mui/material";
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import w5 from "../images/wnt/w-5.jpg";
import a5 from "../images/autumn/a-5.jpg";
import s2 from "../images/summer/summ-2.jpg";
import s3 from "../images/summer/summ-3.jpg";
import w1 from "../images/wnt/w-1.jpg";
import w2 from "../images/wnt/w-2.jpg";
import sp1 from "../images/spring/s-1.jpg";
import sp2 from "../images/spring/s-2.jpg";
import s5 from "../images/summer/summ-5.jpg";

const FooterBox = styled(Box)({
  minHeight: 200,
  borderRadius: 6,
  // border: "1px solid black",
});

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img
    src={w5}
    style={{ height: 200, borderRadius: 6 }}
    onDragStart={handleDragStart}
    role="presentation"
    loading="lazy"
    decoding="async"
  />,
  <img
    src={s2}
    style={{ height: 200, borderRadius: 6 }}
    onDragStart={handleDragStart}
    role="presentation"
    loading="lazy"
    decoding="async"
  />,
  <img
    src={s3}
    style={{ height: 200, borderRadius: 6 }}
    onDragStart={handleDragStart}
    role="presentation"
    loading="lazy"
    decoding="async"
  />,
  <img
    src={w1}
    style={{ height: 200, borderRadius: 6 }}
    onDragStart={handleDragStart}
    role="presentation"
    loading="lazy"
    decoding="async"
  />,
  <img
    src={w2}
    style={{ height: 200, borderRadius: 6 }}
    onDragStart={handleDragStart}
    role="presentation"
    loading="lazy"
    decoding="async"
  />,
  <img
    src={sp1}
    style={{ height: 200, borderRadius: 6 }}
    onDragStart={handleDragStart}
    role="presentation"
    loading="lazy"
    decoding="async"
  />,
  <img
    src={sp2}
    style={{ height: 200, borderRadius: 6 }}
    onDragStart={handleDragStart}
    role="presentation"
    loading="lazy"
    decoding="async"
  />,
  <img
    src={a5}
    style={{ height: 200, borderRadius: 6 }}
    onDragStart={handleDragStart}
    role="presentation"
    loading="lazy"
    decoding="async"
  />,
  <img
    src={s5}
    style={{ height: 200, borderRadius: 6 }}
    onDragStart={handleDragStart}
    role="presentation"
    loading="lazy"
    decoding="async"
  />,
];

const responsive = {
  0: { items: 1, itemsFit: "contained" },
  600: { items: 2, itemsFit: "fill" },
  1024: { items: 3, itemsFit: "fill" },
  1400: { items: 5, itemsFit: "contained" },
};

function Footer() {
  return (
    <FooterBox>
      <Box
        sx={{
          height: 80,
          textAlign: "center",
        }}
      >
        <a
          href="https://www.pexels.com/"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Typography>Browse more from Pexels</Typography>
        </a>
      </Box>
      <Box
        sx={{
          background: "black",
          color: "#fff",
          height: 80,
          textAlign: "center",
        }}
      >
        {/* <Typography>Browse more from Unsplash</Typography> */}
      </Box>

      <Box sx={{ height: 300, margin: "20px 0" }}>
        <AliceCarousel mouseTracking items={items} responsive={responsive} />
      </Box>
      {/* <Stack direction="row">
        <FooterItem />
        <FooterItem />
        <FooterItem />
        <FooterItem />
        <FooterItem />
      </Stack> */}
      <Box
        sx={{
          height: 80,
          textAlign: "center",
        }}
      >
        <Typography>&copy; 2023. Hestia_</Typography>
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
