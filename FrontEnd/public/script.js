console.log("Hola mundo")

const username = document.getElementById("username")
const password = document.getElementById("password")
const btnLogin = document.getElementById("login")

const login = () => {
    if (username.value == "root" && password.value == "root") {
        window.location = "/profile"
    } else {
        alert("Credenciales incorrectas. Usa root / root")
    }
}

btnLogin.addEventListener("click", login)


const radios = document.querySelectorAll('input[name="tipo"]')
const infoTipo = document.getElementById("infoTipo")

const mensajes = {
    institucion:  "Seleccionaste: Institucion.",
    asistente:    "Seleccionaste: Asistente.",
    patrocinador: "Seleccionaste: Patrocinador."
}

radios.forEach(radio => {
    radio.addEventListener("click", () => {
        infoTipo.style.display = "block"
        infoTipo.textContent = mensajes[radio.value]
    })
})


// ===== DROPDOWNS PAIS Y REGION =====
const selectPais   = document.getElementById("selectPais")
const selectRegion = document.getElementById("selectRegion")

fetch("https://cdn.jsdelivr.net/npm/country-region-data@2.2.0/data.json")
    .then(res => res.json())
    .then(data => {
        data.forEach(pais => {
            const option = document.createElement("option")
            option.value = pais.countryShortCode
            option.textContent = pais.countryName
            option.dataset.regions = JSON.stringify(pais.regions)
            selectPais.appendChild(option)
        })
    })

selectPais.addEventListener("change", () => {
    selectRegion.innerHTML = '<option value="">-- Selecciona una region --</option>'
    const selectedOption = selectPais.options[selectPais.selectedIndex]
    if (!selectedOption.dataset.regions) return
    const regions = JSON.parse(selectedOption.dataset.regions)
    regions.forEach(region => {
        const option = document.createElement("option")
        option.value = region.shortCode || region.name
        option.textContent = region.name
        selectRegion.appendChild(option)
    })
})


// ===== CHECKBOXES =====
const chkTerminos = document.getElementById("chkTerminos")
const chkContacto = document.getElementById("chkContacto")
const btnEnviar   = document.getElementById("btnEnviar")

const verificarCheckboxes = () => {
    if (chkTerminos.checked && chkContacto.checked) {
        btnEnviar.disabled = false
    } else {
        btnEnviar.disabled = true
    }
}

chkTerminos.addEventListener("change", verificarCheckboxes)
chkContacto.addEventListener("change", verificarCheckboxes)

btnEnviar.addEventListener("click", () => {
    alert("Inscripcion enviada correctamente!")
})