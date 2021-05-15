function makeEmoji(mnts) {
  let mm = mnts < 30 ? 5 : 10;
  let emo = mnts < 30 ? "☕️" : "🍱";
  let emojis = "";
  for (let i = 0; i < mnts; i += mm) {
    emojis += emo
  }
  return emojis
}

let Article = function ({ title, date = "January 1, 1970", preview, minutes }) {
  const emojis = makeEmoji(minutes);
  return (
    <article>
      <h3>{title}</h3>
      <small>{date}  {emojis} {minutes} min read</small>
      <p>{preview}</p>
    </article>
  )
}

export default Article