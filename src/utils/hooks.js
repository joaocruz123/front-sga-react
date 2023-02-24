export function maskCep(v) {
    v = v.replace(/\D/g, "")
    v = v.replace(/(\d{5})(\d)/, "$1-$2")
    return v
}