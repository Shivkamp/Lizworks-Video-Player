import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Drawer, IconButton, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Sidebar = () => {
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    return (
        <>
            <IconButtonStyled onClick={toggleDrawer(true)}>
                <MenuIcon />
            </IconButtonStyled>
            <Drawer
                anchor="left"
                open={isDrawerOpen}
                onClose={toggleDrawer(false)}
            >
                <SidebarStyled
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    <List>
                        <ListItem button component={Link} to="/">
                            <ListItemText primary="Home" />
                        </ListItem>
                        <ListItem button component={Link} to="/videos">
                            <ListItemText primary="Video Library" />
                        </ListItem>
                        {/* Add more links as needed */}
                    </List>
                </SidebarStyled>
            </Drawer>
        </>
    );
};

const IconButtonStyled = styled(IconButton)`
    position: fixed;
    top: 20px;
    left: 20px;
    z-index: 1000; /* Ensure it stays above other elements */
    color: #000000; /* Set icon color to black */
`;

const SidebarStyled = styled.div`
    background-color: #ffffff;  /* Set sidebar background to white */
    color: #000000;  /* Set sidebar text color to black */
    height: 100%;
    a {
        color: #000000;  /* Set link color to black */
    }
`;

export default Sidebar;
