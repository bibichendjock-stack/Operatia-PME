export const AGENTS_DATA = [
	{
		id: "support",
		title: "Agent Service Client & FAQ 24/7",
		tagline: "Réponse instantanée omnicanale et escalade humaine intelligente",
		description: "Prend en charge 70% à 80% des demandes répétitives (horaires, tarifs de base, suivi de commande, délais de livraison) sur WhatsApp, Webchat et Email sans surcharger votre équipe.",
		badge: "Support & SAV",
		iconName: "MessageSquareText",
		color: "emerald",
		noCodeTools: [
			{
				name: "WhatsApp Business API / Crisp",
				role: "Canal de messagerie entrant",
				category: "trigger"
			},
			{
				name: "Make.com ou n8n",
				role: "Routeur de scénario automatisé",
				category: "trigger"
			},
			{
				name: "Gemini 2.5 Flash / LLM",
				role: "Compréhension du langage et réponse",
				category: "ai"
			},
			{
				name: "Notion / Airtable",
				role: "Base de connaissances de la PME",
				category: "database"
			},
			{
				name: "Slack / SMS Twilio",
				role: "Alerte d’escalade pour cas complexes",
				category: "action"
			}
		],
		capabilities: [
			"Réponses instantanées 24h/24 y compris le week-end et jours fériés",
			"Accès dynamique aux stocks, tarifs et FAQ stockés sur Notion/Airtable",
			"Détection automatique de l’urgence ou de l’insatisfaction client",
			"Escalade immédiate avec fiche récapitulative transmise au responsable sur WhatsApp/Slack",
			"Maintien d’un ton courtois et personnalisé à l’image de marque de la PME"
		],
		systemPrompt: `Tu es l'assistant de service client officiel de l'entreprise.
Ton objectif :
1. Accueillir chaleureusement le client en français professionnel et bienveillant.
2. Répondre avec précision aux questions sur les horaires, les prestations, les tarifs indicatifs et le suivi de commande.
3. Si le client exprime une urgence technique, une panne ou un mécontentement grave, exécute l'outil "EscalateToManager" avec un résumé concis et rassure le client en lui indiquant qu'un conseiller le rappelle sous 30 minutes.
4. Reste toujours synthétique (3 à 5 phrases maximum), clair et direct.`,
		roiMetric: "8h / semaine économisées par chargé de clientèle",
		avgSetupTime: "2h de configuration no-code",
		sampleScenarios: [
			{
				id: "sup_1",
				label: "Demande d’horaires & devis dépannage",
				userMessage: "Bonjour, vos bureaux sont ouverts jusqu’à quelle heure ce soir ? Est-ce que vous faites des interventions en urgence pour une fuite d’eau ?",
				expectedOutcome: "Fournit les horaires d’ouverture (8h-18h), confirme la disponibilité d’astreinte pour fuite d’eau et propose un contact immédiat."
			},
			{
				id: "sup_2",
				label: "Suivi de commande & retard",
				userMessage: "Bonjour, je n’ai toujours pas reçu ma commande #CMD-8492 passée mardi dernier. Pouvez-vous vérifier où elle en est svp ?",
				expectedOutcome: "Interroge la base de données de commande, identifie l’expédition Chronopost et rassure le client avec le numéro de suivi."
			},
			{
				id: "sup_3",
				label: "Client insatisfait avec demande d’escalade",
				userMessage: "C’est inadmissible, votre technicien ne s’est pas présenté au créneau convenu ce matin et j’ai posé ma demi-journée pour rien !",
				expectedOutcome: "Formule des excuses sincères et professionnelles, déclenche immédiatement une alerte Slack prioritaire au responsable d’agence avec la fiche client."
			}
		]
	},
	{
		id: "invoicing",
		title: "Agent Facturation & Relances d’Impayés",
		tagline: "Récupération de trésorerie diplomatique et génération automatique de devis",
		description: "Surveille automatiquement les échéances dans Pennylane ou Stripe, génère les factures d’acomptes et orchestre des relances graduées (amiable, rappel ferme, mise en demeure).",
		badge: "Finance & Trésorerie",
		iconName: "Receipt",
		color: "amber",
		noCodeTools: [
			{
				name: "Pennylane / Stripe / QuickBooks",
				role: "Logiciel de facturation et comptabilité",
				category: "trigger"
			},
			{
				name: "Make.com",
				role: "Cron quotidien de vérification des retards",
				category: "trigger"
			},
			{
				name: "Gemini 2.5 Flash",
				role: "Rédaction personnalisée et diplomatique",
				category: "ai"
			},
			{
				name: "Airtable / Google Sheets",
				role: "Journal des relances et statuts",
				category: "database"
			},
			{
				name: "Gmail / WhatsApp Cloud API",
				role: "Envoi du rappel avec lien de paiement",
				category: "action"
			}
		],
		capabilities: [
			"Synchronisation quotidienne avec Pennylane, Stripe ou QuickBooks",
			"Scénario de relance à 3 paliers : J+3 (Rappel courtois), J+14 (Relance formelle), J+30 (Mise en demeure)",
			"Intégration d’un lien direct de paiement par carte ou virement instantané dans chaque message",
			"Génération automatique de factures d’acompte dès acceptation d’un devis dans le CRM",
			"Tableau de bord de trésorerie mis à jour en temps réel sans saisie manuelle"
		],
		systemPrompt: `Tu es l'agent responsable du suivi de facturation et du recouvrement pour la PME.
Ton rôle :
1. Identifier la facture concernée, son montant TTC et le nombre de jours de retard.
2. Adapter le ton avec précision selon le palier :
   - Palier 1 (J+3 à J+7) : Bienveillant et courtois, suppose un simple oubli administratif.
   - Palier 2 (J+8 à J+21) : Professionnel et ferme, rappelle l'échéance contractuelle et fournit le lien de paiement direct.
   - Palier 3 (J+22 et plus) : Formel, signale les pénalités de retard légales et l'éventuelle suspension des prestations.
3. Proposer si besoin un étalement en 2 versements si le client signale une difficulté temporaire de trésorerie.`,
		roiMetric: "+42% de factures réglées avant J+15",
		avgSetupTime: "3h de configuration no-code",
		sampleScenarios: [
			{
				id: "inv_1",
				label: "Relance courtoise J+5 (Palier 1)",
				userMessage: "Relancer le client SARL Novaburo pour la facture F2024-118 de 1 450,00 € TTC échue depuis 5 jours.",
				expectedOutcome: "Génère un email courtois rappelant le numéro de facture, joignant le duplicata et le lien de paiement rapide."
			},
			{
				id: "inv_2",
				label: "Client demandant un délai de paiement",
				userMessage: "Bonjour, nous avons bien reçu votre relance pour la facture F2024-092 de 3 200 €. Nous avons un décalage de trésorerie ce mois-ci, est-il possible de payer en 2 fois ?",
				expectedOutcome: "Accueille la demande avec empathie professionnelle, formalise un échéancier (50% immédiat, 50% à 30 jours) et met à jour le statut dans l’outil comptable."
			},
			{
				id: "inv_3",
				label: "Création d’un devis / facture d’acompte",
				userMessage: "Le prospect Atelier Vert a validé notre proposition pour l’audit énergétique à 2 400 € HT. Prépare la facture d’acompte de 30% svp.",
				expectedOutcome: "Calcule l’acompte (720 € HT / 864 € TTC), génère le brouillon sur le logiciel de facturation et prépare l’email de confirmation."
			}
		]
	},
	{
		id: "scheduling",
		title: "Agent Prise de Rendez-Vous & Qualification",
		tagline: "Agendas remplis sans friction avec pré-qualification et rappels anti no-show",
		description: "Échange naturellement avec les prospects pour qualifier leur projet (budget, délai, localisation) et cale le rendez-vous directement dans Google Calendar ou Calendly.",
		badge: "Agenda & Qualification",
		iconName: "CalendarClock",
		color: "blue",
		noCodeTools: [
			{
				name: "Formulaire Web / WhatsApp",
				role: "Point de contact initial du client",
				category: "trigger"
			},
			{
				name: "Make.com",
				role: "Vérification des disponibilités",
				category: "trigger"
			},
			{
				name: "Gemini 2.5 Flash",
				role: "Agent conversationnel de qualification",
				category: "ai"
			},
			{
				name: "Google Calendar / Cal.com",
				role: "Synchronisation de l’agenda en temps réel",
				category: "action"
			},
			{
				name: "Twilio SMS",
				role: "Rappel 24h et 2h avant pour zéro no-show",
				category: "action"
			}
		],
		capabilities: [
			"Dialogue fluide pour trouver le créneau idéal en évitant les allers-retours d’emails",
			"Questions de qualification personnalisées (type de projet, enveloppe budgétaire, urgence)",
			"Réservation instantanée avec blocage automatique du temps de trajet pour les artisans",
			"Envoi automatique de SMS de confirmation et rappel avec lien de modification/annulation",
			"Synchronisation bidirectionnelle avec les agendas de toute l’équipe"
		],
		systemPrompt: `Tu es l'assistant de planification et de qualification de rendez-vous de l'entreprise.
Tes missions :
1. Demander poliment au client son prénom, nom, téléphone et l'objet précis du rendez-vous.
2. Poser 2 questions clés de pré-qualification :
   - Quelle est la nature de votre projet et l'échéance souhaitée ?
   - Disposez-vous d'une estimation budgétaire ?
3. Proposer 2 ou 3 créneaux disponibles précis parmi ceux de l'agenda partagé (ex : Mardi 14h30 ou Jeudi 10h00).
4. Dès accord, réserver le rendez-vous, récapituler l'adresse ou le lien de visio, et programmer le SMS de rappel.`,
		roiMetric: "-65% de taux d’absentéisme (no-show)",
		avgSetupTime: "1h30 de configuration no-code",
		sampleScenarios: [
			{
				id: "sch_1",
				label: "Prise de rendez-vous pour devis travaux",
				userMessage: "Bonjour, je souhaite un devis pour la réfection électrique de mon appartement de 70m² à Lyon. Êtes-vous disponible cette semaine ?",
				expectedOutcome: "Qualifie l’adresse, le délai et propose deux créneaux de visite technique (Jeudi 14h ou Vendredi 10h)."
			},
			{
				id: "sch_2",
				label: "Report de rendez-vous de dernière minute",
				userMessage: "Bonjour, j’avais rdv demain à 11h mais j’ai un empêchement professionnel. Peut-on décaler à vendredi après-midi ?",
				expectedOutcome: "Annule l’ancien créneau, vérifie les créneaux libres de vendredi après-midi, réserve à 15h30 et envoie la confirmation mise à jour."
			},
			{
				id: "sch_3",
				label: "Qualification prospect B2B pour audit",
				userMessage: "Bonjour, nous sommes une PME de 15 salariés et nous voulons auditer nos process logistiques. Quels sont vos tarifs et disponibilités ?",
				expectedOutcome: "Demande les spécificités de l’activité, positionne un premier appel de cadrage gratuit de 30 min avec le directeur associé."
			}
		]
	},
	{
		id: "lead_followup",
		title: "Agent Suivi de Prospects & Lead Nurturing",
		tagline: "Réponse en moins de 2 minutes aux leads entrants et relances personnalisées",
		description: "Transforme chaque visiteur de formulaire en opportunité qualifiée. Scoré et relancé automatiquement selon son niveau d’intérêt sans laisser aucun devis sans suite.",
		badge: "Vente & Croissance",
		iconName: "UserCheck",
		color: "violet",
		noCodeTools: [
			{
				name: "Typeform / Tally / Formulaire Web",
				role: "Capture des coordonnées du prospect",
				category: "trigger"
			},
			{
				name: "Make.com",
				role: "Déclenchement immédiat du scénario",
				category: "trigger"
			},
			{
				name: "Gemini 2.5 Flash",
				role: "Scoring du prospect et personnalisation de l’email",
				category: "ai"
			},
			{
				name: "HubSpot / Pipedrive / Notion",
				role: "Création de la fiche opportunité CRM",
				category: "database"
			},
			{
				name: "Lemlist / WhatsApp / Slack",
				role: "Séquence de relance commerciale cadencée",
				category: "action"
			}
		],
		capabilities: [
			"Réactivité ultra-rapide (< 2 minutes après soumission d’un formulaire)",
			"Scoring automatique des leads : Chaud (action commerciale immédiate), Tiède (nurturing), Froid",
			"Relance cadencée des devis envoyés restés sans réponse (J+3, J+7, J+14)",
			"Partage automatique d’études de cas et de références clients similaires au secteur du prospect",
			"Notification instantanée sur le mobile du commercial dès qu’un devis est consulté"
		],
		systemPrompt: `Tu es l'agent d'acquisition et de suivi commercial de la PME.
Tes règles de conduite :
1. Analyser immédiatement la demande entrante pour déterminer le Lead Score (Chaud, Tiède, Froid).
2. Si le prospect a un projet concret avec budget validé (Lead Chaud) : envoyer un message personnalisé valorisant une référence similaire et proposer un appel de découverte sous 24h.
3. Si un devis a été envoyé il y a quelques jours sans retour : formuler une relance bienveillante demandant si le prospect a des questions techniques ou besoin d'ajustements.
4. Enregistrer systématiquement les intentions clés dans le CRM pour que le commercial ait l'historique complet.`,
		roiMetric: "+28% de taux de signature de devis",
		avgSetupTime: "2h30 de configuration no-code",
		sampleScenarios: [
			{
				id: "lead_1",
				label: "Nouveau lead entrant sur site web",
				userMessage: "Formulaire reçu : Thomas Martin, Gérant de Transport 69. \"Nous cherchons à équiper nos 12 véhicules d’un logiciel de suivi. Budget validé, mise en place sous 1 mois.\"",
				expectedOutcome: "Attribue un score de 95/100 (Lead Chaud), crée la fiche sur le CRM et rédige un message d’engagement ultra-personnalisé mentionnant un client transporteur."
			},
			{
				id: "lead_2",
				label: "Relance d’un devis sans réponse à J+4",
				userMessage: "Le devis #DEV-2024-401 de 4 800 € pour la Menuiserie Dubois a été envoyé lundi dernier. Aucune réponse reçue à ce jour.",
				expectedOutcome: "Prépare une relance élégante proposant de clarifier les options techniques du devis sans exercer de pression agressive."
			},
			{
				id: "lead_3",
				label: "Réactivation d’un ancien prospect tiède",
				userMessage: "Le client potentiel Cabinet Roche avait ajourné son projet d’installation informatique en septembre faute de budget. Comment le relancer en novembre ?",
				expectedOutcome: "Propose une prise de nouvelles courtoise avec mention d’une nouvelle offre ou aide de transition adaptée à leur taille."
			}
		]
	}
];
export const SECTOR_PRESETS = {
	btp: {
		label: "Artisans & BTP (Rénovation, Électricité, Plomberie)",
		companyName: "BâtiRénov Services",
		defaultKnowledge: "Tarifs horaires : 65€/h HT. Déplacement : 45€ (agglomération). Devis gratuit sous 48h. Urgences dépannage assurées le samedi matin."
	},
	agency: {
		label: "Agences & Cabinets de Conseil",
		companyName: "Aura Conseil & Stratégie",
		defaultKnowledge: "Prestations : Conseil RH, stratégie digitale, audit organisationnel. Taux journalier moyen : 850€ HT. Premier diagnostic offert de 30 minutes."
	},
	health: {
		label: "Professions Libérales & Médical / Paramédical",
		companyName: "Cabinet Kiné Santé Libellule",
		defaultKnowledge: "Séances sur ordonnance conventionnées Secteur 1. Bilan initial : 45 minutes. Règlements par CB et chèques acceptés. Téléconsultation possible."
	},
	commerce: {
		label: "Commerces Locaux & E-commerce",
		companyName: "Maison Déco & Terroir",
		defaultKnowledge: "Livraison offerte dès 60€ d’achat. Délais : 48h en France métropolitaine. Retours gratuits sous 14 jours en boutique ou par relais."
	},
	services: {
		label: "Services aux Entreprises & Nettoyage / Sécurité",
		companyName: "NetPro Entreprises",
		defaultKnowledge: "Contrats récurrents d’entretien de bureaux. Produits écolabellisés. Interventions 7j/7 avant 8h ou après 19h pour ne pas gêner les collaborateurs."
	}
};

