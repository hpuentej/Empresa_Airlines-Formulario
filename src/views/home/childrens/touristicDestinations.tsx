import venezuela from "../../../assets/images/photos/venezuela.jpg";
import ucrania from "../../../assets/images/photos/ucrania.jpg";
import peru from "../../../assets/images/photos/peru.jpg";

const TouristicDestinations = () => {
  return (
    <>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        <div className="grid grid-col-1 md:grid-cols-2 gap-4">
          <img src={venezuela} alt="Playa de Venezuela" className="sm:h-96 w-full"/>
          <img src={ucrania} alt="Ruina en Cuzco" className="sm:h-96 w-full" />
        </div>
        <img src={peru} alt="Edificios clásico en Ucrania" className="sm:h-96 sm:w-full md:h-96 md:w-full w-full" />
      </div>
    </>
  );
};

export default TouristicDestinations;
