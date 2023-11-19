class ServicioTarifas {

    constructor(DB) {
        this.DB = DB;
    }


    async addTarifa(Nombre, Precio,ValorDia,Disponible) {
        try {
            const sql = "insert into Tarifas(ID,Nombre,Precio,ValorDia,Disponible) values (SEQ_TARIFAS.NEXTVAL,:Nombre,:Precio,:ValorDia,:Disponible)";

            await this.DB.Open(sql, [Nombre,Precio,ValorDia,Disponible], true);

            return ('Guardado Exitosamente')
        }

        catch (err) {
            console.error(err);
            return ('Guardado errado');
        }

    }

    async getTarifa() {

        try {

            const sql = "select *from Tarifas";

            let result = await this.DB.Open(sql, [], false);
            const Tarifas = [];

            result.rows.map(propiedad => {
                let TarifaSchema = {
                    "Id": propiedad[0],
                    "Nombre": propiedad[1],
                    "Precio": propiedad[2],
                    "ValorDia":propiedad[3],
                    "Disponible":propiedad[4]
                }

                Tarifas.push(TarifaSchema);
            })

            return TarifaSchema;
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

module.exports = ServicioTarifas;