const sharp = require('sharp');

const uploadController = {
  uploadImage: async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }

      const processedImage = await sharp(req.file.buffer)
        .resize(300, 300, {
          fit: sharp.fit.cover,
          position: sharp.strategy.entropy
        })
        .jpeg({ quality: 90 })
        .toBuffer();

      const base64Image = `data:image/jpeg;base64,${processedImage.toString('base64')}`;
      res.json({ url: base64Image });
    } catch (error) {
      console.error('Image processing error:', error);
      res.status(500).json({ error: 'Failed to process image' });
    }
  }
};

module.exports = uploadController;