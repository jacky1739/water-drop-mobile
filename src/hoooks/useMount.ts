import { useEffect } from "react";

/**
 * 元件加載時執行
 * @param fn 
 */
const useMount = (fn: () => void) => {
  useEffect(() => {
    fn?.();
  }, []);
}

export default useMount;