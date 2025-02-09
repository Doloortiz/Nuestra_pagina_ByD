const userLogin1 = {
    password: "090824", keyword: "teamo"
}
let form = document.querySelector("form");
    
form.addEventListener("submit", (e) => {
    e.preventDefault()
    let passwordForm = e.target.elements.password.value
    let keywordForm = e.target.elements.keyword.value

    if (passwordForm === userLogin1.password && keywordForm === userLogin1.keyword) {
        localStorage.setItem("password", passwordForm)
        //localStorage.setItem("cart", JSON.stringify([]))
        localStorage.setItem("quantity", "0")
        location.href = "./priv.html";
    } else {
        alert("incorrecto")
    }
})