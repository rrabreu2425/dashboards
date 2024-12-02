import React, { useState } from 'react';
import Calendar from 'react-calendar';
function CalendarComponent() {
    const [date, setDate] = useState<Date | Date[]>(new Date());

    return (<>
        <Calendar
            onChange={setDate}
            value={date}
            className="custom-calendar" // Clase personalizada para estilos adicionales
        />
    </>)
}
export default CalendarComponent