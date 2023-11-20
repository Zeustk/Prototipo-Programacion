class ServicioEmpleados {

    constructor(DB) {
        this.DB = DB;
    }


    async addEmpleado(Correo, Clave,Id_Cargo,Disponible) {
        try {
            const sql = "insert into Empleados(Correo,Clave,ID,ID_CARGO,Disponible) values (:Correo,:Clave,SEQ_EMPLEADOS.NEXTVAL,:Id_Cargo,:Disponible)";

            await this.DB.Open(sql, [Correo,Clave,Id_Cargo,Disponible], true);

            return ('Guardado Exitosamente')
        }

        catch (err) { 
            console.error(err);
            return ('Guardado errado');
        }

    }

    async getEmpleado() {

        try {

            const sql = "select * from Empleados";
            let result = await this.DB.Open(sql, [], false);
            const Empleados = [];
            result.rows.map(propiedad => {
                let EmpleadoSchema = {
                    "CORREO": propiedad[0],
                    "CLAVE": propiedad[1],
                    "ID": propiedad[2],
                    "ID_CARGO":propiedad[3],
                    "DISPONIBLE":propiedad[4]
                }

                Marcas.push(EmpleadoSchema);
            })

            return Empleados;
        }
        catch (err) {
            console.error(err);
            return ('Error de consulta');
        }

    }


    async UpdateEmpleado(Id,Correo, Clave,Id_Cargo) {

        try {
            const sql = "update Empleados set Correo=:Correo,Clave=:Clave,Id_Cargo=:Id_Cargo where ID=:Id";
            await this.DB.Open(sql, [Id,Correo, Clave,Id_Cargo], true);

            return ('Actualizado Correctamente')
        }

        catch (err) {
            console.error(err);
            return ('Error al actualizar');
        }

    }


    async DeleteEmpleado(Id) {

        try {

            const sql = "update Empleados set Disponible='NO' where ID=:Id";

            await this.DB.Open(sql, [Id], true);

            return ('Eliminado Correctamente')
        }

        catch (err) {
            console.error(err);
            return ('Error al Eliminar');
        }

    }






}

module.exports = ServicioEmpleados;