function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('errorMessage');

    if (username === 'teste' && password === 'teste') {
        errorMessage.innerHTML = '';
        setTimeout(function() {
            window.location.href = 'TelaDeCabras.html';
        }, 100);
    } else {
        errorMessage.innerHTML = 'Usuário ou senha incorretos';
    }
}

function paginaDeLogin(){
    window.location.href = "login.html";
}

function paginaDeProducao(){
    window.location.href = "producao.html";
}

function paginaDeProducaoLa(){
    window.location.href = "producaoLa.html";
}
function paginaLeite(){
    window.location.href = "leite.html";
}

function paginaDeCabras(){
    window.location.href = "TelaDeCabras.html";
}

function paginaDeRebanho(){
    window.location.href = "rebanho.html";
}

function redirectToCadastro() {
    window.location.href = "adicionarCabra.html";
}

function paginaTelaRebanho(){
    window.location.href = "adicionarRebanho.html";
}

function paginaLa(){
    window.location.href = "la.html";
}


function cadastro() {
    
    var nome = document.getElementById("username").value;
    var idade = document.getElementById("idade").value;
    var idCabra = document.getElementById("idCabra").value;

    
    var cabra = {
        nome: nome,
        idade: idade,
        idCabra: idCabra
    };

    
    var cabras = JSON.parse(localStorage.getItem("cabras")) || [];
    cabras.push(cabra);
    localStorage.setItem("cabras", JSON.stringify(cabras));
     
    
    window.location.href = "TelaDeCabras.html";
}



document.addEventListener("DOMContentLoaded", function () {
    if (window.location.href.includes("adicionarRebanho.html")) {
        exibirNomesCabrasComCheckboxes();
    }
    exibirQuantidadeCabras();
});

function exibirNomesCabrasComCheckboxes() {
    var cabras = JSON.parse(localStorage.getItem("cabras")) || [];
    var nomesList = document.getElementById("nomesCabrasList");

   
    nomesList.innerHTML = '';

    
    cabras.forEach(function(cabra) {
        var listItem = document.createElement("li");

        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = "cabraCheckbox";
        checkbox.value = cabra.nome;

        var label = document.createElement("label");
        label.textContent = cabra.nome;

        listItem.appendChild(checkbox);
        listItem.appendChild(label);
        nomesList.appendChild(listItem);

       
        listItem.style.display = "block";
    });
}


function obterNomesCabrasSelecionadas() {
    window.location.href = "rebanho.html";
    var nomesCabrasSelecionadas = [];
    var checkboxes = document.getElementsByName("cabraCheckbox");

   
    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            nomesCabrasSelecionadas.push(checkbox.value);
        }
    });
   
    localStorage.setItem("nomesCabrasSelecionadas", JSON.stringify(nomesCabrasSelecionadas));

   
    var quantidadesCabras = JSON.parse(localStorage.getItem("quantidadesCabras")) || [];
    quantidadesCabras.push(nomesCabrasSelecionadas.length);
    localStorage.setItem("quantidadesCabras", JSON.stringify(quantidadesCabras));


    window.location.href = "rebanho.html";
}



function exibirQuantidadeTotal() {
    var quantidadeTotal = localStorage.getItem("quantidadeTotal") || 0;
    var divElement = document.getElementById("quantidadeCabrasSelecionadas");

    
    var paragraphElement = document.createElement("p");
    paragraphElement.textContent = "Quantidade de Cabras Selecionadas: " + quantidadeTotal;

    
    divElement.appendChild(paragraphElement);
}




function exibirCabras() {
    var cabras = JSON.parse(localStorage.getItem("cabras")) || [];

    
    var container = document.getElementById("cabrasContainer");
    container.innerHTML = '';

    
    cabras.forEach(function(cabra) {
        var mainElement = document.createElement("main");
        mainElement.classList.add("cabrasContainer");

        var imgElement = document.createElement("img");
        imgElement.src = "imagens/cabra.png";
        imgElement.alt = "";
        imgElement.style.maxWidth = "30%"; 

        var textContainer = document.createElement("div");
        textContainer.style.display = "flex";
        textContainer.style.flexDirection = "column";
        textContainer.style.alignItems = "flex-end";

        var h1Element = document.createElement("h1");
        h1Element.textContent = cabra.nome;
        h1Element.style.color = "white";
        h1Element.style.marginBottom = "10px";
        h1Element.style.fontSize = "3rem";

        var h2Element = document.createElement("h2");
        h2Element.textContent = "id:" + cabra.idCabra;
        h2Element.style.fontSize = "2rem"; 
        h2Element.style.marginTop = "auto";
        

        textContainer.appendChild(h1Element);
        textContainer.appendChild(h2Element);

        mainElement.appendChild(imgElement);
        mainElement.appendChild(textContainer);

        
        mainElement.style.display = "flex";
        mainElement.style.width = "90vw";
        mainElement.style.height = "30vw";
        mainElement.style.margin = "auto";
        mainElement.style.padding = "5px";
        mainElement.style.borderRadius = "5vw";
        mainElement.style.position = "relative";
        mainElement.style.marginTop = "10px";
        mainElement.style.background = "linear-gradient(45deg, #ea00ff, rgb(75, 46, 204), #02cdec)";

        container.appendChild(mainElement);
    });
}



