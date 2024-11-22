import { Box, Button, createTheme, useMediaQuery } from '@mui/material';
import React, { useMemo, useState } from 'react';
import { themeSettings } from '../../theme';
import FlexBetween from '../../components/common/FlexBetween';
import Header from '../../components/common/Header';
import { DataGrid } from '@mui/x-data-grid';
import { DownloadOutlined } from '@mui/icons-material';

const AddDoor: React.FC = () => {
  const theme = useMemo(() => createTheme(themeSettings('dark')), ['dark']);
  const isNonMediumScreens = useMediaQuery('(min-width: 1200px)');

  const columns = [
    { field: 'address', headerName: 'Address', width: 400 },
    { field: 'residentName', headerName: 'Resident Name', width: 200 },
  ];

  const rows = [
    { id: 1, residentName: 'John Smith', address: '123 Main St' },
    { id: 2, residentName: 'Jane Doe', address: '456 Elm St' },
    { id: 3, residentName: 'Bob Johnson', address: '789 Maple Ave' },
    { id: 4, residentName: 'Sarah Lee', address: '321 Oak Ln' },
  ];

  return (
    <Box m="1.5rem 2.5rem">
      <FlexBetween>
        <Header title="Doors  " subtitle="View or alter registered doors" />
        <Box>
          <Button
            sx={{
              backgroundColor: theme.palette.secondary.light,
              color: theme.palette.background.paper,
              fontSize: '14px',
              fontWeight: 'bold',
              padding: '10px 20px',
            }}
            onClick={() => {
              const input = document.createElement('input');
              input.type = 'file';
              input.click();
            }}
          >
            <DownloadOutlined sx={{ mr: '10px' }} />
            Add doors
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

export default AddDoor;
