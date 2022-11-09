import { Button } from '@mui/material';
import React from 'react';

const MenuButton = ({page}) => {
    return (
        <Button color="inherit">{page}</Button>
    )
}

export default MenuButton;