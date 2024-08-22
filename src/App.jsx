import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [advice, setAdvice] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const fetchAdvice = async () => {
    setIsLoading(true);

    try {
      const res = await fetch("https://api.adviceslip.com/advice");
      const data = await res.json();
      setAdvice(data);
    } catch (error) {
      console.log("MY ERROR MY AHAER: " + error);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchAdvice();

    const timer = setTimeout(() => {
      setDisabled(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  function handleClick() {
    setDisabled(true);
    fetchAdvice();
    setTimeout(() => {
      setDisabled(false);
    }, 2000);
  }

  return (
    <main className="relative flex w-full flex-col items-center gap-[1.375rem] rounded-xl bg-dark-grayish-blue px-6 pb-16 pt-10 drop-shadow-custom sm:w-[33.75rem] sm:rounded-2xl sm:px-8 sm:pb-[4.5rem] sm:pt-12">
      <header>
        <h1 className="text-[0.6875rem] uppercase tracking-[0.35em] text-neon-green sm:text-[0.8125rem]">
          Advice #{isLoading ? "..." : advice.slip?.id}
        </h1>
      </header>

      <p className="text-center text-[1.4375rem] font-bold sm:mb-4 sm:text-[28px]">
        {isLoading ? "Loading..." : `"${advice.slip?.advice}"`}
      </p>

      <picture>
        <source
          media="(min-width: 376px)"
          srcSet="./images/pattern-divider-desktop.svg"
        />

        <img src="./images/pattern-divider-mobile.svg" alt="divider image" />
      </picture>

      <button
        className={`absolute -bottom-8 rounded-full p-5 transition-shadow duration-200 ${disabled ? "animate-spin cursor-not-allowed bg-light-cyan hover:shadow-disabled" : "bg-neon-green hover:shadow-green"}`}
        onClick={handleClick}
        disabled={disabled}
      >
        <img src="./images/icon-dice.svg" alt="dice icon" />
      </button>
    </main>
  );
}

export default App;
