let CountryName;

const getCountryName = async () => {
  const response = await fetch(`https://ipapi.co/json/`);
  const data = await response.json();
  console.log("====================================");
  console.log(data);
  console.log("====================================");
  return data;
};

const getIp = async () => {
  const response = await fetch("https://api.ipify.org/?format=json");
  const data = await response.json();
  return data.ip;
};

// getIp().then((ipAddress) => {
getCountryName()
  .then((countryData) => {
    CountryName = countryData.country_name;
    document.getElementById(
      "country-msg"
    ).innerText = `We can't accept players from ${CountryName}. Do not hesitate to contact us if you need assistance. If you're traveling, you can still use a VPN.`;
  })
  .catch(() => {
    document.getElementById("country-msg").innerText = `We can't accept players from your COUNTRY. Do not hesitate to contact us if 
    you need assistance. If you're travelling, you can still use a VPN.
`;
  });
// });
