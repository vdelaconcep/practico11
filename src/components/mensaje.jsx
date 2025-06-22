const Mensaje = ({ persona }) => {
    return (
        <>
            <div>
                {persona.edad < 18 ?
                    <p className="m-0 text-center">
                        Hola {persona.nombre} eres muy joven para usar esta aplicación
                    </p> :
                    <p className="m-0 text-center">
                        Bienvenido {persona.nombre} gracias por usar nuestra aplicación
                    </p>
                }
            </div>
        </>
    );
};

export default Mensaje;