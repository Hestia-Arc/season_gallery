import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1024,
      lg: 1400,
      xl: 1900
    },
  },
  typography: {
    fontFamily: ["Fredoka", "sans-serif"].join(","),
  },
});

theme.typography.h2 = {
  fontFamily: ["Fredoka", "sans-serif"].join(","),

  fontSize: "3.75rem",
  fontWeight: 600,
  // '@media (min-width:600px)': {
  //   fontSize: '1.5rem',
  // },
  [theme.breakpoints.down("sm")]: {
    fontSize: "2rem",
    fontWeight: 600,
  },
};

theme.typography.h3 = {
  fontFamily: ["Fredoka", "sans-serif"].join(","),

  fontSize: "2.5rem",
  fontWeight: 600,
  // '@media (min-width:600px)': {
  //   fontSize: '1.5rem',
  // },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.8rem",
    fontWeight: 500,
  },
};

theme.typography.h4 = {
  fontFamily: ["Fredoka", "sans-serif"].join(","),

  fontSize: "2.125rem",
  fontWeight: 600,
  // '@media (min-width:600px)': {
  //   fontSize: '1.5rem',
  // },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.5rem",
    fontWeight: 500,
  },
};

theme.typography.h6 = {
  fontFamily: ["Fredoka", "sans-serif"].join(","),

  fontSize: "1.2rem",
  // '@media (min-width:600px)': {
  //   fontSize: '1.5rem',
  // },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
    lineHeight: 1.2,
    fontWeight: 500,
  },
};

// import { useMediaQuery, useTheme } from '@mui/material';

// const useBreakpoint = () => {
//   const theme = useTheme();
//   const breakpoints = theme.breakpoints.keys;
//   const matchingBreakpoint = breakpoints.filter((key) => useMediaQuery(theme.breakpoints.only(key)));

//   return matchingBreakpoint;
// };

// export default useBreakpoint;

// ------------------------
{
  /* <ImageGalleryList
      
      gap={50}
      sx={{
        display: "grid",

        gridTemplateColumns: {
          mobile: "repeat(1, 1fr)",
          bigMobile: "repeat(2, 1fr)",
          tablet: "repeat(3, 1fr)",
          desktop: "repeat(4, 1fr)",
        },
      }}
      ref={gridRef}
    >
      {dataGrid.map((id, item) => (
        <>
          {loading && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "200px",
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
            <ImageListItem key={id} data-id={id}>
              <img
                srcSet={`${id.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${id.img}?w=248&fit=crop&auto=format`}
                alt={id.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={id.title}
                subtitle={id.tag}
                actionIcon={
                  <IconButton
                    sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                    aria-label={`info about ${id.title}`}
                  >
                    <InfoRoundedIcon />
                  </IconButton>
                }
              />
            </ImageListItem>
          )}
        </>
      ))}
    </ImageGalleryList> */
}
