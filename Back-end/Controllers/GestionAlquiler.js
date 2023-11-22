class ServicioAlquiler {

    constructor(DB) {
        this.DB = DB;
    }


    async addAlquiler(Fecha_Emision,Fecha_Recepcion,KmEmision,KmRecepcion,KmRecorridos,Placa_Vehiculos,Cc_Clientes,Id_Empleados, Disponible) {
        try {
            const sql = "insert into Alquiler(Fecha_Emision,Fecha_Recepcion,ID,KmEmision,KmRecepcion,KmRecorridos,Placa_Vehiculos,Cc_Clientes,Id_Empleados, Disponible) values (:Fecha_Emision,:Fecha_Recepcion,SEQ_Alquiler.NEXTVAL,:KmEmision,:KmRecepcion,:KmRecorridos,:Placa_Vehiculos,Cc_Clientes,Id_Empleados, Disponible)";

            await this.DB.Open(sql, [Fecha_Emision,Fecha_Recepcion,KmEmision,KmRecepcion,KmRecorridos,Placa_Vehiculos,Cc_Clientes,Id_Empleados, Disponible], true);

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
                    "FECHA_EMISION": propiedad[0],
                    "FECHA_RECEPCION": propiedad[1],
                    "ID": propiedad[2],
                    "KMEMISION":propiedad[3],
                    "KMRECEPCION":propiedad[4],
                    "KMRECORRIDOS":propiedad[5],
                    "CARGOS_ADICIONALES":propiedad[6],
                    "TOTAL":propiedad[7],
                    "PLACA_VEHICULOS":propiedad[8],
                    "CC_CLIENTES":propiedad[9],
                    "ID_EMPLEADOS":propiedad[10],
                    "VALOR_INICIAL":propiedad[11],
                    "DISPONIBLE":propiedad[12]
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


    async UpdateAlquiler(Id, Fecha_Recepcion,Disponible,KmRecepcion) {

        try {

            const sql = "update Alquiler set Fecha_Recepcion=:Fecha_Recepcion,Disponible=:Disponible,KmRecepcion=:KmRecepcion where ID=:Id";

            await this.DB.Open(sql, [Id, Fecha_Recepcion,Disponible,KmRecepcion], true);

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