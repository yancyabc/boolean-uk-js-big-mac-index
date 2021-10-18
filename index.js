
const usBigMacPrice = 3.57

/* Big Mac Price */
const ukBigMacPrice = 2.29
const switzBigMacPrice = 7.30
const swedBigMacPrice = 52.80
const norwBigMacPrice = 52.00
const israBigMacPrice = 17.00


/* Exhchange Rates */
const USDGBP = 2.00
const USDCHF = 1.08
const USDSEK = 0.12
const USDNOR = 0.12
const USDILS = 0.31

/* Implied purchasing power */
const ukIpp = (usBigMacPrice/ukBigMacPrice)
const chfIpp = (usBigMacPrice/switzBigMacPrice)
const sekIpp = (usBigMacPrice/swedBigMacPrice)
const norIpp = (usBigMacPrice/norwBigMacPrice)
const ilsIpp = (usBigMacPrice/israBigMacPrice)

/* BigMac Index */
const ukBigMacIndex = ((USDGBP-ukIpp)/ukIpp)
const chfBigMacIndex = ((USDCHF-chfIpp)/chfIpp)
const sekBigMacIndex = ((USDSEK-sekIpp)/sekIpp)
const norBigMacIndex = ((USDNOR-norIpp)/norIpp)
const ilsBigMacIndex = ((USDILS-ilsIpp)/ilsIpp)

console.log(ilsBigMacIndex)
    
