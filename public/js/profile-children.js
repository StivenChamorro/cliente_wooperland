document.addEventListener('DOMContentLoaded', function () {
    loadStoredData();
    setupEventListeners();
    
});

function loadStoredData() {
    const storedUsername = localStorage.getItem('wooperland_username');
    const storedAbout = localStorage.getItem('wooperland_about');
    const storedProfileImage = localStorage.getItem('wooperland_profile_image');

    if (storedUsername) {
        const usernameElement = document.querySelector('.child-user-info h2');
        if (usernameElement) {
            usernameElement.textContent = storedUsername + ' ';
            const editButton = document.createElement('button');
            editButton.className = 'child-edit-button';
            editButton.innerHTML = '✏️';
            editButton.onclick = () => openChildModal('childUsernameModal');
            usernameElement.appendChild(editButton);
        }
    }

    const aboutText = document.getElementById('childAboutText');
    if (aboutText && storedAbout) {
        aboutText.textContent = storedAbout;
    }

    const profileImage = document.getElementById('childProfileImage');
    if (profileImage && storedProfileImage) {
        profileImage.src = storedProfileImage;
    }
}

function setupEventListeners() {
    // Handle image upload
    const fileInput = document.getElementById('childFileInput');
    if (fileInput) {
        fileInput.addEventListener('change', function (e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    const profileImage = document.getElementById('childProfileImage');
                    if (profileImage) {
                        profileImage.src = e.target.result;
                        localStorage.setItem('wooperland_profile_image', e.target.result);
                    }
                };
                reader.readAsDataURL(file);
            }
        });
    }

    // Character count for username
    const usernameInput = document.getElementById('childUsernameInput');
    if (usernameInput) {
        usernameInput.addEventListener('input', function (e) {
            updateCharacterCount(e.target, 25);
        });
    }

    // Character count for about section
    const aboutInput = document.getElementById('childAboutInput');
    if (aboutInput) {
        aboutInput.addEventListener('input', function (e) {
            updateCharacterCount(e.target, 200);
        });
    }
}

function updateCharacterCount(element, max) {
    const count = element.value.length;
    const characterCountElement = element.parentElement.querySelector('.child-character-count');
    if (characterCountElement) {
        characterCountElement.textContent = `${count}/${max}`;
    }
}

function openChildModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('show'); // Muestra el modal

        if (modalId === 'childUsernameModal') {
            const currentUsername = document.querySelector('.child-user-info h2').textContent.trim();
            document.getElementById('childUsernameInput').value = currentUsername.replace('✏️', '').trim();
        } else if (modalId === 'childAboutModal') {
            const aboutText = document.getElementById('childAboutText');
            if (aboutText) {
                document.getElementById('childAboutInput').value = aboutText.textContent.trim();
            }
        }
    }
}

function closeChildModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('show'); // Oculta el modal
    }
}

function saveChildUsername() {
    const newUsername = document.getElementById('childUsernameInput').value.trim();
    const childId = localStorage.getItem('selectedChildId');
    const token = localStorage.getItem('token');

    if (newUsername) {
        fetch(`https://backend-production-40d8.up.railway.app/v1/children/update/${childId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({ nickname: newUsername })
        })
        .then(response => response.json())
        .then(data => {
            if (response.ok) { // Validamos si la respuesta fue exitosa
                // Actualiza en localStorage y DOM con `data.children`
                localStorage.setItem('wooperland_username', data.children.nickname);
                const usernameElement = document.querySelector('.child-user-info h2');
                if (usernameElement) {
                    usernameElement.textContent = data.children.nickname + ' ';
                }
                closeChildModal('childUsernameModal');
                alert(data.message); // Muestra el mensaje del servidor
            } else {
                alert(`Error: ${data.message || 'No se pudo guardar el nombre de usuario'}`);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Hubo un problema al actualizar los datos.');
        });
    }
}

function saveChildAbout() {
    const newAbout = document.getElementById('childAboutInput').value.trim();
    const childId = localStorage.getItem('selectedChildId');
    const token = localStorage.getItem('token');

    if (!newAbout) {
        alert('La descripción no puede estar vacía.');
        return;
    }

    fetch(`https://backend-production-40d8.up.railway.app/v1/children/update/${childId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ about: newAbout })
    })
        .then(async (response) => {
            const data = await response.json();

            if (response.ok) {
                // Actualizar en localStorage
                localStorage.setItem('wooperland_about', newAbout);

                // Actualizar el texto en la vista
                const aboutText = document.getElementById('childAboutText');
                if (aboutText) {
                    aboutText.textContent = newAbout;
                }

                // Cerrar el modal y notificar éxito
                closeChildModal('childAboutModal');
                alert(data.message || 'Descripción actualizada con éxito');
            } else {
                alert(`Error: ${data.message || 'No se pudo actualizar la descripción'}`);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Hubo un problema al actualizar los datos.');
        });
}



