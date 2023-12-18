const coll = document.querySelectorAll('.collapsible_base');
coll.forEach(item => {
    item.addEventListener('click', function() {
        this.classList.toggle('active');
        const content = this.nextElementSibling;
        if (content.style.display === 'flex') {
            content.style.display = 'none';
        } else {
            content.style.display = 'flex';
        }
    });
});

function filterCards() {
    var input, filter, cards, cardTitle, i;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    cards = document.getElementsByClassName("collapsible");

    for (i = 0; i < cards.length; i++) {
        cardTitle = cards[i].getElementsByTagName("h2")[0];
        if (cardTitle) {
            var title = cardTitle.innerHTML;
            if (title.toUpperCase().indexOf(filter) > -1) {
                cards[i].style.display = "";
            } 
            else {
                cards[i].style.display = "none";
            }
        }
    }
}

// Para a Parte 2
$(document).ready(function() {
// Click event for each button
for (let i = 1; i <= 4; i++) {
    $(`#name${i}`).on('click', function() {
    
    $('.essence_name').removeClass('marked')
    $(`#name${i}`).addClass('marked');

    // Remove 'shown' class from all content divs
    $('.essence_description').removeClass('show');
    // Add 'shown' class to the corresponding content div
    $(`#description${i}`).addClass('show');
    
    });
}
});

// Para a Parte 3
$(document).ready(function() {
    // Click event for each button
    for (let i = 1; i <= 30; i++) {
        $(`#card${i}`).on('click', function() {

        // Remove 'shown' class from all content divs
        $('.content').removeClass('show');
        // Add 'shown' class to the corresponding content div
        $(`#content${i}`).addClass('show');
        });
    }
    });


const boxes = document.querySelectorAll(".choose_point");
boxes.forEach((box, indice) => {
    box.addEventListener("change",() =>{
        boxes.forEach((el) => {
            if(el == box) {
                return;
            }
            Array.from(el.children).forEach((option) => {
                if (option.value == box.value) {
                    option.disabled = 'disabled';
                }
            });
        });
    });
});


// PARTE DE Atributos
$(document).ready(function() {
    // Event handler for select elements within .atributos_bottom
    $(".atributos_bottom select").on("change", function() {
        var selected = [];
        $(".atributos_bottom select").each(function(index, select) {
            if (select.value !== "") {
                selected.push(select.value);
            }
        });

        // Resetting disabled property only for options within .atributos_bottom
        $(".atributos_bottom option").prop("disabled", false);

        // Disable options based on selected values
        for (var index in selected) {
            $('.atributos_bottom option[value="'+selected[index]+'"]').prop("disabled", true);
        }
    });
});

// PARTE DE HABILIDADES
$(document).ready(function() {
    // Event handler for select elements within .habilidades_bottom
    $(".habilidades_bottom select").on("change", function() {
        var selected = [];
        $(".habilidades_bottom select").each(function(index, select) {
            if (select.value !== "") {
                selected.push(select.value);
            }
        });

        // Resetting disabled property only for options within .habilidades_bottom
        $(".habilidades_bottom option").prop("disabled", false);

        // Disable options based on selected values
        for (var index in selected) {
            $('.habilidades_bottom option[value="'+selected[index]+'"]').prop("disabled", true);
        }
    });
});

let pointsFis = 0;
let pointsSoc = 0;
let pointsMen = 0;
let pointsVants = 7;
let pointsTal = 0;
let pointsPer = 0;
let pointsCon = 0;

let attributes = {
    Fis: {
        forca: 1,
        destreza: 1,
        vigor: 1,
    },
    Soc: {
        carisma: 1,
        manipulacao: 1,
        aparencia: 1,
    },
    Men: {
        percepcao: 1,
        inteligencia: 1,
        raciocinio: 1,
    },

    Vants: {
        aliados: 0,
        arcanum: 0,
        avatar: 0,
        biblioteca: 0,
        contatos: 0,
        destino: 0,
        influencia: 0,
        nodo: 0,
        recursos: 0,
        sonhos: 0,
        talismas: 0,
    },

    Tal: {
    prontidao: 0,
    esportes: 0,
    consciencia: 0,
    briga: 0,
    esquiva: 0,
    expressao: 0,
    intimidacao: 0,
    lideranca: 0,
    manha: 0,
    labia: 0,
    },
    Per: {
    oficios: 0,
    conducao: 0,
    etiqueta: 0,
    armas_fogo: 0,
    meditacao: 0,
    armas_branca: 0,
    atuacao: 0,
    furtividade: 0,
    sobrevivencia: 0,
    tecnologia: 0,
    },
    Con: {
    academicos: 0,
    computador: 0,
    cosmologia: 0,
    enigmas: 0,
    investigacao: 0,
    direito: 0,
    linguistica: 0,
    medicina: 0,
    ocultismo: 0,
    ciencias: 0,
    },

    infos: {
    tradicao: "",
    essencia: "",
    arquetipo: "",
    },
};

