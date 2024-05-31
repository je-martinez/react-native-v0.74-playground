import { HttpServer } from "../../shared/types";
import { Customer } from "./customer.types";
import { Order } from "./orders.types";
import { Product } from "./products.types";

const northwindApi = "https://northwind.vercel.app/api";

export class NorthwindApi extends HttpServer {
  constructor() {
    super("northwind", northwindApi);
  }
  async fetchCustomers() {
    return this.instance.get<Customer[]>("/customers");
  }
  async fetchOrders() {
    return this.instance.get<Order[]>("/orders");
  }
  async fetchProducts() {
    return this.instance.get<Product[]>("/products");
  }
}
