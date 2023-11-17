function TotalCard({total, type}) {
    return (
        <>
            <div class="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border bg-gradient-to-tl from-gray-900 to-slate-800 mb-4 draggable" draggable="true">
                <div class="flex-auto p-4">
                    <div class="flex flex-row -mx-3">
                    <div class="flex-none w-2/3 max-w-full px-3">
                        <div>
                        <p class="mb-0 font-sans font-semibold leading-normal text-sm text-white">{type}</p>
                        <h5 class="mb-0 font-bold text-white"> {total} <span class="leading-normal text-sm font-weight-bolder text-lime-500">+3%</span>
                        </h5>
                        </div>
                    </div>
                    <div class="px-3 text-right basis-1/3">
                        <div class="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500">
                        <i class="ni ni-world text-lg relative top-3.5 text-white">
                            
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