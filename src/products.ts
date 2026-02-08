

interface product{
  id:number,
  name:string,
  price:number,
  imageLink:string
}



const products:product[] = [
  { id: 1, name: "Laptop",price:100.00, imageLink:"/images/laptop.webp" },
  { id: 2, name: "Phone",price:40.00,imageLink:"/images/mobile-phone.webp"},
  { id: 3, name: "Headphones",price:20.00,imageLink:"/images/headphones.webp"},
];



export {products}