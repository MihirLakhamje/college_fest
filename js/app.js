const team_container = document.querySelector(".team-details .row")
// console.log(team_container)
const contact_container = document.querySelector(".table tbody")
console.log(contact_container);

let literary_embed = document.querySelector("#la-embed");
let fine_embed = document.querySelector("#fa-embed");
let media_embed = document.querySelector("#mm-embed");
let sport_embed = document.querySelector("#ss-embed");
let esport_embed = document.querySelector("#es-embed");
let performing_embed = document.querySelector("#pa-embed");
let management_embed = document.querySelector("#ma-embed");
let informal_embed = document.querySelector("#in-embed");

const team_details = [
    {
        "name": "Gouri Sanjay Naik",
        "image": "images/gouri (Medium).JPG",
        "designation": "General Secretary",
        "phone": "+91 93266 77304"
    },
    {
        "name": "Karan Chaoudhary",
        "image": "images/Karan-new (Medium).JPG",
        "designation": "Joint Secretary",
        "phone": "+91 94635 48165"
    },
    {
        "name": "Sanaeya",
        "image": "images/sanaeya (Medium).JPG",
        "designation": "Contingent Leader",
        "phone": "+91 75067 40937"
    },
    {
        "name": "Teerth Santush Thakur",
        "image": "images/Teerth (Medium).JPG",
        "designation": "A. Contingent Leader",
        "phone": "+91 91360 74510"
    },
    {
        "name": "Mayur Jagtap",
        "image": "images/Mayur (Medium).JPG",
        "designation": "Events HOD",
        "phone": "+91 97027 11472"
    },
    {
        "name": "Anish Patwardhan",
        "image": "images/Anish (Medium).JPG",
        "designation": "Events HOD",
        "phone": "+91 75063 97374"
    },
    {
        "name":"Ashwathy Preman",
        "image":"images/Ashwathy (Medium).JPG",
        "designation":"Literary Arts HOD",
        "phone":"+91 8657842590"
    },
    {
        "name":"Harilakshmi Priyan",
        "image":"images/Harilaxmi (Medium).JPG",
        "designation":"Fine Arts HOD",
        "phone":"+91 8828939889"
    },
    {
        "name":"Saloni Kedari",
        "image":"images/Saloni (Medium).JPG",
        "designation":"Mass Media HOD",
        "phone":"+91 7397938981"
    },
    {
        "name":"Sujit Barui",
        "image":"images/Sujit (Medium).JPG",
        "designation":"E-Sports HOD, Sports HOD",
        "phone":"+91 9987531078"
    },
    {
        "name":"Gayatri Datye",
        "image":"images/Gayatri (Medium).JPG",
        "designation":"Performing Arts HOD",
        "phone":"+91 7506549065"
    },
    {
        "name":"Laxmi Harijan",
        "image":"images/Laxmi (Medium).JPG",
        "designation":"Informals HOD",
        "phone":"+91 9867794618"
    },
    {
        "name":"Hidayat Pathan",
        "image":"images/Hidayat (Medium).JPG",
        "designation":"Digital Media HOD",
        "phone":"+91 77385 26373"
    },
    {
        "name":"Ritu Kaba",
        "image":"images/Ritu (Medium).JPG",
        "designation":"Digital Media HOD",
        "phone":"+91 75063 97374"
    },
    {
        "name":"Disha Jain",
        "image":"images/Disha (Medium).JPG",
        "designation":"Digital Media AHOD",
        "phone":"+91 98673 23597"
    },
    {
        "name":"Rutuja Dhoke",
        "image":"images/Rutuja (Medium).JPG",
        "designation":"Admin & Logistics HOD, Security HOD",
        "phone":"+91 88283 68293"
    },
    {
        "name":"Ancey Varghese",
        "image":"images/Ancey (Medium).JPG",
        "designation":"Admin & Logistics AHOD",
        "phone":"+91 91527 99759"
    },
    {
        "name":"Jayhind",
        "image":"images/Jayhind (Medium).JPG",
        "designation":"Admin & Logistics AHOD",
        "phone":"+91 91527 99759"
    },
    {
        "name":"Anuj Yadav",
        "image":"images/Anuj (Medium).JPG",
        "designation":"Admin & Logistics AHOD",
        "phone":"+91 91255 81095"
    },
    {
        "name":"Indrayani Phadtare",
        "image":"images/Indrayani (Medium).JPG",
        "designation":"Finance HOD",
        "phone":"+91 77788 84884"
    },
    {
        "name":"Sargam Thakur",
        "image":"images/Sargam (Medium).JPG",
        "designation":"Finance HOD",
        "phone":"+91 99208 37184"
    },
    {
        "name":"Lulua Gadiwala",
        "image":"images/Lullu (Medium).JPG",
        "designation":"Creativity HOD",
        "phone":"+91 86525 35297"
    },
    {
        "name":"Salman Mapari",
        "image":"images/Salman (Medium).JPG",
        "designation":"Creativity AHOD",
        "phone":"+91 84509 84456"
    },
    {
        "name":"Anshupriya Jha",
        "image":"images/Anshu (Medium).JPG",
        "designation":"Creativity AHOD",
        "phone":"+91 84510 93795"
    },
    {
        "name":"Nirali Doshi",
        "image":"images/Nirali (Medium).JPG",
        "designation":"Public Relations HOD",
        "phone":"+91 98924 26762"
    },
    {
        "name":"Preeti Gupta",
        "image":`images/Preeti_2 (Medium).JPG`,
        "designation":"Public Relation AHOD",
        "phone":"+91 8355868706"
    }
]

