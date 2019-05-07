/**
 * TicketService API
 * Ticketordering by date
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */import { Hall } from './hall';


export interface Show { 
    id?: number;
    title?: string;
    dates?: Array<Date>;
    hall?: Hall;
    imgUrl?: string;
    basePrice?: number;
    active?: boolean;
    description?: string;
}