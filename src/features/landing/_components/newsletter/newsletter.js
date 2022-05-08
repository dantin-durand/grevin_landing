export default function Newsletter() {
    return (
        <div className="flex items-end justify-center">
            <div className="bg-red rounded-3xl text-white px-14 py-2 mb-10">
                <h3 className="text-md text-center mb-4">Abonnez-vous à notre newsletter:</h3>
                <p>Ne ratez aucune nouvelle personalité de notre musée !</p>
                <div className="grid grid-rows-1 grid-cols-12 my-4">
                    <input className="col-start-2 col-span-10 rounded-full pl-6 py-2 mb-4 text-sm text-black" type="email" placeholder="Adresse mail..."/>
                    <button className="col-start-7 col-span-5 flex items-center justify-between rounded-full bg-yellow text-red text-sm px-4 py-1">
                        <img src="/assets/icons/mail.svg" style={{height: '1.5em'}}/>
                        S'abonner
                    </button>
                </div>
                <div>
                    <p>*des réductions sont envoyés régulièrements aux<br/>abonnèes de nos newsletter</p>
                </div>
            </div>
        </div>
    )
}