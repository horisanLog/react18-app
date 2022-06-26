import React, {
  useEffect,
  useState,
  useLayoutEffect,
  memo,
  Suspense,
} from "react";
import useSWR from "swr";

export const TopPage: React.FC = memo(() => {
  const [count, setCount] = useState(0);
  const [count1, setCount2] = useState(0);
  const [flag, setFlag] = useState(false);

  const handleClick = () => {
    console.log("=== click ===");
    fetchSomething().then(() => {
      setCount((c) => c + 1);
      setCount((c) => c + 1);

      setFlag((f) => !f);
    });
  };

  const LogEvents = () => {
    useLayoutEffect(() => {
      console.log("Commit");
    });
    console.log("Render");
    return null;
  };

  const fetchSomething = () => {
    return new Promise((resolve) => setTimeout(resolve, 100));
  };

  const AlwaysSuspend: React.FC = () => {
    useEffect(() => {
      new Promise((resolve) => setTimeout(resolve, 5000));
      setCount2(2)
    }, []);
    
    // console.log(data)
    return <div>{count1}</div>;
  };

  const SuspenseError: React.FC = () => {
    return (
      <div>
        <p>読み込み中...</p>
      </div>
    );
  };

  return (
    <>
      <div>
        <button onClick={handleClick}>Next</button>
        <h1 style={{ color: flag ? "blue" : "black" }}>{count}</h1>
        <LogEvents />
        {/* ↓表示されない */}
        <p>ここは表示される？</p>
        <Suspense fallback={<SuspenseError/>}>
          <AlwaysSuspend />
        </Suspense>
        <p>こんにちは</p>
      </div>
    </>
  );
});
