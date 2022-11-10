const express = require("express");
const app = express();
const bodyParse = require("body-parser");

app.use(bodyParse.urlencoded({extended:true}));
app.use(bodyParse.json());

let db = {
  user:[
    {id:1, nome:"lauricio",idade:22,email:"developerwebmasterpro@gmail.com"},
    {id:2, nome:"mariana",idade:32,email:"marianasilva@gmail.com"},
    {id:3, nome:"joana",idade:21,email:"joanadark@gmail.com"},
    {id:4, nome:"carla",idade:16,email:"carlaperez@gmail.com"},
  ]
}


app.get("/users",(req,res) =>{
res.json(db);
  res.sendStatus(200);
})

app.get("/user/:id", (req,res) =>{
if(isNaN(req.params.id)){
res.sendStatus(400)
}else{
let users = db.user.find(user => user.id == req.params.id);
  res.json(users);
  res.sendStatus(200);
}
});

app.post("/user",(req,res) =>{
let {id,nome,idade,email} = req.body
  if(id,nome,idade,email){
  db.user.push(
    {
      id,
      nome,
      idade,
      email
    }
  )

  res.sendStatus(200)
  }else{
    res.send(404);
  }

})

app.delete("/user/:id",(req,res) =>{
if(isNaN(req.params.id)){
res.sendStatus(400);
}else{
let id = parseInt(req.params.id);
  let index = db.user.findIndex(user => user.id = id);
  if(index !== undefined){
   db.user.splice(index,1);
    res.sendStatus(200);
  }else{
  res.sendStatus(400);
  }
}

});


app.put("/user/:id",(req,res) =>{
if(isNaN(req.params.id)){
res.sendStatus(400);
}else{
  let {id,nome,idade,email} = req.body;

let index = parseInt(req.params.id);
  let users = db.user.find(user => user.id == index);

  if(id !== undefined){
  users.id = id;
  }

  if(nome !== undefined){
  users.nome = nome;
  }

  if(idade !== undefined){
   users.idade = idade;
  }

  if(email !== undefined){
    users.email = email;
  }

  res.sendStatus(200);
}


})

app.listen(3000, (erro) =>{
if(erro){
console.log("erro ao execultar");
}else{
console.log("servidor online!");
}
});
