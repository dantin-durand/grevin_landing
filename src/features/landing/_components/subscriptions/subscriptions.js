import subscriptionTypes from "utils/subscriptionTypes";
import SubscriptionsDisclaimer from "./subscriptionsDisclaimer";
import SubscriptionsHeader from "./subscriptionsHeader";
import SubscriptionType from "./subscriptionType";

export default function Subscriptions() {
  return (
    <div style={subscriptionsContainer} className="lg:h-[153vh]">
      <SubscriptionsHeader />
      {/* Subscription type */}
      <div className="mt-4 flex items-end justify-center mb-4">
        <div className="grid lg:grid-rows-1 lg:grid-cols-3 gap-20 w-9/12 items-end">
          {subscriptionTypes.map((subscriptionType, index) => {
            return <SubscriptionType key={index} {...subscriptionType} />;
          })}
        </div>
      </div>
      <SubscriptionsDisclaimer />
    </div>
  );
}

const subscriptionsContainer = {
  backgroundImage: `url("/assets/waves/waves-sections/abonnements_background.svg")`,
  backgroundSize: "92%",
  backgroundRepeat: "no-repeat",
};
