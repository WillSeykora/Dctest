import React, { useMemo } from 'react';
import FlexBetween from '../../components/common/FlexBetween';
import { Box, createTheme, useMediaQuery } from '@mui/material';
import Header from '../../components/common/Header';
import { themeSettings } from '../../theme';

const AddTask: React.FC = () => {
  const theme = useMemo(() => createTheme(themeSettings('dark')), ['dark']);
  const isNonMediumScreens = useMediaQuery('(min-width: 1200px)');
  return (
    <Box m="1.5rem 2.5rem">
      <FlexBetween>
        <Header title="Add Task" subtitle="Add, edit, or remove tasks" />
      </FlexBetween>
      <Box
        mt="20px"
        display="grid"
        gridAutoRows="160px"
        gap="20px"
        sx={{
          '& > div': { gridColumn: isNonMediumScreens ? undefined : 'span 12' },
        }}
      ></Box>
    </Box>
  );
};

export default AddTask;
