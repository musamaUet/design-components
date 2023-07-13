import Button from "./lib/components/Button";
import Badge from "./lib/components/Badge";
import "./App.css";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "center",
        gap: "1.5rem",
        padding: "5rem",
      }}
    >
      <p>Bootstrap Components.</p>
      <h5>Sample Badge Design Component:</h5>
      <Badge value={3} />
      <br />
      <h5>Sample Button Design Component:</h5>
      <Button label="Enter" kind="primary" />
    </div>
  );
}

export default App;
