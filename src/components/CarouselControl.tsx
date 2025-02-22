import Left from "../svgs/Left"
import Right from "../svgs/Right"

const CarouselControl = ({prevSlide, nextSlide}:{prevSlide:()=> void, nextSlide:()=> void}) => {
    return (
        <div className="mr-[60px] flex justify-between gap-8">
            <div className="flex flex-col items-center text-center">
                <h2 className="font-mulish text-[40px] font-black uppercase !leading-[1] tracking-[-0.04em] sm:text-[44px] md:text-[50px] lg:text-[56px] xl:text-6xl text-white text-left">
                    Our Iconic Rides
                </h2>
            </div>
            <div className="flex items-center justify-center gap-4">
                <button onClick={prevSlide} className="flex items-center justify-center size-9 sm:size-10 md:size-11 lg:size-12 rounded-full text-blue cursor-pointer bg-yellow-500" tabIndex={0}>
                    <Left/>
                </button>
                <button onClick={nextSlide} className="flex items-center justify-center size-9 sm:size-10 md:size-11 lg:size-12 rounded-full text-blue cursor-pointer bg-yellow-500" tabIndex={0}>
                    <Right />
                </button>
            </div>
        </div>
    )
}

export default CarouselControl