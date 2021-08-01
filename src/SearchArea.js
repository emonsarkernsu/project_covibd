import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
const SearchArea = () => {
    const [selected, setSelected] = React.useState("");
    const changeSelectOptionHandler = (event) => {
        setSelected(event.target.value);
    };
    const barishal = [

        "Barguna",
        "Barishal",
        "Bhola",
        "Jhalokathi",
        "Patuakhali",
        "Pirojpur",

    ]
    const chattogram = [
        "Brahmanbaria",
        "Chandpur", "Chattogram",
        "Comilla",
        "Cox",
        "Feni",
        "Khagrachhari",
        "Laksmipur",
        "Noakhali",
        "Rangamati",
    ];
    const dhaka = [
        "Dhaka", "Faridpur", "Gazipur", "Gopalganj", "Kishoreganj", "Madaripur", "Manikganj",
        "Munshiganj", "Narayanganj", "Narsingdi", "Rajbari", "Shariatpur", "Tangail"
    ];

    const khulna = [
        "Bagerhat","Chuadanga", "Jashor" ,"Jhenaidah" ,"Khulna", "Kushtia" ,"Magura", "Meherpur", "Narail" ,"Satkhira" 
    ];
    const mymensingh = [
 "Jamalpur","Mymensingh", "Netrokona", "Sherpur" 
    ]
    const rajshahi = [
        "Bogura","Chapai Nawabganj" ,"Joypurhat" ,"Naogaon" ,"Natore" ,"Pabna" ,"Rajshahi" ,"Sirajganj"
    ];
    const rangpur = [
        "Dinajpur" ,"Gaibandha" ,"Kurigram" ,"Lalmonirhat" ,"Nilphamari" ,"Panchaghar" ,"Rangpur","Thakurgaon" 
    ];
    const sylhet = [
        "Habiganj","Maulavi Bazar","Sunamganj" ,"Sylhet" 
    ];
    let division = null;
    let options = null;
    if (selected === "Barishal Division") {
        division = barishal;
    } else if (selected === "Chattogram Division") {
        division = chattogram;
    }
    else if (selected === "Dhaka Division") {
        division = dhaka;
    }
    else if (selected === "Khulna Division") {
        division = khulna;
    }
    else if (selected === "Mymensingh Division") {
        division = mymensingh;
    }
    else if (selected === "Rajshahi Division") {
        division = rajshahi;
    }
    else if (selected === "Rangpur Division") {
        division = rangpur;
    }
    else if (selected === "Sylhet Division") {
        division = sylhet;
    }

    
    
    if (division) {
        options = division.map((el) => <option key={el}>{el}</option>);
    }

    return (
        <div
      style={{
        width: "100%",
  padding: "12px",

      }}
    >
        <form>
            {/* </form><form action="" method="post"> */}
            <b>Division:  </b>
            <select onChange={changeSelectOptionHandler}>
                <option value="">Select</option>
                <option value="Barishal Division">Barisal Division</option>
                <option value="Chattogram Division">Chattogram Division</option>
                <option value="Dhaka Division">Dhaka Division</option>
                <option value="Khulna Division">Khulna Division</option>
                <option value="Mymensingh Division">Mymensingh Division</option>
                <option value="Rajshahi Division">Rajshahi Division</option>
                <option value="Rangpur Division">Rangpur Division</option>
                <option value="Sylhet Division">Sylhet Division</option>
            </select>
            <br></br> 
            <br></br>
            <b>District:  </b>
            <select name="district_filter" id="district_filter" class="custom_input" onchange="get_upazila_from_dedicated_list(this.value)">
            <option value="">Select</option>
                {
                    options
                }

            </select>



        </form>
        <br></br>
        <Button padding= '20px' color='red' text='Search Area'/>
        </div>

    )
}

export default SearchArea
