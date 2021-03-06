const EntriesAPI = function(){
    this.db = {}
}

EntriesAPI.prototype.addNewOperation = function(operation){
    if(operation.type === 'Compra'){
        addNewBuyOperation(this.db, operation)
    } else {
        addNewSellOperation(this.db, operation)
    }
}

EntriesAPI.prototype.removeOperation = function(name, id){
    if(!this.db.hasOwnProperty(name)){

        return false

    } if(this.numberOfOperations() === 0){

        return false

    } else {

        let years = Object.keys(this.db[name].year)
        years.forEach(year => {
            this.db[name].year[year] = this.db[name].year[year].filter(op => op.id !== id)

            if(Object.keys(this.db[name].year[year]).length === 0){
                delete this.db[name].year[year]
            }
        })
        
        if(Object.keys(this.db[name].year).length === 0){
            delete this.db[name]
        } else {
            recalculateValuesRetroactively(this.db, name)
        }
    }
}

EntriesAPI.prototype.print = function(){
    console.log(this)
}

EntriesAPI.prototype.getOperationById = function(name, id){
    console.log('getbyid')
    if(!this.db.hasOwnProperty(name)){

        throw new Error('Não existe nenhuma ação com esse código.')

    } else {

        let years = Object.keys(this.db[name].year)
        let targetOp

        years.forEach(year => {

            targetOp = this.db[name].year[year].filter(op => op.id === id)

        })

        return targetOp[0]
    }
}

EntriesAPI.prototype.getStockNumberOfEntries = function(name){
    if(Object.keys(this.db).length === 0){
        return 0
    } else {
        let years = Object.keys(this.db[name].year)
        let entriesNum = 0

        years.forEach(year => {
            entriesNum = entriesNum + this.db[name].year[year].length
        })

        return entriesNum
    }
}

EntriesAPI.prototype.getAllEntries = function(){
    if(Object.keys(this.db).length === 0){
        return {}
    } else {
        let stocks = Object.keys(this.db)
        let entries = {}

        stocks.forEach(stock => {
            let years = Object.keys(this.db[stock].year)
            entries[stock] = []
            years.forEach(year => 
                this.db[stock].year[year].forEach(op =>
                    entries[stock].push(op)
                )
            )
        })
        return entries
    }
}

EntriesAPI.prototype.numberOfOperations = function(){
    let entries = this.getAllEntries()
    let stocks = Object.keys(entries)
    let numberOfOperations = 0

    stocks.forEach(stock => {
        numberOfOperations = numberOfOperations + entries[stock].length
    })

    return numberOfOperations
}

const addNewBuyOperation = (obj, operation) => {
    if(!obj.hasOwnProperty(operation.code)){

        obj[operation.code] = {
            pm: 0,
            qm: 0,
            ra: 0,
            pa: 0,
            year: {
                [operation.date.getFullYear()]: [
                    {
                        id: operation.id,
                        code: operation.code,
                        date: operation.date,
                        type: operation.type,
                        price: operation.price,
                        quantity: operation.quantity,
                        tax: operation.tax
                    }
                ]
            }
        }

        recalculateValuesRetroactively(obj, operation.code)

    } else {

        if(!obj[operation.code].year.hasOwnProperty(operation.date.getFullYear())){

            obj[operation.code].year[operation.date.getFullYear()] = [
                {
                    id: operation.id,
                    code: operation.code,
                    date: operation.date,
                    type: operation.type,
                    price: operation.price,
                    quantity: operation.quantity,
                    tax: operation.tax
                }
            ]

            recalculateValuesRetroactively(obj, operation.code)

        } else {

            obj[operation.code].year[operation.date.getFullYear()].push({
                id: operation.id,
                code: operation.code,
                date: operation.date,
                type: operation.type,
                price: operation.price,
                quantity: operation.quantity,
                tax: operation.tax
            })

            recalculateValuesRetroactively(obj, operation.code)
        }
    }
}

const addNewSellOperation = (obj, operation) => {
    if(!obj.hasOwnProperty(operation.code)){

        throw new Error('Não existem ações com esse código.')

    } else if(obj[operation.code].qm < operation.quantity){

        throw new Error('Não é possível vender mais do que a quantidade existente.')

    } else {

        if(!obj[operation.code].year.hasOwnProperty(operation.date.getFullYear())){

            obj[operation.code].year[operation.date.getFullYear()] = [
                {
                    id: operation.id,
                    code: operation.code,
                    date: operation.date,
                    type: operation.type,
                    price: operation.price,
                    quantity: operation.quantity,
                    tax: operation.tax,
                    salesTax: 0
                }
            ]

            recalculateValuesRetroactively(obj, operation.code)

        } else {

            obj[operation.code].year[operation.date.getFullYear()].push({
                id: operation.id,
                code: operation.code,
                date: operation.date,
                type: operation.type,
                price: operation.price,
                quantity: operation.quantity,
                tax: operation.tax,
                salesTax: 0
            })

            recalculateValuesRetroactively(obj, operation.code)
        }
    }
}

const updateValuesFromBuyOperation = (obj, operation) => {
    obj[operation.code].pm = calculatePM(obj[operation.code].pm, obj[operation.code].qm, operation.price, operation.quantity, operation.tax)
    obj[operation.code].qm = calculateBuyQM(obj[operation.code].qm, operation.quantity)
}

const updateValuesFromSellOperation = (obj, operation) => {
    obj[operation.code].ra = calculateRA(obj[operation.code].pm, operation.price, operation.quantity, operation.tax)
    obj[operation.code].qm = calculateSellQM(obj[operation.code].qm, operation.quantity) 

    if(obj[operation.code].ra < 0) {
        obj[operation.code].pa = calculateNegativePA(obj[operation.code].pa, obj[operation.code].ra)
    } else {
        operation.salesTax = calculateTax(obj[operation.code].ra, obj[operation.code].pa)
        obj[operation.code].pa = calculatePositivePA(obj[operation.code].pa, obj[operation.code].ra)
    }
}

const recalculateValuesRetroactively = (obj, name) => {
    console.log(obj)
    console.log(name)
    if(!obj.hasOwnProperty(name)){
        throw new Error('Não existe nenhuma ação com esse código.')
    } else {
        const years = Object.getOwnPropertyNames(obj[name].year)
        resetValues(obj, name)
        years.forEach(year => {
            let sortedOperations = obj[name].year[year].sort((a,b) => a.date - b.date)
            sortedOperations.forEach(op => {
                if(op.type === 'Compra'){
                    updateValuesFromBuyOperation(obj, op)
                } else {
                    updateValuesFromSellOperation(obj, op)
                }
            })
        })
    }
}

const resetValues = (obj, name) => {
    if(!obj.hasOwnProperty(name)){
        throw new Error('Não existe nenhuma ação com esse código.')
    } else {
        obj[name].pm = 0
        obj[name].qm = 0
        obj[name].ra = 0
        obj[name].pa = 0
    }
}

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

export default EntriesAPI