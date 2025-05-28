'use client'

import CustomBackground from '@/components/CustomBack';
import FloatingElements from '@/components/FloatingElements';
import { TitleMain } from '@/components/TitleMain';
import React from 'react';

const Datenschutz = () => {
    const pagename = "Datenschutz";

    return (
        <div className="page-fade-in bg-jul-white p-8 relative overflow-hidden" style={{ minHeight: 'calc(100vh - 48px)' }}>

            {/* Asymmetric background shapes */}
            <CustomBackground />

            <div className="lg:tracking-widest lg:pl-20 lg:pr-20 mx-auto relative z-10 mt-20 lg:mt-0">
                <TitleMain title={pagename} />

                <div className="flex flex-col 2xl:flex-row gap-8 mb-8 items-center">

                    <div className="space-y-4">
                        <p className="text-lg leading-relaxed text-zinc-700">
                            Ich freue mich über Ihr Interesse an meiner Internetseite „Eisleker Haus“. Der Schutz Ihrer Privatsphäre ist mir sehr wichtig. In diesen Datenschutzinformationen informiere ich Sie über die wichtigsten Aspekte der Datenverarbeitung im Rahmen meiner Website.
                        </p>

                        <p className="text-lg leading-relaxed text-zinc-700">
                            Bedenken Sie, dass die Datenübertragung im Internet grundsätzlich mit Sicherheitslücken bedacht sein kann. Ein vollumfänglicher Schutz vor dem Zugriff durch Fremde ist nicht realisierbar.
                        </p>

                        <h3 className="text-lg font-semibold text-zinc-700">Verantwortliche</h3>
                        <p className="text-lg leading-relaxed text-zinc-700">
                            Eisleker Haus Sàrl<br />
                            26 an d’Klaus<br />
                            L-9956 Hachiville, Luxembourg<br />
                            Tel.: (+352) 621269956<br />
                            www.eislekerhaus.lu<br />
                            eislekerhaus@gmail.com
                        </p>

                        <h3 className="text-lg font-semibold text-zinc-700">Speicherung von Zugriffsdaten</h3>
                        <p className="text-lg leading-relaxed text-zinc-700">
                            Grundsätzlich können Sie diese Internetseite besuchen ohne Angaben zu Ihrer Person zu machen.
                        </p>

                        <h3 className="text-lg font-semibold text-zinc-700">Kontaktformular</h3>
                        <p className="text-lg leading-relaxed text-zinc-700">
                            Wenn Sie eine Nachricht an unsere Website senden, werden die im Kontaktformular eingegebenen Daten erhoben, um Ihre Anfrage beantworten zu können. Sie werden aufgefordert, Ihren Namen, Ihre E-Mail-Adresse und Ihre Telefonnummer einzugeben. Wir nutzen die Daten ausschließlich zur Beantwortung Ihrer Anfrage und werden entsprechend unserer Datenschutzerklärung vertraulich behandelt.
                        </p>

                        <h3 className="text-lg font-semibold text-zinc-700">Von anderen Websites eingebettete Inhalte</h3>
                        <p className="text-lg leading-relaxed text-zinc-700">
                            Artikel auf dieser Website können eingebettete Inhalte enthalten (z. B. Videos, Bilder, Artikel usw.). Von anderen Websites eingebettete Inhalte verhalten sich genauso, als ob der Besucher diese andere Website besucht hätte. Diese Websites könnten Daten über Sie sammeln, Cookies verwenden, Tracking-Tools von Drittanbietern einbetten und Ihre Interaktionen mit diesen eingebetteten Inhalten verfolgen, wenn Sie über ein mit ihrer Website verbundenes Konto verfügen.
                        </p>

                        <h3 className="text-lg font-semibold text-zinc-700">Auskunft, Löschung, Sperrung</h3>
                        <p className="text-lg leading-relaxed text-zinc-700">
                            Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie jederzeit unter der oben angegebenen Adresse oder per Email an mich wenden.
                        </p>

                        <h3 className="text-lg font-semibold text-zinc-700">Änderungen der Datenschutzerklärung</h3>
                        <p className="text-lg leading-relaxed text-zinc-700">
                            Ich behalte mir vor, die Datenschutzerklärung zu ändern, um sie an geänderte Rechtslagen oder bei Änderungen des Dienstes sowie der Datenverarbeitung anzupassen. Dies gilt jedoch nur im Hinblick auf Erklärungen zur Datenverarbeitung. Sofern Einwilligungen der Nutzer erforderlich sind, oder Bestandteile der Datenschutzerklärung Regelungen des Vertragsverhältnisses mit den Nutzern enthalten, erfolgen die Änderungen nur mit Zustimmung der Nutzer. Die Nutzer werden gebeten sich regelmäßig über den Inhalt der Datenschutzerklärung zu informieren.
                        </p>

                    </div>
                </div>
            </div>

            {/* Floating elements personalizados */}
            <FloatingElements />
        </div>
    );
};

export default Datenschutz;
