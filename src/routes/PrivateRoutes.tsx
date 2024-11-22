import React, { useState } from 'react';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import PrivateTopNavbar from '../components/private/PrivateTopNavbar';
import { Box, useMediaQuery } from '@mui/material';
import { useSelector } from 'react-redux';
import Sidebar from '../components/private/Sidebar';

const PrivateRoutes = () => {
  const location = useLocation();
  const { route } = useAuthenticator((context) => [context.route]);
  if (route !== 'authenticated') {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  const isNonMobile = useMediaQuery('(min-width: 600px)');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const data = { name: 'Evan', occupation: 'Manager' };

  return (
    <Box display={isNonMobile ? 'flex' : 'block'} width="100%" height="100%">
      <Sidebar
        user={data}
        isNonMobile={isNonMobile}
        drawerWidth="250px"
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Box flexGrow={1}>
        <PrivateTopNavbar user={data} isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        <Outlet />
      </Box>
    </Box>
  );
};

export default PrivateRoutes;
