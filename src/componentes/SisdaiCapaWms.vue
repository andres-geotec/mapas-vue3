<script setup>
import ImageLayer from 'ol/layer/Image'
import { ImageSourceEventType } from 'ol/source/Image'
import ImageWMS from 'ol/source/ImageWMS'
import { onMounted, shallowRef, toRefs, watch } from 'vue'
import { tiposCapa } from '../valores/capa'
import usarCapa, { props as propsCapa } from './../composables/usarCapa'
import eventos from './../eventos/capa'

const props = defineProps({
  /**
   * Parámetros de solicitud WMS. El atributo LAYERS (nombre de las capas separadas por comas) es obligatorio.
   * Para revisar los valores por defecto consulte el [modulo WMS de OpenLayers](https://openlayers.org/en/latest/apidoc/module-ol_source_wms.html).
   *
   * - Tipo: `Object`
   * - Valor por defecto: `{}`.
   * - Reactivo: ✅
   */
  parametros: {
    type: Object,
    default: () => ({}),
    validator({ LAYERS }) {
      const validarLayer = LAYERS !== undefined && LAYERS !== null

      if (!validarLayer) {
        console.warn('LAYERS no puede ser un parámetro indefinido o vacío')
      }

      return validarLayer
    },
  },

  /**
   * Tipo de servidor WMS remoto, puede ser: mapserver, geoserver, carmentaserver o qgis.
   *
   * - Tipo: `String`
   * - Valor por defecto: `geoserver`.
   * - Reactivo: ❌
   *
   * @see https://openlayers.org/en/latest/apidoc/module-ol_source_wms.html#~ServerType
   */
  tipoServidor: {
    type: String,
    default: 'geoserver',
  },

  /**
   * URL del servicio WMS.
   *
   * - Tipo: `String`
   * - Valor por defecto: `undefined`.
   * - Reactivo: ❌
   */
  url: {
    type: String,
    default: 'https://gema.conahcyt.mx/geoserver/wms',
  },

  ...propsCapa,
})

const emits = defineEmits(Object.values(eventos))

const sisdaiCapaWms = shallowRef()
const { url, parametros } = toRefs(props)

const { configurar } = usarCapa(sisdaiCapaWms, props)

configurar(() => {
  const olSource = new ImageWMS({
    url: url.value,
    params: parametros.value,
    serverType: props.tipoServidor,
    crossOrigin: 'Anonymous',
  })

  watch(parametros, nv => olSource.updateParams(nv))

  olSource.on(ImageSourceEventType.IMAGELOADSTART, () => {
    emits(eventos.alIniciarCarga)
    // estatusCarga.value = tiposEstatusCarga.ini
  })
  olSource.on(ImageSourceEventType.IMAGELOADERROR, () => {
    emits(eventos.alFinalizarCarga, false)
    // estatusCarga.value = tiposEstatusCarga.error
  })
  olSource.on(ImageSourceEventType.IMAGELOADEND, () => {
    emits(eventos.alFinalizarCarga, true)
    // estatusCarga.value = tiposEstatusCarga.fin
  })

  return { olSource, olLayerClass: ImageLayer, tipo: tiposCapa.wms }
})

onMounted(() => {
  // console.log('SisdaiCapaWms', props.id)
})
</script>

<template>
  <span
    ref="sisdaiCapaWms"
    :sisdai-capa="id"
  />
</template>
