import { useEffect, useState } from "react";
import CategorySidebar from "./CategorySidebar"
import ridesData from "../data/rides.json";
import CarouselControl from "./CarouselControl";
import RideCard from "./RideCard";

const RidesSection = () => {
  const [category, setCategory] = useState("Land");
  const [index, setIndex] = useState(0);
  const filteredRides = ridesData.filter((ride) => ride.category === category);
  const prevSlide = () => {
    setIndex(index === 0 ? filteredRides.length - 1 : index - 1);
  };

  const nextSlide = () => {
    setIndex(index === filteredRides.length - 1 ? 0 : index + 1);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000); 

    return () => clearInterval(interval);
  }, [index])
  return (
    <div className="w-full min-h-screen">
      <section className="relative h-[100vh]">
        <div className="relative flex items-center h-full bg-blue lg:bg-blue-dark">
          <div className="w-full grid grid-cols-12 items-center">
            <div className="col-span-5">

              <CategorySidebar setCategory={setCategory} category={category} />
            </div>
            <div className=" flex flex-1 flex-col gap-9 col-span-7 overflow-hidden ">
              <CarouselControl prevSlide={prevSlide} nextSlide={nextSlide} />
              <div className="flex flex-col ">
                <div
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${index * 33}%)` }}
                >
                  {filteredRides.map((ride) => (
                    <div key={ride.id} className="w-[300px] flex-shrink-0">
                      <RideCard ride={ride} />
                    </div>
                  ))}
                </div>
                <a className="inline-block w-full max-w-[328px] " href="/rides"><div className="bg-yellow-400 capitalize h-14 w-full max-w-[328px] rounded-full text-base font-extrabold leading-tight flex items-center justify-center text-blue bg-yellow mb-0.5 mt-4" tabIndex={0}>
                  Explore All Rides!
                </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default RidesSection