const Category = require('../models/category.model');

const createCategory = async (req, res) => {
    if (req.body) {
        const category = new Category(req.body);
        category.save()
            .then(data => {
                res.status(200).send({ data: data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

// const getAllCategories = async (req, res) => {
//     const posts = await Category.find()
//     res.send(posts)
// }
const getAllCategories = async (req, res) => {
    await Category.find({}).populate('vehicles', 'code model type name')
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
}

const getVehiclesForCategory = async (req, res) => {
    if (req.params && req.params.id) {
        const vehicle = await Category.findById(req.params.id)
            .populate('vehicles', 'code model type name')
            .then(data => {
                res.status(200).send({ data: data.vehicles });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

module.exports = {
    createCategory, getAllCategories, getVehiclesForCategory
}