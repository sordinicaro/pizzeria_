import sequelize, { DataTypes, Model } from './db';

class Pizza extends Model { }

Pizza.init(
    {
        // id: {
        //     type: DataTypes.INTEGER,
        //     autoIncrement: true,
        //     primaryKey: true,

        // },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        vegetarian: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        vegan: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        available: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        }
    },
    {
        sequelize,
        modelName: 'Pizza',
        tableName: 'Pizzeria',
    }
);

export default Pizza;