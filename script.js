const params = new URLSearchParams(window.location.search);
const id = params.get("id");

fetch("residents.json")
  .then(response => response.json())
  .then(data => {

    const resident = data.find(r => r.id === id);

    if (!resident) {

      document.querySelector(".container").innerHTML = `
      <div style="padding:60px;text-align:center;">
          <h1 style="color:#c62828;">❌ Verification Failed</h1>
          <p>This residency record was not found.</p>
      </div>`;
      return;
    }

    document.getElementById("name").textContent = resident.name;
    document.getElementById("iqama").textContent = resident.iqama;
    document.getElementById("passport").textContent = resident.passport;
    document.getElementById("nationality").textContent = resident.nationality;
    document.getElementById("profession").textContent = resident.profession;
    document.getElementById("employer").textContent = resident.employer;
    document.getElementById("issue").textContent = resident.issue;
    document.getElementById("expiry").textContent = resident.expiry;
    document.getElementById("status").textContent = resident.status;
    document.getElementById("residentImage").src = resident.image;

  });
