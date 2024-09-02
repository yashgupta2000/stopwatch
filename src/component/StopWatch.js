import React, { useState, useEffect } from 'react'

export default function StopWatch() {

    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false)

    useEffect(() => {
        let interval
        if (isRunning) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 10)
            }, 10)
        }
        else if (!isRunning && time !== 0) {
            clearInterval(interval)
        }

        return () => clearInterval(interval);
    }, [isRunning, time])


    const handleStartStop = () => {
        setIsRunning(!isRunning)
    }

    const handleReset = () => {
         setTime(0);
    }
    const miliSec = Math.floor(time % 1000) / 10;
    const sec = Math.floor(time / 1000) % 60;
    const min = Math.floor(time / 60000) % 60;


    return (
        <div className='border-2 border-white w-1/3 flex flex-col justify-center m-auto mt-16 rounded-2xl py-10 bg-black'>
            <div className='mb-14 text-white text-4xl'>STOPWATCH</div>

            <div className='flex justify-center border-white items-center gap-4 border-2 rounded-full h-52 w-52 p-1 m-auto'>
                <p className='text-3xl text-white'>{min} :</p>
                <p className='text-3xl text-white'>{sec} :</p>
                <p className='text-3xl text-white'>{miliSec}</p>
            </div>





            <div className='flex gap-3 justify-center mt-10'>
                {/* <button className='border border-black px-3 rounded-md ' onClick={handleStartStop}>Start</button> */}
                <button onClick={handleStartStop} className={isRunning ? ' bg-red-500 px-7 py-1 rounded-xl text-white ' : ' bg-green-500 px-7 py-1 rounded-xl text-white'}>{!isRunning ? 'Start' : 'Stop'} </button>
                <button onClick={handleReset} className=' bg-blue-400 px-7  rounded-xl text-white  '>Reset</button>
            </div>

        </div>
    )
}
