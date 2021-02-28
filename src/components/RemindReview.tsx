import React from 'react';

import Typography from '@material-ui/core/Typography';

import { RemindContext } from '../pages/RemindDetail';


export default function RemindReview() {
    const context = React.useContext(RemindContext);
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>{context.remindState.scheduleName}</Typography>
            <Typography variant="h6" gutterBottom>{context.remindState.label}</Typography>
            <Typography variant="h6" gutterBottom>{context.remindState.time}</Typography>
            <Typography variant="h6" gutterBottom>{context.remindState.remindTime}</Typography>
            <Typography variant="h6" gutterBottom>{context.remindState.message}</Typography>
        </React.Fragment>
    )
}