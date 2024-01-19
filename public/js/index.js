var ham = document.getElementById("ham");
ham.onclick = () => {
    ham.classList.toggle("hamopen");
}
var pfp = document.getElementsByClassName("pfp")[0];
var nickname = document.getElementsByClassName("nickname")[0];
var username = document.getElementsByClassName("username")[0];
var followers = document.getElementsByClassName("num1")[0];
var following = document.getElementsByClassName("num1")[1];
var count = document.getElementsByClassName("count")[0];

const apiUrl = `https://api.github.com/users/BlueHeart0065`;

fetch(apiUrl)
.then(data => {return data.json();})
.then(response => {
    pfp.src = response.avatar_url;
    nickname.innerHTML = response.name;
    username.innerHTML = response.login;
    followers.innerHTML = response.followers;
    following.innerHTML = response.following;
    count.innerHTML = response.public_repos;
}
)

var pc_repos = document.getElementsByClassName("pc_repos")[0];
var mob_repos = document.getElementsByClassName("mob_repos")[0];

fetch('https://api.github.com/users/BlueHeart0065/repos')
.then(data => {return data.json()})
.then(response => {
    let temp = ``;
    for (let i=0; i<response.length; i++){
        newrep = `<div class="repo1">
        <div class="lane1">
            <a href=`+ response[i].svn_url +`>`+ response[i].name +`</a>
            <p>Public</p>
        </div>
        <p class="desc">`+ response[i].description +`</p>
        <div class="lane2">`
            +`<p>`+response[i].topics[0]+ `</p>`+`<p>`+response[i].topics[1]+ `</p>`+`<p>`+response[i].topics[2]+ `</p>`+
            `</div>
    </div>`
        temp=temp+newrep;
    }
    pc_repos.innerHTML = temp;
})

fetch('https://api.github.com/users/BlueHeart0065/repos')
.then(data => {return data.json()})
.then(response => {
    let temp = ``;
    for (let i=0; i<response.length; i++){
        newrep = `<div class="repo">
        <div class="lane1">
            <a href="`+ response[i].svn_url +`">`+ response[i].name +`</a>
            <p>Public</p>
        </div>
        <p class="desc">`+ response[i].description +`</p>
        <div class="lane2">`
            +`<p>`+response[i].topics[0]+ `</p>`+`<p>`+response[i].topics[1]+ `</p>`+`<p>`+response[i].topics[2]+ `</p>`+
            `</div>
    </div>`
        temp=temp+newrep;
    }
    mob_repos.innerHTML = temp;
})