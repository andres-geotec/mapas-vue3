import { numerosTextoComoArreglo } from '@/utiles'
import olMap from 'ol/Map'

/**
 * @classdesc
 * Clase heredada de la clase Map de OpenLayers con la finaliodad de agregar funciones y/o
 * propiedades que faciliten la manipulación del contenido de la propia instancia.
 */
export default class Mapa extends olMap {
  constructor(opcionesOlMap) {
    super(opcionesOlMap)
  }

  /**
   *
   * @param {Object} param0
   */
  asignarVista({ extension, centro, zoom, proyeccion }) {
    console.log(this.getView())
    console.log('actualizar vista', extension, proyeccion)
    this.getView().setCenter(numerosTextoComoArreglo(centro))
    this.getView().setZoom(Number(zoom))
  }

  /**
   * Busca dentro de la instancia del mapa la capa que contenga un determinado `id`.
   * @param {String} idCapa id de la capa a buscar.
   * @returns {import("ol/layer/Layer").default} layer.
   */
  buscarCapa(idCapa) {
    // quizá promesa!
    return this.getAllLayers().find(capa => capa.get('id') === idCapa)
  }

  /**
   * Elimina de la instancia del mapa la capa que contenga un determinado `id`.
   * @param {String} idCapa id de la capa a eliminar.
   */
  eliminarCapa(idCapa) {
    this.removeLayer(this.buscarCapa(idCapa))
    // console.log(this.getAllLayers().map(c => c.get('id')))
  }
}
