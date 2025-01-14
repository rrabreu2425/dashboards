function MonthlySumaryProvider() {
    return (<>
        <div className='monthly-sumary'>

            <h5>Monthly Sumary</h5>
            <div className="encounters-summary" style={{width:'90%'}}>

                <h6 style={{ textDecoration: 'underline' }}>Encounter Sumary</h6>
                <div className="encounters-sumary-facility">
                    <h6>Boca Circle Facility</h6>
                    <div className="progress-stacked" style={{width:'100%'}}>
                        <div className="progress" role="progressbar" aria-label="Segment one" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" style={{ width: '50%' }}>
                            <div className="progress-bar progress-bar-striped my-progress-bar-success"></div>
                        </div>
                        <div className="progress" role="progressbar" aria-label="Segment two" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style={{ width: '30%' }}>
                            <div className="progress-bar progress-bar-striped my-progress-bar-warning"></div>
                        </div>
                        <div className="progress" role="progressbar" aria-label="Segment three" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{ width: '20%' }}>
                            <div className="progress-bar progress-bar-striped my-progress-bar-danger"></div>
                        </div>
                    </div>

                </div>
                <div className="encounters-sumary-facility" >
                    <h6>South Dade Facility</h6>
                    <div className="progress-stacked" style={{width:'100%'}}>
                        <div className="progress" role="progressbar" aria-label="Segment one" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" style={{ width: '40%' }}>
                            <div className="progress-bar progress-bar-striped my-progress-bar-success"></div>

                        </div>
                        <div className="progress" role="progressbar" aria-label="Segment two" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style={{ width: '10%' }}>
                            <div className="progress-bar progress-bar-striped my-progress-bar-warning"></div>
                        </div>
                        <div className="progress" role="progressbar" aria-label="Segment three" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{ width: '50%' }}>
                            <div className="progress-bar progress-bar-striped my-progress-bar-danger"></div>
                        </div>
                    </div>
                </div>

            </div>

            <div style={{ width: '90%', display: 'flex', justifyContent: 'flex-end', gap: '100px', marginTop: 'auto', fontSize: '10px' }}>
                <div style={{ width: '10%' }}>
                    <div className="progress-stacked">
                        <div className="progress" role="progressbar" aria-label="Segment one" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" style={{ width: '100%' }}>
                            <div className="progress-bar progress-bar-striped my-progress-bar-success"></div>
                        </div>

                    </div>
                    <p>Completed</p>
                </div>
                <div style={{ width: '10%' }}>
                    <div className="progress-stacked">
                        <div className="progress" role="progressbar" aria-label="Segment one" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" style={{ width: '100%' }}>
                            <div className="progress-bar progress-bar-striped my-progress-bar-warning"></div>
                        </div>

                    </div>

                    <p>Feedback to handle</p>
                </div>

                <div style={{ width: '10%' }}>
                    <div className="progress-stacked">
                        <div className="progress" role="progressbar" aria-label="Segment one" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" style={{ width: '100%' }}>
                            <div className="progress-bar progress-bar-striped my-progress-bar-danger"></div>
                        </div>

                    </div>
                    <p>For QA</p>
                </div>
            </div>


        </div>
    </>)
}
export default MonthlySumaryProvider