const selectImage = document.querySelector('.select-image');
const inputFile = document.querySelector('#file');
const imgArea = document.querySelector('.img-area');
const uploadImage = document.querySelector("body > section > div.recognization-card > div > div > img")
const imgResult = document.querySelector('.result');
const startBtn = document.querySelector('.start-btn');



selectImage.addEventListener('click', function(){
inputFile.click();
})
let image = null;

inputFile.addEventListener('change', function() {
    let  image = this.files[0]
    if(image.size < 2000000){
    const reader = new FileReader();
    reader.onload = ()=> {
        const allImg = imgArea.querySelectorAll('img');
        allImg.forEach(item=> item.remove());
        const imgUrl = reader.result;
        const img = document.createElement('img')
        img.src = imgUrl;
        imgArea.appendChild(img);
        imgArea.classList.add('active')
        imgArea.dataset.img = image.name;
    }
    reader.readAsDataURL(image);
} else{
    alert("image size mmore than 2MB");
}
})
console.log(image);


startBtn.addEventListener('click', ()=>{


})