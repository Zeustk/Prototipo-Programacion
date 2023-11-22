class ServicioCliente {

    constructor(DB) {
        this.DB = DB;
    }


    async addCliente(Nombre_Completo, CC, Fecha_Nacimiento, N_Licencia,Disponible, Correo, Telefono,Contraseña) {
        try {
            const sql = "insert into Clientes(Nombre_Completo, CC, Fecha_Nacimiento, Id_TipoCliente, N_Licencia,Disponible, Correo, Telefono,Contraseña) values (:Nombre_Completo,:CC,:fechaNacimiento,:N_Licencia,:Disponible,:Correo,:Telefono,:Contraseña)";
            
            //Conversiones
            const fechaNacimiento = new Date(Fecha_Nacimiento);
    


            await this.DB.Open(sql, [Nombre_Completo, CC, fechaNacimiento, N_Licencia,Disponible, Correo, Telefono,Contraseña], true);

            return ('Guardado Exitosamente')
        }

        catch (err) {
            console.error(err);
            return ('Guardado errado');
        }

    }

    async getCliente() {

        try {

            const sql = "select * from Clientes";

            let result = await this.DB.Open(sql, [], false);
            const Clientes = [];

            result.rows.map(propiedad => {
                let ClienteSchema = {
                    "Nombre_Completo": propiedad[0],
                    "Cc": propiedad[1],
                    "Fecha_Nacimiento": propiedad[2],
                    "Numero_Licencia":propiedad[3],
                    "Disponible":propiedad[4],
                    "Correo":propiedad[5],
                    "Telefono":propiedad[6],
                    "Contraseña":propiedad[7],
                }

                Clientes.push(ClienteSchema);
            })

            return Clientes;
        }

        catch (err) {
            console.error(err);
            return ('Error de consulta');
        }

    }

    async UpdateCliente(CC,Nombre_Completo,Fecha_Nacimiento, N_Licencia,Correo, Telefono,Contraseña) {

        try {
            const sql = "update Clientes set Nombre_Completo=:Nombre_Completo,Fecha_Nacimiento=:Fecha_Nacimiento,N_Licencia=:N_Licencia,Correo=:Correo,Telefono=:Telefono,Contraseña=:Contraseña where CC=:CC";
            await this.DB.Open(sql, [Id,Nombre_Completo, CC, Fecha_Nacimiento, N_Licencia,Correo, Telefono,Contraseña], true);

            return ('Actualizado Correctamente')
        }

        catch (err) {
            console.error(err);
            return ('Error al actualizar');
        }

    }


    async DeleteCliente(CC) {

        try {

            const sql = "update Clientes set Disponible='NO' where CC=:CC";

            await this.DB.Open(sql, [CC], true);

            return ('Eliminado Correctamente')
        }

        catch (err) {
            console.error(err);
            return ('Error al Eliminar');
        }

    }


}

module.exports = ServicioCliente;