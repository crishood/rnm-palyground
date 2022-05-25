import { useEffect, useState } from "react";
import {  Link } from "react-router-dom";

const CountDown = ({chara}) => {
    const [seconds, setSeconds] = useState(Math.floor(Math.random() * 120));
    useEffect(() => {
        const timer =
          seconds > 0 && setInterval(() => setSeconds(seconds - 1), 1000);
        return () => clearInterval(timer);
      }, [seconds]);
    return (
        <div className="countdown">
            <span className="countdown-seconds">
                {
                seconds
                }"
            </span>
            {seconds > 0 ? <Link to={`/character/${chara}`}>View</Link> : <span> It's gone ma G</span>}
        </div>
    );
}

export default CountDown;