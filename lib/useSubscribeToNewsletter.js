import { useRef, useState } from "react";

import { usePlausible } from "next-plausible";

export function useSubscribeToNewsletter() {
  const [form, setForm] = useState();
  const [formStatus, setFormStatus] = useState("INITIAL");
  const plausible = usePlausible();
  const inputEl = useRef(null);

  async function subscribe(e) {
    e.preventDefault();
    setFormStatus("LOADING");

    const res = await fetch(`/api/subscribe`, {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();

    if (error) {
        setFormStatus("ERROR");
        setForm({message: error})
      return;
    }

    plausible("Subscribe");

    inputEl.current.value = "";

    setFormStatus("SUCCESS");
    setForm({ message: `Success! You've been added to the list!` });
  }

  return { subscribe, inputEl, form, formStatus };
}
