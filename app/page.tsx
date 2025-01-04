"use client";

import React, { useState } from 'react';

const RoyCohnPage = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex bg-gray-100 min-h-screen">
            {/* Burger Menu Button */}
            <button
                className="lg:hidden p-4 fixed top-0 left-0 z-20"
                onClick={toggleSidebar}
            >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16m-7 6h7"
                    ></path>
                </svg>
            </button>

            {/* Sidebar */}
            <nav
                className={`w-64 bg-white border-r border-gray-300 p-4 fixed h-full z-10 transform ${
                    isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                } lg:translate-x-0 transition-transform duration-300 ease-in-out`}
            >
                <h2 className="text-xl font-bold mb-4">Contents</h2>
                <ul className="list-disc list-inside text-sm">
                    <li><a href="#section1" className="text-blue-600 hover:underline">Extraits de textes clés</a></li>
                    <li><a href="#section2" className="text-blue-600 hover:underline">Recherches personnelles</a></li>
                    <li><a href="#section3" className="text-blue-600 hover:underline">Photographies et inspirations visuelles</a></li>
                    <li><a href="#section5" className="text-blue-600 hover:underline">Répliques essentielles</a></li>
                    <li><a href="#section6" className="text-blue-600 hover:underline">Partition personnelle annotée</a></li>
                    <li><a href="#section7" className="text-blue-600 hover:underline">Citation centrale dans la loge</a></li>
                    <li><a href="#conclusion" className="text-blue-600 hover:underline">Conclusion</a></li>
                </ul>
            </nav>

            {/* Main content */}
            <main
                className={`p-6 transition-all duration-300 ease-in-out ${isSidebarOpen ? 'ml-64' : 'ml-0'} lg:ml-64`}>
                <header className="border-b border-gray-300 pb-4 mb-6">
                    <h1 className="text-4xl font-bold text-gray-800">Roy Marcus Cohn</h1>
                </header>

                <div className="border border-gray-300 p-5 bg-white gap-6 mb-8 flex">
                    <div>
                        <img
                            src="800px-Roy_Cohn.jpg"
                            alt="Roy Cohn"
                            className="w-40 h-40 object-cover mb-4 border border-gray-300"/>
                    </div>

                    <div>
                        <p><strong>Born:</strong> February 20, 1927, New York City, U.S.</p>
                        <p><strong>Died:</strong> August 2, 1986 (aged 59), Bethesda, Maryland, U.S.</p>
                        <p><strong>Occupation:</strong> Lawyer</p>
                        <p><strong>Known for:</strong> Army-McCarthy hearings, legal career, political influence</p>
                    </div>
                </div>

                {/* Section 1*/}
                <section id="section1" className="mb-8">
                    <div id="extrait">
                        <h2 className="text-2xl font-semibold mb-2 text-gray-800">Extraits de textes clés</h2>
                        <p className="text-sm leading-relaxed">
                            Dans cette scène, Roy Cohn affirme que ce qui compte dans la vie, c’est le pouvoir, pas les
                            étiquettes ou les identités. Il rejette violemment l’idée d’être qualifié d’homosexuel parce
                            que, pour lui, être homosexuel signifie être faible, ce qu’il refuse d’accepter. Il dit, par
                            exemple :
                        </p>
                        <blockquote className="text-sm leading-relaxed italic border-l-4 border-gray-300 pl-4 my-4">
                            « Moi, Roy Cohn, je ne suis pas un homosexuel. Les homosexuels n’ont pas de pouvoir. J’ai du
                            pouvoir. Donc je ne suis pas homosexuel. »
                        </blockquote>
                        <p className="text-sm leading-relaxed">
                            Ce passage montre son déni total de qui il est vraiment, mais aussi son obsession du
                            contrôle et du statut.
                        </p>
                    </div>
                    <div
                        id="imageRoy"
                        className="border border-gray-300 p-5 bg-white items-center lg:order-2">
                        <img
                            src="texteCandice.jpg"
                            alt="Roy Cohn"
                            className="w-max h-max object-cover mb-4 border border-gray-300"
                        />
                    </div>
                    <div id="extrait">
                        <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800">Le rôle de Roy Cohn dans la
                            société</h3>
                        <p className="text-sm leading-relaxed">
                            Roy Cohn est souvent décrit comme un “homme de l’ombre” qui utilisait ses relations et sa
                            brutalité pour influencer des décisions politiques et juridiques. Par exemple, un article du
                            New York Times explique qu’il “ne respectait pas les règles habituelles de la loi, mais
                            comptait sur ses amis haut placés et ses méthodes intimidantes.”
                        </p>
                        <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800">McCarthy</h3>
                        <p className="text-sm leading-relaxed">
                            Roy Cohn était un allié très proche de McCarthy pendant les procès anti-communistes des
                            années 1950, connus sous le nom de “chasse aux sorcières”. McCarthy accusait des centaines
                            de personnes d’être des espions communistes, et Roy Cohn jouait un rôle clé en utilisant la
                            loi pour détruire leurs vies.
                        </p>
                    </div>
                </section>

                <section id="section2" className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2 text-gray-800">Recherches personnelles</h2>
                    <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800">Le maccarthysme et la chasse aux
                        sorcières</h3>
                    <p className="text-sm leading-relaxed">
                        Roy Cohn a été un des principaux acteurs de la chasse aux sorcières menée par le sénateur Joseph
                        McCarthy dans les années 1950. À cette époque, des milliers de personnes ont été accusées d’être
                        des espions communistes, souvent sans preuve, et beaucoup ont vu leur carrière ou leur vie
                        détruite. Cohn, en tant qu’avocat principal de McCarthy, était connu pour son agressivité et sa
                        détermination à gagner, peu importe les moyens utilisés.
                    </p>
                    <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800">Son homosexualité cachée et sa
                        séropositivité</h3>
                    <p className="text-sm leading-relaxed">
                        Roy Cohn était un homosexuel qui a toujours refusé de l’avouer, même sur son lit de mort. Il
                        vivait dans un profond déni, car à ses yeux, être homosexuel signifiait être faible et
                        marginalisé. Dans les années 1980, quand il a été diagnostiqué séropositif, il a préféré dire
                        qu’il avait un cancer du foie, refusant d’associer son nom à l’épidémie de SIDA, qu’il méprisait
                        publiquement.
                    </p>
                </section>

                <section id="section3" className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2 text-gray-800">Photographies et inspirations
                        visuelles</h2>
                    <p className="text-sm leading-relaxed">
                        Les photos et visuels sont super importants pour comprendre le monde dans lequel Roy Cohn vivait
                        et pour s’imaginer comment il bougeait, parlait et se comportait. Ça aide à rendre le personnage
                        plus réel, surtout quand on se plonge dans son époque et son environnement.
                    </p>
                    <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800">Roy Cohn en costume-cravate</h3>
                    <p className="text-sm leading-relaxed">
                        Sur presque toutes les photos de Roy Cohn porte un costume-cravate impeccable. Cela montre à
                        quel point il tenait à son image d’homme puissant. Le costume-cravate est un symbole de contrôle
                        et de domination. C’est comme une armure qu’il porte pour cacher ses failles et imposer le
                        respect.
                        Dans le jeu, s’inspirer de cette tenue peut aider à travailler la posture de Roy : il doit avoir
                        l’air droit, sûr de lui, presque intimidant, mais en même temps, on sent que cette image
                        parfaite est une façade. Par exemple, il pourrait jouer avec sa cravate ou serrer les poings
                        pour trahir son stress.
                    </p>
                    <div
                        id="imageRoy"
                        className="border border-gray-300 p-5 bg-white items-center lg:order-2">
                        <img
                            src="royCostume.jpg"
                            alt="Roy Cohn"
                            className="w-max h-max object-cover mb-4 border border-gray-300"
                        />
                    </div>
                    <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800">New York des années 80</h3>
                    <p className="text-sm leading-relaxed">
                        New York dans les années 80, c’est un mélange de richesse et de désespoir. D’un côté, c’est une
                        ville où tout semble possible pour les riches et les puissants, comme Roy. Mais de l’autre,
                        c’est aussi l’époque où l’épidémie de SIDA ravage la communauté gay, une réalité que Roy méprise
                        et rejette, même s’il en fait lui-même partie.
                    </p>
                    <p className="text-sm leading-relaxed">
                        En utilisant ces photos on peut mieux comprendre Roy, par exemple, dans une mise en scène, ses
                        mouvements pourraient être rigides, comme quelqu’un qui veut tout contrôler, mais on pourrait
                        aussi intégrer des gestes plus nerveux pour montrer qu’il cache quelque chose.
                    </p>
                    <div
                        id="imageRoy"
                        className="border border-gray-300 p-5 bg-white items-center lg:order-2">
                        <img
                            src="ville.jpg"
                            alt="Roy Cohn"
                            className="w-max h-max object-cover mb-4 border border-gray-300"
                        />
                    </div>
                </section>

                <section id="section5" className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2 text-gray-800">Répliques essentielles</h2>
                    <p className="text-sm leading-relaxed">
                        Les répliques de Roy Cohn dans <em>Angels in America</em> sont hyper importantes parce
                        qu’elles résument tout ce qu’il est : obsédé par le pouvoir, arrogant, mais aussi
                        complètement terrifié à l’idée de perdre le contrôle. Ces phrases permettent de comprendre
                        comment il est, mais aussi de transmettre son énergie sur scène.
                    </p>
                    <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800">Déni de son homosexualité :</h3>
                    <blockquote className="text-sm leading-relaxed italic border-l-4 border-gray-300 pl-4 my-4">
                        « Moi, j’ai du pouvoir. Donc je ne suis pas homosexuel. »
                    </blockquote>
                    <p className="text-sm leading-relaxed">
                        Cette phrase montre à quel point Roy refuse d’accepter qui il est, parce qu’à ses yeux, être
                        homosexuel, c’est être faible, et il ne peut pas se permettre ça. Il voit son statut social
                        et politique comme un bouclier qui le protège, mais aussi comme une justification pour se
                        mentir à lui-même. C’est une réplique froide et dure, qui doit être dite avec un mépris,
                        presque comme une attaque contre ceux qui l’entourent.
                    </p>
                    <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800">Lutte contre la mort et Ethel
                        Rosenberg :</h3>
                    <blockquote className="text-sm leading-relaxed italic border-l-4 border-gray-300 pl-4 my-4">
                        « Je ne céderai jamais, même pas à toi, Ethel. »
                    </blockquote>
                    <p className="text-sm leading-relaxed">
                        On sent que même en mourant, il refuse de reconnaître ses torts ou de montrer la moindre
                        faiblesse. C’est super tragique, parce qu’il se bat contre un fantôme, littéralement et
                        symboliquement. Cette réplique révèle son orgueil immense, mais aussi sa peur d’être jugé ou
                        oublié.
                    </p>
                </section>

                <section id="section6" className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2 text-gray-800">Partition personnelle annotée</h2>
                    <p className="text-sm leading-relaxed">
                        L’annotation du texte permet de réfléchir à chaque mot, chaque geste, pour être sûr de capturer
                        toute la complexité du personnage. Roy, n’est pas juste un gars méchant qui parle fort, c’est un
                        mélange de contrôle total et de chaos intérieur. Alors, en annotant, on peut décider comment et
                        quand montrer ces deux facettes.
                    </p>
                    <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800">Les gestes et attitudes :</h3>
                    <ul className="text-sm leading-relaxed">
                        <li><strong>Raideur du corps :</strong> Roy est un gars qui veut tout contrôler, même son corps.
                            Alors il doit rester droit, carré... Ses gestes sont précis, presque mécaniques, pour
                            refléter cette idée qu’il ne laisse rien au hasard.
                        </li>
                        <li><strong>Tensions physiques :</strong> Mais cette façade de contrôle craque parfois. Par
                            exemple, quand il parle de la mort ou quand il se dispute avec Ethel, il pourrait se frotter
                            nerveusement les mains, ajuster sans cesse sa cravate, ou serrer les poings. Ces petits
                            détails trahissent ce qu’il ne dit pas.
                        </li>
                    </ul>
                    <p className="text-sm leading-relaxed">
                        Une partition personnelle bien annotée, c’est super utile pour organiser le jeu. Ça permet de ne
                        pas improviser n’importe quoi et de donner du sens à chaque mot ou geste. Roy Cohn est un
                        personnage complexe, alors ces annotations aident à trouver un équilibre. Grâce à ça, le jeu
                        devient plus précis, plus crédible, et surtout plus intense, parce qu’on voit clairement toutes
                        les couches du personnage.
                    </p>
                    <div
                        id="imageRoy"
                        className="border border-gray-300 p-5 bg-white items-center lg:order-2 flex flex-wrap justify-center space-x-4">
                        <img
                            src="text1.jpeg"
                            alt="Roy Cohn"
                            className="object-cover mb-4 border border-gray-300 max-w-full h-auto"
                        />
                        <img
                            src="text3.jpeg"
                            alt="Roy Cohn"
                            className="object-cover mb-4 border border-gray-300 max-w-full h-auto"
                        />
                        <img
                            src="text2.jpeg"
                            alt="Roy Cohn"
                            className="object-cover mb-4 border border-gray-300 max-w-full h-auto"
                        />
                    </div>

                </section>

                <section id="section7" className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2 text-gray-800">Citation centrale dans la loge</h2>
                    <p className="text-sm leading-relaxed">
                        La phrase :
                    </p>
                    <blockquote className="text-sm leading-relaxed italic border-l-4 border-gray-300 pl-4 my-4">
                        « C’est une tragédie américaine : un homme qui a tout sacrifié pour le pouvoir mais qui meurt
                        seul. »
                    </blockquote>
                    <p className="text-sm leading-relaxed">
                        Elle résume tout ce qu’est Roy. C’est pas juste une phrase cool à afficher dans la loge, c’est
                        une sorte de GPS qui nous montre le chemin pour comprendre le personnage. Chaque fois qu’on la
                        relit, elle rappelle ce qui est au cœur de son histoire : un mec qui s’est battu toute sa vie
                        pour être au sommet, mais qui finit isolé, sans personne pour le soutenir.
                    </p>
                    <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800">Pourquoi cette phrase est centrale
                        :</h3>
                    <p className="text-sm leading-relaxed">
                        Roy Cohn, c’est l’exemple parfait du type qui croit que le pouvoir, c’est tout. Il ment, il
                        manipule, il écrase tout le monde, parce qu’il pense que ça va le rendre invincible. Mais au
                        final, ça ne l’empêche pas de tomber malade, de perdre ses proches, et de mourir seul.
                    </p>
                    <p className="text-sm leading-relaxed">
                        Pour le comédien, elle aide à garder l’équilibre entre les deux facettes du personnage :
                    </p>
                    <ul className="text-sm leading-relaxed list-disc pl-6">
                        <li><strong>Le monstre :</strong> L’homme cruel, arrogant, qui ne recule devant rien pour
                            dominer.
                        </li>
                        <li><strong>L’humain :</strong> Le mec terrifié par la faiblesse, qui refuse d’admettre qu’il a
                            besoin des autres.
                        </li>
                    </ul>
                </section>

                <section id="conclusion" className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2 text-gray-800">Conclusion</h2>
                    <p className="text-sm leading-relaxed">
                        Cette démarche complète, qui s’inspire de la méthode de Dominique Blanc, est comme un guide pour
                        vraiment entrer dans la peau de Roy Cohn. Ce personnage, n’est pas juste un méchant classique.
                        C’est un homme rempli de contradictions : puissant, mais brisé ; arrogant, mais terrifié ;
                        monstrueux, mais profondément humain.
                    </p>
                    <p className="text-sm leading-relaxed">
                        En travaillant sur tous les aspects — les répliques, les gestes, la voix, et même son histoire
                        personnelle — on arrive à construire un Roy Cohn qui sonne vrai. Ce n’est pas juste un rôle,
                        c’est une plongée dans une époque où le pouvoir, les apparences, et la peur de la différence
                        dominaient tout. Roy, c’est un gars qui a tout sacrifié pour rester au sommet, mais qui finit
                        seul et détruit.
                    </p>
                    <p className="text-sm leading-relaxed">
                        Avec cette méthode, nous, les comédiens, avons tout ce qu’il faut pour s’approprier le
                        personnage.
                    </p>
                    <p className="text-sm leading-relaxed">
                        Bref, c’est une approche qui pousse à dépasser les clichés pour offrir une vraie performance,
                        marquante et nuancée.
                    </p>
                </section>


            </main>
        </div>
    );
};

export default RoyCohnPage;