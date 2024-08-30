import React, { useState, useEffect } from 'react';

const Counter = ({ setLive }) => {
    const [time, setTime] = useState({
        hours: 0,
        minutes: 0,
        seconds: 10,  
    });

    if(time.hours===0 && time.minutes===0 && time.seconds===0){
        setLive(true);
    }

    useEffect(() => {
        const countdown = setInterval(() => {
            if (time.seconds > 0) {
                setTime((prevTime) => ({
                    ...prevTime,
                    seconds: prevTime.seconds - 1,
                }));
            } else if (time.minutes > 0) {
                setTime((prevTime) => ({
                    ...prevTime,
                    minutes: prevTime.minutes - 1,
                    seconds: 59,
                }));
            } else if (time.hours > 0) {
                setTime((prevTime) => ({
                    ...prevTime,
                    hours: prevTime.hours - 1,
                    minutes: 59,
                    seconds: 59,
                }));
            }
        }, 1000);

        return () => clearInterval(countdown);
    }, [time]);

    return (
        <div className="flex flex-col items-center justify-center p-4 gap-4 md:gap-8 ">
            <h1 className="text-lg sm:text-2xl md:text-3xl font-bold mb-4 tracking-wider dark:text-white text-slate-900">GET READY FOR THE REVEAL!</h1>

            <div className="flex justify-around space-x-4 dark:text-white dark:bg-dark-background bg-white-background p-4 sm:p-8 rounded-xl shadow-md w-full sm:w-[80%] md:w-[60%] lg:w-[40%]">
                {/* Hours */}
                <div className="text-center">
                    <p className="text-xl sm:text-4xl md:text-6xl font-bold">{String(time.hours).padStart(2, '0')}</p>
                    <p className="text-sm sm:text-lg mt-2">Hours</p>
                </div>
                <div className="text-xl sm:text-4xl md:text-6xl font-bold">:</div>

                {/* Minutes */}
                <div className="text-center">
                    <p className="text-xl sm:text-4xl md:text-6xl font-bold">{String(time.minutes).padStart(2, '0')}</p>
                    <p className="text-sm sm:text-lg mt-2">Minutes</p>
                </div>
                <div className="text-xl sm:text-4xl md:text-6xl font-bold">:</div>

                {/* Seconds */}
                <div className="text-center">
                    <p className="text-xl sm:text-4xl md:text-6xl font-bold">{String(time.seconds).padStart(2, '0')}</p>
                    <p className="text-sm sm:text-lg mt-2">Seconds</p>
                </div>
            </div>
        </div>
    );
};

export default Counter;
