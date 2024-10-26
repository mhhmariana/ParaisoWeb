    // Función para hacer scroll a la sección de reservas
    function scrollToSection(sectionId) {
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    }
    function openModal(modalId) {
        document.getElementById(modalId).style.display = 'block';
        }
        
        function closeModal(modalId) {
        document.getElementById(modalId).style.display = 'none';
        }
        
      // Cerrar el modal al hacer clic fuera de él
        window.onclick = function(event) {
        const loginModal = document.getElementById('loginModal');
        const registerModal = document.getElementById('registerModal');
        
        if (event.target === loginModal) {
        loginModal.style.display = 'none';
        }
        if (event.target === registerModal) {
        registerModal.style.display = 'none';
        }
    }
        
    function openModal(modalId) {
        document.getElementById(modalId).style.display = 'block';
    }
    
    function closeModal(modalId) {
        document.getElementById(modalId).style.display = 'none';
    }