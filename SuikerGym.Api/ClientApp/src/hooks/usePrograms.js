import { useState, useEffect } from 'react';
import { getAllPrograms } from '../services/apiService';

/**
 * Custom hook to fetch programs from the API
 * @returns {Object} - { programs, loading, error }
 */
export const usePrograms = () => {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        setLoading(true);
        const data = await getAllPrograms();
        setPrograms(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching programs:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPrograms();
  }, []);

  return { programs, loading, error };
};
