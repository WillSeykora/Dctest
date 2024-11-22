import React from 'react';
import { Box, Typography, useTheme, FormControl, InputLabel, Input, Button, TextField, Container } from '@mui/material';
import Footer from './Footer';
import DarkBackground from '../../assets/image/StatueOfLiberty.jpg';

const ContactUs: React.FC = () => {
  const theme = useTheme();
  const marginSize = 1;

  return (
    <Box>
      <Box sx={{ position: 'relative' }}>
        <Box
          component="img"
          sx={{
            width: '100%',
            height: '50vh',
            objectFit: 'cover',
          }}
          alt="Statue of Liberty Background Picture."
          src={DarkBackground}
        />
        <Box
          sx={{
            transform: 'translateY(-120%)',
            color: 'white',
            padding: '1rem',
          }}
        >
          <Typography 
            variant="h1" 
            align="center" 
            fontSize='4em'
            fontWeight="bold"
            color={theme.palette.primary.main}
            sx={{
              textShadow: '-1px 1px 10px rgba(0, 0, 0, 0.75)'
            }}
          >
            GET IN TOUCH
          </Typography>
          <hr />
          <Typography 
            variant="subtitle1" 
            align="center" 
            fontSize='1.7em'
            color={theme.palette.primary.main}
            sx={{
              textShadow: '-1px 1px 10px rgba(0, 0, 0, 0.75)'
            }}
          >
            Start your next campaign with Direct Campaign
          </Typography>
        </Box>
        <Container 
          maxWidth="sm"
          sx={{
            transform: 'translateY(-20%)',
          }}
        >
          <form action="https://getform.io/f/1e82b50e-b200-4ddd-a172-7d9767b6ae34" method="POST">
            <Box mt={2}>
              <FormControl fullWidth>
                <InputLabel htmlFor="name">Name:</InputLabel>
                <Input id="name" name="name" />
              </FormControl>
            </Box>
            <Box mt={2}>
              <FormControl fullWidth>
                <InputLabel>Email:</InputLabel>
                <Input id="email" name="email" required />
              </FormControl>
            </Box>
            <Box mt={2}>
              <FormControl fullWidth>
                <InputLabel>Phone Number:</InputLabel>
                <Input id="phone" name="phone" inputProps={{ pattern: '[0-9]*' }} />
              </FormControl>
            </Box>
            <Box mt={2}>
              <FormControl fullWidth>
                <TextField
                  id="message"
                  name="message"
                  fullWidth
                  multiline
                  variant="outlined"
                  required
                  rows={10}
                  placeholder="How can we be of service?"
                />
              </FormControl>
            </Box>
            <Box mt={2} display="flex" justifyContent="center">
              <Button
                variant="outlined"
                type="submit"
                sx={{ background: theme.palette.background.default, color: 'white' }}
              >
                <h4>Send Us a Message</h4>
              </Button>
            </Box>
          </form>
        </Container>
        <Footer />
      </Box>
    </Box>
  );
};

export default ContactUs;
