// UserModel.js
// Clase encargada de manejar la representación de los datos de usuario.
class UserModel {
  constructor() {
    // Propiedad donde se almacenarán los usuarios obtenidos
    this.users = [];
  }
fetchUsers() {
    return $.get('https://jsonplaceholder.typicode.com/users')
      .then((data) => {
        // Convertimos los datos crudos en instancias del modelo
        this.users = data.map(user => UserModel.fromApiData(user));
        return this.users;
      })
      .catch((error) => {
        console.error('Error al obtener usuarios:', error);
      });
  }
  /**
   * Método estático para crear una instancia de UserModel a partir de datos de la API.
   * @param {Object} userData - Datos del usuario obtenidos de la API.
   * @returns {UserModel} - Instancia de UserModel.
   */
 static fromApiData(userData) {
    return {
      id: userData.id,
      name: userData.name,
      username: userData.username,
      email: userData.email,
      phone: userData.phone,
      website: userData.website,
      company: userData.company.name
    };
  }
}
