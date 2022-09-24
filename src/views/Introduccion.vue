<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span
          i.fas.fa-info.text-white 
      h1 Introducción
    .dual-txt-deco
      p.mb-5(data-aos="fade-right")(style="position: relative; z-index: 1;") En la desarrollada industria con infraestructuras tecnológicas nuevas y emergentes, la falta de recurso humano calificado para el uso de estas tecnologías y más aun, la disminución en los indicadores matemáticos de cargas de trabajo relacionado con el número de unidades o prestación de servicios; requieren un reordenamiento de las estrategias aplicadas en los procesos logísticos, lo que supone cambios obligatorios al interior de los sistemas de producción que deben ser versátiles, flexibles y muy eficientes. 
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/zKLYNu6aWNk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        
    p Saber utilizar mecanismos y metodologías que permitan tener un manejo y un control más efectivo sobre los procesos de producción, es el objetivo de este componente formativo. #[span.txt-color1 ¡Bienvenidos!] 
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
