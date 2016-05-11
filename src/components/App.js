require('normalize.css/normalize.css');
require('styles/flex-layout.css');
require('styles/main.css');
require('styles/category-list.css');
require('styles/category.css');
require('styles/category-themes.css');

import React from 'react';
import AppBar from 'material-ui/AppBar';
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import CategoryList from './CategoryList';

const styles = {
  container: {
    minHeight: '450px',
    overflow: 'hidden'
  },
  title: {
    cursor: 'pointer'
  }
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500
  }
});

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const username = 'Daniel';

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="fit content layout vertical" style={styles.container}>
          <AppBar
            title="LanguageBug"
            iconElementRight={<FlatButton label={username} styles={styles.button} linkButton={false}/>}
            showMenuIconButton={false}
          />
          <CategoryList />
        </div>
      </MuiThemeProvider>
    );
  }
}

App.defaultProps = { };

export default App;
