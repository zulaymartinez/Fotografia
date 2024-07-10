document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevenir el envío del formulario por defecto
      
      // Obtener los valores de los campos del formulario
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      
      // Validar los campos del formulario
      if (name === '' || email === '' || message === '') {
        alert('Por favor, completa todos los campos.');
        return;
      }
  
      if (!validateEmail(email)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return;
      }
  
      // Aquí puedes enviar los datos a tu servidor o API
      // Por ahora, solo mostramos los datos en la consola
      console.log('Nombre:', name);
      console.log('Correo electrónico:', email);
      console.log('Mensaje:', message);
  
      // Mostrar un mensaje de confirmación
      alert('¡Tu mensaje ha sido enviado exitosamente!');
  
      // Limpiar el formulario después del envío
      form.reset();
    });
  
    // Función para validar el formato del correo electrónico
    function validateEmail(email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    }
  });
  