import React from "react";
import { useState, useEffect } from 'react';
import { AppBar, Stack, Toolbar, Typography } from "@mui/material";
import MenuButton from "./MenuButton";

const Navbar = () => {
  var starwarsUrl = "https://swapi.dev/api/"

  const [pages, setPages] = useState([]);
  const [pagesApi, setPagesApi] = useState([]);

  const toObject = (apis) => {
    const resp = [];
    console.log(apis);
    if (apis.length > 0) {
      const keys = Object.keys(apis);
      keys.forEach((key) => {
        resp.push({ 'pageName': key, 'pageApi': apis[key] })
      });
    }
    console.log(resp);
    return resp;
  }

  const getPagesApi = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setPagesApi(data);
    setPages(Object.keys(data));
  }

  useEffect(() => {
    getPagesApi(starwarsUrl);
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
              <MenuButton page={page} api={pagesApi[page]} />
            ))) : (<h2>No Movies found</h2>)}
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar;