import React, { useState, useReducer, useCallback, createContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

import * as RemindActions from '../actions/RemndActions';
import remindReducer from '../reducers/remindReducer';
import initialRemindState from '../states/remindState';

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
    padding: theme.spacing(3, 10, 5),
  },
  buttonsArea: {
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  },
  backButton: {
    marginTop: theme.spacing(3),
  },
  nextButton: {
    marginTop: theme.spacing(3),
  },
  homeButton: {
    marginTop: theme.spacing(3),
  },
}));

// const ReimndStateContext = createContext({remindState: initialRemindState});
// const ReimndStateContext = createContext({});
// const ReimndDispatchContext = createContext({});
export const RemindContext = createContext({} as any);



export default function RemindDetail() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);

  const [remindState, dispatch] = useReducer(remindReducer, initialRemindState);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };
  
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  
  const onChangeScheduleName = useCallback(
    event => {
      dispatch(RemindActions.scheduleNameChangeAction(event.target.value))
    },
    [dispatch]
  )

  const onChangeLabel = useCallback(
    event => {
      dispatch(RemindActions.labelChangeAction(event.target.value))
    },
    [dispatch]
  )

  const onChangeTime = useCallback(
    event => {
      dispatch(RemindActions.timeChangeAction(event.target.value))
    },
    [dispatch]
  )

  const onChangeRemindTime = useCallback(
    event => {
      dispatch(RemindActions.remindTimeChangeAction(event.target.value))
    },
    [dispatch]
  )

  const onChangeMessage = useCallback(
    event => {
      dispatch(RemindActions.messageChangeAction(event.target.value))
    },
    [dispatch]
  )

  const onChangeNotification = useCallback(
    event => {
      dispatch(RemindActions.notificationChangeAction(event.target.value))
    },
    [dispatch]
  )

  // const resetState = useCallback(
  //   () => {
  //     dispatch(RemindActions.resetStateAction())
  //   },
  //   [dispatch]
  // )

  const register = () => {
    const method = "POST";
    const body = JSON.stringify(remindState);
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };
    fetch("https://line-bot-echo-202101301430.herokuapp.com/register", {method, headers, body}).then((res)=> res.json()).then().catch();

  }

  const value = {
    remindState: remindState,
    dispatch: dispatch,
    functions: {
      onChangeScheduleName: onChangeScheduleName,
      onChangeLabel: onChangeLabel,
      onChangeTime: onChangeTime,
      onChangeRemindTime: onChangeRemindTime,
      onChangeMessage: onChangeMessage,
      onChangeNotification: onChangeNotification,
    }
  }

  return (
  <Paper className={classes.paper}>
      {/* <Typography component="h1" variant="h4" align="center">
        リマインド登録
      </Typography> */}
      <h1>リマインド登録</h1>
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
              <Link to="/" style={{ textDecoration: 'none' }}><SecondaryButton className={classes.homeButton}>TOPへ</SecondaryButton></Link>
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <RemindContext.Provider value={value}>
                {getStepContent(activeStep)}
            </RemindContext.Provider>
            <div className={classes.buttonsArea}>
              {activeStep === steps.length - 1 ? (
                <SecondaryButton
                onClick={register}
                className={classes.nextButton}
                >
                  登録
                </SecondaryButton>
              ) : (
                <SecondaryButton
                onClick={handleNext}
                className={classes.nextButton}
                >
                  確認
                </SecondaryButton>
              )}
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