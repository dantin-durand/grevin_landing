import SliderCharacters from "./sliderCharacters";

export default function Characters() {
  const permanentSlider = [
    {
      url: "/assets/stars/star_KevAdams.png",
      name: "Kev Adams",
    },
    {
      url: "/assets/stars/star_MBappe.png",
      name: "Kilian Mbappé",
    },
    {
      url: "/assets/stars/star_PatrickSeb.png",
      name: "Patrick Sébastien",
    },
  ];

  const temporarySlider = [
    {
      url: "/assets/stars/star_Fouras.png",
      name: "Père Fouras",
    },
    {
      url: "/assets/stars/star_Nikos.png",
      name: "Nikos Aliagas",
    },
    {
      url: "/assets/stars/star_Chabal.png",
      name: "Sébastien Chabal",
    },
  ];

  return (
    <div
      className="bg-right-top bg-no-repeat px-[10%] pt-10 pb-40"
      style={{
        backgroundSize: 700,
        backgroundImage:
          "url(/assets/waves/waves-sections/personnages_background.svg)",
      }}
    >
      <h1 className="text-xl text-center font-dancingScript">QUI EST LA ?</h1>
      <p className="text-center text-red font-medium text-lg">
        Ta Star est là ? Viens vite partager de bons souvenirs !
      </p>

      <div className="flex gap-10 mt-[150px] justify-center">
        <SliderCharacters
          list={permanentSlider}
          title="Personnages Permanents"
          titleClass="text-red"
        />
        <SliderCharacters
          list={temporarySlider}
          title="Personnages Temporaires"
          titleClass="text-yellow"
        />
      </div>
    </div>
  );
}
