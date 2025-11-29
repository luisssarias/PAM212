import { Usuario } from '../models/usuario';
import DatabaseService from '../database/DatabaseService';

export class UsuarioController {

    constructor() {
        this.listeners = [];
    }

    // Inicializar BD
    async initialize() {
        await DatabaseService.initialize();
    }

    // Obtener usuarios
    async obtenerUsuarios() {
        try {
            const data = await DatabaseService.getAll();
            return data.map(u => new Usuario(u.id, u.nombre, u.fecha_creacion));
        } catch (error) {
            console.error('Error al obtener usuarios:', error);
            throw new Error('No se pudieron cargar los usuarios');
        }
    }

    // Crear usuario
    async crearUsuario(nombre) {
        try {
            Usuario.validar(nombre);
            const nuevoUsuario = await DatabaseService.add(nombre.trim());

            this.notifyListeners();

            return new Usuario(
                nuevoUsuario.id,
                nuevoUsuario.nombre,
                nuevoUsuario.fecha_creacion
            );

        } catch (error) {
            console.error('Error al crear usuario:', error);
            throw error;
        }
    }

    // Eliminar usuario
    async eliminarUsuario(id) {
        try {
            await DatabaseService.delete(id);
            this.notifyListeners();
            return true;

        } catch (error) {
            console.error('Error al eliminar usuario:', error);
            throw new Error('No se pudo eliminar el usuario');
        }
    }

    // Actualizar usuario
    async actualizarUsuario(id, nombre) {
        try {
            Usuario.validar(nombre);
            await DatabaseService.update(id, nombre.trim());
            this.notifyListeners();
            return true;

        } catch (error) {
            console.error('Error al actualizar usuario:', error);
            throw new Error('No se pudo actualizar el usuario');
        }
    }

    // Observadores (MVC)
    addListener(callback) {
        this.listeners.push(callback);
    }

    removeListener(callback) {
        this.listeners = this.listeners.filter(l => l !== callback);
    }

    notifyListeners() {
        this.listeners.forEach(callback => callback());
    }
}
