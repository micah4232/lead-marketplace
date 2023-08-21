export default function StatementCard({date, number, card, price, paid=false}) {
    return (
        <div className="grid grid-cols-5 gap-4 border p-3">
            <div className="col-span-4">
                <div className="font-bold">
                    <span className="mr-2">{number}</span>
                    <span className="mx-2">{date}</span>
                    <span className="mx-2">{card}</span>
                    <span className="mx-2">{price}</span>
                </div>
                <p className="text-sm">Leads Delivered from date to date{ (paid === false) ? <span className="text-red-500 text-sm font-bold"> Unpaid</span> : '' }</p>
            </div>
            <div>
                <button className="bg-blue-500 text-white text-md font-bold p-2">
                    Pay Now
                </button>
            </div>
        </div>
    )
}