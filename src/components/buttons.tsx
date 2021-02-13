import React from 'react';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';



export const PrimaryButton = styled(Button)({
    backgroundColor: '#00c853',
    color: '#ffffff',
    boxShadow: '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',
    '&:hover': {
        backgroundColor: '#009624'
    },
});


export const SecondaryButton = styled(Button)({
    backgroundColor: '#0d47a1',
    color: '#ffffff',
    boxShadow: '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',
    '&:hover': {
        backgroundColor: '#002171'
    },
});