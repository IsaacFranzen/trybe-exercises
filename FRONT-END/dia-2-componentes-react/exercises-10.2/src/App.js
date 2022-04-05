import './App.css';
import Header from './componetns/Header';
import Cards from './componetns/Cards';

function App() {
  return (
    <div className="App">
      <Header title="Pokédex"/>
      <section className='cardsContainer'>
      <Cards />
      </section>
    </div>
  );
}

export default App;
