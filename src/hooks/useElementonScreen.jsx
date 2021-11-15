/*import { useState, useEffect, useRef } from "react";

function useElementonScreen(options) {
  const containerRef = useRef(null);
  const [isVisible, setVisible] = useState(false);

  const callbackFunction = (entries) => {
    const [entry] = entries;
    setVisible(entry.isIntersecting);
  };
  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      if (containerRef.current) observer.disconnect(containerRef.current);
    };
  }, [containerRef, options]);
  return [containerRef, isVisible];
}
//https://dev.to/producthackers/intersection-observer-using-react-49ko
export default useElementonScreen;
*/
