// import React, { useEffect, useState } from 'react';

// const DailyVideoConference = () => {
//   const [isActive, setIsActive] = useState(false);

//   useEffect(() => {
//     setIsActive(true);

//     return () => {
//       setIsActive(false); // Clean up when the component unmounts
//       // Any other cleanup you might need
//     };
//   }, []);

//   if (!isActive || !window.DailyIframe) {
//     return null; // Don't render anything if the component is not active
//   }

//   const callFrame = window.DailyIframe.createFrame({
//     showLeaveButton: true,
//     iframeStyle: {
//       position: 'fixed',
//       top: '50%', // Center vertically
//       left: '50%', // Center horizontally
//       transform: 'translate(-50%, -50%)', // Adjust for centering
//       width: '60%', // 60% width of the screen
//       height: '60%', // 60% height of the screen
//     },
//   });

//   callFrame.join({
//     url: 'https://h1s1.daily.co/MPZR71Q4gcgxFO9qV3ON', // Replace with your Daily room URL
//   });

//   return <div id="call-frame-container">{callFrame.iframe}</div>;
// };

// export default DailyVideoConference;


// //https://h1s1.daily.co/MPZR71Q4gcgxFO9qV3ON

import React, { useEffect, useState, useRef } from 'react';

const DailyVideoConference = () => {
  const [isActive, setIsActive] = useState(false);
  const callFrameRef = useRef(null);

  useEffect(() => {
    setIsActive(true);

    callFrameRef.current = window.DailyIframe.createFrame({
      showLeaveButton: true,
      iframeStyle: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '60%',
        height: '60%',
      },
    });

    callFrameRef.current.join({
      url: 'https://h1s1.daily.co/MPZR71Q4gcgxFO9qV3ON',
    });

    return () => {
      setIsActive(false);

      if (callFrameRef.current) {
        callFrameRef.current.destroy(); // Clean up the DailyIframe instance
        callFrameRef.current = null;
      }

      // Any other cleanup you might need
    };
  }, []);

  if (!isActive || !window.DailyIframe) {
    return null;
  }

  return <div id="call-frame-container">{callFrameRef.current.iframe}</div>;
};

export default DailyVideoConference;
