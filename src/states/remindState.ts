
interface remindState {
    scheduleName: string;
    label: string;
    time: string;
    remindTime: number,
    message: string;
    notification: boolean,
}


const initialRemindState: remindState = {
    scheduleName: "",
    label: "",
    time: "",
    remindTime: 0,
    message: "",
    notification: true,
}


export default initialRemindState;