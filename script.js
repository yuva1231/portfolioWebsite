// Dynamically load images from 'port' folder (img1.jpg to img77.jpg)
const gallery = document.getElementById('gallery');
const totalImages = 77;

for(let i = 1; i <= totalImages; i++) {
  const img = document.createElement('img');
  img.src = `port/img${i}.jpg`;
  img.alt = `Portfolio image ${i}`;
  img.loading = 'lazy';
  gallery.appendChild(img);
}

// Contact form submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(contactForm);
  const name = formData.get('name').trim();
  const email = formData.get('email').trim();
  const message = formData.get('message').trim();

  if(!name || !email || !message) {
    alert('Please fill out all fields.');
    return;
  }

  alert(`Thanks for reaching out, ${name}! I will contact you soon.`);
  contactForm.reset();
});
