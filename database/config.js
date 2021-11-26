const {Pool} = require('pg');

const option={
 host: process.env.HOSTDB,
 user: process.env.USERDB,
 password:process.env.PWDDB,
 database: process.env.DATABASEDB,
 port: process.env.PORTDB

};

const dbConection = new Pool(option);



module.exports={
    dbConection
}
