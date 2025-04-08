import { useState , useEffect} from "react";




function App() {

  const [advice , setAdvice] = useState({ id: null, text: "Loading advice..." })
  const getAdvice = async () => {
    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setAdvice({ id: data.slip.id, text: data.slip.advice });
    } catch (error) {
      console.error('Error fetching advice:', error);
    }
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return (
  <main >
    <section>
      <h1>Advice #{advice.id}</h1>
      <p>"{advice.text}" </p>
      <img src="./pattern-divider-mobile.svg" alt="pattern divider" />
   
    </section>
    <button onClick= {getAdvice}>
        <img src="./icon-dice.svg" alt="dice icon" />
      </button>
   
  </main>
  )
}

export default App;
