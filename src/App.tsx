import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Info } from './components/Info/Info';
import { TodoList } from './components/TodoList/TodoList';

function App() {
  return (
    <>
      <section className="todoapp">
        <Header />
        <TodoList />
        <Footer />
      </section>
      <Info />
    </>
  );
}

export default App;
