import React from 'react'
import SearchArea from '../../SearchArea';
 import './vaccine.css'
const Vaccine = () => {
    return (
        <div className="hospital">
        <SearchArea></SearchArea>
        
        <p>Division:Dhaka District:Dhaka Area:Gulshan</p>
        <p1>Vaccinating:  ✅ On Hold:   🟡 Not vaccinating:  ❌</p1>
        <p1>
        <table id="hospital">
    <thead>
    <tr>
            <th colspan="0">Name of center</th>
            <th colspan="0">Vaccine Type</th>
            <th colspan="0">Special Info </th>
        </tr>

    </thead>
    <tbody>
        <tr>
            <td>hello ✅</td>
            <td> ji</td>
            <td>jo </td>


        </tr>
        <tr>
            <td>ghek 🟡</td>
            <td>ghj </td>
            <td> vbn</td>


        </tr>
        <tr>
            <td> mn</td>
            <td>n</td>
            <td>n</td>


        </tr>
    </tbody>
</table>

        </p1>


     
      </div>
    )
}

export default Vaccine
