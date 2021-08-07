export interface Dish {
  id: number;
  name: string;
  price: number;
  description: string;
  image_path ?: string | "https://widgets.truekonnects.com/images/default_food.jpg;jsessionid=3213D246B6B2FBFF6BF99E4B11274BD8";
}

interface SubMenu {
  id: number;
  name: string;
  dishes: Dish[];
  sub_menus:SubMenu[]
}
export class Menu {
  id: number;
  name: string;
  sub_menus: SubMenu[];
  // dishes: Dish[];
  constructor(data: any) {

    this.id = data.id;
    this.name = data.name;
    this.sub_menus = data.sub_menus;
    console.log("rrrrrrrrrrrrrrrrrrr",data);

    // this.dishes = data.dishes;
  }
}
