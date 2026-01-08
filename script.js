// script.js
// Archivo principal que integra el modelo, la vista y el controlador para iniciar la aplicación.

$(document).ready(() => {
  // Crear instancia del modelo
  const userModel = new UserModel();

  // Crear instancia de la vista
  const userView = new UserView();

  // Crear instancia del controlador, pasando modelo y vista
  const userController = new UserController(userModel, userView);

  // Iniciar el flujo de la aplicación
  userController.fetchAndDisplayUsers();
});
