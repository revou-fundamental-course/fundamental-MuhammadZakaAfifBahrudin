// toggle menu
const toggleMenu = document.getElementById('toggle-menu')
const navbar = document.getElementById('nav-links')

toggleMenu.addEventListener('click', () => {
    navbar.classList.toggle('show')
})


const images = [
    'asset/product2.jpg',
    'asset/product3.jpg',
    'asset/product1.jpg',
];

let currentIndex = 0;

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById('carousel-image').src = images[currentIndex];
}



// validasi message
function validateForm() {
    let name = document.getElementById('name-input').value;
    let date = document.getElementById('date-input').value;
    let gender = document.querySelector('input[name="gender"]:checked');
    let message = document.getElementById('pesan').value;
    

    if (name != '' && date != '' && gender != null && message != '') {
        document.getElementById('name1').innerHTML = name;
        document.getElementById('date').innerHTML = date;
        document.getElementById('gender').innerHTML = gender.value == 'male' ? 'Laki-laki' : 'Perempuan';
        document.getElementById('messages').innerHTML = message;
    } else {
        alert('inputan ada yang kososng');
    }
}


