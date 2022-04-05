import './App.css';
import Header from './componetns/Header';
import Cards from './componetns/Cards';
import data from './data'

function App() {
  return (
    <main className="App">
      <Header title="Pokédex" />
      <section className='cardsContainer'>
        {data.map((value) => {
          return <Cards pokemons={value} />
        })}
      </section>
    </main>
  );
}

export default App;
