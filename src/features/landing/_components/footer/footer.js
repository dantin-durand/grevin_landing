export default function Footer() {
  return (
    <div className="flex flex-col -mt-10 text-white font-montserrat">
      <div style={footerWave}></div>
      <div className="bg-black pb-24">
        <div className="flex flex-col items-center justify-center">
          <img
            className="mt-16 mb-10"
            src="/assets/logo/logo.svg"
            alt="Museum logo"
            style={{ objectFit: "cover" }}
          />
          <h3 className="text-md text-center">
            Les droits d'auteur de toutes les expositions sont détenus par le
            Musée Grevin
          </h3>
        </div>
      </div>
      <div
        className="bg-black pt-10 grid grid-rows-1 grid-cols-12"
        style={footerStatue}
      >
        <div className="row-start-1 col-start-2 col-end-7">
          <h3 className="font-bold text-lg">Grévin</h3>
          <div className="text-sm font-medium">
            <ul>
              <li className="mt-4 hover:text-yellow">FAQ</li>
              <li className="my-2 hover:text-yellow">Nos Partenaires</li>
              <li className="my-2 hover:text-yellow">Les coulisses</li>
              <li className="my-2 hover:text-yellow">Presse</li>
              <li className="my-2 hover:text-yellow">Finance</li>
              <li className="my-2 hover:text-yellow">Rejoignez-nous</li>
              <li className="my-2 hover:text-yellow">
                Toutes nos personnalités
              </li>
              <li className="my-2 hover:text-yellow">Tarif caisse</li>
              <li className="my-2 hover:text-yellow">Contact</li>
            </ul>
          </div>
        </div>
        <div className="row-start-1 col-start-7 col-end-12 text-right">
          <h3 className="font-bold text-lg">Business</h3>
          <div className="text-sm font-medium">
            <ul>
              <li className="mt-4 hover:text-yellow">Location d'espace</li>
              <li className="my-2 hover:text-yellow">
                Groupes / CE / Collectivités
              </li>
              <li className="my-2 hover:text-yellow">Événéments scolaires</li>
              <li className="my-2 hover:text-yellow">Demande statue</li>
              <li className="my-2 hover:text-yellow">Ateliers by Grevin</li>
              <li className="my-2 hover:text-yellow">Salons / Expositions</li>
              <li className="my-2 hover:text-yellow">
                Professionnels du tourisme
              </li>
            </ul>
          </div>
        </div>
        <div className="row-start-2 col-start-2 col-end-12 grid grid-rows-1 grid-cols-12">
          <p className="col-start-1 col-end-3 flex items-center justify-start">
            Mentions légales
          </p>
          <p className="col-start-3 col-end-4 flex items-center justify-center">
            CGV
          </p>
          <p className="col-start-4 col-end-10 flex items-center justify-center">
            @Musée Grévin 2022
          </p>
          <div className="col-start-10 col-end-13 flex flex-row items-center justify-between">
            <img src="/assets/reseaux/youtube.svg" />
            <img src="/assets/reseaux/twitter.svg" />
            <img src="/assets/reseaux/instagram.svg" />
            <img src="/assets/reseaux/facebook.svg" />
          </div>
        </div>
      </div>
    </div>
  );
}

const footerWave = {
  backgroundImage: `url("/assets/waves/waves-sections/foter_background.svg")`,
  backgroundSize: "105%",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "bottom",
  height: "24vh",
};

const footerStatue = {
  backgroundImage: `url("/assets/pictures/footer.png")`,
  backgroundSize: "35%",
  backgroundRepeat: "no-repeat",
  height: "93vh",
  backgroundPosition: "center",
};
