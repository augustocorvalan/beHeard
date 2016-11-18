import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default ({children}) => {
  return (
    <MuiThemeProvider>
        <div id="container">
            {children}
        </div>
    </MuiThemeProvider>
  );
}
