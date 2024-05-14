const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
	// find all categories
	// be sure to include its associated Products
	try {
		const categoryData = await Category.findAll({ include: Product });

		if (categoryData.length > 0) {
			res.status(200).json(categoryData);
		} else {
			res.status(404).json({ message: 'There is no category data' });
		}
	} catch (error) {
		res.status(500).json(error);
	}
});

router.get('/:id', async (req, res) => {
	// find one category by its `id` value
	// be sure to include its associated Products
	try {
		const categoryId = req.params.id;

		const categoryData = await Category.findByPk(categoryId, { include: Product });

		if (categoryData) {
			res.status(200).json(categoryData);
		} else {
			res.status(404).json({ message: 'There is no category data' });
		}
	} catch (error) {
		res.status(500).json(error);
	}
});

router.post('/', async (req, res) => {
	// create a new category
	try {
		const categoryName = req.body.category_name;

		const createCategory = await Category.create({
			category_name: categoryName,
		});

		if (createCategory) {
			res.status(200).json(createCategory);
		} else {
			res.status(404).json({ message: 'Failed to create category' });
		}
	} catch (error) {
		res.status(500).json(error);
	}
});

router.put('/:id', (req, res) => {
	// update a category by its `id` value
});

router.delete('/:id', (req, res) => {
	// delete a category by its `id` value
});

module.exports = router;
