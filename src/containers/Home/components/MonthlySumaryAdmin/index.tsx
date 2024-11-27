import "bootstrap/dist/css/bootstrap.min.css";
function MonthlySumary() {
    return (<>
        <div className='right'>
            <div>
                <h3>Monthly Sumary</h3>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Status</th>
                            <th scope="col">Count</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>New Patients</td>
                            <td><div className='divCount'>20</div></td>
                        </tr>
                        <tr>
                            <td>Total Provider</td>
                            <td><div className='divCount'>33</div></td>
                        </tr>
                        <tr>
                            <td>Total Facilites</td>
                            <td><div className='divCount'>17</div></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </>)
}
export default MonthlySumary