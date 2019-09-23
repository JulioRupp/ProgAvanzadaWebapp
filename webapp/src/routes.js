import Animada from './componentes/Animada.vue'
import Drama from './componentes/Drama.vue'
import Accion from './componentes/Accion.vue'
import Comedia from './componentes/Comedia.vue'
import Guerra from './componentes/Guerra.vue'
import Terror from './componentes/Terror.vue'

export const routes = [
  {path: '/animada/:id', name: 'peli_animada', component: Animada},
  {path: '/drama/:id',  name: 'peli_drama', component: Drama},
  {path: '/accion/:id', name: 'peli_accion', component: Accion},
  {path: '/comedia/:id', name: 'peli_comedia', component: Comedia},
  {path: '/guerra/:id', name: 'peli_guerra', component: Guerra},
  {path: '/terror/:id', name: 'peli_terror', component: Terror}
];
