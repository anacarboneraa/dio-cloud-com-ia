function identificarBandeira(numero) {
    const n = numero.replace(/\D/g, ''); // Remove caracteres não numéricos

    // Visa: começa com 4
    if (/^4/.test(n)) return 'Visa';

    // MasterCard: começa com 51-55 ou 2221-2720
    if (/^(5[1-5])/.test(n) || /^(222[1-9]|22[3-9]\d|2[3-6]\d{2}|27[01]\d|2720)/.test(n)) {
        return 'MasterCard';
    }

    // Elo: 4011, 4312, 4389, entre outros (exemplo com alguns prefixos comuns)
    if (/^(4011|4312|4389)/.test(n)) return 'Elo';

    // American Express: começa com 34 ou 37
    if (/^(34|37)/.test(n)) return 'American Express';

    // Discover: começa com 6011, 65, ou 644-649
    if (/^(6011|65|64[4-9])/.test(n)) return 'Discover';

    // Hipercard: geralmente começa com 6062
    if (/^6062/.test(n)) return 'Hipercard';

    return 'Bandeira não identificada';
}

// Exemplo de uso:
console.log(identificarBandeira('4111111111111111')); // Visa
console.log(identificarBandeira('5500000000000004')); // MasterCard
console.log(identificarBandeira('4011780000000000')); // Elo
console.log(identificarBandeira('371449635398431'));  // American Express
console.log(identificarBandeira('6011111111111117')); // Discover
console.log(identificarBandeira('6062825624254001')); // Hipercard
