
import { carData } from "../../data/cars";
import { notFound } from "next/navigation";

// Define the type for the params object
interface Params {
  id: string; // URL parameter for car ID
}

// Define the props interface for the page component
interface CarDetailsPageProps {
  params: Params; // This is how params will be passed to the component
}

const CarDetails = ({ params }: CarDetailsPageProps) => {
  // Find the car by the ID passed through the URL params
  const car = carData.find((c) => c.id === parseInt(params.id));

  // If the car is not found, show the "not found" page
  if (!car) {
    notFound();
  }

  return (
    <div className="max-w-[800px] mx-auto my-8">
      <h1 className="text-3xl font-bold mb-4">{car.name}</h1>
      <img
        src={car.image}
        alt={car.name}
        className="w-full h-auto mb-4 rounded-lg"
      />
      <p className="text-lg">Type: {car.type}</p>
      <p className="text-lg">Fuel: {car.petrol}</p>
      <p className="text-lg">Transmission: {car.transmission}</p>
      <p className="text-lg">Seats: {car.seats}</p>
      <p className="text-lg font-bold mt-2">Price: ${car.price}/day</p>
    </div>
  );
};

export default CarDetails;