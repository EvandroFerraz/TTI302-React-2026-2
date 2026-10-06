import { createRoot } from "react-dom/client";

// Componente = constante que guarda uma função que retorna
// código JSX
const App = () => {
    return <div>Um componente</div>
}

// createRoot = define qual elemento da árvore DOM será a raiz da aplicação
createRoot(document.getElementById("root")).render(
    <App/>
)