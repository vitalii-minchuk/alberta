"use client"

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';

export default function Search() {
  const [text, setText] = useState('Hello');
  const [value] = useDebounce(text, 1000);
  const router = useRouter()

  useEffect(() => {
    value && router.push(`/pagination-test?search=${value}`)
  }, [router, value])

  return (
    <div>
      <input
        defaultValue={'Hello'}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <p>Actual value: {text}</p>
      <p>Debounce value: {value}</p>
    </div>
  );
}