// window.addEventListener("load", () => {
//   const track = document.getElementById("carousel-track");
//   const totalImages = 10;
//   const pathPrefix = "./assets/images/"; // adjust this if images are in a different folder

//   for (let i = 1; i <= totalImages; i++) {
//     const img = document.createElement("img");
//     img.src = `${pathPrefix}${i}.jpeg`;
//     img.alt = `Image ${i}`;
//     track.appendChild(img);
//   }

//   // Clone the first batch to create infinite scroll
//   for (let i = 1; i <= totalImages; i++) {
//     const img = document.createElement("img");
//     img.src = `${pathPrefix}${i}.jpeg`;
//     img.alt = `Image ${i} clone`;
//     track.appendChild(img);
//   }
// });

// Lazy loading

// window.addEventListener("load", () => {
//   const track = document.getElementById("carousel-track");
//   const totalImages = 10;
//   const pathPrefix = "./assets/images/"; // Change if images are elsewhere

//   for (let i = 1; i <= totalImages; i++) {
//     const img = document.createElement("img");
//     img.setAttribute("loading", "lazy");
//     img.src = `${pathPrefix}${i}.jpeg`;
//     img.alt = `Image ${i}`;
//     track.appendChild(img);
//   }

//   // Clone the first batch for infinite scroll
//   for (let i = 1; i <= totalImages; i++) {
//     const img = document.createElement("img");
//     img.setAttribute("loading", "lazy");
//     img.src = `${pathPrefix}${i}.jpeg`;
//     img.alt = `Image ${i} clone`;
//     track.appendChild(img);
//   }
// });

// window.addEventListener("load", () => {
//   const track = document.getElementById("carousel-track");
//   const totalImages = 1000;
//   const pathPrefix = "./assets/images/";

//   // Example country list (cycle through)
//   const countries = ["Australia", "Canada", "UK", "USA", "Japan", "Germany"];

//   // Function to create card elements
//   const createCard = (i, isClone = false) => {
//     const card = document.createElement("div");
//     card.classList.add("carousel-card");

//     const img = document.createElement("img");
//     img.setAttribute("loading", "lazy");
//     img.src = `${pathPrefix}${i}.jpeg`;
//     img.alt = `Student ${i}${isClone ? " clone" : ""}`;

//     const caption = document.createElement("div");
//     caption.classList.add("card-caption");

//     const title = document.createElement("h4");
//     title.textContent = `Student #${i}`;

//     const country = document.createElement("p");
//     country.textContent = countries[i % countries.length];

//     caption.appendChild(title);
//     caption.appendChild(country);

//     card.appendChild(img);
//     card.appendChild(caption);

//     return card;
//   };

//   // Add original cards
//   for (let i = 1; i <= totalImages; i++) {
//     track.appendChild(createCard(i));
//   }

//   // Clone cards for seamless infinite scroll
//   for (let i = 1; i <= totalImages; i++) {
//     track.appendChild(createCard(i, true));
//   }
// });

const students = [
  {
    id: 1,
    name: "Salina",
    country: "UK",
    test: "IELTS 7.5",
    imagepath: "./assets/images/1_salina.jpeg",
  },
  {
    id: 2,
    name: "Sonam",
    country: "Australia",
    test: "PTE 79",
    imagepath: "./assets/images/2_sonam.jpeg",
  },
  {
    id: 3,
    name: "Punam",
    country: "Australia",
    test: "IELTS 8.0",
    imagepath: "./assets/images/3_punam.jpeg",
  },
  {
    id: 4,
    name: "Sahana",
    country: "Australia",
    test: "PTE 85",
    imagepath: "./assets/images/4_sahana.jpeg",
  },
  {
    id: 5,
    name: "Ayush",
    country: "Australia",
    test: "IELTS 7.0",
    imagepath: "./assets/images/5_ayush.jpeg",
  },
  {
    id: 6,
    name: "Priya",
    country: "Australia",
    test: "PTE 78",
    imagepath: "./assets/images/6_priya.jpeg",
  },
  // Add more students as needed
];
window.addEventListener("load", () => {
  const track = document.getElementById("carousel-track");

  const createCard = (student, isClone = false) => {
    const card = document.createElement("div");
    card.classList.add("carousel-card");

    const img = document.createElement("img");
    img.setAttribute("loading", "lazy");
    img.src = student.imagepath;
    img.alt = `${student.name}${isClone ? " clone" : ""}`;

    const caption = document.createElement("div");
    caption.classList.add("card-caption");
    caption.style.lineHeight = "1.1"; // Reduce line height to remove gaps

    const title = document.createElement("h4");
    title.textContent = student.name;
    title.style.fontSize = "22px";
    title.style.margin = "0"; // Remove margin
    title.style.fontWeight = "700";

    const country = document.createElement("p");
    country.textContent = student.country;
    country.style.fontSize = "14px";
    country.style.margin = "0";
    country.style.color = "#555";

    const test = document.createElement("p");
    test.textContent = student.test;
    test.style.fontSize = "14px";
    test.style.margin = "0";
    test.style.fontWeight = "600";
    test.style.color = "#0077ff";

    caption.appendChild(title);
    caption.appendChild(country);
    caption.appendChild(test);

    card.appendChild(img);
    card.appendChild(caption);

    return card;
  };

  // Add original cards
  students.forEach((student) => {
    track.appendChild(createCard(student));
  });

  // Clone cards for seamless infinite scroll
  students.forEach((student) => {
    track.appendChild(createCard(student, true));
  });
});
