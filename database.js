const Sequelize=require("sequelize");

const {DATABASE_HOST, DATABASE_NAME, DATABASE_USER, DATABASE_PORT, DATABASE_PASSWORD} = require('./environments');
// const { DATABASE_URL } = require('./environments');

let database = null;

if (process.env.PORT) {
    // database = new Sequelize(DATABASE_URL);
    database = new Sequelize(DATABASE_NAME, DATABASE_USER, DATABASE_PASSWORD, {
        host: DATABASE_HOST,
        port: DATABASE_PORT,
        logging: false,
        dialect: "postgres"
    });
} else {
    database=new Sequelize("Meta-Registration","admin","shashank",{
        host:"localhost",
        dialect:"sqlite",
        storage:'registration.db',
        logging:false
    });
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
        type:Sequelize.STRING,
        allowNull:false
    },
    Branch:{
        type:Sequelize.STRING,
        allowNull:true
    },
    Year:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    CollegeName:{
        type:Sequelize.STRING,
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
