import Header from "./_components/header/header";
import Map from "./_components/map/map";
import Subscriptions from "./_components/subscriptions/subscriptions";

export default function Home() {
  return (
    <div>
      <Header />
      <Subscriptions />
      <div className="grid grid-rows-1 grid-cols-2 -mt-40">
        <Map />
        <div>
          Newsletter
        </div>
      </div>
    </div>
  );
}
