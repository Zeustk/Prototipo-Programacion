class ServicioCliente {

    constructor(DB) {
        this.DB = DB;
    }


    async addCliente(Nombre_Completo, Cc, Fecha_Nacimiento, N_Licencia,Disponible, Correo, Telefono,Contrasena) {
        try {
            const sql = "insert into Clientes(Nombre_Completo, Cc, Fecha_Nacimiento, N_Licencia,Disponible, Correo, Telefono,Contrasena) values (:Nombre_Completo,:Cc,:fechaNacimiento,:N_Licencia,:Disponible,:Correo,:Telefono,:Contrasena)";
            
            //Conversiones
      
           
            const fechaNacimiento = new Date(Fecha_Nacimiento)

            fechaNacimiento.setDate(fechaNacimiento.getDate() + 1);
    
           console.log(fechaNacimiento);

            await this.DB.Open(sql, [Nombre_Completo, Cc, fechaNacimiento, N_Licencia,Disponible, Correo, Telefono,Contrasena], true);

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
                    "Cedula": propiedad[1],
                    "Fecha_Nacimiento": propiedad[2],
                    "Numero_Licencia":propiedad[3],
                    "Disponible":propiedad[4],
                    "Correo":propiedad[5],
                    "Telefono":propiedad[6],
                    "Contrasena":propiedad[7],
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

    async UpdateCliente(CC,Nombre_Completo,Fecha_Nacimiento, N_Licencia,Correo, Telefono,Contrasena) {

        try {
            const sql = "update Clientes set Nombre_Completo=:Nombre_Completo,Fecha_Nacimiento=:Fecha_Nacimiento,N_Licencia=:N_Licencia,Correo=:Correo,Telefono=:Telefono,Contrasena=:Contrasena where CC=:CC";
            await this.DB.Open(sql, [Id,Nombre_Completo, CC, Fecha_Nacimiento, N_Licencia,Correo, Telefono,Contrasena], true);

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