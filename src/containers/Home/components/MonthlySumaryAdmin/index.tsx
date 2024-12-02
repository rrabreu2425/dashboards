import "bootstrap/dist/css/bootstrap.min.css";
function MonthlySumary() {
    return (<>
        <div className='right'>
            <div className="scroll-container">
                <h3>Monthly Sumary</h3>
                <ol className="list-group list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            New Patients
                        </div>
                        <div className="badge">198</div>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            Discharged Patients
                        </div>
                        <div className="badge">140</div>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            Readmissions
                        </div>
                        <div className="badge">45</div>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            Total Active Patients
                        </div>
                        <div className="badge">1020</div>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            Total Facilites
                        </div>
                        <div className="badge">30</div>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            Total Providers
                        </div>
                        <div className="badge">50</div>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            Total Insurances
                        </div>
                        <div className="badge">13</div>
                    </li>
                </ol>
            </div>
        </div>
    </>)
}
export default MonthlySumary