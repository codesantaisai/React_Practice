import {Component} from "react";


const TableHeading = ()=>{
    return(
        <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
                
         </thead>
        
        

    )
}

const TableBody = (props)=>{
    const {charactersData}= props;
    const rows =charactersData.map((character)=>{
        return(
            <tr>
                <td>{character.name}</td>
                <td>{character.age}</td>
            </tr>
        )

    })
    return (
        <tbody>
            {rows}
        </tbody>
    )
}


class Table extends Component {
    render(){
        const  {charactersData}=this.props
        return(
          <table>
             <TableHeading/>
           <TableBody charactersData={charactersData}/>
          </table>
            
        )
    }
}

export default Table;

