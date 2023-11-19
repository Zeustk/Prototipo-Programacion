export interface Marcas{
    id_Marca:number,
    Nombre:string,
    Disponible:string
  }

  export interface Vehiculos{
    Placa:string,
    Tipo_De_Vehiculo:string,
    Modelo: number,
    Marca:number,
    Tarifa:number,
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



