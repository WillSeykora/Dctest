import React from 'react';
import { Outlet } from 'react-router-dom';
import PublicTopNavbar from '../components/public/PublicTopNavbar';
import { Box, useMediaQuery } from '@mui/material';

const PublicRoutes = () => {
  const isNonMobile = useMediaQuery('(min-width: 600px)');

  return (
    <Box display={isNonMobile ? 'flex' : 'block'} width="100%" height="100%">
      <Box flexGrow={1} position="relative">
        <PublicTopNavbar />
        <Box style={{ zIndex: 1 }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default PublicRoutes;
