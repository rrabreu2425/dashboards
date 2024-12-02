function MonthlySumaryScribe(){
    return(<>
    <div className='monthly-sumary'>

<h5>Monthly Sumary</h5>
<div className="encounters-summary">
    <h6 style={{ textDecoration: 'underline' }}>Encounter Sumary</h6>
    <div className="encounters-sumary-scribe" style={{gap: '20px'}}>
        <h6>Provider1</h6>
        <div className="progress-stacked" style={{width:'100%'}}>
            <div className="progress" role="progressbar" aria-label="Segment one" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" style={{ width: '50%' }}>
                <div className="progress-bar progress-bar-striped my-progress-bar-success">50%</div>
            </div>
            <div className="progress" role="progressbar" aria-label="Segment three" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{ width: '50%' }}>
                <div className="progress-bar progress-bar-striped my-progress-bar-danger">50%</div>
            </div>
        </div>

    </div>
    <div className="encounters-sumary-scribe" >
        <h6>Provider2</h6>
        <div className="progress-stacked" style={{width:'100%'}}>
            <div className="progress" role="progressbar" aria-label="Segment one" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" style={{ width: '70%' }}>
                <div className="progress-bar progress-bar-striped my-progress-bar-success">70%</div>

            </div>
            <div className="progress" role="progressbar" aria-label="Segment three" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{ width: '30%' }}>
                <div className="progress-bar progress-bar-striped my-progress-bar-danger">30%</div>
            </div>
        </div>
    </div>
    <div className="encounters-sumary-scribe"  style={{marginTop:'20px'}}>
        <h6>Total</h6>
        <div className="progress-stacked" style={{width:'100%'}}>
            <div className="progress" role="progressbar" aria-label="Segment one" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" style={{ width: '70%' }}>
                <div className="progress-bar progress-bar-striped my-progress-bar-success">70%</div>

            </div>
            <div className="progress" role="progressbar" aria-label="Segment three" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{ width: '30%' }}>
                <div className="progress-bar progress-bar-striped my-progress-bar-danger">30%</div>
            </div>
        </div>
    </div>
</div>

<div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end', gap: '100px', marginTop: 'auto', fontSize: '10px' }}>
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
                <div className="progress-bar progress-bar-striped my-progress-bar-danger"></div>
            </div>

        </div>
        <p>Pending</p>
    </div>
</div>


</div>
    </>)
}
export default MonthlySumaryScribe