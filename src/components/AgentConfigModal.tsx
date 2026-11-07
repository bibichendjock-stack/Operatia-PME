const React = __vite__cjsImport0_react; const useState = __vite__cjsImport0_react["useState"];const _jsxDEV = __vite__cjsImport3_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=f4bb9b4f";
import { X, Check, Copy, Download, Sparkles, Building, Mail, Phone, ArrowRight } from "/node_modules/.vite/deps/lucide-react.js?v=f4bb9b4f";
import { SECTOR_PRESETS } from "/src/data/agentsData.ts";
var _jsxFileName = "/app/applet/src/components/AgentConfigModal.tsx";
import __vite__cjsImport3_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=f4bb9b4f";
export const AgentConfigModal = ({ isOpen, onClose }) => {
	const [companyName, setCompanyName] = useState("Menuiserie & Agencement Lefèvre");
	const [sector, setSector] = useState("btp");
	const [contactEmail, setContactEmail] = useState("direction@menuiserie-lefevre.fr");
	const [alertPhone, setAlertPhone] = useState("+33 6 12 34 56 78");
	const [billingTool, setBillingTool] = useState("Pennylane");
	const [calendarTool, setCalendarTool] = useState("Google Calendar");
	const [enabledAgents, setEnabledAgents] = useState({
		support: true,
		invoicing: true,
		scheduling: true,
		lead_followup: true
	});
	const [isGenerated, setIsGenerated] = useState(false);
	const [copiedConfig, setCopiedConfig] = useState(false);
	if (!isOpen) return null;
	const toggleAgent = (key) => {
		setEnabledAgents((prev) => ({
			...prev,
			[key]: !prev[key]
		}));
	};
	const generatedBundleText = `// ==========================================
// OPERATIA PME - KIT DE DÉPLOIEMENT NO-CODE
// ENTREPRISE : ${companyName}
// SECTEUR : ${SECTOR_PRESETS[sector]?.label || sector}
// ==========================================

1. CANAL D'ESCALADE PRIORITAIRE :
- Email Responsable : ${contactEmail}
- Téléphone WhatsApp Alerte : ${alertPhone}

2. OUTILS CONNECTÉS DANS MAKE.COM :
- Facturation : ${billingTool}
- Agenda : ${calendarTool}
- RAG & Base de connaissances : Notion PME Base

3. AGENTS ACTIVÉS :
${enabledAgents.support ? "✔ Agent Service Client 24/7 (WhatsApp / Webchat)" : ""}
${enabledAgents.invoicing ? `✔ Agent Relances Factures & Devis (${billingTool} + Stripe)` : ""}
${enabledAgents.scheduling ? `✔ Agent Prise de Rendez-Vous (${calendarTool} + Twilio SMS)` : ""}
${enabledAgents.lead_followup ? "✔ Agent Réactivité Prospects (< 2 min)" : ""}

4. PROMPT SYSTÈME PERSONNALISÉ POUR GEMINI :
"Tu es l'agent officiel de ${companyName}.
Tu réponds aux clients avec bienveillance, clarté et professionnalisme.
Pour toute urgence, préviens immédiatement le responsable au ${alertPhone}.
Pour les créneaux, consulte ${calendarTool}.
Pour tout paiement en retard, transmets le lien de règlement direct ${billingTool}."`;
	const handleCopy = () => {
		navigator.clipboard.writeText(generatedBundleText);
		setCopiedConfig(true);
		setTimeout(() => setCopiedConfig(false), 2e3);
	};
	const handleDownload = () => {
		const blob = new Blob([generatedBundleText], { type: "text/plain;charset=utf-8" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = `configuration_agents_${companyName.toLowerCase().replace(/[^a-z0-9]/g, "_")}.txt`;
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
		URL.revokeObjectURL(url);
	};
	return /* @__PURE__ */ _jsxDEV("div", {
		className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs overflow-y-auto",
		children: /* @__PURE__ */ _jsxDEV("div", {
			className: "bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-2xl w-full p-6 sm:p-8 my-8 relative max-h-[90vh] overflow-y-auto",
			children: [
				/* @__PURE__ */ _jsxDEV("button", {
					onClick: onClose,
					className: "absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors",
					children: /* @__PURE__ */ _jsxDEV(X, { className: "w-5 h-5" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 85,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 81,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "mb-6",
					children: [
						/* @__PURE__ */ _jsxDEV("div", {
							className: "inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-md mb-2",
							children: [/* @__PURE__ */ _jsxDEV(Sparkles, { className: "w-3.5 h-3.5" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 90,
								columnNumber: 13
							}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Assistant de Paramétrage PME" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 91,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 89,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("h3", {
							className: "text-xl sm:text-2xl font-bold text-slate-900",
							children: "Configurer votre Suite d'Agents IA"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 93,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("p", {
							className: "text-xs sm:text-sm text-slate-600 mt-1",
							children: "Personnalisez vos coordonnées et générez le pack d'instructions prêt à importer dans Make.com ou n8n."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 96,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 88,
					columnNumber: 9
				}, this),
				!isGenerated ? /* @__PURE__ */ _jsxDEV("div", {
					className: "space-y-5 text-xs sm:text-sm",
					children: [
						/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("label", {
							className: "block text-xs font-semibold text-slate-800 mb-1",
							children: "Nom commercial de la PME"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 105,
							columnNumber: 15
						}, this), /* @__PURE__ */ _jsxDEV("div", {
							className: "relative",
							children: [/* @__PURE__ */ _jsxDEV("input", {
								type: "text",
								value: companyName,
								onChange: (e) => setCompanyName(e.target.value),
								className: "w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500",
								placeholder: "Ex : Plomberie Dupont SARL"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 109,
								columnNumber: 17
							}, this), /* @__PURE__ */ _jsxDEV(Building, { className: "w-4 h-4 text-slate-400 absolute left-3 top-2.5" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 116,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 108,
							columnNumber: 15
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 104,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("label", {
							className: "block text-xs font-semibold text-slate-800 mb-1",
							children: "Secteur d'activité"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 122,
							columnNumber: 15
						}, this), /* @__PURE__ */ _jsxDEV("select", {
							value: sector,
							onChange: (e) => setSector(e.target.value),
							className: "w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500",
							children: Object.entries(SECTOR_PRESETS).map(([key, item]) => /* @__PURE__ */ _jsxDEV("option", {
								value: key,
								children: item.label
							}, key, false, {
								fileName: _jsxFileName,
								lineNumber: 131,
								columnNumber: 19
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 125,
							columnNumber: 15
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 121,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
							children: [/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("label", {
								className: "block text-xs font-semibold text-slate-800 mb-1",
								children: "Email du responsable (Escalade)"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 141,
								columnNumber: 17
							}, this), /* @__PURE__ */ _jsxDEV("div", {
								className: "relative",
								children: [/* @__PURE__ */ _jsxDEV("input", {
									type: "email",
									value: contactEmail,
									onChange: (e) => setContactEmail(e.target.value),
									className: "w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 145,
									columnNumber: 19
								}, this), /* @__PURE__ */ _jsxDEV(Mail, { className: "w-4 h-4 text-slate-400 absolute left-3 top-2.5" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 151,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 144,
								columnNumber: 17
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 140,
								columnNumber: 15
							}, this), /* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("label", {
								className: "block text-xs font-semibold text-slate-800 mb-1",
								children: "Téléphone WhatsApp d'urgence"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 156,
								columnNumber: 17
							}, this), /* @__PURE__ */ _jsxDEV("div", {
								className: "relative",
								children: [/* @__PURE__ */ _jsxDEV("input", {
									type: "text",
									value: alertPhone,
									onChange: (e) => setAlertPhone(e.target.value),
									className: "w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 160,
									columnNumber: 19
								}, this), /* @__PURE__ */ _jsxDEV(Phone, { className: "w-4 h-4 text-slate-400 absolute left-3 top-2.5" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 166,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 159,
								columnNumber: 17
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 155,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 139,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
							children: [/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("label", {
								className: "block text-xs font-semibold text-slate-800 mb-1",
								children: "Logiciel de Facturation actuel"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 174,
								columnNumber: 17
							}, this), /* @__PURE__ */ _jsxDEV("select", {
								value: billingTool,
								onChange: (e) => setBillingTool(e.target.value),
								className: "w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500",
								children: [
									/* @__PURE__ */ _jsxDEV("option", {
										value: "Pennylane",
										children: "Pennylane"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 182,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ _jsxDEV("option", {
										value: "Stripe Invoicing",
										children: "Stripe Invoicing"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 183,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ _jsxDEV("option", {
										value: "QuickBooks",
										children: "QuickBooks"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 184,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ _jsxDEV("option", {
										value: "Airtable",
										children: "Airtable Facturation"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 185,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ _jsxDEV("option", {
										value: "Axonaut",
										children: "Axonaut"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 186,
										columnNumber: 19
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 177,
								columnNumber: 17
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 173,
								columnNumber: 15
							}, this), /* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("label", {
								className: "block text-xs font-semibold text-slate-800 mb-1",
								children: "Agenda partagé pour les rendez-vous"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 191,
								columnNumber: 17
							}, this), /* @__PURE__ */ _jsxDEV("select", {
								value: calendarTool,
								onChange: (e) => setCalendarTool(e.target.value),
								className: "w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500",
								children: [
									/* @__PURE__ */ _jsxDEV("option", {
										value: "Google Calendar",
										children: "Google Calendar"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 199,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ _jsxDEV("option", {
										value: "Calendly",
										children: "Calendly"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 200,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ _jsxDEV("option", {
										value: "Cal.com",
										children: "Cal.com (Open Source)"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 201,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ _jsxDEV("option", {
										value: "Microsoft Outlook 365",
										children: "Microsoft Outlook 365"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 202,
										columnNumber: 19
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 194,
								columnNumber: 17
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 190,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 172,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("label", {
							className: "block text-xs font-semibold text-slate-800 mb-2",
							children: "Sélectionnez les agents à inclure"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 209,
							columnNumber: 15
						}, this), /* @__PURE__ */ _jsxDEV("div", {
							className: "grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs",
							children: [
								/* @__PURE__ */ _jsxDEV("label", {
									className: "flex items-center gap-2 p-2.5 bg-slate-50 rounded-lg border border-slate-200 cursor-pointer",
									children: [/* @__PURE__ */ _jsxDEV("input", {
										type: "checkbox",
										checked: enabledAgents.support,
										onChange: () => toggleAgent("support"),
										className: "accent-indigo-600 rounded"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 214,
										columnNumber: 19
									}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Service Client & FAQ WhatsApp" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 220,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 213,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ _jsxDEV("label", {
									className: "flex items-center gap-2 p-2.5 bg-slate-50 rounded-lg border border-slate-200 cursor-pointer",
									children: [/* @__PURE__ */ _jsxDEV("input", {
										type: "checkbox",
										checked: enabledAgents.invoicing,
										onChange: () => toggleAgent("invoicing"),
										className: "accent-indigo-600 rounded"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 224,
										columnNumber: 19
									}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Relances Factures & Devis" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 230,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 223,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ _jsxDEV("label", {
									className: "flex items-center gap-2 p-2.5 bg-slate-50 rounded-lg border border-slate-200 cursor-pointer",
									children: [/* @__PURE__ */ _jsxDEV("input", {
										type: "checkbox",
										checked: enabledAgents.scheduling,
										onChange: () => toggleAgent("scheduling"),
										className: "accent-indigo-600 rounded"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 234,
										columnNumber: 19
									}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Prise de RDV & Qualification" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 240,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 233,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ _jsxDEV("label", {
									className: "flex items-center gap-2 p-2.5 bg-slate-50 rounded-lg border border-slate-200 cursor-pointer",
									children: [/* @__PURE__ */ _jsxDEV("input", {
										type: "checkbox",
										checked: enabledAgents.lead_followup,
										onChange: () => toggleAgent("lead_followup"),
										className: "accent-indigo-600 rounded"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 244,
										columnNumber: 19
									}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Suivi & Scoring Prospects" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 250,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 243,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 212,
							columnNumber: 15
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 208,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "pt-4 flex justify-end gap-3",
							children: [/* @__PURE__ */ _jsxDEV("button", {
								type: "button",
								onClick: onClose,
								className: "px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-800",
								children: "Annuler"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 256,
								columnNumber: 15
							}, this), /* @__PURE__ */ _jsxDEV("button", {
								type: "button",
								onClick: () => setIsGenerated(true),
								className: "px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs rounded-lg transition-colors shadow-sm flex items-center gap-1.5",
								children: [/* @__PURE__ */ _jsxDEV("span", { children: "Générer le Kit Make.com" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 268,
									columnNumber: 17
								}, this), /* @__PURE__ */ _jsxDEV(ArrowRight, { className: "w-3.5 h-3.5" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 269,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 263,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 255,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 102,
					columnNumber: 11
				}, this) : 
				/* Generated Output View */
				/* @__PURE__ */ _jsxDEV("div", {
					className: "space-y-4",
					children: [
						/* @__PURE__ */ _jsxDEV("div", {
							className: "p-3 bg-emerald-50 border border-emerald-100 rounded-lg text-emerald-800 text-xs font-medium flex items-center gap-2",
							children: [/* @__PURE__ */ _jsxDEV(Check, { className: "w-4 h-4 text-emerald-600 shrink-0" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 277,
								columnNumber: 15
							}, this), /* @__PURE__ */ _jsxDEV("span", { children: [
								"Votre pack de configuration d'agents pour ",
								companyName,
								" est prêt !"
							] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 278,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 276,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("pre", {
							className: "p-4 bg-slate-950 text-slate-200 rounded-xl font-mono text-xs overflow-x-auto max-h-[300px] border border-slate-800",
							children: generatedBundleText
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 281,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "flex flex-wrap items-center justify-between gap-3 pt-3",
							children: [/* @__PURE__ */ _jsxDEV("button", {
								onClick: () => setIsGenerated(false),
								className: "text-xs text-slate-500 hover:text-slate-800 underline",
								children: "Modifier les paramètres"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 286,
								columnNumber: 15
							}, this), /* @__PURE__ */ _jsxDEV("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ _jsxDEV("button", {
									onClick: handleCopy,
									className: "flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors",
									children: [copiedConfig ? /* @__PURE__ */ _jsxDEV(Check, { className: "w-3.5 h-3.5 text-emerald-600" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 298,
										columnNumber: 35
									}, this) : /* @__PURE__ */ _jsxDEV(Copy, { className: "w-3.5 h-3.5" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 298,
										columnNumber: 88
									}, this), /* @__PURE__ */ _jsxDEV("span", { children: copiedConfig ? "Copié !" : "Copier" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 299,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 294,
									columnNumber: 17
								}, this), /* @__PURE__ */ _jsxDEV("button", {
									onClick: handleDownload,
									className: "flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors",
									children: [/* @__PURE__ */ _jsxDEV(Download, { className: "w-3.5 h-3.5" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 305,
										columnNumber: 19
									}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Télécharger le Fichier .txt" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 306,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 301,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 293,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 285,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 275,
					columnNumber: 11
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 80,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 79,
		columnNumber: 5
	}, this);
};

//# sourceMappingURL=data:application/json;base64,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Qjs7OztrQkFDbkMsd0JBQUMsWUFBRCxFQUFZLFdBQVUsY0FBZTs7OztnQkFDL0I7Ozs7O2VBQ0w7Ozs7OztLQUNGOzs7Ozs7O0lBR0wsd0JBQUMsT0FBRDtLQUFLLFdBQVU7ZUFBZjtNQUNFLHdCQUFDLE9BQUQ7T0FBSyxXQUFVO2lCQUFmLENBQ0Usd0JBQUMsT0FBRCxFQUFPLFdBQVUsb0NBQXFDOzs7O2lCQUN0RCx3QkFBQyxRQUFEO1FBQU07UUFBMkM7UUFBWTtPQUFpQjs7OztlQUMzRTs7Ozs7O01BRUwsd0JBQUMsT0FBRDtPQUFLLFdBQVU7aUJBQ1o7TUFDRTs7Ozs7TUFFTCx3QkFBQyxPQUFEO09BQUssV0FBVTtpQkFBZixDQUNFLHdCQUFDLFVBQUQ7UUFDRSxlQUFlLGVBQWUsS0FBSztRQUNuQyxXQUFVO2tCQUNYO09BRU87Ozs7aUJBRVIsd0JBQUMsT0FBRDtRQUFLLFdBQVU7a0JBQWYsQ0FDRSx3QkFBQyxVQUFEO1NBQ0UsU0FBUztTQUNULFdBQVU7bUJBRlosQ0FJRyxlQUFlLHdCQUFDLE9BQUQsRUFBTyxXQUFVLCtCQUFnQzs7OztvQkFBSSx3QkFBQyxNQUFELEVBQU0sV0FBVSxjQUFlOzs7O21CQUNwRyx3QkFBQyxRQUFELFlBQU8sZUFBZSxZQUFZLFNBQWU7Ozs7aUJBQzNDOzs7OztrQkFDUix3QkFBQyxVQUFEO1NBQ0UsU0FBUztTQUNULFdBQVU7bUJBRlosQ0FJRSx3QkFBQyxVQUFELEVBQVUsV0FBVSxjQUFlOzs7O21CQUNuQyx3QkFBQyxRQUFELFlBQU0sOEJBQWlDOzs7O2lCQUNqQzs7Ozs7Z0JBQ0w7Ozs7O2VBQ0Y7Ozs7OztLQUNGOzs7Ozs7R0FFSjs7Ozs7O0NBQ0Y7Ozs7O0FBRVQiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiQWdlbnRDb25maWdNb2RhbC50c3giXSwidmVyc2lvbiI6Mywic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgWCwgQ2hlY2ssIENvcHksIERvd25sb2FkLCBTcGFya2xlcywgQnVpbGRpbmcsIE1haWwsIFBob25lLCBDYWxlbmRhciwgQXJyb3dSaWdodCB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5pbXBvcnQgeyBTRUNUT1JfUFJFU0VUUyB9IGZyb20gJy4uL2RhdGEvYWdlbnRzRGF0YSc7XG5cbmludGVyZmFjZSBBZ2VudENvbmZpZ01vZGFsUHJvcHMge1xuICBpc09wZW46IGJvb2xlYW47XG4gIG9uQ2xvc2U6ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBBZ2VudENvbmZpZ01vZGFsOiBSZWFjdC5GQzxBZ2VudENvbmZpZ01vZGFsUHJvcHM+ID0gKHsgaXNPcGVuLCBvbkNsb3NlIH0pID0+IHtcbiAgY29uc3QgW2NvbXBhbnlOYW1lLCBzZXRDb21wYW55TmFtZV0gPSB1c2VTdGF0ZSgnTWVudWlzZXJpZSAmIEFnZW5jZW1lbnQgTGVmw6h2cmUnKTtcbiAgY29uc3QgW3NlY3Rvciwgc2V0U2VjdG9yXSA9IHVzZVN0YXRlKCdidHAnKTtcbiAgY29uc3QgW2NvbnRhY3RFbWFpbCwgc2V0Q29udGFjdEVtYWlsXSA9IHVzZVN0YXRlKCdkaXJlY3Rpb25AbWVudWlzZXJpZS1sZWZldnJlLmZyJyk7XG4gIGNvbnN0IFthbGVydFBob25lLCBzZXRBbGVydFBob25lXSA9IHVzZVN0YXRlKCcrMzMgNiAxMiAzNCA1NiA3OCcpO1xuICBjb25zdCBbYmlsbGluZ1Rvb2wsIHNldEJpbGxpbmdUb29sXSA9IHVzZVN0YXRlKCdQZW5ueWxhbmUnKTtcbiAgY29uc3QgW2NhbGVuZGFyVG9vbCwgc2V0Q2FsZW5kYXJUb29sXSA9IHVzZVN0YXRlKCdHb29nbGUgQ2FsZW5kYXInKTtcbiAgY29uc3QgW2VuYWJsZWRBZ2VudHMsIHNldEVuYWJsZWRBZ2VudHNdID0gdXNlU3RhdGUoe1xuICAgIHN1cHBvcnQ6IHRydWUsXG4gICAgaW52b2ljaW5nOiB0cnVlLFxuICAgIHNjaGVkdWxpbmc6IHRydWUsXG4gICAgbGVhZF9mb2xsb3d1cDogdHJ1ZVxuICB9KTtcbiAgY29uc3QgW2lzR2VuZXJhdGVkLCBzZXRJc0dlbmVyYXRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtjb3BpZWRDb25maWcsIHNldENvcGllZENvbmZpZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgaWYgKCFpc09wZW4pIHJldHVybiBudWxsO1xuXG4gIGNvbnN0IHRvZ2dsZUFnZW50ID0gKGtleToga2V5b2YgdHlwZW9mIGVuYWJsZWRBZ2VudHMpID0+IHtcbiAgICBzZXRFbmFibGVkQWdlbnRzKChwcmV2KSA9PiAoeyAuLi5wcmV2LCBba2V5XTogIXByZXZba2V5XSB9KSk7XG4gIH07XG5cbiAgY29uc3QgZ2VuZXJhdGVkQnVuZGxlVGV4dCA9IGAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE9QRVJBVElBIFBNRSAtIEtJVCBERSBEw4lQTE9JRU1FTlQgTk8tQ09ERVxuLy8gRU5UUkVQUklTRSA6ICR7Y29tcGFueU5hbWV9XG4vLyBTRUNURVVSIDogJHtTRUNUT1JfUFJFU0VUU1tzZWN0b3JdPy5sYWJlbCB8fCBzZWN0b3J9XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuMS4gQ0FOQUwgRCdFU0NBTEFERSBQUklPUklUQUlSRSA6XG4tIEVtYWlsIFJlc3BvbnNhYmxlIDogJHtjb250YWN0RW1haWx9XG4tIFTDqWzDqXBob25lIFdoYXRzQXBwIEFsZXJ0ZSA6ICR7YWxlcnRQaG9uZX1cblxuMi4gT1VUSUxTIENPTk5FQ1TDiVMgREFOUyBNQUtFLkNPTSA6XG4tIEZhY3R1cmF0aW9uIDogJHtiaWxsaW5nVG9vbH1cbi0gQWdlbmRhIDogJHtjYWxlbmRhclRvb2x9XG4tIFJBRyAmIEJhc2UgZGUgY29ubmFpc3NhbmNlcyA6IE5vdGlvbiBQTUUgQmFzZVxuXG4zLiBBR0VOVFMgQUNUSVbDiVMgOlxuJHtlbmFibGVkQWdlbnRzLnN1cHBvcnQgPyAn4pyUIEFnZW50IFNlcnZpY2UgQ2xpZW50IDI0LzcgKFdoYXRzQXBwIC8gV2ViY2hhdCknIDogJyd9XG4ke2VuYWJsZWRBZ2VudHMuaW52b2ljaW5nID8gYOKclCBBZ2VudCBSZWxhbmNlcyBGYWN0dXJlcyAmIERldmlzICgke2JpbGxpbmdUb29sfSArIFN0cmlwZSlgIDogJyd9XG4ke2VuYWJsZWRBZ2VudHMuc2NoZWR1bGluZyA/IGDinJQgQWdlbnQgUHJpc2UgZGUgUmVuZGV6LVZvdXMgKCR7Y2FsZW5kYXJUb29sfSArIFR3aWxpbyBTTVMpYCA6ICcnfVxuJHtlbmFibGVkQWdlbnRzLmxlYWRfZm9sbG93dXAgPyAn4pyUIEFnZW50IFLDqWFjdGl2aXTDqSBQcm9zcGVjdHMgKDwgMiBtaW4pJyA6ICcnfVxuXG40LiBQUk9NUFQgU1lTVMOITUUgUEVSU09OTkFMSVPDiSBQT1VSIEdFTUlOSSA6XG5cIlR1IGVzIGwnYWdlbnQgb2ZmaWNpZWwgZGUgJHtjb21wYW55TmFtZX0uXG5UdSByw6lwb25kcyBhdXggY2xpZW50cyBhdmVjIGJpZW52ZWlsbGFuY2UsIGNsYXJ0w6kgZXQgcHJvZmVzc2lvbm5hbGlzbWUuXG5Qb3VyIHRvdXRlIHVyZ2VuY2UsIHByw6l2aWVucyBpbW3DqWRpYXRlbWVudCBsZSByZXNwb25zYWJsZSBhdSAke2FsZXJ0UGhvbmV9LlxuUG91ciBsZXMgY3LDqW5lYXV4LCBjb25zdWx0ZSAke2NhbGVuZGFyVG9vbH0uXG5Qb3VyIHRvdXQgcGFpZW1lbnQgZW4gcmV0YXJkLCB0cmFuc21ldHMgbGUgbGllbiBkZSByw6hnbGVtZW50IGRpcmVjdCAke2JpbGxpbmdUb29sfS5cImA7XG5cbiAgY29uc3QgaGFuZGxlQ29weSA9ICgpID0+IHtcbiAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChnZW5lcmF0ZWRCdW5kbGVUZXh0KTtcbiAgICBzZXRDb3BpZWRDb25maWcodHJ1ZSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiBzZXRDb3BpZWRDb25maWcoZmFsc2UpLCAyMDAwKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVEb3dubG9hZCA9ICgpID0+IHtcbiAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW2dlbmVyYXRlZEJ1bmRsZVRleHRdLCB7IHR5cGU6ICd0ZXh0L3BsYWluO2NoYXJzZXQ9dXRmLTgnIH0pO1xuICAgIGNvbnN0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBhLmhyZWYgPSB1cmw7XG4gICAgYS5kb3dubG9hZCA9IGBjb25maWd1cmF0aW9uX2FnZW50c18ke2NvbXBhbnlOYW1lLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvW15hLXowLTldL2csICdfJyl9LnR4dGA7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhKTtcbiAgICBhLmNsaWNrKCk7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChhKTtcbiAgICBVUkwucmV2b2tlT2JqZWN0VVJMKHVybCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LTAgei01MCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwLTQgYmctc2xhdGUtOTUwLzYwIGJhY2tkcm9wLWJsdXIteHMgb3ZlcmZsb3cteS1hdXRvXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItc2xhdGUtMjAwIHNoYWRvdy0yeGwgbWF4LXctMnhsIHctZnVsbCBwLTYgc206cC04IG15LTggcmVsYXRpdmUgbWF4LWgtWzkwdmhdIG92ZXJmbG93LXktYXV0b1wiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17b25DbG9zZX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtNSByaWdodC01IHAtMS41IHJvdW5kZWQtbGcgdGV4dC1zbGF0ZS00MDAgaG92ZXI6dGV4dC1zbGF0ZS03MDAgaG92ZXI6Ymctc2xhdGUtMTAwIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxYIGNsYXNzTmFtZT1cInctNSBoLTVcIiAvPlxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTZcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBnYXAtMS41IHRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LWluZGlnby03MDAgYmctaW5kaWdvLTUwIHB4LTIuNSBweS0wLjUgcm91bmRlZC1tZCBtYi0yXCI+XG4gICAgICAgICAgICA8U3BhcmtsZXMgY2xhc3NOYW1lPVwidy0zLjUgaC0zLjVcIiAvPlxuICAgICAgICAgICAgPHNwYW4+QXNzaXN0YW50IGRlIFBhcmFtw6l0cmFnZSBQTUU8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGwgc206dGV4dC0yeGwgZm9udC1ib2xkIHRleHQtc2xhdGUtOTAwXCI+XG4gICAgICAgICAgICBDb25maWd1cmVyIHZvdHJlIFN1aXRlIGQnQWdlbnRzIElBXG4gICAgICAgICAgPC9oMz5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHNtOnRleHQtc20gdGV4dC1zbGF0ZS02MDAgbXQtMVwiPlxuICAgICAgICAgICAgUGVyc29ubmFsaXNleiB2b3MgY29vcmRvbm7DqWVzIGV0IGfDqW7DqXJleiBsZSBwYWNrIGQnaW5zdHJ1Y3Rpb25zIHByw6p0IMOgIGltcG9ydGVyIGRhbnMgTWFrZS5jb20gb3UgbjhuLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgeyFpc0dlbmVyYXRlZCA/IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNSB0ZXh0LXhzIHNtOnRleHQtc21cIj5cbiAgICAgICAgICAgIHsvKiBGaWVsZDogQ29tcGFueSBOYW1lICovfVxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LXNsYXRlLTgwMCBtYi0xXCI+XG4gICAgICAgICAgICAgICAgTm9tIGNvbW1lcmNpYWwgZGUgbGEgUE1FXG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb21wYW55TmFtZX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q29tcGFueU5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHBsLTkgcHItMyBweS0yIGJnLXNsYXRlLTUwIGJvcmRlciBib3JkZXItc2xhdGUtMjAwIHJvdW5kZWQtbGcgdGV4dC14cyBzbTp0ZXh0LXNtIHRleHQtc2xhdGUtOTAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1pbmRpZ28tNTAwXCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRXggOiBQbG9tYmVyaWUgRHVwb250IFNBUkxcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPEJ1aWxkaW5nIGNsYXNzTmFtZT1cInctNCBoLTQgdGV4dC1zbGF0ZS00MDAgYWJzb2x1dGUgbGVmdC0zIHRvcC0yLjVcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogRmllbGQ6IFNlY3RvciAqL31cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1zbGF0ZS04MDAgbWItMVwiPlxuICAgICAgICAgICAgICAgIFNlY3RldXIgZCdhY3Rpdml0w6lcbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgIHZhbHVlPXtzZWN0b3J9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWN0b3IoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC0zIHB5LTIgYmctc2xhdGUtNTAgYm9yZGVyIGJvcmRlci1zbGF0ZS0yMDAgcm91bmRlZC1sZyB0ZXh0LXhzIHNtOnRleHQtc20gdGV4dC1zbGF0ZS05MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWluZGlnby01MDBcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge09iamVjdC5lbnRyaWVzKFNFQ1RPUl9QUkVTRVRTKS5tYXAoKFtrZXksIGl0ZW1dKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17a2V5fSB2YWx1ZT17a2V5fT5cbiAgICAgICAgICAgICAgICAgICAge2l0ZW0ubGFiZWx9XG4gICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgey8qIEZpZWxkczogRW1haWwgJiBQaG9uZSAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMiBnYXAtNFwiPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1zbGF0ZS04MDAgbWItMVwiPlxuICAgICAgICAgICAgICAgICAgRW1haWwgZHUgcmVzcG9uc2FibGUgKEVzY2FsYWRlKVxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb250YWN0RW1haWx9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q29udGFjdEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHBsLTkgcHItMyBweS0yIGJnLXNsYXRlLTUwIGJvcmRlciBib3JkZXItc2xhdGUtMjAwIHJvdW5kZWQtbGcgdGV4dC14cyBzbTp0ZXh0LXNtIHRleHQtc2xhdGUtOTAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1pbmRpZ28tNTAwXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8TWFpbCBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtc2xhdGUtNDAwIGFic29sdXRlIGxlZnQtMyB0b3AtMi41XCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtc2xhdGUtODAwIG1iLTFcIj5cbiAgICAgICAgICAgICAgICAgIFTDqWzDqXBob25lIFdoYXRzQXBwIGQndXJnZW5jZVxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2FsZXJ0UGhvbmV9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0QWxlcnRQaG9uZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBwbC05IHByLTMgcHktMiBiZy1zbGF0ZS01MCBib3JkZXIgYm9yZGVyLXNsYXRlLTIwMCByb3VuZGVkLWxnIHRleHQteHMgc206dGV4dC1zbSB0ZXh0LXNsYXRlLTkwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctaW5kaWdvLTUwMFwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPFBob25lIGNsYXNzTmFtZT1cInctNCBoLTQgdGV4dC1zbGF0ZS00MDAgYWJzb2x1dGUgbGVmdC0zIHRvcC0yLjVcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogRmllbGRzOiBJbnRlZ3JhdGlvbnMgU2VsZWN0aW9uICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0yIGdhcC00XCI+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LXNsYXRlLTgwMCBtYi0xXCI+XG4gICAgICAgICAgICAgICAgICBMb2dpY2llbCBkZSBGYWN0dXJhdGlvbiBhY3R1ZWxcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtiaWxsaW5nVG9vbH1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0QmlsbGluZ1Rvb2woZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTMgcHktMiBiZy1zbGF0ZS01MCBib3JkZXIgYm9yZGVyLXNsYXRlLTIwMCByb3VuZGVkLWxnIHRleHQteHMgc206dGV4dC1zbSB0ZXh0LXNsYXRlLTkwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctaW5kaWdvLTUwMFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlBlbm55bGFuZVwiPlBlbm55bGFuZTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlN0cmlwZSBJbnZvaWNpbmdcIj5TdHJpcGUgSW52b2ljaW5nPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUXVpY2tCb29rc1wiPlF1aWNrQm9va3M8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJBaXJ0YWJsZVwiPkFpcnRhYmxlIEZhY3R1cmF0aW9uPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQXhvbmF1dFwiPkF4b25hdXQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtc2xhdGUtODAwIG1iLTFcIj5cbiAgICAgICAgICAgICAgICAgIEFnZW5kYSBwYXJ0YWfDqSBwb3VyIGxlcyByZW5kZXotdm91c1xuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2NhbGVuZGFyVG9vbH1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q2FsZW5kYXJUb29sKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC0zIHB5LTIgYmctc2xhdGUtNTAgYm9yZGVyIGJvcmRlci1zbGF0ZS0yMDAgcm91bmRlZC1sZyB0ZXh0LXhzIHNtOnRleHQtc20gdGV4dC1zbGF0ZS05MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWluZGlnby01MDBcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJHb29nbGUgQ2FsZW5kYXJcIj5Hb29nbGUgQ2FsZW5kYXI8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJDYWxlbmRseVwiPkNhbGVuZGx5PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ2FsLmNvbVwiPkNhbC5jb20gKE9wZW4gU291cmNlKTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1pY3Jvc29mdCBPdXRsb29rIDM2NVwiPk1pY3Jvc29mdCBPdXRsb29rIDM2NTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogQ2hlY2tib3hlczogQWdlbnRzIHRvIGFjdGl2YXRlICovfVxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LXNsYXRlLTgwMCBtYi0yXCI+XG4gICAgICAgICAgICAgICAgU8OpbGVjdGlvbm5leiBsZXMgYWdlbnRzIMOgIGluY2x1cmVcbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0yIGdhcC0yIHRleHQteHNcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgcC0yLjUgYmctc2xhdGUtNTAgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTIwMCBjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2VuYWJsZWRBZ2VudHMuc3VwcG9ydH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHRvZ2dsZUFnZW50KCdzdXBwb3J0Jyl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFjY2VudC1pbmRpZ28tNjAwIHJvdW5kZWRcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPlNlcnZpY2UgQ2xpZW50ICYgRkFRIFdoYXRzQXBwPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgcC0yLjUgYmctc2xhdGUtNTAgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTIwMCBjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2VuYWJsZWRBZ2VudHMuaW52b2ljaW5nfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gdG9nZ2xlQWdlbnQoJ2ludm9pY2luZycpfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhY2NlbnQtaW5kaWdvLTYwMCByb3VuZGVkXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5SZWxhbmNlcyBGYWN0dXJlcyAmIERldmlzPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgcC0yLjUgYmctc2xhdGUtNTAgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTIwMCBjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2VuYWJsZWRBZ2VudHMuc2NoZWR1bGluZ31cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHRvZ2dsZUFnZW50KCdzY2hlZHVsaW5nJyl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFjY2VudC1pbmRpZ28tNjAwIHJvdW5kZWRcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPlByaXNlIGRlIFJEViAmIFF1YWxpZmljYXRpb248L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBwLTIuNSBiZy1zbGF0ZS01MCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtMjAwIGN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17ZW5hYmxlZEFnZW50cy5sZWFkX2ZvbGxvd3VwfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gdG9nZ2xlQWdlbnQoJ2xlYWRfZm9sbG93dXAnKX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWNjZW50LWluZGlnby02MDAgcm91bmRlZFwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+U3VpdmkgJiBTY29yaW5nIFByb3NwZWN0czwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTQgZmxleCBqdXN0aWZ5LWVuZCBnYXAtM1wiPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17b25DbG9zZX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC00IHB5LTIgdGV4dC14cyBmb250LW1lZGl1bSB0ZXh0LXNsYXRlLTYwMCBob3Zlcjp0ZXh0LXNsYXRlLTgwMFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBBbm51bGVyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNHZW5lcmF0ZWQodHJ1ZSl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNSBweS0yLjUgYmctaW5kaWdvLTYwMCBob3ZlcjpiZy1pbmRpZ28tNzAwIHRleHQtd2hpdGUgZm9udC1zZW1pYm9sZCB0ZXh0LXhzIHJvdW5kZWQtbGcgdHJhbnNpdGlvbi1jb2xvcnMgc2hhZG93LXNtIGZsZXggaXRlbXMtY2VudGVyIGdhcC0xLjVcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHNwYW4+R8OpbsOpcmVyIGxlIEtpdCBNYWtlLmNvbTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8QXJyb3dSaWdodCBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNVwiIC8+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgLyogR2VuZXJhdGVkIE91dHB1dCBWaWV3ICovXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zIGJnLWVtZXJhbGQtNTAgYm9yZGVyIGJvcmRlci1lbWVyYWxkLTEwMCByb3VuZGVkLWxnIHRleHQtZW1lcmFsZC04MDAgdGV4dC14cyBmb250LW1lZGl1bSBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgICA8Q2hlY2sgY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LWVtZXJhbGQtNjAwIHNocmluay0wXCIgLz5cbiAgICAgICAgICAgICAgPHNwYW4+Vm90cmUgcGFjayBkZSBjb25maWd1cmF0aW9uIGQnYWdlbnRzIHBvdXIge2NvbXBhbnlOYW1lfSBlc3QgcHLDqnQgITwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8cHJlIGNsYXNzTmFtZT1cInAtNCBiZy1zbGF0ZS05NTAgdGV4dC1zbGF0ZS0yMDAgcm91bmRlZC14bCBmb250LW1vbm8gdGV4dC14cyBvdmVyZmxvdy14LWF1dG8gbWF4LWgtWzMwMHB4XSBib3JkZXIgYm9yZGVyLXNsYXRlLTgwMFwiPlxuICAgICAgICAgICAgICB7Z2VuZXJhdGVkQnVuZGxlVGV4dH1cbiAgICAgICAgICAgIDwvcHJlPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZ2FwLTMgcHQtM1wiPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNHZW5lcmF0ZWQoZmFsc2UpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zbGF0ZS01MDAgaG92ZXI6dGV4dC1zbGF0ZS04MDAgdW5kZXJsaW5lXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIE1vZGlmaWVyIGxlcyBwYXJhbcOodHJlc1xuICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ29weX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xLjUgcHgtMyBweS0yIHRleHQteHMgZm9udC1tZWRpdW0gdGV4dC1zbGF0ZS03MDAgYmctc2xhdGUtMTAwIGhvdmVyOmJnLXNsYXRlLTIwMCByb3VuZGVkLWxnIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7Y29waWVkQ29uZmlnID8gPENoZWNrIGNsYXNzTmFtZT1cInctMy41IGgtMy41IHRleHQtZW1lcmFsZC02MDBcIiAvPiA6IDxDb3B5IGNsYXNzTmFtZT1cInctMy41IGgtMy41XCIgLz59XG4gICAgICAgICAgICAgICAgICA8c3Bhbj57Y29waWVkQ29uZmlnID8gJ0NvcGnDqSAhJyA6ICdDb3BpZXInfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVEb3dubG9hZH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xLjUgcHgtNCBweS0yIHRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlIGJnLXNsYXRlLTkwMCBob3ZlcjpiZy1zbGF0ZS04MDAgcm91bmRlZC1sZyB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPERvd25sb2FkIGNsYXNzTmFtZT1cInctMy41IGgtMy41XCIgLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPlTDqWzDqWNoYXJnZXIgbGUgRmljaGllciAudHh0PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl19