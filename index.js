let products = [];

fetch(
  "https://restcountries.com/v3.1/all?fields=name,flags,capital,region,population,languages,currencies"
)
  .then((res) => res.json())
  .then((data) => {
    products = data;
    showCountries(products);
  });

function showCountries(data) {
  const countries = document.getElementById("countries");
  countries.innerHTML = "";

  data.map((item) => {
    countries.innerHTML += `
      <div class="card">
        <img src="${item.flags.png}" alt="${item.name.common}">
        <h3>${item.name.common}</h3>
        <p><b>Capital:</b> ${item.capital ? item.capital[0] : "No capital"}</p>
        <p><b>Region:</b> ${item.region}</p>
        <p><b>Population:</b> ${item.population}</p>
      </div>
    `;
  });
}


const input = document.querySelector("input");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  const value = input.value.toLowerCase();

  const filtered = products.filter((item) =>
    item.name.common.toLowerCase().includes(value)
  );

  showCountries(filtered);
});
