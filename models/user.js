
module.exports = (sequelize,DataTypes)=>{
    return  user =  sequelize.define('users',{
        name:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true
        },
        password: {
            type:DataTypes.STRING,
            allowNull:false,
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

    },{
        timestamps:false
    })

}