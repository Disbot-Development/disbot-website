import ErrorPage from "../components/ErrorPage";

const UnkownPage = () => {
    let messages = [
        "Avez-vous perdu votre chemin ?",
        "Oh ! La route est bloquée.",
        "Mince, cette page n'existe pas.",
    ];

    return (
        <ErrorPage
            code={404}
            message={
                messages[Math.floor(Math.random() * messages.length)] ||
                "Page introuvable."
            }
        />
    );
};

export default UnkownPage;
