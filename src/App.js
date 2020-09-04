import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <body>
    <div className='formLabel'>
    <h1>Form Pembelian Buah</h1>
    
    <form action="">
        <table>
            <tr>
                <th><label for="Nama">Nama Pelanggan</label></th>
                <td><input type="text" id="nama" /></td>
            </tr>
           
            <tr>
                <th id='daftarItem'><label >Daftar Item</label></th>
                <td>
                    <input type="checkbox" name="item" value="semangka" />Semangka <br />
                    <input type="checkbox" name="item" value="jeruk" />Jeruk <br />
                    <input type="checkbox" name="item" value="nanas" />Nanas <br />
                    <input type="checkbox" name="item" value="salak" />Salak <br />
                    <input type="checkbox" name="item" value="anggur" />Anggur <br />
                </td>
            </tr>
        </table>
        <input type="submit" value="Kirim" className='button' />
    </form> <br />
  </div>
</body>
    </div>
  );
}

export default App;
