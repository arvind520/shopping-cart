export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;

  //! because of api integration we dont need this
  constructor(
    id: number,
    name: string,
    description: string,
    price: number,
    imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiE7ZqkQyMcDWZ_tejnDLOWFIVXO2ZiXEBVQ&usqp=CAU'
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.imageUrl = imageUrl;
  }
}