function exibirLeites() {
    var leites = JSON.parse(localStorage.getItem("leites")) || [];

    
    var container = document.getElementById("leitesContainer");
    container.innerHTML = '';

    
    leites.forEach(function(leite) {
        var mainElement = document.createElement("main");
        mainElement.classList.add("leitesContainer");

        var textContainer = document.createElement("div");
        textContainer.style.display = "flex";
        textContainer.style.flexDirection = "column";
        textContainer.style.alignItems = "flex-end";
        
        var h1Element = document.createElement("h1");
        h1Element.textContent = "Ano: " + leite.ano;
        h1Element.style.color = "white";
        h1Element.style.marginRight = "0px";
        h1Element.style.fontSize = "2rem";
        h1Element.style.left = "0px";
        h1Element.style.right = "0px";
        h1Element.style.padding = "0px";
        h1Element.style.position = "absolute";
        textContainer.appendChild(h1Element);

        var moneyContainer = document.createElement("div");
        moneyContainer.style.display = "flex";
        moneyContainer.style.justifyContent = "space-between"; 
        textContainer.appendChild(moneyContainer);
       
        var h2Element = document.createElement("h2");
        h2Element.textContent = "Quantidade: " + leite.quantidade + " Litros";
        h2Element.style.fontSize = "2rem";
        h2Element.style.marginTop = "30px";
        h2Element.style.position = "absolute";
        moneyContainer.appendChild(h2Element);

        var h3Element = document.createElement("h3");
        h3Element.textContent = "R$ " + leite.dinheiro;
        h3Element.style.fontSize = "1.5rem";
        h3Element.style.right = "0px";
        h3Element.style.marginRight = "10px";
        h3Element.style.Bottom = "10px";
        h3Element.style.position = "absolute";
        moneyContainer.appendChild(h3Element);

        
        mainElement.appendChild(textContainer);

       
        mainElement.style.display = "flex";
        mainElement.style.width = "90vw";
        mainElement.style.height = "20vw";
        mainElement.style.margin = "20px";
        mainElement.style.padding = "5px";
        mainElement.style.borderRadius = "5vw";
        mainElement.style.position = "relative";
        mainElement.style.top = "150px";
        mainElement.style.background = "linear-gradient(45deg, #1ff70b, rgb(4, 192, 206), rgb(8, 96, 212))";

        container.appendChild(mainElement);
    });
}



if (window.location.href.includes("producao.html")) {
    exibirLeites();
    exibirCabras();
}

if (window.location.href.includes("producaoLa.html")) {
    exibirLas();
    exibirCabras();
}

exibirCabras();

function cadastroLeite() {
    
    var ano = document.getElementById("ano").value;
    var quantidade = document.getElementById("quantidade").value;
    var dinheiro = document.getElementById("dinheiro").value;

    var leite = {
        ano: ano,
        quantidade: quantidade,
        dinheiro: dinheiro
    };

    var leites = JSON.parse(localStorage.getItem("leites")) || [];
    leites.push(leite);
    localStorage.setItem("leites", JSON.stringify(leites));

   
    window.location.href = "producao.html";
}




function exibirLas() {
     var las = JSON.parse(localStorage.getItem("las")) || [];

    var container = document.getElementById("lasContainer");
    container.innerHTML = '';

    las.forEach(function(la) {
        var mainElement = document.createElement("main");
        mainElement.classList.add("lasContainer");

       

        var textContainer = document.createElement("div");
        textContainer.style.display = "flex";
        textContainer.style.flexDirection = "column";
        textContainer.style.alignItems = "flex-end";
    
        var h1Element = document.createElement("h1");
        h1Element.textContent = "Ano: " + la.anoLa;
        h1Element.style.color = "white";
        h1Element.style.marginRight = "0px";
        h1Element.style.fontSize = "2rem";
        h1Element.style.left = "0px";
        h1Element.style.right = "0px";
        h1Element.style.padding = "0px";
        h1Element.style.position = "absolute";
        textContainer.appendChild(h1Element);

        
        var moneyContainer = document.createElement("div");
        moneyContainer.style.display = "flex";
        moneyContainer.style.justifyContent = "space-between"; 
        textContainer.appendChild(moneyContainer);
       
        var h2Element = document.createElement("h2");
        h2Element.textContent = "Quantidade: " + la.quantidadeLa + " kg";
        h2Element.style.fontSize = "2rem";
        h2Element.style.marginTop = "30px";
        h2Element.style.position = "absolute";
        moneyContainer.appendChild(h2Element);

        var h3Element = document.createElement("h3");
        h3Element.textContent = "R$ " + la.dinheiroLa;
        h3Element.style.fontSize = "1.5rem";
        h3Element.style.right = "0px";
        h3Element.style.marginRight = "10px";
        h3Element.style.Bottom = "10px";
        h3Element.style.position = "absolute";
        moneyContainer.appendChild(h3Element);

        
        mainElement.appendChild(textContainer);

        
        mainElement.style.display = "flex";
        mainElement.style.width = "90vw";
        mainElement.style.height = "20vw";
        mainElement.style.margin = "20px";
        mainElement.style.padding = "5px";
        mainElement.style.borderRadius = "5vw";
        mainElement.style.position = "relative";
        mainElement.style.top = "150px";
        mainElement.style.background = "linear-gradient(45deg, #c40d8d, rgb(27, 6, 104), rgb(8, 181, 212))";

        container.appendChild(mainElement);
    });
}

function cadastroLa() {
    
    var anoLa = document.getElementById("anoLa").value;
    var quantidadeLa = document.getElementById("quantidadeLa").value;
    var dinheiroLa = document.getElementById("dinheiroLa").value;

    
    var la = {
        anoLa: anoLa,
        quantidadeLa: quantidadeLa,
        dinheiroLa: dinheiroLa
    };

    var las = JSON.parse(localStorage.getItem("las")) || [];
    las.push(la);
    localStorage.setItem("las", JSON.stringify(las));
    window.location.href = "producaoLa.html";
}

