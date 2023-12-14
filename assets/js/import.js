// Recupere os valores salvos do localStorage
const savedAttributes = JSON.parse(localStorage.getItem('attributes'));
const savedInfos = JSON.parse(localStorage.getItem('infos'));

// Elementos onde você deseja exibir os valores recuperados
for (let category in savedAttributes) {
    for (let attribute in savedAttributes[category]) {
        const elementId = `${category}_${attribute}`;
        const element = document.getElementById(elementId);
        
        if (element) {
            element.value = savedAttributes[category][attribute];
        }
    }
}


// Atualize o conteúdo dos elementos com os valores recuperados
for (let category in savedAttributes) {
    for (let attribute in savedAttributes[category]) {
        const element = document.getElementById(attribute);
        if (element) {
            element.textContent = JSON.stringify(savedAttributes[category][attribute]);
        }
    }
}





// FAZNEOD O MESMO, SO QUE PARA saveddINFOS