function AssignedPatients() {
    return (<>
        <div className='containerInvoice'>
            <div style={{ maxHeight: "220px", width: '100%', height: '100%', marginLeft: '20%', borderRadius: '6px' }}>
                <h3>Assigned Patients</h3>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Status</th>
                            <th scope="col">Count</th>
                        </tr>
                    </thead>
                    <tbody>
                            <tr key={'item.status'}>

                                <td><h6>Boca Facility</h6><p>12/24/2024</p></td>

                                <td><div className='divCount'>18</div></td>
                            </tr>
                            <tr key={'item.status'}>

                                <td><h6>South Dade</h6><p>12/24/2024</p></td>

                                <td><div className='divCount'>23</div></td>
                            </tr>
                       

                    </tbody>
                </table>
            </div>
        </div>
    </>)
}
export default AssignedPatients