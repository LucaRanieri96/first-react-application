import ListGroup from "./components/ListGroup";

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
    </div>
  );
}

export default App;
