const oracledb = require('oracledb');

cns = {
    user: "Administrador",
    password: "jesus234",
    connectString: "localhost/xepdb1"
}


async function Open(sql, binds, autoCommit) {
    let cnn = await oracledb.getConnection(cns);
    let result = await cnn.execute(sql, binds, { autoCommit });
    cnn.release(); //librar la conexion
    return result;
}

exports.Open = Open;