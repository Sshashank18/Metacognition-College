const Sequelize=require("sequelize");


let database=new Sequelize("Meta-Registration","admin","shashank",{
    host:"localhost",
    dialect:"sqlite",
    storage:'registration.db',
    logging:false
});
 
if (process.env.HEROKU_POSTGRESQL_BRONZE_URL) {
    sequelize = new Sequelize(process.env.HEROKU_POSTGRESQL_BRONZE_URL, {
        dialect:  'postgres',
        protocol: 'postgres',
        port:     match[4],
        host:     match[3],
        logging:  false //false
    })
}

const Customers=database.define("customers",{
    OrderId: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    Email:{
        allowNull:false,
        type:Sequelize.STRING
    },
    Mobile:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    Branch:{
        type:Sequelize.STRING,
        allowNull:false
    },
    Year:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    Event:{
        type:Sequelize.STRING,
        allowNull:false
    },
    Amount:{
        type:Sequelize.INTEGER,
        allowNull:false
    }
});


module.exports={
    database,
    Customers
}
