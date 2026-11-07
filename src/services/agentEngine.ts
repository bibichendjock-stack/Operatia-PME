export function processAgentSimulation(agentType, userMessage, sector, customKnowledge) {
	const lower = userMessage.toLowerCase();
	const timestamp = new Date().toLocaleTimeString("fr-FR", {
		hour: "2-digit",
		minute: "2-digit"
	});
	// 1. SERVICE CLIENT & SUPPORT
	if (agentType === "support") {
		const isUrgent = lower.includes("urgent") || lower.includes("fuite") || lower.includes("panne") || lower.includes("bloqu") || lower.includes("inadmissible") || lower.includes("scandale");
		const isOrderQuery = lower.includes("commande") || lower.includes("#cmd") || lower.includes("colis") || lower.includes("livraison");
		const isPricingQuery = lower.includes("tarif") || lower.includes("prix") || lower.includes("horaire") || lower.includes("ouvert") || lower.includes("devis");
		if (isUrgent) {
			const actions = [{
				id: `act_${Date.now()}_1`,
				tool: "Slack / SMS Twilio",
				actionName: "AlertUrgentManager",
				status: "executed",
				details: "Alerte immédiate envoyée sur le mobile du responsable d’astreinte avec la transcription du message.",
				timestamp,
				payload: {
					level: "P1_CRITIQUE",
					channel: "#urgences-astreinte",
					promptSnippet: userMessage.slice(0, 80)
				}
			}, {
				id: `act_${Date.now()}_2`,
				tool: "Notion CRM",
				actionName: "CreateUrgentTicket",
				status: "executed",
				details: "Ticket SAV #URG-902 créé avec étiquette Priorité Haute.",
				timestamp
			}];
			return {
				message: "J’ai bien pris note de votre message et je comprends parfaitement l’urgence de la situation. J’ai immédiatement alerté notre responsable d’astreinte sur son mobile prioritaire. Un membre de notre équipe va vous rappeler par téléphone d’ici 15 à 30 minutes au numéro associé à cette conversation pour organiser l’intervention.",
				actions,
				entities: {
					intent: "Intervention urgente / Réclamation prioritaire",
					urgency: "Urgente",
					notes: "Transfert au technicien d’astreinte effectué."
				}
			};
		}
		if (isOrderQuery) {
			const actions = [{
				id: `act_${Date.now()}_1`,
				tool: "Airtable / ERP PME",
				actionName: "QueryOrderTracking",
				status: "executed",
				details: "Recherche du numéro de dossier dans le système logistique.",
				timestamp,
				payload: {
					status: "En cours d’acheminement",
					transporteur: "Chronopost",
					etd: "Demain avant 13h"
				}
			}];
			return {
				message: "Merci pour votre message ! J’ai vérifié votre dossier dans notre système : votre commande a été préparée et remise à notre transporteur partenaire. La livraison est confirmée pour demain avant 13h00 à votre adresse. Vous recevrez également un SMS de confirmation avec le créneau précis d’une heure dès demain matin.",
				actions,
				entities: {
					intent: "Suivi de commande / expédition",
					urgency: "Moyenne",
					notes: "Statut vérifié avec succès."
				}
			};
		}
		// Default Support FAQ query
		const actions = [{
			id: `act_${Date.now()}_1`,
			tool: "Notion Knowledge Base",
			actionName: "SemanticFAQMatch",
			status: "executed",
			details: "Correspondance trouvée dans la section \"Horaires & Conditions d’Intervention\".",
			timestamp
		}];
		const contextKnowledge = customKnowledge ? ` (Note de votre base : ${customKnowledge})` : "";
		return {
			message: `Bonjour ! Nos équipes sont disponibles du lundi au vendredi de 8h00 à 18h30. Pour toute demande standard, nous établissons un devis clair et gratuit sous 24 à 48 heures ouvrées${contextKnowledge}. Souhaitez-vous que nous convenions d’un créneau d’appel ou préférez-vous nous détailler votre projet directement ici ?`,
			actions,
			entities: {
				intent: "Renseignement général / Tarifs et Horaires",
				urgency: "Basse",
				notes: "Informations de base fournies."
			}
		};
	}
	// 2. FACTURATION & RELANCES D'IMPAYÉS
	if (agentType === "invoicing") {
		const isExtensionRequest = lower.includes("délai") || lower.includes("fois") || lower.includes("différé") || lower.includes("échéancier") || lower.includes("trésorerie") || lower.includes("décalage");
		const isNewDraft = lower.includes("devis") || lower.includes("acompte") || lower.includes("nouveau") || lower.includes("créer") || lower.includes("valider");
		if (isExtensionRequest) {
			const actions = [{
				id: `act_${Date.now()}_1`,
				tool: "Pennylane API",
				actionName: "ProposePaymentPlan",
				status: "executed",
				details: "Échéancier en 2 versements (50% immédiat / 50% à 30 jours) enregistré en statut \"Accord de principe\".",
				timestamp,
				payload: {
					splitCount: 2,
					firstDue: "Immédiat",
					secondDue: "+30 jours"
				}
			}, {
				id: `act_${Date.now()}_2`,
				tool: "Stripe Invoicing",
				actionName: "GenerateSplitLinks",
				status: "executed",
				details: "Deux liens sécurisés de virement/CB générés et attachés à la fiche.",
				timestamp
			}];
			return {
				message: "Merci pour votre transparence concernant ce décalage temporaire. Nous acceptons volontiers de formaliser un étalement en deux versements : un premier versement de 50% sous 48h, et le solde de 50% à 30 jours. Voici le premier lien de règlement sécurisé par carte ou virement direct. Dès réception du premier virement, votre compte sera mis à jour sans frais de pénalité.",
				actions,
				entities: {
					intent: "Demande d’échelonnement de paiement",
					urgency: "Moyenne",
					notes: "Protocole amiable validé sous réserve de versement du 1er acompte."
				}
			};
		}
		if (isNewDraft) {
			const actions = [{
				id: `act_${Date.now()}_1`,
				tool: "Pennylane / Stripe",
				actionName: "CreateDraftInvoice",
				status: "executed",
				details: "Facture d’acompte de 30% calculée et enregistrée en brouillon prête à l’envoi.",
				timestamp,
				payload: {
					acompteTaux: "30%",
					tva: "20%",
					statut: "Brouillon validé"
				}
			}];
			return {
				message: "C’est noté ! J’ai calculé et généré le brouillon de la facture d’acompte correspondante sur votre logiciel de facturation. Le document intègre automatiquement vos coordonnées bancaires, la mention légale et le lien Stripe de règlement en 1 clic. Souhaitez-vous que je l’envoie directement au client ou préférez-vous le vérifier d’abord ?",
				actions,
				actions_pending: true,
				entities: {
					intent: "Création facture d’acompte / Devis accepté",
					urgency: "Basse",
					amount: "Acompte 30% généré",
					notes: "Prêt pour validation finale."
				}
			};
		}
		// Default: Relance de facture impayée
		const actions = [
			{
				id: `act_${Date.now()}_1`,
				tool: "Pennylane",
				actionName: "FetchInvoiceDetails",
				status: "executed",
				details: "Facture retrouvée dans la base de données comptable.",
				timestamp
			},
			{
				id: `act_${Date.now()}_2`,
				tool: "Stripe Pay",
				actionName: "Generate1ClickPaymentLink",
				status: "executed",
				details: "Lien direct de règlement sans friction créé.",
				timestamp
			},
			{
				id: `act_${Date.now()}_3`,
				tool: "Airtable Audit",
				actionName: "LogReminderEntry",
				status: "executed",
				details: "Relance Palier 1 consignée dans le journal d’audit.",
				timestamp
			}
		];
		return {
			message: "Bonjour. Sauf erreur ou virement croisé de votre part, nous constatons que la facture mentionnée est arrivée à son terme de règlement. Pour vous éviter tout contretemps administratif, vous pouvez régler cette facture en quelques secondes par carte ou virement instantané via le lien direct sécurisé. Le duplicata PDF reste disponible en pièce jointe. Si le règlement a déjà été émis, merci de ne pas tenir compte de ce rappel.",
			actions,
			entities: {
				intent: "Relance diplomatique de facture échue",
				urgency: "Moyenne",
				notes: "Email + lien de paiement Stripe direct préparés."
			}
		};
	}
	// 3. PRISE DE RENDEZ-VOUS & QUALIFICATION
	if (agentType === "scheduling") {
		const isReschedule = lower.includes("décaler") || lower.includes("report") || lower.includes("annuler") || lower.includes("empêchement");
		if (isReschedule) {
			const actions = [{
				id: `act_${Date.now()}_1`,
				tool: "Google Calendar API",
				actionName: "FreePreviousSlot",
				status: "executed",
				details: "Ancien créneau libéré avec succès dans l’agenda partagé.",
				timestamp
			}, {
				id: `act_${Date.now()}_2`,
				tool: "Google Calendar API",
				actionName: "FindAvailableSlots",
				status: "executed",
				details: "Créneaux disponibles détectés : Vendredi à 14h30 et 16h00.",
				timestamp
			}];
			return {
				message: "Bien reçu, nous comprenons tout à fait ! Votre ancien créneau a été libéré. Pour ce vendredi, notre responsable dispose de deux disponibilités : à 14h30 ou à 16h00. Lequel de ces deux horaires vous conviendrait le mieux pour finaliser le report ?",
				actions,
				entities: {
					intent: "Report de rendez-vous",
					urgency: "Moyenne",
					requestedDate: "Vendredi après-midi",
					notes: "En attente du choix de créneau du client."
				}
			};
		}
		// Default booking flow
		const actions = [{
			id: `act_${Date.now()}_1`,
			tool: "Google Calendar / Cal.com",
			actionName: "CheckTeamAvailability",
			status: "executed",
			details: "2 créneaux d’intervention de 45 minutes identifiés sans conflit.",
			timestamp
		}, {
			id: `act_${Date.now()}_2`,
			tool: "Twilio SMS",
			actionName: "StageReminderWorkflow",
			status: "executed",
			details: "Séquence de rappel SMS anti-no-show pré-programmée.",
			timestamp
		}];
		return {
			message: "Avec grand plaisir ! Pour vous proposer le créneau le plus adapté et préparer au mieux la visite de notre technicien : pouvez-vous me confirmer la ville de l’intervention ainsi qu’un numéro de téléphone pour le SMS de confirmation ? Nous avons des disponibilités ce Jeudi à 10h00 ou ce Vendredi à 14h30.",
			actions,
			entities: {
				intent: "Prise de rendez-vous & Qualification express",
				urgency: "Moyenne",
				requestedDate: "Jeudi 10h ou Vendredi 14h30",
				notes: "Coordonnées en cours de recueil."
			}
		};
	}
	// 4. SUIVI DE PROSPECTS (LEAD NURTURING & VENTE)
	const isQuoteFollowup = lower.includes("devis") || lower.includes("#dev") || lower.includes("envoyé") || lower.includes("sans réponse");
	const isHotLead = lower.includes("salariés") || lower.includes("véhicules") || lower.includes("budget validé") || lower.includes("urgent") || lower.includes("immédiat");
	if (isHotLead) {
		const actions = [
			{
				id: `act_${Date.now()}_1`,
				tool: "Gemini AI Lead Scorer",
				actionName: "CalculateLeadScore",
				status: "executed",
				details: "Score attribué : 94/100 (Profil Décideur + Budget Validé + Délai < 1 mois).",
				timestamp,
				payload: {
					score: 94,
					tier: "LEAD_CHAUD_PRIORITAIRE"
				}
			},
			{
				id: `act_${Date.now()}_2`,
				tool: "HubSpot / Pipedrive CRM",
				actionName: "CreateQualifiedDeal",
				status: "executed",
				details: "Opportunité créée dans le pipeline \"Devis Chauds\" assignée au commercial référent.",
				timestamp
			},
			{
				id: `act_${Date.now()}_3`,
				tool: "Slack In-App Notification",
				actionName: "NotifySalesMobile",
				status: "executed",
				details: "Notification push envoyée sur l’application Slack de l’équipe commerciale.",
				timestamp
			}
		];
		return {
			message: "Bonjour et merci pour votre intérêt ! Votre projet correspond exactement à nos réalisations récentes pour des entreprises de taille similaire. Compte tenu de votre échéance serrée, notre directeur de projet est prévenu et souhaite vous consacrer un échange de cadrage de 20 minutes dès demain pour vous présenter notre méthodologie et vous adresser une proposition tarifaire ferme. Quel créneau vous conviendrait le mieux entre 11h et 15h ?",
			actions,
			entities: {
				intent: "Nouveau lead entrant haute valeur (Lead Chaud)",
				urgency: "Haute",
				notes: "Score 94/100. Commercial prévenu pour contact immédiat."
			}
		};
	}
	// Regular lead followup
	const actions = [{
		id: `act_${Date.now()}_1`,
		tool: "HubSpot CRM",
		actionName: "LogFollowupTouchpoint",
		status: "executed",
		details: "Relance J+4 enregistrée sur la fiche affaire.",
		timestamp
	}, {
		id: `act_${Date.now()}_2`,
		tool: "Lemlist / Gmail",
		actionName: "DraftPersonalizedFollowup",
		status: "executed",
		details: "Email de suivi prêt sans pression commerciale agressive.",
		timestamp
	}];
	return {
		message: "Bonjour, je me permets de revenir vers vous pour prendre des nouvelles de votre réflexion suite à la proposition transmise il y a quelques jours. Avez-vous eu l’occasion de la parcourir ? Si certains points techniques ou budgétaires nécessitent des ajustements pour coller parfaitement à vos priorités actuelles, nous pouvons en rediscuter très simplement.",
		actions,
		entities: {
			intent: "Relance courtoise de devis sans retour (Nurturing)",
			urgency: "Basse",
			notes: "Approche consultative orientée valeur."
		}
	};
}

