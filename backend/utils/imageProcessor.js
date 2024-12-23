const sharp = require('sharp');

const processImage = async (buffer) => {
  try {
    const processedImage = await sharp(buffer)
      .resize(300, 300, {
        fit: sharp.fit.cover,
        position: sharp.strategy.entropy
      })
      .jpeg({ quality: 90 })
      .toBuffer();

    return processedImage;
  } catch (error) {
    throw new Error('Image processing failed');
  }
};

module.exports = { processImage };