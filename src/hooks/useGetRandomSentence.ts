import axios from "axios";
import { useCallback, useState } from "react";

import { RANDOM_QUOTE_API } from "../services/api/RandomQuoteApi";
import { Quote } from "../types/Quote";

export const useGetRandomSentence = () => {
  const [sentence, setSentence] = useState<string>('');

  const getRandomSentence = useCallback(() => {
    axios.get<Quote>(`${RANDOM_QUOTE_API}`)
      .then((res) => {
        setSentence(res.data.content);
      })
    }, []);
  return { sentence, getRandomSentence };
}
