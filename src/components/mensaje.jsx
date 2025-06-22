const Mensaje = ({ persona }) => {
    return (
        <>
            <div>
                {persona.edad < 18 ?
                    <p>
                        Hola {persona.nombre} eres muy joven para usar esta aplicación
                    </p> :
                    <p>
                        Bienvenido {persona.nombre} gracias por usar nuestra aplicación
                    </p>
                }
            </div>
        </>
    );
};

export default Mensaje;