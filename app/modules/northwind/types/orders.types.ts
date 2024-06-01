import { Customer } from "./customers.types";
import { Product } from "./products.types";

interface OrderRelations {
  customer?: Customer;
}

export interface Order extends OrderRelations {
  id: number;
  customerId: string;
  employeeId: number;
  orderDate: Date;
  requiredDate: Date;
  shippedDate: Date | null;
  shipVia: number;
  freight: number;
  shipName: string;
  shipAddress: ShipAddress;
  details: OrderDetail[];
}

interface OrderDetailRelations {
  product?: Product;
}

export interface OrderDetail extends OrderDetailRelations {
  productId: number;
  unitPrice: number;
  quantity: number;
  discount: number;
}

export interface ShipAddress {
  street: string;
  city: string;
  region: string;
  postalCode: number | string;
  country: string;
}
