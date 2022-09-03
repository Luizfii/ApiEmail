import tempo from "./api/tempo";
function Home() {
  return (
    <div>
      <h1>Contatos</h1>
      <h2>sabe os dados de tempo neste exato momento?</h2>
      <h3>Agora sabe:</h3>
      <p>{tempo}</p>
    </div>

  );
}

export default Home;
