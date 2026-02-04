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
      <div className="section">
        <h2>Educacion</h2>
        <div style={{ display: "flex", flexDirection: "row", gap: "25px" }}>
          <h3 style={{ marginLeft: "35px" }}>Universidad Rafael Landivar</h3>
          <img src="https://www.url.edu.gt/ave/logoURL.jpg" />
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
          <h3>Licenciatura en Ingenieria en Sistemas</h3>
          <img src="https://miro.medium.com/v2/resize:fit:1400/0*7VyEZgzwUhQMeBqb" />
        </div>
      </div>
      <div className="section">
        <h2>Experiencia Laboral</h2>
        <div style={{ display: "grid", gridTemplateRows: "1fr 1fr" }}>
          <div>
            <h3 style={{ textDecoration: "underline", justifySelf: "center" }}>
              Business Development Group – Guatemala (Remoto)
            </h3>
            <h4>Software Developer</h4>
            <p>
              Desarrollo y mantenimiento de servicios backend y soluciones
              automatizadas utilizando JavaScript, .NET y SQL. Diseño e
              implementación de procesos ETL para integración y transformación
              de datos entre sistemas. Construcción de APIs y servicios backend
              integrados con bases de datos relacionales. Optimización de
              consultas SQL y mejora de performance en procesos críticos.
              Implementación de pruebas unitarias y end-to-end para asegurar
              calidad y estabilidad. Integración de soluciones con servicios en
              la nube (AWS). Colaboración activa con equipos multidisciplinarios
              bajo metodologías ágiles.
            </p>
          </div>
          <div>
            <h3 style={{ textDecoration: "underline", justifySelf: "center" }}>
              Capgemini Technology Services – Guatemala
            </h3>
            <h4>Junior Software Develeper</h4>
            <p>
              Desarrollo de soluciones backend y automatización utilizando
              principios de programación orientada a objetos. Participación
              activa en code reviews y mejora continua del código. Colaboración
              con equipos cross-functional para implementación de soluciones
              técnicas. Análisis y mejora de procesos relacionados con bases de
              datos y lógica de negocio.
            </p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
export default Content;
