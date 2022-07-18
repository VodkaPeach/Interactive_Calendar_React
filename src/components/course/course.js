import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from "react-accessible-accordion";
import "./course.css"

const Course = ({ data }) => {
    return (
        <>
            <Accordion allowZeroExpanded>
                {data.courses.map((item, idx) => (
                    <AccordionItem key={idx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="daily-item">
                                    <label className="day">{item.name}</label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="daily-details-grid">
                                <div className="daily-details-grid-item">
                                    <label>time blocks:</label>
                                    <label>{item.block}</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>classroom:</label>
                                    <label>{item.classroom}</label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </>
    );
}
export default Course;