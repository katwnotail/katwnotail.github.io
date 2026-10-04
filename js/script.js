const user = "katdelgadom";
const domain = "gmail.com";
const email = `${user}@${domain}`;

const emailLink = document.getElementById("email-link");
emailLink.href = `mailto:${email}`;