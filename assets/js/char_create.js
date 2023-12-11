const coll = document.querySelectorAll('.collapsible_base');
coll.forEach(item => {
    item.addEventListener('click', function() {
        this.classList.toggle('active');
        const content = this.nextElementSibling;
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });
});

function filterCards() {
    var input, filter, cards, cardTitle, i;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    cards = document.getElementsByClassName("card");

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



// PARTE DE HABILIDADES
$(document).ready(function() {
    // Event handler for select elements within .habilidade_bottom
    $(".habilidade_bottom select").on("change", function() {
        var selected = [];
        $(".habilidade_bottom select").each(function(index, select) {
            if (select.value !== "") {
                selected.push(select.value);
            }
        });

        // Resetting disabled property only for options within .habilidade_bottom
        $(".habilidade_bottom option").prop("disabled", false);

        // Disable options based on selected values
        for (var index in selected) {
            $('.habilidade_bottom option[value="'+selected[index]+'"]').prop("disabled", true);
        }
    });
});

    let pointsFis = 0;
    let pointsSoc = 0;
    let pointsMen = 0;
    let pointsVants = 7;

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
    };

    function updateDisplay() {
        document.getElementById('pointsFis').innerText = pointsFis;
        document.getElementById('pointsSoc').innerText = pointsSoc;
        document.getElementById('pointsMen').innerText = pointsMen;
        document.getElementById('pointsVants').innerText = pointsVants;

        for (const category in attributes) {
            for (const key in attributes[category]) {
                document.getElementById(key).innerText = attributes[category][key];
            }
        }
    }

    function increment(category, attribute) {
        const points = getPoints(category);
        if (category = 'Vants' && points > 0 && attributes[category][attribute] < 7) {
            attributes[category][attribute]++;
            setPoints(category, points -1);
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
        if (category = 'Vants') {
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
            case 'Vants':
                pointsVants = value;
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
            case 'Vants':
                pointsVants = parseInt(value);
                break;
        }
        updateDisplay();
    }

    function resetValues(category) {
        for (const key in attributes[category]) {
            attributes[category][key] = 1;
        }
    }

    updateDisplay();