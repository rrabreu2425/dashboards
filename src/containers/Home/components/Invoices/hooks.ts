//get all invoices
export const getAllInvoices=async()=>{
    const token = localStorage.getItem("token")
    const response = await fetch('http://localhost:8080/fhir/Invoice', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    });
    const data = await response.json();
    return data.entry.map((item: any) => ({
        id: item.resource.id,
        status: item.resource.status
    }));
}