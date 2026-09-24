import Books from '@/components/homepage/Books';
import HeroBanner from '@/components/homepage/HeroBanner';
import React from 'react';

const page = () => {
  return (
    <div>
      <HeroBanner></HeroBanner>
      <Books></Books>
    </div>
  );
};

export default page;