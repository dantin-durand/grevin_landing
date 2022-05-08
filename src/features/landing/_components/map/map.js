export default function Map() {
    return (
        <div className="grid grid-rows-1 grid-cols-12">
            <img className="col-start-4 col-span-full" src="/assets/pictures/map.png" alt="Grevin museum google map"/>
            <div className="col-start-4 col-span-full font-montserrat">
                <h3 className="font-bold text-lg">Musée Grevin</h3>
                <div className="flex flex-row">
                    <p className="text-sm mr-10 font-medium">10 Bd Montmartre, 75009 Paris</p>
                    <button>
                        <img src="/assets/icons/link.svg" alt="Share icon"/>
                    </button>
                </div>
                <p className="font-bold text-sm">01 47 70 85 05</p>
                <div className="grid grid-rows-1 grid-cols-12 text-sm">
                    <div className="col-span-5">
                        <p className="font-medium">
                            Samedi -> Jeudi :<br/>
                            <span className="font-bold">9h30 - 18h</span>
                        </p>
                    </div>
                    <div className="col-span-5">
                        <p className="font-medium">
                            Vendredi :<br/>
                            <span className="font-bold">10h - 17h</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}