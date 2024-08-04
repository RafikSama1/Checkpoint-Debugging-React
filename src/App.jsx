import Header from './components/Header'
import Counter from './components/Counter'
import TodoList from './components/TodoList'


function App() {
  return (
    <>
      <div className="App">
        <Header title="Debug Sample App" />
        <Counter />
        <TodoList />
      </div>
    </>
  )
}

export default App
