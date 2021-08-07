export class Dishes {
  id: number;
  name: string;
  image_path: string;
  street: string;
  restaurant_name: string;
  menu_name: string;
  price: number;
  restaurant_id: number;
  constructor(data: any) {
    this.id = data.id;
    this.name = data.name;
    this.image_path = data.image_path;
    this.street = data.street;
    this.restaurant_name = data.restaurant_name;
    this.menu_name = data.menu_name;
    this.price = data.price;
    this.restaurant_id = data.restaurant_id;
  }
}
