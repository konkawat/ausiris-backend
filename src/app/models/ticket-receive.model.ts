
export interface TicketReceiveSearch {
    searchText: string;
    status: string;
    purity: string;
    beginDate?: Date;
    endDate?: Date;
}

export interface TicketReceive {
    ticketId: string;
    ticketRef: string;
    ticketType: string;
}