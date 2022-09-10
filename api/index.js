import app from "./app";

// ejecución de nuestro servidor
const main = () => {
    app.listen(app.get("port"));
    console.log(`Server on port ${app.get('port')}`);
};

main();