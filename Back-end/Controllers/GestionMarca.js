class ServicioMarcas {

    constructor(DB) {
        this.DB = DB;
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

    async getMarca() {

        try {

            const sql = "select *from Marcas where Disponible='SI'";

            let result = await this.DB.Open(sql, [], false);
            const Marcas = [];

            result.rows.map(propiedad => {
                let MarcaSchema = {
                    "Id_Marca": propiedad[0],
                    "Nombre": propiedad[1],
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
            /* console.log(Id_Marca);
            console.log(Nombre); */
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

module.exports = ServicioMarcas;