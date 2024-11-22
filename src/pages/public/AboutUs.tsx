import React from 'react';
import { Box, Typography, useMediaQuery, useTheme, Link } from '@mui/material';
import DarkBackground from '../../assets/image/StatueOfLiberty.jpg';
import Footer from './Footer';

const AboutUs: React.FC = () => {
  const isNonMediumScreens = useMediaQuery('(min-width: 1200px)');
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
            WHO WE ARE
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
            Meet the team behind the future of campaigns.
          </Typography>
        </Box>
        <Box 
          m="1.5rem 2.5rem" 
          margin={marginSize}
          sx={{
            transform: 'translateY(-12%)',
          }}
        >
          <Box
            mt="20px"
            display="grid"
            gridTemplateColumns="repeat(2, 1fr)"
            gridAutoRows="220px"
            gap="20px"
            sx={{
              '& > div': { gridColumn: isNonMediumScreens ? undefined : 'span 3' },
            }}
          >
            <Box display="flex">
              <Box>
                <Typography variant="h2" align="center" color={theme.palette.secondary.main}>
                  Will Seykora
                </Typography>
                <Typography variant="subtitle1">
                Will Seykora is a seasoned professional with over 5 years of experience in political field operations. 
                With a remarkable track record of winning multiple races and receiving prestigious awards, Will brings 
                firsthand knowledge of the voter contact applications used in nationally targeted campaigns. Drawing 
                on over 3 years of dedication, Will has successfully conceptualized and developed a cutting-edge 
                canvassing app that embodies the essence of modern-day political engagement.
                </Typography>
                <Typography align="center" margin={marginSize}>
                  <Link href="mailto:will@directcampaign.org" color="inherit" margin={marginSize}>
                    will@directcampaign.org
                  </Link>
                </Typography>
              </Box>
            </Box>
            <Box display="flex">
              <Box>
                <Typography variant="h2" align="center" color={theme.palette.secondary.main}>
                  Evan Tobin
                </Typography>
                <Typography variant="subtitle1">
                  Evan Tobin is an accomplished Senior Mobile Developer, graduating with a Bachelor&apos;s degree in Computer 
                  Science from California State University San Marcos in 2024. With a focus on efficiency and reliability, 
                  Evan&apos;s passion lies in developing innovative solutions that empower canvassers to maximize their 
                  effectiveness through a dependable and user-friendly app. 
                </Typography>
              </Box>
            </Box>
            <Box display="flex">
              <Box>
                <Typography variant="h2" align="center" color={theme.palette.secondary.main}>
                  Christian Tobin
                </Typography>
                <Typography variant="subtitle1">
                Christian Tobin is a highly skilled Senior Cloud Architect with a Bachelor&apos;s degree in Computer Science from 
                California State University San Marcos. Known for his unwavering commitment to creating reliable and secure 
                programs, he excels at designing cutting-edge cloud solutions that empower organizations to scale and thrive. 
                </Typography>
              </Box>
            </Box>
            <Box display="flex">
              <Box>
                <Typography variant="h2" align="center" color={theme.palette.secondary.main}>
                  Brennan Goins
                </Typography>
                <Typography variant="subtitle1">
                  Brennan Goins began working on Direct Campaign from its conception, and during the last 3+ years he
                  has worked on software implementations including our web applications and backend technology, while
                  finishing a Bachelor&apos;s degree in Computer Science from California State University San Marcos.
                </Typography>
                <Typography align="center" margin={marginSize}>
                  <Link
                    href="https://www.linkedin.com/in/brennan-goins/"
                    color="inherit"
                    target="_blank"
                    rel="noreferrer"
                    margin={marginSize}
                  >
                    LinkedIn
                  </Link>
                  <Link
                    href="https://brennang01.github.io/"
                    color="inherit"
                    target="_blank"
                    rel="noreferrer"
                    margin={marginSize}
                  >
                    Portfolio
                  </Link>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default AboutUs;
