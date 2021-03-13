const calculatePM = (pm, qm, pc, qc, tc) => {
    return (pm * qm + pc * qc + tc) / (qm + qc)
}

const calculateBuyQM = (qm, qv) => {
    return qm + qv
}

const calculateSellQM = (qm, qv) => {
    return qm - qv
}

const calculateRA = (pm, pv, qv, tv) => {
    return (pv - pm) * qv - tv
}

const calculateNegativePA = (pa, ra) => {
    return pa + ra
}

const calculatePositivePA = (pa, ra) => {
    return pa - Math.min(ra, pa)
}

const calculateTax = (ra, pa) => {
    return (ra - Math.abs(Math.min(ra, pa))) * 0.15
}

module.exports = {
    calculatePM,
    calculateBuyQM,
    calculateSellQM,
    calculateRA,
    calculateNegativePA,
    calculatePositivePA,
    calculateTax,
}