//# sourceMappingURL=data:application/json;base64,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QVk7SUFDWixRQUFRO0lBQ1IsU0FBUztJQUNUO0lBQ0EsU0FBUztLQUFFLE9BQU87S0FBSSxNQUFNO0lBQXlCO0dBQ3ZEO0dBQ0E7SUFDRSxJQUFJLE9BQU8sS0FBSyxJQUFJLEVBQUU7SUFDdEIsTUFBTTtJQUNOLFlBQVk7SUFDWixRQUFRO0lBQ1IsU0FBUztJQUNUO0dBQ0Y7R0FDQTtJQUNFLElBQUksT0FBTyxLQUFLLElBQUksRUFBRTtJQUN0QixNQUFNO0lBQ04sWUFBWTtJQUNaLFFBQVE7SUFDUixTQUFTO0lBQ1Q7R0FDRjtFQUNGO0VBRUEsT0FBTztHQUNMLFNBQVM7R0FDVDtHQUNBLFVBQVU7SUFDUixRQUFRO0lBQ1IsU0FBUztJQUNULE9BQU87R0FDVDtFQUNGO0NBQ0Y7O0NBR0EsTUFBTSxVQUF5QixDQUM3QjtFQUNFLElBQUksT0FBTyxLQUFLLElBQUksRUFBRTtFQUN0QixNQUFNO0VBQ04sWUFBWTtFQUNaLFFBQVE7RUFDUixTQUFTO0VBQ1Q7Q0FDRixHQUNBO0VBQ0UsSUFBSSxPQUFPLEtBQUssSUFBSSxFQUFFO0VBQ3RCLE1BQU07RUFDTixZQUFZO0VBQ1osUUFBUTtFQUNSLFNBQVM7RUFDVDtDQUNGLENBQ0Y7Q0FFQSxPQUFPO0VBQ0wsU0FBUztFQUNUO0VBQ0EsVUFBVTtHQUNSLFFBQVE7R0FDUixTQUFTO0dBQ1QsT0FBTztFQUNUO0NBQ0Y7QUFDRiIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJhZ2VudEVuZ2luZS50cyJdLCJ2ZXJzaW9uIjozLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2VudFR5cGUsIEFnZW50QWN0aW9uLCBFeHRyYWN0ZWRFbnRpdGllcywgQ2hhdE1lc3NhZ2UgfSBmcm9tICcuLi90eXBlcyc7XG5cbmludGVyZmFjZSBQcm9jZXNzUmVzcG9uc2Uge1xuICBtZXNzYWdlOiBzdHJpbmc7XG4gIGFjdGlvbnM6IEFnZW50QWN0aW9uW107XG4gIGVudGl0aWVzOiBFeHRyYWN0ZWRFbnRpdGllcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2Nlc3NBZ2VudFNpbXVsYXRpb24oXG4gIGFnZW50VHlwZTogQWdlbnRUeXBlLFxuICB1c2VyTWVzc2FnZTogc3RyaW5nLFxuICBzZWN0b3I6IHN0cmluZyxcbiAgY3VzdG9tS25vd2xlZGdlPzogc3RyaW5nXG4pOiBQcm9jZXNzUmVzcG9uc2Uge1xuICBjb25zdCBsb3dlciA9IHVzZXJNZXNzYWdlLnRvTG93ZXJDYXNlKCk7XG4gIGNvbnN0IHRpbWVzdGFtcCA9IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCdmci1GUicsIHsgaG91cjogJzItZGlnaXQnLCBtaW51dGU6ICcyLWRpZ2l0JyB9KTtcblxuICAvLyAxLiBTRVJWSUNFIENMSUVOVCAmIFNVUFBPUlRcbiAgaWYgKGFnZW50VHlwZSA9PT0gJ3N1cHBvcnQnKSB7XG4gICAgY29uc3QgaXNVcmdlbnQgPSBsb3dlci5pbmNsdWRlcygndXJnZW50JykgfHwgbG93ZXIuaW5jbHVkZXMoJ2Z1aXRlJykgfHwgbG93ZXIuaW5jbHVkZXMoJ3Bhbm5lJykgfHwgbG93ZXIuaW5jbHVkZXMoJ2Jsb3F1JykgfHwgbG93ZXIuaW5jbHVkZXMoJ2luYWRtaXNzaWJsZScpIHx8IGxvd2VyLmluY2x1ZGVzKCdzY2FuZGFsZScpO1xuICAgIGNvbnN0IGlzT3JkZXJRdWVyeSA9IGxvd2VyLmluY2x1ZGVzKCdjb21tYW5kZScpIHx8IGxvd2VyLmluY2x1ZGVzKCcjY21kJykgfHwgbG93ZXIuaW5jbHVkZXMoJ2NvbGlzJykgfHwgbG93ZXIuaW5jbHVkZXMoJ2xpdnJhaXNvbicpO1xuICAgIGNvbnN0IGlzUHJpY2luZ1F1ZXJ5ID0gbG93ZXIuaW5jbHVkZXMoJ3RhcmlmJykgfHwgbG93ZXIuaW5jbHVkZXMoJ3ByaXgnKSB8fCBsb3dlci5pbmNsdWRlcygnaG9yYWlyZScpIHx8IGxvd2VyLmluY2x1ZGVzKCdvdXZlcnQnKSB8fCBsb3dlci5pbmNsdWRlcygnZGV2aXMnKTtcblxuICAgIGlmIChpc1VyZ2VudCkge1xuICAgICAgY29uc3QgYWN0aW9uczogQWdlbnRBY3Rpb25bXSA9IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiBgYWN0XyR7RGF0ZS5ub3coKX1fMWAsXG4gICAgICAgICAgdG9vbDogJ1NsYWNrIC8gU01TIFR3aWxpbycsXG4gICAgICAgICAgYWN0aW9uTmFtZTogJ0FsZXJ0VXJnZW50TWFuYWdlcicsXG4gICAgICAgICAgc3RhdHVzOiAnZXhlY3V0ZWQnLFxuICAgICAgICAgIGRldGFpbHM6ICdBbGVydGUgaW1tw6lkaWF0ZSBlbnZvecOpZSBzdXIgbGUgbW9iaWxlIGR1IHJlc3BvbnNhYmxlIGTigJlhc3RyZWludGUgYXZlYyBsYSB0cmFuc2NyaXB0aW9uIGR1IG1lc3NhZ2UuJyxcbiAgICAgICAgICB0aW1lc3RhbXAsXG4gICAgICAgICAgcGF5bG9hZDogeyBsZXZlbDogJ1AxX0NSSVRJUVVFJywgY2hhbm5lbDogJyN1cmdlbmNlcy1hc3RyZWludGUnLCBwcm9tcHRTbmlwcGV0OiB1c2VyTWVzc2FnZS5zbGljZSgwLCA4MCkgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IGBhY3RfJHtEYXRlLm5vdygpfV8yYCxcbiAgICAgICAgICB0b29sOiAnTm90aW9uIENSTScsXG4gICAgICAgICAgYWN0aW9uTmFtZTogJ0NyZWF0ZVVyZ2VudFRpY2tldCcsXG4gICAgICAgICAgc3RhdHVzOiAnZXhlY3V0ZWQnLFxuICAgICAgICAgIGRldGFpbHM6ICdUaWNrZXQgU0FWICNVUkctOTAyIGNyw6nDqSBhdmVjIMOpdGlxdWV0dGUgUHJpb3JpdMOpIEhhdXRlLicsXG4gICAgICAgICAgdGltZXN0YW1wXG4gICAgICAgIH1cbiAgICAgIF07XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIG1lc3NhZ2U6IFwiSuKAmWFpIGJpZW4gcHJpcyBub3RlIGRlIHZvdHJlIG1lc3NhZ2UgZXQgamUgY29tcHJlbmRzIHBhcmZhaXRlbWVudCBs4oCZdXJnZW5jZSBkZSBsYSBzaXR1YXRpb24uIErigJlhaSBpbW3DqWRpYXRlbWVudCBhbGVydMOpIG5vdHJlIHJlc3BvbnNhYmxlIGTigJlhc3RyZWludGUgc3VyIHNvbiBtb2JpbGUgcHJpb3JpdGFpcmUuIFVuIG1lbWJyZSBkZSBub3RyZSDDqXF1aXBlIHZhIHZvdXMgcmFwcGVsZXIgcGFyIHTDqWzDqXBob25lIGTigJlpY2kgMTUgw6AgMzAgbWludXRlcyBhdSBudW3DqXJvIGFzc29jacOpIMOgIGNldHRlIGNvbnZlcnNhdGlvbiBwb3VyIG9yZ2FuaXNlciBs4oCZaW50ZXJ2ZW50aW9uLlwiLFxuICAgICAgICBhY3Rpb25zLFxuICAgICAgICBlbnRpdGllczoge1xuICAgICAgICAgIGludGVudDogJ0ludGVydmVudGlvbiB1cmdlbnRlIC8gUsOpY2xhbWF0aW9uIHByaW9yaXRhaXJlJyxcbiAgICAgICAgICB1cmdlbmN5OiAnVXJnZW50ZScsXG4gICAgICAgICAgbm90ZXM6ICdUcmFuc2ZlcnQgYXUgdGVjaG5pY2llbiBk4oCZYXN0cmVpbnRlIGVmZmVjdHXDqS4nXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKGlzT3JkZXJRdWVyeSkge1xuICAgICAgY29uc3QgYWN0aW9uczogQWdlbnRBY3Rpb25bXSA9IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiBgYWN0XyR7RGF0ZS5ub3coKX1fMWAsXG4gICAgICAgICAgdG9vbDogJ0FpcnRhYmxlIC8gRVJQIFBNRScsXG4gICAgICAgICAgYWN0aW9uTmFtZTogJ1F1ZXJ5T3JkZXJUcmFja2luZycsXG4gICAgICAgICAgc3RhdHVzOiAnZXhlY3V0ZWQnLFxuICAgICAgICAgIGRldGFpbHM6ICdSZWNoZXJjaGUgZHUgbnVtw6lybyBkZSBkb3NzaWVyIGRhbnMgbGUgc3lzdMOobWUgbG9naXN0aXF1ZS4nLFxuICAgICAgICAgIHRpbWVzdGFtcCxcbiAgICAgICAgICBwYXlsb2FkOiB7IHN0YXR1czogJ0VuIGNvdXJzIGTigJlhY2hlbWluZW1lbnQnLCB0cmFuc3BvcnRldXI6ICdDaHJvbm9wb3N0JywgZXRkOiAnRGVtYWluIGF2YW50IDEzaCcgfVxuICAgICAgICB9XG4gICAgICBdO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBtZXNzYWdlOiBcIk1lcmNpIHBvdXIgdm90cmUgbWVzc2FnZSAhIErigJlhaSB2w6lyaWZpw6kgdm90cmUgZG9zc2llciBkYW5zIG5vdHJlIHN5c3TDqG1lIDogdm90cmUgY29tbWFuZGUgYSDDqXTDqSBwcsOpcGFyw6llIGV0IHJlbWlzZSDDoCBub3RyZSB0cmFuc3BvcnRldXIgcGFydGVuYWlyZS4gTGEgbGl2cmFpc29uIGVzdCBjb25maXJtw6llIHBvdXIgZGVtYWluIGF2YW50IDEzaDAwIMOgIHZvdHJlIGFkcmVzc2UuIFZvdXMgcmVjZXZyZXogw6lnYWxlbWVudCB1biBTTVMgZGUgY29uZmlybWF0aW9uIGF2ZWMgbGUgY3LDqW5lYXUgcHLDqWNpcyBk4oCZdW5lIGhldXJlIGTDqHMgZGVtYWluIG1hdGluLlwiLFxuICAgICAgICBhY3Rpb25zLFxuICAgICAgICBlbnRpdGllczoge1xuICAgICAgICAgIGludGVudDogJ1N1aXZpIGRlIGNvbW1hbmRlIC8gZXhww6lkaXRpb24nLFxuICAgICAgICAgIHVyZ2VuY3k6ICdNb3llbm5lJyxcbiAgICAgICAgICBub3RlczogJ1N0YXR1dCB2w6lyaWZpw6kgYXZlYyBzdWNjw6hzLidcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IFN1cHBvcnQgRkFRIHF1ZXJ5XG4gICAgY29uc3QgYWN0aW9uczogQWdlbnRBY3Rpb25bXSA9IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6IGBhY3RfJHtEYXRlLm5vdygpfV8xYCxcbiAgICAgICAgdG9vbDogJ05vdGlvbiBLbm93bGVkZ2UgQmFzZScsXG4gICAgICAgIGFjdGlvbk5hbWU6ICdTZW1hbnRpY0ZBUU1hdGNoJyxcbiAgICAgICAgc3RhdHVzOiAnZXhlY3V0ZWQnLFxuICAgICAgICBkZXRhaWxzOiAnQ29ycmVzcG9uZGFuY2UgdHJvdXbDqWUgZGFucyBsYSBzZWN0aW9uIFwiSG9yYWlyZXMgJiBDb25kaXRpb25zIGTigJlJbnRlcnZlbnRpb25cIi4nLFxuICAgICAgICB0aW1lc3RhbXBcbiAgICAgIH1cbiAgICBdO1xuXG4gICAgY29uc3QgY29udGV4dEtub3dsZWRnZSA9IGN1c3RvbUtub3dsZWRnZSA/IGAgKE5vdGUgZGUgdm90cmUgYmFzZSA6ICR7Y3VzdG9tS25vd2xlZGdlfSlgIDogJyc7XG5cbiAgICByZXR1cm4ge1xuICAgICAgbWVzc2FnZTogYEJvbmpvdXIgISBOb3Mgw6lxdWlwZXMgc29udCBkaXNwb25pYmxlcyBkdSBsdW5kaSBhdSB2ZW5kcmVkaSBkZSA4aDAwIMOgIDE4aDMwLiBQb3VyIHRvdXRlIGRlbWFuZGUgc3RhbmRhcmQsIG5vdXMgw6l0YWJsaXNzb25zIHVuIGRldmlzIGNsYWlyIGV0IGdyYXR1aXQgc291cyAyNCDDoCA0OCBoZXVyZXMgb3V2csOpZXMke2NvbnRleHRLbm93bGVkZ2V9LiBTb3VoYWl0ZXotdm91cyBxdWUgbm91cyBjb252ZW5pb25zIGTigJl1biBjcsOpbmVhdSBk4oCZYXBwZWwgb3UgcHLDqWbDqXJlei12b3VzIG5vdXMgZMOpdGFpbGxlciB2b3RyZSBwcm9qZXQgZGlyZWN0ZW1lbnQgaWNpID9gLFxuICAgICAgYWN0aW9ucyxcbiAgICAgIGVudGl0aWVzOiB7XG4gICAgICAgIGludGVudDogJ1JlbnNlaWduZW1lbnQgZ8OpbsOpcmFsIC8gVGFyaWZzIGV0IEhvcmFpcmVzJyxcbiAgICAgICAgdXJnZW5jeTogJ0Jhc3NlJyxcbiAgICAgICAgbm90ZXM6ICdJbmZvcm1hdGlvbnMgZGUgYmFzZSBmb3Vybmllcy4nXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIDIuIEZBQ1RVUkFUSU9OICYgUkVMQU5DRVMgRCdJTVBBWcOJU1xuICBpZiAoYWdlbnRUeXBlID09PSAnaW52b2ljaW5nJykge1xuICAgIGNvbnN0IGlzRXh0ZW5zaW9uUmVxdWVzdCA9IGxvd2VyLmluY2x1ZGVzKCdkw6lsYWknKSB8fCBsb3dlci5pbmNsdWRlcygnZm9pcycpIHx8IGxvd2VyLmluY2x1ZGVzKCdkaWZmw6lyw6knKSB8fCBsb3dlci5pbmNsdWRlcygnw6ljaMOpYW5jaWVyJykgfHwgbG93ZXIuaW5jbHVkZXMoJ3Ryw6lzb3JlcmllJykgfHwgbG93ZXIuaW5jbHVkZXMoJ2TDqWNhbGFnZScpO1xuICAgIGNvbnN0IGlzTmV3RHJhZnQgPSBsb3dlci5pbmNsdWRlcygnZGV2aXMnKSB8fCBsb3dlci5pbmNsdWRlcygnYWNvbXB0ZScpIHx8IGxvd2VyLmluY2x1ZGVzKCdub3V2ZWF1JykgfHwgbG93ZXIuaW5jbHVkZXMoJ2Nyw6llcicpIHx8IGxvd2VyLmluY2x1ZGVzKCd2YWxpZGVyJyk7XG5cbiAgICBpZiAoaXNFeHRlbnNpb25SZXF1ZXN0KSB7XG4gICAgICBjb25zdCBhY3Rpb25zOiBBZ2VudEFjdGlvbltdID0gW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6IGBhY3RfJHtEYXRlLm5vdygpfV8xYCxcbiAgICAgICAgICB0b29sOiAnUGVubnlsYW5lIEFQSScsXG4gICAgICAgICAgYWN0aW9uTmFtZTogJ1Byb3Bvc2VQYXltZW50UGxhbicsXG4gICAgICAgICAgc3RhdHVzOiAnZXhlY3V0ZWQnLFxuICAgICAgICAgIGRldGFpbHM6ICfDiWNow6lhbmNpZXIgZW4gMiB2ZXJzZW1lbnRzICg1MCUgaW1tw6lkaWF0IC8gNTAlIMOgIDMwIGpvdXJzKSBlbnJlZ2lzdHLDqSBlbiBzdGF0dXQgXCJBY2NvcmQgZGUgcHJpbmNpcGVcIi4nLFxuICAgICAgICAgIHRpbWVzdGFtcCxcbiAgICAgICAgICBwYXlsb2FkOiB7IHNwbGl0Q291bnQ6IDIsIGZpcnN0RHVlOiAnSW1tw6lkaWF0Jywgc2Vjb25kRHVlOiAnKzMwIGpvdXJzJyB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogYGFjdF8ke0RhdGUubm93KCl9XzJgLFxuICAgICAgICAgIHRvb2w6ICdTdHJpcGUgSW52b2ljaW5nJyxcbiAgICAgICAgICBhY3Rpb25OYW1lOiAnR2VuZXJhdGVTcGxpdExpbmtzJyxcbiAgICAgICAgICBzdGF0dXM6ICdleGVjdXRlZCcsXG4gICAgICAgICAgZGV0YWlsczogJ0RldXggbGllbnMgc8OpY3VyaXPDqXMgZGUgdmlyZW1lbnQvQ0IgZ8OpbsOpcsOpcyBldCBhdHRhY2jDqXMgw6AgbGEgZmljaGUuJyxcbiAgICAgICAgICB0aW1lc3RhbXBcbiAgICAgICAgfVxuICAgICAgXTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbWVzc2FnZTogXCJNZXJjaSBwb3VyIHZvdHJlIHRyYW5zcGFyZW5jZSBjb25jZXJuYW50IGNlIGTDqWNhbGFnZSB0ZW1wb3JhaXJlLiBOb3VzIGFjY2VwdG9ucyB2b2xvbnRpZXJzIGRlIGZvcm1hbGlzZXIgdW4gw6l0YWxlbWVudCBlbiBkZXV4IHZlcnNlbWVudHMgOiB1biBwcmVtaWVyIHZlcnNlbWVudCBkZSA1MCUgc291cyA0OGgsIGV0IGxlIHNvbGRlIGRlIDUwJSDDoCAzMCBqb3Vycy4gVm9pY2kgbGUgcHJlbWllciBsaWVuIGRlIHLDqGdsZW1lbnQgc8OpY3VyaXPDqSBwYXIgY2FydGUgb3UgdmlyZW1lbnQgZGlyZWN0LiBEw6hzIHLDqWNlcHRpb24gZHUgcHJlbWllciB2aXJlbWVudCwgdm90cmUgY29tcHRlIHNlcmEgbWlzIMOgIGpvdXIgc2FucyBmcmFpcyBkZSBww6luYWxpdMOpLlwiLFxuICAgICAgICBhY3Rpb25zLFxuICAgICAgICBlbnRpdGllczoge1xuICAgICAgICAgIGludGVudDogJ0RlbWFuZGUgZOKAmcOpY2hlbG9ubmVtZW50IGRlIHBhaWVtZW50JyxcbiAgICAgICAgICB1cmdlbmN5OiAnTW95ZW5uZScsXG4gICAgICAgICAgbm90ZXM6ICdQcm90b2NvbGUgYW1pYWJsZSB2YWxpZMOpIHNvdXMgcsOpc2VydmUgZGUgdmVyc2VtZW50IGR1IDFlciBhY29tcHRlLidcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAoaXNOZXdEcmFmdCkge1xuICAgICAgY29uc3QgYWN0aW9uczogQWdlbnRBY3Rpb25bXSA9IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiBgYWN0XyR7RGF0ZS5ub3coKX1fMWAsXG4gICAgICAgICAgdG9vbDogJ1Blbm55bGFuZSAvIFN0cmlwZScsXG4gICAgICAgICAgYWN0aW9uTmFtZTogJ0NyZWF0ZURyYWZ0SW52b2ljZScsXG4gICAgICAgICAgc3RhdHVzOiAnZXhlY3V0ZWQnLFxuICAgICAgICAgIGRldGFpbHM6ICdGYWN0dXJlIGTigJlhY29tcHRlIGRlIDMwJSBjYWxjdWzDqWUgZXQgZW5yZWdpc3Ryw6llIGVuIGJyb3VpbGxvbiBwcsOqdGUgw6AgbOKAmWVudm9pLicsXG4gICAgICAgICAgdGltZXN0YW1wLFxuICAgICAgICAgIHBheWxvYWQ6IHsgYWNvbXB0ZVRhdXg6ICczMCUnLCB0dmE6ICcyMCUnLCBzdGF0dXQ6ICdCcm91aWxsb24gdmFsaWTDqScgfVxuICAgICAgICB9XG4gICAgICBdO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBtZXNzYWdlOiBcIkPigJllc3Qgbm90w6kgISBK4oCZYWkgY2FsY3Vsw6kgZXQgZ8OpbsOpcsOpIGxlIGJyb3VpbGxvbiBkZSBsYSBmYWN0dXJlIGTigJlhY29tcHRlIGNvcnJlc3BvbmRhbnRlIHN1ciB2b3RyZSBsb2dpY2llbCBkZSBmYWN0dXJhdGlvbi4gTGUgZG9jdW1lbnQgaW50w6hncmUgYXV0b21hdGlxdWVtZW50IHZvcyBjb29yZG9ubsOpZXMgYmFuY2FpcmVzLCBsYSBtZW50aW9uIGzDqWdhbGUgZXQgbGUgbGllbiBTdHJpcGUgZGUgcsOoZ2xlbWVudCBlbiAxIGNsaWMuIFNvdWhhaXRlei12b3VzIHF1ZSBqZSBs4oCZZW52b2llIGRpcmVjdGVtZW50IGF1IGNsaWVudCBvdSBwcsOpZsOpcmV6LXZvdXMgbGUgdsOpcmlmaWVyIGTigJlhYm9yZCA/XCIsXG4gICAgICAgIGFjdGlvbnMsXG4gICAgICAgIGFjdGlvbnNfcGVuZGluZzogdHJ1ZSxcbiAgICAgICAgZW50aXRpZXM6IHtcbiAgICAgICAgICBpbnRlbnQ6ICdDcsOpYXRpb24gZmFjdHVyZSBk4oCZYWNvbXB0ZSAvIERldmlzIGFjY2VwdMOpJyxcbiAgICAgICAgICB1cmdlbmN5OiAnQmFzc2UnLFxuICAgICAgICAgIGFtb3VudDogJ0Fjb21wdGUgMzAlIGfDqW7DqXLDqScsXG4gICAgICAgICAgbm90ZXM6ICdQcsOqdCBwb3VyIHZhbGlkYXRpb24gZmluYWxlLidcbiAgICAgICAgfVxuICAgICAgfSBhcyBhbnk7XG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdDogUmVsYW5jZSBkZSBmYWN0dXJlIGltcGF5w6llXG4gICAgY29uc3QgYWN0aW9uczogQWdlbnRBY3Rpb25bXSA9IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6IGBhY3RfJHtEYXRlLm5vdygpfV8xYCxcbiAgICAgICAgdG9vbDogJ1Blbm55bGFuZScsXG4gICAgICAgIGFjdGlvbk5hbWU6ICdGZXRjaEludm9pY2VEZXRhaWxzJyxcbiAgICAgICAgc3RhdHVzOiAnZXhlY3V0ZWQnLFxuICAgICAgICBkZXRhaWxzOiAnRmFjdHVyZSByZXRyb3V2w6llIGRhbnMgbGEgYmFzZSBkZSBkb25uw6llcyBjb21wdGFibGUuJyxcbiAgICAgICAgdGltZXN0YW1wXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogYGFjdF8ke0RhdGUubm93KCl9XzJgLFxuICAgICAgICB0b29sOiAnU3RyaXBlIFBheScsXG4gICAgICAgIGFjdGlvbk5hbWU6ICdHZW5lcmF0ZTFDbGlja1BheW1lbnRMaW5rJyxcbiAgICAgICAgc3RhdHVzOiAnZXhlY3V0ZWQnLFxuICAgICAgICBkZXRhaWxzOiAnTGllbiBkaXJlY3QgZGUgcsOoZ2xlbWVudCBzYW5zIGZyaWN0aW9uIGNyw6nDqS4nLFxuICAgICAgICB0aW1lc3RhbXBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiBgYWN0XyR7RGF0ZS5ub3coKX1fM2AsXG4gICAgICAgIHRvb2w6ICdBaXJ0YWJsZSBBdWRpdCcsXG4gICAgICAgIGFjdGlvbk5hbWU6ICdMb2dSZW1pbmRlckVudHJ5JyxcbiAgICAgICAgc3RhdHVzOiAnZXhlY3V0ZWQnLFxuICAgICAgICBkZXRhaWxzOiAnUmVsYW5jZSBQYWxpZXIgMSBjb25zaWduw6llIGRhbnMgbGUgam91cm5hbCBk4oCZYXVkaXQuJyxcbiAgICAgICAgdGltZXN0YW1wXG4gICAgICB9XG4gICAgXTtcblxuICAgIHJldHVybiB7XG4gICAgICBtZXNzYWdlOiBcIkJvbmpvdXIuIFNhdWYgZXJyZXVyIG91IHZpcmVtZW50IGNyb2lzw6kgZGUgdm90cmUgcGFydCwgbm91cyBjb25zdGF0b25zIHF1ZSBsYSBmYWN0dXJlIG1lbnRpb25uw6llIGVzdCBhcnJpdsOpZSDDoCBzb24gdGVybWUgZGUgcsOoZ2xlbWVudC4gUG91ciB2b3VzIMOpdml0ZXIgdG91dCBjb250cmV0ZW1wcyBhZG1pbmlzdHJhdGlmLCB2b3VzIHBvdXZleiByw6lnbGVyIGNldHRlIGZhY3R1cmUgZW4gcXVlbHF1ZXMgc2Vjb25kZXMgcGFyIGNhcnRlIG91IHZpcmVtZW50IGluc3RhbnRhbsOpIHZpYSBsZSBsaWVuIGRpcmVjdCBzw6ljdXJpc8OpLiBMZSBkdXBsaWNhdGEgUERGIHJlc3RlIGRpc3BvbmlibGUgZW4gcGnDqGNlIGpvaW50ZS4gU2kgbGUgcsOoZ2xlbWVudCBhIGTDqWrDoCDDqXTDqSDDqW1pcywgbWVyY2kgZGUgbmUgcGFzIHRlbmlyIGNvbXB0ZSBkZSBjZSByYXBwZWwuXCIsXG4gICAgICBhY3Rpb25zLFxuICAgICAgZW50aXRpZXM6IHtcbiAgICAgICAgaW50ZW50OiAnUmVsYW5jZSBkaXBsb21hdGlxdWUgZGUgZmFjdHVyZSDDqWNodWUnLFxuICAgICAgICB1cmdlbmN5OiAnTW95ZW5uZScsXG4gICAgICAgIG5vdGVzOiAnRW1haWwgKyBsaWVuIGRlIHBhaWVtZW50IFN0cmlwZSBkaXJlY3QgcHLDqXBhcsOpcy4nXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIDMuIFBSSVNFIERFIFJFTkRFWi1WT1VTICYgUVVBTElGSUNBVElPTlxuICBpZiAoYWdlbnRUeXBlID09PSAnc2NoZWR1bGluZycpIHtcbiAgICBjb25zdCBpc1Jlc2NoZWR1bGUgPSBsb3dlci5pbmNsdWRlcygnZMOpY2FsZXInKSB8fCBsb3dlci5pbmNsdWRlcygncmVwb3J0JykgfHwgbG93ZXIuaW5jbHVkZXMoJ2FubnVsZXInKSB8fCBsb3dlci5pbmNsdWRlcygnZW1ww6pjaGVtZW50Jyk7XG5cbiAgICBpZiAoaXNSZXNjaGVkdWxlKSB7XG4gICAgICBjb25zdCBhY3Rpb25zOiBBZ2VudEFjdGlvbltdID0gW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6IGBhY3RfJHtEYXRlLm5vdygpfV8xYCxcbiAgICAgICAgICB0b29sOiAnR29vZ2xlIENhbGVuZGFyIEFQSScsXG4gICAgICAgICAgYWN0aW9uTmFtZTogJ0ZyZWVQcmV2aW91c1Nsb3QnLFxuICAgICAgICAgIHN0YXR1czogJ2V4ZWN1dGVkJyxcbiAgICAgICAgICBkZXRhaWxzOiAnQW5jaWVuIGNyw6luZWF1IGxpYsOpcsOpIGF2ZWMgc3VjY8OocyBkYW5zIGzigJlhZ2VuZGEgcGFydGFnw6kuJyxcbiAgICAgICAgICB0aW1lc3RhbXBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiBgYWN0XyR7RGF0ZS5ub3coKX1fMmAsXG4gICAgICAgICAgdG9vbDogJ0dvb2dsZSBDYWxlbmRhciBBUEknLFxuICAgICAgICAgIGFjdGlvbk5hbWU6ICdGaW5kQXZhaWxhYmxlU2xvdHMnLFxuICAgICAgICAgIHN0YXR1czogJ2V4ZWN1dGVkJyxcbiAgICAgICAgICBkZXRhaWxzOiAnQ3LDqW5lYXV4IGRpc3BvbmlibGVzIGTDqXRlY3TDqXMgOiBWZW5kcmVkaSDDoCAxNGgzMCBldCAxNmgwMC4nLFxuICAgICAgICAgIHRpbWVzdGFtcFxuICAgICAgICB9XG4gICAgICBdO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBtZXNzYWdlOiBcIkJpZW4gcmXDp3UsIG5vdXMgY29tcHJlbm9ucyB0b3V0IMOgIGZhaXQgISBWb3RyZSBhbmNpZW4gY3LDqW5lYXUgYSDDqXTDqSBsaWLDqXLDqS4gUG91ciBjZSB2ZW5kcmVkaSwgbm90cmUgcmVzcG9uc2FibGUgZGlzcG9zZSBkZSBkZXV4IGRpc3BvbmliaWxpdMOpcyA6IMOgIDE0aDMwIG91IMOgIDE2aDAwLiBMZXF1ZWwgZGUgY2VzIGRldXggaG9yYWlyZXMgdm91cyBjb252aWVuZHJhaXQgbGUgbWlldXggcG91ciBmaW5hbGlzZXIgbGUgcmVwb3J0ID9cIixcbiAgICAgICAgYWN0aW9ucyxcbiAgICAgICAgZW50aXRpZXM6IHtcbiAgICAgICAgICBpbnRlbnQ6ICdSZXBvcnQgZGUgcmVuZGV6LXZvdXMnLFxuICAgICAgICAgIHVyZ2VuY3k6ICdNb3llbm5lJyxcbiAgICAgICAgICByZXF1ZXN0ZWREYXRlOiAnVmVuZHJlZGkgYXByw6hzLW1pZGknLFxuICAgICAgICAgIG5vdGVzOiAnRW4gYXR0ZW50ZSBkdSBjaG9peCBkZSBjcsOpbmVhdSBkdSBjbGllbnQuJ1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIERlZmF1bHQgYm9va2luZyBmbG93XG4gICAgY29uc3QgYWN0aW9uczogQWdlbnRBY3Rpb25bXSA9IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6IGBhY3RfJHtEYXRlLm5vdygpfV8xYCxcbiAgICAgICAgdG9vbDogJ0dvb2dsZSBDYWxlbmRhciAvIENhbC5jb20nLFxuICAgICAgICBhY3Rpb25OYW1lOiAnQ2hlY2tUZWFtQXZhaWxhYmlsaXR5JyxcbiAgICAgICAgc3RhdHVzOiAnZXhlY3V0ZWQnLFxuICAgICAgICBkZXRhaWxzOiAnMiBjcsOpbmVhdXggZOKAmWludGVydmVudGlvbiBkZSA0NSBtaW51dGVzIGlkZW50aWZpw6lzIHNhbnMgY29uZmxpdC4nLFxuICAgICAgICB0aW1lc3RhbXBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiBgYWN0XyR7RGF0ZS5ub3coKX1fMmAsXG4gICAgICAgIHRvb2w6ICdUd2lsaW8gU01TJyxcbiAgICAgICAgYWN0aW9uTmFtZTogJ1N0YWdlUmVtaW5kZXJXb3JrZmxvdycsXG4gICAgICAgIHN0YXR1czogJ2V4ZWN1dGVkJyxcbiAgICAgICAgZGV0YWlsczogJ1PDqXF1ZW5jZSBkZSByYXBwZWwgU01TIGFudGktbm8tc2hvdyBwcsOpLXByb2dyYW1tw6llLicsXG4gICAgICAgIHRpbWVzdGFtcFxuICAgICAgfVxuICAgIF07XG5cbiAgICByZXR1cm4ge1xuICAgICAgbWVzc2FnZTogXCJBdmVjIGdyYW5kIHBsYWlzaXIgISBQb3VyIHZvdXMgcHJvcG9zZXIgbGUgY3LDqW5lYXUgbGUgcGx1cyBhZGFwdMOpIGV0IHByw6lwYXJlciBhdSBtaWV1eCBsYSB2aXNpdGUgZGUgbm90cmUgdGVjaG5pY2llbiA6IHBvdXZlei12b3VzIG1lIGNvbmZpcm1lciBsYSB2aWxsZSBkZSBs4oCZaW50ZXJ2ZW50aW9uIGFpbnNpIHF14oCZdW4gbnVtw6lybyBkZSB0w6lsw6lwaG9uZSBwb3VyIGxlIFNNUyBkZSBjb25maXJtYXRpb24gPyBOb3VzIGF2b25zIGRlcyBkaXNwb25pYmlsaXTDqXMgY2UgSmV1ZGkgw6AgMTBoMDAgb3UgY2UgVmVuZHJlZGkgw6AgMTRoMzAuXCIsXG4gICAgICBhY3Rpb25zLFxuICAgICAgZW50aXRpZXM6IHtcbiAgICAgICAgaW50ZW50OiAnUHJpc2UgZGUgcmVuZGV6LXZvdXMgJiBRdWFsaWZpY2F0aW9uIGV4cHJlc3MnLFxuICAgICAgICB1cmdlbmN5OiAnTW95ZW5uZScsXG4gICAgICAgIHJlcXVlc3RlZERhdGU6ICdKZXVkaSAxMGggb3UgVmVuZHJlZGkgMTRoMzAnLFxuICAgICAgICBub3RlczogJ0Nvb3Jkb25uw6llcyBlbiBjb3VycyBkZSByZWN1ZWlsLidcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gNC4gU1VJVkkgREUgUFJPU1BFQ1RTIChMRUFEIE5VUlRVUklORyAmIFZFTlRFKVxuICBjb25zdCBpc1F1b3RlRm9sbG93dXAgPSBsb3dlci5pbmNsdWRlcygnZGV2aXMnKSB8fCBsb3dlci5pbmNsdWRlcygnI2RldicpIHx8IGxvd2VyLmluY2x1ZGVzKCdlbnZvecOpJykgfHwgbG93ZXIuaW5jbHVkZXMoJ3NhbnMgcsOpcG9uc2UnKTtcbiAgY29uc3QgaXNIb3RMZWFkID0gbG93ZXIuaW5jbHVkZXMoJ3NhbGFyacOpcycpIHx8IGxvd2VyLmluY2x1ZGVzKCd2w6loaWN1bGVzJykgfHwgbG93ZXIuaW5jbHVkZXMoJ2J1ZGdldCB2YWxpZMOpJykgfHwgbG93ZXIuaW5jbHVkZXMoJ3VyZ2VudCcpIHx8IGxvd2VyLmluY2x1ZGVzKCdpbW3DqWRpYXQnKTtcblxuICBpZiAoaXNIb3RMZWFkKSB7XG4gICAgY29uc3QgYWN0aW9uczogQWdlbnRBY3Rpb25bXSA9IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6IGBhY3RfJHtEYXRlLm5vdygpfV8xYCxcbiAgICAgICAgdG9vbDogJ0dlbWluaSBBSSBMZWFkIFNjb3JlcicsXG4gICAgICAgIGFjdGlvbk5hbWU6ICdDYWxjdWxhdGVMZWFkU2NvcmUnLFxuICAgICAgICBzdGF0dXM6ICdleGVjdXRlZCcsXG4gICAgICAgIGRldGFpbHM6ICdTY29yZSBhdHRyaWJ1w6kgOiA5NC8xMDAgKFByb2ZpbCBEw6ljaWRldXIgKyBCdWRnZXQgVmFsaWTDqSArIETDqWxhaSA8IDEgbW9pcykuJyxcbiAgICAgICAgdGltZXN0YW1wLFxuICAgICAgICBwYXlsb2FkOiB7IHNjb3JlOiA5NCwgdGllcjogJ0xFQURfQ0hBVURfUFJJT1JJVEFJUkUnIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiBgYWN0XyR7RGF0ZS5ub3coKX1fMmAsXG4gICAgICAgIHRvb2w6ICdIdWJTcG90IC8gUGlwZWRyaXZlIENSTScsXG4gICAgICAgIGFjdGlvbk5hbWU6ICdDcmVhdGVRdWFsaWZpZWREZWFsJyxcbiAgICAgICAgc3RhdHVzOiAnZXhlY3V0ZWQnLFxuICAgICAgICBkZXRhaWxzOiAnT3Bwb3J0dW5pdMOpIGNyw6nDqWUgZGFucyBsZSBwaXBlbGluZSBcIkRldmlzIENoYXVkc1wiIGFzc2lnbsOpZSBhdSBjb21tZXJjaWFsIHLDqWbDqXJlbnQuJyxcbiAgICAgICAgdGltZXN0YW1wXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogYGFjdF8ke0RhdGUubm93KCl9XzNgLFxuICAgICAgICB0b29sOiAnU2xhY2sgSW4tQXBwIE5vdGlmaWNhdGlvbicsXG4gICAgICAgIGFjdGlvbk5hbWU6ICdOb3RpZnlTYWxlc01vYmlsZScsXG4gICAgICAgIHN0YXR1czogJ2V4ZWN1dGVkJyxcbiAgICAgICAgZGV0YWlsczogJ05vdGlmaWNhdGlvbiBwdXNoIGVudm95w6llIHN1ciBs4oCZYXBwbGljYXRpb24gU2xhY2sgZGUgbOKAmcOpcXVpcGUgY29tbWVyY2lhbGUuJyxcbiAgICAgICAgdGltZXN0YW1wXG4gICAgICB9XG4gICAgXTtcblxuICAgIHJldHVybiB7XG4gICAgICBtZXNzYWdlOiBcIkJvbmpvdXIgZXQgbWVyY2kgcG91ciB2b3RyZSBpbnTDqXLDqnQgISBWb3RyZSBwcm9qZXQgY29ycmVzcG9uZCBleGFjdGVtZW50IMOgIG5vcyByw6lhbGlzYXRpb25zIHLDqWNlbnRlcyBwb3VyIGRlcyBlbnRyZXByaXNlcyBkZSB0YWlsbGUgc2ltaWxhaXJlLiBDb21wdGUgdGVudSBkZSB2b3RyZSDDqWNow6lhbmNlIHNlcnLDqWUsIG5vdHJlIGRpcmVjdGV1ciBkZSBwcm9qZXQgZXN0IHByw6l2ZW51IGV0IHNvdWhhaXRlIHZvdXMgY29uc2FjcmVyIHVuIMOpY2hhbmdlIGRlIGNhZHJhZ2UgZGUgMjAgbWludXRlcyBkw6hzIGRlbWFpbiBwb3VyIHZvdXMgcHLDqXNlbnRlciBub3RyZSBtw6l0aG9kb2xvZ2llIGV0IHZvdXMgYWRyZXNzZXIgdW5lIHByb3Bvc2l0aW9uIHRhcmlmYWlyZSBmZXJtZS4gUXVlbCBjcsOpbmVhdSB2b3VzIGNvbnZpZW5kcmFpdCBsZSBtaWV1eCBlbnRyZSAxMWggZXQgMTVoID9cIixcbiAgICAgIGFjdGlvbnMsXG4gICAgICBlbnRpdGllczoge1xuICAgICAgICBpbnRlbnQ6ICdOb3V2ZWF1IGxlYWQgZW50cmFudCBoYXV0ZSB2YWxldXIgKExlYWQgQ2hhdWQpJyxcbiAgICAgICAgdXJnZW5jeTogJ0hhdXRlJyxcbiAgICAgICAgbm90ZXM6ICdTY29yZSA5NC8xMDAuIENvbW1lcmNpYWwgcHLDqXZlbnUgcG91ciBjb250YWN0IGltbcOpZGlhdC4nXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIFJlZ3VsYXIgbGVhZCBmb2xsb3d1cFxuICBjb25zdCBhY3Rpb25zOiBBZ2VudEFjdGlvbltdID0gW1xuICAgIHtcbiAgICAgIGlkOiBgYWN0XyR7RGF0ZS5ub3coKX1fMWAsXG4gICAgICB0b29sOiAnSHViU3BvdCBDUk0nLFxuICAgICAgYWN0aW9uTmFtZTogJ0xvZ0ZvbGxvd3VwVG91Y2hwb2ludCcsXG4gICAgICBzdGF0dXM6ICdleGVjdXRlZCcsXG4gICAgICBkZXRhaWxzOiAnUmVsYW5jZSBKKzQgZW5yZWdpc3Ryw6llIHN1ciBsYSBmaWNoZSBhZmZhaXJlLicsXG4gICAgICB0aW1lc3RhbXBcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiBgYWN0XyR7RGF0ZS5ub3coKX1fMmAsXG4gICAgICB0b29sOiAnTGVtbGlzdCAvIEdtYWlsJyxcbiAgICAgIGFjdGlvbk5hbWU6ICdEcmFmdFBlcnNvbmFsaXplZEZvbGxvd3VwJyxcbiAgICAgIHN0YXR1czogJ2V4ZWN1dGVkJyxcbiAgICAgIGRldGFpbHM6ICdFbWFpbCBkZSBzdWl2aSBwcsOqdCBzYW5zIHByZXNzaW9uIGNvbW1lcmNpYWxlIGFncmVzc2l2ZS4nLFxuICAgICAgdGltZXN0YW1wXG4gICAgfVxuICBdO1xuXG4gIHJldHVybiB7XG4gICAgbWVzc2FnZTogXCJCb25qb3VyLCBqZSBtZSBwZXJtZXRzIGRlIHJldmVuaXIgdmVycyB2b3VzIHBvdXIgcHJlbmRyZSBkZXMgbm91dmVsbGVzIGRlIHZvdHJlIHLDqWZsZXhpb24gc3VpdGUgw6AgbGEgcHJvcG9zaXRpb24gdHJhbnNtaXNlIGlsIHkgYSBxdWVscXVlcyBqb3Vycy4gQXZlei12b3VzIGV1IGzigJlvY2Nhc2lvbiBkZSBsYSBwYXJjb3VyaXIgPyBTaSBjZXJ0YWlucyBwb2ludHMgdGVjaG5pcXVlcyBvdSBidWRnw6l0YWlyZXMgbsOpY2Vzc2l0ZW50IGRlcyBhanVzdGVtZW50cyBwb3VyIGNvbGxlciBwYXJmYWl0ZW1lbnQgw6Agdm9zIHByaW9yaXTDqXMgYWN0dWVsbGVzLCBub3VzIHBvdXZvbnMgZW4gcmVkaXNjdXRlciB0csOocyBzaW1wbGVtZW50LlwiLFxuICAgIGFjdGlvbnMsXG4gICAgZW50aXRpZXM6IHtcbiAgICAgIGludGVudDogJ1JlbGFuY2UgY291cnRvaXNlIGRlIGRldmlzIHNhbnMgcmV0b3VyIChOdXJ0dXJpbmcpJyxcbiAgICAgIHVyZ2VuY3k6ICdCYXNzZScsXG4gICAgICBub3RlczogJ0FwcHJvY2hlIGNvbnN1bHRhdGl2ZSBvcmllbnTDqWUgdmFsZXVyLidcbiAgICB9XG4gIH07XG59XG4iXX0=