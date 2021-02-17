import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import RemindFrom from '../components/RemindFrom';
import RemindReview from '../components/RemindReview';

import { SecondaryButton, NomalButton } from '../components/buttons'


const steps = ['入力', '確認'];

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <RemindFrom />;
    case 1:
      return <RemindReview />;
    default:
      throw new Error('Unknown step');
  }
}

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        padding: theme.spacing(3),
      },
    },
    stepper: {
      padding: theme.spacing(3, 20, 5),
    },
    buttonsArea: {
      display: 'flex',
      flexDirection: 'row-reverse',
      justifyContent: 'space-between',
    },
    leftButtonsArea: {
      // display: 'flex',
      // justifyContent: 'flex-start',
    },
    rightButtonsArea: {
      // display: 'flex',
      // justifyContent: 'flex-end',
    },
    backButton: {
      marginTop: theme.spacing(3),
    },
    nextButton: {
      marginTop: theme.spacing(3),
    },
    finishButtonsArea: {

    },
    homeButton: {
      marginTop: theme.spacing(3),
    },
  }));

export default function RemindDetail() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep(activeStep + 1);
      };
    
    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    return (
    <Paper className={classes.paper}>
        <Typography component="h1" variant="h4" align="center">
          リマインド登録
        </Typography>
        <Stepper activeStep={activeStep} className={classes.stepper}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <React.Fragment>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                登録完了
              </Typography>
              <Typography variant="subtitle1">
                リマインドを登録しました
              </Typography>
              <div>
                <Link to="/" style={{ textDecoration: 'none' }}><SecondaryButton className={classes.homeButton}>Homeへ</SecondaryButton></Link>
              </div>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <div className={classes.buttonsArea}>
                <SecondaryButton
                  onClick={handleNext}
                  className={classes.nextButton}
                >
                  {activeStep === steps.length - 1 ? '確認' : '次へ'}
                </SecondaryButton>
                {activeStep !== 0 ? (
                  <NomalButton onClick={handleBack} className={classes.backButton}>
                    戻る
                  </NomalButton>
                ) : (
                  <Link to="/" style={{ textDecoration: 'none' }}><NomalButton className={classes.homeButton}>キャンセル</NomalButton></Link>
                )}
              </div>
            </React.Fragment>
          )}
        </React.Fragment>
    </Paper>
    )
}