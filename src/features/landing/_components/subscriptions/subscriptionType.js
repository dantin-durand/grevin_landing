export default function SubscriptionType({
    isHighlighted = false,
    title = "",
    description = "",
    options = [],
    price = 0
}) {
    return (
        <div className="rounded-3xl bg-white  border-4 border-[#A0042D]" style={{height: 'fit-content'}}>
            <div className="flex flex-col justify-center items-center mb-6">
                <h4 className="text-center text-md mt-4" dangerouslySetInnerHTML={{ __html: title }}></h4>
                <div className="border border-[#A0042D] w-2/3 mb-4"></div>
                <p className="text-center font-dancingScript text-red text-sm font-black" dangerouslySetInnerHTML={{ __html: description }}></p>
            </div>
            <div>
                {options.map((option, index) => {
                    return (
                        <div className="flex items-center justify-start px-4" key={index}>
                            { option.isEnable 
                                ? (<img src="/assets/icons/done.svg"/>) 
                                : (<img src="/assets/icons/cross.svg" />)
                            }
                            <p className="pl-2 font-medium" dangerouslySetInnerHTML={{ __html: option.description }}></p>
                        </div>
                    );
                })}
            </div>
            <div className={`flex flex-col justify-center items-center mt-4 ${isHighlighted? "mb-12" : "mb-8"}`}>
                <h3 className="text-center font-dancingScript font-bold text-lg">{price}€/mois</h3>
                <button className="mt-4 border-2 border-[#A0042D] rounded-full px-6 py-1 font-montserrat text-xs font-medium">Souscrire</button>
            </div>
        </div>
    )
}