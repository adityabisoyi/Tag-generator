const defaultBody = `
    <div class="tag">
        <span class="material-symbols-outlined delete-icon icon" onclick="handleDelete(event)">
            delete
        </span>
        <div class="tag-header">
            <div class="reference-no">
                <p>Ref P.O. No. :</p>
                <input type="text">
                <p>Date</p>
                <input type="text">
            </div>
            <h3>POLYMER ENTERPRISES (NASIK)</h3>
            <h4>(An ISO 9001-2015 Company)</h4>
            <h4>ACCEPTED</h4>
        </div>
        <div class="tag-content">
            <div id="FullWidth" class="full-width"></div>
            <div id="SplitText" class="split-text"></div>
            <div id="StampSplit" class="stamp-split">
                <div>
                    <div id="StampFields" class="stamp-fields"></div>
                    <div id="StampFooter" class="stamp-footer"></div>
                </div>
                <div class="stamp-box">
                    <p>Insp <br> Stamp</p>
                </div>
            </div>
        </div>
    </div>
`

const controlButtonHTML = `
    <div>
        <span id="AddButton" class="material-symbols-outlined AddButton icon" onclick="handleAdd()">
            add
        </span>
        <span id="CopyButton" class="material-symbols-outlined CopyButton icon" onclick="handleCopy()">
            content_copy
        </span>
        <span id="DownloadButton" class="material-symbols-outlined DownloadButton icon" onclick="downloadDocx()">
            download
        </span>
    </div>
    <div>
        <input id="FileName" placeholder="Please enter filename"/>
    </div>
`

const readJson = async (type) => {
    try {
        const response = await fetch('./fields.json');
        const JsonData = await response.json();

        disableType()
        initializeHTML(JsonData['tag-content'], type)
        
    } catch (error) {
        console.error("Error while parsing or reading: ", error)       
    }
}

const disableType = () => {
    const selectors = document.querySelectorAll('.tag-type')

    selectors.forEach(button => {
        button.disabled = true;
    });
}

const handleReset = () => {
    const mainBody = document.getElementById('MainBody')
    mainBody.innerHTML = defaultBody;
    
    const selectors = document.querySelectorAll('.tag-type')
    selectors.forEach(button => {
        button.disabled = false;
    });
}

const initializeHTML = (tagContent, type) => {
    const HTMLFullWidthParent = document.getElementById('FullWidth')
    const fullWidth = extractArraysByKey(tagContent, "full-width");
    mapFullWidth(HTMLFullWidthParent, fullWidth)

    if(type === 2) {
        const HTMLSplitTextParent = document.getElementById('SplitText')
        const splitText = extractArraysByKey(tagContent, "split-text");
        mapSplitText(HTMLSplitTextParent, splitText, true)
    }

    
    const HTMLStampTextParent = document.getElementById('StampFields')
    const stampText = extractArraysByKey(tagContent, "stamp-side");
    mapFullWidth(HTMLStampTextParent, stampText)
    
    const HTMLStampFooterParent = document.getElementById('StampFooter')
    const footerText = extractArraysByKey(tagContent, "footer");
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
        const span = document.createElement('span')
        p.textContent = item;
        span.textContent = ":"
        div.appendChild(p);
        div.appendChild(span);
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
    div.innerHTML = controlButtonHTML

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


const hideDeleteButton = (hideFlag) => {
    const deleteIcons = document.querySelectorAll('.delete-icon');
    deleteIcons.forEach(icon => {
        if(hideFlag) {
            icon.classList.add('hide-delete');
        } else {
            icon.classList.remove('hide-delete');
        }
    });
}


const downloadDocx = async () => {
    const element = document.getElementById('MainBody');
    let fileName = document.getElementById('FileName').value;
    if(fileName === null || fileName.trim() === '') {
        fileName = "SHOE30"
    }
    removeControlButtons()
    hideDeleteButton(true)

    const options = {
        margin: 0,
        filename: fileName + ".pdf",
        image: { type: 'jpeg', quality: 1 },
        html2canvas: {
            scale: 2
        },
        jsPDF: {
            unit: 'mm',
            format: [210, 297],
            orientation: 'landscape'
        },
        // pagebreak: { mode: ['css', 'legacy'] }
    };

    await html2pdf().set(options).from(element).save();
    addControlButtons()
    hideDeleteButton(false)
}; 

