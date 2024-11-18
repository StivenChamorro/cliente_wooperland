document.addEventListener('DOMContentLoaded', function() {
    loadStoredData();
    setupEventListeners();
});

function loadStoredData() {
    const storedUsername = localStorage.getItem('wooperland_username');
    const storedAbout = localStorage.getItem('wooperland_about');
    const storedProfileImage = localStorage.getItem('wooperland_profile_image');

    if (storedUsername) {
        document.querySelector('.profile-children .user-info h2').textContent = storedUsername + ' ';
        const editButton = document.createElement('button');
        editButton.className = 'edit-button';
        editButton.innerHTML = '✏️';
        editButton.onclick = () => openModal('usernameModal');
        document.querySelector('.profile-children .user-info h2').appendChild(editButton);
    }

    if (storedAbout) {
        document.getElementById('aboutText').textContent = storedAbout;
    }

    if (storedProfileImage) {
        document.getElementById('profileImage').src = storedProfileImage;
    }
}

function setupEventListeners() {
    // Handle image upload
    document.getElementById('fileInput').addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById('profileImage').src = e.target.result;
                localStorage.setItem('wooperland_profile_image', e.target.result);
            };
            reader.readAsDataURL(file);
        }
    });

    // Character count for username
    document.getElementById('usernameInput').addEventListener('input', function(e) {
        updateCharacterCount(e.target, 25);
    });

    // Character count for about section
    document.getElementById('aboutInput').addEventListener('input', function(e) {
        updateCharacterCount(e.target, 200);
    });
}

function updateCharacterCount(element, max) {
    const count = element.value.length;
    element.parentElement.querySelector('.character-count').textContent = `${count}/${max}`;
}

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'flex';
    
    // Fill the inputs with current values
    if (modalId === 'usernameModal') {
        const currentUsername = document.querySelector('.profile-children .user-info h2').textContent.trim();
        document.getElementById('usernameInput').value = currentUsername.replace('✏️', '');
    } else if (modalId === 'aboutModal') {
        const currentAbout = document.getElementById('aboutText').textContent;
        document.getElementById('aboutInput').value = currentAbout;
    }
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function saveUsername() {
    const newUsername = document.getElementById('usernameInput').value;
    if (newUsername.trim()) {
        localStorage.setItem('wooperland_username', newUsername);
        document.querySelector('.profile-children .user-info h2').textContent = newUsername + ' ';
        const editButton = document.createElement('button');
        editButton.className = 'edit-button';
        editButton.innerHTML = '✏️';
        editButton.onclick = () => openModal('usernameModal');
        document.querySelector('.profile-children .user-info h2').appendChild(editButton);
    }
    closeModal('usernameModal');
}

function saveAbout() {
    const newAbout = document.getElementById('aboutInput').value;
    if (newAbout.trim()) {
        localStorage.setItem('wooperland_about', newAbout);
        document.getElementById('aboutText').textContent = newAbout;
    }
    closeModal('aboutModal');
}
