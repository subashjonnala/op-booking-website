// Hospital data
const hospitalsData = {
  "West Godavari": [
    "District Government Hospital, Bhimavaram",
    "Apollo Hospital, Bhimavaram",
    "Sri Sai Multispeciality Hospital"
  ],
  "East Godavari": [
    "Government Hospital, Kakinada",
    "Apollo Hospital, Kakinada",
    "Sunshine Hospital"
  ],
  "Krishna": [
    "Government Hospital, Machilipatnam",
    "Ramesh Hospitals, Vijayawada",
    "Manipal Hospital, Vijayawada"
  ]
};

// Populate hospitals on district select
function loadHospitals() {
  const district = document.getElementById("district").value;
  const hospitalSelect = document.getElementById("hospital");

  hospitalSelect.innerHTML = '<option value="">Select Hospital</option>';

  if (hospitalsData[district]) {
    hospitalsData[district].forEach(hospital => {
      const option = document.createElement("option");
      option.value = hospital;
      option.textContent = hospital;
      hospitalSelect.appendChild(option);
    });
  }
}

// Booking form submit
document.getElementById("bookingForm").addEventListener("submit", function(e){
  e.preventDefault(); // stop page reload

  const name = document.getElementById("patientName").value;
  const age = document.getElementById("age").value;
  const gender = document.getElementById("gender").value;
  const district = document.getElementById("district").value;
  const hospital = document.getElementById("hospital").value;

  if(!name || !age || !gender || !district || !hospital){
    alert("❌ Please fill all fields");
    return;
  }

  alert(`✅ Booking Successful!\nPatient: ${name}\nAge: ${age}\nGender: ${gender}\nDistrict: ${district}\nHospital: ${hospital}`);

  this.reset(); // clear form
});
