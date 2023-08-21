function TotalCard({total, type}) {
    return (
        <>
            <h2 className="text-5xl font-bold text-amber-600">
                { total }
            </h2>
            <p className="text-blue-600 font-bold">{type}</p>
        </>
    )
}

export default TotalCard