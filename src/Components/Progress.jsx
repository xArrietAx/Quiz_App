import { useEffect, useRef } from "react";

export const CircularProgress = ({value}) => {

    const progress = useRef()

    useEffect(() => {
        const progressElement = progress.current;
        progressElement.style.height = value * 160 / 100+ "px";
      }, [value]);

  return (
    <div className='circular__progress'>
       <span className="value">{Math.round(value)}%</span>
       <div className="progress" ref={progress} ></div>
    </div>
  )
}
