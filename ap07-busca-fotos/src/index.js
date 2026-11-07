import {createRoot} from 'react-dom/client'
import App from './components/App'
import 'primereact/resources/themes/bootstrap4-light-purple/theme.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'


//raiz da aplicacao = elemento da arvore DOM onde o componente principal (App) será renderizado
const root = createRoot(document.getElementById("root"))
root.render(<App/>)