import Publisher from '../models/Publisher.js'

// @desc    Get publishers
// @route   GET /api/publishers
// @access  Public
const getPublishers = async (req, res) => {
  const publishers = await Publisher.find({})

  // If no publishers
  if (!publishers?.length) {
    return res.status(404).json({ message: 'No publishers' })
  }

  res.status(200).json(publishers)
}

export {
  getPublishers,
}
