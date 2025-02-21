import CategorySidebar from "./CategorySidebar"

const RidesSection = () => {
  return (
    <div className="w-full">
        <section className="relative">
              <div className="relative flex bg-blue pb-[52px] pt-[144px] sm:pt-[168px] md:pt-[150px] lg:bg-blue-dark">
                <div className="w-full max-lg:hidden">
                      <CategorySidebar />
                      <div className="ml-[66px] flex flex-1 flex-col gap-9 overflow-hidden pl-3 pt-7">

                    </div>
                </div>
              </div>
        </section>
    </div>
  )
}

export default RidesSection