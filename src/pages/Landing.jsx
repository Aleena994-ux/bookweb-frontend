import { Container, Typography, Box } from "@mui/material";

const Landing = () => {
  return (
    <Box
      sx={{
        backgroundImage: "url('/bg1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container sx={{ textAlign: "center", color: "white" }}>
        <Typography variant="h2" gutterBottom>
          Welcome to TaskNest
        </Typography>
        <Typography variant="h5">
          Stay Organized, Stay Productive
        </Typography>
      </Container>
    </Box>
  );
};

export default Landing;
