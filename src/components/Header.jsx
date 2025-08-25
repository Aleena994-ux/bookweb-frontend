import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
        </Typography>

        {/* Navigation Links */}
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
      <Button
  component={Link}
  to="/add"
  sx={{
    bgcolor: "darkblue", 
    color: "white",   
    "&:hover": {
      bgcolor: "#00008b",  
    },
    px: 3, 
    py: 1,  
    borderRadius: 2 
  }}
>
  Add Task
</Button>

      </Toolbar>
    </AppBar>
  );
};

export default Header;
