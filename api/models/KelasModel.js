import {Sequelize} from "sequelize";
import db from "../config/Database.js";
 
const {DataTypes} = Sequelize;
 
const Kelas = db.define('kelas','matakuliah',{
    id: DataTypes.STRING,
    kelas: DataTypes.STRING,
    jam: DataTypes.STRING,
    id_mk: DataTypes.STRING,
},{
    freezeTableName:true
});
 
export default Kelas;
 
(async()=>{
    await db.sync();
})();