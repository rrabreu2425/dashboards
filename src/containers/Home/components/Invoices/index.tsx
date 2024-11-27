import { useState, useEffect } from "react"
import { getAllInvoices } from './hooks';

function Invoice() {
    const [billinSumary, setBillinSumary] = useState([{}])

    useEffect(() => {
        loadInvoice()
    }, [])

    //get all invoice
    const loadInvoice = async () => {
        const data = await getAllInvoices()
        const result = countStatuses(data)
        setBillinSumary(result)

    }

    //Count billin status
    function countStatuses(data: any) {
        const statusCount = data.reduce((acc, item) => {
            acc[item.status] = (acc[item.status] || 0) + 1;
            return acc;
        }, {});
        return Object.entries(statusCount).map(([status, count]) => ({
            status,
            count,
        }));
    }

    //put first letter Upper
    const capitalizeFirstLetter = (word: string) => {
        if (!word) return ''; // Manejar el caso de una cadena vacía o indefinida
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
    return (<>
        <div className='containerInvoice'>
            <div style={{ maxHeight: "220px", width: '100%', height: '100%', marginLeft: '20%', borderRadius: '6px' }}>
                <h3>Billing Sumary</h3>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Status</th>
                            <th scope="col">Count</th>
                        </tr>
                    </thead>
                    <tbody>
                        {billinSumary.map((item) => (
                            <tr key={item.status}>

                                <td>{capitalizeFirstLetter(item.status)}</td>

                                <td><div className='divCount'>{item.count}</div></td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </div>
    </>)
}
export default Invoice