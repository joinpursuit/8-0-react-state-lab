export default function Score({score, incrementScore}) {
  return (
    <section className="score">
        {
            score >= 100 ? score : <h1>Current Score: {score}</h1>
        } 
    </section>
  );
}