const contact_details = [
    {
        "dept": "Performing Arts",
        "hod_name": "Gayatri Datye",
        "number": "+91 7506549065"
    },
    {
        "dept": "Mass Media",
        "hod_name": "Saloni Kedari",
        "number": "+91 7397938981"
    },
    {
        "dept": "E-Sports and Sports",
        "hod_name": "Sujit Barui",
        "number": "+91 9987531078"
    },
    {
        "dept": "Literary Arts",
        "hod_name": "Ashwathy Preman",
        "number": "+91 8657842590"
    },
    {
        "dept": "Management",
        "hod_name": "Aayushi Bhawan",
        "number": "+91 8828761937"
    },
    {
        "dept": "Fine Arts",
        "hod_name": "Harilakshmi Priyan",
        "number": "+91 8828939889"
    },
    {
        "dept": "Informals",
        "hod_name": "Laxmi Harijan",
        "number": "+91 9867794618"
    }
]
team_details.forEach(member => {
    // console.log(member);
    team_container.innerHTML += `<div class="card col-md-4 col-sm-6 m-3" style="width: 18rem;">
    <img src="${member.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text">${member.name}</p>
      <p class="card-text"><span>${member.designation}</span><span>${member.phone}</span></p>
    </div>
  </div>`
});
contact_details.forEach(row => {
    contact_container.innerHTML += `<tr>
    <th scope="row">${row.dept}</th>
    <td>${row.hod_name}</td>
    <td>${row.number}</td>
  </tr>`
})


// event details
const literary_arts = [
    {
        "la_name": "Human Crossword",
        "la_duration": 1.5,
        "la_player": 1,
        "la_category": "Premium",
        "la_link": "https://forms.gle/xPYUysoTf2hAQHQe9"
    },
    {
        "la_name": "Grammar Nazi",
        "la_duration": 1.5,
        "la_player": 2,
        "la_category": "Standard",
        "la_link": "https://forms.gle/5ZcLtNgWfxRMQase7"
    },
    {
        "la_name": "Niveau Relay (story relay)",
        "la_duration": 1.5,
        "la_player": 4,
        "la_category": "Premium",
        "la_link": "https://forms.gle/TooE1G7vE9LBEDBWA"
    },
    {
        "la_name": "Minutieux (JAM)",
        "la_duration": 2,
        "la_player": 2,
        "la_category": "Flagship",
        "la_link": "https://forms.gle/NhWzCLL3hvgpxqzQ7"
    },
    {
        "la_name": "Stoecia's Alegy (Poetry writing)",
        "la_duration": 1,
        "la_player": 1,
        "la_category": "Basic",
        "la_link": "https://forms.gle/dPHHxduqYfkHfeHP6"
    },
    {
        "la_name": "Illusion Of Matrix(debate)",
        "la_duration": 1.5,
        "la_player": 2,
        "la_category": "Flagship",
        "la_link": "https://forms.gle/oA887jbahs4DN9JE6"
    }
];



