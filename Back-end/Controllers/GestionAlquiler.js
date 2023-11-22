class ServicioAlquiler {

    constructor(DB) {
        this.DB = DB;
    }


    async addAlquiler(Fecha_Emision,Fecha_Contrato,KmEmision,KmRecepcion,KmRecorridos,Placa_Vehiculo,Cc_Clientes,Id_Empleados,Valor_Inicial, Disponible,Cargos_Adicionales,Total,Fecha_Recepcion) {
        try {
            //conversiones

            
            const fechaEmision = new Date(Fecha_Emision)

            console.log(fechaEmision);

      

            const fechacontrato = new Date(Fecha_Contrato)

      


           
           // const kmRecepcion = parseInt(KmRecepcion);
            //const kmRecorridos =parseInt(KmRecorridos);
            const id_empleado=parseInt(Id_Empleados);
            const valorinicial=parseInt(Valor_Inicial);
           // const cargos_adicionales=parseFloat(Cargos_Adicionales);
            const total=parseFloat(Total);

            console.log(total);

          

            
            console.log(fechaEmision);
            console.log(KmEmision);
            console.log(KmRecepcion);
            console.log(Id_Empleados);
            console.log(Valor_Inicial);
            console.log(Cargos_Adicionales);
            console.log(Total);
            

           
            const sql = "insert into Alquiler(Fecha_Emision,Fecha_Contrato,ID,KmEmision,KmRecepcion,KmRecorridos,Cargos_Adicionales,Total,Placa_Vehiculos,CC_CLIENTES,ID_EMPLEADOS,Valor_Inicial,Disponible,Fecha_Recepcion) values (:fechaEmision,:fechacontrato,SEQ_ALQUILER.NEXTVAL,:KmEmision,:KmRecepcion,:KmRecorridos,:Cargos_Adicionales,:Total,:Placa_Vehiculo,:Cc_Clientes,:id_empleado,:valorinicial,:Disponible,:Fecha_Recepcion)";

            await this.DB.Open(sql, [fechaEmision, fechacontrato,KmEmision,KmRecepcion,KmRecorridos,Cargos_Adicionales,Total,Placa_Vehiculo,Cc_Clientes,id_empleado,valorinicial,Disponible,Fecha_Recepcion], true);

            return ('Guardado Exitosamente')
        }

        catch (err) {
            console.error(err);
            return ('Guardado errado');
        }

    }

    async getAlquiler() {

        try {

            const sql = "select * from Alquiler";

            let result = await this.DB.Open(sql, [], false);
            const Alquiler = [];

            result.rows.map(propiedad => {
                let AlquilerSchema = {
                    "Fecha_Emision": propiedad[0],
                    "Fecha_Contrato": propiedad[1],
                    "Id": propiedad[2],
                    "KmEmision":propiedad[3],
                    "KmRecepcion":propiedad[4],
                    "KmRecorridos":propiedad[5],
                    "Cargos_Adicionales":propiedad[6],
                    "Total":propiedad[7],
                    "Placa_Vehiculos":propiedad[8],
                    "Cc_Clientes":propiedad[9],
                    "Id_Empleados":propiedad[10],
                    "Valo_Inicial":propiedad[11],
                    "Disponible":propiedad[12],
                    "Fecha_Recepcion":propiedad[13]
                }

                Alquiler.push(AlquilerSchema);
            })

            return Alquiler;
        }

        catch (err) {
            console.error(err);
            return ('Error de consulta');
        }

    }


    async UpdateAlquiler(Id, Fecha_Recepcion,KmRecepcion) {

        try {

            const sql = "update Alquiler set Fecha_Recepcion=:Fecha_Recepcion,KmRecepcion=:KmRecepcion where ID=:Id";

            await this.DB.Open(sql, [Id, Fecha_Recepcion,KmRecepcion], true);

            return ('Actualizado Correctamente')
        }

        catch (err) {
            console.error(err);
            return ('Error al actualizar');
        }

    }


    async DeleteAlquiler(Id) {

        try {

            const sql = "update Alquiler set Disponible='NO' where ID=:Id";

            await this.DB.Open(sql, [Id], true);

            return ('Eliminado Correctamente')
        }

        catch (err) {
            console.error(err);
            return ('Error al Eliminar');
        }

    }





}

module.exports = ServicioAlquiler;