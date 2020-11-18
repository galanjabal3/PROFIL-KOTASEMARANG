import React, { Component } from 'react';
import * as Mui from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';

class Beranda extends Component{
    render(){
        return(
            <div align="center">
                 <Mui.Container fixed>
                     <div align="center">
                     <Mui.Button variant="outlined" color="primary" href="/">Beranda</Mui.Button>
                     <Mui.Button variant="outlined" color="primary" href="/pariwisata">Pariwisata</Mui.Button>
                     <Mui.Button variant="outlined" color="primary" href="/kuliner">Kuliner</Mui.Button>
                     <Mui.Button variant="outlined" color="primary" href="/sejarah">Sejarah</Mui.Button>
                     <Mui.Button variant="outlined" color="primary" href="/pemerintahan">Pemerintahan</Mui.Button>
                     <h1 style={{ textAlign:'center' }}>Selamat datang di Beranda Kota Semarang</h1><hr/>
                     </div>
                 </Mui.Container>
                 <Carousel>
                         <img src='/wisata-semarang.jpg' width="1000" height="500"/>
                         <img src='/awsd.jpeg' width="1000" height="500"/>
                         <img src='/lap.jpg' width="1000" height="500"/>
                 </Carousel> <hr/>
                 <h2>Peta Kota Semarang</h2>
                 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126715.796074123!2d110.34702460740775!3d-7.024724603714551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b4d3f0d024d%3A0x1e0432b9da5cb9f2!2sSemarang%2C%20Kota%20Semarang%2C%20Jawa%20Tengah!5e0!3m2!1sid!2sid!4v1605670158569!5m2!1sid!2sid" width="600" height="450"/>
            </div>
        )
    }
}

export default Beranda;