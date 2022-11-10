import { Button } from '@mui/material';
import React from 'react';

const MenuButton = ({page, api}) => {
    console.log(api);
    return (
        <div><Button color="inherit">{page}</Button></div>
    )
}

export default MenuButton;