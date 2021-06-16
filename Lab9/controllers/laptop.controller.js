const Laptop = require('../models/laptop.model');

let laptops = [];

exports.getAll = (req, res) =>{
    res.status(200).send(laptops);
    console.log(laptops);
    console.log("Get all laptops");
};

exports.add = (req, res) => {
    console.log(req.body);
    console.log("Laptop added");
    const laptop = new Laptop(req.body.id, req.body.type,req.body.company,req.body.model, req.body.price);
    laptops.push(laptop);
    res.status(201).send(laptop);
};

exports.update = (req, res) => {
    const index = laptops.findIndex(a => a.id === req.body.id);
    if(index != -1){
        laptops[index].type = req.body.type;
        laptops[index].company = req.body.company;
        laptops[index].model = req.body.model;
        laptops[index].price = req.body.price;
        res.status(202).send(laptops);
        console.log(req.body.id);
        console.log("Laptops upadated");
    }else{
        res.status(304).send();
    }
};

exports.delete = (req,res)=>{
    console.log(req.params.id);
    const newLaptop = laptops.filter(a => a.id != req.params.id);
    laptops = newLaptop;
    res.status(202).send(laptops);
    console.log("Laptops deleted");
};