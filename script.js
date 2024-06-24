let tagCount = 1

const addInputTag = (e) => {
    // e.preventDefault
    const inputParent = document.getElementById('input-tab')
    const outputParent = document.getElementById('preview-page')
    const inputTag = document.createElement("div")
    
    tagCount++;
    
    // if(tagCount > 4) {
    //     return alert("Cannot add more tags on a single page") 
    // }

    inputTag.innerHTML = `
        <h2>Tag no. ${tagCount}</h2>

        <input type="text" oninput="setValue('product-${tagCount}', 'tag-Product-${tagCount}')" id="product-${tagCount}" name="Product" placeholder="Product">
        <input type="text" oninput="setValue('part-${tagCount}', 'tag-part-${tagCount}')" id="part-${tagCount}" name="Product" placeholder="Part no.">
        <input type="text" oninput="setValue('material-${tagCount}', 'tag-material-${tagCount}')" id="material-${tagCount}" name="Product" placeholder="Material">
        <input type="text" oninput="setValue('batch-${tagCount}', 'tag-batch-${tagCount}')" id="batch-${tagCount}" name="Product" placeholder="Batch no.">
        <input type="text" oninput="setValue('quantity-${tagCount}', 'tag-quantity-${tagCount}')" id="quantity-${tagCount}" name="Quantity" placeholder="Quantity.">
        <input type="text" oninput="setValue('mfg-${tagCount}', 'tag-mfg-${tagCount}')" id="mfg-${tagCount}" name="Product" placeholder="Mfg. Date" >
        <input type="text" oninput="setValue('life-${tagCount}', 'tag-life-${tagCount}')" id="life-${tagCount}" name="Product" placeholder="Life Upto" >
        <input type="text" oninput="setValue('post-office-${tagCount}', 'tag-post-office-${tagCount}')" id="post-office-${tagCount}" placeholder="Post office number">
    `


    inputParent.appendChild(inputTag)

    outputParent.innerHTML += `
        <div class="tag-data">
            <div class="po-ref">
                <p>Ref. P.O No. </p>
                <span id="tag-post-office-${tagCount}"></span>
            </div>
            <div class="tag-header">
            <h3>POLYMER <span class="adjustment">ENTERPRISES</span> <span class="adjustment">(NASIK)</h3>
                <h3>(An ISO 9001-2015 Company)</h3>
                <h3>Accepted</h3>
            </div>
            <div>
                <div class="tag-preview-data">
                    <p>Product </p>
                    <span id="tag-Product-${tagCount}">:</span>
                    <p>Part no. </p>
                    <span id="tag-part-${tagCount}">:</span>
                    <p>Material </p>
                    <span id="tag-material-${tagCount}">:</span>
                    <p>Batch no.</p>
                    <span id="tag-batch-${tagCount}">:</span>
                    <p>Quantity.</p>
                    <span id="tag-quantity-${tagCount}">:</span>
                    <div class="stamp-pushed">
                        <div class="grid-continue">
                            <p>Mfg. date </p>
                            <span id="tag-mfg-${tagCount}">:</span>
                            <p>Life upto </p>
                            <span id="tag-life-${tagCount}">:</span>
                            <div class="tag-credentials">
                                <p style="width: 90%;">Signature of <br> Inspector</p>
                                <p>Date</p>
                            </div>
                        </div>
                        <div class="insp-stamp">
                            <p>Insp Stamp</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `

}

