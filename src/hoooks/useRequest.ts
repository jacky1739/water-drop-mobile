import { useState } from "react";
import useMount from "./useMount";

/**
 * 1. 實現元件初始化發送請求
 * 2. 手動觸發請求
 */
const useRequest = (service: (params: Record<string, string>) => Promise<unknown>, params: Record<string, string>) => {
  const [ data, setData ] = useState<unknown>();
  const [ loading, setLoading ] = useState<boolean>(false);

  const init = (curParams: Record<string, string>) => {
    setLoading(true);
    service(curParams).then((res) => {
      setData(res);
      setLoading(false);
    }).catch(() => {
      setLoading(false);
    })
  }

  useMount(() => {
    init(params);
  })

  const run = (runParams: Record<string, string>) => {
    init(runParams)
  }

  return [data, loading];
};

export default useRequest;