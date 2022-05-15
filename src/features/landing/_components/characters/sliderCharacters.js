import joinClasses from "helpers/joinClasses";
import { useState } from "react";

export default function SliderCharacters({
  list = [],
  title = "",
  titleClass = "",
}) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prev = () => {
    if (currentSlide === 0) setCurrentSlide(list.length - 1);
    else setCurrentSlide(currentSlide - 1);
  };

  const next = () => {
    if (currentSlide === list.length - 1) setCurrentSlide(0);
    else setCurrentSlide(currentSlide + 1);
  };

  const randomPosition = () => {
    // renvoie un nombre entre -50 et 50
    const randomY = Math.floor(Math.random() * 100) - 50;
    const randomX = Math.floor(Math.random() * 100) - 50;
    return `translate(${randomX}%, ${randomY}%)`;
  };

  return (
    <div>
      <h2
        className={joinClasses(
          "text-center text-lg font-dancingScript",
          titleClass
        )}
      >
        {title}
      </h2>
      <div className="flex gap-2 w-full justify-between items-center">
        <button
          onClick={prev}
          className="active:opacity-70 
          hover:scale-x-110 h-fit"
        >
          <img src="/assets/icons/arrow_left.png" alt="" />
        </button>
        {list.map((item, index) => {
          const hidden = index !== currentSlide;
          return (
            <div
              key={index}
              className={joinClasses(
                "flex flex-col items-center gap-2 fadeIn",
                hidden && "hidden"
              )}
            >
              <img
                src={item.url}
                alt={item.name}
                className="h-[380px] w-[380px] object-contain "
              />
              <p
                className="text-md p-default rounded-full bg-red w-fit text-white"
                style={{
                  transform: randomPosition(),
                }}
              >
                {list[currentSlide].name}
              </p>
            </div>
          );
        })}

        <button
          onClick={next}
          className="active:opacity-70 
          hover:scale-x-110 h-fit"
        >
          <img src="/assets/icons/arrow_right.png" alt="" />
        </button>
      </div>
    </div>
  );
}
