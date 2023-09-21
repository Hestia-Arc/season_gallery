import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Box } from "@mui/material";
import GalleryList from "../components/Main/GalleryList";
import ArrowCircleUpRoundedIcon from "@mui/icons-material/ArrowCircleUpRounded";

function Gallery() {
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 100) {
        setScrollActive(true);
      } else {
        setScrollActive(false);
      }
    };
  }, []);

  return (
    <Box sx={{ position: "relative" }}>
      <Header />
      <GalleryList />
      <Footer />

      <div
        style={{ position: "sticky", bottom: 30, left: "40px" }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        {scrollActive ? (
          <ArrowCircleUpRoundedIcon
            sx={{ fontSize: { xs: 40, md: 60 }, color: "#555" }}
          />
        ) : (
          ""
        )}
      </div>
    </Box>
  );
}

export default Gallery;
