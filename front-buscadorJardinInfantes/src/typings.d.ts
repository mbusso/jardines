/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}


interface Jardin {
  nombre: string,
  direccion: string
}

interface Filtro {
  nombre: string,
  value: boolean
}
