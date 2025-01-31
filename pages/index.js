import Head from 'next/head'
import Main from '../components/Main/Main'
import React, { useState } from 'react'
import Header from '../components/Header/Header'
// import  { useState } from 'react'

const index = (props) => {
  const [ours, setOurs] = useState(props.ours);

  return (
    <>
      <Head>
      <title>우리 것</title>
      {/* <meta name="description" content="Generated by create next app"/> */}
      <link rel="icon" href="/favicon.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Head>
      <Main />
      <Header ours = {props.ours} />
    </>
  )
}

export default index