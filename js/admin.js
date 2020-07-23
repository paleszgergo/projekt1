/*                       <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>
                            <div class="btn-group">
                                <button class="btn-info btn">
                                    <i class="fas fa-sync-alt"></i>
                                </button>
                                <button class="btn-danger btn">
                                    <i class="fas fa-trash-alt"></i>                                    
                                </button>
                            </div>
                        </td>
                      </tr> */

let users = [
    {firstName: "Kiss", lastName: "Jóska", email: "kissjoska@lol.hu"},
    {firstName: "Nagy", lastName: "Árpi", email: "nagyarapi@lol.hu"},
    {firstName: "Kiss", lastName: "Bence", email: "kissbence@lol.hu"},
    {firstName: "Közepes", lastName: "Pista", email: "kozepespistaa@lol.hu"},
    {firstName: "Végh", lastName: "Béla", email: "veghbela@lol.hu"},
    {firstName: "Kovács", lastName: "Feri", email: "kovacsferi@lol.hu"},
    {firstName: "Rostás", lastName: "Márió", email: "rostasmario@lol.hu"},
    {firstName: "Fehér", lastName: "Gizi", email: "fehergizi@lol.hu"}
];

let tableBody = document.querySelector("#userTable tbody");
let createTD = (html, parent) => {
    let td = document.createElement("td");
    td.innerHTML = html;
    parent.appendChild(td);

};

let createButtonGroup = parent =>{
    let group = document.createElement("div");
    group.className = "btn-group";

    let btnInfo = document.createElement("button");
    btnInfo.className = "btn btn-info";
    btnInfo.innerHTML = '<i class="fa fa-refresh"></i>';

    let btnDanger = document.createElement("button");
    btnDanger.className = "btn btn-danger";
    btnDanger.innerHTML = '<i class="fa fa-trash"></i>';

    group.appendChild(btnInfo);
    group.appendChild(btnDanger);

    let td = document.createElement("td");
    td.appendChild(group);
    parent.appendChild(td);
}

for (let k in users) {
    let tr = document.createElement("tr");
    createTD(parseInt(k)+1, tr);
    for (let value of Object.values(users[k])) {
        createTD(value, tr);
    }
    createButtonGroup(tr);
    tableBody.appendChild(tr);
}