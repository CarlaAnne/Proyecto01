import { Component } from '@angular/core';
import { producto } from './interfaces/producto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public funk1: producto ={
    nombre: "Funko Pop Rio - La Casa de Papel",
    precio: 65
  };

  public funk2: producto ={
    nombre: "Funko Pop Moscú - La Casa de Papel",
    precio: 55
  };

  public funk3: producto ={
    nombre: "Funko Pop Helsinki - La Casa de Papel",
    precio: 65
  };

  public funk4: producto ={
    nombre: "Funko Pop Oslo - La Casa de Papel",
    precio: 50
  };

  public funk5: producto ={
    nombre: "Funko Pop Piccolo - Dragon Ball",
    precio: 60
  };

  public funk6: producto ={
    nombre: "Funko Pop Vegeta Training - Dragon Ball",
    precio: 65
  };

  public funk7: producto ={
    nombre: "Funko Pop Androide 16 - Dragon Ball",
    precio: 55
  };

  public funk8: producto ={
    nombre: "Funko Pop Fortnite Brite Bomber",
    precio: 60
  };

  public funk9: producto ={
    nombre: "Funko Pop Daenerys and Fiery Drogon ",
    precio: 105
  };

  public funk10: producto ={
    nombre: "Funko Pop Theon Greyjoy - Game of Thrones",
    precio: 65
  };

  public funk11: producto ={
    nombre: "Funko Pop Night King - Game of Thrones",
    precio: 75
  };

  public funk12: producto ={
    nombre: "Funko Pop  King Bran The Broken",
    precio: 70
  };
  
  public funko:producto=this.funkoVacio();
  public funkos: producto[]=[];

   onDatos(): void {
    // this.lista.push(this.alumno.nombre);
    console.log(this.funko);
    this.funkos.push(this.funko);
    this.funko= this.funkoVacio();
    console.log("el arreglo funkos tiene:",this.funkos.length,"productos")
   }
   
  funkoVacio(): producto{
     return{
       nombre:"",
       precio: 0
     };
   }
   onEliminar(i:number):void{
    //  this.lista.splice(i,1);
    this.funkos.splice(i,1);
   }


  public funko1:string = "https://www.trenda.pe/uploads/product/funko-pop-rio-la-casa-de-papel.jpg";
  public funko2:string = "https://www.trenda.pe/uploads/product/funko-pop-moscu-la-casa-de-papel.jpg";
  public funko3:string = "https://www.trenda.pe/uploads/product/funko-pop-helsinki-la-casa-de-papel.jpg";
  public funko4:string = "https://www.trenda.pe/uploads/product/funko-pop-oslo-la-casa-de-papel.jpg";
  public funko5:string = "https://www.trenda.pe/uploads/product/funko-pop-piccolo.jpg";
  public funko6:string = "https://www.trenda.pe/uploads/product/funko-pop-vegeta-training.jpg";
  public funko7:string = "https://www.trenda.pe/uploads/product/funko-pop-androide-16.jpg";
  public funko8:string = "https://www.trenda.pe/uploads/product/funko-fornite-427.jpg";
  public funko9:string = "https://www.trenda.pe/uploads/product/funko-pop-daenerys-fiery-drogon.jpg";
  public funko10:string = "https://www.trenda.pe/uploads/product/funko-pop-theon-greyjoy.jpg";
  public funko11:string = "https://www.trenda.pe/uploads/product/funko-pop-knight-king-game-of-thrones.jpg";
  public funko12:string = "https://www.trenda.pe/uploads/product/funko-pop-king-bran-the-broken.jpg";
  
}

