new Vue({
    el: '#appgpt',
    data: {
        numero1: 0,
        numero2: 0,
        operacao: '+',
    },
    computed: {
        resultado() {
            const num1 = parseFloat(this.numero1);
            const num2 = parseFloat(this.numero2);

            if (isNaN(num1) || isNaN(num2)) {
                return 'Inválido';
            }

            switch (this.operacao) {
                case '+':
                    return num1 + num2;
                case '-':
                    return num1 - num2;
                case '*':
                    return num1 * num2;
                case '/':
                    return num1 / num2;
                default:
                    return 'Inválido';
            }
        },
    },
});
