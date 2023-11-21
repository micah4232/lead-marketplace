function TotalCard({total, type}) {
    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border bg-gradient-to-tl from-gray-900 to-slate-800 mb-4 draggable" draggable="true">
                <div className="flex-auto p-4">
                    <div className="flex flex-row -mx-3">
                    <div className="flex-none w-2/3 max-w-full px-3">
                        <div>
                        <p className="mb-0 font-sans font-semibold leading-normal text-sm text-white">{type}</p>
                        <h5 className="mb-0 font-bold text-white"> {total} <span className="leading-normal text-sm font-weight-bolder text-lime-500">+3%</span>
                        </h5>
                        </div>
                    </div>
                    <div className="px-3 text-right basis-1/3">
                        <div className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500">
                        <i className="ni ni-world text-lg relative top-3.5 text-white">
                            
                        </i>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TotalCard