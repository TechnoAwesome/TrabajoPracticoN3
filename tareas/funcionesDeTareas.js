const fs = require('fs');
const tareas = JSON.parse(fs.readFileSync('./db/tareas.json','utf-8'));

module.exports = {
    listarTareas : function(){
        tareas.forEach(tarea => {
            console.log(tarea);
        });
    },
    escribrirJSON : function(tareas){
        fs.writeFileSync('./db/tareas.json',JSON.stringify(tareas,null,2),'utf-8');
    },
    nuevasTareas : function(titulo,estado = 'Pendiente'){
        let nuevaTarea = {
            titulo,
            estado
        }
        tareas.push(nuevaTarea);
        this.escribrirJSON(tareas);
        this.listarTareas();
    },
    filtarPorEstado : function(filtro){
        let tareasFiltradas = tareas.filter(tarea => tarea.estado === filtro)
        return console.log(tareasFiltradas);
    },
    borrar :function(){
        tareas.pop();
        this.escribrirJSON(tareas);
        this.listarTareas();
    }
}
