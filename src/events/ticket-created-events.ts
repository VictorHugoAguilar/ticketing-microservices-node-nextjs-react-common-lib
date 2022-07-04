import Subjects from "./enums/subjects";

interface TicketCreatedEvent {
    subject: Subjects.TicketCreated,
    data: {
        id: string;
        title: string;
        price: number;
        userId: string;
    }
}

export default TicketCreatedEvent;