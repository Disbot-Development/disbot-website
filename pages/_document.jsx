import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="apple-touch-icon" href="/logo.jpg" />
                    <meta name="robots" content="index,follow" />
                    <meta name="googlebot" content="index,follow" />
                    <meta
                        name="description"
                        content="Bot Discord dirigé par une équipe francophone dédié à la sécurité des serveurs."
                    />
                    <meta
                        property="og:url"
                        content="https://dis-bot.xyz"
                    />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="Disbot" />
                    <link
                        rel="icon"
                        href="/img/logo2.png"
                        type="image/x-icon"
                    />
                    <meta
                        property="og:description"
                        content="Bot Discord dirigé par une équipe francophone dédié à la sécurité des serveurs."
                    />
                    <meta property="og:image" content="/img/logo.jpg" />
                    <meta property="og:image:alt" content="Disbot" />
                    <meta property="og:locale" content="fr_FR" />
                    <meta property="og:site_name" content="Disbot" />
                    <meta name="theme-color" content="#5865F2" />
                    <link rel="icon" href="/img/logo.jpg" type="image/x-icon" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
                        rel="stylesheet"
                    />
                    <link
                        href="https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css"
                        rel="stylesheet"
                    />
                    <link rel="stylesheet" href="/css/nprogress.css" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
