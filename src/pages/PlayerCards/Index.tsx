import React, { useState, useEffect } from "react";
import { Container } from "./styles";

// Define card data structure
interface Card {
  suit: string;
  value: string;
  code: string;
}

interface PlayerCardsProps {
  player: any;
}

const PlayerCards: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDeck = async () => {
      setIsLoading(true);
      setError(null); // Reset error before fetching

      try {
        const response = await fetch(
          "https://deckofcardsapi.com/api/deck/new/shuffle/"
        );
        if (!response.ok) {
          console.log("HTTP ERROR!", response);
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("data cards", data.cards);
        setCards(data.cards);
      } catch (err) {
        setError("Failed to fetch cards. Please try again later.");
        console.log("err", err);
      } finally {
        console.log("finally");
        setIsLoading(false);
      }
    };

    fetchDeck();
  }, []);

  // Handle loading and error states
  if (isLoading) return <p>Giving cards...</p>;
  if (error) return <p>Error fetching cards: {error}</p>;

  return <Container>cards</Container>;
};

export default PlayerCards;
