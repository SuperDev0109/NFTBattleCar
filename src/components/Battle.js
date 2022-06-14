import React, { Fragment } from 'react'
import Header from './layout/Header'

export default function Battle() {
    return (
        <Fragment>
            <Header />
            <div className='container pt-5'>
                <div className='row'>
                    <div className='collg col-md-4'>
                        <p className='text-center' style={{ fontSize: '1.5rem', lineHeight: '2rem',fontWeight: '700' }}>YOU</p>
                        <p className='text-center' style={{ fontSize: '1.5rem', lineHeight: '2rem',fontWeight: '700' }}>CRYPTO BUM</p>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '1rem' }}>
                            <img src="assets/img/0-60_0001.0001.jpg" alt="..." width="100%" />
                            <img src="assets/img/0-60_0001.0001.jpg" alt="..." width="100%" />
                            <img src="assets/img/0-60_0001.0001.jpg" alt="..." width="100%" />
                            <img src="assets/img/0-60_0001.0001.jpg" alt="..." width="100%" />
                            <img src="assets/img/0-60_0001.0001.jpg" alt="..." width="100%" />
                        </div>
                    </div>
                    <div className='col-md-4' style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <p className='text-center' style={{ fontSize: '1.875rem', lineHeight: '2.25rem',fontWeight: '700'  }}>PvP ONE SPEC BATTLE</p>
                        <span className='text-center' style={{ fontSize: '1.5rem', cursor: 'pointer', fontWeight: '700' }}>0-60</span>
                        <span className='text-center' style={{ fontSize: '1.5rem', cursor: 'pointer', fontWeight: '700' }}>PRICE</span>
                        <span className='text-center' style={{ fontSize: '1.5rem', cursor: 'pointer', fontWeight: '700' }}>TOP SPEED</span>
                        <span className='text-center' style={{ fontSize: '1.5rem', cursor: 'pointer', fontWeight: '700' }}>HP</span>
                        <span className='text-center' style={{ fontSize: '1.5rem', cursor: 'pointer', fontWeight: '700' }}>TOURGUE</span>
                        <span className='text-center' style={{ fontSize: '1.5rem', cursor: 'pointer', fontWeight: '700' }}>RPM</span>
                        <span className='text-center' style={{ fontSize: '1.5rem', cursor: 'pointer', fontWeight: '700' }}>ENGINE CC</span>
                        <span className='text-center' style={{ fontSize: '1.5rem', cursor: 'pointer', fontWeight: '700' }}>CYLINDERS</span>
                        <span className='text-center' style={{ fontSize: '1.5rem', cursor: 'pointer', fontWeight: '700' }}>MPG</span>
                        <span className='text-center' style={{ fontSize: '1.5rem', cursor: 'pointer', fontWeight: '700' }}>WEIGHT</span>
                    </div>
                    <div className='col-md-4'>
                        <p className='text-center' style={{ fontSize: '1.5rem', lineHeight: '2rem',fontWeight: '700' }}>OPPONENT</p>
                        <p className='text-center' style={{ fontSize: '1.5rem', lineHeight: '2rem',fontWeight: '700' }}>LUCKY STRIKE</p>
                        <img src="assets/img/0-60_0001.0001.jpg" alt="..." width="100%" style={{ filter: 'blur(7px)' }} />
                    </div>
                </div>
                <div></div>
            </div>
        </Fragment>
    )
}