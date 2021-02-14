import React from "react";
import { Link } from 'react-router-dom';
import {PrimaryButton, SecondaryButton, TertiaryButton, NomalButton} from '../components/buttons'

export default class Home extends React.Component {
  render() {
    return (
        <div>
            <h1>Home</h1>
            <Link to="/send" style={{ textDecoration: 'none' }}><PrimaryButton className="button">/send</PrimaryButton></Link>
            <Link to="/info" style={{ textDecoration: 'none' }}><SecondaryButton className="button">/info</SecondaryButton></Link>
        </div>
    );
  }
}