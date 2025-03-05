// const fs = require('fs')

const readJson = async () => {
    try {
        const response = await fetch('./fields.json');  // path relative to your HTML file
        const JsonData = await response.json();
        initializeHTML(JsonData['tag-content'])
        
    } catch (error) {
        console.error("Error while parsing or reading: ", error)       
    }
}

const initializeHTML = (tagContent) => {
    const HTMLFullWidthParent = document.getElementById('FullWidth')
    const HTMLSplitTextParent = document.getElementById('SplitText')
    const HTMLStampTextParent = document.getElementById('StampFields')
    const HTMLStampFooterParent = document.getElementById('StampFooter')

    const fullWidth = extractArraysByKey(tagContent, "full-width");
    const splitText = extractArraysByKey(tagContent, "split-text");
    const stampText = extractArraysByKey(tagContent, "stamp-side");
    const footerText = extractArraysByKey(tagContent, "footer");

    mapFullWidth(HTMLFullWidthParent, fullWidth)
    mapFullWidth(HTMLStampTextParent, stampText)
    mapSplitText(HTMLSplitTextParent, splitText, true)
    mapSplitText(HTMLStampFooterParent, footerText, false)

    addControlButtons()
}

const extractArraysByKey = (tagContent, key) => {
    return tagContent
        .flatMap(section => section[key] || []);
}

const mapFullWidth = (HTMLFullWidthParent, fieldArray) => {
    fieldArray.forEach(item => {
        const div = document.createElement('div')
        const p = document.createElement('p');
        const input = document.createElement('input');
        p.textContent = item;
        div.appendChild(p);
        div.appendChild(input);
        HTMLFullWidthParent.appendChild(div);
    });
}

const mapSplitText = (HTMLSplitTextParent, fieldArray, addBrackets) => {
    const div = document.createElement('div')

    if(addBrackets) {
        const openBracket = document.createElement('span');
        openBracket.textContent = '(';
        div.appendChild(openBracket);
    }
    
    fieldArray.forEach((item, index) => {
        const p = document.createElement('p');
        const input = document.createElement('input');
        p.textContent = item;
        div.appendChild(p);
        div.appendChild(input);

        if (index === fieldArray.length - 1 && addBrackets) {
            const closeBracket = document.createElement('span');
            closeBracket.textContent = ')';
            div.appendChild(closeBracket);
        }
    });

    HTMLSplitTextParent.appendChild(div);
}

const addControlButtons = () => {
    const mainBody = document.getElementById('MainBody')
    const div = document.createElement('div')
    div.classList.add('control-buttons')
    div.innerHTML = `
        <span id="AddButton" class="material-symbols-outlined AddButton icon" onclick="handleAdd()">
            add
        </span>
        <span id="CopyButton" class="material-symbols-outlined CopyButton icon" onclick="handleCopy()">
            content_copy
        </span>
        <span id="DownloadButton" class="material-symbols-outlined DownloadButton icon" onclick="downloadDocx()">
            download
        </span>
    `

    mainBody.append(div)
}

const removeControlButtons = () => {
    const mainBody = document.getElementById('MainBody')
    const controlBlock = document.querySelector('.control-buttons')
    mainBody.removeChild(controlBlock)
}

const handleAdd = () => {
    const mainBody = document.getElementById('MainBody')
    const tags = document.querySelectorAll('.tag')
    if (tags.length === 0) {
        console.error("No tags found.")
        return
    }

    const lastTag = tags[tags.length - 1]
    const newTag = lastTag.cloneNode(true)
    const inputs = newTag.querySelectorAll('input');
    inputs.forEach(input => input.value = '');

    removeControlButtons()
    mainBody.appendChild(newTag)
    addControlButtons()
}

const handleCopy = () => {
    const mainBody = document.getElementById('MainBody')
    const tags = document.querySelectorAll('.tag')
    if (tags.length === 0) {
        console.error("No tags found.")
        return
    }

    const lastTag = tags[tags.length - 1]
    const newTag = lastTag.cloneNode(true)

    removeControlButtons()
    mainBody.appendChild(newTag)
    addControlButtons()
}

const handleDelete = (event) => {
    const tags = document.querySelectorAll('.tag')
    if(tags.length <= 1) {
        console.log("Cannot remove the first tag")
        return
    }   
    
    const deleteButton = event.target;
    const tagDiv = deleteButton.closest('.tag');
    if (tagDiv) {
        tagDiv.remove();
    }
}

readJson()

const downloadDocx = () => {
    console.log("Download button")
} 
