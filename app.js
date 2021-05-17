const moduloTareas = require('./tareas/funcionesDeTareas.js');

switch (process.argv[2]){//Utilizo el 'switch' para que busque en la segunda posición del process(tercera en la terminal) el argumento que le voy a dar
    case 'listar':
        moduloTareas.listarTareas();//Se ejecuta tareas
        break;
    case 'crear':
        process.argv[3] ? moduloTareas.nuevasTareas(process.argv[3],process.argv[4]) : console.log('Debes ingresar un título');
        break;
    case 'filtrar':
        moduloTareas.filtarPorEstado(process.argv[3]);
        break;
    case 'borrar':
        moduloTareas.borrar();
        break;
    default:
        console.log('No entiendo qué quieres hacer');//en caso de que haya cualquier otro string en el la segunda posición del process la consola nos devuelve que no nos entiende.
        break
}