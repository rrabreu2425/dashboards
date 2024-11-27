function Notifications() {
    return (<>
        <div className='right'>
            <div style={{ maxHeight: "220px", width: '220px', height: '250', marginLeft: '20px', borderRadius: '6px' }}>
                <h3>Notifications</h3>
                <table className="table table-striped">
                     <tbody>
                            <tr>
                                <td>Notification 1</td>
                                <td><div className='divCount'>View</div></td>
                            </tr>
                            <tr>
                                <td>Notification 2</td>
                                <td><div className='divCount'>View</div></td>
                            </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </>)
}
export default Notifications