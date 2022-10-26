import React, { useState } from 'react';
import useWebsoket from '../../hooks/useWebsoket';
import classes from './DataPoints.module.css';

const DataPoints = ({getWebSocket}) => {

    const { dataPoints } = useWebsoket(getWebSocket);

    return (
        <div className={classes.datapointsWrapper}> 
            {dataPoints.map(d=><li>{d.x}</li>)}
        </div>
    );
}

export default DataPoints;