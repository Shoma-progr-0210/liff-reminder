import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

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
        label: '60分前',
    },
    ];

export default function RemindFrom() {
    let date = new Date();
    // 日本時間に調整
    date.setHours(date.getHours() + 9);
    const dateStr = date.toJSON().split(":")[0] + ":" + date.toJSON().split(":")[1];
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                入力
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={8}>
                    <TextField
                        required
                        id="scheduleName"
                        name="scheduleName"
                        label="予定名"
                        fullWidth
                        autoComplete="on"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        id="label"
                        select
                        name="label"
                        label="ラベル"
                        // value={yourState}
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
                        id="datetime"
                        name="datetime"
                        label="予定時間"
                        type="datetime-local"
                        defaultValue={dateStr}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="remind"
                        select
                        name="remind"
                        label="リマインド"
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
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    )
}