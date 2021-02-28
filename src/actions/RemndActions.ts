
export const scheduleNameChangeAction = (scheduleName: string) => {
  return {
    type: "scheduleNameChange",
    scheduleName: scheduleName,
  }
}

export const labelChangeAction = (label: string) => {
  return {
    type: "labelChange",
    label: label,
  }
}

export const timeChangeAction = (time: number) => {
  return {
    type: "timeChange",
    time: time,
  }
}

export const remindTimeChangeAction = (remindTime: string) => {
  return {
    type: "remindTimeChange",
    remindTime: remindTime,
  }
}

export const messageChangeAction = (message: string) => {
  return {
    type: "messageChange",
    message: message,
  }
}

export const notificationChangeAction = (notification: boolean) => {
  return {
    type: "notificationChange",
    notification: notification,
  }
}
