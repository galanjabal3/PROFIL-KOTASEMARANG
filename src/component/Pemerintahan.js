import React, { Component } from 'react';
import * as Mui from '@material-ui/core';

class Pemerintahan extends Component{
    render(){
        return(
            <div align="center">
                 <Mui.Container fixed>
                     <Mui.Button variant="outlined" color="primary" href="/">Beranda</Mui.Button>
                     <Mui.Button variant="outlined" color="primary" href="/pariwisata">Pariwisata</Mui.Button>
                     <Mui.Button variant="outlined" color="primary" href="/kuliner">Kuliner</Mui.Button>
                     <Mui.Button variant="outlined" color="primary" href="/sejarah">Sejarah</Mui.Button>
                     <Mui.Button variant="outlined" color="primary" href="/pemerintahan">Pemerintahan</Mui.Button>
                     <h1 style={{ textAlign:'center' }}>Selamat datang di Pemerintahan Kota Semarang</h1><hr/>
                     <img src="/lambang.png" width="700" height="600" />
                     <h2>Daftar Wali Kota Semarang</h2>

                 </Mui.Container>
            </div>
        )
    }
}

export default Pemerintahan;