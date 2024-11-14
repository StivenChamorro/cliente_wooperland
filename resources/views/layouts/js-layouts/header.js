
document.addEventListener('DOMContentLoaded', function() {
    const buttonProfile = document.querySelector('.button-profile');
    const profileModal = document.querySelector('.modal');
    const changePlayerModal = document.getElementById('changePlayerModal');
    const adultProfileModal = document.getElementById('adultProfileModal');
    let activeModal = null;

    function toggleDropdown(modal) {
        if (activeModal === modal) {
            closeDropdown(modal);
            activeModal = null;
        } else {
            if (activeModal) {
                closeDropdown(activeModal);
            }
            openDropdown(modal);
            activeModal = modal;
        }
    }

    function openDropdown(modal) {
        modal.style.display = 'block';
        setTimeout(() => {
            modal.style.opacity = '1';
            modal.style.transform = 'translateY(0)';
        }, 10);
    }

    function closeDropdown(modal) {
        modal.style.opacity = '0';
        modal.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    }

    function handleClickOutside(event) {
        if (activeModal && !activeModal.contains(event.target) && event.target !== buttonProfile) {
            closeDropdown(activeModal);
            activeModal = null;
        }
    }

    buttonProfile.addEventListener('click', function(event) {
        event.stopPropagation();
        toggleDropdown(profileModal);
    });

    // Add event listener for the "Cambiar de jugador" option
    const changePlayerOption = document.querySelector('a[href="#change-player"]');
    changePlayerOption.addEventListener('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        closeDropdown(profileModal);
        toggleDropdown(changePlayerModal);
    });

    // Add event listener for the close button in the change player modal
    const closeChangePlayerModal = changePlayerModal.querySelector('.back2');
    closeChangePlayerModal.addEventListener('click', function() {
        closeDropdown(changePlayerModal);
        activeModal = null;
    });

    // Add event listener for the "Perfil Adulto" option
    const adultProfileOption = document.querySelector('a[href="#adult-profile"]');
    adultProfileOption.addEventListener('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        closeDropdown(profileModal);
        toggleDropdown(adultProfileModal);
    });

    // Add event listener for the close button in the adult profile modal
    const closeAdultProfileModal = adultProfileModal.querySelector('.back2');
    closeAdultProfileModal.addEventListener('click', function() {
        closeDropdown(adultProfileModal);
        activeModal = null;
    });

    document.addEventListener('click', handleClickOutside);
});

//funcion perfil padre
document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('.pin-input');

    inputs.forEach((input, index) => {
        input.addEventListener('input', function(e) {
            if (e.target.value.length === 1) {
                if (index < inputs.length - 1) {
                    inputs[index + 1].focus();
                }
            }
        });

        input.addEventListener('keydown', function(e) {
            if (e.key === 'Backspace' && e.target.value === '' && index > 0) {
                inputs[index - 1].focus();
            }
        });
    });

    // Enfocar el primer input al cargar la página
    inputs[0].focus();
});