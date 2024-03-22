let tagCount = 1
window.jsPDF = window.jspdf.jsPDF;
var docPDF = new jsPDF('p', 'mm', 'a4');

function saveAsPDF() {
    var content = document.getElementById("preview-page");

    docPDF.html(content, {
        callback: function(docPDF) {
            docPDF.save("tags.pdf")
        },
        width: 210,
        height: 296,
        windowWidth: 795
    })
}
const addInputTag = (e) => {
    // e.preventDefault
    const inputParent = document.getElementById('input-tab')
    const outputParent = document.getElementById('preview-page')
    const inputTag = document.createElement("div")
    
    tagCount++;
    
    if(tagCount > 6) {
        return alert("Cannot add more tags on a single page") 
    }

    inputTag.innerHTML = `
        <h2>Tag no. ${tagCount}</h2>
        <input type="text" oninput="setValue('product-${tagCount}', 'tag-Product-${tagCount}')" id="product-${tagCount}" name="Product" placeholder="Product">
        <input type="text" oninput="setValue('part-${tagCount}', 'tag-part-${tagCount}')" id="part-${tagCount}" name="Product" placeholder="Part no.">
        <input type="text" oninput="setValue('material-${tagCount}', 'tag-material-${tagCount}')" id="material-${tagCount}" name="Product" placeholder="Material">
        <input type="text" oninput="setValue('batch-${tagCount}', 'tag-batch-${tagCount}')" id="batch-${tagCount}" name="Product" placeholder="Batch no.">
        <input type="date" oninput="setValue('mfg-${tagCount}', 'tag-mfg-${tagCount}')" id="mfg-${tagCount}" name="Product" placeholder="Mfg. Date">
        <input type="date" oninput="setValue('life-${tagCount}', 'tag-life-${tagCount}')" id="life-${tagCount}" name="Product" placeholder="Life Upto">
    `


    inputParent.appendChild(inputTag)

    outputParent.innerHTML += `
        <div class="tag-data">
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
                    <div class="stamp-pushed">
                        <div class="grid-continue">
                            <p>Batch no.</p>
                            <span id="tag-batch-${tagCount}">:</span>
                            <p>Mfg. date </p>
                            <span id="tag-mfg-${tagCount}">:</span>
                            <p>Life upto </p>
                            <span id="tag-life-${tagCount}">:</span>
                        </div>
                        <div class="insp-stamp">
                            <p>Insp Stamp</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tag-credentials">
                <p>Signature of Inspector</p>
                <p style="padding-right: 2.5em;">Date</p>
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
    if(tagCount > 6) {
        return alert("Cannot add more tags on a single page") 
    }

    const prevProduct = document.getElementById(`product-${tagCount-1}`).value
    const prevMaterial = document.getElementById(`material-${tagCount-1}`).value
    const prevBatch = document.getElementById(`batch-${tagCount-1}`).value
    const prevPart = document.getElementById(`part-${tagCount-1}`).value
    const prevMfg = document.getElementById(`mfg-${tagCount-1}`).value
    const prevLife = document.getElementById(`life-${tagCount-1}`).value

    console.log(prevBatch, prevLife, prevMaterial, prevMfg, prevProduct, prevPart)

    inputTag.innerHTML += `
        <h2>Tag no. ${tagCount}</h2>
        <input type="text" value="${prevProduct}" oninput="setValue('product-${tagCount}', 'tag-Product-${tagCount}')" id="product-${tagCount}" name="Product" placeholder="Product">
        <input type="text" value="${prevPart}" oninput="setValue('part-${tagCount}', 'tag-part-${tagCount}')" id="part-${tagCount}" name="Product" placeholder="Part no.">
        <input type="text" value="${prevMaterial}" oninput="setValue('material-${tagCount}', 'tag-material-${tagCount}')" id="material-${tagCount}" name="Product" placeholder="Material">
        <input type="text" value="${prevBatch}" oninput="setValue('batch-${tagCount}', 'tag-batch-${tagCount}')" id="batch-${tagCount}" name="Product" placeholder="Batch no.">
        <input type="date" value="${prevMfg}" oninput="setValue('mfg-${tagCount}', 'tag-mfg-${tagCount}')" id="mfg-${tagCount}" name="Product" placeholder="Mfg. Date">
        <input type="date" value="${prevLife}" oninput="setValue('life-${tagCount}', 'tag-life-${tagCount}')" id="life-${tagCount}" name="Product" placeholder="Life Upto">
    `

    inputParent.appendChild(inputTag)

    outputParent.innerHTML += `
        <div class="tag-data">
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
                    <div class="stamp-pushed">
                        <div class="grid-continue">
                            <p>Batch no. </p>
                            <span id="tag-batch-${tagCount}">: ${prevBatch}</span>
                            <p>Mfg. date </p>
                            <span id="tag-mfg-${tagCount}">: ${prevMfg}</span>
                            <p>Life upto </p>
                            <span id="tag-life-${tagCount}">: ${prevLife}</span>
                        </div>
                        <div class="insp-stamp">
                            <p>Insp Stamp</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tag-credentials">
                <p>Signature of Inspector</p>
                <p style="padding-right: 2.5em;">Date</p>
            </div>
        </div>
    `

}

const setValue = (inputId, outputId, e) => {
    setTimeout(() =>{
        document.getElementById(outputId).innerHTML = ": " + document.getElementById(inputId).value,
        1000
    })
}