const fine_arts = [
    {
        "fa_name": "Sneakerent(sneaker painting)",
        "fa_duration": 2,
        "fa_player": 1,
        "fa_category": "Premium",
        "fa_link": "https://docs.google.com/forms/d/e/1FAIpQLSfid9iwVlbHEII32yL50RAn7TVJM6sKI1yUBOnwkkh7VJw3Hg/viewform?usp=sf_link"
    },
    {
        "fa_name": "Streak Art(face painting + makeup)",
        "fa_duration": 2,
        "fa_player": 3,
        "fa_category": "Standard",
        "fa_link": "https://docs.google.com/forms/d/e/1FAIpQLSdwt4rX4M274iNy6rv_9RahXvnWLBZHx7bmM5IoNZT5HDverQ/viewform?usp=sf_link"
    },
    {
        "fa_name": "Pov Topia",
        "fa_duration": 2,
        "fa_player": 1,
        "fa_category": "Basic",
        "fa_link": "https://docs.google.com/forms/d/e/1FAIpQLScdJkfA6zQNmJqKk683qNMPuVX4N3AmiIBupfLfXHK0mwKxgg/viewform?usp=sf_link"
    },
    {
        "fa_name": "Peinture de Sac(tote bag painting)",
        "fa_duration": 2,
        "fa_player": 1,
        "fa_category": "Flagship",
        "fa_link": "https://docs.google.com/forms/d/e/1FAIpQLSc4nCAJp8KaZOdIRuVGlGfDikFkMP1H2XI26ZohkXTsmSWUjA/viewform?usp=sf_link"
    },
    {
        "fa_name": "Onirique (origami art)",
        "fa_duration": 2,
        "fa_player": 1,
        "fa_category": "Permium",
        "fa_link": "https://docs.google.com/forms/d/e/1FAIpQLScnW6EGzow8RjzI6ovTU-m27ax61kNJeuOtrgxCQABhywt0Kg/viewform?usp=sf_link"
    }
]

const mass_media = [
    {
        "mm_name": "Fluorite's Magic (ad film)",
        "mm_duration": 2.5,
        "mm_player": 2,
        "mm_category": "Flagship",
        "mm_link": "https://docs.google.com/forms/d/e/1FAIpQLSfQ_GqiqAXpTjORDqjs3W5rMo87gxu_I5PDNTGxGES8MgzmBQ/viewform?usp=sf_link"
    },
    {
        "mm_name": "Capture the perceiving of Gaia",
        "mm_duration": 2,
        "mm_player": 1,
        "mm_category": "Premium",
        "mm_link": "https://docs.google.com/forms/d/e/1FAIpQLScnnNzBUD2lSVAYuNO7PT2NAK0-11P3AVmKQy8qBnPLYgUeSQ/viewform?usp=sf_link"
    },
    {
        "mm_name": "Shoot the Amethyst (journalism+short film)",
        "mm_duration": "Entire Day",
        "mm_player": 3,
        "mm_category": "Premium",
        "mm_link": "https://docs.google.com/forms/d/e/1FAIpQLScqFeOrBswyl2bVA9vJ3tpVq65xd8-R-pTEKFG4nMdFI6LO2Q/viewform?usp=sf_link"
    },
    {
        "mm_name": "Story of Wuther and Brow(Story board)",
        "mm_duration": 3,
        "mm_player": 1,
        "mm_category": "Flagship",
        "mm_link": "https://docs.google.com/forms/d/e/1FAIpQLScr3DduMnBUfzlFTJr32yO2GByNOiUQEWz9WfaBGkWEZmw3SA/viewform?usp=sf_link"
    },
    {
        "mm_name": "Spot the Visage (model photography)",
        "mm_duration": 2,
        "mm_player": "1 + 1 Model",
        "mm_category": "Standard",
        "mm_link": "https://docs.google.com/forms/d/e/1FAIpQLSd8JR30FfnxNLUU2RdtpqIqJWfNHO01lIYMgT3W5DUFwRaKTQ/viewform?usp=sf_link"
    }
]

