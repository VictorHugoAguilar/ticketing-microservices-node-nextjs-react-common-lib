import Subjects from "./enums/subjects";

interface TicketUpdatedEvent {
    subject: Subjects.TicketUpdated,
    data: {
        id: string;
        title: string;
        price: number;
        userId: string;
    }
}

export default TicketUpdatedEvent;