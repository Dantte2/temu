const thumbContainer = document.querySelector(".thumbnail-container");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const mainImage = document.getElementById("main-image");
const closeBtn = document.getElementById("closeBtn");
const thumbnails = document.getElementsByClassName("thumbnail");
const modalThumbnails = document.getElementsByClassName("modal-thumbnail");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;

// Thumbnail click: change main image and set active state
for (let i = 0; i < thumbnails.length; i++) {
  thumbnails[i].addEventListener("click", function() {
    switchSource.call(this);
    updateActiveThumbnail(i);
  });
}

function switchSource() {
  mainImage.src = this.src.replace("-thumbnail", "");
  mainImage.alt = this.alt;
}

function updateActiveThumbnail(index) {
  document.querySelectorAll(".thumbnail, .modal-thumbnail").forEach(el => el.classList.remove("active"));
  thumbnails[index].classList.add("active");
  modalThumbnails[index].classList.add("active");
  currentIndex = index;
}

// Open modal when main image clicked
mainImage.addEventListener("click", function() {
  modal.style.display = "flex";
  modalImg.src = mainImage.src;
});

// Close modal (close button)
closeBtn.addEventListener("click", closeModal);
function closeModal() {
  modal.style.display = "none";
}

// Close modal when clicking outside the image
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

// Modal thumbnails
for (let i = 0; i < modalThumbnails.length; i++) {
  modalThumbnails[i].addEventListener("click", function() {
    modalImg.src = this.src.replace("-thumbnail", "");
    updateActiveThumbnail(i);
  });
}

// Arrow navigation
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + modalThumbnails.length) % modalThumbnails.length;
  changeModalImage(currentIndex);
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % modalThumbnails.length;
  changeModalImage(currentIndex);
});

function changeModalImage(index) {
  modalImg.src = modalThumbnails[index].src.replace("-thumbnail", "");
  updateActiveThumbnail(index);
}

// ---------------- CART & QUANTITY ---------------- //
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
      <button class="delete-btn">
        <img src="images/icon-delete.svg" alt="Delete">
      </button>
    </div>
    <button class="checkout-btn">Checkout</button>
  `;

  document.querySelector('.delete-btn').addEventListener('click', () => {
    cartContent.innerHTML = `<p class="empty-msg">Your cart is empty.</p>`;
  });

  quantity = 0;
  quantityInput.value = 0;
});

cartIcon.addEventListener('click', () => {
  cartPopup.classList.toggle('show');
});
