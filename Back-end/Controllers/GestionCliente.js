class ServicioCliente {

    constructor(DB) {
        this.DB = DB;
    }


    async addCliente(Nombre_Completo, CC, Fecha_Nacimiento, N_Licencia,Disponible, Correo, Telefono) {
        try {
            const sql = "insert into Clientes(Nombre_Completo, CC, Fecha_Nacimiento, Id_TipoCliente, N_Licencia,Disponible, Correo, Telefono) values (:Nombre_Completo,:CC,:fechaNacimiento,:N_Licencia,:Disponible,:Correo,:Telefono)";
            
            //Conversiones
            const fechaNacimiento = new Date(Fecha_Nacimiento);
    


            await this.DB.Open(sql, [Nombre_Completo, CC, fechaNacimiento, N_Licencia,Disponible, Correo, Telefono], true);

            return ('Guardado Exitosamente')
        }

        catch (err) {
            console.error(err);
            return ('Guardado errado');
        }

    }

    async getCliente() {

        try {

            const sql = "select *from Clientes";

            let result = await this.DB.Open(sql, [], false);
            const Clientes = [];

            result.rows.map(propiedad => {
                let ClienteSchema = {
                    "Nombre_Completo": propiedad[0],
                    "Cedula": propiedad[1],
                    "Fecha_Nacimiento": propiedad[2],
                    "Tipo_De_Cliente":propiedad[3],
                    "Numero_Licencia":propiedad[4],
                    "Disponible":propiedad[5],
                    "Correo":propiedad[6],
                    "Telefono":propiedad[7]
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


}

module.exports = ServicioCliente;