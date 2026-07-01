const redes = ["github", "linkedin", "instagram"]

const link = redes.map(site => {
    return `https://www.${site}.com`
})
console.log(link)