export const CASE_STUDIES_DATA = [
	{
		id: "case_btp",
		companyName: "BâtiConfort Rénovation",
		sector: "Artisanat & BTP (Plomberie - Chauffage - Électricité)",
		teamSize: "6 personnes (1 gérant, 4 techniciens sur le terrain, 1 assistante à temps partiel)",
		challenge: "Le gérant passait ses soirées et week-ends à répondre aux demandes d’interventions urgentes et à relancer manuellement les devis. Les appels reçus sur les chantiers tombaient sur répondeur, entraînant la perte de nombreux clients.",
		solution: "Déploiement d’un Agent Service Client & Qualification via WhatsApp Business API et Google Calendar configuré sur Make.com avec Gemini.",
		results: [
			{
				label: "0 appel urgent perdu",
				value: "100%",
				detail: "Prise en charge instantanée des demandes d’urgence 24/7"
			},
			{
				label: "Gain de temps gérant",
				value: "11h / sem",
				detail: "Plus aucun travail administratif le soir après le chantier"
			},
			{
				label: "Devis signés",
				value: "+34%",
				detail: "Réponse en 3 minutes vs 48h chez les concurrents"
			}
		],
		toolsUsed: [
			"WhatsApp Cloud API",
			"Make.com",
			"Gemini 2.5 Flash",
			"Google Calendar",
			"Notion"
		],
		quote: {
			text: "Avant, je rentrais du chantier épuisé pour taper des devis jusqu’à 23h. L’agent WhatsApp qualifie le besoin, récupère les photos du compteur ou de la fuite, et bloque le rdv sur mon agenda. C’est le meilleur investissement de l’année.",
			author: "Christophe Renaud",
			role: "Fondateur & Artisan RGE"
		}
	},
	{
		id: "case_agency",
		companyName: "Aura Conseil & Stratégie",
		sector: "Cabinet de Conseil & Agence de Communication",
		teamSize: "9 consultants et créatifs",
		challenge: "Près de 45 000 € de factures en retard de paiement à tout moment, faute de temps pour relancer les clients sans froisser la relation commerciale. Devis volumineux laissés sans relance structurée.",
		solution: "Mise en place de l’Agent Facturation & Relances d’Impayés connecté à Pennylane, couplé à l’Agent Suivi Prospects connecté à HubSpot.",
		results: [
			{
				label: "Trésorerie recouvrée",
				value: "38 500 €",
				detail: "Encaissés dans les 45 premiers jours de déploiement"
			},
			{
				label: "Délai de paiement (DSO)",
				value: "-18 jours",
				detail: "Passé de 54 jours à 36 jours en moyenne"
			},
			{
				label: "Taux de signature devis",
				value: "+26%",
				detail: "Grâce aux relances diplomatiques programmées à J+3 et J+7"
			}
		],
		toolsUsed: [
			"Pennylane",
			"Make.com",
			"Stripe Invoicing",
			"HubSpot CRM",
			"Gemini 2.5 Flash"
		],
		quote: {
			text: "Nos consultants détestaient relancer les factures par peur d’abîmer la relation client. L’agent IA rédige des messages d’une diplomatie remarquable avec le lien de paiement direct. Nos clients nous remercient même pour le rappel.",
			author: "Delphine Mercier",
			role: "Directrice Associée"
		}
	},
	{
		id: "case_health",
		companyName: "Centre Médical & Kiné Ostéo Sport",
		sector: "Professions de Santé & Cabinets Libéraux",
		teamSize: "4 praticiens associés",
		challenge: "Un taux de no-show (rendez-vous manqués non prévenus) de 14%, représentant plus de 2 200 € de perte d’honoraires par mois et des créneaux bloqués pour d’autres patients en attente.",
		solution: "Agent Prise de Rendez-Vous et Rappel SMS intelligent 24h et 2h avant le rendez-vous, avec possibilité pour le patient d’annuler en un clic pour libérer automatiquement le créneau.",
		results: [
			{
				label: "Taux de no-show",
				value: "2,1%",
				detail: "Chute spectaculaire de 14% à 2,1% dès le premier mois"
			},
			{
				label: "Revenus sécurisés",
				value: "+1 950 € / mois",
				detail: "Créneaux vacants réattribués automatiquement aux urgences"
			},
			{
				label: "Temps de secrétariat",
				value: "-80%",
				detail: "Fin des confirmations manuelles par téléphone"
			}
		],
		toolsUsed: [
			"Cal.com / Google Calendar",
			"Twilio SMS",
			"Make.com",
			"Gemini 2.5 Flash"
		],
		quote: {
			text: "Le rappel SMS 2h avant avec l’option d’annulation instantanée a tout changé. Lorsqu’un patient annule, l’agent propose immédiatement le créneau à la liste d’attente des urgences.",
			author: "Dr. Marc Valette",
			role: "Ostéopathe D.O. & Co-fondateur"
		}
	}
];
export const AGENCY_STARTUP_GUIDE = {
	title: "Comment démarrer une offre d’Agent IA pour PME sans coder",
	subtitle: "La demande des petites entreprises explose. Voici le modèle d’affaires éprouvé pour vendre et déployer ces agents en tant que consultant ou agence.",
	steps: [
		{
			num: "01",
			title: "Cibler une niche métier précise",
			desc: "Ne vendez pas \"de l’IA\" généraliste. Vendez \"Le standard téléphonique et devis 24/7 pour artisans électriciens\" ou \"L’accélérateur de recouvrement pour cabinets de conseil\". Les PME achètent un résultat d’affaires, pas un modèle de langage."
		},
		{
			num: "02",
			title: "Maîtriser la stack no-code fondamentale",
			desc: "Vous n’avez besoin que de 3 briques : Make.com (ou n8n) pour la plomberie d’automatisation, l’API Gemini 2.5 Flash pour la puissance d’analyse et de rédaction, et un connecteur métier (WhatsApp Cloud API, Pennylane, Google Calendar)."
		},
		{
			num: "03",
			title: "Le modèle de tarification idéal pour PME",
			desc: "Facturez un Setup initial forfaitaire (entre 1 500 € et 3 500 € par agent selon la complexité) + un Abonnement mensuel de maintenance et supervision (250 € à 600 € / mois / PME)."
		},
		{
			num: "04",
			title: "Garantir la sécurité et la conformité RGPD",
			desc: "Rassurez immédiatement le dirigeant : les données de ses clients restent sur ses propres comptes (Pennylane, Google Workspace). Aucun entraînement de modèle public n’est effectué sur ses documents sensibles."
		}
	]
};

