import React, { Fragment } from 'react';
import Header from './layout/Header';

export default function Home() {
     return (
          <Fragment>
               <Header />
               Home Page
               <h1 className="text-3xl text-center font-bold underline">
                    Hello world!
               </h1>
          </Fragment>
     )
}