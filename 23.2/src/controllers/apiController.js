const apiController = {
  getPing (_req, res) {
    res.status(200).json({ message: 'pong' })
  }
}

module.exports = apiController;