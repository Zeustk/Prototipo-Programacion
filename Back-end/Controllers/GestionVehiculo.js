class ServicioVehiculos {

    constructor(DB) {
        this.DB = DB;
    }


    async addVehiculo(Placa, Id_Tipovehiculo,Modelo,Id_Marca,Id_Tarifas,Disponible,Year,Url) {

        try {
          

            const Id_TipoVehiculoNumber = parseInt(Id_Tipovehiculo);
            const Id_MarcaNumber = parseInt(Id_Marca);
            const Id_TarifaNumber =parseInt(Id_Tarifas);
            //URL: URL DE IMAGEN


            const sql = "insert into Vehiculos(Placa, Id_Tipovehiculo, Modelo, Id_Marca, Id_Tarifas, Disponible,Year,Url) values (:Placa, :Id_TipoVehiculoNumber, :Modelo, :Id_MarcaNumber, :Id_TarifaNumber, :Disponible,:Year,:Url)";



            await this.DB.Open(sql, [Placa, Id_TipoVehiculoNumber,Modelo,Id_MarcaNumber,Id_TarifaNumber,Disponible,Year,Url], true);

            return ('Guardado Exitosamente')
        }

        catch (err) {
            console.error(err);
            return ('Guardado errado');
        }

    }

    async getVehiculo() {

        try {

            const sql = "select *from Vehiculos";

            let result = await this.DB.Open(sql, [], false);
            const Vehiculos = [];

            result.rows.map(propiedad => {
                let VehiculoSchema = {
                    "Placa": propiedad[0],
                    "Id_TipoVehiculo": propiedad[1],
                    "Modelo": propiedad[2],
                    "Id_Marca":propiedad[3],
                    "Id_Tarifas":propiedad[4],
                    "Disponible":propiedad[5],
                    "Year":propiedad[6],
                    "Url":propiedad[7]
                }

                Vehiculos.push(VehiculoSchema);
            })

            return Vehiculos;
        }

        catch (err) {
            console.error(err);
            return ('Error de consulta');
        }

    }


    async UpdateVehiculo(Placa, Modelo) {

        try {
            console.log(Placa);
            console.log(Modelo);

            const sql = "update VEHICULOS set Modelo=:Modelo where Placa=:Placa";

            await this.DB.Open(sql, [Modelo, Placa], true);

            return ('Actualizado Correctamente')
        }

        catch (err) {
            console.error(err);
            return ('Error al actualizar');
        }

    }


    async DeleteVehiculo(Placa) {

        try {

            const sql = "update Vehiculos set Disponible='NO' where Placa=:Placa";

            await this.DB.Open(sql, [Placa], true);

            return ('Eliminado Correctamente')
        }

        catch (err) {
            console.error(err);
            return ('Error al Eliminar');
        }

    }



}

module.exports = ServicioVehiculos;