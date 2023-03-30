import { useRouter } from 'next/router';
import { useEffect } from 'react';

function HomePage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/favorites');
  }, []);

  return null;
}

export default HomePage;