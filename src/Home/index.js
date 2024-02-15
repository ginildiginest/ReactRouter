import React from 'react'
import { useLoaderData } from 'react-router-dom';

const Home = () => {
  const user = useLoaderData();
  console.log({user})
  return (
    <div>Home</div>
  )
}

export default Home