import React, { useMemo } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button, createTheme, useMediaQuery } from '@mui/material';
import { themeSettings } from '../../theme';
import FlexBetween from '../../components/common/FlexBetween';
import Header from '../../components/common/Header';
import { DownloadOutlined } from '@mui/icons-material';

const ViewTeam: React.FC = () => {
  const theme = useMemo(() => createTheme(themeSettings('dark')), ['dark']);
  const isNonMediumScreens = useMediaQuery('(min-width: 1200px)');

  const columns = [
    { field: 'name', headerName: 'Name', width: 130, sortable: true },
    { field: 'email', headerName: 'Email', width: 200, sortable: true },
  ];

  const rows = [
    { id: 1, name: 'John Smith', email: 'john.smith@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane.doe@example.com' },
    { id: 3, name: 'Bob Johnson', email: 'bob.johnson@example.com' },
    { id: 4, name: 'Bob Johnson', email: 'bob.johnson@example.com' },
  ];
  return (
    <Box m="1.5rem 2.5rem">
      <FlexBetween>
        <Header title="Team" subtitle="View or alter team members" />
        <Box>
          <Button
            sx={{
              backgroundColor: theme.palette.secondary.light,
              color: theme.palette.background.paper,
              fontSize: '14px',
              fontWeight: 'bold',
              padding: '10px 20px',
            }}
          >
            <DownloadOutlined sx={{ mr: '10px' }} />
            Add volunteers
          </Button>
        </Box>
      </FlexBetween>
      <Box
        mt="20px"
        display="grid"
        gridAutoRows="160px"
        gap="20px"
        sx={{
          '& > div': { gridColumn: isNonMediumScreens ? undefined : 'span 12' },
        }}
      >
        <Box
          gridColumn="span 8"
          gridRow="span 3"
          sx={{
            '& .MuiDataGrid-root': {
              border: 'none',
              borderRadius: '5rem',
            },
            '& .MuiDataGrid-cell': {
              borderBottom: 'none',
            },
            '& .MuiDataGrid-columnHeaders': {
              backgroundColor: theme.palette.background.paper,
              color: theme.palette.secondary[100],
              borderBottom: 'none',
            },
            '& .MuiDataGrid-virtualScroller': {
              backgroundColor: theme.palette.background.paper,
            },
            '& .MuiDataGrid-footerContainer': {
              backgroundColor: theme.palette.background.paper,
              color: theme.palette.secondary[100],
              borderTop: 'none',
            },
            '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
              color: `${theme.palette.secondary[200]} !important`,
            },
          }}
        >
          <DataGrid rows={rows} columns={columns} checkboxSelection />
        </Box>
      </Box>
    </Box>
  );
};

export default ViewTeam;
