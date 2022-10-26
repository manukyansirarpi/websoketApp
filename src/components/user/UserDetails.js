import React from 'react';
import useWebsoket from '../../hooks/useWebsoket';
import classes from './UserDetails.module.css';

const UserDetails = ({getWebSocket}) => {

    const { total } = useWebsoket(getWebSocket);
      
    return (
        <div className={classes.userDetailsWrapper}> 
            total is {total}
        </div>
    );
}

export default UserDetails;