import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  // toydetails 
  
  toyDetails = [
    {
      id:1,
      toyName:"Blocks",
      toyDetails:"Block games are basically geometry for kids. It introduces children to new concepts and possibilities of mathematics.",
      toyPrice:200,
      toyImg:"https://media.istockphoto.com/id/1348468327/photo/little-african-american-boy-building-a-small-house-with-colorful-wooden-blocks-in-living-room.jpg?b=1&s=170667a&w=0&k=20&c=0ZVHOf0V2600YxLeeW7bLMuK-h9TzyMAl8dhrIT48zw="
    },
    {
      id:2,
      toyName:"train",
      toyDetails:"Assemble your own unique train! Experience the fun of driving! Pick up fruits from the farm, get your favorite animals from the zoo",
      toyPrice:369,
      toyImg:"https://i.ytimg.com/vi/2G6FzHGzFc8/maxresdefault.jpg"
    },
    {
      id:3,
      toyName:"VW Beetle",
      toyDetails:"Drive Luxury Classic Car: Volkswagen Beetle with Real Car Drifting Physics. In all over the world most car lovers wants the best models of luxury sports",
      toyPrice:149,
      toyImg:"https://i.ytimg.com/vi/3D36XA_XlDY/maxresdefault.jpg"
    },
    {
      id:4,
      toyName:"BUS",
      toyDetails:"School bus has come to our bus stop. Come in, sit down and feel yourself comfortable. Hippy invites you to the new road adventure!",
      toyPrice:140,
      toyImg:"https://rukminim1.flixcart.com/image/416/416/jj1qrgw0/musical-toy/m/z/b/school-bus-toy-for-kids-baybee-original-imaf6cfczgmkpr34.jpeg?q=70"
    },
    {
      id:5,
      toyName:"Fidget Spinner",
      toyDetails:"sThe toy has been promoted as helping people who have trouble focusing or those who may need fidget to relieve nervous energy, anxiety, or psychological stress.r",
      toyPrice:105,
      toyImg:"https://media1.giphy.com/media/1Ubrzxvik2puE/giphy.gif"
    },
    // {
    //   id:6,
    //   toyName:"",
    //   toyDetails:"",
    //   toyPrice:219,
    //   toyImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wtj8esaeslvlscv8glj6"
    // }
  ]


  

}
