//Initialization

const next =  document.getElementById('next-btn');
const prev = document.getElementById('previous');
let images = document.querySelectorAll('.image_wrapper');
// Functions

const correct_height = function (img) {
  img[3].classList.add("main_image");
  img[0].classList.add("secondary_image_3");
  img[6].classList.add("secondary_image_3");
  img[1].classList.add("secondary_image_2");
  img[5].classList.add("secondary_image_2");
  img[2].classList.add("secondary_image_1");
  img[4].classList.add("secondary_image_1");
};


function removeClasses()
{
  images[3].classList.remove("main_image");
  images[0].classList.remove("secondary_image_3");
  images[6].classList.remove("secondary_image_3");
  images[1].classList.remove("secondary_image_2");
  images[5].classList.remove("secondary_image_2");
  images[2].classList.remove("secondary_image_1");
  images[4].classList.remove("secondary_image_1");
}

correct_height(images);
next.addEventListener('click', ()=> {
 
  move_forward_carousel();
  
})
prev.addEventListener('click', () => {
move_backward_carousel();
})

const move_forward_carousel =  function() {
  const firstImage = images[0];
  const parent = firstImage.parentNode;
  parent.removeChild(firstImage);
  parent.appendChild(firstImage);
  removeClasses();


  images = document.querySelectorAll('.image_wrapper');
  correct_height(images);


  console.log(images)

}
const move_backward_carousel =  function() {
  const lastImage = images[images.length - 1];
  const parent = lastImage.parentNode;


  parent.removeChild(lastImage);


  parent.insertBefore(lastImage, parent.firstElementChild);


  removeClasses();
  images = document.querySelectorAll('.image_wrapper');

  // Additional operations if needed
  
  correct_height(images);

  console.log(images);

}
