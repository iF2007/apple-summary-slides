import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const Index = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/event-AppleEventMay2024', undefined, {
      shallow: true,
    });
  }, [router]);
  return <main />;
};

// eslint-disable-next-line import/no-unused-modules
export default Index;
