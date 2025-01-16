import clsx from "clsx";

export const Word = ({ word }: { word: string }) => {
  return (
    <span
      className={clsx(
        "w-max h-max relative inline-block overflow-hidden",
        "before:w-full before:absolute before:top-[-50%] before:left-0 before:h-[50%] before:bg-background upMoveAnimeBefore after:translate-y-[-100%]",
        "after:w-full after:absolute after:bottom-[-50%] after:left-0 after:h-[50%] after:bg-background downMoveAnimeAfter before:translate-y-full"
      )}
    >
      {word}
    </span>
  );
};

export const Paragraph = ({ words }: { words: string[] }) => {
  return (
    <div className="flex overflow-hidden">
      <div
        className="border-color50 border-l-4 downMoveAnime translate-y-[-100%]"
        style={{ animationDelay: "900ms" }}
      />
      <div className="overflow-hidden">
        <p className="pl-3 flex flex-wrap gap-2 pr-3 pb-3 font-bold">
          {words.map((str, idx) => (
            <Word word={str} key={idx} />
          ))}
        </p>
        <div
          className="w-full border-b-4 border-color50 rightMoreMoveAnime translate-x-full"
          style={{ animationDelay: "1200ms" }}
        />
      </div>
    </div>
  );
};
