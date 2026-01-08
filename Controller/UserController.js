// UserController.js
// Controlador encargado de coordinar el modelo y la vista

class UserController {
  /**
   * @param {UserModel} userModel - Instancia del modelo
   * @param {UserView} userView - Instancia de la vista
   */
  constructor(userModel, userView) {
    this.userModel = userModel;
    this.userView = userView;
  }

  /**
   * Obtiene los usuarios desde el modelo
   * y los muestra en la vista
   */
  fetchAndDisplayUsers() {
    this.userModel.fetchUsers()
      .then(users => {
        this.userView.displayUsers(users);
      })
      .catch(error => {
        console.error('Error al mostrar usuarios:', error);
      });
  }
}