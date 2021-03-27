import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import { RemindContext } from '../pages/RemindDetail';

const labels = [
    {
      value: '',
      label: 'なし',
    },
    {
      value: 'shopping',
      label: '買い物',
    },
    {
      value: 'work',
      label: '仕事',
    },
    {
      value: 'hang out',
      label: '外出',
    },
    {
        value: 'trip',
        label: '旅行',
    },
  ];

const times = [
    {
        value: 0,
        label: '予定時間',
    },
    {
        value: 5,
        label: '5分前',
    },
    {
        value: 15,
        label: '15分前',
    },
    {
        value: 30,
        label: '30分前',
    },
    {
        value: 60,
        label: '1時間前',
    },
    {
        value: 120,
        label: '2時間前',
    },
    {
        value: 1440,
        label: '1日前',
    },
    ];

export default function RemindFrom() {
    // const context = React.useContext(RemindContext);
    const context = React.useContext(RemindContext);
    if (!context.remindState.time){
        let date = new Date();
        // 日本時間に調整
        date.setHours(date.getHours() + 9);
        const dateStr = date.toJSON().split(":")[0] + ":" + date.toJSON().split(":")[1];
        context.dispatch({type: "timeChange", time: dateStr});
    }
    return (
        <React.Fragment>
            {/* <Typography variant="h6" gutterBottom>
                入力
            </Typography> */}
            <Grid container spacing={3}>
                <Grid item xs={12} sm={8}>
                    <TextField
                        required
                        id="scheduleName"
                        name="scheduleName"
                        label="予定名"
                        fullWidth
                        autoComplete="on"
                        value={context.remindState.scheduleName}
                        onChange={context.functions.onChangeScheduleName}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        id="label"
                        select
                        name="label"
                        label="ラベル"
                        value={context.remindState.label}
                        onChange={context.functions.onChangeLabel}
                        fullWidth
                    >
                        {labels.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="time"
                        name="time"
                        label="予定時間"
                        type="datetime-local"
                        value={context.remindState.time}
                        onChange={context.functions.onChangeTime}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="remindTime"
                        select
                        name="remindTime"
                        label="リマインド"
                        value={context.remindState.remindTime}
                        onChange={context.functions.onChangeRemindTime}
                        fullWidth
                    >
                        {times.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="message"
                        name="message"
                        label="メッセージ"
                        fullWidth
                        multiline
                        rows={4}
                        variant="outlined"
                        autoComplete="on"
                        value={context.remindState.message}
                        onChange={context.functions.onChangeMessage}
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    )
}