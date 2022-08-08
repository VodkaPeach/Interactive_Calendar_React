import { createContext, useState } from "react";

export const EventsContext = createContext({
    events: null,
    setEvents: () => null,
});

export const EventsProvider = ({ children }) => {
    const [events, setEvents] = useState(null);
    const value = { events, setEvents };
    return <EventsContext.Provider value={value}>{children}</EventsContext.Provider>;
}