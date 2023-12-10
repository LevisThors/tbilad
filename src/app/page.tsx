import Image from "next/image";

export default function Home() {
    return (
        <main>
            <div className="w-full relative" style={{ height: "400px" }}>
                <Image
                    src={"/Images/ultimateSale.webp"}
                    alt="The Ultimate Sale"
                    className="w-full"
                    fill={true}
                />
                <div className="absolute top-2/4 left-10 -translate-y-1/2">
                    <h1 className="font-bold text-white text-5xl">
                        Ultimate Sale up to 60%
                    </h1>
                    <h2 className="text-white text-lg my-3">
                        Use code ULTIMATE for discount on every item added to
                        your cart up to 60%
                    </h2>
                    <button className="text-black bg-white py-4 px-5 rounded-full font-bold hover:bg-gray-100">
                        Shop Now
                    </button>
                </div>
            </div>
            <div className="w-full relative mt-12 flex flex-col mb-5">
                <div className="w-full relative" style={{ height: "700px" }}>
                    <Image
                        src={"/Images/justDoIt.jpg"}
                        alt="Just do it"
                        fill={true}
                    />
                </div>
                <div className="w-full flex flex-col items-center mt-5">
                    <h1 className=" font-bold text-7xl text-black">
                        New Arrivals
                    </h1>
                    <h2 className="font-normal text-2xl text-black my-3">
                        Featuring the air force max pro tech
                    </h2>
                    <button className="py-3 px-5 bg-black text-white font-bold rounded-full">
                        Shop
                    </button>
                </div>
            </div>
        </main>
    );
}
