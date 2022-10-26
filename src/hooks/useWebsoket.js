import { useSelector, useDispatch } from 'react-redux';
import { addDataPoint, selectDataPoints } from '../components/datapoints/dataPointsSlice';
import { incrementTotal, selectTotal } from '../components/user/userDetailsSlice';

const useWebsoket = (getWebSocket) => {

    const ws = getWebSocket();
    const dataPoints = useSelector(selectDataPoints);
    const total = useSelector(selectTotal);

    const dispatch = useDispatch();

    localStorage.setItem("totalDataPoints", total);
   
    if(ws) {
        ws.onmessage = (event) => processMessages(event);
    }

    const processMessages = (event) => {
        const response = JSON.parse(event.data);
        dispatch(addDataPoint(response));
        dispatch(incrementTotal());
    };


  return {total, dataPoints, status};
}

export default useWebsoket;