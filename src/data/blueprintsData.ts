export const BLUEPRINTS_DATA = [
	{
		id: "bp_support",
		agentId: "support",
		title: "Pipeline Support Client 24/7 (WhatsApp + Make + Gemini + Notion)",
		description: "Scénario complet permettant à n’importe quelle TPE ou PME de connecter son numéro WhatsApp professionnel à un agent IA capable d’interroger sa FAQ Notion et d’alerter le gérant sur Slack en cas de litige.",
		complexity: "Intermédiaire (2-3h)",
		platforms: [
			"Make.com",
			"WhatsApp Cloud API",
			"Notion",
			"Gemini AI",
			"Slack"
		],
		steps: [
			{
				stepNumber: 1,
				title: "Déclencheur Webhook WhatsApp",
				tool: "WhatsApp Cloud API / Make.com",
				description: "Réceptionne chaque message entrant d’un client avec son numéro de téléphone et son texte.",
				configTip: "Activez un numéro virtuel sur Twilio ou directement via Meta Developer Portal pour conserver votre numéro d’entreprise séparé."
			},
			{
				stepNumber: 2,
				title: "Recherche dans la Base de Connaissances",
				tool: "Notion Database / Airtable",
				description: "Recherche par mots-clés ou embeddings dans la base interne de la PME (tarifs, horaires, questions fréquentes, délais).",
				configTip: "Créez simplement une page Notion publique ou connectée avec des sections claires (Horaires, Tarifs, FAQ SAV)."
			},
			{
				stepNumber: 3,
				title: "Génération de la réponse par l’IA",
				tool: "Google Gemini 2.5 Flash",
				description: "Synthétise la réponse idéale en intégrant les données de Notion et le ton de l’entreprise. Détecte si une intervention humaine est requise.",
				configTip: "Utilisez la température 0.2 pour garantir des réponses factuelles et éviter toute invention de tarifs."
			},
			{
				stepNumber: 4,
				title: "Envoi de la réponse & Escalade conditionnelle",
				tool: "WhatsApp Cloud API & Slack/SMS",
				description: "Renvoie le message au client en moins de 3 secondes. Si le score d’urgence est élevé, envoie une notification instantanée au gérant.",
				configTip: "Ajoutez un filtre Make : si \"urgence === true\", déclencher un module notification Slack avec le lien direct vers le contact."
			}
		],
		jsonSchemaPreview: `{
  "scenario_name": "Agent_Support_PME_WhatsApp_Make",
  "version": "1.0.0",
  "modules": [
    {
      "id": 1,
      "module": "gateway:CustomWebHook",
      "name": "Webhook Entrant WhatsApp Cloud API",
      "parameters": { "path": "/webhook/pme-support-inbound" }
    },
    {
      "id": 2,
      "module": "notion:SearchPages",
      "name": "Recherche FAQ & Tarifs",
      "parameters": { "database_id": "pme_knowledge_base_01" }
    },
    {
      "id": 3,
      "module": "googleGemini:GenerateContent",
      "name": "Agent IA RAG & Décision",
      "parameters": {
        "model": "gemini-2.5-flash",
        "system_instruction": "Tu es le support client officiel de l'entreprise...",
        "temperature": 0.2
      }
    },
    {
      "id": 4,
      "module": "whatsapp:SendMessage",
      "name": "Réponse Client Immédiate",
      "parameters": { "recipient": "{{1.sender_phone}}", "body": "{{3.text}}" }
    }
  ]
}`
	},
	{
		id: "bp_invoicing",
		agentId: "invoicing",
		title: "Recouvrement & Facturation Automatique (Pennylane + Stripe + Make)",
		description: "Vérifie chaque matin à 8h30 les factures échues sur le logiciel de comptabilité et envoie les relances diplomatiques avec lien de paiement par carte ou virement direct.",
		complexity: "Intermédiaire (2-3h)",
		platforms: [
			"Make.com",
			"Pennylane / Stripe",
			"Gmail / Outlook",
			"Airtable"
		],
		steps: [
			{
				stepNumber: 1,
				title: "Cron Quotidien de Vérification",
				tool: "Make.com Schedule",
				description: "Déclenchement automatique chaque jour ouvré à 8h30 pour scanner les retards.",
				configTip: "Ne relancez jamais le week-end afin de préserver une relation commerciale respectueuse."
			},
			{
				stepNumber: 2,
				title: "Extraction des Factures Impayées",
				tool: "Pennylane API / QuickBooks API",
				description: "Filtre les factures dont la date d’échéance est dépassée et dont le statut est \"non soldé\".",
				configTip: "Excluez les clients sous statut litige ou contestation grâce à un tag \"Contesté\" dans Pennylane."
			},
			{
				stepNumber: 3,
				title: "Calcul du Palier & Rédaction Personnalisée",
				tool: "Gemini 2.5 Flash",
				description: "Identifie le palier (J+3, J+15, J+30) et génère le texte de relance avec le duplicata PDF et le lien Stripe de règlement immédiat.",
				configTip: "L’intégration d’un lien de paiement en 1-clic accélère le règlement dans 68% des cas dès la première relance."
			},
			{
				stepNumber: 4,
				title: "Mise à jour du Journal d’Audit",
				tool: "Airtable / Google Sheets",
				description: "Inscrit la date de relance, le numéro de palier et programme la prochaine étape si non réglé sous 7 jours.",
				configTip: "Partagez cette feuille en lecture seule avec votre comptable pour une visibilité totale."
			}
		],
		jsonSchemaPreview: `{
  "scenario_name": "Agent_Recouvrement_Pennylane_Make",
  "schedule": "0 8 * * 1-5",
  "modules": [
    {
      "id": 1,
      "module": "pennylane:ListInvoices",
      "parameters": { "filter": "status=unpaid AND due_date < TODAY" }
    },
    {
      "id": 2,
      "module": "flow:Router",
      "routes": [
        { "condition": "days_overdue <= 7", "label": "Palier 1 - Rappel Courtois" },
        { "condition": "days_overdue > 7 AND days_overdue <= 21", "label": "Palier 2 - Relance Formelle" },
        { "condition": "days_overdue > 21", "label": "Palier 3 - Pré-contentieux" }
      ]
    },
    {
      "id": 3,
      "module": "email:SendMail",
      "parameters": { "to": "{{1.customer_email}}", "subject": "Suivi facture {{1.invoice_number}}" }
    }
  ]
}`
	},
	{
		id: "bp_scheduling",
		agentId: "scheduling",
		title: "Prise de RDV & Qualification Express (Calendly + Google Calendar + Twilio)",
		description: "Un agent conversationnel qui accueille les demandes de rendez-vous sur le site web ou par SMS, pose 2 questions de qualification et cale le créneau sans le moindre aller-retour.",
		complexity: "Facile (1h)",
		platforms: [
			"Make.com",
			"Calendly / Cal.com",
			"Google Calendar",
			"Twilio SMS"
		],
		steps: [
			{
				stepNumber: 1,
				title: "Réception de la Demande",
				tool: "Formulaire Web / WhatsApp",
				description: "Le prospect indique qu’il souhaite un rendez-vous pour un devis ou une consultation.",
				configTip: "Proposez ce bouton sur votre page d’accueil et votre fiche Google My Business."
			},
			{
				stepNumber: 2,
				title: "Qualification du Projet par l’IA",
				tool: "Gemini 2.5 Flash",
				description: "Demande la ville, le type de prestation et l’enveloppe budgétaire pour vérifier l’adéquation avant de bloquer un créneau.",
				configTip: "Empêche les rendez-vous non pertinents ou hors zone géographique pour les artisans."
			},
			{
				stepNumber: 3,
				title: "Réservation Directe dans l’Agenda",
				tool: "Google Calendar API",
				description: "Inscrit l’événement dans l’agenda avec les coordonnées et les réponses de qualification dans la description.",
				configTip: "Activez un créneau tampon de 30 minutes de trajet entre deux interventions sur site."
			},
			{
				stepNumber: 4,
				title: "SMS de Confirmation & Rappel Anti-No-Show",
				tool: "Twilio SMS",
				description: "Envoie un SMS immédiat avec lien d’annulation + un rappel 2h avant le rendez-vous.",
				configTip: "Le rappel SMS 2h avant réduit l’absentéisme de 65% par rapport aux rappels par email seuls."
			}
		],
		jsonSchemaPreview: `{
  "scenario_name": "Agent_Prise_RDV_Calendar_Twilio",
  "modules": [
    { "id": 1, "module": "typeform:NewSubmission" },
    { "id": 2, "module": "googleGemini:QualifyLead" },
    { "id": 3, "module": "googleCalendar:CreateEvent" },
    { "id": 4, "module": "twilio:SendSMS", "parameters": { "message": "Bonjour, votre RDV est confirmé pour le {{3.start_time}}." } }
  ]
}`
	},
	{
		id: "bp_lead_followup",
		agentId: "lead_followup",
		title: "Réponse Éclair aux Prospects (< 2 min) & Synchro CRM (HubSpot + Lemlist)",
		description: "Capte les leads dès soumission de formulaire, attribue un score d’opportunité, prépare une réponse ultra-personnalisée et alerte le commercial sur mobile.",
		complexity: "Intermédiaire (2-3h)",
		platforms: [
			"Make.com",
			"HubSpot / Pipedrive",
			"Gemini 2.5 Flash",
			"Lemlist / Gmail",
			"Slack"
		],
		steps: [
			{
				stepNumber: 1,
				title: "Détection du Lead Entrant",
				tool: "Tally / Typeform / Webhook Site",
				description: "Déclenchement instantané à la seconde où le prospect clique sur \"Envoyer ma demande\".",
				configTip: "La probabilité de convertir un prospect est multipliée par 7 s’il est contacté en moins de 5 minutes."
			},
			{
				stepNumber: 2,
				title: "Scoring & Enrichissement par l’IA",
				tool: "Gemini 2.5 Flash",
				description: "Évalue le profil de l’entreprise, l’adéquation du budget et le degré d’urgence (Chaud, Tiède, Froid).",
				configTip: "Attribuez automatiquement le lead au bon commercial selon le secteur géographique ou la spécialité."
			},
			{
				stepNumber: 3,
				title: "Création de l’Opportunité dans le CRM",
				tool: "HubSpot / Pipedrive",
				description: "Enregistre le contact, l’entreprise et l’opportunité de vente avec la note de synthèse générée par l’IA.",
				configTip: "Fini les fiches de contact incomplètes : l’IA structure toutes les informations récoltées."
			},
			{
				stepNumber: 4,
				title: "Email Personnalisé & Alerte Slack",
				tool: "Gmail / Lemlist & Slack",
				description: "Envoie un email de prise de contact avec une étude de cas pertinente et sonne le commercial sur son smartphone.",
				configTip: "Pour les leads chauds (score > 85), envoyez en parallèle un SMS au gérant pour rappel immédiat."
			}
		],
		jsonSchemaPreview: `{
  "scenario_name": "Agent_Lead_Nurturing_Hubspot",
  "modules": [
    { "id": 1, "module": "tally:FormSubmitted" },
    { "id": 2, "module": "googleGemini:ScoreAndDraft" },
    { "id": 3, "module": "hubspot:CreateDeal" },
    { "id": 4, "module": "slack:PostMessage", "parameters": { "channel": "#sales-leads", "text": "🔥 Nouveau Lead Chaud : {{1.company_name}}" } }
  ]
}`
	}
];

