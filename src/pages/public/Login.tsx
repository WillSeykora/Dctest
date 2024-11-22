import React, { useEffect } from 'react';
import { Authenticator, useAuthenticator, View } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, useMediaQuery } from '@mui/material';
import DarkBackground from '../../assets/image/StatueOfLiberty.jpg';
import '@aws-amplify/ui-react/styles.css';

const Login: React.FC = () => {
  const { route } = useAuthenticator((context) => [context.route]);
  const navigate = useNavigate();

  useEffect(() => {
    if (route === 'authenticated') {
      navigate('/dashboard', { replace: true });
    }
  }, [route, navigate]);

  return (
    <Box>
      <Box sx={{ position: 'relative' }}>
        <Box
          component="img"
          sx={{
            width: '100%',
            height: '100vh',
            objectFit: 'cover',
          }}
          alt="Statue of Liberty Background Picture."
          src={DarkBackground}
        />
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            padding: '1rem',
            zIndex: '1',
          }}
        >
          <View className="auth-wrapper">
            <Authenticator hideSignUp={true}></Authenticator>
          </View>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
