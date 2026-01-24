import { useEffect,useState } from "react";

let CurrentTime = () => {
  const [time, SetTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      SetTime(new Date());
    }, 1000);
     
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      {time.toLocaleDateString()} <span></span>
      {time.toLocaleTimeString()}
    </div>
  );
};
export default CurrentTime;