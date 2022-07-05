import { OrderStatus } from "./enums/order-status";
import { Subjects } from "./enums/subjects";

export interface OrderCreatedEvent {
    subject: Subjects.OrderCreated,
    data: {
        id: string;
        status: OrderStatus;
        userId: string;
        expiresAt: string;
        ticket: {
            id: string;
            price: number;
        }
    }
};