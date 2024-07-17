export const fadein = (direction, delay) => {
  return {
    hidden: {
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      scale: 0.7,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      scale: 1,
      transformation: {
        type: "tween",
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};
export const revealInText = (direction, delay) => {
  return {
    hidden: {
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    },
    show: {
      y: 0,
      x: 0,

      transformation: {
        type: "tween",
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};
export const filter = (delay) => {
  return {
    hidden: {
      filter: "grayscale(100%) sepia(20%) brightness(80%)",
    },
    show: {
      filter: "none",
      transformation: {
        type: "tween",
        duration: 2,
        delay: delay,
        ease: [0.17, 0.67, 0.83, 0.67],
      },
    },
  };
};
