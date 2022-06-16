
module.exports = (sequelize,DataTypes)=>{
    return  user =  sequelize.define('newUsers',{
        name:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true
        },
        contact:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true
        },
        gender:{
            type:DataTypes.STRING,
            allowNull:false
        }

    })

}