const Pool = require("pg-pool");

const pool = new Pool({
	database: "olx",
	user: "postgres",
	password: "sarvar",
	port: "5432"
});



 async function Postgres() {
    try {
        const client = await pool.connect();  
        return client ;
    } catch (error) {
        console.log(error);
    }
};

module.exports = Postgres;