/**
 * Created by daniel on 5/7/16.
 */

import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

function handleTouchTap() {
  alert('onTouchTap triggered on the title component');
}

const styles = {
  title: {
    cursor: 'pointer'
  }
};

const MainAppBar = () => (
  <AppBar
    title={<span style={styles.title}>LanguageBug</span>}
    onTitleTouchTap={handleTouchTap}
    iconElementRight={<FlatButton label="Logout" />}
  />
);

export default MainAppBar;
