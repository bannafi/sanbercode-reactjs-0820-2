import React, { Component } from "react";
// import TabelHargaBuahCrud from "./TabelHargaBuahCrud"

class ItemBuah extends Component {

  render() {
    return (
      <tr>
        <td>{this.props.item.nama}</td>
        <td>{this.props.item.harga}</td>
        <td>{this.props.item.berat/1000} kg</td>
        <td>
        	<button onClick={editForm} >Edit</button>
        </td>
      </tr>
    )
  }
}

export default ItemBuah;
