import { useEffect, useRef, useState } from "react";

const CountDownTimer = ({initialCount}) => {
    const [currentCount, setCurrentCount] = useState(initialCount);
    const [isPaused, setIsPaused] = useState(false);
    const timer = useRef(null);
    useEffect(() => {
        if(currentCount > 0 && !isPaused){
            timer.current = setInterval(() => {
                setCurrentCount(prevCount => prevCount - 1)
            }, 1000);
        }
        return () => clearInterval(timer.current);
    },[currentCount, isPaused])

    const onPause = () => {
        setIsPaused(true);
        clearInterval(timer.current);
    }

    const onResume = () => {
        setIsPaused(false);
    }

    return (
        <>          
        <h1>{currentCount}</h1>
        <button onClick={onPause}>Pause</button>
        <button onClick={onResume}>Resume</button>
        </>
    )
}

export default CountDownTimer;