const addPrevTag = (e) => {
    // e.preventDefault
    const inputParent = document.getElementById('input-tab')
    const outputParent = document.getElementById('preview-page')
    const inputTag = document.createElement("div")
    tagCount++;
    // if(tagCount > 4) {
    //     return alert("Cannot add more tags on a single page") 
    // }

    const prevProduct = document.getElementById(`product-${tagCount-1}`).value
    const prevMaterial = document.getElementById(`material-${tagCount-1}`).value
    const prevBatch = document.getElementById(`batch-${tagCount-1}`).value
    const prevQuantity = document.getElementById(`quantity-${tagCount-1}`).value
    const prevPart = document.getElementById(`part-${tagCount-1}`).value
    const prevMfg = document.getElementById(`mfg-${tagCount-1}`).value
    const prevLife = document.getElementById(`life-${tagCount-1}`).value
    const prevPO = document.getElementById(`post-office-${tagCount-1}`).value

    console.log(prevBatch, prevLife, prevMaterial, prevMfg, prevProduct, prevPart, prevPO)

    inputTag.innerHTML += `
        <h2>Tag no. ${tagCount}</h2>
        
        <input type="text" value="${prevProduct}" oninput="setValue('product-${tagCount}', 'tag-Product-${tagCount}')" id="product-${tagCount}" name="Product" placeholder="Product">
        
        <input type="text" value="${prevPart}" oninput="setValue('part-${tagCount}', 'tag-part-${tagCount}')" id="part-${tagCount}" name="Product" placeholder="Part no.">
        
        <input type="text" value="${prevMaterial}" oninput="setValue('material-${tagCount}', 'tag-material-${tagCount}')" id="material-${tagCount}" name="Product" placeholder="Material">
        
        <input type="text" value="${prevBatch}" oninput="setValue('batch-${tagCount}', 'tag-batch-${tagCount}')" id="batch-${tagCount}" name="Product" placeholder="Batch no.">

        <input type="text" value="${prevQuantity}" oninput="setValue('quantity-${tagCount}', 'tag-quantity-${tagCount}')" id="quantity-${tagCount}" name="Quantity" placeholder="Quantity.">
        
        <input type="text" value="${prevMfg}" oninput="setValue('mfg-${tagCount}', 'tag-mfg-${tagCount}')" id="mfg-${tagCount}" name="Product" placeholder="Mfg. Date" >
        
        <input type="text" value="${prevLife}" oninput="setValue('life-${tagCount}', 'tag-life-${tagCount}')" id="life-${tagCount}" name="Product" placeholder="Life Upto" >
        
        <input type="text" value="${prevPO}" oninput="setValue('post-office-${tagCount}', 'tag-post-office-${tagCount}')" id="post-office-${tagCount}" placeholder="Post office number">
    `

    inputParent.appendChild(inputTag)

    outputParent.innerHTML += `
        <div class="tag-data">
            <div class="po-ref">
                <p>Ref. P.O No. </p>
                <span id="tag-post-office-${tagCount}">${prevPO}</span>
            </div>
            <div class="tag-header">
                <h3>POLYMER <span class="adjustment">ENTERPRISES</span> <span class="adjustment">(NASIK)</h3>
                <h3>(An ISO 9001-2015 Company)</h3>
                <h3>Accepted</h3>
            </div>
            <div>
                <div class="tag-preview-data">
                    <p>Product </p>
                    <span id="tag-Product-${tagCount}">: ${prevProduct}</span>
                    <p>Part no. </p>
                    <span id="tag-part-${tagCount}">: ${prevPart}</span>
                    <p>Material </p>
                    <span id="tag-material-${tagCount}">: ${prevMaterial}</span>
                    <p>Batch no. </p>
                    <span id="tag-batch-${tagCount}">: ${prevBatch}</span>
                    <p>Quantity.</p>
                    <span id="tag-quantity-${tagCount}">:</span>
                    <div class="stamp-pushed">
                        <div class="grid-continue">
                            <p>Mfg. date </p>
                            <span id="tag-mfg-${tagCount}">: ${prevMfg}</span>
                            <p>Life upto </p>
                            <span id="tag-life-${tagCount}">: ${prevLife}</span>
                            <div class="tag-credentials">
                                <p style="width: 90%;">Signature of <br> Inspector</p>
                                <p>Date</p>
                            </div>
                        </div>
                        <div class="insp-stamp">
                            <p>Insp Stamp</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `

}

const setValue = (inputId, outputId, e) => {
    if(document.getElementById(inputId).type === "date") {
        const date = new Date(document.getElementById(inputId).value)
        setTimeout(() =>{
            document.getElementById(outputId).innerHTML = ": " + `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`,
            1000
        })
    } else {
        setTimeout(() =>{
            document.getElementById(outputId).innerHTML = ": " + document.getElementById(inputId).value,
            1000
        })
    }
}

const setDate = (inputId, outputId, e) => {
    const dateformat = document.getElementById(inputId).Date()
    setTimeout(() =>{
        document.getElementById(outputId).innerHTML = ": " + document.getElementById(inputId).value,
        1000
    })
}

function generatePDF() {
    var element = document.getElementById('preview-page');
    // element.style.width = '750px';
    // element.style.height = '900px';
    var opt = {
        margin:       0,
        filename:     'myfile.pdf',
        image:        { type: 'jpeg', quality: 1 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'mm', format: [210,297], orientation: 'landscape' }
    };
    html2pdf().set(opt).from(element).save();
}

const delTag = () => {
    const inputParent = document.getElementById('input-tab')
    const outputParent = document.getElementById('preview-page')
    console.log(inputParent.children.length)
    if(inputParent.children.length === 1) {
        alert("Cannot delete the first tag")
        return
    } else {
        tagCount--;
        console.log(inputParent.children[inputParent.children.length-1])
        console.log(outputParent.children[outputParent.children.length-1])

        inputParent.removeChild(inputParent.children[inputParent.children.length-1])
        outputParent.removeChild(outputParent.children[outputParent.children.length-1])
    }
}