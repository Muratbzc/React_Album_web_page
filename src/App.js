import data from "./helper/data";

function App() {
  console.log(data);
  return (
    <div>
      <h1>Albums</h1>
      <div>
        {data.map((card) => {
          return (
            <div>
              <img src={card.src.large} />
              <h2>{card.photographer} </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
