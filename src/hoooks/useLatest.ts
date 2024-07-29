import { useRef } from "react";

/**
 * 永遠取得最新的值
 * @returns 
 */
const useLatest = <T>(value: T) => {
  const ref = useRef(value);
  ref.current = value;

  return ref;
}

export default useLatest;