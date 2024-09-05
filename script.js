async function loadData() {
    let data = await fetch('./data.json');
    data = await data.json()


    let component = ""
    for(let i=0 ; i < data.length ; i ++){
        const hp = (String(data[i].no)[0] == "0") ? "+62" : "";
        
        component = component + `  <a target="_blank" href="https://wa.me/${hp + data[i].no}" class="teman">
      <img src="${data[i].fotoselfie}" alt="err" />
      <div class="BIO">
        <div class="text-biodata"><span>Nim</span>: ${data[i].nim}<span></span></div>
        <div class="text-biodata"><span>Nama</span>: ${data[i].nama}<span></span></div>
        <div class="text-biodata"><span>Alamat</span>: ${data[i].alamat}<span></span></div>
        <div class="text-biodata"><span>Ttl</span>: ${data[i].ttl}<span></span></div>
        <div class="text-biodata"><span>No Hp</span>: ${data[i].no}<span></span></div>
      </div>
    </a>`
    }

    document.getElementById('teman-teman').innerHTML = component
}



loadData()