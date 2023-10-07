export class Product {

    name!:string;
    price!:number;

    desc!:string;
    imageUrl!:string;

    constructor(name:string='', price:number=0,desc:string='',imageUrl:string='', ){
        this.name = name;
        this.price = price;
        this.desc=desc;
        this.imageUrl=imageUrl;
    }
}
