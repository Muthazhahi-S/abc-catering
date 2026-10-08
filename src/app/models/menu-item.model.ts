export interface MenuItem{
    id:number;
    restaurantId:number;
    name:string;
    cuisine:string;
    price:number;
    description?: string;
    image?:string;
    qty: number;
}