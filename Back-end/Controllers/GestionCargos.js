class ServicioCargos {

    constructor(DB) {
        this.DB = DB;
    }


    async addCargo(Nombre,Administracion,Disponible) {
        try {
            const sql = "insert into Cargos(ID_CARGO,Nombre,Administracion,Disponible) values (SEQ_CARGOS.NEXTVAL,:Nombre,:Administracion,:Disponible)";

            await this.DB.Open(sql, [Nombre,Administracion,Disponible], true);

            return ('Guardado Exitosamente')
        }

        catch (err) {
            console.error(err);
            return ('Guardado errado');
        }

    }

    async getCargo() {

        try {
          

            const sql = "select *from Cargos";

            let result = await this.DB.Open(sql, [], false);
            const Cargos = [];

            result.rows.map(propiedad => {
                let CargoSchema = {
                    "Id_Cargo": propiedad[0],
                    "Nombre": propiedad[1],
                    "Administracion": propiedad[2],
                    "Disponible":propiedad[3]
                }

                Cargos.push(CargoSchema);
            })

            return Cargos;
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


    




}

module.exports = ServicioCargos;