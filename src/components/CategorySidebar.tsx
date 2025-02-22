import KidsSvg from "../svgs/KidsSvg"
import LandSvg from "../svgs/LandSvg"
import WaterSvg from "../svgs/WaterSvg"

const CategorySidebar = ({setCategory, category}: {setCategory:(value:string) => void, category: string}) => {
    return (
        <div className='relative h-[600px] w-[360px] overflow-visible rounded-lg'>
            <div className={`absolute right-[92px] top-0 size-[600px] rounded-full ${category === 'Land' ? 'ring' : category === 'Water' ? 'ring-1' : 'ring-2'} `}>
                <div className="absolute left-[90px] top-[90px] size-[420px] rounded-full inner"></div>
            </div>
            <div className='absolute size-[160px] translate-y-1 rounded-full border-[10px] border-yellow bg-white transition-all duration-500 ease-in-out'
                style={{ left: `${category === "Land" ? '51px' : category === "Water" ? '141px' : '51px'}`, top: `${category === "Land" ? '17px' : category === "Water" ? '220px' : '408.5px'}` }}
            ></div>
            <div onClick={()=> setCategory("Land")} className="absolute cursor-pointer transition-all duration-500 right-[198px] top-[66px]">
                <LandSvg />
                <div className="absolute left-[calc(100%+70px)] top-1/2 flex -translate-y-1/2 flex-col gap-0.5 text-white">
                    <span className="text-xl inline-block font-mulish font-normal !leading-[1.255]">
                        Land

                    </span>
                    <span className="text-sm font-mulish font-normal !leading-[1.255] flex h-6 w-max items-center justify-center rounded-full bg-blue-light px-3">
                        72 Rides
                    </span>
                </div>
            </div>
            <div onClick={() => setCategory("Water")} className="absolute cursor-pointer transition-all duration-500 right-[110px] top-1/2 -translate-y-1/2">
                <WaterSvg />
                <div className="absolute left-[calc(100%+70px)] top-1/2 flex -translate-y-1/2 flex-col gap-0.5 text-white">
                    <span className="text-xl inline-block font-mulish font-normal !leading-[1.255]">
                        Water
                    </span>
                    <span className="text-sm font-mulish font-normal !leading-[1.255] flex h-6 w-max items-center justify-center rounded-full bg-blue-light px-3">
                        54 Rides
                    </span>
                </div>
            </div>
            <div onClick={() => setCategory("Kids")} className="absolute cursor-pointer transition-all duration-500 bottom-[80px] right-[198px]">
                <KidsSvg/>
                <div className="absolute left-[calc(100%+70px)] top-1/2 flex -translate-y-1/2 flex-col gap-0.5 text-white">
                    <span className="text-xl inline-block font-mulish font-normal !leading-[1.255]">
                        Kids
                    </span>
                    <span className="text-sm font-mulish font-normal !leading-[1.255] flex h-6 w-max items-center justify-center rounded-full bg-blue-light px-3">
                        35 Rides
                    </span>
                </div>
            </div>
        </div>
    )
}

export default CategorySidebar