import {useState, useEffect, useCallback } from 'react'
import { useDispatch } from 'react-redux';

const useFetch = (action, options, onFetch) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch()

  const fetchData = useCallback(async () => {
    setLoading(true)
    setResponse(null)
    setTimeout(() => {
      dispatch(action(options))
      .then(result => {
        if (result.success) {
          if (onFetch) {
            onFetch(result.data)
          }
          setResponse(result.data)
        } else {
          setError(result.error)
        }
      })
      .catch(error => setError(error.message))
      .finally( () => setLoading(false))
    }, 30)
  }, [
    action, dispatch, onFetch, options
  ])

  useEffect(() => {
    fetchData();
  }, [fetchData, options]);
  
  return { response, error, loading, refetch: fetchData };
};

export default useFetch
