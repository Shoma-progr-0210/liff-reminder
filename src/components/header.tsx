import React from 'react';
import { styled } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

// export const CustomAppBar = styled(AppBar)({
// });



export default class Header extends React.Component {
    render() {
      return (
        <React.Fragment>
            <CssBaseline />
            <AppBar position="absolute" color="default">
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        Reminder
                    </Typography>
                </Toolbar>
            </AppBar>
            {/* ヘッダーのスペース確保 */}
            <div>
                <Toolbar />
            </div>
        </React.Fragment>
      );
    }
  }