import React, { useState, useEffect } from 'react';
import SearchArea from '../../SearchArea';
// import {HomeIntro, HomeAbout, StartBtn, StartBtnLink} from './HomePageElements'

//HomePage

const Hospital = () => {
    return (
        <div className ='hospital'>
        <SearchArea></SearchArea>
        
        <p>Division:Dhaka District:Dhaka Area:Gulshan</p>
        <p1>
        <table id="hospital">
    <thead>
    <tr>
            <th colspan="0">Name of Hospital</th>
            <th colspan="0">Location</th>
            <th colspan="0">Contact</th>
            <th colspan="2">General Bed</th>
            <th colspan="2">ICU Bed</th>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <th>Occupied</th>
            <th>Vacant</th>
            <th>Occupied</th>
            <th>Vacant</th>




        </tr>
    </thead>
    <tbody>
        <tr>
            <td>hello </td>
            <td> ji</td>
            <td>jo </td>
            <td> kj</td>
            <td>kl </td>
            <td>mn </td>
            <td>po</td>

        </tr>
        <tr>
            <td>12</td>
            <td>ghj </td>
            <td> vbn</td>
            <td> vbn</td>
            <td> bn</td>
            <td>bn </td>
            <td>vbn</td>

        </tr>
        <tr>
            <td> mn</td>
            <td>n</td>
            <td>n</td>
            <td>j</td>
            <td>j</td>
            <td>n </td>
            <td>n</td>

        </tr>
    </tbody>
</table>

        </p1>

      </div>
      
    )
}

export default Hospital
