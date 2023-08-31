import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  let items = ["Milano", "Firenze", "Roma", "Napoli", "Catania"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading={"Cities"}
        onSelectedItem={handleSelectItem}
      />
      <Alert>
        <h1>Passare al componente figlio</h1>
        <p>ciao, prova di passing children</p>
      </Alert>
      <Button onClick={() => console.log("Button Clicked")}>Premimi</Button>
    </div>
  );
}

export default App;
