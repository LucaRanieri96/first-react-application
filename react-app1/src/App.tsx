import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Milano", "Firenze", "Roma", "Napoli", "Catania"];

  return (
    <div>
      <ListGroup items={items} heading={"Cities"}/>
    </div>
  );
}

export default App;
