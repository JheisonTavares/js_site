
import GlassCard from '../components/glass_card/glass_card.tsx';
import Header from '../components/header/header.tsx';
import { MainText } from '../components/main_text/main_text.tsx';
import './style.css';

function Home() {
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

export default Home;