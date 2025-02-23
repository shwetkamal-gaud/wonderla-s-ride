// import { motion } from "framer-motion";

export interface Ride {
  id: number;
  name: string;
  location: string,
  description: string,
  category: string,
  video: string
}

const RideCard = ({ ride }: { ride: Ride }) => {
  return (
    <div >
      <div className="relative h-[394px] w-[229px] overflow-hidden rounded-t-[26px] lg:h-[346px] lg:min-w-[246px] lg:rounded-t-[22px]">
        <div className="aspect-[229/394] w-[229px] lg:aspect-[246/346] lg:w-[246px]">
{/*           <video autoPlay loop playsInline preload="metadata" className="aspect-[229/394] w-full object-cover lg:aspect-[246/346]">
            <source src={ride.video} type="video/mp4" />
            Your browser does not support the video tag
          </video> */}
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(51,77,207,0)_50%,_#334DCF_100%)] lg:bg-[linear-gradient(180deg,_rgba(34,48,74,0),_#22304A)]">
        </div><div className="absolute inset-0 hidden lg:block lg:bg-[linear-gradient(180deg,_rgba(245,245,245,0)_34.08%,_#F5F5F501_100%)]"></div>
        <div className="absolute bottom-0 left-0 right-0 flex flex-col px-3 pb-2.5 text-white lg:pb-1">
          <h3 className="text-lg font-mulish capitalize !leading-[1.255] font-bold">{ride.name}</h3>
          <p className="text-xs inline-block font-mulish font-normal !leading-[1.255] mt-px opacity-80">{ride.location}</p>
          <div className="mt-1.5 line-clamp-4 text-xs leading-[1.255]">{ride.description}</div>
          <a className="inline-block w-full max-w-[150px]" href="/kochi/rides/happy-kangaroo">
            <div className="h-10 w-full max-w-[150px]  rounded-lg text-xs font-black uppercase leading-tight flex items-center justify-center text-[#334DCF] bg-[#FAD600] mt-2" tabIndex={0}>
              Ride Details</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default RideCard;