//# sourceMappingURL=data:application/json;base64,eyJtYXBwaW5ncyI6IkFBRUEsT0FBTyxNQUFNLGtCQUFxQztDQUNoRDtFQUNFLElBQUk7RUFDSixTQUFTO0VBQ1QsT0FBTztFQUNQLGFBQWE7RUFDYixZQUFZO0VBQ1osV0FBVztHQUFDO0dBQVk7R0FBc0I7R0FBVTtHQUFhO0VBQU87RUFDNUUsT0FBTztHQUNMO0lBQ0UsWUFBWTtJQUNaLE9BQU87SUFDUCxNQUFNO0lBQ04sYUFBYTtJQUNiLFdBQVc7R0FDYjtHQUNBO0lBQ0UsWUFBWTtJQUNaLE9BQU87SUFDUCxNQUFNO0lBQ04sYUFBYTtJQUNiLFdBQVc7R0FDYjtHQUNBO0lBQ0UsWUFBWTtJQUNaLE9BQU87SUFDUCxNQUFNO0lBQ04sYUFBYTtJQUNiLFdBQVc7R0FDYjtHQUNBO0lBQ0UsWUFBWTtJQUNaLE9BQU87SUFDUCxNQUFNO0lBQ04sYUFBYTtJQUNiLFdBQVc7R0FDYjtFQUNGO0VBQ0EsbUJBQW1COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBa0NyQjtDQUNBO0VBQ0UsSUFBSTtFQUNKLFNBQVM7RUFDVCxPQUFPO0VBQ1AsYUFBYTtFQUNiLFlBQVk7RUFDWixXQUFXO0dBQUM7R0FBWTtHQUFzQjtHQUFtQjtFQUFVO0VBQzNFLE9BQU87R0FDTDtJQUNFLFlBQVk7SUFDWixPQUFPO0lBQ1AsTUFBTTtJQUNOLGFBQWE7SUFDYixXQUFXO0dBQ2I7R0FDQTtJQUNFLFlBQVk7SUFDWixPQUFPO0lBQ1AsTUFBTTtJQUNOLGFBQWE7SUFDYixXQUFXO0dBQ2I7R0FDQTtJQUNFLFlBQVk7SUFDWixPQUFPO0lBQ1AsTUFBTTtJQUNOLGFBQWE7SUFDYixXQUFXO0dBQ2I7R0FDQTtJQUNFLFlBQVk7SUFDWixPQUFPO0lBQ1AsTUFBTTtJQUNOLGFBQWE7SUFDYixXQUFXO0dBQ2I7RUFDRjtFQUNBLG1CQUFtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQXlCckI7Q0FDQTtFQUNFLElBQUk7RUFDSixTQUFTO0VBQ1QsT0FBTztFQUNQLGFBQWE7RUFDYixZQUFZO0VBQ1osV0FBVztHQUFDO0dBQVk7R0FBc0I7R0FBbUI7RUFBWTtFQUM3RSxPQUFPO0dBQ0w7SUFDRSxZQUFZO0lBQ1osT0FBTztJQUNQLE1BQU07SUFDTixhQUFhO0lBQ2IsV0FBVztHQUNiO0dBQ0E7SUFDRSxZQUFZO0lBQ1osT0FBTztJQUNQLE1BQU07SUFDTixhQUFhO0lBQ2IsV0FBVztHQUNiO0dBQ0E7SUFDRSxZQUFZO0lBQ1osT0FBTztJQUNQLE1BQU07SUFDTixhQUFhO0lBQ2IsV0FBVztHQUNiO0dBQ0E7SUFDRSxZQUFZO0lBQ1osT0FBTztJQUNQLE1BQU07SUFDTixhQUFhO0lBQ2IsV0FBVztHQUNiO0VBQ0Y7RUFDQSxtQkFBbUI7Ozs7Ozs7OztDQVNyQjtDQUNBO0VBQ0UsSUFBSTtFQUNKLFNBQVM7RUFDVCxPQUFPO0VBQ1AsYUFBYTtFQUNiLFlBQVk7RUFDWixXQUFXO0dBQUM7R0FBWTtHQUF1QjtHQUFvQjtHQUFtQjtFQUFPO0VBQzdGLE9BQU87R0FDTDtJQUNFLFlBQVk7SUFDWixPQUFPO0lBQ1AsTUFBTTtJQUNOLGFBQWE7SUFDYixXQUFXO0dBQ2I7R0FDQTtJQUNFLFlBQVk7SUFDWixPQUFPO0lBQ1AsTUFBTTtJQUNOLGFBQWE7SUFDYixXQUFXO0dBQ2I7R0FDQTtJQUNFLFlBQVk7SUFDWixPQUFPO0lBQ1AsTUFBTTtJQUNOLGFBQWE7SUFDYixXQUFXO0dBQ2I7R0FDQTtJQUNFLFlBQVk7SUFDWixPQUFPO0lBQ1AsTUFBTTtJQUNOLGFBQWE7SUFDYixXQUFXO0dBQ2I7RUFDRjtFQUNBLG1CQUFtQjs7Ozs7Ozs7O0NBU3JCO0FBQ0YiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiYmx1ZXByaW50c0RhdGEudHMiXSwidmVyc2lvbiI6Mywic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTm9Db2RlQmx1ZXByaW50IH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgQkxVRVBSSU5UU19EQVRBOiBOb0NvZGVCbHVlcHJpbnRbXSA9IFtcbiAge1xuICAgIGlkOiAnYnBfc3VwcG9ydCcsXG4gICAgYWdlbnRJZDogJ3N1cHBvcnQnLFxuICAgIHRpdGxlOiAnUGlwZWxpbmUgU3VwcG9ydCBDbGllbnQgMjQvNyAoV2hhdHNBcHAgKyBNYWtlICsgR2VtaW5pICsgTm90aW9uKScsXG4gICAgZGVzY3JpcHRpb246ICdTY8OpbmFyaW8gY29tcGxldCBwZXJtZXR0YW50IMOgIG7igJlpbXBvcnRlIHF1ZWxsZSBUUEUgb3UgUE1FIGRlIGNvbm5lY3RlciBzb24gbnVtw6lybyBXaGF0c0FwcCBwcm9mZXNzaW9ubmVsIMOgIHVuIGFnZW50IElBIGNhcGFibGUgZOKAmWludGVycm9nZXIgc2EgRkFRIE5vdGlvbiBldCBk4oCZYWxlcnRlciBsZSBnw6lyYW50IHN1ciBTbGFjayBlbiBjYXMgZGUgbGl0aWdlLicsXG4gICAgY29tcGxleGl0eTogJ0ludGVybcOpZGlhaXJlICgyLTNoKScsXG4gICAgcGxhdGZvcm1zOiBbJ01ha2UuY29tJywgJ1doYXRzQXBwIENsb3VkIEFQSScsICdOb3Rpb24nLCAnR2VtaW5pIEFJJywgJ1NsYWNrJ10sXG4gICAgc3RlcHM6IFtcbiAgICAgIHtcbiAgICAgICAgc3RlcE51bWJlcjogMSxcbiAgICAgICAgdGl0bGU6ICdEw6ljbGVuY2hldXIgV2ViaG9vayBXaGF0c0FwcCcsXG4gICAgICAgIHRvb2w6ICdXaGF0c0FwcCBDbG91ZCBBUEkgLyBNYWtlLmNvbScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnUsOpY2VwdGlvbm5lIGNoYXF1ZSBtZXNzYWdlIGVudHJhbnQgZOKAmXVuIGNsaWVudCBhdmVjIHNvbiBudW3DqXJvIGRlIHTDqWzDqXBob25lIGV0IHNvbiB0ZXh0ZS4nLFxuICAgICAgICBjb25maWdUaXA6ICdBY3RpdmV6IHVuIG51bcOpcm8gdmlydHVlbCBzdXIgVHdpbGlvIG91IGRpcmVjdGVtZW50IHZpYSBNZXRhIERldmVsb3BlciBQb3J0YWwgcG91ciBjb25zZXJ2ZXIgdm90cmUgbnVtw6lybyBk4oCZZW50cmVwcmlzZSBzw6lwYXLDqS4nXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGVwTnVtYmVyOiAyLFxuICAgICAgICB0aXRsZTogJ1JlY2hlcmNoZSBkYW5zIGxhIEJhc2UgZGUgQ29ubmFpc3NhbmNlcycsXG4gICAgICAgIHRvb2w6ICdOb3Rpb24gRGF0YWJhc2UgLyBBaXJ0YWJsZScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnUmVjaGVyY2hlIHBhciBtb3RzLWNsw6lzIG91IGVtYmVkZGluZ3MgZGFucyBsYSBiYXNlIGludGVybmUgZGUgbGEgUE1FICh0YXJpZnMsIGhvcmFpcmVzLCBxdWVzdGlvbnMgZnLDqXF1ZW50ZXMsIGTDqWxhaXMpLicsXG4gICAgICAgIGNvbmZpZ1RpcDogJ0Nyw6lleiBzaW1wbGVtZW50IHVuZSBwYWdlIE5vdGlvbiBwdWJsaXF1ZSBvdSBjb25uZWN0w6llIGF2ZWMgZGVzIHNlY3Rpb25zIGNsYWlyZXMgKEhvcmFpcmVzLCBUYXJpZnMsIEZBUSBTQVYpLidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0ZXBOdW1iZXI6IDMsXG4gICAgICAgIHRpdGxlOiAnR8OpbsOpcmF0aW9uIGRlIGxhIHLDqXBvbnNlIHBhciBs4oCZSUEnLFxuICAgICAgICB0b29sOiAnR29vZ2xlIEdlbWluaSAyLjUgRmxhc2gnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1N5bnRow6l0aXNlIGxhIHLDqXBvbnNlIGlkw6lhbGUgZW4gaW50w6lncmFudCBsZXMgZG9ubsOpZXMgZGUgTm90aW9uIGV0IGxlIHRvbiBkZSBs4oCZZW50cmVwcmlzZS4gRMOpdGVjdGUgc2kgdW5lIGludGVydmVudGlvbiBodW1haW5lIGVzdCByZXF1aXNlLicsXG4gICAgICAgIGNvbmZpZ1RpcDogJ1V0aWxpc2V6IGxhIHRlbXDDqXJhdHVyZSAwLjIgcG91ciBnYXJhbnRpciBkZXMgcsOpcG9uc2VzIGZhY3R1ZWxsZXMgZXQgw6l2aXRlciB0b3V0ZSBpbnZlbnRpb24gZGUgdGFyaWZzLidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0ZXBOdW1iZXI6IDQsXG4gICAgICAgIHRpdGxlOiAnRW52b2kgZGUgbGEgcsOpcG9uc2UgJiBFc2NhbGFkZSBjb25kaXRpb25uZWxsZScsXG4gICAgICAgIHRvb2w6ICdXaGF0c0FwcCBDbG91ZCBBUEkgJiBTbGFjay9TTVMnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1JlbnZvaWUgbGUgbWVzc2FnZSBhdSBjbGllbnQgZW4gbW9pbnMgZGUgMyBzZWNvbmRlcy4gU2kgbGUgc2NvcmUgZOKAmXVyZ2VuY2UgZXN0IMOpbGV2w6ksIGVudm9pZSB1bmUgbm90aWZpY2F0aW9uIGluc3RhbnRhbsOpZSBhdSBnw6lyYW50LicsXG4gICAgICAgIGNvbmZpZ1RpcDogJ0Fqb3V0ZXogdW4gZmlsdHJlIE1ha2UgOiBzaSBcInVyZ2VuY2UgPT09IHRydWVcIiwgZMOpY2xlbmNoZXIgdW4gbW9kdWxlIG5vdGlmaWNhdGlvbiBTbGFjayBhdmVjIGxlIGxpZW4gZGlyZWN0IHZlcnMgbGUgY29udGFjdC4nXG4gICAgICB9XG4gICAgXSxcbiAgICBqc29uU2NoZW1hUHJldmlldzogYHtcbiAgXCJzY2VuYXJpb19uYW1lXCI6IFwiQWdlbnRfU3VwcG9ydF9QTUVfV2hhdHNBcHBfTWFrZVwiLFxuICBcInZlcnNpb25cIjogXCIxLjAuMFwiLFxuICBcIm1vZHVsZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRcIjogMSxcbiAgICAgIFwibW9kdWxlXCI6IFwiZ2F0ZXdheTpDdXN0b21XZWJIb29rXCIsXG4gICAgICBcIm5hbWVcIjogXCJXZWJob29rIEVudHJhbnQgV2hhdHNBcHAgQ2xvdWQgQVBJXCIsXG4gICAgICBcInBhcmFtZXRlcnNcIjogeyBcInBhdGhcIjogXCIvd2ViaG9vay9wbWUtc3VwcG9ydC1pbmJvdW5kXCIgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAyLFxuICAgICAgXCJtb2R1bGVcIjogXCJub3Rpb246U2VhcmNoUGFnZXNcIixcbiAgICAgIFwibmFtZVwiOiBcIlJlY2hlcmNoZSBGQVEgJiBUYXJpZnNcIixcbiAgICAgIFwicGFyYW1ldGVyc1wiOiB7IFwiZGF0YWJhc2VfaWRcIjogXCJwbWVfa25vd2xlZGdlX2Jhc2VfMDFcIiB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDMsXG4gICAgICBcIm1vZHVsZVwiOiBcImdvb2dsZUdlbWluaTpHZW5lcmF0ZUNvbnRlbnRcIixcbiAgICAgIFwibmFtZVwiOiBcIkFnZW50IElBIFJBRyAmIETDqWNpc2lvblwiLFxuICAgICAgXCJwYXJhbWV0ZXJzXCI6IHtcbiAgICAgICAgXCJtb2RlbFwiOiBcImdlbWluaS0yLjUtZmxhc2hcIixcbiAgICAgICAgXCJzeXN0ZW1faW5zdHJ1Y3Rpb25cIjogXCJUdSBlcyBsZSBzdXBwb3J0IGNsaWVudCBvZmZpY2llbCBkZSBsJ2VudHJlcHJpc2UuLi5cIixcbiAgICAgICAgXCJ0ZW1wZXJhdHVyZVwiOiAwLjJcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogNCxcbiAgICAgIFwibW9kdWxlXCI6IFwid2hhdHNhcHA6U2VuZE1lc3NhZ2VcIixcbiAgICAgIFwibmFtZVwiOiBcIlLDqXBvbnNlIENsaWVudCBJbW3DqWRpYXRlXCIsXG4gICAgICBcInBhcmFtZXRlcnNcIjogeyBcInJlY2lwaWVudFwiOiBcInt7MS5zZW5kZXJfcGhvbmV9fVwiLCBcImJvZHlcIjogXCJ7ezMudGV4dH19XCIgfVxuICAgIH1cbiAgXVxufWBcbiAgfSxcbiAge1xuICAgIGlkOiAnYnBfaW52b2ljaW5nJyxcbiAgICBhZ2VudElkOiAnaW52b2ljaW5nJyxcbiAgICB0aXRsZTogJ1JlY291dnJlbWVudCAmIEZhY3R1cmF0aW9uIEF1dG9tYXRpcXVlIChQZW5ueWxhbmUgKyBTdHJpcGUgKyBNYWtlKScsXG4gICAgZGVzY3JpcHRpb246ICdWw6lyaWZpZSBjaGFxdWUgbWF0aW4gw6AgOGgzMCBsZXMgZmFjdHVyZXMgw6ljaHVlcyBzdXIgbGUgbG9naWNpZWwgZGUgY29tcHRhYmlsaXTDqSBldCBlbnZvaWUgbGVzIHJlbGFuY2VzIGRpcGxvbWF0aXF1ZXMgYXZlYyBsaWVuIGRlIHBhaWVtZW50IHBhciBjYXJ0ZSBvdSB2aXJlbWVudCBkaXJlY3QuJyxcbiAgICBjb21wbGV4aXR5OiAnSW50ZXJtw6lkaWFpcmUgKDItM2gpJyxcbiAgICBwbGF0Zm9ybXM6IFsnTWFrZS5jb20nLCAnUGVubnlsYW5lIC8gU3RyaXBlJywgJ0dtYWlsIC8gT3V0bG9vaycsICdBaXJ0YWJsZSddLFxuICAgIHN0ZXBzOiBbXG4gICAgICB7XG4gICAgICAgIHN0ZXBOdW1iZXI6IDEsXG4gICAgICAgIHRpdGxlOiAnQ3JvbiBRdW90aWRpZW4gZGUgVsOpcmlmaWNhdGlvbicsXG4gICAgICAgIHRvb2w6ICdNYWtlLmNvbSBTY2hlZHVsZScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnRMOpY2xlbmNoZW1lbnQgYXV0b21hdGlxdWUgY2hhcXVlIGpvdXIgb3V2csOpIMOgIDhoMzAgcG91ciBzY2FubmVyIGxlcyByZXRhcmRzLicsXG4gICAgICAgIGNvbmZpZ1RpcDogJ05lIHJlbGFuY2V6IGphbWFpcyBsZSB3ZWVrLWVuZCBhZmluIGRlIHByw6lzZXJ2ZXIgdW5lIHJlbGF0aW9uIGNvbW1lcmNpYWxlIHJlc3BlY3R1ZXVzZS4nXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGVwTnVtYmVyOiAyLFxuICAgICAgICB0aXRsZTogJ0V4dHJhY3Rpb24gZGVzIEZhY3R1cmVzIEltcGF5w6llcycsXG4gICAgICAgIHRvb2w6ICdQZW5ueWxhbmUgQVBJIC8gUXVpY2tCb29rcyBBUEknLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0ZpbHRyZSBsZXMgZmFjdHVyZXMgZG9udCBsYSBkYXRlIGTigJnDqWNow6lhbmNlIGVzdCBkw6lwYXNzw6llIGV0IGRvbnQgbGUgc3RhdHV0IGVzdCBcIm5vbiBzb2xkw6lcIi4nLFxuICAgICAgICBjb25maWdUaXA6ICdFeGNsdWV6IGxlcyBjbGllbnRzIHNvdXMgc3RhdHV0IGxpdGlnZSBvdSBjb250ZXN0YXRpb24gZ3LDomNlIMOgIHVuIHRhZyBcIkNvbnRlc3TDqVwiIGRhbnMgUGVubnlsYW5lLidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0ZXBOdW1iZXI6IDMsXG4gICAgICAgIHRpdGxlOiAnQ2FsY3VsIGR1IFBhbGllciAmIFLDqWRhY3Rpb24gUGVyc29ubmFsaXPDqWUnLFxuICAgICAgICB0b29sOiAnR2VtaW5pIDIuNSBGbGFzaCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnSWRlbnRpZmllIGxlIHBhbGllciAoSiszLCBKKzE1LCBKKzMwKSBldCBnw6luw6hyZSBsZSB0ZXh0ZSBkZSByZWxhbmNlIGF2ZWMgbGUgZHVwbGljYXRhIFBERiBldCBsZSBsaWVuIFN0cmlwZSBkZSByw6hnbGVtZW50IGltbcOpZGlhdC4nLFxuICAgICAgICBjb25maWdUaXA6ICdM4oCZaW50w6lncmF0aW9uIGTigJl1biBsaWVuIGRlIHBhaWVtZW50IGVuIDEtY2xpYyBhY2PDqWzDqHJlIGxlIHLDqGdsZW1lbnQgZGFucyA2OCUgZGVzIGNhcyBkw6hzIGxhIHByZW1pw6hyZSByZWxhbmNlLidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0ZXBOdW1iZXI6IDQsXG4gICAgICAgIHRpdGxlOiAnTWlzZSDDoCBqb3VyIGR1IEpvdXJuYWwgZOKAmUF1ZGl0JyxcbiAgICAgICAgdG9vbDogJ0FpcnRhYmxlIC8gR29vZ2xlIFNoZWV0cycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnSW5zY3JpdCBsYSBkYXRlIGRlIHJlbGFuY2UsIGxlIG51bcOpcm8gZGUgcGFsaWVyIGV0IHByb2dyYW1tZSBsYSBwcm9jaGFpbmUgw6l0YXBlIHNpIG5vbiByw6lnbMOpIHNvdXMgNyBqb3Vycy4nLFxuICAgICAgICBjb25maWdUaXA6ICdQYXJ0YWdleiBjZXR0ZSBmZXVpbGxlIGVuIGxlY3R1cmUgc2V1bGUgYXZlYyB2b3RyZSBjb21wdGFibGUgcG91ciB1bmUgdmlzaWJpbGl0w6kgdG90YWxlLidcbiAgICAgIH1cbiAgICBdLFxuICAgIGpzb25TY2hlbWFQcmV2aWV3OiBge1xuICBcInNjZW5hcmlvX25hbWVcIjogXCJBZ2VudF9SZWNvdXZyZW1lbnRfUGVubnlsYW5lX01ha2VcIixcbiAgXCJzY2hlZHVsZVwiOiBcIjAgOCAqICogMS01XCIsXG4gIFwibW9kdWxlc1wiOiBbXG4gICAge1xuICAgICAgXCJpZFwiOiAxLFxuICAgICAgXCJtb2R1bGVcIjogXCJwZW5ueWxhbmU6TGlzdEludm9pY2VzXCIsXG4gICAgICBcInBhcmFtZXRlcnNcIjogeyBcImZpbHRlclwiOiBcInN0YXR1cz11bnBhaWQgQU5EIGR1ZV9kYXRlIDwgVE9EQVlcIiB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDIsXG4gICAgICBcIm1vZHVsZVwiOiBcImZsb3c6Um91dGVyXCIsXG4gICAgICBcInJvdXRlc1wiOiBbXG4gICAgICAgIHsgXCJjb25kaXRpb25cIjogXCJkYXlzX292ZXJkdWUgPD0gN1wiLCBcImxhYmVsXCI6IFwiUGFsaWVyIDEgLSBSYXBwZWwgQ291cnRvaXNcIiB9LFxuICAgICAgICB7IFwiY29uZGl0aW9uXCI6IFwiZGF5c19vdmVyZHVlID4gNyBBTkQgZGF5c19vdmVyZHVlIDw9IDIxXCIsIFwibGFiZWxcIjogXCJQYWxpZXIgMiAtIFJlbGFuY2UgRm9ybWVsbGVcIiB9LFxuICAgICAgICB7IFwiY29uZGl0aW9uXCI6IFwiZGF5c19vdmVyZHVlID4gMjFcIiwgXCJsYWJlbFwiOiBcIlBhbGllciAzIC0gUHLDqS1jb250ZW50aWV1eFwiIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMyxcbiAgICAgIFwibW9kdWxlXCI6IFwiZW1haWw6U2VuZE1haWxcIixcbiAgICAgIFwicGFyYW1ldGVyc1wiOiB7IFwidG9cIjogXCJ7ezEuY3VzdG9tZXJfZW1haWx9fVwiLCBcInN1YmplY3RcIjogXCJTdWl2aSBmYWN0dXJlIHt7MS5pbnZvaWNlX251bWJlcn19XCIgfVxuICAgIH1cbiAgXVxufWBcbiAgfSxcbiAge1xuICAgIGlkOiAnYnBfc2NoZWR1bGluZycsXG4gICAgYWdlbnRJZDogJ3NjaGVkdWxpbmcnLFxuICAgIHRpdGxlOiAnUHJpc2UgZGUgUkRWICYgUXVhbGlmaWNhdGlvbiBFeHByZXNzIChDYWxlbmRseSArIEdvb2dsZSBDYWxlbmRhciArIFR3aWxpbyknLFxuICAgIGRlc2NyaXB0aW9uOiAnVW4gYWdlbnQgY29udmVyc2F0aW9ubmVsIHF1aSBhY2N1ZWlsbGUgbGVzIGRlbWFuZGVzIGRlIHJlbmRlei12b3VzIHN1ciBsZSBzaXRlIHdlYiBvdSBwYXIgU01TLCBwb3NlIDIgcXVlc3Rpb25zIGRlIHF1YWxpZmljYXRpb24gZXQgY2FsZSBsZSBjcsOpbmVhdSBzYW5zIGxlIG1vaW5kcmUgYWxsZXItcmV0b3VyLicsXG4gICAgY29tcGxleGl0eTogJ0ZhY2lsZSAoMWgpJyxcbiAgICBwbGF0Zm9ybXM6IFsnTWFrZS5jb20nLCAnQ2FsZW5kbHkgLyBDYWwuY29tJywgJ0dvb2dsZSBDYWxlbmRhcicsICdUd2lsaW8gU01TJ10sXG4gICAgc3RlcHM6IFtcbiAgICAgIHtcbiAgICAgICAgc3RlcE51bWJlcjogMSxcbiAgICAgICAgdGl0bGU6ICdSw6ljZXB0aW9uIGRlIGxhIERlbWFuZGUnLFxuICAgICAgICB0b29sOiAnRm9ybXVsYWlyZSBXZWIgLyBXaGF0c0FwcCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnTGUgcHJvc3BlY3QgaW5kaXF1ZSBxdeKAmWlsIHNvdWhhaXRlIHVuIHJlbmRlei12b3VzIHBvdXIgdW4gZGV2aXMgb3UgdW5lIGNvbnN1bHRhdGlvbi4nLFxuICAgICAgICBjb25maWdUaXA6ICdQcm9wb3NleiBjZSBib3V0b24gc3VyIHZvdHJlIHBhZ2UgZOKAmWFjY3VlaWwgZXQgdm90cmUgZmljaGUgR29vZ2xlIE15IEJ1c2luZXNzLidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0ZXBOdW1iZXI6IDIsXG4gICAgICAgIHRpdGxlOiAnUXVhbGlmaWNhdGlvbiBkdSBQcm9qZXQgcGFyIGzigJlJQScsXG4gICAgICAgIHRvb2w6ICdHZW1pbmkgMi41IEZsYXNoJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdEZW1hbmRlIGxhIHZpbGxlLCBsZSB0eXBlIGRlIHByZXN0YXRpb24gZXQgbOKAmWVudmVsb3BwZSBidWRnw6l0YWlyZSBwb3VyIHbDqXJpZmllciBs4oCZYWTDqXF1YXRpb24gYXZhbnQgZGUgYmxvcXVlciB1biBjcsOpbmVhdS4nLFxuICAgICAgICBjb25maWdUaXA6ICdFbXDDqmNoZSBsZXMgcmVuZGV6LXZvdXMgbm9uIHBlcnRpbmVudHMgb3UgaG9ycyB6b25lIGfDqW9ncmFwaGlxdWUgcG91ciBsZXMgYXJ0aXNhbnMuJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RlcE51bWJlcjogMyxcbiAgICAgICAgdGl0bGU6ICdSw6lzZXJ2YXRpb24gRGlyZWN0ZSBkYW5zIGzigJlBZ2VuZGEnLFxuICAgICAgICB0b29sOiAnR29vZ2xlIENhbGVuZGFyIEFQSScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnSW5zY3JpdCBs4oCZw6l2w6luZW1lbnQgZGFucyBs4oCZYWdlbmRhIGF2ZWMgbGVzIGNvb3Jkb25uw6llcyBldCBsZXMgcsOpcG9uc2VzIGRlIHF1YWxpZmljYXRpb24gZGFucyBsYSBkZXNjcmlwdGlvbi4nLFxuICAgICAgICBjb25maWdUaXA6ICdBY3RpdmV6IHVuIGNyw6luZWF1IHRhbXBvbiBkZSAzMCBtaW51dGVzIGRlIHRyYWpldCBlbnRyZSBkZXV4IGludGVydmVudGlvbnMgc3VyIHNpdGUuJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RlcE51bWJlcjogNCxcbiAgICAgICAgdGl0bGU6ICdTTVMgZGUgQ29uZmlybWF0aW9uICYgUmFwcGVsIEFudGktTm8tU2hvdycsXG4gICAgICAgIHRvb2w6ICdUd2lsaW8gU01TJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdFbnZvaWUgdW4gU01TIGltbcOpZGlhdCBhdmVjIGxpZW4gZOKAmWFubnVsYXRpb24gKyB1biByYXBwZWwgMmggYXZhbnQgbGUgcmVuZGV6LXZvdXMuJyxcbiAgICAgICAgY29uZmlnVGlwOiAnTGUgcmFwcGVsIFNNUyAyaCBhdmFudCByw6lkdWl0IGzigJlhYnNlbnTDqWlzbWUgZGUgNjUlIHBhciByYXBwb3J0IGF1eCByYXBwZWxzIHBhciBlbWFpbCBzZXVscy4nXG4gICAgICB9XG4gICAgXSxcbiAgICBqc29uU2NoZW1hUHJldmlldzogYHtcbiAgXCJzY2VuYXJpb19uYW1lXCI6IFwiQWdlbnRfUHJpc2VfUkRWX0NhbGVuZGFyX1R3aWxpb1wiLFxuICBcIm1vZHVsZXNcIjogW1xuICAgIHsgXCJpZFwiOiAxLCBcIm1vZHVsZVwiOiBcInR5cGVmb3JtOk5ld1N1Ym1pc3Npb25cIiB9LFxuICAgIHsgXCJpZFwiOiAyLCBcIm1vZHVsZVwiOiBcImdvb2dsZUdlbWluaTpRdWFsaWZ5TGVhZFwiIH0sXG4gICAgeyBcImlkXCI6IDMsIFwibW9kdWxlXCI6IFwiZ29vZ2xlQ2FsZW5kYXI6Q3JlYXRlRXZlbnRcIiB9LFxuICAgIHsgXCJpZFwiOiA0LCBcIm1vZHVsZVwiOiBcInR3aWxpbzpTZW5kU01TXCIsIFwicGFyYW1ldGVyc1wiOiB7IFwibWVzc2FnZVwiOiBcIkJvbmpvdXIsIHZvdHJlIFJEViBlc3QgY29uZmlybcOpIHBvdXIgbGUge3szLnN0YXJ0X3RpbWV9fS5cIiB9IH1cbiAgXVxufWBcbiAgfSxcbiAge1xuICAgIGlkOiAnYnBfbGVhZF9mb2xsb3d1cCcsXG4gICAgYWdlbnRJZDogJ2xlYWRfZm9sbG93dXAnLFxuICAgIHRpdGxlOiAnUsOpcG9uc2Ugw4ljbGFpciBhdXggUHJvc3BlY3RzICg8IDIgbWluKSAmIFN5bmNocm8gQ1JNIChIdWJTcG90ICsgTGVtbGlzdCknLFxuICAgIGRlc2NyaXB0aW9uOiAnQ2FwdGUgbGVzIGxlYWRzIGTDqHMgc291bWlzc2lvbiBkZSBmb3JtdWxhaXJlLCBhdHRyaWJ1ZSB1biBzY29yZSBk4oCZb3Bwb3J0dW5pdMOpLCBwcsOpcGFyZSB1bmUgcsOpcG9uc2UgdWx0cmEtcGVyc29ubmFsaXPDqWUgZXQgYWxlcnRlIGxlIGNvbW1lcmNpYWwgc3VyIG1vYmlsZS4nLFxuICAgIGNvbXBsZXhpdHk6ICdJbnRlcm3DqWRpYWlyZSAoMi0zaCknLFxuICAgIHBsYXRmb3JtczogWydNYWtlLmNvbScsICdIdWJTcG90IC8gUGlwZWRyaXZlJywgJ0dlbWluaSAyLjUgRmxhc2gnLCAnTGVtbGlzdCAvIEdtYWlsJywgJ1NsYWNrJ10sXG4gICAgc3RlcHM6IFtcbiAgICAgIHtcbiAgICAgICAgc3RlcE51bWJlcjogMSxcbiAgICAgICAgdGl0bGU6ICdEw6l0ZWN0aW9uIGR1IExlYWQgRW50cmFudCcsXG4gICAgICAgIHRvb2w6ICdUYWxseSAvIFR5cGVmb3JtIC8gV2ViaG9vayBTaXRlJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdEw6ljbGVuY2hlbWVudCBpbnN0YW50YW7DqSDDoCBsYSBzZWNvbmRlIG/DuSBsZSBwcm9zcGVjdCBjbGlxdWUgc3VyIFwiRW52b3llciBtYSBkZW1hbmRlXCIuJyxcbiAgICAgICAgY29uZmlnVGlwOiAnTGEgcHJvYmFiaWxpdMOpIGRlIGNvbnZlcnRpciB1biBwcm9zcGVjdCBlc3QgbXVsdGlwbGnDqWUgcGFyIDcgc+KAmWlsIGVzdCBjb250YWN0w6kgZW4gbW9pbnMgZGUgNSBtaW51dGVzLidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0ZXBOdW1iZXI6IDIsXG4gICAgICAgIHRpdGxlOiAnU2NvcmluZyAmIEVucmljaGlzc2VtZW50IHBhciBs4oCZSUEnLFxuICAgICAgICB0b29sOiAnR2VtaW5pIDIuNSBGbGFzaCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnw4l2YWx1ZSBsZSBwcm9maWwgZGUgbOKAmWVudHJlcHJpc2UsIGzigJlhZMOpcXVhdGlvbiBkdSBidWRnZXQgZXQgbGUgZGVncsOpIGTigJl1cmdlbmNlIChDaGF1ZCwgVGnDqGRlLCBGcm9pZCkuJyxcbiAgICAgICAgY29uZmlnVGlwOiAnQXR0cmlidWV6IGF1dG9tYXRpcXVlbWVudCBsZSBsZWFkIGF1IGJvbiBjb21tZXJjaWFsIHNlbG9uIGxlIHNlY3RldXIgZ8Opb2dyYXBoaXF1ZSBvdSBsYSBzcMOpY2lhbGl0w6kuJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RlcE51bWJlcjogMyxcbiAgICAgICAgdGl0bGU6ICdDcsOpYXRpb24gZGUgbOKAmU9wcG9ydHVuaXTDqSBkYW5zIGxlIENSTScsXG4gICAgICAgIHRvb2w6ICdIdWJTcG90IC8gUGlwZWRyaXZlJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdFbnJlZ2lzdHJlIGxlIGNvbnRhY3QsIGzigJllbnRyZXByaXNlIGV0IGzigJlvcHBvcnR1bml0w6kgZGUgdmVudGUgYXZlYyBsYSBub3RlIGRlIHN5bnRow6hzZSBnw6luw6lyw6llIHBhciBs4oCZSUEuJyxcbiAgICAgICAgY29uZmlnVGlwOiAnRmluaSBsZXMgZmljaGVzIGRlIGNvbnRhY3QgaW5jb21wbMOodGVzIDogbOKAmUlBIHN0cnVjdHVyZSB0b3V0ZXMgbGVzIGluZm9ybWF0aW9ucyByw6ljb2x0w6llcy4nXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGVwTnVtYmVyOiA0LFxuICAgICAgICB0aXRsZTogJ0VtYWlsIFBlcnNvbm5hbGlzw6kgJiBBbGVydGUgU2xhY2snLFxuICAgICAgICB0b29sOiAnR21haWwgLyBMZW1saXN0ICYgU2xhY2snLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0Vudm9pZSB1biBlbWFpbCBkZSBwcmlzZSBkZSBjb250YWN0IGF2ZWMgdW5lIMOpdHVkZSBkZSBjYXMgcGVydGluZW50ZSBldCBzb25uZSBsZSBjb21tZXJjaWFsIHN1ciBzb24gc21hcnRwaG9uZS4nLFxuICAgICAgICBjb25maWdUaXA6ICdQb3VyIGxlcyBsZWFkcyBjaGF1ZHMgKHNjb3JlID4gODUpLCBlbnZveWV6IGVuIHBhcmFsbMOobGUgdW4gU01TIGF1IGfDqXJhbnQgcG91ciByYXBwZWwgaW1tw6lkaWF0LidcbiAgICAgIH1cbiAgICBdLFxuICAgIGpzb25TY2hlbWFQcmV2aWV3OiBge1xuICBcInNjZW5hcmlvX25hbWVcIjogXCJBZ2VudF9MZWFkX051cnR1cmluZ19IdWJzcG90XCIsXG4gIFwibW9kdWxlc1wiOiBbXG4gICAgeyBcImlkXCI6IDEsIFwibW9kdWxlXCI6IFwidGFsbHk6Rm9ybVN1Ym1pdHRlZFwiIH0sXG4gICAgeyBcImlkXCI6IDIsIFwibW9kdWxlXCI6IFwiZ29vZ2xlR2VtaW5pOlNjb3JlQW5kRHJhZnRcIiB9LFxuICAgIHsgXCJpZFwiOiAzLCBcIm1vZHVsZVwiOiBcImh1YnNwb3Q6Q3JlYXRlRGVhbFwiIH0sXG4gICAgeyBcImlkXCI6IDQsIFwibW9kdWxlXCI6IFwic2xhY2s6UG9zdE1lc3NhZ2VcIiwgXCJwYXJhbWV0ZXJzXCI6IHsgXCJjaGFubmVsXCI6IFwiI3NhbGVzLWxlYWRzXCIsIFwidGV4dFwiOiBcIvCflKUgTm91dmVhdSBMZWFkIENoYXVkIDoge3sxLmNvbXBhbnlfbmFtZX19XCIgfSB9XG4gIF1cbn1gXG4gIH1cbl07XG4iXX0=