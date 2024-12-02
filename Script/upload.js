const selectImage = document.querySelector('.select-image');
const inputFile = document.querySelector('#file');
const imgArea = document.querySelector('.img-area');
const imgResult = document.querySelector('.result');
const startBtn = document.querySelector('.start-btn');

let uploadImage; // Declare the variable at a higher scope

selectImage.addEventListener('click', function () {
    inputFile.click();
});

inputFile.addEventListener('change', function () {
    const image = this.files[0]; // Assign the uploaded file to a variable
    if (image.size < 2000000) { // Check if the image size is less than 2MB
        const reader = new FileReader();
        reader.onload = () => {
            const allImg = imgArea.querySelectorAll('img');
            allImg.forEach(item => item.remove()); // Remove any existing images
            const imgUrl = reader.result;
            const img = document.createElement('img');
            img.src = imgUrl;
            imgArea.appendChild(img);
            imgArea.classList.add('active');
            imgArea.dataset.img = image.name;

            uploadImage = image; // Assign the file to the higher-scoped variable
        };
        reader.readAsDataURL(image);
    } else {
        alert("Image size is more than 2MB");
    }
});

startBtn.addEventListener('click', () => {
    if (uploadImage) {
        imgResult.innerHTML = "Thumbs up image"
    } else {
        imgResult.innerHTML = "No image uploaded yet"
    }
});
