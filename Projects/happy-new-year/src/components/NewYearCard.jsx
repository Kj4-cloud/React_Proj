import { useState } from "react";

const wishes = [
  "🎉 Wishing you success and happiness!",
  "✨ May your dreams come true this year!",
  "🥂 Cheers to new beginnings!",
  "🚀 Grow, Learn, and Shine!"
];

function NewYearCard() {
  const year = new Date().getFullYear();
  const [message, setMessage] = useState(wishes[0]);

  const changeWish = () => {
    const randomWish =
      wishes[Math.floor(Math.random() * wishes.length)];
    setMessage(randomWish);
  };

  return (
    <div className="card">
      <h1>🎊 Happy New Year {year} 🎊</h1>
      <p>{message}</p>
      <button onClick={changeWish}>New Wish 🎁</button>
    </div>
  );
}

export default NewYearCard;
