import React, { useState } from 'react';
import useWebsoket from '../../hooks/useWebsoket';
import classes from './DataPoints.module.css';

const DataPoints = ({getWebSocket}) => {

    const { dataPoints } = useWebsoket(getWebSocket);

    return (
        <div className={classes.datapointsWrapper}> 
            <div className={classes.grid}>
                <ul className={classes.list}>
                    <li className={[classes.row, classes.headerRow].join(' ')}>
                        <div>X</div>
                        <div>Y</div>
                    </li>
                    { 
                        dataPoints.map( d => {
                            return (
                                <li key={d.x}>
                                    <div>{d.x}</div>
                                    <div>{d.y}</div>
                                </li> 
                            );
                        }) 
                    }
                </ul>
            </div>
            <div className={classes.grid}>
                Sales Graph
            </div>
        </div>
    );
}

export default DataPoints;