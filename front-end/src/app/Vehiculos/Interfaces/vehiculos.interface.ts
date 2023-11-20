export interface Marcas{
    Id_Marca:number,
    Nombre:string,
    Disponible:string
  }

  export interface Vehiculos{
    Placa:string,
    Id_TipoVehiculo:Number,
    Modelo: number,
    Id_Marca:number,
    Id_Tarifa:number,
    Disponible:string
  }

  export interface Tarifas{

    Nombre:string,
    Precio: number,
    ValorDia:number,
    Disponible:string
  }

  export interface TipoVehiculo{

    Id:number,
    Nombre:string,
    Disponible:string
  }



