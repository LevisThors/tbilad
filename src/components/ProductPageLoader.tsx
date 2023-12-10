export default function ProductPageLoader() {
    return (
        <section className="w-full flex justify-center">
            <div className="w-2/3 flex justify-center gap-5 pt-10 animate-pulse">
                <div className="flex gap-4">
                    <div className="flex flex-col gap-3">
                        <div
                            style={{ width: "70px", height: "70px" }}
                            className="bg-slate-200"
                        ></div>
                        <div
                            style={{ width: "70px", height: "70px" }}
                            className="bg-slate-200"
                        ></div>
                        <div
                            style={{ width: "70px", height: "70px" }}
                            className="bg-slate-200"
                        ></div>
                        <div
                            style={{ width: "70px", height: "70px" }}
                            className="bg-slate-200"
                        ></div>
                        <div
                            style={{ width: "70px", height: "70px" }}
                            className="bg-slate-200"
                        ></div>
                    </div>
                    <div>
                        <div
                            style={{ width: "500px", height: "500px" }}
                            className="bg-slate-200"
                        ></div>
                    </div>
                </div>
                <div className="flex flex-col gap-3 w-full">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-3xl font-bold w-full bg-slate-200 h-4"></h1>
                        <span className="m-0 p-0 font-semibold text-xl text-gray-500 w-1/2 bg-slate-200 h-4"></span>
                        <span className="font-semibold text-2xl w-1/5 bg-slate-200 h-4"></span>
                    </div>
                    <div className="flex flex-col">
                        <div className="font-bold text-gray-600 flex items-center mb-1 bg-slate-200 w-1/6 h-4"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
