import React, { useMemo, useState } from 'react';
import FlexBetween from '../../components/common/FlexBetween';
import { Box, createTheme, useMediaQuery } from '@mui/material';
import Header from '../../components/common/Header';
import { themeSettings } from '../../theme';

const AddSurvey: React.FC = () => {
  const theme = useMemo(() => createTheme(themeSettings('dark')), ['dark']);
  const isNonMediumScreens = useMediaQuery('(min-width: 1200px)');

  const [selectedFile, setSelectedFile] = useState<Blob>();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  return (
    <Box m="1.5rem 2.5rem">
      <FlexBetween>
        <Header title="Add Survey" subtitle="Add, edit, or remove surveys" />
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
        <div>
          <input type="file" name="file" onChange={changeHandler} />
          {isFilePicked ? (
            <div>
              <p>Filename: {selectedFile.name}</p>
              <p>Filetype: {selectedFile.type}</p>
              <p>Size in bytes: {selectedFile.size}</p>
            </div>
          ) : (
            <p>Select a file to show details</p>
          )}
          <div>
            <button onClick={() => console.log('Pressed')}>Submit</button>
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default AddSurvey;
