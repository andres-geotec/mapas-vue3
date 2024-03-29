import 'ol/ol.css'
// import 'sisdai-css'

import SisdaiCapaVectorial from './componentes/SisdaiCapaVectorial.vue'
import SisdaiCapaWms from './componentes/SisdaiCapaWms.vue'
import SisdaiCapaXyz from './componentes/SisdaiCapaXyz.vue'
// import SisdaiContenedorVis from './componentes/SisdaiContenedorVis.vue'
import SisdaiLeyenda from './componentes/SisdaiLeyenda.vue'
import SisdaiMapa from './componentes/SisdaiMapa.vue'

export default {
  install: Vue => {
    Vue.component('SisdaiCapaVectorial', SisdaiCapaVectorial)
    Vue.component('SisdaiCapaWms', SisdaiCapaWms)
    Vue.component('SisdaiCapaXyz', SisdaiCapaXyz)
    // Vue.component('SisdaiContenedorVis', SisdaiContenedorVis)
    Vue.component('SisdaiLeyenda', SisdaiLeyenda)
    Vue.component('SisdaiMapa', SisdaiMapa)
  },
}

export {
  SisdaiCapaVectorial,
  SisdaiCapaWms,
  SisdaiCapaXyz,
  // SisdaiContenedorVis,
  SisdaiLeyenda,
  SisdaiMapa,
}
