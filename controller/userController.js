const models = require('../models')
const sequelize = models.Sequelize;
const Op = sequelize.Op;

exports.readUser = async (req, res) => {
    try {
        const data  = await models.users.findAll({
            attributes:['name','email','password','contact','gender']
           });
        res.status(200).send({
            status: 200,
            data: data
        })
    } catch (error) {
        console.error(error)
    }
}




exports.AddUser = async (req, res, next) => {
    const {
        name,
        email,
        password,
        contact,
        gender
    } = req.body
    try {
        let user = await models.users.create({
            name,
            email,
            password,
            contact,
            gender
        });
        return res.status(201).json({
            status: 201,
            message: 'user added successfully',
            data: user
        });
    } catch (error) {
        res.send({
            error: error
        });
    }
}


exports.updataUser = async  (req, res)=>{
const id = req.params.id;
const {name,email,password,contact,gender} = req.body;
try {
 const data = await models.users.findOne({where:{id}})
 if(!data){
    res.status(404).send({message:"user id is not found"})
 }
const user = await models.users.update({
    name:name,
    email:email,
    password:password,
    contact:contact,
    gender:gender},
    {where:{id}})
res.status(201).send("user data is updated")
}catch(error){
    console.log(error);
}
}

exports.readUserById = async (req, res) => {
    const {id} = req.params.id
    try {
        const data = await models.users.findOne({attributes:['name','email','password','contact','gender'],
        where:{id}})
        if(!data){
            res.status(400).send({message:'user not found'})
        }
     res.status(200).send({message:data});
    } catch (error) {
        console.log(error);
    }
}

exports.deleteUserById = async (req, res) => {

    try {
        const {id} = req.params.id
        const data = await models.users.destroy({where:{id}})
        if(!data){
        res.status(400).send({message:'user not found'})
        }
    res.status(200).send({message:' deleted successfully'})
    } catch(error){
        res.status(400).send({message:error})
    }
}

// exports.searchByQuery = async (req, res) => {
//     const id = req.params.id
// //onst {name,email,password,contact,gender} = req.body
// const data = await models.users.findByPk(id)
//   res.send({data})
//    console.log(data);

// }

// exports.searchByQuery = async (req, res) => {
//     const id = req.params.id
// const data = await models.users.findAll({attributes:
//   {exclude: ['name', 'email']}})
//   // {include:[[sequelize.fn('COUNT',sequelize.col('email')),'EmailID']]}})
//   res.send(data)
//    console.log(data);
//}
// exports.searchByQuery = async (req, res) => {
//   const name = req.query.name
// const data = await models.users.findAll({where:{name:{[Op.like]:name}}});
// res.send(data)
// }
// exports.searchByQuery = async (req, res) => {
//     const gm = req.query.name
//   const data = await models.users.findAll({where:{name:{[Op.like]:"%"+gm+"%"}}});
//   res.send(data)
//   }
  exports.searchByQuery = async (req, res) => {
    const gm = req.query.name
  const data = await models.users.count({});
  res.send({data})
  }
  






