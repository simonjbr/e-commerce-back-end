const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
	// find all tags
	// be sure to include its associated Product data
	try {
		const tagData = await Tag.findAll({ include: Product });

		if (tagData.length > 0) {
			res.status(200).json(tagData);
		} else {
			res.status(404).json({ message: 'There is no tag data' });
		}
	} catch (error) {
		res.status(500).json(error);
	}
});

router.get('/:id', async (req, res) => {
	// find a single tag by its `id`
	// be sure to include its associated Product data
	try {
		const tagId = req.params.id;

		const tagData = await Tag.findByPk(tagId, { include: Product });

		if (tagData) {
			res.status(200).json(tagData);
		} else {
			res.status(404).json({ message: 'There is no tag data' });
		}
	} catch (error) {
		res.status(500).json(error);
	}
});

router.post('/', async (req, res) => {
	// create a new tag
	try {
		const tagName = req.body.tag_name;

		const createTag = await Tag.create({
			tag_name: tagName,
		});

		if (createTag) {
			res.status(200).json(createTag);
		} else {
			res.status(404).json({ message: 'Failed to create tag' });
		}
	} catch (error) {
		res.status(500).json(error);
	}
});

router.put('/:id', async (req, res) => {
	// update a tag's name by its `id` value
	try {
		const tagId = req.params.id;
		const tagName = req.body.tag_name;

		const tagData = await Tag.findByPk(tagId);

		if (tagData && tagName) {
			const updateTag = await Tag.update({
				tag_name: tagName,
			},
			{
				where: {
					id: tagId
				}
			});
			res.status(200).json(updateTag);
		} else {
			res.status(404).json({ message: 'Failed to update tag' });
		}
	} catch (error) {
		res.status(500).json(error);
	}
});

router.delete('/:id', (req, res) => {
	// delete on tag by its `id` value
});

module.exports = router;
