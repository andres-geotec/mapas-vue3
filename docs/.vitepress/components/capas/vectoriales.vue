<script setup>
import { ref } from 'vue'

const nombre = ref('Capa vectorial')
</script>

<template>
  <SisdaiMapa
    class="sin-cargador con-panel-encabezado-vis con-panel-pie-vis"
    :vista="{
      extension: '-118.3651,14.5321,-86.7104,32.7187',
    }"
  >
    <template #panel-encabezado-vis>
      <div>
        <p class="m-t-0">Ejemplo del uso de capa vectorial.</p>
      </div>
    </template>

    <SisdaiCapaXyz :posicion="1" />

    <SisdaiCapaVectorial
      id="idVectorial"
      :nombre="nombre"
      :posicion="2"
      :renderizarComoImagen="true"
      :visible="true"
      fuente="/assets/estados-poligonos.geojson"
      :globoInformativo="f => `Entidad: <b>${f.nom_edo}</b>`"
    />

    <!-- :fuente="estados" -->
    <!-- fuente="https://cultura.conacyt.mx/pueblosindigenas-registro-api/media/capa_comunidades_indigenas/comunidades_localidad.geojson" -->

    <template #panel-pie-vis>
      <SisdaiLeyenda para="idVectorial" />
    </template>
  </SisdaiMapa>
</template>
