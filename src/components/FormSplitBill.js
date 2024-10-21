import { useState } from "react";
import { Button } from "./Button";

export function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [yourExpenses, setYourExpenses] = useState("");
  const [whoPaid, setWhoPaid] = useState("user");

  let friendExpenses = bill ? bill - yourExpenses : "";

  function handleSubmit(e) {
    e.preventDefault();
    if (!bill || !yourExpenses) return;

    onSplitBill(whoPaid === "user" ? friendExpenses : -yourExpenses);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split bill with {selectedFriend.name}</h2>

      <label>💰 Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label>🧍Your expense</label>
      <input
        type="text"
        value={yourExpenses}
        onChange={(e) =>
          setYourExpenses(
            Number(e.target.value) > bill
              ? yourExpenses
              : Number(e.target.value)
          )
        }
      />

      <label>🧑‍🤝‍🧑 {selectedFriend.name}'s expense</label>
      <input type="text" disabled value={friendExpenses} />

      <label>🤑 Who is paying the bill?</label>
      <select value={whoPaid} onChange={(e) => setWhoPaid(e.target.value)}>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}
