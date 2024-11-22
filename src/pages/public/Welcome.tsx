import React from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import Footer from './Footer';
import DarkBackground from '../../assets/image/StatueOfLiberty.jpg';

const Welcome = () => {
  const isNonMediumScreens = useMediaQuery('(min-width: 1200px)');
  const theme = useTheme();

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
            DOING WHAT IT TAKES
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
            Direct Campaign delivers cutting edge political technology that will take your campaign to new heights.
          </Typography>
        </Box>
        <Box 
          m="1.5rem 2.5rem"
          sx={{
            transform: 'translateY(-12%)',
          }}
        >
          <Box
            mt="20px"
            display="grid"
            gridTemplateColumns="repeat(3, 1fr)"
            // gridAutoRows="220px"
            gap="20px"
            sx={{
              '& > div': { gridColumn: isNonMediumScreens ? undefined : 'span 3' },
            }}
          >
            <Box>
              <Typography
                variant="h1"
                color={theme.palette.secondary.main}
                fontWeight="bold"
                sx={{ mb: '20px' }}
                align="center"
              >
                Who We Are
              </Typography>
              <Typography 
                variant="h4" 
                align="center"
                fontStyle= "italic"
              >
                Direct Campaign is the leader in developing the newest political technology.
              </Typography>
            </Box>
            <Box />
            <Box>
              <Typography
                variant="h1"
                color={theme.palette.secondary.main}
                fontWeight="bold"
                sx={{ mb: '20px' }}
                align="center"
              >
                What We Do
              </Typography>
              <Typography 
                variant="h4" 
                align="center"
                fontStyle= "italic"
              >
                We provide candidates and organizations across the country with the best voter contact applications.
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="h1"
                color={theme.palette.secondary.main}
                fontWeight="bold"
                sx={{ mb: '20px' }}
                align="center"
              >
                Data
              </Typography>
              <Typography 
                variant="h4" 
                align="center"
                fontStyle= "italic"
              >
                Giving you the latest information on your campaign.
              </Typography>
              <Typography
                variant='h4'
                align='center'
              >
                <br/>
                Your data should be accessible, secure, and accurate. Which is why we developed one of the most 
                robust and easy-to-use reporting tools available. 
                <br/>
                With near full customizability you can choose what data is most useful for your day-to-day 
                operations while still having full access to every data point you need to make key decisions to 
                lead your campaign to victory. We&apos;ve given you all the tools you need to accurately run 
                reports and develop new strategies for your campaign. 
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="h1"
                color={theme.palette.secondary.main}
                fontWeight="bold"
                sx={{ mb: '20px' }}
                align="center"
              >
                Outreach
              </Typography>
              <Typography 
                variant="h4" 
                align="center"
                fontStyle= "italic"
              >
                Providing the tools you need to contact your supporters.
              </Typography>
              <Typography
                variant="h4"
                align="center"
              >
                <br/>
                The groundwork of a successful campaign starts with outreach. At Direct Campaign we provide 
                top-notch door-to-door canvassing tools to ensure your campaign stays ahead of the competition.
                <br/>
                Every campaign is unique, which is why Direct Campaign gives you full control over your messaging. 
                Whether you need targeted messaging or wide-spread outreach, we&apos;ve ensured that you have the data 
                available to make well-informed decisions based on your needs. 
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="h1"
                color={theme.palette.secondary.main}
                fontWeight="bold"
                sx={{ mb: '20px' }}
                align="center"
              >
                Technology
              </Typography>
              <Typography 
                variant="h4" 
                align="center"
                fontStyle= "italic"
              >
                The latest tech to help your campaign run the way it should.
              </Typography>
              <Typography
                variant='h4'
                align='center'
              >
                <br/>
                Direct Campaign has made it easier than ever to activate your volunteer base. From creating user 
                accounts to getting boots on the ground, we&apos;ve developed new tools to help you manage and 
                organize your volunteers.
                <br/>
                Designed with input from some of the country&apos;s top field operatives, Direct Campaign has everything 
                you need to ensure your campaign runs seamlessly. We know the challenges of running a volunteer 
                based campaign, which is why we&apos;ve put Direct Campaign through rigorous testing and redesigns 
                before launch. Direct Campaign is downloadable from the Google Play Store and the Apple App Store. 
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Welcome;
