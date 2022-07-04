import { Subjects } from "./enums/subjects";

export interface TicketCreatedEvent {
    subject: Subjects.TicketCreated,
    data: {
        id: string;
        title: string;
        price: number;
        userId: string;
    }
};