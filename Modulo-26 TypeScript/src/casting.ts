namespace casting {

    let idade: any = 25;
    (idade as number).toFixed();
    (idade as string).length;
    (idade as string[]).forEach(x => {
        // console.log(x); aqui agente mascara um dado como outro tipo de dado, mas cuidado, pode dar erro no codigo
    })

    let nome: string = 35 as unknown as string;
    // nome.
    // Aqui se colocar um ponto do lado do nome, mesmo sendo 35 um numero por mascararmos ele como string vai aparecer as funcões para string
}