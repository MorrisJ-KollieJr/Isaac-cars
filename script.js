// Profile Modal for Home Page
const profilePic = document.getElementById('profile-pic');
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close-btn');

// Show Modal
profilePic?.addEventListener('click', () => {
    modal.style.display = 'flex';
});

// Close Modal
closeBtn?.addEventListener('click', () => {
    modal.style.display = 'none';
});


