import Card from "./components/campaignCard"

function Campaigns() {
    return (
        <>
            <h1 className="font-extrabold text-3xl mb-5">Campaign Manager</h1>
            <div className="border-black drop-shadow-md relative flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border mb-4 draggable p-5">
                <h3>Campaigns</h3>
                <div className="grid grid-cols-4 gap-4">
                    {/* Card Here */}
                    <Card/>
                    <Card/>
                </div>
            </div>
        </>
    )
}

export default Campaigns