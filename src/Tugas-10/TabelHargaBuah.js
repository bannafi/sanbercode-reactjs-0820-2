import React from 'react';

let dataHargaBuah = [
  {nama: "Semangka", harga: 10000, berat: 1000},
  {nama: "Anggur", harga: 40000, berat: 500},
  {nama: "Strawberry", harga: 30000, berat: 400},
  {nama: "Jeruk", harga: 30000, berat: 1000},
  {nama: "Mangga", harga: 30000, berat: 500}
]

class TabelHargaBuah extends React.Component {
  render() {
  	return (
		<table className="tg">
           <colgroup>
              <col className='lebarKolom1' />
              <col className='lebarKolom2' />
              <col className='lebarKolom2' />
           </colgroup>
           <thead>
              <tr>
                 <th className="tgC3ow">Nama</th>
                 <th className="tgBaqh">Harga</th>
                 <th className="tgBaqh">Berat</th>
              </tr>
           </thead>
           <tbody>
              {dataHargaBuah.map(el => {
              	return (
              		<tr>
              			<td className="tgOlax">{el.nama}</td>
              			<td className="tgOlax">{el.harga}</td>
              			<td className="tgOlax">{el.berat / 1000} kg</td>
              		</tr>
              	)
              })}
           </tbody>
        </table>
  	)	
  }
}

export default TabelHargaBuah;