const sports = [
    {
        "ss_name": "All White (box cricket)",
        "ss_fees": 500,
        "ss_player": 6,
        "ss_category": "Flagship",
        "ss_link": "https://docs.google.com/forms/d/e/1FAIpQLSecFCXOuqaRq6RYtb1fZ9Rl4YbVg-sIpioIrUyrNd-OyOWdRA/viewform?usp=sf_link"
    },
    {
        "ss_name": "Fast and Flashy(rink football)",
        "ss_fees": 700,
        "ss_player": 7,
        "ss_category": "Premium",
        "ss_link": "https://docs.google.com/forms/d/e/1FAIpQLSceBbhT8HP7g0mBhk7GXlcuXWattiG4mELh9FmdR8Nj81JXVA/viewform?usp=sf_link"
    },
    {
        "ss_name": "Penumbra(Blind fold chess)",
        "ss_fees": 150,
        "ss_player": 2,
        "ss_category": "Premium",
        "ss_link": "https://docs.google.com/forms/d/e/1FAIpQLSfC1uTZ94lc-x04pt44mcRQ04_0kHBaqBK0Rt7_f2-tpP89dg/viewform?usp=sf_link"
    },
    {
        "ss_name": "Conquest of Table (Table Tennis)",
        "ss_fees": 100,
        "ss_player": 1,
        "ss_category": "Premium",
        "ss_link": "https://docs.google.com/forms/d/e/1FAIpQLSe9Psz3nikwV_voeanWWAGiAQ-V4Ue8xQulGFEJme74FgmyJw/viewform?usp=sf_link"
    },
    {
        "ss_name": "The Shuffle Board (Carrom)",
        "ss_fees": 100,
        "ss_player": 1,
        "ss_category": "Standard",
        "ss_link": "https://docs.google.com/forms/d/e/1FAIpQLSfvP3LhBtUpiw0XvCABQiOvJjZhhXpdDUQS8d_T0zyIa958ag/viewform?usp=sf_link"
    },
    {
        "ss_name": "Hercules",
        "ss_fees": 100,
        "ss_player": 1,
        "ss_category": "Flagship",
        "ss_link": "https://docs.google.com/forms/d/e/1FAIpQLSdhyMfvoOgILOEiChC4TVs8l4J1RV-7_v6T-t_cgvVcyFvhrA/viewform?usp=sf_link"
    }
]

const esports = [
    {
        "es_name": "Kicks of Kage (FIFA)",
        "es_fees": 100,
        "es_player": 1,
        "es_category": "Premium",
        "es_link": "https://docs.google.com/forms/d/e/1FAIpQLSe4NixjT5iuHBdBuukm7BkkcvpwhurXWoxre_0VRG5hEfuTnw/viewform?usp=sf_link"
    },
    {
        "es_name": "Hall of Fallen (Valorant)",
        "es_fees": 500,
        "es_player": 5,
        "es_category": "Flagship",
        "es_link": "https://docs.google.com/forms/d/e/1FAIpQLScejEpI6Y8_am6C95LA1Gu3S7OFaP_7As1_BEEJA9s-6_PYSg/viewform?usp=sf_link"
    },
    {
        "es_name": "Dark War (BGMI Classic)",
        "es_fees": 200,
        "es_player": "4 + 1",
        "es_category": "Standard",
        "es_link": "https://docs.google.com/forms/d/e/1FAIpQLSeim4TOwXo-sXmH78YlzyKaKmUVP37Io0RR8nuEdb8rT0hC2g/viewform?usp=sf_link"
    },
    {
        "es_name": "Dark War (BGMI TDM)",
        "es_fees": 100,
        "es_player": "4 + 1",
        "es_category": "Standard",
        "es_link": "https://docs.google.com/forms/d/e/1FAIpQLSc3o5Izq-GfTTGdKMHamujMtViKt7CJ7nGVxYyhodFW5nIKVA/viewform?usp=sf_link"
    },
    {
        "es_name": "BLOODY NIGHT HELL (CODM)",
        "es_fees": 200,
        "es_player": "4 + 1",
        "es_category": "Standard",
        "es_link": "https://docs.google.com/forms/d/e/1FAIpQLSfGnuD3sXoj4kteEWqK2P2RQ1_FPKMYUM250-R7wDe4Yxvl8Q/viewform?usp=sf_link"
    }
]

