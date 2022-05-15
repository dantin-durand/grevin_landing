import joinClasses from "helpers/joinClasses";
import { useState } from "react";
import { Button } from "./Button";

export function ButtonWavesRed({ children, className, onClick, ...props }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <Button
      style={{
        backgroundImage: "url(/assets/waves/waves-btn/red_wave.svg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: isHover ? "110% center" : "top 100px center",
      }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={joinClasses("p-default rounded-full", className)}
      onClick={onClick}
      {...props}
    >
      {children}
    </Button>
  );
}
