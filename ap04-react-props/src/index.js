import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";

// Componente = constante que guarda uma função que retorna JSX
const App = () => {
  return <div>Um componente</div>;
};

// raiz = elemento da árvore DOM onde será renderizado o JSX
// dos componentes, pelo método render()
createRoot(document.getElementById("root")).render(<App />);
