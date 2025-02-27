'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const getHash = () => (typeof window !== 'undefined' ? decodeURIComponent(window.location.hash) : undefined);

const useHash = () => {
  const [hash, setHash] = useState(getHash())

  useEffect(() => {
    const handleHashChange = () => {
      setHash(getHash());
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return hash;
};

export default useHash;