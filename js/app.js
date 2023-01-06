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
        "fa_link": "https://docs.google.com/forms/d/1hBh-XfnmEtz5lLJCzNWrbEly0Jf-nH71CGBZr3uv7Jo/viewform?ts=63b66de2&edit_requested=true"
    },
    {
        "fa_name": "Streak Art(face painting + makeup)",
        "fa_duration": 2,
        "fa_player": 3,
        "fa_category": "Standard",
        "fa_link": "https://docs.google.com/forms/d/1Sqh9JV28v0kadLY4ojP8v9oKLA2jlgxjJlXvILk5Ygg/viewform?ts=63b66edd&edit_requested=true"
    },
    {
        "fa_name": "Pov Topia",
        "fa_duration": 2,
        "fa_player": 1,
        "fa_category": "Basic",
        "fa_link": "https://docs.google.com/forms/d/1MORbFSINk691FXwga9K9sxlob2-3B1uC9jAWzProBKI/viewform?ts=63b66f7d&edit_requested=true"
    },
    {
        "fa_name": "Peinture de Sac(tote bag painting)",
        "fa_duration": 2,
        "fa_player": 1,
        "fa_category": "Flagship",
        "fa_link": "https://docs.google.com/forms/d/1cyOe6uY4k30pJlRX-cyUXfej_kITAG0XnO3lb19EN9A/viewform?ts=63b66fb4&edit_requested=true"
    },
    {
        "fa_name": "Onirique (origami art)",
        "fa_duration": 2,
        "fa_player": 1,
        "fa_category": "Permium",
        "fa_link": "https://docs.google.com/forms/d/1kjKf3rnjS0RHUVGHz4FwgV_JEiZBjcBW5mTRsmw2qK8/viewform?ts=63b67085&edit_requested=true"
    }
]

const mass_media = [
    {
        "mm_name": "Fluorite's magic (ad film)",
        "mm_duration": 2.5,
        "mm_player": 2,
        "mm_category": "Flagship",
        "mm_link": ""
    },
    {
        "mm_name": "Capture the perceiving of Gaia",
        "mm_duration": 2,
        "mm_player": 1,
        "mm_category": "Premium",
        "mm_link": "https://docs.google.com/forms/d/1hBh-XfnmEtz5lLJCzNWrbEly0Jf-nH71CGBZr3uv7Jo/viewform?ts=63b66de2&edit_requested=true"
    },
    {
        "mm_name": "Shoot the Amethyst (journalism+short film)",
        "mm_duration": "Entire Day",
        "mm_player": 3,
        "mm_category": "Premium",
        "mm_link": "https://docs.google.com/forms/d/1OEhW-gUsVwNR55vWEhnyztARPYLHZ6va9qPhOpy-_x8/viewform?ts=63b66a7a&edit_requested=true"
    },
    {
        "mm_name": "Story of wuther and Brow(Story board)",
        "mm_duration": 3,
        "mm_player": 1,
        "mm_category": "Flagship",
        "mm_link": "https://docs.google.com/forms/d/1emTWQNDXvUSK_8kiFhqrANis-TzeDaUlxMieWOS7QW0/viewform?ts=63b66a95&edit_requested=true"
    },
    {
        "mm_name": "Spot the visage (model photography)",
        "mm_duration": 2,
        "mm_player": "1 + 1 Model",
        "mm_category": "Standard",
        "mm_link": "https://docs.google.com/forms/d/1Iz920dUk-AOeOOLwYu09DXdxZ1hCTMlqottXyhSciYY/viewform?ts=63b66ae6&edit_requested=true"
    }
]

const sports = [
    {
        "ss_name": "All white (box cricket)",
        "ss_fees": 500,
        "ss_player": 6,
        "ss_category": "Flagship",
        "ss_link": ""
    },
    {
        "ss_name": "Fast and flashy(rink football)",
        "ss_fees": 700,
        "ss_player": 7,
        "ss_category": "Premium",
        "ss_link": ""
    },
    {
        "ss_name": "Penumbra(Blind fold chess)",
        "ss_fees": 150,
        "ss_player": 2,
        "ss_category": "Premium",
        "ss_link": ""
    },
    {
        "ss_name": "Table Tennis (conqerst of table)",
        "ss_fees": 100,
        "ss_player": 1,
        "ss_category": "Premium",
        "ss_link": ""
    },
    {
        "ss_name": "The shuffle board (carrom)",
        "ss_fees": 100,
        "ss_player": 1,
        "ss_category": "Standard",
        "ss_link": ""
    },
    {
        "ss_name": "Hercules",
        "ss_fees": 100,
        "ss_player": 1,
        "ss_category": "Flagship",
        "ss_link": ""
    }
]

