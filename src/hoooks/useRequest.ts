import { useState } from "react";
import useMount from "./useMount";

interface IOptions {
  params: Record<string, string>;
  manual?: boolean;
  onSuccess?: (res: unknown) => void;
  onError?: (err: unknown) => void;
}

/**
 * 1. 實現元件初始化發送請求
 * 2. 手動觸發請求
 */
const useRequest = (
  service: (params: Record<string, string>) => Promise<unknown>,
  options: IOptions,
) => {
  const [ data, setData ] = useState<unknown>();
  const [ loading, setLoading ] = useState<boolean>(false);

  const init = (curParams: Record<string, string>) => {
    setLoading(true);
    return (service(curParams).then((res) => {
      setData(res);
      setLoading(false);
      options.onSuccess && options.onSuccess(res);
    }).catch((err) => {
      setLoading(false);
      options.onError && options.onError(err);
    }))
  }

  useMount(() => {
    if (!options.manual) {
      init(options.params);
    }
  })

  const run = (runParams: Record<string, string>) => {
    return init(runParams);
  }

  return { data, loading, run };
};

export default useRequest;