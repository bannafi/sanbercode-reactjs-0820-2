import React from 'react';
// import ItemBuah from './ItemBuah'

class TabelHargaBuahCrud extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dataHargaBuah: [
        {nama: "Semangka", harga: 10000, berat: 1000},
        {nama: "Anggur", harga: 40000, berat: 500},
        {nama: "Strawberry", harga: 30000, berat: 400},
        {nama: "Jeruk", harga: 30000, berat: 1000},
        {nama: "Mangga", harga: 30000, berat: 500}
      ],
      inputName: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault()
    this.setState({
      dataHargaBuah: [...this.state.dataHargaBuah, this.state.inputName],
      inputName: ""
    })
  }

  handleChange = (event) => {
    this.setState({inputName: event.target.value})
  } 

  editForm = (event) => {
    console.log(event.target)
  }

  render() {
  	return (
      <>
        <table className="tg">
           <colgroup>
              <col className='lebarKolom1' />
              <col className='lebarKolom2' />
              <col className='lebarKolom2' />
              <col className='lebarKolom1' />
           </colgroup>
           <thead>
              <tr>
                 <th className="tgC3ow">Nama</th>
                 <th className="tgBaqh">Harga</th>
                 <th className="tgBaqh">Berat</th>
                 <th className="tgC3ow">Aksi</th>
              </tr>
           </thead>
           <tbody>
              {this.state.dataHargaBuah.map((el, index) => {
                return (
                    // <ItemBuah className='tgOlax' item={el} key={index} />
                    <tr>
                      <td>{el.nama}</td>
                      <td>{el.harga}</td>
                      <td>{el.berat/1000} kg</td>
                      <td>
                        <button onClick={this.editForm} >Edit</button>
                      </td>
                    </tr>
                )
              })}
           </tbody>
        </table>  
          <form onSubmit={this.handleSubmit} >
            <label htmlFor='nama'>Nama Buah: </label>
            <input required type="text" id='nama' value={this.state.inputName} onChange={this.handleChange} /> <br />
            <label htmlFor='harga'>Harga: </label>
            <input type="text" id='harga' /> <br />
            <label htmlFor='berat'>Berat: </label>
            <input type="text" id='berat' /> <br /> <br />
            <input type='submit' value='Tambah'/>
          </form>  
      </>		 
  	)	
  }
}

export default TabelHargaBuahCrud;