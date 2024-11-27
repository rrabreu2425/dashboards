//methode post to create new task
export async function createTaskInAidbox(newEvent: any) {

    const token = localStorage.getItem("token");
    try{
        const result = await fetch('http://localhost:8080/Task', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Prefer': 'return=representation',
            },
            body: JSON.stringify({
                "resourceType": "Task",
                "status": "requested",
                "intent": "order",
                "priority": "routine",
                "description": newEvent.title,
                "executionPeriod": {
                    "start": newEvent.start,
                    "end": newEvent.end
                }
            }),
        })
        if(result.ok){
            const createdTask=await result.json()
            return createdTask
        }else {
            const error = await result.json();
            console.error("Error creating Task:", error);
        }
    }
    catch (err) {
        console.error("Error:", err);
    }

}

//methode get to get all task from aidbox
export async function fetchTasksFromAidbox() {
    const token = localStorage.getItem("token")
    const response = await fetch('http://localhost:8080/Task', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    });
    const data = await response.json();
    return data.entry.map((item: any) => ({
        id: item.resource.id,
        title: item.resource.description || 'Task',
        start: new Date(item.resource.executionPeriod.start),
        end: new Date(item.resource.executionPeriod.end),
    }));
}


//update task
export async function updateTask(event: any) {
    const token = localStorage.getItem("token")
    await fetch(`http://localhost:8080/Task/${event.id}`, {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "resourceType": "Task",
            "status": "requested",
            "intent": "order",
            "priority": "routine",
            "description": event.title,
            "executionPeriod": {
                "start": event.start,
                "end": event.end
            }
        }),
    });
}

//delete task
export async function deleteEvent(eventId: String) {
    const token = localStorage.getItem("token")
    await fetch(`http://localhost:8080/Task/${eventId}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        }
    });
}
//export default {createTaskInAidbox, deleteEvent,fetchTasksFromAidbox, updateTask}