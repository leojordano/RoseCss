// WIDTH PROPERTY
const width = document.querySelectorAll('[w]')
if(width.length > 0) {
width.forEach(w =>{ 
    let size = w.attributes.w.value
     return w.style.width = size
})
}

// HEIGHT PROPERTY
const height = document.querySelectorAll('[h]')
if(height.length > 0) {
height.forEach(h => {
    let size = h.attributes.h.value
     return h.style.height = size
})
}

// BACKGROUND COLOR
const bg = document.querySelectorAll('[bg]')
if(bg.length > 0) {
    bg.forEach(bg => {
        let color = bg.attributes.bg.value
        return bg.style.backgroundColor = color
    })
}

// CENTRE PROPERTY
const flex = document.querySelectorAll('[flex]')
const center = document.querySelectorAll('[center]')
const fj = document.querySelectorAll('[fj]')
const fa = document.querySelectorAll('[fa]')
if(flex.length > 0) {
    flex.forEach(item => {
        item.style.display = 'flex'
        item.style.flexWarp = 'wrap'
        switch(item.attributes.flex.value) {
            case 'column':
                return item.style.flexDirection = 'column'
            case 'row':
                return item.style.flexDirection = 'row'
            case 'row-reverse':
                return item.style.flexDirection = 'row-reverse'
            case 'column-reverse':
                return item.style.flexDirection = 'column-reverse'
            default:
                return item.style.flexDirection = 'row'
        }
    })
}

if(fj.length > 0) {
    fj.forEach(item => {
        const value = item.attributes.fj.value
        return  item.style.justifyContent = value
    })
}

if(fa.length > 0) {
    fa.forEach(item => {
        const value = item.attributes.fa.value
        return  item.style.alignItems = value
    })
}

// CENTER PROPERTY
if(center.length > 0) {
    center.forEach(item => {
        return item.style.margin = '0px auto'

    })
}

// COLOR TEXT
const color = document.querySelectorAll('[color]')
if(color.length > 0) {
    color.forEach(item => {
        const value = item.attributes.color.value
        return item.style.color = value
    })
}

// FONT SIZE
const fontSize = document.querySelectorAll('[fontSize]')
if(fontSize.length > 0) {
    color.forEach(item => {
        const value = item.attributes.fontSize.value
        return item.style.fontSize = value
    })
}
// MARGIN
const margin = document.querySelectorAll('[m]')
if(margin.length > 0) {
    margin.forEach(item => {
        const value = item.attributes.m.value
        return item.style.margin = value
    })
}

// PADDING
 const padd = document.querySelectorAll('[p]')
if(padd.length > 0) {
    padd.forEach(item => {
        const value = item.attributes.p.value
        return item.style.padding = value
    })
}

// COMPONENTS
