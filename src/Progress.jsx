import React, { useEffect, useState } from 'react';

function Progress(props) {

    const [animationProgress,setAnimationProgress] = useState(0)

    useEffect(()=>{
        setTimeout(()=>{
            setAnimationProgress(props.progress)
        },1000)
    },[])

    return (
        <div>
            <div className='outer'>
                <div className='inner' style={{
                    backgroundColor: "green",
                    width : `${animationProgress}%`,
                    transition : '0.5s ease-in-out'
            }}>
                    {props.progress}
                </div>
            </div>
        </div>
    );
}

export default Progress;