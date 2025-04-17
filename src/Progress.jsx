import React, { useEffect, useState } from 'react';

function Progress({ progress }) {
  const [animationProgress, setAnimationProgress] = useState(0)

  useEffect(() => {
    // Animate to new progress value on every change
    const timeout = setTimeout(() => {
      setAnimationProgress(progress)
    }, 0) // slight delay for smoother animation

    return () => clearTimeout(timeout)
  }, [progress])

  return (
    <div className='outer'>
      <div
        className='inner'
        style={{
          backgroundColor: "green",
          width: `${animationProgress}%`,
          transition: 'width 0.5s ease-in-out',
          color: 'white',
          textAlign: 'center',
          padding: '4px 0'
        }}
      >
        {progress}%
      </div>
    </div>
  );
}

export default Progress;