const performing_arts = [
    {
        "pa_name": "Salam-E-Sur (Solo Singing)",
        "pa_duration": 2.5,
        "pa_player": 1,
        "pa_category": "Basic",
        "pa_link": "https://docs.google.com/forms/d/e/1FAIpQLSeHCopwv4jj-3Dp_McsKQNFp1g4nui5Jezy30tANLsC6dRqJQ/viewform?usp=sf_link"
    },
    {
        "pa_name": "Recap (Rap + Beatboxing)",
        "pa_duration": 2.5,
        "pa_player": 2,
        "pa_category": "Premium",
        "pa_link": "https://docs.google.com/forms/d/e/1FAIpQLSf6N9RgyrDgOIRi6e1L8e5eb5sitX5_f1fSB_7V2xIXmcrsFg/viewform?usp=sf_link"
    },
    {
        "pa_name": "Ha Ha Hilarious (Stand Up)",
        "pa_duration": 3.5,
        "pa_player": 1,
        "pa_category": "Standard",
        "pa_link": "https://docs.google.com/forms/d/e/1FAIpQLSeYbTZZk_3wDyT_tPHyMgBJ_I8FRC-dxHR1y8g47NvAPBYCMw/viewform?usp=sf_link"
    },
    {
        "pa_name": "Rab Ne Bana Di Jodi (Group Dance)",
        "pa_duration": 2.5,
        "pa_player": 1,
        "pa_category": "Premium",
        "pa_link": "https://docs.google.com/forms/d/e/1FAIpQLSfdi1_Hnh_sJ1yTJfOBU-O-CW81TX8jCLHR7XS-N6tI9p_Jbg/viewform?usp=sf_link"
    },
    {
        "pa_name": "Forge The Beat (Band)",
        "pa_duration": 2.5,
        "pa_player": 1,
        "pa_category": "Premium",
        "pa_link": "https://docs.google.com/forms/d/e/1FAIpQLScgWv8Z3bHoBiugoexTWXOspW9RNkoWraRY96oqHs-yr5d9ew/viewform?usp=sf_link"
    },
    {
        "pa_name": "Halla Bol (Street play)",
        "pa_duration": 2.5,
        "pa_player": 1,
        "pa_category": "Basic",
        "pa_link": "https://docs.google.com/forms/d/e/1FAIpQLScp3d2zhMZdMZc3neFLTPTr8C8H87XRESQkTUeFJOhlSurHag/viewform?usp=sf_link"
    },
    {
        "pa_name": "Face off (Cypher)",
        "pa_duration": 4,
        "pa_player": 1,
        "pa_category": "Flagship",
        "pa_link": "https://docs.google.com/forms/d/e/1FAIpQLSexr9uP3QdhnFlvY3La_BqzKXTDVHdLtqqqqiZ5gHXtyP7XUw/viewform?usp=sf_link"
    }
]

const management = [
    {
        "ma_name": "Product War",
        "ma_duration": 3,
        "ma_player": 2,
        "ma_category": "Standard",
        "ma_link": "https://docs.google.com/forms/d/e/1FAIpQLScP73Y9dGs7YJArlJCotPFUBfLsZq7Zg99CC4Y5VwlKVaHg5w/viewform?usp=sf_link"
    },
    {
        "ma_name": "Occupational Maze",
        "ma_duration": 3,
        "ma_player": 2,
        "ma_category": "Premium",
        "ma_link": "https://docs.google.com/forms/d/e/1FAIpQLSfjzW7f3yl_vLsGSlxli5VzBDEHBJyAMATzLZ-DJPP2M1q19g/viewform?usp=sf_link"
    },
    {
        "ma_name": "Merger Ferd",
        "ma_duration": 3,
        "ma_player": 1,
        "ma_category": "Flagship",
        "ma_link": "https://docs.google.com/forms/d/e/1FAIpQLSe2747ODuW8KO26PCbUwx2TOcubnSUJfW6SQi2sIiwk3sN-8g/viewform?usp=sf_link"
    },
    {
        "ma_name": "Mock Stock",
        "ma_duration": 3,
        "ma_player": 1,
        "ma_category": "Flagship",
        "ma_link": "https://docs.google.com/forms/d/e/1FAIpQLSeI3stFk7WPmm0f1Xca3pjb94TcKy56fUwLJXIh8Xh4x8ZwSA/viewform?usp=sf_link"
    }
]

