import { Menu } from "./DishesVm";

export class Restaurant {
  id: number;
  name: string;
  image_url: string;
  street: string;
  open_time?: Date;
  close_time?: Date;
  address?: string;
   menu?: Menu;

  constructor(data: any) {
    this.id = data.id;
    this.name = data.name || "";
    this.image_url = data.image_url || "https://www.generatorslist.com/public/img/food/restaurants/default-restaurant.png";
    this.street = data.street || "no details";
    this.open_time = data.open_time;
    this.close_time = data.close_time;
    this.menu=data.menu ? new Menu (data.menu) : null ;
  }
}
