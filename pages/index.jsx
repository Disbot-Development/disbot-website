import Link from "next/link";

export default function Landing() {
    return (
        <>
            <div className="py-20 mb-30 max-w-3xl mx-auto">
                <div className="flex w-full justify-center">
                    <img width="250" src="/img/bck.png" />
                </div>
                <p className="animateHeader text-4xl font-extrabold text-center text-white">
                    Disbot
                </p>
                <p className="animateHeader text-white text-opacity-50 text-center mt-5">
                    Bot Discord dirigé par une équipe francophone dédié à la
                    sécurité des serveurs.
                </p>
                <div className="animateHeader mt-10 flex flex-wrap items-center justify-center gap-x-4">
                    <Link
                        href={
                            "https://discord.com/oauth2/authorize?client_id=1233606057507422268"
                        }
                    >
                        <a
                            className={
                                "flex items-center px-6 justify-center gap-x-2 shadow-lg shadow-amber-600/20 rounded-xl py-4 font-medium bg-gradient-to-bl from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white "
                            }
                        >
                            Inviter
                        </a>
                    </Link>
                    <div className="py-10"></div>
                    <Link href={"https://discord.gg/YPW3ZNuKW5"}>
                        <a
                            className={
                                " px-6 justify-center gap-x-2 shadow-lg shadow-amber-600/20 rounded-xl py-4 font-medium bg-gradient-to-bl from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white "
                            }
                        >
                            Support
                        </a>
                    </Link>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-y-0 lg:gap-x-12 py-24 lg:my-40">
                <div className="col-span-4">
                    <p
                        className="text-white text-4xl font-bold"
                        dangerouslySetInnerHTML={{ __html: "Disbot" }}
                    />
                    <p
                        className="text-white text-md font-medium text-gray-500/75"
                        dangerouslySetInnerHTML={{
                            __html: "Protégez vos serveurs en utilisant les différents sytèmes de protection sûrs que Disbot propose.",
                        }}
                    />
                    <a
                        href="https://discord.com/oauth2/authorize?client_id=1233606057507422268"
                        className={
                            "mt-10 flex items-center px-4 justify-center gap-x-2 shadow-lg shadow-amber-600/20 cursor-pointer rounded-xl py-4 font-medium bg-gradient-to-r from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white"
                        }
                    >
                        <i className="fab fa-discord mr-2" />
                        Inviter Disbot
                    </a>
                </div>

                <div className="col-span-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                        <div className="text-white">
                            <p className="text-xl font-semibold mt-5">
                                <i
                                    className={`fa fa-cogs text-2xl text-amber-500`}
                                />{" "}
                                Optimisé
                            </p>
                            <p className="text-gray-500 line-clamp-4">
                                Disbot est optimisé afin de réagir le plus
                                rapidement possible. Cela est notamment possible
                                grâce à notre VPS hébergé par OVH.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="text-white">
                            <p className="text-xl font-semibold mt-5">
                                <i
                                    className={`fa fa-shield text-2xl text-amber-500`}
                                />{" "}
                                Sécurité
                            </p>
                            <p className="text-gray-500 line-clamp-4">
                                Disbot possède actuellement les systèmes de
                                sécurités les plus avancés. Bien qu'ils soient
                                open source (code libre d'accès), nous pouvons
                                assurer la sécurité de vos serveurs.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="text-white">
                            <p className="text-xl font-semibold mt-5">
                                <i
                                    className={`fa fa-tools text-2xl text-amber-500`}
                                />{" "}
                                Modération
                            </p>
                            <p className="text-gray-500 line-clamp-4">
                                Disbot est l'un des meilleurs pour modérer votre
                                serveur. Il utilise les dernières
                                fonctionnalités que Discord propose tout en
                                restant intuitif et rapide.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="text-white">
                            <p className="text-xl font-semibold mt-5">
                                <i
                                    className={`fa fa-ticket text-2xl text-amber-500`}
                                />{" "}
                                Support
                            </p>
                            <p className="text-gray-500 line-clamp-4">
                                Nous proposons une équipe support rapide,
                                réactive et informée. Si vous souhaitez nous
                                solliciter, rendez-vous sur notre serveur
                                support.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