const informals = [
    {
        "in_name": "Mr & Miss UTKARSH",
        "in_duration": 3,
        "in_player": 2,
        "in_category": "Flagship",
        "in_link": "https://docs.google.com/forms/d/e/1FAIpQLScj_WYBWKCYZxYy-ZWhKO1wVp4de9JaXOWMiGjiBos32LLj5w/viewform?usp=sf_link"
    },
    {
        "in_name": "Fashion Show",
        "in_duration": 3,
        "in_player": "8 To 4",
        "in_category": "Flagship",
        "in_link": "https://docs.google.com/forms/d/e/1FAIpQLSdSAA6ZSZ6QsnoKMs20UD0xIL2NuMdJ_EnIQioslBIJTbk3bg/viewform?usp=sf_link"
    },
    {
        "in_name": "Escape Room",
        "in_duration": 3,
        "in_player": 2,
        "in_category": "Flagship",
        "in_link": "https://docs.google.com/forms/d/e/1FAIpQLSeWBbuKdbfU7mWql7MwgvV44TYhvU91l3Gk_ejHQj8pQKaQDg/viewform?usp=sharing"
    },
    {
        "in_name": "Top 5",
        "in_duration": 3,
        "in_player": 2,
        "in_category": "Flagship",
        "in_link": "https://docs.google.com/forms/d/e/1FAIpQLSdF9c9-nBPF_N3InUjygq6L-76ATPXOIbikbmLN6O-PIQ6Slw/viewform?usp=sf_link"
    },
    {
        "in_name": "War of Cl's",
        "in_duration": 3,
        "in_player": 2,
        "in_category": "Flagship",
        "in_link": "https://docs.google.com/forms/d/e/1FAIpQLScHQX3J3aHPspqiU_-TZqnnXU_dncZwTxsyoi0bdVCZ_lBLrQ/viewform?usp=sf_link"
    },
    {
        "in_name": "War of DJ's",
        "in_duration": 3,
        "in_player": 2,
        "in_category": "Flagship",
        "in_link": "https://docs.google.com/forms/d/e/1FAIpQLSd78IrJElQEDKUiO8TZeE2mCMBXdZrnMJuicSjrf_6yBqsKkg/viewform?usp=sf_link"
    }
];


