import { IMemberList } from "./member.model";

export interface Ticket {
    ticketId: string;
    ticketRef: string;
    ticketType: string;
}

export interface ITicketList {
    ticketId: string;
    ticketRef: string;
    memberName: string;
    memberRef: string;
    tradeRef: string;
    ticketType: string;
    purity: string;
    createDate: Date;
    quantity: string;
    price: string;
    amount: string;
    status: string;
    amountOver: string;
    member: IMemberList;
}