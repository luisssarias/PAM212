class InicioPAM {

    desplegarReglamentoDAM() {
       const contenedor = document.getElementById("Contenido");
       contenedor.innerHTML = " <h1>Reglamento</h1><ol><li>Participación activa en clase</li><li>Trabajos en classroom </li><li>Entregas completas</li><li>Respetar tiempos de entrega </li><li>Presentación de trabajo calidad universitaria</li></ol>";
    }

    desplegarLineamientosClassroom() {
        const contenedor = document.getElementById("Contenido");
        contenedor.innerHTML = "<h1>Lineamientos</h1><ol><li>Todos los trabajos llevan portada estilo libre: Logo UPQ, tema, datos de alumno, materia</li><li>Conclusiones de aprendizaje: Descripción de lo aprendido durante el desarrollo de la actividad </li></ol>";
    }

    desplegarFechasParciales(){
        const contenedor = document.getElementById("Contenido");
        contenedor.innerHTML = " <h1>Fechas de Exámenes Parciales</h1><ul><li>Parcial 1: 29/09/2025</li><li>Parcial 2: 03/10/2025</li><li>Parcial 3: 01/12/2025</li></ul>";
    }

    desplegarPorcentajesPorParcial() {
        const contenedor = document.getElementById("Contenido");
        contenedor.innerHTML = "<h1>Porcentajes</h1><ul><li>Parcial 1<ol><li>Conocimiento: 40%</li><li>Desempeño: 20%</li><li>Producto: 30%</li><li>PI: 10%</li></ol></li><li>Parcial 2<ol><li>Conocimiento: 40%</li><li>Desempeño: 20%</li><li>Producto: 20%</li><li>PI: 20%</li></ol></li><li>Parcial 3<ol><li>Conocimiento: 20%</li><li>Desempeño: 10%</li><li>Producto: 40%</li><li>PI: 30%</li></ol></li></ul>";
    }

}
    