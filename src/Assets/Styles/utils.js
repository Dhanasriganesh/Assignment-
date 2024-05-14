const breakPoints = {
    huge: 1200,
    large: 1024,
    medium: 968,
    small: 780,
  };
  
  export const media = (n) => {
    const breakPointsArray = Object.keys(breakPoints).map((size) => [
      size,
      breakPoints[size],
    ]);
  
    const [result] = breakPointsArray.reduce((acc, [name, size]) => {
      if (n === name) return [...acc, `@media (max-width: ${size}px)`];
      return acc;
    }, []);
  
    return result;
  };
  