class InicioPAM {

    desplegarReglamentoDAM() {
       const contenedor = document.getElementById("Contenido");
       contenedor.innerHTML = " <h1>Reglamento</h1><ol><li>Participación activa en clase</li><li>Trabajos en classroom </li><li>Entregas completas</li><li>Respetar tiempos de entrega </li><li>Presentación de trabajo calidad universitaria</li></ol>";
    }

    desplegarLineamientosClassroom() {
       const contenedor = document.getElementById("Contenido");
       contenedor.innerHTML = "<h1>Lineamientos Classroom</h1><p>Contenido de los lineamientos...</p>";
    }

    desplegarFechasParciales() {
       const contenedor = document.getElementById("Contenido");
       contenedor.innerHTML = "<h1>Fechas Parciales</h1><p>Contenido de las fechas parciales...</p>";
    }

    desplegarPorcentajesPorParcial() {
       const contenedor = document.getElementById("Contenido");
       contenedor.innerHTML = "<h1>Porcentajes por Parcial</h1><p>Contenido de los porcentajes por parcial...</p>";
    }
}