//# sourceMappingURL=data:application/json;base64,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QUFhO0dBQ1g7SUFBRSxNQUFNO0lBQXFDLE1BQU07SUFBdUMsVUFBVTtHQUFVO0dBQzlHO0lBQUUsTUFBTTtJQUFZLE1BQU07SUFBc0MsVUFBVTtHQUFVO0dBQ3BGO0lBQUUsTUFBTTtJQUFvQixNQUFNO0lBQXNELFVBQVU7R0FBSztHQUN2RztJQUFFLE1BQU07SUFBZ0MsTUFBTTtJQUF3QyxVQUFVO0dBQVc7R0FDM0c7SUFBRSxNQUFNO0lBQThCLE1BQU07SUFBNEMsVUFBVTtHQUFTO0VBQzdHO0VBQ0EsY0FBYztHQUNaO0dBQ0E7R0FDQTtHQUNBO0dBQ0E7RUFDRjtFQUNBLGNBQWM7Ozs7OztFQU1kLFdBQVc7RUFDWCxjQUFjO0VBQ2QsaUJBQWlCO0dBQ2Y7SUFDRSxJQUFJO0lBQ0osT0FBTztJQUNQLGFBQWE7SUFDYixpQkFBaUI7R0FDbkI7R0FDQTtJQUNFLElBQUk7SUFDSixPQUFPO0lBQ1AsYUFBYTtJQUNiLGlCQUFpQjtHQUNuQjtHQUNBO0lBQ0UsSUFBSTtJQUNKLE9BQU87SUFDUCxhQUFhO0lBQ2IsaUJBQWlCO0dBQ25CO0VBQ0Y7Q0FDRjtBQUNGO0FBRUEsT0FBTyxNQUFNLGlCQUFtRztDQUM5RyxLQUFLO0VBQ0gsT0FBTztFQUNQLGFBQWE7RUFDYixrQkFBa0I7Q0FDcEI7Q0FDQSxRQUFRO0VBQ04sT0FBTztFQUNQLGFBQWE7RUFDYixrQkFBa0I7Q0FDcEI7Q0FDQSxRQUFRO0VBQ04sT0FBTztFQUNQLGFBQWE7RUFDYixrQkFBa0I7Q0FDcEI7Q0FDQSxVQUFVO0VBQ1IsT0FBTztFQUNQLGFBQWE7RUFDYixrQkFBa0I7Q0FDcEI7Q0FDQSxVQUFVO0VBQ1IsT0FBTztFQUNQLGFBQWE7RUFDYixrQkFBa0I7Q0FDcEI7QUFDRiIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJhZ2VudHNEYXRhLnRzIl0sInZlcnNpb24iOjMsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZW50RGVmaW5pdGlvbiB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IEFHRU5UU19EQVRBOiBBZ2VudERlZmluaXRpb25bXSA9IFtcbiAge1xuICAgIGlkOiAnc3VwcG9ydCcsXG4gICAgdGl0bGU6ICdBZ2VudCBTZXJ2aWNlIENsaWVudCAmIEZBUSAyNC83JyxcbiAgICB0YWdsaW5lOiAnUsOpcG9uc2UgaW5zdGFudGFuw6llIG9tbmljYW5hbGUgZXQgZXNjYWxhZGUgaHVtYWluZSBpbnRlbGxpZ2VudGUnLFxuICAgIGRlc2NyaXB0aW9uOiAnUHJlbmQgZW4gY2hhcmdlIDcwJSDDoCA4MCUgZGVzIGRlbWFuZGVzIHLDqXDDqXRpdGl2ZXMgKGhvcmFpcmVzLCB0YXJpZnMgZGUgYmFzZSwgc3VpdmkgZGUgY29tbWFuZGUsIGTDqWxhaXMgZGUgbGl2cmFpc29uKSBzdXIgV2hhdHNBcHAsIFdlYmNoYXQgZXQgRW1haWwgc2FucyBzdXJjaGFyZ2VyIHZvdHJlIMOpcXVpcGUuJyxcbiAgICBiYWRnZTogJ1N1cHBvcnQgJiBTQVYnLFxuICAgIGljb25OYW1lOiAnTWVzc2FnZVNxdWFyZVRleHQnLFxuICAgIGNvbG9yOiAnZW1lcmFsZCcsXG4gICAgbm9Db2RlVG9vbHM6IFtcbiAgICAgIHsgbmFtZTogJ1doYXRzQXBwIEJ1c2luZXNzIEFQSSAvIENyaXNwJywgcm9sZTogJ0NhbmFsIGRlIG1lc3NhZ2VyaWUgZW50cmFudCcsIGNhdGVnb3J5OiAndHJpZ2dlcicgfSxcbiAgICAgIHsgbmFtZTogJ01ha2UuY29tIG91IG44bicsIHJvbGU6ICdSb3V0ZXVyIGRlIHNjw6luYXJpbyBhdXRvbWF0aXPDqScsIGNhdGVnb3J5OiAndHJpZ2dlcicgfSxcbiAgICAgIHsgbmFtZTogJ0dlbWluaSAyLjUgRmxhc2ggLyBMTE0nLCByb2xlOiAnQ29tcHLDqWhlbnNpb24gZHUgbGFuZ2FnZSBldCByw6lwb25zZScsIGNhdGVnb3J5OiAnYWknIH0sXG4gICAgICB7IG5hbWU6ICdOb3Rpb24gLyBBaXJ0YWJsZScsIHJvbGU6ICdCYXNlIGRlIGNvbm5haXNzYW5jZXMgZGUgbGEgUE1FJywgY2F0ZWdvcnk6ICdkYXRhYmFzZScgfSxcbiAgICAgIHsgbmFtZTogJ1NsYWNrIC8gU01TIFR3aWxpbycsIHJvbGU6ICdBbGVydGUgZOKAmWVzY2FsYWRlIHBvdXIgY2FzIGNvbXBsZXhlcycsIGNhdGVnb3J5OiAnYWN0aW9uJyB9XG4gICAgXSxcbiAgICBjYXBhYmlsaXRpZXM6IFtcbiAgICAgICdSw6lwb25zZXMgaW5zdGFudGFuw6llcyAyNGgvMjQgeSBjb21wcmlzIGxlIHdlZWstZW5kIGV0IGpvdXJzIGbDqXJpw6lzJyxcbiAgICAgICdBY2PDqHMgZHluYW1pcXVlIGF1eCBzdG9ja3MsIHRhcmlmcyBldCBGQVEgc3RvY2vDqXMgc3VyIE5vdGlvbi9BaXJ0YWJsZScsXG4gICAgICAnRMOpdGVjdGlvbiBhdXRvbWF0aXF1ZSBkZSBs4oCZdXJnZW5jZSBvdSBkZSBs4oCZaW5zYXRpc2ZhY3Rpb24gY2xpZW50JyxcbiAgICAgICdFc2NhbGFkZSBpbW3DqWRpYXRlIGF2ZWMgZmljaGUgcsOpY2FwaXR1bGF0aXZlIHRyYW5zbWlzZSBhdSByZXNwb25zYWJsZSBzdXIgV2hhdHNBcHAvU2xhY2snLFxuICAgICAgJ01haW50aWVuIGTigJl1biB0b24gY291cnRvaXMgZXQgcGVyc29ubmFsaXPDqSDDoCBs4oCZaW1hZ2UgZGUgbWFycXVlIGRlIGxhIFBNRSdcbiAgICBdLFxuICAgIHN5c3RlbVByb21wdDogYFR1IGVzIGwnYXNzaXN0YW50IGRlIHNlcnZpY2UgY2xpZW50IG9mZmljaWVsIGRlIGwnZW50cmVwcmlzZS5cblRvbiBvYmplY3RpZiA6XG4xLiBBY2N1ZWlsbGlyIGNoYWxldXJldXNlbWVudCBsZSBjbGllbnQgZW4gZnJhbsOnYWlzIHByb2Zlc3Npb25uZWwgZXQgYmllbnZlaWxsYW50LlxuMi4gUsOpcG9uZHJlIGF2ZWMgcHLDqWNpc2lvbiBhdXggcXVlc3Rpb25zIHN1ciBsZXMgaG9yYWlyZXMsIGxlcyBwcmVzdGF0aW9ucywgbGVzIHRhcmlmcyBpbmRpY2F0aWZzIGV0IGxlIHN1aXZpIGRlIGNvbW1hbmRlLlxuMy4gU2kgbGUgY2xpZW50IGV4cHJpbWUgdW5lIHVyZ2VuY2UgdGVjaG5pcXVlLCB1bmUgcGFubmUgb3UgdW4gbcOpY29udGVudGVtZW50IGdyYXZlLCBleMOpY3V0ZSBsJ291dGlsIFwiRXNjYWxhdGVUb01hbmFnZXJcIiBhdmVjIHVuIHLDqXN1bcOpIGNvbmNpcyBldCByYXNzdXJlIGxlIGNsaWVudCBlbiBsdWkgaW5kaXF1YW50IHF1J3VuIGNvbnNlaWxsZXIgbGUgcmFwcGVsbGUgc291cyAzMCBtaW51dGVzLlxuNC4gUmVzdGUgdG91am91cnMgc3ludGjDqXRpcXVlICgzIMOgIDUgcGhyYXNlcyBtYXhpbXVtKSwgY2xhaXIgZXQgZGlyZWN0LmAsXG4gICAgcm9pTWV0cmljOiAnOGggLyBzZW1haW5lIMOpY29ub21pc8OpZXMgcGFyIGNoYXJnw6kgZGUgY2xpZW50w6hsZScsXG4gICAgYXZnU2V0dXBUaW1lOiAnMmggZGUgY29uZmlndXJhdGlvbiBuby1jb2RlJyxcbiAgICBzYW1wbGVTY2VuYXJpb3M6IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6ICdzdXBfMScsXG4gICAgICAgIGxhYmVsOiAnRGVtYW5kZSBk4oCZaG9yYWlyZXMgJiBkZXZpcyBkw6lwYW5uYWdlJyxcbiAgICAgICAgdXNlck1lc3NhZ2U6ICdCb25qb3VyLCB2b3MgYnVyZWF1eCBzb250IG91dmVydHMganVzcXXigJnDoCBxdWVsbGUgaGV1cmUgY2Ugc29pciA/IEVzdC1jZSBxdWUgdm91cyBmYWl0ZXMgZGVzIGludGVydmVudGlvbnMgZW4gdXJnZW5jZSBwb3VyIHVuZSBmdWl0ZSBk4oCZZWF1ID8nLFxuICAgICAgICBleHBlY3RlZE91dGNvbWU6ICdGb3Vybml0IGxlcyBob3JhaXJlcyBk4oCZb3V2ZXJ0dXJlICg4aC0xOGgpLCBjb25maXJtZSBsYSBkaXNwb25pYmlsaXTDqSBk4oCZYXN0cmVpbnRlIHBvdXIgZnVpdGUgZOKAmWVhdSBldCBwcm9wb3NlIHVuIGNvbnRhY3QgaW1tw6lkaWF0LidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAnc3VwXzInLFxuICAgICAgICBsYWJlbDogJ1N1aXZpIGRlIGNvbW1hbmRlICYgcmV0YXJkJyxcbiAgICAgICAgdXNlck1lc3NhZ2U6ICdCb25qb3VyLCBqZSBu4oCZYWkgdG91am91cnMgcGFzIHJlw6d1IG1hIGNvbW1hbmRlICNDTUQtODQ5MiBwYXNzw6llIG1hcmRpIGRlcm5pZXIuIFBvdXZlei12b3VzIHbDqXJpZmllciBvw7kgZWxsZSBlbiBlc3Qgc3ZwID8nLFxuICAgICAgICBleHBlY3RlZE91dGNvbWU6ICdJbnRlcnJvZ2UgbGEgYmFzZSBkZSBkb25uw6llcyBkZSBjb21tYW5kZSwgaWRlbnRpZmllIGzigJlleHDDqWRpdGlvbiBDaHJvbm9wb3N0IGV0IHJhc3N1cmUgbGUgY2xpZW50IGF2ZWMgbGUgbnVtw6lybyBkZSBzdWl2aS4nXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogJ3N1cF8zJyxcbiAgICAgICAgbGFiZWw6ICdDbGllbnQgaW5zYXRpc2ZhaXQgYXZlYyBkZW1hbmRlIGTigJllc2NhbGFkZScsXG4gICAgICAgIHVzZXJNZXNzYWdlOiAnQ+KAmWVzdCBpbmFkbWlzc2libGUsIHZvdHJlIHRlY2huaWNpZW4gbmUgc+KAmWVzdCBwYXMgcHLDqXNlbnTDqSBhdSBjcsOpbmVhdSBjb252ZW51IGNlIG1hdGluIGV0IGrigJlhaSBwb3PDqSBtYSBkZW1pLWpvdXJuw6llIHBvdXIgcmllbiAhJyxcbiAgICAgICAgZXhwZWN0ZWRPdXRjb21lOiAnRm9ybXVsZSBkZXMgZXhjdXNlcyBzaW5jw6hyZXMgZXQgcHJvZmVzc2lvbm5lbGxlcywgZMOpY2xlbmNoZSBpbW3DqWRpYXRlbWVudCB1bmUgYWxlcnRlIFNsYWNrIHByaW9yaXRhaXJlIGF1IHJlc3BvbnNhYmxlIGTigJlhZ2VuY2UgYXZlYyBsYSBmaWNoZSBjbGllbnQuJ1xuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGlkOiAnaW52b2ljaW5nJyxcbiAgICB0aXRsZTogJ0FnZW50IEZhY3R1cmF0aW9uICYgUmVsYW5jZXMgZOKAmUltcGF5w6lzJyxcbiAgICB0YWdsaW5lOiAnUsOpY3Vww6lyYXRpb24gZGUgdHLDqXNvcmVyaWUgZGlwbG9tYXRpcXVlIGV0IGfDqW7DqXJhdGlvbiBhdXRvbWF0aXF1ZSBkZSBkZXZpcycsXG4gICAgZGVzY3JpcHRpb246ICdTdXJ2ZWlsbGUgYXV0b21hdGlxdWVtZW50IGxlcyDDqWNow6lhbmNlcyBkYW5zIFBlbm55bGFuZSBvdSBTdHJpcGUsIGfDqW7DqHJlIGxlcyBmYWN0dXJlcyBk4oCZYWNvbXB0ZXMgZXQgb3JjaGVzdHJlIGRlcyByZWxhbmNlcyBncmFkdcOpZXMgKGFtaWFibGUsIHJhcHBlbCBmZXJtZSwgbWlzZSBlbiBkZW1ldXJlKS4nLFxuICAgIGJhZGdlOiAnRmluYW5jZSAmIFRyw6lzb3JlcmllJyxcbiAgICBpY29uTmFtZTogJ1JlY2VpcHQnLFxuICAgIGNvbG9yOiAnYW1iZXInLFxuICAgIG5vQ29kZVRvb2xzOiBbXG4gICAgICB7IG5hbWU6ICdQZW5ueWxhbmUgLyBTdHJpcGUgLyBRdWlja0Jvb2tzJywgcm9sZTogJ0xvZ2ljaWVsIGRlIGZhY3R1cmF0aW9uIGV0IGNvbXB0YWJpbGl0w6knLCBjYXRlZ29yeTogJ3RyaWdnZXInIH0sXG4gICAgICB7IG5hbWU6ICdNYWtlLmNvbScsIHJvbGU6ICdDcm9uIHF1b3RpZGllbiBkZSB2w6lyaWZpY2F0aW9uIGRlcyByZXRhcmRzJywgY2F0ZWdvcnk6ICd0cmlnZ2VyJyB9LFxuICAgICAgeyBuYW1lOiAnR2VtaW5pIDIuNSBGbGFzaCcsIHJvbGU6ICdSw6lkYWN0aW9uIHBlcnNvbm5hbGlzw6llIGV0IGRpcGxvbWF0aXF1ZScsIGNhdGVnb3J5OiAnYWknIH0sXG4gICAgICB7IG5hbWU6ICdBaXJ0YWJsZSAvIEdvb2dsZSBTaGVldHMnLCByb2xlOiAnSm91cm5hbCBkZXMgcmVsYW5jZXMgZXQgc3RhdHV0cycsIGNhdGVnb3J5OiAnZGF0YWJhc2UnIH0sXG4gICAgICB7IG5hbWU6ICdHbWFpbCAvIFdoYXRzQXBwIENsb3VkIEFQSScsIHJvbGU6ICdFbnZvaSBkdSByYXBwZWwgYXZlYyBsaWVuIGRlIHBhaWVtZW50JywgY2F0ZWdvcnk6ICdhY3Rpb24nIH1cbiAgICBdLFxuICAgIGNhcGFiaWxpdGllczogW1xuICAgICAgJ1N5bmNocm9uaXNhdGlvbiBxdW90aWRpZW5uZSBhdmVjIFBlbm55bGFuZSwgU3RyaXBlIG91IFF1aWNrQm9va3MnLFxuICAgICAgJ1Njw6luYXJpbyBkZSByZWxhbmNlIMOgIDMgcGFsaWVycyA6IEorMyAoUmFwcGVsIGNvdXJ0b2lzKSwgSisxNCAoUmVsYW5jZSBmb3JtZWxsZSksIEorMzAgKE1pc2UgZW4gZGVtZXVyZSknLFxuICAgICAgJ0ludMOpZ3JhdGlvbiBk4oCZdW4gbGllbiBkaXJlY3QgZGUgcGFpZW1lbnQgcGFyIGNhcnRlIG91IHZpcmVtZW50IGluc3RhbnRhbsOpIGRhbnMgY2hhcXVlIG1lc3NhZ2UnLFxuICAgICAgJ0fDqW7DqXJhdGlvbiBhdXRvbWF0aXF1ZSBkZSBmYWN0dXJlcyBk4oCZYWNvbXB0ZSBkw6hzIGFjY2VwdGF0aW9uIGTigJl1biBkZXZpcyBkYW5zIGxlIENSTScsXG4gICAgICAnVGFibGVhdSBkZSBib3JkIGRlIHRyw6lzb3JlcmllIG1pcyDDoCBqb3VyIGVuIHRlbXBzIHLDqWVsIHNhbnMgc2Fpc2llIG1hbnVlbGxlJ1xuICAgIF0sXG4gICAgc3lzdGVtUHJvbXB0OiBgVHUgZXMgbCdhZ2VudCByZXNwb25zYWJsZSBkdSBzdWl2aSBkZSBmYWN0dXJhdGlvbiBldCBkdSByZWNvdXZyZW1lbnQgcG91ciBsYSBQTUUuXG5Ub24gcsO0bGUgOlxuMS4gSWRlbnRpZmllciBsYSBmYWN0dXJlIGNvbmNlcm7DqWUsIHNvbiBtb250YW50IFRUQyBldCBsZSBub21icmUgZGUgam91cnMgZGUgcmV0YXJkLlxuMi4gQWRhcHRlciBsZSB0b24gYXZlYyBwcsOpY2lzaW9uIHNlbG9uIGxlIHBhbGllciA6XG4gICAtIFBhbGllciAxIChKKzMgw6AgSis3KSA6IEJpZW52ZWlsbGFudCBldCBjb3VydG9pcywgc3VwcG9zZSB1biBzaW1wbGUgb3VibGkgYWRtaW5pc3RyYXRpZi5cbiAgIC0gUGFsaWVyIDIgKEorOCDDoCBKKzIxKSA6IFByb2Zlc3Npb25uZWwgZXQgZmVybWUsIHJhcHBlbGxlIGwnw6ljaMOpYW5jZSBjb250cmFjdHVlbGxlIGV0IGZvdXJuaXQgbGUgbGllbiBkZSBwYWllbWVudCBkaXJlY3QuXG4gICAtIFBhbGllciAzIChKKzIyIGV0IHBsdXMpIDogRm9ybWVsLCBzaWduYWxlIGxlcyBww6luYWxpdMOpcyBkZSByZXRhcmQgbMOpZ2FsZXMgZXQgbCfDqXZlbnR1ZWxsZSBzdXNwZW5zaW9uIGRlcyBwcmVzdGF0aW9ucy5cbjMuIFByb3Bvc2VyIHNpIGJlc29pbiB1biDDqXRhbGVtZW50IGVuIDIgdmVyc2VtZW50cyBzaSBsZSBjbGllbnQgc2lnbmFsZSB1bmUgZGlmZmljdWx0w6kgdGVtcG9yYWlyZSBkZSB0csOpc29yZXJpZS5gLFxuICAgIHJvaU1ldHJpYzogJys0MiUgZGUgZmFjdHVyZXMgcsOpZ2zDqWVzIGF2YW50IEorMTUnLFxuICAgIGF2Z1NldHVwVGltZTogJzNoIGRlIGNvbmZpZ3VyYXRpb24gbm8tY29kZScsXG4gICAgc2FtcGxlU2NlbmFyaW9zOiBbXG4gICAgICB7XG4gICAgICAgIGlkOiAnaW52XzEnLFxuICAgICAgICBsYWJlbDogJ1JlbGFuY2UgY291cnRvaXNlIEorNSAoUGFsaWVyIDEpJyxcbiAgICAgICAgdXNlck1lc3NhZ2U6ICdSZWxhbmNlciBsZSBjbGllbnQgU0FSTCBOb3ZhYnVybyBwb3VyIGxhIGZhY3R1cmUgRjIwMjQtMTE4IGRlIDEgNDUwLDAwIOKCrCBUVEMgw6ljaHVlIGRlcHVpcyA1IGpvdXJzLicsXG4gICAgICAgIGV4cGVjdGVkT3V0Y29tZTogJ0fDqW7DqHJlIHVuIGVtYWlsIGNvdXJ0b2lzIHJhcHBlbGFudCBsZSBudW3DqXJvIGRlIGZhY3R1cmUsIGpvaWduYW50IGxlIGR1cGxpY2F0YSBldCBsZSBsaWVuIGRlIHBhaWVtZW50IHJhcGlkZS4nXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogJ2ludl8yJyxcbiAgICAgICAgbGFiZWw6ICdDbGllbnQgZGVtYW5kYW50IHVuIGTDqWxhaSBkZSBwYWllbWVudCcsXG4gICAgICAgIHVzZXJNZXNzYWdlOiAnQm9uam91ciwgbm91cyBhdm9ucyBiaWVuIHJlw6d1IHZvdHJlIHJlbGFuY2UgcG91ciBsYSBmYWN0dXJlIEYyMDI0LTA5MiBkZSAzIDIwMCDigqwuIE5vdXMgYXZvbnMgdW4gZMOpY2FsYWdlIGRlIHRyw6lzb3JlcmllIGNlIG1vaXMtY2ksIGVzdC1pbCBwb3NzaWJsZSBkZSBwYXllciBlbiAyIGZvaXMgPycsXG4gICAgICAgIGV4cGVjdGVkT3V0Y29tZTogJ0FjY3VlaWxsZSBsYSBkZW1hbmRlIGF2ZWMgZW1wYXRoaWUgcHJvZmVzc2lvbm5lbGxlLCBmb3JtYWxpc2UgdW4gw6ljaMOpYW5jaWVyICg1MCUgaW1tw6lkaWF0LCA1MCUgw6AgMzAgam91cnMpIGV0IG1ldCDDoCBqb3VyIGxlIHN0YXR1dCBkYW5zIGzigJlvdXRpbCBjb21wdGFibGUuJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6ICdpbnZfMycsXG4gICAgICAgIGxhYmVsOiAnQ3LDqWF0aW9uIGTigJl1biBkZXZpcyAvIGZhY3R1cmUgZOKAmWFjb21wdGUnLFxuICAgICAgICB1c2VyTWVzc2FnZTogJ0xlIHByb3NwZWN0IEF0ZWxpZXIgVmVydCBhIHZhbGlkw6kgbm90cmUgcHJvcG9zaXRpb24gcG91ciBs4oCZYXVkaXQgw6luZXJnw6l0aXF1ZSDDoCAyIDQwMCDigqwgSFQuIFByw6lwYXJlIGxhIGZhY3R1cmUgZOKAmWFjb21wdGUgZGUgMzAlIHN2cC4nLFxuICAgICAgICBleHBlY3RlZE91dGNvbWU6ICdDYWxjdWxlIGzigJlhY29tcHRlICg3MjAg4oKsIEhUIC8gODY0IOKCrCBUVEMpLCBnw6luw6hyZSBsZSBicm91aWxsb24gc3VyIGxlIGxvZ2ljaWVsIGRlIGZhY3R1cmF0aW9uIGV0IHByw6lwYXJlIGzigJllbWFpbCBkZSBjb25maXJtYXRpb24uJ1xuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGlkOiAnc2NoZWR1bGluZycsXG4gICAgdGl0bGU6ICdBZ2VudCBQcmlzZSBkZSBSZW5kZXotVm91cyAmIFF1YWxpZmljYXRpb24nLFxuICAgIHRhZ2xpbmU6ICdBZ2VuZGFzIHJlbXBsaXMgc2FucyBmcmljdGlvbiBhdmVjIHByw6ktcXVhbGlmaWNhdGlvbiBldCByYXBwZWxzIGFudGkgbm8tc2hvdycsXG4gICAgZGVzY3JpcHRpb246ICfDiWNoYW5nZSBuYXR1cmVsbGVtZW50IGF2ZWMgbGVzIHByb3NwZWN0cyBwb3VyIHF1YWxpZmllciBsZXVyIHByb2pldCAoYnVkZ2V0LCBkw6lsYWksIGxvY2FsaXNhdGlvbikgZXQgY2FsZSBsZSByZW5kZXotdm91cyBkaXJlY3RlbWVudCBkYW5zIEdvb2dsZSBDYWxlbmRhciBvdSBDYWxlbmRseS4nLFxuICAgIGJhZGdlOiAnQWdlbmRhICYgUXVhbGlmaWNhdGlvbicsXG4gICAgaWNvbk5hbWU6ICdDYWxlbmRhckNsb2NrJyxcbiAgICBjb2xvcjogJ2JsdWUnLFxuICAgIG5vQ29kZVRvb2xzOiBbXG4gICAgICB7IG5hbWU6ICdGb3JtdWxhaXJlIFdlYiAvIFdoYXRzQXBwJywgcm9sZTogJ1BvaW50IGRlIGNvbnRhY3QgaW5pdGlhbCBkdSBjbGllbnQnLCBjYXRlZ29yeTogJ3RyaWdnZXInIH0sXG4gICAgICB7IG5hbWU6ICdNYWtlLmNvbScsIHJvbGU6ICdWw6lyaWZpY2F0aW9uIGRlcyBkaXNwb25pYmlsaXTDqXMnLCBjYXRlZ29yeTogJ3RyaWdnZXInIH0sXG4gICAgICB7IG5hbWU6ICdHZW1pbmkgMi41IEZsYXNoJywgcm9sZTogJ0FnZW50IGNvbnZlcnNhdGlvbm5lbCBkZSBxdWFsaWZpY2F0aW9uJywgY2F0ZWdvcnk6ICdhaScgfSxcbiAgICAgIHsgbmFtZTogJ0dvb2dsZSBDYWxlbmRhciAvIENhbC5jb20nLCByb2xlOiAnU3luY2hyb25pc2F0aW9uIGRlIGzigJlhZ2VuZGEgZW4gdGVtcHMgcsOpZWwnLCBjYXRlZ29yeTogJ2FjdGlvbicgfSxcbiAgICAgIHsgbmFtZTogJ1R3aWxpbyBTTVMnLCByb2xlOiAnUmFwcGVsIDI0aCBldCAyaCBhdmFudCBwb3VyIHrDqXJvIG5vLXNob3cnLCBjYXRlZ29yeTogJ2FjdGlvbicgfVxuICAgIF0sXG4gICAgY2FwYWJpbGl0aWVzOiBbXG4gICAgICAnRGlhbG9ndWUgZmx1aWRlIHBvdXIgdHJvdXZlciBsZSBjcsOpbmVhdSBpZMOpYWwgZW4gw6l2aXRhbnQgbGVzIGFsbGVycy1yZXRvdXJzIGTigJllbWFpbHMnLFxuICAgICAgJ1F1ZXN0aW9ucyBkZSBxdWFsaWZpY2F0aW9uIHBlcnNvbm5hbGlzw6llcyAodHlwZSBkZSBwcm9qZXQsIGVudmVsb3BwZSBidWRnw6l0YWlyZSwgdXJnZW5jZSknLFxuICAgICAgJ1LDqXNlcnZhdGlvbiBpbnN0YW50YW7DqWUgYXZlYyBibG9jYWdlIGF1dG9tYXRpcXVlIGR1IHRlbXBzIGRlIHRyYWpldCBwb3VyIGxlcyBhcnRpc2FucycsXG4gICAgICAnRW52b2kgYXV0b21hdGlxdWUgZGUgU01TIGRlIGNvbmZpcm1hdGlvbiBldCByYXBwZWwgYXZlYyBsaWVuIGRlIG1vZGlmaWNhdGlvbi9hbm51bGF0aW9uJyxcbiAgICAgICdTeW5jaHJvbmlzYXRpb24gYmlkaXJlY3Rpb25uZWxsZSBhdmVjIGxlcyBhZ2VuZGFzIGRlIHRvdXRlIGzigJnDqXF1aXBlJ1xuICAgIF0sXG4gICAgc3lzdGVtUHJvbXB0OiBgVHUgZXMgbCdhc3Npc3RhbnQgZGUgcGxhbmlmaWNhdGlvbiBldCBkZSBxdWFsaWZpY2F0aW9uIGRlIHJlbmRlei12b3VzIGRlIGwnZW50cmVwcmlzZS5cblRlcyBtaXNzaW9ucyA6XG4xLiBEZW1hbmRlciBwb2xpbWVudCBhdSBjbGllbnQgc29uIHByw6lub20sIG5vbSwgdMOpbMOpcGhvbmUgZXQgbCdvYmpldCBwcsOpY2lzIGR1IHJlbmRlei12b3VzLlxuMi4gUG9zZXIgMiBxdWVzdGlvbnMgY2zDqXMgZGUgcHLDqS1xdWFsaWZpY2F0aW9uIDpcbiAgIC0gUXVlbGxlIGVzdCBsYSBuYXR1cmUgZGUgdm90cmUgcHJvamV0IGV0IGwnw6ljaMOpYW5jZSBzb3VoYWl0w6llID9cbiAgIC0gRGlzcG9zZXotdm91cyBkJ3VuZSBlc3RpbWF0aW9uIGJ1ZGfDqXRhaXJlID9cbjMuIFByb3Bvc2VyIDIgb3UgMyBjcsOpbmVhdXggZGlzcG9uaWJsZXMgcHLDqWNpcyBwYXJtaSBjZXV4IGRlIGwnYWdlbmRhIHBhcnRhZ8OpIChleCA6IE1hcmRpIDE0aDMwIG91IEpldWRpIDEwaDAwKS5cbjQuIETDqHMgYWNjb3JkLCByw6lzZXJ2ZXIgbGUgcmVuZGV6LXZvdXMsIHLDqWNhcGl0dWxlciBsJ2FkcmVzc2Ugb3UgbGUgbGllbiBkZSB2aXNpbywgZXQgcHJvZ3JhbW1lciBsZSBTTVMgZGUgcmFwcGVsLmAsXG4gICAgcm9pTWV0cmljOiAnLTY1JSBkZSB0YXV4IGTigJlhYnNlbnTDqWlzbWUgKG5vLXNob3cpJyxcbiAgICBhdmdTZXR1cFRpbWU6ICcxaDMwIGRlIGNvbmZpZ3VyYXRpb24gbm8tY29kZScsXG4gICAgc2FtcGxlU2NlbmFyaW9zOiBbXG4gICAgICB7XG4gICAgICAgIGlkOiAnc2NoXzEnLFxuICAgICAgICBsYWJlbDogJ1ByaXNlIGRlIHJlbmRlei12b3VzIHBvdXIgZGV2aXMgdHJhdmF1eCcsXG4gICAgICAgIHVzZXJNZXNzYWdlOiAnQm9uam91ciwgamUgc291aGFpdGUgdW4gZGV2aXMgcG91ciBsYSByw6lmZWN0aW9uIMOpbGVjdHJpcXVlIGRlIG1vbiBhcHBhcnRlbWVudCBkZSA3MG3CsiDDoCBMeW9uLiDDinRlcy12b3VzIGRpc3BvbmlibGUgY2V0dGUgc2VtYWluZSA/JyxcbiAgICAgICAgZXhwZWN0ZWRPdXRjb21lOiAnUXVhbGlmaWUgbOKAmWFkcmVzc2UsIGxlIGTDqWxhaSBldCBwcm9wb3NlIGRldXggY3LDqW5lYXV4IGRlIHZpc2l0ZSB0ZWNobmlxdWUgKEpldWRpIDE0aCBvdSBWZW5kcmVkaSAxMGgpLidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAnc2NoXzInLFxuICAgICAgICBsYWJlbDogJ1JlcG9ydCBkZSByZW5kZXotdm91cyBkZSBkZXJuacOocmUgbWludXRlJyxcbiAgICAgICAgdXNlck1lc3NhZ2U6ICdCb25qb3VyLCBq4oCZYXZhaXMgcmR2IGRlbWFpbiDDoCAxMWggbWFpcyBq4oCZYWkgdW4gZW1ww6pjaGVtZW50IHByb2Zlc3Npb25uZWwuIFBldXQtb24gZMOpY2FsZXIgw6AgdmVuZHJlZGkgYXByw6hzLW1pZGkgPycsXG4gICAgICAgIGV4cGVjdGVkT3V0Y29tZTogJ0FubnVsZSBs4oCZYW5jaWVuIGNyw6luZWF1LCB2w6lyaWZpZSBsZXMgY3LDqW5lYXV4IGxpYnJlcyBkZSB2ZW5kcmVkaSBhcHLDqHMtbWlkaSwgcsOpc2VydmUgw6AgMTVoMzAgZXQgZW52b2llIGxhIGNvbmZpcm1hdGlvbiBtaXNlIMOgIGpvdXIuJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6ICdzY2hfMycsXG4gICAgICAgIGxhYmVsOiAnUXVhbGlmaWNhdGlvbiBwcm9zcGVjdCBCMkIgcG91ciBhdWRpdCcsXG4gICAgICAgIHVzZXJNZXNzYWdlOiAnQm9uam91ciwgbm91cyBzb21tZXMgdW5lIFBNRSBkZSAxNSBzYWxhcmnDqXMgZXQgbm91cyB2b3Vsb25zIGF1ZGl0ZXIgbm9zIHByb2Nlc3MgbG9naXN0aXF1ZXMuIFF1ZWxzIHNvbnQgdm9zIHRhcmlmcyBldCBkaXNwb25pYmlsaXTDqXMgPycsXG4gICAgICAgIGV4cGVjdGVkT3V0Y29tZTogJ0RlbWFuZGUgbGVzIHNww6ljaWZpY2l0w6lzIGRlIGzigJlhY3Rpdml0w6ksIHBvc2l0aW9ubmUgdW4gcHJlbWllciBhcHBlbCBkZSBjYWRyYWdlIGdyYXR1aXQgZGUgMzAgbWluIGF2ZWMgbGUgZGlyZWN0ZXVyIGFzc29jacOpLidcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBpZDogJ2xlYWRfZm9sbG93dXAnLFxuICAgIHRpdGxlOiAnQWdlbnQgU3VpdmkgZGUgUHJvc3BlY3RzICYgTGVhZCBOdXJ0dXJpbmcnLFxuICAgIHRhZ2xpbmU6ICdSw6lwb25zZSBlbiBtb2lucyBkZSAyIG1pbnV0ZXMgYXV4IGxlYWRzIGVudHJhbnRzIGV0IHJlbGFuY2VzIHBlcnNvbm5hbGlzw6llcycsXG4gICAgZGVzY3JpcHRpb246ICdUcmFuc2Zvcm1lIGNoYXF1ZSB2aXNpdGV1ciBkZSBmb3JtdWxhaXJlIGVuIG9wcG9ydHVuaXTDqSBxdWFsaWZpw6llLiBTY29yw6kgZXQgcmVsYW5jw6kgYXV0b21hdGlxdWVtZW50IHNlbG9uIHNvbiBuaXZlYXUgZOKAmWludMOpcsOqdCBzYW5zIGxhaXNzZXIgYXVjdW4gZGV2aXMgc2FucyBzdWl0ZS4nLFxuICAgIGJhZGdlOiAnVmVudGUgJiBDcm9pc3NhbmNlJyxcbiAgICBpY29uTmFtZTogJ1VzZXJDaGVjaycsXG4gICAgY29sb3I6ICd2aW9sZXQnLFxuICAgIG5vQ29kZVRvb2xzOiBbXG4gICAgICB7IG5hbWU6ICdUeXBlZm9ybSAvIFRhbGx5IC8gRm9ybXVsYWlyZSBXZWInLCByb2xlOiAnQ2FwdHVyZSBkZXMgY29vcmRvbm7DqWVzIGR1IHByb3NwZWN0JywgY2F0ZWdvcnk6ICd0cmlnZ2VyJyB9LFxuICAgICAgeyBuYW1lOiAnTWFrZS5jb20nLCByb2xlOiAnRMOpY2xlbmNoZW1lbnQgaW1tw6lkaWF0IGR1IHNjw6luYXJpbycsIGNhdGVnb3J5OiAndHJpZ2dlcicgfSxcbiAgICAgIHsgbmFtZTogJ0dlbWluaSAyLjUgRmxhc2gnLCByb2xlOiAnU2NvcmluZyBkdSBwcm9zcGVjdCBldCBwZXJzb25uYWxpc2F0aW9uIGRlIGzigJllbWFpbCcsIGNhdGVnb3J5OiAnYWknIH0sXG4gICAgICB7IG5hbWU6ICdIdWJTcG90IC8gUGlwZWRyaXZlIC8gTm90aW9uJywgcm9sZTogJ0Nyw6lhdGlvbiBkZSBsYSBmaWNoZSBvcHBvcnR1bml0w6kgQ1JNJywgY2F0ZWdvcnk6ICdkYXRhYmFzZScgfSxcbiAgICAgIHsgbmFtZTogJ0xlbWxpc3QgLyBXaGF0c0FwcCAvIFNsYWNrJywgcm9sZTogJ1PDqXF1ZW5jZSBkZSByZWxhbmNlIGNvbW1lcmNpYWxlIGNhZGVuY8OpZScsIGNhdGVnb3J5OiAnYWN0aW9uJyB9XG4gICAgXSxcbiAgICBjYXBhYmlsaXRpZXM6IFtcbiAgICAgICdSw6lhY3Rpdml0w6kgdWx0cmEtcmFwaWRlICg8IDIgbWludXRlcyBhcHLDqHMgc291bWlzc2lvbiBk4oCZdW4gZm9ybXVsYWlyZSknLFxuICAgICAgJ1Njb3JpbmcgYXV0b21hdGlxdWUgZGVzIGxlYWRzIDogQ2hhdWQgKGFjdGlvbiBjb21tZXJjaWFsZSBpbW3DqWRpYXRlKSwgVGnDqGRlIChudXJ0dXJpbmcpLCBGcm9pZCcsXG4gICAgICAnUmVsYW5jZSBjYWRlbmPDqWUgZGVzIGRldmlzIGVudm95w6lzIHJlc3TDqXMgc2FucyByw6lwb25zZSAoSiszLCBKKzcsIEorMTQpJyxcbiAgICAgICdQYXJ0YWdlIGF1dG9tYXRpcXVlIGTigJnDqXR1ZGVzIGRlIGNhcyBldCBkZSByw6lmw6lyZW5jZXMgY2xpZW50cyBzaW1pbGFpcmVzIGF1IHNlY3RldXIgZHUgcHJvc3BlY3QnLFxuICAgICAgJ05vdGlmaWNhdGlvbiBpbnN0YW50YW7DqWUgc3VyIGxlIG1vYmlsZSBkdSBjb21tZXJjaWFsIGTDqHMgcXXigJl1biBkZXZpcyBlc3QgY29uc3VsdMOpJ1xuICAgIF0sXG4gICAgc3lzdGVtUHJvbXB0OiBgVHUgZXMgbCdhZ2VudCBkJ2FjcXVpc2l0aW9uIGV0IGRlIHN1aXZpIGNvbW1lcmNpYWwgZGUgbGEgUE1FLlxuVGVzIHLDqGdsZXMgZGUgY29uZHVpdGUgOlxuMS4gQW5hbHlzZXIgaW1tw6lkaWF0ZW1lbnQgbGEgZGVtYW5kZSBlbnRyYW50ZSBwb3VyIGTDqXRlcm1pbmVyIGxlIExlYWQgU2NvcmUgKENoYXVkLCBUacOoZGUsIEZyb2lkKS5cbjIuIFNpIGxlIHByb3NwZWN0IGEgdW4gcHJvamV0IGNvbmNyZXQgYXZlYyBidWRnZXQgdmFsaWTDqSAoTGVhZCBDaGF1ZCkgOiBlbnZveWVyIHVuIG1lc3NhZ2UgcGVyc29ubmFsaXPDqSB2YWxvcmlzYW50IHVuZSByw6lmw6lyZW5jZSBzaW1pbGFpcmUgZXQgcHJvcG9zZXIgdW4gYXBwZWwgZGUgZMOpY291dmVydGUgc291cyAyNGguXG4zLiBTaSB1biBkZXZpcyBhIMOpdMOpIGVudm95w6kgaWwgeSBhIHF1ZWxxdWVzIGpvdXJzIHNhbnMgcmV0b3VyIDogZm9ybXVsZXIgdW5lIHJlbGFuY2UgYmllbnZlaWxsYW50ZSBkZW1hbmRhbnQgc2kgbGUgcHJvc3BlY3QgYSBkZXMgcXVlc3Rpb25zIHRlY2huaXF1ZXMgb3UgYmVzb2luIGQnYWp1c3RlbWVudHMuXG40LiBFbnJlZ2lzdHJlciBzeXN0w6ltYXRpcXVlbWVudCBsZXMgaW50ZW50aW9ucyBjbMOpcyBkYW5zIGxlIENSTSBwb3VyIHF1ZSBsZSBjb21tZXJjaWFsIGFpdCBsJ2hpc3RvcmlxdWUgY29tcGxldC5gLFxuICAgIHJvaU1ldHJpYzogJysyOCUgZGUgdGF1eCBkZSBzaWduYXR1cmUgZGUgZGV2aXMnLFxuICAgIGF2Z1NldHVwVGltZTogJzJoMzAgZGUgY29uZmlndXJhdGlvbiBuby1jb2RlJyxcbiAgICBzYW1wbGVTY2VuYXJpb3M6IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6ICdsZWFkXzEnLFxuICAgICAgICBsYWJlbDogJ05vdXZlYXUgbGVhZCBlbnRyYW50IHN1ciBzaXRlIHdlYicsXG4gICAgICAgIHVzZXJNZXNzYWdlOiAnRm9ybXVsYWlyZSByZcOndSA6IFRob21hcyBNYXJ0aW4sIEfDqXJhbnQgZGUgVHJhbnNwb3J0IDY5LiBcIk5vdXMgY2hlcmNob25zIMOgIMOpcXVpcGVyIG5vcyAxMiB2w6loaWN1bGVzIGTigJl1biBsb2dpY2llbCBkZSBzdWl2aS4gQnVkZ2V0IHZhbGlkw6ksIG1pc2UgZW4gcGxhY2Ugc291cyAxIG1vaXMuXCInLFxuICAgICAgICBleHBlY3RlZE91dGNvbWU6ICdBdHRyaWJ1ZSB1biBzY29yZSBkZSA5NS8xMDAgKExlYWQgQ2hhdWQpLCBjcsOpZSBsYSBmaWNoZSBzdXIgbGUgQ1JNIGV0IHLDqWRpZ2UgdW4gbWVzc2FnZSBk4oCZZW5nYWdlbWVudCB1bHRyYS1wZXJzb25uYWxpc8OpIG1lbnRpb25uYW50IHVuIGNsaWVudCB0cmFuc3BvcnRldXIuJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6ICdsZWFkXzInLFxuICAgICAgICBsYWJlbDogJ1JlbGFuY2UgZOKAmXVuIGRldmlzIHNhbnMgcsOpcG9uc2Ugw6AgSis0JyxcbiAgICAgICAgdXNlck1lc3NhZ2U6ICdMZSBkZXZpcyAjREVWLTIwMjQtNDAxIGRlIDQgODAwIOKCrCBwb3VyIGxhIE1lbnVpc2VyaWUgRHVib2lzIGEgw6l0w6kgZW52b3nDqSBsdW5kaSBkZXJuaWVyLiBBdWN1bmUgcsOpcG9uc2UgcmXDp3VlIMOgIGNlIGpvdXIuJyxcbiAgICAgICAgZXhwZWN0ZWRPdXRjb21lOiAnUHLDqXBhcmUgdW5lIHJlbGFuY2Ugw6lsw6lnYW50ZSBwcm9wb3NhbnQgZGUgY2xhcmlmaWVyIGxlcyBvcHRpb25zIHRlY2huaXF1ZXMgZHUgZGV2aXMgc2FucyBleGVyY2VyIGRlIHByZXNzaW9uIGFncmVzc2l2ZS4nXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogJ2xlYWRfMycsXG4gICAgICAgIGxhYmVsOiAnUsOpYWN0aXZhdGlvbiBk4oCZdW4gYW5jaWVuIHByb3NwZWN0IHRpw6hkZScsXG4gICAgICAgIHVzZXJNZXNzYWdlOiAnTGUgY2xpZW50IHBvdGVudGllbCBDYWJpbmV0IFJvY2hlIGF2YWl0IGFqb3VybsOpIHNvbiBwcm9qZXQgZOKAmWluc3RhbGxhdGlvbiBpbmZvcm1hdGlxdWUgZW4gc2VwdGVtYnJlIGZhdXRlIGRlIGJ1ZGdldC4gQ29tbWVudCBsZSByZWxhbmNlciBlbiBub3ZlbWJyZSA/JyxcbiAgICAgICAgZXhwZWN0ZWRPdXRjb21lOiAnUHJvcG9zZSB1bmUgcHJpc2UgZGUgbm91dmVsbGVzIGNvdXJ0b2lzZSBhdmVjIG1lbnRpb24gZOKAmXVuZSBub3V2ZWxsZSBvZmZyZSBvdSBhaWRlIGRlIHRyYW5zaXRpb24gYWRhcHTDqWUgw6AgbGV1ciB0YWlsbGUuJ1xuICAgICAgfVxuICAgIF1cbiAgfVxuXTtcblxuZXhwb3J0IGNvbnN0IFNFQ1RPUl9QUkVTRVRTOiBSZWNvcmQ8c3RyaW5nLCB7IGxhYmVsOiBzdHJpbmc7IGNvbXBhbnlOYW1lOiBzdHJpbmc7IGRlZmF1bHRLbm93bGVkZ2U6IHN0cmluZyB9PiA9IHtcbiAgYnRwOiB7XG4gICAgbGFiZWw6ICdBcnRpc2FucyAmIEJUUCAoUsOpbm92YXRpb24sIMOJbGVjdHJpY2l0w6ksIFBsb21iZXJpZSknLFxuICAgIGNvbXBhbnlOYW1lOiAnQsOidGlSw6lub3YgU2VydmljZXMnLFxuICAgIGRlZmF1bHRLbm93bGVkZ2U6ICdUYXJpZnMgaG9yYWlyZXMgOiA2NeKCrC9oIEhULiBEw6lwbGFjZW1lbnQgOiA0NeKCrCAoYWdnbG9tw6lyYXRpb24pLiBEZXZpcyBncmF0dWl0IHNvdXMgNDhoLiBVcmdlbmNlcyBkw6lwYW5uYWdlIGFzc3Vyw6llcyBsZSBzYW1lZGkgbWF0aW4uJ1xuICB9LFxuICBhZ2VuY3k6IHtcbiAgICBsYWJlbDogJ0FnZW5jZXMgJiBDYWJpbmV0cyBkZSBDb25zZWlsJyxcbiAgICBjb21wYW55TmFtZTogJ0F1cmEgQ29uc2VpbCAmIFN0cmF0w6lnaWUnLFxuICAgIGRlZmF1bHRLbm93bGVkZ2U6ICdQcmVzdGF0aW9ucyA6IENvbnNlaWwgUkgsIHN0cmF0w6lnaWUgZGlnaXRhbGUsIGF1ZGl0IG9yZ2FuaXNhdGlvbm5lbC4gVGF1eCBqb3VybmFsaWVyIG1veWVuIDogODUw4oKsIEhULiBQcmVtaWVyIGRpYWdub3N0aWMgb2ZmZXJ0IGRlIDMwIG1pbnV0ZXMuJ1xuICB9LFxuICBoZWFsdGg6IHtcbiAgICBsYWJlbDogJ1Byb2Zlc3Npb25zIExpYsOpcmFsZXMgJiBNw6lkaWNhbCAvIFBhcmFtw6lkaWNhbCcsXG4gICAgY29tcGFueU5hbWU6ICdDYWJpbmV0IEtpbsOpIFNhbnTDqSBMaWJlbGx1bGUnLFxuICAgIGRlZmF1bHRLbm93bGVkZ2U6ICdTw6lhbmNlcyBzdXIgb3Jkb25uYW5jZSBjb252ZW50aW9ubsOpZXMgU2VjdGV1ciAxLiBCaWxhbiBpbml0aWFsIDogNDUgbWludXRlcy4gUsOoZ2xlbWVudHMgcGFyIENCIGV0IGNow6hxdWVzIGFjY2VwdMOpcy4gVMOpbMOpY29uc3VsdGF0aW9uIHBvc3NpYmxlLidcbiAgfSxcbiAgY29tbWVyY2U6IHtcbiAgICBsYWJlbDogJ0NvbW1lcmNlcyBMb2NhdXggJiBFLWNvbW1lcmNlJyxcbiAgICBjb21wYW55TmFtZTogJ01haXNvbiBEw6ljbyAmIFRlcnJvaXInLFxuICAgIGRlZmF1bHRLbm93bGVkZ2U6ICdMaXZyYWlzb24gb2ZmZXJ0ZSBkw6hzIDYw4oKsIGTigJlhY2hhdC4gRMOpbGFpcyA6IDQ4aCBlbiBGcmFuY2UgbcOpdHJvcG9saXRhaW5lLiBSZXRvdXJzIGdyYXR1aXRzIHNvdXMgMTQgam91cnMgZW4gYm91dGlxdWUgb3UgcGFyIHJlbGFpcy4nXG4gIH0sXG4gIHNlcnZpY2VzOiB7XG4gICAgbGFiZWw6ICdTZXJ2aWNlcyBhdXggRW50cmVwcmlzZXMgJiBOZXR0b3lhZ2UgLyBTw6ljdXJpdMOpJyxcbiAgICBjb21wYW55TmFtZTogJ05ldFBybyBFbnRyZXByaXNlcycsXG4gICAgZGVmYXVsdEtub3dsZWRnZTogJ0NvbnRyYXRzIHLDqWN1cnJlbnRzIGTigJllbnRyZXRpZW4gZGUgYnVyZWF1eC4gUHJvZHVpdHMgw6ljb2xhYmVsbGlzw6lzLiBJbnRlcnZlbnRpb25zIDdqLzcgYXZhbnQgOGggb3UgYXByw6hzIDE5aCBwb3VyIG5lIHBhcyBnw6puZXIgbGVzIGNvbGxhYm9yYXRldXJzLidcbiAgfVxufTtcbiJdfQ==