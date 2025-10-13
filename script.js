const thumbContainer = document.querySelector(".thumbnail-container");
const modal = document.getElementById("modal");
const modalImg = modal.querySelector(".modal-content");
const captionText = document.getElementById("caption");
const mainImage = document.getElementById("main-image");
const closeBtn = document.querySelector(".close");
const thumbnails = document.getElementsByClassName("thumbnail");
const modalThumbnails = document.getElementsByClassName("modal-thumbnail");

//-----------changes the active thumbnail
for (let i = 0; i < thumbnails.length; i++) {
        thumbnails[i].addEventListener("click", switchSource);


    thumbnails[i].addEventListener("click", function()
     {
        const activeThumb = document.querySelector(".thumbnail.active");

        if (activeThumb) {
            activeThumb.classList.remove("active");
        }
        thumbnails[i].classList.add("active");
        modalThumbnails[i].classList.add("active");
        for (let j = 0; j < modalThumbnails.length; j++) {
            if (j !== i) {
                modalThumbnails[j].classList.remove("active");

            }

        }
    });
}


//-----------changes the source of the main image
function switchSource() {
    mainImage.src = this.src.replace("-thumbnail", "");
    mainImage.alt = this.alt;
    
}
// ----------- modal stuff -----------------
mainImage.addEventListener("click", function() {
    modal.style.display = "block";
    modalImg.src = mainImage.src;

});

closeBtn.addEventListener("click", closeModal);
function closeModal() {
    modal.style.display = "none";
}


function switchModalSource() {
    modalImg.src = this.src.replace("-thumbnail", "");
    modalImg.alt = this.alt;
}

//-----------changes the source of the modal image and the main image when clicked

for (let i = 0; i < modalThumbnails.length; i++) {
    modalThumbnails[i].addEventListener("click", switchModalSource);

    modalThumbnails[i].addEventListener("click", function () {
        const activeThumb = document.querySelector(".modal-thumbnail.active");

        if (activeThumb) {
            activeThumb.classList.remove("active");
        }
        modalThumbnails[i].classList.add("active");
        thumbnails[i].classList.add("active");
        for (let j = 0; j < thumbnails.length; j++) {
            if (j !== i) {
                thumbnails[j].classList.remove("active");
                mainImage.src = thumbnails[i].src.replace("-thumbnail", "");
                mainImage.alt = thumbnails[i].alt;
            }
        }
    });
}
<<<<<<< HEAD

const decreaseBtn = document.getElementById('decrease');
const increaseBtn = document.getElementById('increase');
const quantityInput = document.getElementById('quantity');
const addToCartBtn = document.querySelector('.add-to-cart-btn');
const cartIcon = document.querySelector('.cart-icon');
const cartPopup = document.getElementById('cart');
const cartContent = document.getElementById('cart-content');

let quantity = 0;

increaseBtn.addEventListener('click', () => {
    quantity++;
    quantityInput.value = quantity;
});

decreaseBtn.addEventListener('click', () => {
    if (quantity > 0) {
        quantity--;
        quantityInput.value = quantity;
    }
});
addToCartBtn.addEventListener('click', () => {
if (quantity === 0) return;

    const price = 125.00;
    const total = (price * quantity).toFixed(2);

    cartContent.innerHTML = `
    <div class="cart-item">
      <img src="images/image-product-1-thumbnail.jpg" alt="Shoe">
      <div class="cart-details">
        <p>Fall Limited Edition Sneakers</p>
        <span>$${price.toFixed(2)} x ${quantity}</span> <strong>$${total}</strong>
      </div>
      <button class ="delete-btn">
        <img src="images/icon-delete.svg" alt="Delete">
      </button>
    </div>
    <button class="checkout-btn">Checkout</button>`

    document.querySelector('.delete-btn').addEventListener('click', () => {
        cartContent.innerHTML = `<p class="empty-msg">Your cart is empty.</p>`;
  });

  quantity = 0;
  quantityInput.value = 0;
});

cartIcon.addEventListener('click', () => {
  cartPopup.classList.toggle('hidden');
});
=======
>>>>>>> d39257b4358c91d1a499140e56ea57bc49cc547e
