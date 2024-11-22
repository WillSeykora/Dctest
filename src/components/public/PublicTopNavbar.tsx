import React from 'react';
import { useNavigate } from 'react-router-dom';
import FlexBetween from '../common/FlexBetween';
import { AppBar, Button, Typography, Toolbar, useTheme } from '@mui/material';

const PublicTopNavbar = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <AppBar
      sx={{
        position: 'fixed',
        background: theme.palette.background.paper,
        boxShadow: 'none',
        zIndex: 2,
        top: 0,
        width: '100%',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <FlexBetween>
          <Typography variant="h1" color={theme.palette.secondary.main} fontWeight="bold" sx={{ mb: '5px' }}>
            Direct Campaign
          </Typography>
        </FlexBetween>
        <FlexBetween gap="1.5rem">
          <Button
            onClick={() => {
              navigate(`/`);
            }}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              textTransform: 'none',
              gap: '1rem',
            }}
          >
            <Typography variant="h4" color={theme.palette.secondary.main} fontWeight="bold" sx={{ mb: '5px' }}>
              Home
            </Typography>
          </Button>
          <Button
            onClick={() => {
              navigate(`/contactUs`);
            }}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              textTransform: 'none',
              gap: '1rem',
            }}
          >
            <Typography variant="h4" color={theme.palette.secondary.main} fontWeight="bold" sx={{ mb: '5px' }}>
              Contact Us
            </Typography>
          </Button>
          <Button
            onClick={() => {
              navigate(`/aboutUs`);
            }}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              textTransform: 'none',
              gap: '1rem',
            }}
          >
            <Typography variant="h4" color={theme.palette.secondary.main} fontWeight="bold" sx={{ mb: '5px' }}>
              About Us
            </Typography>
          </Button>
          <Button
            onClick={() => {
              navigate(`/login`);
            }}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              textTransform: 'none',
              gap: '1rem',
            }}
          >
            <Typography variant="h4" color={theme.palette.secondary.main} fontWeight="bold" sx={{ mb: '5px' }}>
              Login
            </Typography>
          </Button>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default PublicTopNavbar;
