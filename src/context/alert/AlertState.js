import AlertContext from './alertContext';
import AlertReducer from './alertReducer';
import {
    SET_ALERT,
    REMOVE_ALERT
} from '../types';
import React, {useReducer} from "react";

const AlertState = props => {
    const initialState = null;

    const [state, dispatch] = useReducer(AlertReducer, initialState);

    //const [alert, setAlert] = useState(null);

    const setAlert = (message, type) => {
        dispatch({
            type: SET_ALERT,
            payload: {message, type}
        })

        setTimeout(() => dispatch({type: REMOVE_ALERT}), 3000)
    }

    return (
        <AlertContext.Provider
            value={{
                alert: state,
                setAlert
            }}
        >
            {props.children}
        </AlertContext.Provider>
    )
}

export default AlertState;