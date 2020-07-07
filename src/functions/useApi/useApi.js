import { useState, useEffect } from 'react'
import axios from 'axios';

export const useApi = (url) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(url).then(r => {
      setData(r.data);
      setLoading(false);
    });
  }, [url]);

  return [data, loading];
}