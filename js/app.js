const team_container = document.querySelector(".team-details .row")
// console.log(team_container)
const contact_container = document.querySelector(".table tbody")
console.log(contact_container);

const team_details = [
    {
        "name":"Gouri Sanjay Naik",
        "image":"images/gouri.jpg",
        "designation":"General Secretary",
        "phone":"+91 93266 77304"
    },
    {
        "name":"Karan Chaoudhary",
        "image":"images/Karan-new.jpg",
        "designation":"Joint Secretary",
        "phone":"+91 94635 48165"
    },
    {
        "name":"Sanaeya",
        "image":"images/sanaeya.jpg",
        "designation":"Contingent Leader",
        "phone":"+91 75067 40937"
    },
    {
        "name":"Teerth Thaakur",
        "image":"images/Teerth.jpg",
        "designation":"A. Contingent Leader",
        "phone":"+91 91360 74510"
    },
    {
        "name":"Mayur Jagtap",
        "image":"images/Mayur.jpg",
        "designation":"Events HOD",
        "phone":"+91 97027 11472"
    },
    {
        "name":"Anish Patwardhan",
        "image":"images/Anish.jpg",
        "designation":"Events HOD",
        "phone":"+91 75063 97374"
    },
    {
        "name":"Hidayat Pathan",
        "image":"images/Hidayat.jpg",
        "designation":"Digital Media HOD",
        "phone":"+91 75063 97374"
    },
    {
        "name":"Rutuja Dhoke",
        "image":"images/Rutuja.jpg",
        "designation":"Admin & Logistics HOD, Security HOD",
        "phone":"+91 75063 97374"
    },
    {
        "name":"Indrayani Phadtare",
        "image":"images/Indrayani.jpg",
        "designation":"Finance Core",
        "phone":"+91 75063 97374"
    },
    {
        "name":"Sargam Thakur",
        "image":"images/Sargam.jpg",
        "designation":"Finance Core",
        "phone":"+91 75063 97374"
    },
    {
        "name":"Drashti Pathak",
        "image":"images/Anish.jpg",
        "designation":"Finance Core",
        "phone":"+91 75063 97374"
    },
    {
        "name":"Lulua Gadiwala",
        "image":"images/Lullu.jpg",
        "designation":"Creativity",
        "phone":"+91 75063 97374"
    },
    {
        "name":"Nirali Doshi",
        "image":"images/Anish.jpg",
        "designation":"Public Relations HOD",
        "phone":"+91 75063 97374"
    }

]

const contact_details = [
    {
        "dept":"Performing Arts",
        "hod_name":"Gayatri Datye",
        "number":"+91 7506549065"
    },
    {
        "dept":"Mass Media",
        "hod_name":"Saloni Kedari",
        "number":"+91 7397938981"
    },
    {
        "dept":"E-Sports and Sports",
        "hod_name":"Sujit Barui",
        "number":"+91 9987531078"
    },
    {
        "dept":"Literary Arts",
        "hod_name":"Ashwathy Preman",
        "number":"+91 8657842590"
    },
    {
        "dept":"Management",
        "hod_name":"Aayushi Bhawan",
        "number":"+91 8828761937"
    },
    {
        "dept":"Fine Arts",
        "hod_name":"Harilakshmi Priyan",
        "number":"+91 8828939889"
    },
    {
        "dept":"Informals",
        "hod_name":"Laxmi Harijan",
        "number":"+91 9867794618"
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