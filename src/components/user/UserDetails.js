import React from 'react';
import useWebsoket from '../../hooks/useWebsoket';
import classes from './UserDetails.module.css';

const UserDetails = ({getWebSocket}) => {

    const { total } = useWebsoket(getWebSocket);
      
    return (
        <div className={classes.userDetailsWrapper}> 
            <div>
                <div className={classes.title}> Total Data Count </div>
                <div className={classes.data}> {total} </div>
            </div>
            <div>
                <div className={classes.status}>WS: <span>Connected </span></div>
            </div>
        </div>
    );
}

export default UserDetails;