literary_arts.forEach(ele => {
    literary_embed.innerHTML += `
        <li class="list-group-item">
            <div class="container d-flex flex-column row-gap-4 py-4">
                <h3 class="fs-5">${ele.la_name}</h3>
                <div class="d-flex justify-content-center t-center row row-gap-4">
                    <div class="col-lg-4">
                        <span>Duration:</span>
                        <span>${ele.la_duration}Hrs</span>
                    </div>
                    <div class="col-lg-4">
                        <span>Players:</span>
                        <span>${ele.la_player}</span>
                    </div>
                    <div class="col-lg-4">
                        <span>Event Category:</span>
                        <span>${ele.la_category}</span>
                    </div>
                </div>
                <div class="ms-4">
                    <a href="${ele.la_link}" class="btn btn-primary">Register</a>
                </div>
            </div>
        </li>
    `;
});
fine_arts.forEach(ele => {
    fine_embed.innerHTML += `
        <li class="list-group-item">
            <div class="container d-flex flex-column row-gap-4 py-4">
                <h3 class="fs-5">${ele.fa_name}</h3>
                <div class="d-flex justify-content-center t-center row row-gap-4">
                    <div class="col-lg-4">
                        <span>Duration:</span>
                        <span>${ele.fa_duration}Hrs</span>
                    </div>
                    <div class="col-lg-4">
                        <span>Players:</span>
                        <span>${ele.fa_player}</span>
                    </div>
                    <div class="col-lg-4">
                        <span>Event Category:</span>
                        <span>${ele.fa_category}</span>
                    </div>
                </div>
                <div class="ms-4">
                    <a href="${ele.fa_link}" class="btn btn-primary">Register</a>
                </div>
            </div>
        </li>
    `;
});
mass_media.forEach(ele => {
    media_embed.innerHTML += `
        <li class="list-group-item">
            <div class="container d-flex flex-column row-gap-4 py-4">
                <h3 class="fs-5">${ele.mm_name}</h3>
                <div class="d-flex justify-content-center t-center row row-gap-4">
                    <div class="col-lg-4">
                        <span>Duration:</span>
                        <span>${ele.mm_duration}Hrs</span>
                    </div>
                    <div class="col-lg-4">
                        <span>Players:</span>
                        <span>${ele.mm_player}</span>
                    </div>
                    <div class="col-lg-4">
                        <span>Event Category:</span>
                        <span>${ele.mm_category}</span>
                    </div>
                </div>
                <div class="ms-4">
                    <a href="${ele.mm_link}" class="btn btn-primary">Register</a>
                </div>
            </div>
        </li>
    `;
});
sports.forEach(ele => {
    sport_embed.innerHTML += `
        <li class="list-group-item">
            <div class="container d-flex flex-column row-gap-4 py-4">
                <h3 class="fs-5">${ele.ss_name}</h3>
                <div class="d-flex justify-content-center t-center row row-gap-4">
                    <div class="col-lg-4">
                        <span>Duration:</span>
                        <span>${ele.ss_fees}/-</span>
                    </div>
                    <div class="col-lg-4">
                        <span>Players:</span>
                        <span>${ele.ss_player}</span>
                    </div>
                    <div class="col-lg-4">
                        <span>Event Category:</span>
                        <span>${ele.ss_category}</span>
                    </div>
                </div>
                <div class="ms-4">
                    <a href="${ele.ss_link}" class="btn btn-primary">Register</a>
                </div>
            </div>
        </li>
    `;
});
esports.forEach(ele => {
    esport_embed.innerHTML += `
        <li class="list-group-item">
            <div class="container d-flex flex-column row-gap-4 py-4">
                <h3 class="fs-5">${ele.es_name}</h3>
                <div class="d-flex justify-content-center t-center row row-gap-4">
                    <div class="col-lg-4">
                        <span>Duration:</span>
                        <span>${ele.es_fees}/-</span>
                    </div>
                    <div class="col-lg-4">
                        <span>Players:</span>
                        <span>${ele.es_player}</span>
                    </div>
                    <div class="col-lg-4">
                        <span>Event Category:</span>
                        <span>${ele.es_category}</span>
                    </div>
                </div>
                <div class="ms-4">
                    <a href="${ele.es_link}" class="btn btn-primary">Register</a>
                </div>
            </div>
        </li>
    `;
});
performing_arts.forEach(ele => {
    performing_embed.innerHTML += `
        <li class="list-group-item">
            <div class="container d-flex flex-column row-gap-4 py-4">
                <h3 class="fs-5">${ele.pa_name}</h3>
                <div class="d-flex justify-content-center t-center row row-gap-4">
                    <div class="col-lg-4">
                        <span>Duration:</span>
                        <span>${ele.pa_duration}Hrs</span>
                    </div>
                    <div class="col-lg-4">
                        <span>Players:</span>
                        <span>${ele.pa_player}</span>
                    </div>
                    <div class="col-lg-4">
                        <span>Event Category:</span>
                        <span>${ele.pa_category}</span>
                    </div>
                </div>
                <div class="ms-4">
                    <a href="${ele.link}" class="btn btn-primary">Register</a>
                </div>
            </div>
        </li>
    `;
});
management.forEach(ele => {
    management_embed.innerHTML += `
        <li class="list-group-item">
            <div class="container d-flex flex-column row-gap-4 py-4">
                <h3 class="fs-5">${ele.ma_name}</h3>
                <div class="d-flex justify-content-center t-center row row-gap-4">
                    <div class="col-lg-4">
                        <span>Duration:</span>
                        <span>${ele.ma_duration}Hrs</span>
                    </div>
                    <div class="col-lg-4">
                        <span>Players:</span>
                        <span>${ele.ma_player}</span>
                    </div>
                    <div class="col-lg-4">
                        <span>Event Category:</span>
                        <span>${ele.ma_category}</span>
                    </div>
                </div>
                <div class="ms-4">
                    <a href="${ele.ma_link}" class="btn btn-primary">Register</a>
                </div>
            </div>
        </li>
    `;
});
informals.forEach(ele => {
    informal_embed.innerHTML += `
        <li class="list-group-item">
            <div class="container d-flex flex-column row-gap-4 py-4">
                <h3 class="fs-5">${ele.in_name}</h3>
                <div class="d-flex justify-content-center t-center row row-gap-4">
                    <div class="col-lg-4">
                        <span>Duration:</span>
                        <span>${ele.in_duration}Hrs</span>
                    </div>
                    <div class="col-lg-4">
                        <span>Players:</span>
                        <span>${ele.in_player}</span>
                    </div>
                    <div class="col-lg-4">
                        <span>Event Category:</span>
                        <span>${ele.in_category}</span>
                    </div>
                </div>
                <div class="ms-4">
                    <a href="${ele.in_link}" class="btn btn-primary">Register</a>
                </div>
            </div>
        </li>
    `;
});