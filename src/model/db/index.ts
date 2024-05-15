import { Sequelize, DataTypes, Model } from 'sequelize';

const DB_PATH = 'postgres://ladlevit:1eT__M9qf4n9WO_iM2FFmXtM2zXCEDnu@isabelle.db.elephantsql.com/ladlevit'

const sequelize = new Sequelize(DB_PATH);

(async function () {
    try {
        await sequelize.authenticate();
        console.log('Connection has been establiched succeddfully.');
    } catch (error) {
        console.log('Unable to connect to the database:', error)
    }
})();

export { DataTypes, Model };
export default sequelize;