import { Button, Table } from "flowbite-react"
import { AiFillPlayCircle } from "react-icons/ai"

function LeadsDataTable({headers=[], data=[]}) {
    return (
        <>
            <Table hoverable>
                <Table.Head>
                    {
                        headers && headers.map((obj,index) => <Table.HeadCell key={index}>{obj}</Table.HeadCell>)
                    }
                </Table.Head>
                <Table.Body>
                    {
                        data && data.map((obj, index) => <Table.Row key={index}>
                            <Table.Cell>
                                {/* Actions here | Buttons */}
                                <button >
                                    <AiFillPlayCircle className="text-3xl text-yellow-400" />
                                </button>
                            </Table.Cell>
                            <Table.Cell>
                                {obj.date}
                            </Table.Cell>
                            <Table.Cell>
                                {obj.progress}
                            </Table.Cell>
                            <Table.Cell>
                                {obj.company_name}
                            </Table.Cell>
                            <Table.Cell>
                                {obj.campaigns}
                            </Table.Cell>
                            <Table.Cell>
                                {obj.name_caller_id}
                            </Table.Cell>
                            <Table.Cell>
                                {obj.contact_details}
                            </Table.Cell>
                            <Table.Cell>
                                {obj.duration}
                            </Table.Cell>
                            <Table.Cell>
                                {obj.cost}
                            </Table.Cell>
                            <Table.Cell>
                                {(obj.revenue === '') ? '---' : obj.revenue}
                            </Table.Cell>
                        </Table.Row>)
                    }
                </Table.Body>
            </Table>
        </>
    )
}

export default LeadsDataTable