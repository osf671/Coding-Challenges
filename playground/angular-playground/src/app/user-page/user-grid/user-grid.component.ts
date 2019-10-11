import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-user-grid",
  templateUrl: "./user-grid.component.html",
  styleUrls: ["./user-grid.component.scss"]
})
export class UserGridComponent implements OnInit {
  public ourData = null;
  public private = [
    {
      id: 1,
      first_name: "Alicea",
      last_name: "Addlestone",
      email: "aaddlestone0@godaddy.com",
      gender: "Female",
      ip_address: "99.233.209.54"
    },
    {
      id: 2,
      first_name: "Eydie",
      last_name: "Van der Merwe",
      email: "evandermerwe1@bluehost.com",
      gender: "Female",
      ip_address: "182.31.239.53"
    },
    {
      id: 3,
      first_name: "Christophorus",
      last_name: "Dubarry",
      email: "cdubarry2@about.com",
      gender: "Male",
      ip_address: "198.202.221.19"
    },
    {
      id: 4,
      first_name: "Noella",
      last_name: "Sunners",
      email: "nsunners3@pcworld.com",
      gender: "Female",
      ip_address: "251.27.48.252"
    },
    {
      id: 5,
      first_name: "Yvette",
      last_name: "Dunnett",
      email: "ydunnett4@ox.ac.uk",
      gender: "Female",
      ip_address: "87.95.56.141"
    },
    {
      id: 6,
      first_name: "Luella",
      last_name: "Lansdowne",
      email: "llansdowne5@ebay.co.uk",
      gender: "Female",
      ip_address: "24.142.185.157"
    },
    {
      id: 7,
      first_name: "Jamaal",
      last_name: "Clyburn",
      email: "jclyburn6@epa.gov",
      gender: "Male",
      ip_address: "214.165.167.19"
    },
    {
      id: 8,
      first_name: "Sadie",
      last_name: "Bottell",
      email: "sbottell7@blogs.com",
      gender: "Female",
      ip_address: "212.71.231.130"
    },
    {
      id: 9,
      first_name: "Amie",
      last_name: "Rowlatt",
      email: "arowlatt8@ftc.gov",
      gender: "Female",
      ip_address: "48.212.183.97"
    },
    {
      id: 10,
      first_name: "Blythe",
      last_name: "Gorham",
      email: "bgorham9@state.gov",
      gender: "Female",
      ip_address: "32.60.225.211"
    }
  ];
  constructor() {}

  ngOnInit() {
    const prom = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.private);
      }, 5000);
    });

    prom.then(data => {
      this.ourData = data;
    });

    // fetch("https://api.mockaroo.com/api/0c501690?count=10&key=ec35dd50")
    //   .then(data => data.json())
    //   .then(data => {
    //     this.ourData = data;
    //   })
    //   .catch(error => {
    //     console.error("ERROR", error);
    //   });
  }

  someOtherFunction() {
    console.log("in some other function");
  }
}
