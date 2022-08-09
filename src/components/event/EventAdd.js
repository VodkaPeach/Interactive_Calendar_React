import React, { useState, useContext } from "react";
import { EventsContext } from "../../context/events.context";
import { UserContext } from "../../context/user.context";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

export default function EventAdd(props) {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [startTime, setStartTime] = useState(""); 
    const [endTime, setEndTime] = useState("");
    const [description, setDescription] = useState("");
    const { events, setEvents } = useContext(EventsContext);
    const { currentUser } = useContext(UserContext);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // set configurations
        const configuration = {
            method: "post",
            url: `https://calendar-hongxu.herokuapp.com/${props.name.toLowerCase()}-event`,
            data: {
                name,
                date,
                startTime,
                endTime,
                description,
                creator: currentUser,
                // for edit.
                id: props.id,
            },
        };
        axios(configuration)
        .then((result) => {
            let eventList = [...events];
            if (props.name==="Add"){
                const newEvent = result.data.result;
                eventList.push(newEvent);
            }else{
                eventList=eventList.filter(event=>event._id!==props.id);
                eventList.push(result.data.event);
            }
            setEvents(eventList);
        })
        .catch((error) => {
            console.log(error.message);
        })
    }

    return (
        <>
            <h2>{props.name} Event</h2>
            <Form onSubmit={(e) => handleSubmit(e)}>
                {/* email */}
                <Form.Group controlId="formBasicName">
                    <Form.Label>Event name</Form.Label>
                    <Form.Control type="name"
                        name="name"
                        value={name}
                        placeholder="Enter name"
                        onChange={(e) =>
                            setName(e.target.value)
                        } />
                </Form.Group>

                <Form.Group controlId="formBasicDate">
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="date"
                        name="date"
                        value={date}
                        placeholder="Enter date"
                        onChange={(e) =>
                            setDate(e.target.value)
                        } />
                </Form.Group>

                <Form.Group controlId="formBasicStartTime">
                    <Form.Label>Start Time address</Form.Label>
                    <Form.Control type="startTime"
                        name="start time"
                        value={startTime}
                        placeholder="Enter start time"
                        onChange={(e) =>
                            setStartTime(e.target.value)
                        } />
                </Form.Group>

                <Form.Group controlId="formBasicEndTime">
                    <Form.Label>End Time</Form.Label>
                    <Form.Control type="endTime"
                        name="end time"
                        value={endTime}
                        placeholder="Enter end time"
                        onChange={(e) =>
                            setEndTime(e.target.value)
                        } />
                </Form.Group>

                {/* password */}
                <Form.Group controlId="formBasicDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="description"
                        name="description"
                        value={description}
                        placeholder="Description"
                        onChange={(e) => setDescription(e.target.value)} />
                </Form.Group>

                {/* submit button */}
                <Button variant="primary" type="submit"
                    onClick={(e) => handleSubmit(e)}>
                    Submit
                </Button>

                {props.name==="Add" && <button type="button" onClick={() => props.handleCancel()}>Cancel</button>}
                {props.name==="Edit" && <button type="button" onClick={() => props.handleCancelEdit()}>Cancel</button>}
            </Form>
        </>
    )
}