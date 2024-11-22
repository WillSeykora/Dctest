import React, { useMemo } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';

import { Authenticator } from '@aws-amplify/ui-react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PublicRoutes from './routes/PublicRoutes';
import PrivateRoutes from './routes/PrivateRoutes';

import Login from './pages/public/Login';
import Welcome from './pages/public/Welcome';
import ContactUs from './pages/public/ContactUs';
import Dashboard from './pages/private/Dashboard';
import PageNotFound from './pages/public/PageNotFound';

import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import Settings from './pages/private/Settings';
import { themeSettings } from './theme';
import AboutUs from './pages/public/AboutUs';
import AddSurvey from './pages/private/AddSurvey';
import ViewTeam from './pages/private/ViewTeam';
import AddDoor from './pages/private/AddDoor';
import AddTask from './pages/private/AddTask';

Amplify.configure(awsExports);

const App: React.FC = () => {
  const theme = useMemo(() => createTheme(themeSettings('dark')), ['dark']);

  return (
    <div className="app">
      <Authenticator.Provider>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Routes>
              <Route element={<PrivateRoutes />}>
                <Route path="/dashboard" index element={<Dashboard />} />
                <Route path="/view team" index element={<ViewTeam />} />
                <Route path="/add door" index element={<AddDoor />} />
                <Route path="/add survey" index element={<AddSurvey />} />
                <Route path="/add task" index element={<AddTask />} />
                <Route path="/settings" element={<Settings />} />
              </Route>
              <Route element={<PublicRoutes />}>
                <Route path="/" index element={<Welcome />} />
                <Route path="/login" element={<Login />} />
                <Route path="/contactUs" element={<ContactUs />} />
                <Route path="/aboutUs" element={<AboutUs />} />
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </ThemeProvider>
        </BrowserRouter>
      </Authenticator.Provider>
    </div>
  );
};

export default App;
