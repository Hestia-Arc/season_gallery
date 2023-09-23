import {
  Box,
  Chip,
  Stack,
  Grid,
  Typography,
  styled,
  useMediaQuery,
} from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import Sortable from "sortablejs";
import { data } from "../../Data";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import { FadeLoader } from "react-spinners";

const ImageGalleryList = styled(Stack)(({ theme }) => ({
  width: "100%",
  margin: "50px 0px",
  // [theme.breakpoints.down('sm')]: {
  //     gridTemplateColumns: ' 1fr'
  // },
  // [theme.breakpoints.up('md')]: {
  //     gridTemplateColumns: 'repeat(4, 1fr)'
  // },
  // [theme.breakpoints.up('lg')]: {
  //     gridTemplateColumns: 'repeat(5, 1fr)'
  // },
}));

function GalleryList() {
  const gridRef = useRef(null);
  const sortableJsRef = useRef(null);

  const [dataGrid, setDataGrid] = useState(data);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  const matches = useMediaQuery("(min-width:600px)");

  const onListChange = () => {
    const newData = [...gridRef.current.children]
      .map((i) => i.dataset.id)
      .map((id) => data.find((item) => item._id === id));

    sessionStorage.setItem("my-grid", JSON.stringify(newData));
    setDataGrid(dataGrid);
  };

  useEffect(() => {
    sortableJsRef.current = new Sortable(gridRef.current, {
      animation: 150,
      onEnd: onListChange,
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  // cost searchParam

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   let imageList = [...dataGrid];
  //   imageList = imageList.filter((item) => {
  //     return item.tag.toLowerCase() === query;
  //   });

  //   setQuery("");
  //   console.log(imageList);
  // };

  // ------------------------------------

  return (
    <Box
      sx={{
        minHeight: "900px",
        p: { xs: "80px 20px", sm: "70px 50px", md: "100px 60px", xl: '100px 400px' },
      }}
    >
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="center"
        alignItems="center"
        spacing={5}
        sx={{}}
      >
        <Box sx={{ fontSize: "50px" }}>🍁🌳</Box>

        <Stack
          spacing={3}
          sx={{ justifyContent: "center", alignItems: "center" }}
        >
          <Typography variant="h3">Explore the seasons!</Typography>

          <Stack
            direction="row"
            justifyContent="center"
            useFlexGap
            flexWrap="wrap"
            spacing={{ xs: 2, sm: 2.5 }}
          >
            <Chip label="Spring" variant="outlined" />
            <Chip label="Summer" variant="outlined" />
            <Chip label="Autumn" variant="outlined" />
            <Chip label="Fall" variant="outlined" />
            <Chip label="Winter" variant="outlined" />
          </Stack>

          <form>
            <label>Want to see some pictures? </label>
            <input
              type="text"
              value={query}
              placeholder="Explore..."
              onChange={(e) => setQuery(e.target.value)}
              style={{
                height: 25,
                fontSize: 20,
                borderRadius: 50,
                boxShadow: "2px 6px 17px rgba(0,0,0,.1)",
                border: "solid 1px #ebebeb",
                outline: "none",
                padding: "10px 15px",
              }}
            />
          </form>
          <Stack></Stack>
        </Stack>

        <Box sx={{ fontSize: "50px" }}>🍂🌿</Box>
      </Stack>
      {/* -------------------------------- */}
      {/* IMAGE LIST */}
      {/* --------------------------------- */}

      <ImageGalleryList
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 3, sm: 2, md: 7 }}
        justifyContent='center'
        alignItems='center'
        flexWrap="wrap"
        useFlexGap
        ref={gridRef}
      >
        {dataGrid
          .filter((item) => {
            return query.toLowerCase() === ""
              ? item
              : item.tag.toLowerCase().includes(query.toLowerCase());
          })
          .map(({ id, title, img, tag }) => (
            <>
              {loading && (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    // height: "200px",
                    width: { xs: "100%", sm: 200, md: "30%" },
                    height: { xs: 200, sm: 200, md: 350 },
                  }}
                >
                  <FadeLoader
                    aria-label="Loading Spinner"
                    // data-testid="loader"
                    color="#36d7b7"
                  />
                </Box>
              )}

              {!loading && (
                <Box
                  
                  key={id}
                  data-id={id}
                  sx={{
                    // border: "1px solid black",
                    // backgroundImage: `url(${img})`,
                    // backgroundPosition: "center center",
                    // backgroundRepeat: "no-repeat",
                    // backgroundSize: "cover",
                    // backgroundColor: "grey",
                    // display: "flex",
                    // flexDirection: "column",
                    // justifyContent: "flex-end",
                    // padding: '10px',
                    // alignItems: "center",
                    color: "#fff",
                    borderRadius: "8px",
                    boxShadow: "2px 6px 17px rgba(0,0,0,.1)",
                    border: "solid 1px #ebebeb",
                    // height: 400,
                    width: { xs: "90%", sm: 200, md: "28%" },
                    height: { xs: 200, sm: 200, md: 320 },
                    position: 'relative'
                  }}
                >
                  <img
                    src={img}
                    alt="icon"
                    loading="lazy"
                    decoding="async"
                    style={{ width: "100%", height: "100%", borderRadius: "8px", }}
                  />
                  <span style={{position: 'absolute', top: 8, right: 20}}>{title}</span>
                </Box>
              )}
            </>
          ))}
      </ImageGalleryList>
    </Box>
  );
}

export default GalleryList;

// ORDINARY GRID SORTABLE JS IMPLEMENTATION

{
  /* <div
        style={{
          display: "grid",
          gridTemplateColumns: "10rem  10rem 10rem 10rem",
          gridTemplateRows: "10rem 10rem",
          gap: 20,
          border: "1px solid black",
        }}
        ref={gridRef}
      >
        {dataGrid.map(({ id, title, img, tag }) => (
          <div
            key={id}
            data-id={id}
            style={{
              border: "1px solid black",
              backgroundImage: `url(${img})`,
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundColor: "grey",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: '#fff'
            }}
          >
            {title}
            // {/* <img src={img} alt="icon" /> 
          </div>
        ))}
      </div> */
}
