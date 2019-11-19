const sharp = require("sharp");

const images = [
  "images/01.jpg",
  "images/02.jpg",
];

const init = async () => {
  await images.map(async image => {
    const [path, file] = image.split("/");
    const [filename, ext] = file.split(".");

    await sharp(image)
      .resize(50)
      .toFile(`${path}/${filename}-50.${ext}`);
    })
  console.log(images);
};

init();