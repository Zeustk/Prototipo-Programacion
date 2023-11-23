class ServicioTipoVehiculo {

    constructor(DB) {
        this.DB = DB;
    }


    async addTipoVehiculo(Nombre, Disponible) {
        try {
            const sql = "insert into TipoVehiculo(ID,Nombre,Disponible) values (SEQ_TIPOVEHICULO.NEXTVAL,:Nombre,:Disponible)";

            await this.DB.Open(sql, [Nombre, Disponible], true);

            return ('Guardado Exitosamente')
        }

        catch (err) {
            console.error(err);
            return ('Guardado errado');
        }

    }

    async getTipoVehiculo() {

        try {

            const sql = "select *from TipoVehiculo";

            let result = await this.DB.Open(sql, [], false);
            const TipoVehiculos = [];

            result.rows.map(propiedad => {
                let TipoVehiculoSchema = {
                    "Id": propiedad[0],
                    "Nombre": propiedad[1],
                    "Disponible": propiedad[2]
                }

                TipoVehiculos.push(TipoVehiculoSchema);
            })

            return TipoVehiculos;
        }

        catch (err) {
            console.error(err);
            return ('Error de consulta');
        }

    }


    async UpdateTipoVehiculo(Id, Nombre) {

        try {
            Id=parseInt(Id);

            const sql = "update TipoVehiculo set Nombre=:Nombre where ID=:Id";

            await this.DB.Open(sql, [Nombre, Id], true);

            return ('Actualizado Correctamente')
        }

        catch (err) {
            console.error(err);
            return ('Error al actualizar');
        }

    }


    async DeleleTipoVehiculo(Id,Nombre) {

        try {

            const sql = "update TipoVehiculos set Nombre=:Nombre where ID=:Id";

            await this.DB.Open(sql, [Id,Nombre], true);

            return ('Eliminado Correctamente')
        }

        catch (err) {
            console.error(err);
            return ('Error al Eliminar');
        }

    }


}

module.exports = ServicioTipoVehiculo;