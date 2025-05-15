
import GlassCard from './components/glass_card/glass_card.tsx';
// novo componente
import Header from './components/header/header.tsx';
import { MainText } from './components/main_text/main_text.tsx';
import './styles/style.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="main-section">
          <MainText />
          <GlassCard />
        </div>
      </main>
    </>
  );
}

export default App;