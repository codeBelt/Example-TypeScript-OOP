///<reference path='Vehicle.ts'/>
 ///<reference path='../accessories/Tire.ts'/>
 ///<reference path='../../constants/TireType.ts'/>
 ///<reference path='../accessories/soundsystems/Radio.ts'/>

 class Truck extends Vehicle {

     private _tires:Tire;

     constructor(mpg:number, fuel:number)
     {
         super(mpg, fuel);

         this.name = "Truck";

         this._tires = new Tire(TireType.SNOW);
         this.soundSystem = new Radio();

         console.log(this.name, "has", this._tires.getType(), "tires");
     }

     public useAccessory():void
     {
         super.useAccessory();
         this.lowerTailgate();
     }

     private lowerTailgate():void
     {
         console.log(this.name, "lowered tailgate");
     }

 }