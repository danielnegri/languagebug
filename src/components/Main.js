require('normalize.css/normalize.css');
require('styles/flex-layout.css');
require('styles/main.css');
require('styles/category-list.css');
require('styles/category.css');
require('styles/category-themes.css');

import React from 'react';
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import CategoryList from './CategoryList';
import MainAppBar from './MainAppBar';

const styles = {
  container: {
    minHeight: '450px',
    overflow: 'hidden'
  }
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500
  }
});

class AppComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);

    this.state = {
      open: false
    };
  }

  handleRequestClose() {
    this.setState({
      open: false
    });
  }

  handleTouchTap() {
    this.setState({
      open: true
    });
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="fit content layout vertical" style={styles.container}>
          <MainAppBar />
          <CategoryList />
        </div>
      </MuiThemeProvider>
    );
  }
}

AppComponent.defaultProps = { };

export default AppComponent;
