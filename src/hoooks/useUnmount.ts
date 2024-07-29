import { useEffect } from "react"
import useLatest from "./useLatest";

/**
 * 元件卸載時執行
 * @param fn 
 */
const useUnmount = (fn: () => void) => {
  const fnRef = useLatest(fn);;
  useEffect(() => {
    return fnRef.current();
  }, []);
};

export default useUnmount;