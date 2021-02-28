
const remindReducer = (state: any, action: any) => {
    switch (action.type) {
        case "scheduleNameChange":
            return {
                ...state,
                scheduleName: action.scheduleName,
            }
        case "labelChange":
            return {
                ...state,
                label: action.label,
            }
        case "timeChange":
            return {
                ...state,
                time: action.time,
            }
        case "remindTimeChange":
            return {
                ...state,
                remindTime: action.remindTime,
            }
        case "messageChange":
            return {
                ...state,
                message: action.message,
            }
        case "notificationChange":
            return {
                ...state,
                notification: action.notification,
            }
    }
}

export default remindReducer;
