import React from "react";

const ProgressProvider = ({ valueStart, valueEnd, animationDuration, children }) => {
  const [value, setValue] = React.useState(valueStart);

  React.useEffect(() => {
    let startTimestamp = null;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = timestamp - startTimestamp;
      const newValue = Math.min(valueStart + (valueEnd - valueStart) * (progress / animationDuration), valueEnd);

      setValue(newValue);

      if (progress < animationDuration) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [valueEnd, animationDuration, valueStart]);

  return children(value);
};

export default ProgressProvider;