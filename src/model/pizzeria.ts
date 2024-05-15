import sequelize, { DataTypes, Model } from './db/index';

class Pizza extends Model { }

Pizza.init(
    {

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
        tableName: 'Pizzas',
        timestamps: false
    }
);

export default Pizza;