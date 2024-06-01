import { Order } from "./orders.types";

interface CustomerRelations {
  orders?: Order[];
}

export interface Customer {
  id: string;
  companyName: string;
  contactName: string;
  contactTitle: string;
  address: Address;
}

export interface Address {
  street: string;
  city: string;
  region: string;
  postalCode: number | string;
  country: string;
  phone: string;
}
