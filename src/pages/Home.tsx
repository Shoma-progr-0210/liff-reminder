import React from "react";
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { PrimaryButton, SecondaryButton } from '../components/buttons'

export default class Home extends React.Component {
  render() {
    return (
        <React.Fragment>
            <h1>Home</h1>
            <Grid container justify="center" spacing={3}>
            <Grid item xs={12}>
            <Link to="/create" style={{ textDecoration: 'none' }}><PrimaryButton className="button">/create</PrimaryButton></Link>
            </Grid>
            <Grid item xs={12}>
            <Link to="/info" style={{ textDecoration: 'none' }}><SecondaryButton className="button">/info</SecondaryButton></Link>
            </Grid>
            <Grid item xs={12}>
            <Link to="/send" style={{ textDecoration: 'none' }}><PrimaryButton className="button">/send</PrimaryButton></Link>
            </Grid>
            </Grid>
        </React.Fragment>
    );
  }
}