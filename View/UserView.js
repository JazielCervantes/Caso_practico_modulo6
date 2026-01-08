// UserView.js
// Clase encargada de mostrar los datos de usuario en la interfaz.
class UserView {
  constructor() {
    // Referencia al contenedor donde se mostrarán los usuarios
    this.$userContainer = $('#user-container');
  }

  /**
   * Método para mostrar la lista de usuarios en el DOM.
   * @param {Array<UserModel>} users - Lista de usuarios a mostrar.
   */
  displayUsers(users) {
    // Limpiar el contenido previo del contenedor.
    this.$userContainer.empty();
    
    // Iterar sobre la lista de usuarios y crear elementos HTML para cada uno.
    users.forEach(user => {
      const $userCard = $(`
        <div class="user-card">
          <h3>${user.name}</h3>
          <p><strong>Username:</strong> ${user.username}</p>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Phone:</strong> ${user.phone}</p>
          <p><strong>Website:</strong> 
            <a href="http://${user.website}" target="_blank">${user.website}</a>
          </p>
          <p><strong>Company:</strong> ${user.company}</p>
        </div>
      `);
      // Agregar el elemento al contenedor de usuarios.
      this.$userContainer.append($userCard);
    });
  }
}
