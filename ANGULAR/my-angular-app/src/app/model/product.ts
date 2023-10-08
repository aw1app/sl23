export class Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    thumbnail: string;
  
    constructor(id: number, title: string, price: number, description: string, category: string, thumbnail: string) {
      this.id = id;
      this.title = title;
      this.price = price;
      this.description = description;
      this.category = category;
      this.thumbnail = thumbnail;
    }
  }
  


// export class Product {

//     name!:string;
//     price!:number;

//     desc!:string;
//     imageUrl!:string;

//     constructor(name:string='', price:number=0,desc:string='',imageUrl:string='', ){
//         this.name = name;
//         this.price = price;
//         this.desc=desc;
//         this.imageUrl=imageUrl;
//     }
// }

