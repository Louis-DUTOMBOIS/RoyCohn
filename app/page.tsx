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
                    <li><a href="#section4" className="text-blue-600 hover:underline">Tableaux ou œuvres artistiques</a></li>
                    <li><a href="#section5" className="text-blue-600 hover:underline">Répliques essentielles</a></li>
                    <li><a href="#section6" className="text-blue-600 hover:underline">Partition personnelle annotée</a></li>
                    <li><a href="#section7" className="text-blue-600 hover:underline">Citation centrale dans la loge</a></li>
                </ul>
            </nav>

            {/* Main content */}
            <main className={`p-6 transition-all duration-300 ease-in-out ${isSidebarOpen ? 'ml-64' : 'ml-0'} lg:ml-64`}>
                <header className="border-b border-gray-300 pb-4 mb-6">
                    <h1 className="text-4xl font-bold text-gray-800">Roy Marcus Cohn</h1>
                </header>

                {/* Section 1 with Biographical summary */}
                <section id="section1" className="mb-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                        <h2 className="text-2xl font-semibold mb-2 text-gray-800">Extraits de textes clés</h2>
                        <p className="text-sm leading-relaxed">
                            • <strong>Texte original (Tony Kushner, Angels in America):</strong>
                            <br /> Monologue de Roy Cohn sur le pouvoir, la politique et la maladie (Acte I, Scène 9).
                            <br /> Dialogue entre Roy et Ethel Rosenberg, soulignant son humanité et son déni (Acte III, Scène 5).
                            <br />
                            • <strong>Compléments contextuels:</strong>
                            <br /> Discours de Joseph McCarthy : Roy Cohn était son bras droit pendant les procès anti-communistes.
                            <br /> Articles ou citations expliquant le rôle de Cohn dans la politique américaine.
                        </p>
                    </div>
                    <div className="border border-gray-300 p-4 bg-white">
                        <img
                            src="800px-Roy_Cohn.jpg"
                            alt="Roy Cohn"
                            className="w-40 h-40 object-cover mb-4 border border-gray-300"
                        />
                        <div>
                            <p><strong>Born:</strong> February 20, 1927, New York City, U.S.</p>
                            <p><strong>Died:</strong> August 2, 1986 (aged 59), Bethesda, Maryland, U.S.</p>
                            <p><strong>Occupation:</strong> Lawyer</p>
                            <p><strong>Known for:</strong> Army-McCarthy hearings, legal career, political influence</p>
                        </div>
                    </div>
                </section>

                <section id="section2" className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2 text-gray-800">Recherches personnelles</h2>
                    <p className="text-sm leading-relaxed">
                        Plonger dans la vie réelle de Roy Cohn offre un contexte indispensable pour enrichir l’interprétation:
                        <br /> • Le maccarthysme et la chasse aux sorcières : comprendre son rôle dans ce contexte éclaire son attachement au pouvoir et son mépris pour la faiblesse.
                        <br /> • Son homosexualité cachée et sa séropositivité : ces éléments donnent un poids tragique à son déni dans la pièce.
                    </p>
                </section>

                <section id="section3" className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2 text-gray-800">Photographies et inspirations visuelles</h2>
                    <p className="text-sm leading-relaxed">
                        Les images aident à matérialiser l’univers visuel et émotionnel du personnage:
                        <br /> • Roy Cohn en costume-cravate symbolise son rôle d’homme de pouvoir et son attachement aux apparences.
                        <br /> • New York des années 80 évoque l’ambiance oppressante de la société où il évolue, entre privilège et ostracisme.
                    </p>
                </section>

                <section id="section4" className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2 text-gray-800">Tableaux ou œuvres artistiques</h2>
                    <p className="text-sm leading-relaxed">
                        • <strong>Edward Hopper</strong> illustre l’isolement émotionnel de Cohn, qui reste seul malgré son pouvoir.
                        <br /> • <strong>Francis Bacon</strong> capture le côté tourmenté et grotesque de sa personnalité.
                    </p>
                </section>

                <section id="section5" className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2 text-gray-800">Répliques essentielles</h2>
                    <p className="text-sm leading-relaxed">
                        Les répliques sélectionnées condensent les thèmes centraux du personnage:
                        <br /> • « Moi, j’ai du pouvoir. Donc je ne suis pas homosexuel. » Cette phrase est une clé pour comprendre comment Cohn associe son identité à son statut social et politique.
                        <br /> • Lutte contre la mort et Ethel Rosenberg : ces mots montrent que, même mourant, Cohn refuse de céder, incarnant un orgueil tragique.
                    </p>
                </section>

                <section id="section6" className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2 text-gray-800">Partition personnelle annotée</h2>
                    <p className="text-sm leading-relaxed">
                        L’annotation du texte permet de préciser:
                        <br /> • Le rythme et le ton : moments où la voix doit être tranchante ou, au contraire, se briser sous l’émotion.
                        <br /> • Les gestes et attitudes : raideur du corps pour montrer le contrôle, mais aussi tensions physiques qui trahissent sa lutte intérieure.
                    </p>
                </section>

                <section id="section7" className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2 text-gray-800">Citation centrale dans la loge</h2>
                    <p className="text-sm leading-relaxed">
                        La phrase « C’est une tragédie américaine : un homme qui a tout sacrifié pour le pouvoir mais qui meurt seul » résume parfaitement le destin de Cohn.
                    </p>
                </section>
            </main>
        </div>
    );
};

export default RoyCohnPage;