const esports = [
    {
        "es_name": "FIFA",
        "es_fees": 100,
        "es_player": 1,
        "es_category": "Premium",
        "es_link": ""
    },
    {
        "es_name": "Valorant",
        "es_fees": 500,
        "es_player": 5,
        "es_category": "Flagship",
        "es_link": ""
    },
    {
        "es_name": "BGMI (Classic)",
        "es_fees": 200,
        "es_player": "4 + 1",
        "es_category": "Standard",
        "es_link": ""
    },
    {
        "es_name": "BGMI (TDM)",
        "es_fees": 100,
        "es_player": "4 + 1",
        "es_category": "Standard",
        "es_link": ""
    },
    {
        "es_name": "CODM",
        "es_fees": 200,
        "es_player": "4 + 1",
        "es_category": "Standard",
        "es_link": ""
    }
]

const performing_arts = [
    {
        "pa_name": "Salam-e-sur (Solo Singing)",
        "pa_duration": 2.5,
        "pa_player": 1,
        "pa_category": "Basic",
        "pa_link": "https://docs.google.com/forms/d/e/1FAIpQLScYQ-X1lVjpRdOVCAjHOEiosyNvG_A_1ekwUvD8dyMXQlbXDA/viewform?edit_requested=true"
    },
    {
        "pa_name": "Rap + Beatboxing",
        "pa_duration": 2.5,
        "pa_player": 2,
        "pa_category": "Premium",
        "pa_link": ""
    },
    {
        "pa_name": "Ha ha Hilarious (Stand Up)",
        "pa_duration": 3.5,
        "pa_player": 1,
        "pa_category": "Standard",
        "pa_link": ""
    },
    {
        "pa_name": "Rab Ne Bana Di Jodi (Group Dance)",
        "pa_duration": 2.5,
        "pa_player": 1,
        "pa_category": "Premium",
        "pa_link": ""
    },
    {
        "pa_name": "Forge The Beat (Band)",
        "pa_duration": 2.5,
        "pa_player": 1,
        "pa_category": "Premium",
        "pa_link": ""
    },
    {
        "pa_name": "Halla bol (street play)",
        "pa_duration": 2.5,
        "pa_player": 1,
        "pa_category": "Basic",
        "pa_link": ""
    },
    {
        "pa_name": "Face off (Cypher)",
        "pa_duration": 4,
        "pa_player": 1,
        "pa_category": "Flagship",
        "pa_link": "https://docs.google.com/forms/d/e/1FAIpQLSdxNKPdPMpKyEvafuFUDpq0DrRxnNCXnNMVni8r6g0F3xDzYA/viewform?edit_requested=true"
    }
]

const management = [
    {
        "ma_name": "Product war",
        "ma_duration": 3,
        "ma_player": 2,
        "ma_category": "Standard",
        "ma_link": "https://docs.google.com/forms/d/1_ksPu1Iqh7VlyZIv2nk1YV3e1nz2lCMmvGPcbCOJk8g/viewform?ts=63b66b07&edit_requested=true"
    },
    {
        "ma_name": "Occupational maze",
        "ma_duration": 3,
        "ma_player": 2,
        "ma_category": "Premium",
        "ma_link": "https://docs.google.com/forms/d/1LgIWTBRDWImCit0xvVn4SYXocbipf4fs8VedB58DiWo/viewform?ts=63b66b1e&edit_requested=true"
    },
    {
        "ma_name": "Merger ferd",
        "ma_duration": 3,
        "ma_player": 1,
        "ma_category": "Flagship",
        "ma_link": ""
    },
    {
        "ma_name": "Mock Stock",
        "ma_duration": 3,
        "ma_player": 1,
        "ma_category": "Flagship",
        "ma_link": ""
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
        "in_name": "Fashion show",
        "in_duration": 3,
        "in_player": "8 To 4",
        "in_category": "Flagship",
        "in_link": "https://docs.google.com/forms/d/e/1FAIpQLSdSAA6ZSZ6QsnoKMs20UD0xIL2NuMdJ_EnIQioslBIJTbk3bg/viewform?usp=sf_link"
    },
    {
        "in_name": "Escape room",
        "in_duration": 3,
        "in_player": 2,
        "in_category": "Flagship",
        "in_link": ""
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