import Header from "./Header.jsx";

function Content() {
  return (
    <div className="content">
      <Header />
      <Main />
    </div>
  );
}

function Main() {
  return (
    <div className="main">
      <div className="educacion">
        <h2>Educacion</h2>
        <div style={{ display: "flex", flexDirection: "row", gap: "25px" }}>
          <h3>Universidad Rafael Landivar</h3>
          <img src="https://www.url.edu.gt/ave/logoURL.jpg" />
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
          <h3>Licenciatura en Ingenieria en Sistemas</h3>
          <img src="https://miro.medium.com/v2/resize:fit:1400/0*7VyEZgzwUhQMeBqb" />
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}
export default Content;
