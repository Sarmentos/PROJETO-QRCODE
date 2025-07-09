
const promptQRCODE = [
    {
        name: "link",
        description: "Digite o link para gerar o QRCODE",
    },
    {
        name: "type",
        description: "escolha  entre o tipo (1 - NORMAL) OU (2 - TERMINAL) ",
        pattern: /^[1-2]+$/,
        message: "Escolha apenas entre 1 e 2",
        required: true,
    }
];

export default promptQRCODE;