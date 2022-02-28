const loadApidata = () => {
  fetch("https://randomuser.me/api/?results=50")
    .then((Response) => Response.json())
    .then((data) => showApiData(data));
};

const showApiData = (allusers) => {
  const contentBox = document.getElementById("content");
  users = allusers.results;

  users.forEach((user) => {
    const template = `
            <td><img src="${user.picture.large}" alt="" srcset=""></td>
            <td>${user.name.title}</td>
            <td>${user.name.first+" "+user.name.last}</td>
            <td>${user.email}</td>
            <td>${user.location.country}</td>
          
        `;
    const contentBox = document.getElementById("content");
    const div = document.createElement("tr");
    div.innerHTML=template;
    contentBox.appendChild(div);
  });
};
