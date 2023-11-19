class ServicioVehiculos {

    constructor(DB) {
        this.DB = DB;
    }


    async addvehiculo(Placa, Tipo_De_Vehiculo,Modelo,Marca,Tarifa,Disponible) {

        try {
            const sql = "insert into Vehiculos(Placa, Tipo_De_Vehiculo,Modelo,Marca,Tarifa,Disponible) values (:Placa, :Tipo_De_Vehiculo,:Modelo,:Marca,:Tarifa,:Disponible)";

            await this.DB.Open(sql, [Placa, Tipo_De_Vehiculo,Modelo,Marca,Tarifa,Disponible], true);

            return ('Guardado Exitosamente')
        }

        catch (err) {
            console.error(err);
            return ('Guardado errado');
        }

    }

    async getMarca() {

        try {

            const sql = "select *from Vehiculos";

            let result = await this.DB.Open(sql, [], false);
            const Marcas = [];

            result.rows.map(propiedad => {
                let MarcaSchema = {
                    "ID_MARCA": propiedad[0],
                    "NOMBRE": propiedad[1],
                    "Disponible": propiedad[2]
                }

                Marcas.push(MarcaSchema);
            })

            return Marcas;
        }

        catch (err) {
            console.error(err);
            return ('Error de consulta');
        }

    }


    async UpdateMarca(Id_Marca, Nombre) {

        try {

            const sql = "update Marcas set Nombre=:Nombre where ID_MARCA=:Id_Marca";

            await this.DB.Open(sql, [Nombre, Id_Marca], true);

            return ('Actualizado Correctamente')
        }

        catch (err) {
            console.error(err);
            return ('Error al actualizar');
        }

    }


    async DeleteMarca(Id_Marca) {

        try {

            const sql = "update Marcas set Disponible='NO' where ID_MARCA=:Id_Marca";

            await this.DB.Open(sql, [Id_Marca], true);

            return ('Eliminado Correctamente')
        }

        catch (err) {
            console.error(err);
            return ('Error al Eliminar');
        }

    }


    async addMarca(Nombre, Disponible) {
        try {
            const sql = "insert into Marcas(ID_MARCA,Nombre,Disponible) values (SEQ_MARCAS.NEXTVAL,:Nombre,:Disponible)";

            await this.DB.Open(sql, [Nombre, Disponible], true);

            return ('Guardado Exitosamente')
        }

        catch (err) {
            console.error(err);
            return ('Guardado errado');
        }

    }




}

module.exports = ServicioVehiculos;