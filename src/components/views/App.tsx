import React, { useMemo } from 'react';
import { Provider, useSelector } from 'react-redux';
import { ThemeProvider, makeStyles, createMuiTheme } from '@material-ui/core';

import SpotifyPlayer from '../SpotifyPlayer';
import Router from '../../router';

import configureStore from '../../store/configureStore';
import { getSetting } from '../../reducers';
import { /* darkTheme, */ lightTheme } from '../../utils/themes';

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    width: (props: any) => props.width,
    height: '100vh',
    background: theme.palette.secondary.main,
  },
  content: {
    height: '100vh',
  },
}));

const Themed = () => {
  const classes = useStyles({
    width: '18px'
  });
  const isDark = useSelector(getSetting('isDark'));
  const theme = useMemo(
    () =>
      createMuiTheme(
        isDark
          ? lightTheme
          : lightTheme
      ),
    [isDark],
  );

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <div className={classes.content}>
          <Router />
          <SpotifyPlayer />
        </div>
      </div>
    </ThemeProvider>
  );
}

const App = () => {
  const { store } = configureStore();

  return (
    <Provider store={store}>
      <Themed />
    </Provider>
  );
};

const changeName = (name: string) => name;

export default App;
