import sequelize from '.';
import Pizza from "../pizzeria";

// (async () => await sequelize.drop())();
// console.log('All models were deleted successfully.');

(async () => await sequelize.sync({ force: true }))();
console.log('All models were synchronized successfully.');
// (async () => {
//     await Pizza.sync({ alter: true });
//     console.log('The table for the User model was just (re)created!');

// })();