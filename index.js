let products = [];

fetch(
  "https://restcountries.com/v3.1/all?fields=name,flags,capital,region,population,languages,currencies"
)
  .then((res) => res.json())
  .then((data) => {
    showCountries(data);
  });

function showCountries(data) {
  data.map((item) => {
    const instruction = document.getElementById("instruction");

  instruction.innerHTML += `
  <div class="info">
    <h3>How to use Country Explorer?</h3>
    <ol>
      <li>Search country name in the input</li>
      <li>Click the "Choose" button</li>
      <li>See country information below</li>
    </ol>
  </div>
`;
  });
}

