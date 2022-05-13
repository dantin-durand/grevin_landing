import Footer from "./_components/footer/footer";
import Map from "./_components/map/map";
import Newsletter from "./_components/newsletter/newsletter";
import Subscriptions from "./_components/subscriptions/subscriptions";
import Navbar from "./_components/navbar/navbar";

export default function Home() {
  return (
    <div className="font-montserrat">
      <Navbar />
      <Subscriptions />
      <div className="grid grid-rows-1 grid-cols-2 -mt-40">
        <Map />
        <Newsletter />
      </div>
      <Footer />
    </div>
  );
}