function updateDisplay() {
    document.getElementById('pointsFis').innerText = pointsFis;
    document.getElementById('pointsSoc').innerText = pointsSoc;
    document.getElementById('pointsMen').innerText = pointsMen;
    document.getElementById('pointsVants').innerText = pointsVants;
    document.getElementById('pointsTal').innerText = pointsTal;
    document.getElementById('pointsPer').innerText = pointsPer;
    document.getElementById('pointsCon').innerText = pointsCon;

    for (const category in attributes) {
        for (const key in attributes[category]) {
            document.getElementById(key).innerText = attributes[category][key];
        }
    }
}

function increment(category, attribute) {
    const points = getPoints(category);
    if (category == 'Vants' && points > 0) {
        attributes[category][attribute]++;
        setPoints(category, points - 1);
        updateDisplay();
    }
    else if (points > 0 && attributes[category][attribute] < 5) {
        attributes[category][attribute]++;
        setPoints(category, points - 1);
        updateDisplay();
    }
}

function decrement(category, attribute) {
    const points = getPoints(category);
    if (category == 'Vants' && attributes[category][attribute] > 0
    || category == 'Tal' && attributes[category][attribute] > 0
    || category == 'Per' && attributes[category][attribute] > 0
    || category == 'Con' && attributes[category][attribute] > 0) {
        attributes[category][attribute]--;
        setPoints(category, points + 1);
        updateDisplay();
    }

    else if (attributes[category][attribute] > 1) {
        attributes[category][attribute]--;
        setPoints(category, points + 1);
        updateDisplay();
    }
}

function getPoints(category) {
    switch (category) {
        case 'Fis':
            return pointsFis;
        case 'Soc':
            return pointsSoc;
        case 'Men':
            return pointsMen;
        case 'Vants':
            return pointsVants;
        case 'Per':
            return pointsPer;
        case 'Tal':
            return pointsTal;
        case 'Con':
            return pointsCon;
        default:
            return 0;
    }
}

function setPoints(category, value) {
    switch (category) {
        case 'Fis':
            pointsFis = value;
            break;
        case 'Soc':
            pointsSoc = value;
            break;
        case 'Men':
            pointsMen = value;
            break;
        case 'Vants':
            pointsVants = value;
            break;
        case 'Tal':
            pointsTal = value;
            break;
        case 'Per':
            pointsPer = value;
            break;
        case 'Con':
            pointsCon = value;
            break;
    }
}

function updatePoints(category, value) {
    resetValues(category);
    switch (category) {
        case 'Fis':
            pointsFis = parseInt(value);
            break;
        case 'Soc':
            pointsSoc = parseInt(value);
            break;
        case 'Men':
            pointsMen = parseInt(value);
            break;
        case 'Vants':
            pointsVants = parseInt(value);
            break;
        case 'Tal':
            pointsTal = parseInt(value);
            break;
        case 'Per':
            pointsPer = parseInt(value);
            break;
        case 'Con':
            pointsCon = parseInt(value);
            break;
    }
    updateDisplay();
}

function resetValues(category) {
    if (category == "Tal" || category == "Per" || category == "Con") {
        for (const key in attributes[category]) {
            attributes[category][key] = 0;
        }
    }
    else {
        for (const key in attributes[category]) {
            attributes[category][key] = 1;
        }
    }
}

    
updateDisplay();


const traditionSelect = document.getElementById('tradition');
const essenceSelect = document.getElementById('essence');
const arquetipoSelect = document.getElementById('arquetipo');

traditionSelect.addEventListener('change', function () {
    attributes.infos.tradicao = traditionSelect.value;
    console.log(infos);
});

essenceSelect.addEventListener('change', function () {
    attributes.infos.essencia = essenceSelect.value;
    console.log(infos);
});

arquetipoSelect.addEventListener('change', function () {
    attributes.infos.arquetipo = arquetipoSelect.value;
    console.log(infos);
});

// localStorage
function save(){
    localStorage.setItem('attributes', JSON.stringify(attributes));
    localStorage.setItem('infos', JSON.stringify(infos));
}
