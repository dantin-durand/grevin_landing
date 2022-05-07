import subscriptionTypes from "utils/subscriptionTypes"
import SubscriptionType from "./subscriptionType"

export default function Subscriptions() {
    return (
        <div style={subscriptionsContainer}>
            {/* Title and sub title */}
            <div className="pt-4">
                <div className="flex justify-center items-center">
                    <img src="/assets/pictures/new-label-yellow.png"/>
                    <h1 class="font-dancingScript text-xl text-white pt-10 -ml-24">ABONNEMENTS</h1>
                </div>
                <div className="w-full">
                    <h3 className="text-center text-lg text-white font-montserrat">Ne rate pas ta Star, prends vite ton abonnement !</h3>
                </div>
            </div>

            {/* Subscription type */}
            <div className="mt-4 flex items-end justify-center">
                <div className="grid grid-rows-1 grid-cols-3 gap-20 w-9/12 items-end">
                    {subscriptionTypes.map((subscriptionType, index) => {
                        return <SubscriptionType key={index} {...subscriptionType}/>
                    })}
                </div>
            </div>
        </div>
    )
}

const subscriptionsContainer = {
    backgroundImage: `url("/assets/waves/waves-sections/abonnements_background.svg")`,
    backgroundSize: '92%',
    backgroundRepeat: 'no-repeat',
}