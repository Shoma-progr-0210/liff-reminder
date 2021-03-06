import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles((theme) => ({
  copyright: {
    flexDirection: 'column',
    textAlign: 'center',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1),
    // position: 'absolute',
    // left:0,
    // bottom:0,
    // right:0,
  }
}));

export default function Copyright() {
  const classes = useStyles();
    return (
      <Typography variant="body2" color="textSecondary" className={classes.copyright}>
        {'© '}
        <Link color="inherit" href="https://github.com/Shoma-progr-0210/">
          Shoma Hashimoto
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }