import WordCloud from './WordCloud'

export default function Hero() {
  return (
    <div className="hero card hero-card">
      <h1>Welcome to AJZ Storybook</h1>
      <p>Essays, researches, and learnings</p>
      <WordCloud phrase="By Doin' -a Sawon's Chemistry Corner." />
    </div>
  )
}
