
const GridGallery = (data) => {
    return (
        <div class="w-full mx-auto" data={data}>
            <section class="py-8 px-4">
                <div class="flex justify-between flex-wrap mx-10 -mb-8">
                    {data.data.map((item) => {
                        console.log(item)
                        return (
                            <div class="bg-gray-800 flex flex-col rounded-lg lg:w-1/4 mr-1 ml-1 mb-8 mt-8 pt-5 px-5 pr-5">
                                <img class="rounded shadow-md" src={item.flickr_images[0]} alt="" />
                                <a className="py-1 px-2 my-1 text-white font-semibold">Name: <span className="px-3">{item.rocket_name}</span></a>
                                <a className="py-1 px-2 my-1 text-white font-semibold">Type: <span className="px-3">{item.rocket_type}</span></a>
                                <a className="py-1 px-2 my-1 text-white font-semibold">Company: <span className="px-3">{item.company}</span></a>
                                <a className="py-1 px-2 my-1 text-white font-semibold">Country: <span className="px-3">{item.country}</span></a>
                                <a className="py-1 px-2 my-1 text-white font-semibold">Mass: <span className="px-3">{item.mass.kg} Kgs.</span></a>
                                <a className="py-1 px-2 my-1 text-white font-semibold">Height: <span className="px-3">{item.height.meters} Mts.</span></a>
                                <a className="py-1 px-2 my-1 text-white font-semibold">Engine: <span className="px-3">{item.engines.type}</span></a>
                                <a className="py-1 px-2 my-1 text-white font-semibold">Number: <span className="px-3">{item.engines.number}</span></a>
                            </div>)
                    })}
                </div>
            </section >
        </div >
    )
}

export default GridGallery;