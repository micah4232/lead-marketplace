function Card(props) {
    return (
        <div>
            {/* image */}
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fweserve-app.com%2Fwp-content%2Fuploads%2F2020%2F10%2Fimage1-3.jpg&f=1&nofb=1&ipt=e99de5d997fec3bc4e9087c49b43ca8070ce0c816934faf44d2fa8beb4e935ef&ipo=images" />
            {/* type of Campaign */}
            <p className="relative z-10 mb-2 leading-normal text-transparent bg-slate-700 text-sm bg-clip-text">
            {
                props.service
            }
            </p>
            {/* Company Name */}
            <h5 className="font-bold text-xl mb-5 text-[#344767]">{ props.company }</h5>
            {/* Details Here */}
            <div className="grid grid-cols-1 gap-4 place-content-center">
                <button className="inline-block px-8 py-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer leading-pro ease-soft-in text-xs hover:scale-102 active:shadow-soft-xs tracking-tight-soft border-fuchsia-500 text-fuchsia-500 hover:border-fuchsia-500 hover:bg-transparent hover:text-fuchsia-500 hover:opacity-75 hover:shadow-none active:bg-fuchsia-500 active:text-white active:hover:bg-transparent active:hover:text-fuchsia-500">
                    Edit Campaign
                </button>
            </div>
        </div>
    )
}

export default Card