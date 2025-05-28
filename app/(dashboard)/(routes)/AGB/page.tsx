'use client'

import CustomBackground from '@/components/CustomBack';
import FloatingElements from '@/components/FloatingElements';
import { TitleMain } from '@/components/TitleMain';
import React from 'react';

const Datenschutz = () => {
    const pagename = "AGB";

    return (
        <div className="page-fade-in bg-jul-white p-8 relative overflow-hidden" style={{ minHeight: 'calc(100vh - 48px)' }}>

            {/* Asymmetric background shapes */}
            <CustomBackground />

            <div className="lg:tracking-widest lg:pl-20 lg:pr-20 mx-auto relative z-10 mt-20 lg:mt-0">
                <TitleMain title={pagename} />

                <div className="flex flex-col 2xl:flex-row gap-8 mb-8 items-center">

                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-zinc-700">Allgemeine Geschäftsbedingungen</h3>
                        <p className="text-lg leading-relaxed text-zinc-700">
                            von Eisleker Haus Sàrl.
                        </p>

                        <h3 className="text-lg font-semibold text-zinc-700">Grundsatz</h3>
                        <p className="text-lg leading-relaxed text-zinc-700">
                            Mit der Annahme eines Angebots von “Eisleker Haus” erklärt sich der Kunde bereit die allgemeinen Geschäftsbedingungen anzuerkennen. Diese allgemeinen Geschäftsbedingungen sind in jedem Fall Vertragsbestandteil und gelten als stillschweigend übernommen, auch wenn der Vertrag nicht über das Internet zustande kommt. Diese AGB sind damit für jede Art des Vertragsabschlusses gültig.
                        </p>

                        <h3 className="text-lg font-semibold text-zinc-700">Geltungsbereich</h3>
                        <p className="text-lg leading-relaxed text-zinc-700">
                            Diese Allgemeinen Geschäftsbedingungen gelten für alle mündlichen Vereinbarungen zwischen dem Kunden und Frau Oswald Julie, als Anbieterin von Beratungen, Begleitungen, Kurse, Workshops, Rituale und allen weiteren Angeboten von Eisleker Haus.
                        </p>

                        <h3 className="text-lg font-semibold text-zinc-700">Preise</h3>
                        <p className="text-lg leading-relaxed text-zinc-700">
                            Für Beratungen, Begleitungen, Kurse, Workshops, Rituale und alle weiteren Angebote gelten die auf der Homepage www.eislekerhaus.lu unter “Preise” aufgeführten Preise oder unter “Anmeldung”.
                        </p>
                        <p className="text-lg leading-relaxed text-zinc-700">
                            Für Beratungen, Begleitungen, Rituale und Events wird die Rechnung über E-mail geschickt und sollte innerhalb von 14 Tagen auf das Konto beglichen werden.
                        </p>
                        <p className="text-lg leading-relaxed text-zinc-700">
                            Gruppenkurse und Gruppenworkshops sind im Voraus per Überweisung auf der Buchungsseite “Kikudoo” zu bezahlen. Der Geldeingang ist gleichzusetzen mit der Anmeldungsbestätigung.
                        </p>
                        <p className="text-lg leading-relaxed text-zinc-700">
                            Versäumte Kursstunden hinten anzuhängen oder nachzuholen ist möglich, können aber nicht nachträglich rückerstattet werden. Für Kursstunden, die durch Frau Oswald Julie abgesagt werden, werden entsprechende Ersatztermine angeboten. Sollte der Ersatztermin nicht wahrgenommen werden, so verfällt der Anspruch auf diese Stunde und eine Rückerstattung der Kursgebühr ist nicht möglich.
                        </p>

                        <h3 className="text-lg font-semibold text-zinc-700">Absagen von Beratungen oder einem anderen Angebot</h3>
                        <p className="text-lg leading-relaxed text-zinc-700">
                            Wird eine Beratung oder ein anderes Angebot mehr als 24 Stunden vor dem Termin abgesagt, erfolgt keine Berechnung des Beratungspreises. Bei Absagen weniger als 24 Stunden vor dem Termin wird der volle Preis berechnet. Bei unentschuldigtem Nichtzustandekommen des Termins wird ebenfalls der volle Preis berechnet.
                        </p>

                        <h3 className="text-lg font-semibold text-zinc-700">Verantwortungsbereich bei einer Beratung / Angebot</h3>
                        <p className="text-lg leading-relaxed text-zinc-700">
                            Die Verantwortung von Frau Oswald Julie liegt ausschließlich in einer fachkundigen, herstellerunabhängigen Beratung und Begleitung. Es liegt ausdrücklich in der Verantwortung des Kunden auf gesundheitliche Probleme oder andere Besonderheiten hinzuweisen, welche für die Beratung und Begleitung relevant sind. Bei akuten Leiden konsultieren Sie den Arzt Ihres Vertrauens.
                        </p>
                        <p className="text-lg leading-relaxed text-zinc-700">
                            Außerdem hängt der Erfolg der Beratung maßgeblich von der Motivation des Kunden ab, das durch die Beratungen von Frau Oswald Julie vermittelte Wissen entsprechend umzusetzen und anzuwenden.
                        </p>

                        <h3 className="text-lg font-semibold text-zinc-700">Haftung</h3>
                        <p className="text-lg leading-relaxed text-zinc-700">
                            Frau Oswald Julie hat weder eine therapeutische noch eine medizinische Funktion. Sie übernimmt keine Verantwortung bzw. Haftung für medizinische Aspekte/Entscheidungen/Diagnosen und deren Folgen. Sie kann dafür weder mittelbar noch unmittelbar haftbar gemacht werden. Die diesbezügliche Verantwortung liegt allein bei den betreuenden Hebammen bzw. Ärzten der jeweiligen Institution.
                        </p>
                        <p className="text-lg leading-relaxed text-zinc-700">
                            Für Verletzungen, Unfälle sowie gesundheitliche Schäden und/oder Folgeschäden während und nach der Beratung oder Begleitung, übernimmt Frau Oswald Julie auch keine Haftung. Gesundheitliche Empfehlungen ersetzen keine individuelle ärztliche Beratung. Für Folgen aus einer fehl- oder uninformierten Umsetzung haftet allein der Verbraucher.
                        </p>

                        <h3 className="text-lg font-semibold text-zinc-700">Urheberrecht</h3>
                        <p className="text-lg leading-relaxed text-zinc-700">
                            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem luxemburgischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                        </p>

                        <h3 className="text-lg font-semibold text-zinc-700">Datenschutz</h3>
                        <p className="text-lg leading-relaxed text-zinc-700">
                            Zur Identifikation des Kunden, zum Kontaktieren des Kunden bei Ausfall, zur Rechnungsausstellung und zum Zusenden der vereinbarten Informationen nach der Beratung oder Begleitung, benötigt Frau Oswald Julie den vollständigen Namen und Adresse, so wie Telefonnummer und Emailadresse des Kunden.
                        </p>
                        <p className="text-lg leading-relaxed text-zinc-700">
                            Medizinische Besonderheiten, Erkrankungen und Behinderungen der Eltern bzw des Babys, sind im Vorfeld mitzuteilen, damit Frau Oswald Julie sich optimal auf die Beratung vorbereiten kann. Alle Informationen werden in einem Notizbuch festgehalten und werden nicht an Dritte weitergegeben. Weitere Details zu meinem Umgang mit Ihren Daten finden Sie in der Rubrik Datenschutz.
                        </p>

                        <h3 className="text-lg font-semibold text-zinc-700">Salvatorische Klausel</h3>
                        <p className="text-lg leading-relaxed text-zinc-700">
                            Sollten einzelne Bestimmungen ganz oder teilweise nichtig sein oder werden, oder sollte der Vertrag eine Lücke enthalten, so bleibt die Gültigkeit der übrigen Bestimmungen hiervon unberührt. Anstelle der unwirksamen oder fehlenden Bestimmungen treten jeweils die jeweiligen gesetzlichen Regelungen.
                        </p>

                        <h3 className="text-lg font-semibold text-zinc-700">Änderung der Allgemeinen Geschäftsbedingungen</h3>
                        <p className="text-lg leading-relaxed text-zinc-700">
                            Frau Oswald Julie kann die Allgemeinen Geschäftsbedingungen jederzeit ändern. Der Kunde willigt ein, über Änderungen der Allgemeinen Geschäftsbedingungen nur per Veröffentlichung über die Homepage www.eislekerhaus.lu oder über die Buchungsseite Kikudoo informiert zu werden.
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