//# sourceMappingURL=data:application/json;base64,eyJtYXBwaW5ncyI6IkFBRUEsT0FBTyxNQUFNLG9CQUFvQztDQUMvQztFQUNFLElBQUk7RUFDSixhQUFhO0VBQ2IsUUFBUTtFQUNSLFVBQVU7RUFDVixXQUFXO0VBQ1gsVUFBVTtFQUNWLFNBQVM7R0FDUDtJQUFFLE9BQU87SUFBd0IsT0FBTztJQUFRLFFBQVE7R0FBMEQ7R0FDbEg7SUFBRSxPQUFPO0lBQXdCLE9BQU87SUFBYSxRQUFRO0dBQTZEO0dBQzFIO0lBQUUsT0FBTztJQUFnQixPQUFPO0lBQVEsUUFBUTtHQUFtRDtFQUNyRztFQUNBLFdBQVc7R0FBQztHQUFzQjtHQUFZO0dBQW9CO0dBQW1CO0VBQVE7RUFDN0YsT0FBTztHQUNMLE1BQU07R0FDTixRQUFRO0dBQ1IsTUFBTTtFQUNSO0NBQ0Y7Q0FDQTtFQUNFLElBQUk7RUFDSixhQUFhO0VBQ2IsUUFBUTtFQUNSLFVBQVU7RUFDVixXQUFXO0VBQ1gsVUFBVTtFQUNWLFNBQVM7R0FDUDtJQUFFLE9BQU87SUFBd0IsT0FBTztJQUFZLFFBQVE7R0FBc0Q7R0FDbEg7SUFBRSxPQUFPO0lBQTJCLE9BQU87SUFBYSxRQUFRO0dBQTBDO0dBQzFHO0lBQUUsT0FBTztJQUEyQixPQUFPO0lBQVEsUUFBUTtHQUE0RDtFQUN6SDtFQUNBLFdBQVc7R0FBQztHQUFhO0dBQVk7R0FBb0I7R0FBZTtFQUFrQjtFQUMxRixPQUFPO0dBQ0wsTUFBTTtHQUNOLFFBQVE7R0FDUixNQUFNO0VBQ1I7Q0FDRjtDQUNBO0VBQ0UsSUFBSTtFQUNKLGFBQWE7RUFDYixRQUFRO0VBQ1IsVUFBVTtFQUNWLFdBQVc7RUFDWCxVQUFVO0VBQ1YsU0FBUztHQUNQO0lBQUUsT0FBTztJQUFtQixPQUFPO0lBQVEsUUFBUTtHQUF3RDtHQUMzRztJQUFFLE9BQU87SUFBcUIsT0FBTztJQUFtQixRQUFRO0dBQTREO0dBQzVIO0lBQUUsT0FBTztJQUF3QixPQUFPO0lBQVEsUUFBUTtHQUFnRDtFQUMxRztFQUNBLFdBQVc7R0FBQztHQUE2QjtHQUFjO0dBQVk7RUFBa0I7RUFDckYsT0FBTztHQUNMLE1BQU07R0FDTixRQUFRO0dBQ1IsTUFBTTtFQUNSO0NBQ0Y7QUFDRjtBQUVBLE9BQU8sTUFBTSx1QkFBdUI7Q0FDbEMsT0FBTztDQUNQLFVBQVU7Q0FDVixPQUFPO0VBQ0w7R0FDRSxLQUFLO0dBQ0wsT0FBTztHQUNQLE1BQU07RUFDUjtFQUNBO0dBQ0UsS0FBSztHQUNMLE9BQU87R0FDUCxNQUFNO0VBQ1I7RUFDQTtHQUNFLEtBQUs7R0FDTCxPQUFPO0dBQ1AsTUFBTTtFQUNSO0VBQ0E7R0FDRSxLQUFLO0dBQ0wsT0FBTztHQUNQLE1BQU07RUFDUjtDQUNGO0FBQ0YiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiY2FzZVN0dWRpZXNEYXRhLnRzIl0sInZlcnNpb24iOjMsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1c2luZXNzQ2FzZSB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IENBU0VfU1RVRElFU19EQVRBOiBCdXNpbmVzc0Nhc2VbXSA9IFtcbiAge1xuICAgIGlkOiAnY2FzZV9idHAnLFxuICAgIGNvbXBhbnlOYW1lOiAnQsOidGlDb25mb3J0IFLDqW5vdmF0aW9uJyxcbiAgICBzZWN0b3I6ICdBcnRpc2FuYXQgJiBCVFAgKFBsb21iZXJpZSAtIENoYXVmZmFnZSAtIMOJbGVjdHJpY2l0w6kpJyxcbiAgICB0ZWFtU2l6ZTogJzYgcGVyc29ubmVzICgxIGfDqXJhbnQsIDQgdGVjaG5pY2llbnMgc3VyIGxlIHRlcnJhaW4sIDEgYXNzaXN0YW50ZSDDoCB0ZW1wcyBwYXJ0aWVsKScsXG4gICAgY2hhbGxlbmdlOiAnTGUgZ8OpcmFudCBwYXNzYWl0IHNlcyBzb2lyw6llcyBldCB3ZWVrLWVuZHMgw6AgcsOpcG9uZHJlIGF1eCBkZW1hbmRlcyBk4oCZaW50ZXJ2ZW50aW9ucyB1cmdlbnRlcyBldCDDoCByZWxhbmNlciBtYW51ZWxsZW1lbnQgbGVzIGRldmlzLiBMZXMgYXBwZWxzIHJlw6d1cyBzdXIgbGVzIGNoYW50aWVycyB0b21iYWllbnQgc3VyIHLDqXBvbmRldXIsIGVudHJhw65uYW50IGxhIHBlcnRlIGRlIG5vbWJyZXV4IGNsaWVudHMuJyxcbiAgICBzb2x1dGlvbjogJ0TDqXBsb2llbWVudCBk4oCZdW4gQWdlbnQgU2VydmljZSBDbGllbnQgJiBRdWFsaWZpY2F0aW9uIHZpYSBXaGF0c0FwcCBCdXNpbmVzcyBBUEkgZXQgR29vZ2xlIENhbGVuZGFyIGNvbmZpZ3Vyw6kgc3VyIE1ha2UuY29tIGF2ZWMgR2VtaW5pLicsXG4gICAgcmVzdWx0czogW1xuICAgICAgeyBsYWJlbDogJzAgYXBwZWwgdXJnZW50IHBlcmR1JywgdmFsdWU6ICcxMDAlJywgZGV0YWlsOiAnUHJpc2UgZW4gY2hhcmdlIGluc3RhbnRhbsOpZSBkZXMgZGVtYW5kZXMgZOKAmXVyZ2VuY2UgMjQvNycgfSxcbiAgICAgIHsgbGFiZWw6ICdHYWluIGRlIHRlbXBzIGfDqXJhbnQnLCB2YWx1ZTogJzExaCAvIHNlbScsIGRldGFpbDogJ1BsdXMgYXVjdW4gdHJhdmFpbCBhZG1pbmlzdHJhdGlmIGxlIHNvaXIgYXByw6hzIGxlIGNoYW50aWVyJyB9LFxuICAgICAgeyBsYWJlbDogJ0RldmlzIHNpZ27DqXMnLCB2YWx1ZTogJyszNCUnLCBkZXRhaWw6ICdSw6lwb25zZSBlbiAzIG1pbnV0ZXMgdnMgNDhoIGNoZXogbGVzIGNvbmN1cnJlbnRzJyB9XG4gICAgXSxcbiAgICB0b29sc1VzZWQ6IFsnV2hhdHNBcHAgQ2xvdWQgQVBJJywgJ01ha2UuY29tJywgJ0dlbWluaSAyLjUgRmxhc2gnLCAnR29vZ2xlIENhbGVuZGFyJywgJ05vdGlvbiddLFxuICAgIHF1b3RlOiB7XG4gICAgICB0ZXh0OiAnQXZhbnQsIGplIHJlbnRyYWlzIGR1IGNoYW50aWVyIMOpcHVpc8OpIHBvdXIgdGFwZXIgZGVzIGRldmlzIGp1c3F14oCZw6AgMjNoLiBM4oCZYWdlbnQgV2hhdHNBcHAgcXVhbGlmaWUgbGUgYmVzb2luLCByw6ljdXDDqHJlIGxlcyBwaG90b3MgZHUgY29tcHRldXIgb3UgZGUgbGEgZnVpdGUsIGV0IGJsb3F1ZSBsZSByZHYgc3VyIG1vbiBhZ2VuZGEuIEPigJllc3QgbGUgbWVpbGxldXIgaW52ZXN0aXNzZW1lbnQgZGUgbOKAmWFubsOpZS4nLFxuICAgICAgYXV0aG9yOiAnQ2hyaXN0b3BoZSBSZW5hdWQnLFxuICAgICAgcm9sZTogJ0ZvbmRhdGV1ciAmIEFydGlzYW4gUkdFJ1xuICAgIH1cbiAgfSxcbiAge1xuICAgIGlkOiAnY2FzZV9hZ2VuY3knLFxuICAgIGNvbXBhbnlOYW1lOiAnQXVyYSBDb25zZWlsICYgU3RyYXTDqWdpZScsXG4gICAgc2VjdG9yOiAnQ2FiaW5ldCBkZSBDb25zZWlsICYgQWdlbmNlIGRlIENvbW11bmljYXRpb24nLFxuICAgIHRlYW1TaXplOiAnOSBjb25zdWx0YW50cyBldCBjcsOpYXRpZnMnLFxuICAgIGNoYWxsZW5nZTogJ1Byw6hzIGRlIDQ1IDAwMCDigqwgZGUgZmFjdHVyZXMgZW4gcmV0YXJkIGRlIHBhaWVtZW50IMOgIHRvdXQgbW9tZW50LCBmYXV0ZSBkZSB0ZW1wcyBwb3VyIHJlbGFuY2VyIGxlcyBjbGllbnRzIHNhbnMgZnJvaXNzZXIgbGEgcmVsYXRpb24gY29tbWVyY2lhbGUuIERldmlzIHZvbHVtaW5ldXggbGFpc3PDqXMgc2FucyByZWxhbmNlIHN0cnVjdHVyw6llLicsXG4gICAgc29sdXRpb246ICdNaXNlIGVuIHBsYWNlIGRlIGzigJlBZ2VudCBGYWN0dXJhdGlvbiAmIFJlbGFuY2VzIGTigJlJbXBhecOpcyBjb25uZWN0w6kgw6AgUGVubnlsYW5lLCBjb3VwbMOpIMOgIGzigJlBZ2VudCBTdWl2aSBQcm9zcGVjdHMgY29ubmVjdMOpIMOgIEh1YlNwb3QuJyxcbiAgICByZXN1bHRzOiBbXG4gICAgICB7IGxhYmVsOiAnVHLDqXNvcmVyaWUgcmVjb3V2csOpZScsIHZhbHVlOiAnMzggNTAwIOKCrCcsIGRldGFpbDogJ0VuY2Fpc3PDqXMgZGFucyBsZXMgNDUgcHJlbWllcnMgam91cnMgZGUgZMOpcGxvaWVtZW50JyB9LFxuICAgICAgeyBsYWJlbDogJ0TDqWxhaSBkZSBwYWllbWVudCAoRFNPKScsIHZhbHVlOiAnLTE4IGpvdXJzJywgZGV0YWlsOiAnUGFzc8OpIGRlIDU0IGpvdXJzIMOgIDM2IGpvdXJzIGVuIG1veWVubmUnIH0sXG4gICAgICB7IGxhYmVsOiAnVGF1eCBkZSBzaWduYXR1cmUgZGV2aXMnLCB2YWx1ZTogJysyNiUnLCBkZXRhaWw6ICdHcsOiY2UgYXV4IHJlbGFuY2VzIGRpcGxvbWF0aXF1ZXMgcHJvZ3JhbW3DqWVzIMOgIEorMyBldCBKKzcnIH1cbiAgICBdLFxuICAgIHRvb2xzVXNlZDogWydQZW5ueWxhbmUnLCAnTWFrZS5jb20nLCAnU3RyaXBlIEludm9pY2luZycsICdIdWJTcG90IENSTScsICdHZW1pbmkgMi41IEZsYXNoJ10sXG4gICAgcXVvdGU6IHtcbiAgICAgIHRleHQ6ICdOb3MgY29uc3VsdGFudHMgZMOpdGVzdGFpZW50IHJlbGFuY2VyIGxlcyBmYWN0dXJlcyBwYXIgcGV1ciBk4oCZYWLDrm1lciBsYSByZWxhdGlvbiBjbGllbnQuIEzigJlhZ2VudCBJQSByw6lkaWdlIGRlcyBtZXNzYWdlcyBk4oCZdW5lIGRpcGxvbWF0aWUgcmVtYXJxdWFibGUgYXZlYyBsZSBsaWVuIGRlIHBhaWVtZW50IGRpcmVjdC4gTm9zIGNsaWVudHMgbm91cyByZW1lcmNpZW50IG3Dqm1lIHBvdXIgbGUgcmFwcGVsLicsXG4gICAgICBhdXRob3I6ICdEZWxwaGluZSBNZXJjaWVyJyxcbiAgICAgIHJvbGU6ICdEaXJlY3RyaWNlIEFzc29jacOpZSdcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBpZDogJ2Nhc2VfaGVhbHRoJyxcbiAgICBjb21wYW55TmFtZTogJ0NlbnRyZSBNw6lkaWNhbCAmIEtpbsOpIE9zdMOpbyBTcG9ydCcsXG4gICAgc2VjdG9yOiAnUHJvZmVzc2lvbnMgZGUgU2FudMOpICYgQ2FiaW5ldHMgTGliw6lyYXV4JyxcbiAgICB0ZWFtU2l6ZTogJzQgcHJhdGljaWVucyBhc3NvY2nDqXMnLFxuICAgIGNoYWxsZW5nZTogJ1VuIHRhdXggZGUgbm8tc2hvdyAocmVuZGV6LXZvdXMgbWFucXXDqXMgbm9uIHByw6l2ZW51cykgZGUgMTQlLCByZXByw6lzZW50YW50IHBsdXMgZGUgMiAyMDAg4oKsIGRlIHBlcnRlIGTigJlob25vcmFpcmVzIHBhciBtb2lzIGV0IGRlcyBjcsOpbmVhdXggYmxvcXXDqXMgcG91ciBk4oCZYXV0cmVzIHBhdGllbnRzIGVuIGF0dGVudGUuJyxcbiAgICBzb2x1dGlvbjogJ0FnZW50IFByaXNlIGRlIFJlbmRlei1Wb3VzIGV0IFJhcHBlbCBTTVMgaW50ZWxsaWdlbnQgMjRoIGV0IDJoIGF2YW50IGxlIHJlbmRlei12b3VzLCBhdmVjIHBvc3NpYmlsaXTDqSBwb3VyIGxlIHBhdGllbnQgZOKAmWFubnVsZXIgZW4gdW4gY2xpYyBwb3VyIGxpYsOpcmVyIGF1dG9tYXRpcXVlbWVudCBsZSBjcsOpbmVhdS4nLFxuICAgIHJlc3VsdHM6IFtcbiAgICAgIHsgbGFiZWw6ICdUYXV4IGRlIG5vLXNob3cnLCB2YWx1ZTogJzIsMSUnLCBkZXRhaWw6ICdDaHV0ZSBzcGVjdGFjdWxhaXJlIGRlIDE0JSDDoCAyLDElIGTDqHMgbGUgcHJlbWllciBtb2lzJyB9LFxuICAgICAgeyBsYWJlbDogJ1JldmVudXMgc8OpY3VyaXPDqXMnLCB2YWx1ZTogJysxIDk1MCDigqwgLyBtb2lzJywgZGV0YWlsOiAnQ3LDqW5lYXV4IHZhY2FudHMgcsOpYXR0cmlidcOpcyBhdXRvbWF0aXF1ZW1lbnQgYXV4IHVyZ2VuY2VzJyB9LFxuICAgICAgeyBsYWJlbDogJ1RlbXBzIGRlIHNlY3LDqXRhcmlhdCcsIHZhbHVlOiAnLTgwJScsIGRldGFpbDogJ0ZpbiBkZXMgY29uZmlybWF0aW9ucyBtYW51ZWxsZXMgcGFyIHTDqWzDqXBob25lJyB9XG4gICAgXSxcbiAgICB0b29sc1VzZWQ6IFsnQ2FsLmNvbSAvIEdvb2dsZSBDYWxlbmRhcicsICdUd2lsaW8gU01TJywgJ01ha2UuY29tJywgJ0dlbWluaSAyLjUgRmxhc2gnXSxcbiAgICBxdW90ZToge1xuICAgICAgdGV4dDogJ0xlIHJhcHBlbCBTTVMgMmggYXZhbnQgYXZlYyBs4oCZb3B0aW9uIGTigJlhbm51bGF0aW9uIGluc3RhbnRhbsOpZSBhIHRvdXQgY2hhbmfDqS4gTG9yc3F14oCZdW4gcGF0aWVudCBhbm51bGUsIGzigJlhZ2VudCBwcm9wb3NlIGltbcOpZGlhdGVtZW50IGxlIGNyw6luZWF1IMOgIGxhIGxpc3RlIGTigJlhdHRlbnRlIGRlcyB1cmdlbmNlcy4nLFxuICAgICAgYXV0aG9yOiAnRHIuIE1hcmMgVmFsZXR0ZScsXG4gICAgICByb2xlOiAnT3N0w6lvcGF0aGUgRC5PLiAmIENvLWZvbmRhdGV1cidcbiAgICB9XG4gIH1cbl07XG5cbmV4cG9ydCBjb25zdCBBR0VOQ1lfU1RBUlRVUF9HVUlERSA9IHtcbiAgdGl0bGU6ICdDb21tZW50IGTDqW1hcnJlciB1bmUgb2ZmcmUgZOKAmUFnZW50IElBIHBvdXIgUE1FIHNhbnMgY29kZXInLFxuICBzdWJ0aXRsZTogJ0xhIGRlbWFuZGUgZGVzIHBldGl0ZXMgZW50cmVwcmlzZXMgZXhwbG9zZS4gVm9pY2kgbGUgbW9kw6hsZSBk4oCZYWZmYWlyZXMgw6lwcm91dsOpIHBvdXIgdmVuZHJlIGV0IGTDqXBsb3llciBjZXMgYWdlbnRzIGVuIHRhbnQgcXVlIGNvbnN1bHRhbnQgb3UgYWdlbmNlLicsXG4gIHN0ZXBzOiBbXG4gICAge1xuICAgICAgbnVtOiAnMDEnLFxuICAgICAgdGl0bGU6ICdDaWJsZXIgdW5lIG5pY2hlIG3DqXRpZXIgcHLDqWNpc2UnLFxuICAgICAgZGVzYzogJ05lIHZlbmRleiBwYXMgXCJkZSBs4oCZSUFcIiBnw6luw6lyYWxpc3RlLiBWZW5kZXogXCJMZSBzdGFuZGFyZCB0w6lsw6lwaG9uaXF1ZSBldCBkZXZpcyAyNC83IHBvdXIgYXJ0aXNhbnMgw6lsZWN0cmljaWVuc1wiIG91IFwiTOKAmWFjY8OpbMOpcmF0ZXVyIGRlIHJlY291dnJlbWVudCBwb3VyIGNhYmluZXRzIGRlIGNvbnNlaWxcIi4gTGVzIFBNRSBhY2jDqHRlbnQgdW4gcsOpc3VsdGF0IGTigJlhZmZhaXJlcywgcGFzIHVuIG1vZMOobGUgZGUgbGFuZ2FnZS4nXG4gICAgfSxcbiAgICB7XG4gICAgICBudW06ICcwMicsXG4gICAgICB0aXRsZTogJ01hw650cmlzZXIgbGEgc3RhY2sgbm8tY29kZSBmb25kYW1lbnRhbGUnLFxuICAgICAgZGVzYzogJ1ZvdXMgbuKAmWF2ZXogYmVzb2luIHF1ZSBkZSAzIGJyaXF1ZXMgOiBNYWtlLmNvbSAob3UgbjhuKSBwb3VyIGxhIHBsb21iZXJpZSBk4oCZYXV0b21hdGlzYXRpb24sIGzigJlBUEkgR2VtaW5pIDIuNSBGbGFzaCBwb3VyIGxhIHB1aXNzYW5jZSBk4oCZYW5hbHlzZSBldCBkZSByw6lkYWN0aW9uLCBldCB1biBjb25uZWN0ZXVyIG3DqXRpZXIgKFdoYXRzQXBwIENsb3VkIEFQSSwgUGVubnlsYW5lLCBHb29nbGUgQ2FsZW5kYXIpLidcbiAgICB9LFxuICAgIHtcbiAgICAgIG51bTogJzAzJyxcbiAgICAgIHRpdGxlOiAnTGUgbW9kw6hsZSBkZSB0YXJpZmljYXRpb24gaWTDqWFsIHBvdXIgUE1FJyxcbiAgICAgIGRlc2M6ICdGYWN0dXJleiB1biBTZXR1cCBpbml0aWFsIGZvcmZhaXRhaXJlIChlbnRyZSAxIDUwMCDigqwgZXQgMyA1MDAg4oKsIHBhciBhZ2VudCBzZWxvbiBsYSBjb21wbGV4aXTDqSkgKyB1biBBYm9ubmVtZW50IG1lbnN1ZWwgZGUgbWFpbnRlbmFuY2UgZXQgc3VwZXJ2aXNpb24gKDI1MCDigqwgw6AgNjAwIOKCrCAvIG1vaXMgLyBQTUUpLidcbiAgICB9LFxuICAgIHtcbiAgICAgIG51bTogJzA0JyxcbiAgICAgIHRpdGxlOiAnR2FyYW50aXIgbGEgc8OpY3VyaXTDqSBldCBsYSBjb25mb3JtaXTDqSBSR1BEJyxcbiAgICAgIGRlc2M6ICdSYXNzdXJleiBpbW3DqWRpYXRlbWVudCBsZSBkaXJpZ2VhbnQgOiBsZXMgZG9ubsOpZXMgZGUgc2VzIGNsaWVudHMgcmVzdGVudCBzdXIgc2VzIHByb3ByZXMgY29tcHRlcyAoUGVubnlsYW5lLCBHb29nbGUgV29ya3NwYWNlKS4gQXVjdW4gZW50cmHDrm5lbWVudCBkZSBtb2TDqGxlIHB1YmxpYyBu4oCZZXN0IGVmZmVjdHXDqSBzdXIgc2VzIGRvY3VtZW50cyBzZW5zaWJsZXMuJ1xuICAgIH1cbiAgXVxufTtcbiJdfQ==