import { Suspense } from "react";
import Countries from "./Component/Countries/Countries";

const fetchPromise = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  return res.json();
};
function App() {
  const fetchPro = fetchPromise();
  return (
    <>
      <Suspense fallback={<h2>Traveling the world</h2>}>
        <Countries fetchPro={fetchPro}></Countries>
      </Suspense>
    </>
  );
}

export default App;
