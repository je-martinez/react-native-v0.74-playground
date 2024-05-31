export interface Product {
  id: number;
  supplierId: number;
  categoryId: number;
  quantityPerUnit: string;
  unitPrice: number;
  unitsInStock: number;
  unitsOnOrder: number;
  reorderLevel: number;
  discontinued: boolean;
  name: string;
  supplier?: Supplier;
  category?: Category;
}

export interface Category {
  id: number;
  description: string;
  name: string;
}

export interface Supplier {
  id: number;
  companyName: string;
  contactName: string;
  contactTitle: string;
  address: ProductAddress;
}

export interface ProductAddress {
  street: string;
  city: string;
  region: string;
  postalCode: number;
  country: string;
  phone: string;
}
