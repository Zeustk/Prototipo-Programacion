class ServicioVehiculos {

    constructor(DB) {
        this.DB = DB;
    }


    async addVehiculo(Placa, Id_Tipovehiculo,Modelo,Id_Marca,Id_Tarifas,Disponible,Year,Url) {

        try {
          
            console.log(Url);

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

            const sql = "select *from Vehiculos where Disponible='SI'";

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


    async UpdateVehiculo(Year, Modelo,Placa) {

        try {
            console.log(Year);
            console.log(Modelo);
            console.log(Placa)

            const sql = "update VEHICULOS set Modelo=:Modelo,Year=:Year where Placa=:Placa";

            await this.DB.Open(sql, [Modelo, Year,Placa], true);

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

    async BuscarVehiculo(Placa){
        try {
            
            const sql = "SELECT * FROM Vehiculos WHERE UPPER(Placa) = UPPER(:Placa)";
            let consulta = await this.DB.Open(sql, [Placa], false);
    
            if (consulta && consulta.rows.length > 0) {

                return true;

            } else {
               return false;
            }
    
        } catch (error) {
            console.error(error);
            return 'Error al BUSCAR Vehiculo';
        }

    }





}

module.exports = ServicioVehiculos;