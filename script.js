let CountryName;

const getCountryName = async (ipAddress) => {
  const response = await fetch(`https://api.ip2location.com/v2/?ip=${ipAddress}&addon=country&key=JATBCTCZA2`);
  const data = await response.json();
  return data;
};

const getIp = async () => {
  const response = await fetch("https://api.ipify.org/?format=json");
  const data = await response.json();
  return data.ip;
};

getIp().then((ipAddress) => {
  getCountryName(ipAddress)
    .then((countryData) => {
      CountryName = countryData.country.name;
      document.getElementById(
        "country-msg"
      ).innerText = `We can't accept players from ${CountryName}. Do not hesitate to contact us if you need assistance. If you're traveling, you can still use a VPN.`;
    })
    .catch(() => {
      document.getElementById("country-msg").innerText = `We can't accept players from your COUNTRY. Do not hesitate to contact us if 
    you need assistance. If you're travelling, you can still use a VPN.
`;
    });
});
