document.addEventListener('DOMContentLoaded', function () {
    loadStoredData();
    setupEventListeners();
});

function loadStoredData() {
    const storedUsername = localStorage.getItem('wooperland_username');
    const storedAbout = localStorage.getItem('wooperland_about');
    const storedProfileImage = localStorage.getItem('wooperland_profile_image');

    if (storedUsername) {
        updateNicknameElement(storedUsername);
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
    const fileInput = document.getElementById('childFileInput');
    if (fileInput) {
        fileInput.addEventListener('change', function (e) {
            const file = e.target.files[0];
            if (file) {
                const formData = new FormData();
                formData.append('avatar', file);

                const childId = localStorage.getItem('selectedChildId');
                const token = localStorage.getItem('token');

                fetch(`https://backend-production-40d8.up.railway.app/v1/children/update/${childId}`, {
                    method: 'PUT',
                    headers: { 'Authorization': `Bearer ${token}` },
                    body: formData,
                })
                    .then(async (response) => {
                        const data = await response.json();
                        if (response.ok) {
                            const profileImage = document.getElementById('childProfileImage');
                            profileImage.src = data.children.avatar;

                            localStorage.setItem('wooperland_profile_image', data.children.avatar);

                            alert(data.message || 'Imagen actualizada con éxito');
                        } else {
                            alert(`Error: ${data.message || 'No se pudo actualizar la imagen'}`);
                        }
                    })
                    .catch((error) => {
                        console.error('Error:', error);
                        alert('Hubo un problema al subir la imagen.');
                    });
            }
        });
    }

    document.getElementById('childUsernameInput')?.addEventListener('input', function (e) {
        updateCharacterCount(e.target, 25);
    });

    document.getElementById('childAboutInput')?.addEventListener('input', function (e) {
        updateCharacterCount(e.target, 200);
    });
}

function updateCharacterCount(element, max) {
    const count = element.value.length;
    const characterCountElement = element.parentElement.querySelector('.child-character-count');
    if (characterCountElement) {
        characterCountElement.textContent = `${count}/${max}`;
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
            body: JSON.stringify({ nickname: newUsername }),
        })
            .then(async (response) => {
                const data = await response.json();
                if (response.ok) {
                    localStorage.setItem('wooperland_username', data.children.nickname);
                    updateNicknameElement(data.children.nickname);
                    closeChildModal('childUsernameModal');
                    alert(data.message || 'Nombre de usuario actualizado con éxito');
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

function updateNicknameElement(nickname) {
    const usernameElement = document.querySelector('.child-user-info h2');

    if (usernameElement) {
        // Eliminar contenido previo (si existe)
        usernameElement.textContent = '';

        // Agregar el nickname
        usernameElement.textContent = nickname + '';

        // Crear el botón de edición
        const editButton = document.createElement('button');
        editButton.className = 'child-edit-button';
        editButton.innerHTML = '✏️';
        editButton.onclick = () => openChildModal('childUsernameModal');

        // Agregar el botón al elemento
        usernameElement.appendChild(editButton);
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
                localStorage.setItem('wooperland_about', newAbout);
                const aboutText = document.getElementById('childAboutText');
                if (aboutText) {
                    aboutText.textContent = newAbout;
                }
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

function openChildModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'flex';
    }
}

function closeChildModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    }
}
