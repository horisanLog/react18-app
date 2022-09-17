// import React, {
//   useEffect,
//   useState,
//   useLayoutEffect,
//   memo,
//   Suspense,
//   useRef,
//   forwardRef,
//   useImperativeHandle,
// } from "react";
// import useSWR from "swr";

// type Props = {
//   placeholder: string;
// };

// export const CustomInput = forwardRef<HTMLInputElement, Props>(
//   ({ placeholder }, ref) => {

//     return <input type="text" ref={ref} placeholder={placeholder} />;
//   }
// );

// export const ImperativeHandlePage: React.FC = memo(() => {
//   const inputEl = useRef<HTMLInputElement>(null);
//   const handleClick = () => {
//     inputEl.current?.focus();

//     console.log("inputEl.current: ", inputEl.current);
//     // inputEl.current: <input type="text" placeholder="this is example" />;
//   };

//   return (
//     <>
//       <CustomInput ref={inputEl} placeholder={"this is example"} />
//       <button onClick={handleClick}>Focus the input</button>
//     </>
//   );
// });

// https://numb86-tech.hatenablog.com/entry/2019/12/06/122217

import React, {
  useRef,
  useImperativeHandle,
  useEffect,
  useState,
  Ref,
  ForwardRefRenderFunction,
} from "react";

export interface ChildRef {
  formMethod: () => void;
}

export interface ChildProps {
  attr: number;
}

const MyInput: ForwardRefRenderFunction<ChildRef, ChildProps> = (
  props,
  ref
) => {
  useImperativeHandle(ref, () => ({
    formMethod: () => {},
  }),);
  // console.log(props.attr);

  return <input type="text" />;
};

const WrappedMyInput = React.forwardRef(MyInput);

const list: any = [];

export const ImperativeHandlePage = () => {
  const ref = useRef<ChildRef>(null);

  const [state, setState] = useState(0);

  useEffect(() => {
    if (ref.current) {
      list.push(ref.current?.formMethod);
    }
    console.log(list[list.length - 2],list[list.length - 1] )
    if (list.length >= 2) {
      console.log(list[list.length - 2] === list[list.length - 1]); // X
    }
  });

  const onClick = () => {
    setState((s) => s + 1);
  };

  return (
    <div>
      <WrappedMyInput ref={ref} attr={state} />
      <br />
      <button type="button" onClick={onClick}>
        click
      </button>
    </div>
  );
};
