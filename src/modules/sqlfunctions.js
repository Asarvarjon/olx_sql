module.exports = class SqlFunctions {
    static async UserSignUpCreate(client, name, email, password, phone) {
        try {
            let response = await client.query(`INSERT INTO users ( 
                user_name,
                email,
                user_password, 
                phone  
            ) VALUES (
                $1,
                $2,
                $3,
                $4
            ) RETURNING *`, 
            [name, email, password, phone]);

            return response.rows;
        } catch (error) {
            console.log(error );
        }
    }

    static async CreateSession(client, user_agent, user_id) {
        try {
            let response = await client.query(`INSERT INTO user_sessions (   
                user_agent,  
                owner_id,   
                created_at
            ) VALUES (
                $1,
                $2, 
                $3 
            ) RETURNING *`, 
            [user_agent, user_id, new Date()]);

            return response.rows;
        } catch (error) {
            console.log(error );
        }
    }
}