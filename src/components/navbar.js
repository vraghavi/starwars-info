import React from "react";
import { useState, useEffect } from 'react';
import { AppBar, Stack, Toolbar, Typography } from "@mui/material";
import MenuButton from "./MenuButton";

const Navbar = () => {
  var starwarsUrl = "https://swapi.dev/api/"

  const [pages, setPages] = useState([]);

  const getPages = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setPages(Object.keys(data));
  }

  useEffect(() => {
    getPages(starwarsUrl);
  }, [])

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant='h6' component="div" sx={{ flexGrow: 1 }}>
          Starwars Info
        </Typography>
        <Stack direction="row" spacing={2}>
          {pages.length > 0 ?
            (pages.map((page) => (
              <MenuButton page={page} />
            ))) : (<h2>No Movies found</h2>)}
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar;