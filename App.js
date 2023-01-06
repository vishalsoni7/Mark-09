import React from "react";
import "./styles.css";
import { useState } from "react";

const bookDB = {
  Animated: [
    {
      name: "Spider-Man: Into the Spider-Verse",
      rating: "8.4/10 (Imdb)",
      description:
        "After gaining superpowers from a spider bite, Miles Morales protects the city as Spider-Man. Soon, he meets alternate versions of himself and gets embroiled in an epic battle to save the multiverse."
    },
    {
      name: "Up",
      rating: "8.3/10 (Imdb)",
      description:
        "Carl, an old widower, goes off on an adventure in his flying house in search of Paradise Falls, his wife's dream destination."
    },
    {
      name: "Soul",
      rating: "8/10 (Imdb)",
      description:
        "A jazz musician, stuck in a mediocre job, finally gets his big break. However, when a wrong step takes him to the Great Before, he tries to help an infant soul in order to return to reality."
    }
  ],

  fiction: [
    {
      name: "TENET",
      rating: "7.3/10 (Imdb)",
      description:
        "When a few objects that can be manipulated and used as weapons in the future fall into the wrong hands, a CIA operative, known as the Protagonist, must save the world. book"
    },
    {
      name: "Interstellar",
      rating: "8.6/10 (Imdb)",
      description:
        "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans. reading"
    },
    {
      name: "Inception",
      rating: "8.8/10 (Imdb)",
      description:
        "Cobb steals information from his targets by entering their dreams. Saito offers to wipe clean Cobb's criminal history as payment for performing an inception on his sick competitor's son."
    }
  ],
  horror: [
    {
      name: "A Quiet Place",
      rating: "7.5/10 (Imdb)",
      description:
        "A family struggles for survival in a world where most humans have been killed by blind but noise-sensitive creatures. They are forced to communicate in sign language to keep the creatures at bay."
    },
    {
      name: "The Conjuring",
      rating: "7.5/10 (Imdb)",
      description:
        "The Perron family moves into a farmhouse where they experience paranormal phenomena. They consult demonologists, Ed and Lorraine Warren, to help them get rid of the evil entity haunting them."
    },
    {
      name: "Annabelle",
      rating: "5.4/10 (Imdb)",
      description:
        "John and Mia Form are attacked by members of a satanic cult that uses their old doll as a conduit to make their life miserable. This unleashes a string of paranormal events in the Forms' residence."
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("horror");
  //const [selectedGenre, setGenre] = useState("fiction");
  //const [selectedGenre, setGenre] = useState("horror");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> Movi∄s 🎥 </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        <strong>
          {" "}
          Here are some intresting movies suggestion for you.{" "}
        </strong>{" "}
      </p>

      <div>
        {Object.keys(bookDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookDB[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "4px solid #D1D5DB",
                width: "70%",
                margin: "2rem auto",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger", paddingBottom: "10px" }}>
                {" "}
                {book.name}{" "}
              </div>
              <div style={{ fontSize: "medium", paddingBottom: "10px" }}>
                {" "}
                {book.rating}{" "}
              </div>
              <div style={{ fontSize: "smaller", paddingBottom: "10px" }}>
                {" "}
                {book.description}{" "}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
