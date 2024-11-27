import { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
//import Modal from 'react-modal'

import './CalendarStyle.css'

import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NewTask from './Modals/NewTaskModal'
import SelectOptionModal from './Modals/SelectOptionModal'
import EditTask from './Modals/EditTaskModal';
import {createTaskInAidbox, deleteEvent,fetchTasksFromAidbox, updateTask} from './hooks'
import { title } from 'process';

//principal funcionality
const MyInteractiveCalendar = () => {
    const localizer = momentLocalizer(moment);
    const [events, setEvents] = useState([]);
    const [isModalNewOpen, setIsModalNewOpen] = useState(false);
    const [isModalSelectOpen, setIsModalSelectOpen] = useState(false);
    const [isModalEditOpen, setIsModalEditOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState({
        title: '',
        start: new Date(),
        end: new Date(),
    })
    const [newEvent, setNewEvent] = useState({
        title: '',
        start: new Date(),
        end: new Date(),
    })


    useEffect(() => {
        loadEvents();
    }, [])
    const loadEvents = async () => {
        const fetchedEvents = await fetchTasksFromAidbox();
        setEvents(fetchedEvents);
    }
    const handleSelect = async () => {
           const result= await createTaskInAidbox(newEvent);
           const createdTask={id:result.id, title: result.description, start:result.executionPeriod.start, end: result.executionPeriod.end}
            setEvents((prev) => [...prev, createdTask]);
            setNewEvent({
                title: '',
                start: new Date(),
                end: new Date(),
            })
            handleCloseModalNew()
    }


    const handleEditEvent = async () => {
        await updateTask(selectedEvent)
        handleCloseModalEdit()
        setEvents((prevEvents) => prevEvents.map((event) =>event.id === selectedEvent.id ? selectedEvent : event)
        )
    }


    const openEditModal = (event: any) => {
        setIsModalSelectOpen(false)
        setIsModalEditOpen(true);
    }

    const handleCloseModalNew = () => setIsModalNewOpen(false);
    const handleCloseModalOptions = () => setIsModalSelectOpen(false);
    const handleCloseModalEdit = () => setIsModalEditOpen(false);

    const handleDeleteEvent = () => {
        const confirmDelete = window.confirm(`Are you sure you want to delete "${selectedEvent.title}"?`);
        if (confirmDelete) {
            setIsModalSelectOpen(false)
            setEvents(events.filter((evt) => evt.id !== selectedEvent.id));
            deleteEvent(selectedEvent.id);
    }
    }

       // Manejo del formulario para crear un evento
       const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (selectedEvent) {
            setSelectedEvent({ ...selectedEvent, [e.target.name]: e.target.value });
        }
    }

    const handleOpenModal = (slotInfo:any) => {
        setNewEvent({
            title: '',
            start: slotInfo.start,
            end: slotInfo.end,
        });
        setIsModalNewOpen(true);
    }
    //Select Options
    const handleSelectOptions = (event: Event) => {      
        setSelectedEvent(event);
        setIsModalSelectOpen(true);
    }


    return (
        <>
            <Calendar
                selectable
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                onSelectSlot={handleOpenModal}
                onSelectEvent={handleSelectOptions}
            />
            <NewTask isModalOpen={isModalNewOpen} handleCloseModalNew={handleCloseModalNew} newEvent={newEvent} setNewEvent={setNewEvent} handleSelect={handleSelect}/>
            <SelectOptionModal isModalSelectOpen={isModalSelectOpen} setActionModalOpen={setIsModalSelectOpen} selectedEvent={selectedEvent} handleDeleteEvent={handleDeleteEvent} openEditModal={openEditModal} handleCloseModalOptions={handleCloseModalOptions}/>
            <EditTask isModalOpenEdit={isModalEditOpen} handleCloseModalEdit={handleCloseModalEdit} handleEditEvent={handleEditEvent} selectedEvent={selectedEvent} handleInputChange={handleInputChange}/>
        </>
    )
}
export default MyInteractiveCalendar 