import { FC, memo, useEffect } from 'react';

import { useGetRandomSentence } from '../hooks/api/useGetRandomSentence';

export const Typing: FC = memo(() => {
  const { sentence, getRandomSentence } = useGetRandomSentence();
  useEffect(() => {
    getRandomSentence();
  }, []);
  return (
    <div className="h-screen flex items-center justify-center bg-zinc-700 font-sans">
      <div className="text-blue-500 absolute top-8 text-7xl font-bold">0</div>
      <div className="bg-slate-300 text-3xl font-semibold p-16 rounded-lg w-4/5 min-h-[67%] max-w-[90%] shadow-2xl">
        <div className="mb-4 ml-4">{sentence}</div>
        <textarea className="mt-16 bg-transparent border-2 border-black outline-none w-full h-56 m-auto resize-none rounded-lg text-4xl py-2 px-4" />
      </div>
    </div>
  );
});
