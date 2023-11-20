export interface Alquileres{

    Fecha_Emision:Date | undefined,
    Fecha_Recepcion?:Date | null,
    Id:number,
    KmEmision:Number,
    KmRecepcion?:Number,
    KmRecorridos?:Number,
    Cargos_Adicionales?:number,
    Total?:number,
    Placa_Vehiculo:string,
    Cedula_Cliente:string,
    Id_Empleados:string,
    Valor_Inicial:number,
    Disponible:string

}