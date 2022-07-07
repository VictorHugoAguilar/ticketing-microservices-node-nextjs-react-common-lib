import { Subjects } from "./enums/subjects";

export interface TicketUpdatedEvent {
    subject: Subjects.TicketUpdated,
    data: {
        id: string;
        version: number;
        title: string;
        price: number;
        userId: string;
        orderId?: string;
    }
};