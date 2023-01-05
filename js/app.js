const team_container = document.querySelector(".team-details .row")
// console.log(team_container)
const contact_container = document.querySelector(".table tbody")
console.log(contact_container);

const team_details = [
    {
        "name": "Gouri Sanjay Naik",
        "image": "images/gouri.jpg",
        "designation": "General Secretary",
        "phone": "+91 93266 77304"
    },
    {
        "name": "Karan Chaoudhary",
        "image": "images/Karan-new.jpg",
        "designation": "Joint Secretary",
        "phone": "+91 94635 48165"
    },
    {
        "name": "Sanaeya",
        "image": "images/sanaeya.jpg",
        "designation": "Contingent Leader",
        "phone": "+91 75067 40937"
    },
    {
        "name": "Teerth Thaakur",
        "image": "images/Teerth.jpg",
        "designation": "A. Contingent Leader",
        "phone": "+91 91360 74510"
    },
    {
        "name": "Mayur Jagtap",
        "image": "images/Mayur.jpg",
        "designation": "Events HOD",
        "phone": "+91 97027 11472"
    },
    {
        "name": "Anish Patwardhan",
        "image": "images/Anish.jpg",
        "designation": "Events HOD",
        "phone": "+91 75063 97374"
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
const event_details = [
    {
        "Literary Arts": [
            {
                "name": "Human Crossword",
                "duration": 1.5,
                "player": 1,
                "category": "Premium",
                "link": ""
            },
            {
                "name": "Grammar Nazi",
                "duration": 1.5,
                "player": 2,
                "category": "Standard",
                "link": "https://docs.google.com/forms/d/1wSOGZD8NI8HG94Bxprm1b1PW76RD1qfZjqUMr1mZ7lI/viewform?ts=63b66ba4&edit_requested=true"
            },
            {
                "name": "Niveau Relay (story relay)",
                "duration": 1.5,
                "Player": 4,
                "category": "Premium",
                "link": ""
            },
            {
                "name": "Minutieux (JAM)",
                "duration": 2,
                "player": 2,
                "category": "Flagship",
                "link": ""
            },
            {
                "name": "Stoecia's Alegy (Poetry writing)",
                "duration": 1,
                "player": 1,
                "category": "Basic",
                "link": ""
            },
            {
                "name": "Illusion Of Matrix(debate)",
                "duration": 1.5,
                "player": 2,
                "category": "Flagship",
                "link": ""
            }
        ]
    },
    {
        "Fine Arts": [
            {
                "name": "Sneakerent(sneaker painting)",
                "duration": 2,
                "player": 1,
                "category": "Premium",
                "link": "https://docs.google.com/forms/d/1hBh-XfnmEtz5lLJCzNWrbEly0Jf-nH71CGBZr3uv7Jo/viewform?ts=63b66de2&edit_requested=true"
            },
            {
                "name": "Streak Art(face painting + makeup)",
                "duration": 2,
                "player": 3,
                "category": "Standard",
                "link": "https://docs.google.com/forms/d/1Sqh9JV28v0kadLY4ojP8v9oKLA2jlgxjJlXvILk5Ygg/viewform?ts=63b66edd&edit_requested=true"
            },
            {
                "name": "Pov Topia",
                "duration": 2,
                "player": 1,
                "category": "Basic",
                "link": "https://docs.google.com/forms/d/1MORbFSINk691FXwga9K9sxlob2-3B1uC9jAWzProBKI/viewform?ts=63b66f7d&edit_requested=true"
            },
            {
                "name": "Peinture de Sac(tote bag painting)",
                "duration": 2,
                "player": 1,
                "category": "Flagship",
                "link": "https://docs.google.com/forms/d/1cyOe6uY4k30pJlRX-cyUXfej_kITAG0XnO3lb19EN9A/viewform?ts=63b66fb4&edit_requested=true"
            },
            {
                "name": "Onirique (origami art)",
                "duration": 2,
                "player": 1,
                "category": "Permium",
                "link": "https://docs.google.com/forms/d/1kjKf3rnjS0RHUVGHz4FwgV_JEiZBjcBW5mTRsmw2qK8/viewform?ts=63b67085&edit_requested=true"
            }
        ]
    },
    {
        "Mass Media": [
            {
                "name": "Fluorite's magic (ad film)",
                "duration": 2.5,
                "player": 2,
                "category": "Flagship",
                "link": ""
            },
            {
                "name": "Capture the perceiving of Gaia",
                "duration": 2,
                "player": 1,
                "category": "Premium",
                "link": "https://docs.google.com/forms/d/1hBh-XfnmEtz5lLJCzNWrbEly0Jf-nH71CGBZr3uv7Jo/viewform?ts=63b66de2&edit_requested=true"
            },
            {
                "name": "Shoot the Amethyst (journalism+short film)",
                "duration": "Entire Day",
                "player": 3,
                "category": "Premium",
                "link": "https://docs.google.com/forms/d/1OEhW-gUsVwNR55vWEhnyztARPYLHZ6va9qPhOpy-_x8/viewform?ts=63b66a7a&edit_requested=true"
            },
            {
                "name": "Story of wuther and Brow(Story board)",
                "duration": 3,
                "player": 1,
                "category": "Flagship",
                "link": "https://docs.google.com/forms/d/1emTWQNDXvUSK_8kiFhqrANis-TzeDaUlxMieWOS7QW0/viewform?ts=63b66a95&edit_requested=true"
            },
            {
                "name": "Spot the visage (model photography)",
                "duration": 2,
                "player": "1 + 1 Model",
                "category": "Standard",
                "link": "https://docs.google.com/forms/d/1Iz920dUk-AOeOOLwYu09DXdxZ1hCTMlqottXyhSciYY/viewform?ts=63b66ae6&edit_requested=true"
            }
        ]
    },
    {
        "Sports": [
            {
                "name": "All white (box cricket)",
                "fees": 500,
                "player": 6,
                "category": "Flagship",
                "link": ""
            },
            {
                "name": "Fast and flashy(rink football)",
                "fees": 700,
                "player": 7,
                "category": "Premium",
                "link": ""
            },
            {
                "name": "Penumbra(Blind fold chess)",
                "fees": 150,
                "player": 2,
                "category": "Premium",
                "link": ""
            },
            {
                "name": "Table Tennis (conqerst of table)",
                "fees": 100,
                "player": 1,
                "category": "Premium",
                "link": ""
            },
            {
                "name": "The shuffle board (carrom)",
                "fees": 100,
                "player": 1,
                "category": "Standard",
                "link": ""
            },
            {
                "name": "Hercules",
                "fees": 100,
                "player": 1,
                "category": "Flagship",
                "link": ""
            }
        ]
    },
    {
        "E-Sports": [
            {
                "name": "FIFA",
                "fees": 100,
                "player": 1,
                "category": "Premium",
                "link": ""
            },
            {
                "name": "Valorant",
                "fees": 500,
                "player": 5,
                "category": "Flagship",
                "link": ""
            },
            {
                "name": "BGMI (Classic)",
                "fees": 200,
                "player": "4 + 1",
                "category": "Standard",
                "link": ""
            },
            {
                "name": "BGMI (TDM)",
                "fees": 100,
                "player": "4 + 1",
                "category": "Standard",
                "link": ""
            },
            {
                "name": "CODM",
                "fees": 200,
                "player": "4 + 1",
                "category": "Standard",
                "link": ""
            }
        ]
    },
    {
        "Performing Arts": [
            {
                "name": "Salam-e-sur (Solo Singing)",
                "duration": 2.5,
                "player": 1,
                "category": "Basic",
                "link": "https://docs.google.com/forms/d/e/1FAIpQLScYQ-X1lVjpRdOVCAjHOEiosyNvG_A_1ekwUvD8dyMXQlbXDA/viewform?edit_requested=true"
            },
            {
                "name": "Rap + Beatboxing",
                "duration": 2.5,
                "player": 2,
                "category": "Premium",
                "link": ""
            },
            {
                "name": "Ha ha Hilarious (Stand Up)",
                "duration": 3.5,
                "player": 1,
                "category": "Standard",
                "link": ""
            },
            {
                "name": "Rab Ne Bana Di Jodi (Group Dance)",
                "duration": 2.5,
                "player": 1,
                "category": "Premium",
                "link": ""
            },
            {
                "name": "Forge The Beat (Band)",
                "duration": 2.5,
                "player": 1,
                "category": "Premium",
                "link": ""
            },
            {
                "name": "Halla bol (street play)",
                "duration": 2.5,
                "player": 1,
                "category": "Basic",
                "link": ""
            },
            {
                "name": "Face off (Cypher)",
                "duration": 4,
                "player": 1,
                "category": "Flagship",
                "link": "https://docs.google.com/forms/d/e/1FAIpQLSdxNKPdPMpKyEvafuFUDpq0DrRxnNCXnNMVni8r6g0F3xDzYA/viewform?edit_requested=true"
            },
        ]
    },
    {
        "Management": [
            {
                "name": "Product war",
                "duration": 3,
                "player": 2,
                "category": "Standard",
                "link": "https://docs.google.com/forms/d/1_ksPu1Iqh7VlyZIv2nk1YV3e1nz2lCMmvGPcbCOJk8g/viewform?ts=63b66b07&edit_requested=true"
            },
            {
                "name": "Occupational maze",
                "duration": 3,
                "player": 2,
                "category": "Premium",
                "link": "https://docs.google.com/forms/d/1LgIWTBRDWImCit0xvVn4SYXocbipf4fs8VedB58DiWo/viewform?ts=63b66b1e&edit_requested=true"
            },
            {
                "name": "Merger ferd",
                "duration": 3,
                "player": 1,
                "category": "Flagship",
                "link": ""
            },
            {
                "name": "Mock Stock",
                "duration": 3,
                "player": 1,
                "category": "Flagship",
                "link": ""
            }
        ]
    },
    {
        "Informals": [
            {
                "name": "Mr & Miss UTKARSH",
                "duration": 3,
                "player": 2,
                "category": "Flagship",
                "link": ""
            },
            {
                "name": "Fashion show",
                "duration": 3,
                "player": "8 To 4",
                "category": "Flagship",
                "link": ""
            },
            {
                "name": "Escape room",
                "duration": 3,
                "player": 2,
                "category": "Flagship",
                "link": ""
            },
            {
                "name": "Top 5",
                "duration": 3,
                "player": 2,
                "category": "Flagship",
                "link": ""
            },
            {
                "name": "War of Cl's",
                "duration": 3,
                "player": 2,
                "category": "Flagship",
                "link": ""
            },
            {
                "name": "War of DJ's",
                "duration": 3,
                "player": 2,
                "category": "Flagship",
                "link": ""
            }
        ]
    }
]