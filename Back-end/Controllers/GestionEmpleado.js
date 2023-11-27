class ServicioEmpleados {

    constructor(DB) {
        this.DB = DB;
    }


    async addEmpleado(Correo, Clave,Id_Cargo,Disponible) {

        try {
           


            const sql = "insert into Empleados(Correo,Clave,ID,ID_CARGO,Disponible) values (:Correo,:Clave,SEQ_EMPLEADOS.NEXTVAL,:CargoNumber,:Disponible)";

            const CargoNumber=parseInt(Id_Cargo);


            await this.DB.Open(sql, [Correo,Clave,CargoNumber,Disponible], true);

            return ('Guardado Exitosamente')
        }

        catch (err) { 
            console.error(err);
            return ('Guardado errado');
        }

    }

    async getEmpleado() {

        try {

            const sql = "select * from Empleados  where Disponible='SI' ";
            let result = await this.DB.Open(sql, [], false);
            const Empleados = [];
            result.rows.map(propiedad => {
                let EmpleadoSchema = {
                    "Correo": propiedad[0],
                    "Clave": propiedad[1],
                    "Id": propiedad[2],
                    "Id_Cargo":propiedad[3],
                    "Disponible":propiedad[4]
                }

                Empleados.push(EmpleadoSchema);
            })

            return Empleados;
        }
        catch (err) {
            console.error(err);
            return ('Error de consulta');
        }

    }


    async UpdateEmpleado(Correo, Clave,Id) {

        try {
            
            const sql = "update Empleados set Correo=:Correo,Clave=:Clave where Id=:Id";
            await this.DB.Open(sql, [Correo, Clave,Id], true);

            return ('Actualizado Correctamente')
        }

        catch (err) {
            console.error(err);
            return ('Error al actualizar');
        }

    }


    async DeleteEmpleado(Id) {

        try {

            console.log(Id);
            const sql = "update Empleados set Disponible='NO' where Id=:Id";

            await this.DB.Open(sql, [Id], true);

            return ('Eliminado Correctamente')
        }

        catch (err) {
            console.error(err);
            return ('Error al Eliminar');
        }

    }

    async BuscarEmpleado(Correo,Clave){
        try {
            console.log(Correo);
            console.log(Clave);
            const sql = "SELECT t.Administracion FROM Empleados e JOIN Cargos t ON e.ID_Cargo = t.ID_Cargo where CORREO=:Correo AND CLAVE=:Clave";
            let consulta = await this.DB.Open(sql, [Correo, Clave], false);
    
            if (consulta && consulta.rows.length > 0) {
                const administracion = consulta.rows[0][0]; // Acceder al valor específico
                return administracion;
            } else {
                return null;
            }
        } catch (error) {
            console.error(error);
            return 'Error al consultar Correo y Clave';
        }
    }

}

module.exports = ServicioEmpleados;