import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ButtonAlert from "./components/ButtonAlert";
import { useState } from "react";

function App() {
  let items = ["Milano", "Firenze", "Roma", "Napoli", "Catania"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [buttonAlertVisible, setAlertVisibility] = useState(false);

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
      <Button onClick={() => setAlertVisibility(true)}>Premimi</Button>
      { buttonAlertVisible && <ButtonAlert></ButtonAlert>}
    </div>
  );
}

export default App;
