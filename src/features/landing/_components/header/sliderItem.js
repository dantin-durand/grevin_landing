import { Button, ButtonWavesYellow } from "components/atoms";
import joinClasses from "helpers/joinClasses";
import { useState } from "react";

export default function SliderItem({ item = {}, hidden = true, prev, next }) {
  const [animation, setAnimation] = useState(null);
  const handlePrev = async () => {
    setAnimation("slideOutLeft");
    setTimeout(() => {
      setAnimation(null);
      prev();
    }, 300);
  };
  const handleNext = () => {
    setAnimation("slideOutLeft");
    setTimeout(() => {
      setAnimation(null);
      next();
    }, 300);
  };
  return (
    <div
      className={joinClasses(
        "max-h-[80vh] h-full transition-all fadeIn",
        hidden && "hidden"
      )}
    >
      <div className="absolute top-0 left-0  h-full">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 666.5 663.8"
          className="h-full"
        >
          <path
            style={{
              fill: item.color,
            }}
            d="M560.4,520.1c-0.5,52.8-22.7,151.7-114.5,133.5C322.4,629.1,142.2,623.1,0,663.8V0h666.5
	c-14.8,103.9-111.2,173.9-120.1,298.6C540.3,385.1,560.9,467.3,560.4,520.1z"
          />
        </svg>
      </div>

      <div className="w-full h-[80vh] flex items-center gap-16 pr-[100px]">
        <div className="w-full max-w-[500px] ml-[200px]">
          <img
            src={item.image}
            alt=""
            className={joinClasses(
              "h-[75vh] object-contain ",
              animation ? animation : "slideInLeft"
            )}
          />
          <div className="flex items-center gap-10 z-10 w-full justify-center -translate-y-[100px]">
            <button onClick={handlePrev} className="cursor-pointer">
              <img src="/assets/icons/prev.svg" alt="prev" />
            </button>
            <button onClick={handleNext}>
              <img
                src="/assets/icons/prev.svg"
                alt="next"
                className="rotate-180"
              />
            </button>
          </div>
        </div>
        <div className="w-full max-w-[700px]">
          <h1 className="text-xl font-bold text-[60px] leading-[62px] mb-5">
            {item.title}
          </h1>
          <p className="mb-16">{item.description}</p>

          <ButtonWavesYellow className="flex gap-2 items-center bg-red text-white">
            <img src="/assets/icons/info.svg" alt="info" />
            <p>Voir plus</p>
          </ButtonWavesYellow>

          <div className="mt-[100px] flex justify-between">
            <div>
              <h3 className="uppercase font-bold leading-4">Date</h3>
              <p className="text-red font-medium">{item.date}</p>
            </div>
            <div>
              <h3 className="uppercase font-bold leading-4">Prix éntrée</h3>
              <p className="text-red font-medium">{item.price}</p>
            </div>
            <div>
              <h3 className="uppercase font-bold leading-4">Invités</h3>

              {item.guests.map((guest, index) => (
                <p key={index} className="text-red font-medium leading-5">
                  {guest}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
