import { ProductType } from "./ProductTypes";

export interface CartTypes extends ProductType {
    quantity: number;
}