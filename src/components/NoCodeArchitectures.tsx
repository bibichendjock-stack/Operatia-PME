const React = __vite__cjsImport0_react; const useState = __vite__cjsImport0_react["useState"];const _jsxDEV = __vite__cjsImport3_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=f4bb9b4f";
import { BLUEPRINTS_DATA } from "/src/data/blueprintsData.ts";
import { FileCode, Copy, Check, Download, Workflow } from "/node_modules/.vite/deps/lucide-react.js?v=f4bb9b4f";
var _jsxFileName = "/app/applet/src/components/NoCodeArchitectures.tsx";
import __vite__cjsImport3_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=f4bb9b4f";
export const NoCodeArchitectures = ({ initialAgentId = "support" }) => {
	const [selectedAgentId, setSelectedAgentId] = useState(initialAgentId);
	const [copiedJson, setCopiedJson] = useState(false);
	const activeBlueprint = BLUEPRINTS_DATA.find((b) => b.agentId === selectedAgentId) || BLUEPRINTS_DATA[0];
	const handleCopyJson = () => {
		navigator.clipboard.writeText(activeBlueprint.jsonSchemaPreview);
		setCopiedJson(true);
		setTimeout(() => setCopiedJson(false), 2e3);
	};
	const handleDownloadJson = () => {
		const blob = new Blob([activeBlueprint.jsonSchemaPreview], { type: "application/json" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = `blueprint_agent_${selectedAgentId}_make.json`;
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
		URL.revokeObjectURL(url);
	};
	return /* @__PURE__ */ _jsxDEV("section", {
		id: "architectures",
		className: "py-16 bg-slate-50 border-b border-slate-200",
		children: /* @__PURE__ */ _jsxDEV("div", {
			className: "max-w-7xl mx-auto px-6",
			children: [
				/* @__PURE__ */ _jsxDEV("div", {
					className: "max-w-3xl mb-12",
					children: [
						/* @__PURE__ */ _jsxDEV("div", {
							className: "text-xs font-semibold uppercase tracking-wider text-indigo-700 mb-2",
							children: "Zéro Développement de Technologie"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 50,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("h2", {
							className: "text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 text-balance",
							children: "Stacks No-Code & Blueprints d’Intégration"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 53,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("p", {
							className: "text-sm sm:text-base text-slate-600 mt-3 leading-relaxed",
							children: "Vous n'avez pas besoin de coder un algorithme ou d'héberger un serveur. L'ensemble des flux s'assemble visuellement dans Make.com, n8n ou Zapier en reliant vos applications métiers."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 56,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 49,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "bg-white rounded-2xl border border-slate-200 p-6 lg:p-8 mb-10 shadow-sm",
					children: [/* @__PURE__ */ _jsxDEV("div", {
						className: "flex items-center justify-between mb-6 pb-4 border-b border-slate-100",
						children: [/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("h3", {
							className: "text-base font-bold text-slate-900 flex items-center gap-2",
							children: [/* @__PURE__ */ _jsxDEV(Workflow, { className: "w-5 h-5 text-indigo-600" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 66,
								columnNumber: 17
							}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Le Schéma Directeur Universel d’un Agent IA PME" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 67,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 65,
							columnNumber: 15
						}, this), /* @__PURE__ */ _jsxDEV("p", {
							className: "text-xs text-slate-500 mt-1",
							children: "Comment les données circulent de la demande client à la résolution automatique"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 69,
							columnNumber: 15
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 64,
							columnNumber: 13
						}, this), /* @__PURE__ */ _jsxDEV("span", {
							className: "hidden sm:inline-block text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100",
							children: "100% visuel sans programmation"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 73,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 63,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV("div", {
						className: "grid grid-cols-1 md:grid-cols-5 gap-4 relative",
						children: [
							/* @__PURE__ */ _jsxDEV("div", {
								className: "p-4 rounded-xl bg-slate-50 border border-slate-200 text-left",
								children: [
									/* @__PURE__ */ _jsxDEV("div", {
										className: "w-7 h-7 rounded-lg bg-slate-900 text-white flex items-center justify-center font-mono text-xs font-bold mb-3",
										children: "01"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 81,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ _jsxDEV("div", {
										className: "text-xs font-bold text-slate-900 mb-1",
										children: "Point de Contact"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 84,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ _jsxDEV("p", {
										className: "text-[11px] text-slate-600",
										children: "WhatsApp, Formulaire Web, Mail ou SMS envoyé par le client."
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 85,
										columnNumber: 15
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 80,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "p-4 rounded-xl bg-slate-50 border border-slate-200 text-left",
								children: [
									/* @__PURE__ */ _jsxDEV("div", {
										className: "w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-mono text-xs font-bold mb-3",
										children: "02"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 91,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ _jsxDEV("div", {
										className: "text-xs font-bold text-slate-900 mb-1",
										children: "Make.com / n8n"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 94,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ _jsxDEV("p", {
										className: "text-[11px] text-slate-600",
										children: "Capture le Webhook et orchestre la séquence logique."
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 95,
										columnNumber: 15
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 90,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "p-4 rounded-xl bg-slate-50 border border-slate-200 text-left",
								children: [
									/* @__PURE__ */ _jsxDEV("div", {
										className: "w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-mono text-xs font-bold mb-3",
										children: "03"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 101,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ _jsxDEV("div", {
										className: "text-xs font-bold text-slate-900 mb-1",
										children: "Gemini AI + RAG"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 104,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ _jsxDEV("p", {
										className: "text-[11px] text-slate-600",
										children: "Interroge Notion/FAQ, analyse l’urgence et rédige la réponse."
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 105,
										columnNumber: 15
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 100,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "p-4 rounded-xl bg-slate-50 border border-slate-200 text-left",
								children: [
									/* @__PURE__ */ _jsxDEV("div", {
										className: "w-7 h-7 rounded-lg bg-slate-900 text-white flex items-center justify-center font-mono text-xs font-bold mb-3",
										children: "04"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 111,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ _jsxDEV("div", {
										className: "text-xs font-bold text-slate-900 mb-1",
										children: "Logiciel Métier"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 114,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ _jsxDEV("p", {
										className: "text-[11px] text-slate-600",
										children: "Pennylane, Google Calendar, HubSpot, Stripe ou Airtable."
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 115,
										columnNumber: 15
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 110,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "p-4 rounded-xl bg-slate-50 border border-slate-200 text-left",
								children: [
									/* @__PURE__ */ _jsxDEV("div", {
										className: "w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-mono text-xs font-bold mb-3",
										children: "05"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 121,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ _jsxDEV("div", {
										className: "text-xs font-bold text-slate-900 mb-1",
										children: "Dénouement"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 124,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ _jsxDEV("p", {
										className: "text-[11px] text-slate-600",
										children: "Réponse instantanée au client + alerte Slack si besoin."
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 125,
										columnNumber: 15
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 120,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 79,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 62,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "flex flex-wrap items-center gap-2 mb-6",
					children: [
						/* @__PURE__ */ _jsxDEV("button", {
							onClick: () => setSelectedAgentId("support"),
							className: `px-3.5 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${selectedAgentId === "support" ? "bg-indigo-600 text-white shadow-sm" : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"}`,
							children: "Blueprint Service Client 24/7"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 134,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("button", {
							onClick: () => setSelectedAgentId("invoicing"),
							className: `px-3.5 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${selectedAgentId === "invoicing" ? "bg-indigo-600 text-white shadow-sm" : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"}`,
							children: "Blueprint Facturation & Impayés"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 144,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("button", {
							onClick: () => setSelectedAgentId("scheduling"),
							className: `px-3.5 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${selectedAgentId === "scheduling" ? "bg-indigo-600 text-white shadow-sm" : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"}`,
							children: "Blueprint Prise de Rendez-Vous"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 154,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("button", {
							onClick: () => setSelectedAgentId("lead_followup"),
							className: `px-3.5 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${selectedAgentId === "lead_followup" ? "bg-indigo-600 text-white shadow-sm" : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"}`,
							children: "Blueprint Suivi des Prospects"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 164,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 133,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "bg-white rounded-2xl border border-slate-200 p-6 lg:p-8 shadow-sm",
					children: [/* @__PURE__ */ _jsxDEV("div", {
						className: "flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100",
						children: [/* @__PURE__ */ _jsxDEV("div", { children: [
							/* @__PURE__ */ _jsxDEV("div", {
								className: "flex items-center gap-2 text-xs text-slate-500 mb-1",
								children: [
									/* @__PURE__ */ _jsxDEV("span", { children: ["Difficulté : ", /* @__PURE__ */ _jsxDEV("strong", {
										className: "font-semibold text-slate-800",
										children: activeBlueprint.complexity
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 181,
										columnNumber: 36
									}, this)] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 181,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ _jsxDEV("span", {
										"aria-hidden": "true",
										children: "·"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 182,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ _jsxDEV("span", { children: ["Outils : ", activeBlueprint.platforms.join(" + ")] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 183,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 180,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("h3", {
								className: "text-xl font-bold text-slate-900",
								children: activeBlueprint.title
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 185,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("p", {
								className: "text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl leading-relaxed",
								children: activeBlueprint.description
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 188,
								columnNumber: 15
							}, this)
						] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 179,
							columnNumber: 13
						}, this), /* @__PURE__ */ _jsxDEV("div", {
							className: "flex items-center gap-2 shrink-0",
							children: [/* @__PURE__ */ _jsxDEV("button", {
								onClick: handleCopyJson,
								className: "flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer whitespace-nowrap",
								children: [copiedJson ? /* @__PURE__ */ _jsxDEV(Check, { className: "w-3.5 h-3.5 text-emerald-600" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 198,
									columnNumber: 31
								}, this) : /* @__PURE__ */ _jsxDEV(Copy, { className: "w-3.5 h-3.5" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 198,
									columnNumber: 84
								}, this), /* @__PURE__ */ _jsxDEV("span", { children: copiedJson ? "Copié !" : "Copier JSON" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 199,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 194,
								columnNumber: 15
							}, this), /* @__PURE__ */ _jsxDEV("button", {
								onClick: handleDownloadJson,
								className: "flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer whitespace-nowrap shadow-xs",
								children: [/* @__PURE__ */ _jsxDEV(Download, { className: "w-3.5 h-3.5" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 205,
									columnNumber: 17
								}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Télécharger Blueprint" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 206,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 201,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 193,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 178,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV("div", {
						className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-start",
						children: [/* @__PURE__ */ _jsxDEV("div", {
							className: "lg:col-span-7 space-y-4",
							children: [/* @__PURE__ */ _jsxDEV("h4", {
								className: "text-xs font-bold uppercase tracking-wider text-slate-900 mb-2",
								children: "Étapes de Configuration Pas à Pas"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 214,
								columnNumber: 15
							}, this), activeBlueprint.steps.map((st) => /* @__PURE__ */ _jsxDEV("div", {
								className: "p-4 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-white hover:shadow-xs transition-all",
								children: [
									/* @__PURE__ */ _jsxDEV("div", {
										className: "flex items-center justify-between mb-1.5",
										children: [/* @__PURE__ */ _jsxDEV("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ _jsxDEV("span", {
												className: "w-5 h-5 rounded-full bg-indigo-600 text-white text-[11px] font-bold font-mono flex items-center justify-center",
												children: st.stepNumber
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 225,
												columnNumber: 23
											}, this), /* @__PURE__ */ _jsxDEV("span", {
												className: "text-xs font-bold text-slate-900",
												children: st.title
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 228,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 224,
											columnNumber: 21
										}, this), /* @__PURE__ */ _jsxDEV("span", {
											className: "text-[11px] font-semibold text-indigo-600",
											children: st.tool
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 230,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 223,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ _jsxDEV("p", {
										className: "text-xs text-slate-600 mb-2 leading-relaxed",
										children: st.description
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 235,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ _jsxDEV("div", {
										className: "p-2.5 rounded-lg bg-amber-50/70 border border-amber-200/60 text-[11px] text-amber-900",
										children: [
											/* @__PURE__ */ _jsxDEV("span", {
												className: "font-semibold",
												children: "Conseil pratique :"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 240,
												columnNumber: 21
											}, this),
											" ",
											st.configTip
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 239,
										columnNumber: 19
									}, this)
								]
							}, st.stepNumber, true, {
								fileName: _jsxFileName,
								lineNumber: 219,
								columnNumber: 17
							}, this))]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 213,
							columnNumber: 13
						}, this), /* @__PURE__ */ _jsxDEV("div", {
							className: "lg:col-span-5 bg-slate-950 rounded-xl p-4 text-slate-200 border border-slate-800",
							children: [
								/* @__PURE__ */ _jsxDEV("div", {
									className: "flex items-center justify-between mb-3 text-xs font-mono text-slate-400",
									children: [/* @__PURE__ */ _jsxDEV("span", {
										className: "flex items-center gap-1.5 text-indigo-400 font-bold",
										children: [/* @__PURE__ */ _jsxDEV(FileCode, { className: "w-4 h-4" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 250,
											columnNumber: 19
										}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Modèle Make.com (Extrait JSON)" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 251,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 249,
										columnNumber: 17
									}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Pret à l'import" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 253,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 248,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV("pre", {
									className: "text-[11px] font-mono leading-relaxed text-slate-300 overflow-x-auto p-3 bg-slate-900 rounded-lg max-h-[360px] border border-slate-800",
									children: activeBlueprint.jsonSchemaPreview
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 256,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "mt-4 p-3 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-slate-400",
									children: [
										"💡 ",
										/* @__PURE__ */ _jsxDEV("span", {
											className: "font-semibold text-slate-200",
											children: "Import direct dans Make.com :"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 261,
											columnNumber: 20
										}, this),
										" Cliquez sur \"Create new scenario\" ➔ menu \"...\" ➔ \"Import Blueprint\" et collez ce schéma."
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 260,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 247,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 211,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 177,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 47,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 46,
		columnNumber: 5
	}, this);
};

//# sourceMappingURL=data:application/json;base64,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O29CQUNMLHdCQUFDLFFBQUQ7V0FBTSxXQUFVO3FCQUNiLEdBQUc7VUFDQTs7OztrQkFDSDs7Ozs7O1NBRUwsd0JBQUMsS0FBRDtVQUFHLFdBQVU7b0JBQ1YsR0FBRztTQUNIOzs7OztTQUVILHdCQUFDLE9BQUQ7VUFBSyxXQUFVO29CQUFmO1dBQ0Usd0JBQUMsUUFBRDtZQUFNLFdBQVU7c0JBQWdCO1dBQXdCOzs7OztXQUFDO1dBQUUsR0FBRztVQUMzRDs7Ozs7O1FBQ0Y7VUF0QkUsR0FBRzs7OztjQXNCTCxDQUNOLENBQ0U7Ozs7O2dCQUdMLHdCQUFDLE9BQUQ7T0FBSyxXQUFVO2lCQUFmO1FBQ0Usd0JBQUMsT0FBRDtTQUFLLFdBQVU7bUJBQWYsQ0FDRSx3QkFBQyxRQUFEO1VBQU0sV0FBVTtvQkFBaEIsQ0FDRSx3QkFBQyxVQUFELEVBQVUsV0FBVSxVQUFXOzs7O29CQUMvQix3QkFBQyxRQUFELFlBQU0saUNBQW9DOzs7O2tCQUN0Qzs7Ozs7bUJBQ04sd0JBQUMsUUFBRCxZQUFNLGtCQUFxQjs7OztpQkFDeEI7Ozs7OztRQUVMLHdCQUFDLE9BQUQ7U0FBSyxXQUFVO21CQUNaLGdCQUFnQjtRQUNkOzs7OztRQUVMLHdCQUFDLE9BQUQ7U0FBSyxXQUFVO21CQUFmO1VBQXFHO1VBQ2hHLHdCQUFDLFFBQUQ7V0FBTSxXQUFVO3FCQUErQjtVQUFtQzs7Ozs7VUFBQztTQUNuRjs7Ozs7O09BQ0Y7Ozs7O2NBQ0Y7Ozs7O2FBQ0Y7Ozs7OztHQUNGOzs7Ozs7Q0FDRTs7Ozs7QUFFYiIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJOb0NvZGVBcmNoaXRlY3R1cmVzLnRzeCJdLCJ2ZXJzaW9uIjozLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCTFVFUFJJTlRTX0RBVEEgfSBmcm9tICcuLi9kYXRhL2JsdWVwcmludHNEYXRhJztcbmltcG9ydCB7IEFnZW50VHlwZSB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IFxuICBGaWxlQ29kZSwgXG4gIENvcHksIFxuICBDaGVjaywgXG4gIERvd25sb2FkLCBcbiAgV29ya2Zsb3csIFxuICBMYXllcnMsIFxuICBTcGFya2xlcywgXG4gIEFycm93UmlnaHQsIFxuICBEYXRhYmFzZSwgXG4gIFNlbmQgXG59IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5cbmludGVyZmFjZSBOb0NvZGVBcmNoaXRlY3R1cmVzUHJvcHMge1xuICBpbml0aWFsQWdlbnRJZD86IEFnZW50VHlwZTtcbn1cblxuZXhwb3J0IGNvbnN0IE5vQ29kZUFyY2hpdGVjdHVyZXM6IFJlYWN0LkZDPE5vQ29kZUFyY2hpdGVjdHVyZXNQcm9wcz4gPSAoeyBpbml0aWFsQWdlbnRJZCA9ICdzdXBwb3J0JyB9KSA9PiB7XG4gIGNvbnN0IFtzZWxlY3RlZEFnZW50SWQsIHNldFNlbGVjdGVkQWdlbnRJZF0gPSB1c2VTdGF0ZTxBZ2VudFR5cGU+KGluaXRpYWxBZ2VudElkKTtcbiAgY29uc3QgW2NvcGllZEpzb24sIHNldENvcGllZEpzb25dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGFjdGl2ZUJsdWVwcmludCA9IEJMVUVQUklOVFNfREFUQS5maW5kKChiKSA9PiBiLmFnZW50SWQgPT09IHNlbGVjdGVkQWdlbnRJZCkgfHwgQkxVRVBSSU5UU19EQVRBWzBdO1xuXG4gIGNvbnN0IGhhbmRsZUNvcHlKc29uID0gKCkgPT4ge1xuICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGFjdGl2ZUJsdWVwcmludC5qc29uU2NoZW1hUHJldmlldyk7XG4gICAgc2V0Q29waWVkSnNvbih0cnVlKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHNldENvcGllZEpzb24oZmFsc2UpLCAyMDAwKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVEb3dubG9hZEpzb24gPSAoKSA9PiB7XG4gICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFthY3RpdmVCbHVlcHJpbnQuanNvblNjaGVtYVByZXZpZXddLCB7IHR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcbiAgICBjb25zdCB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgYS5ocmVmID0gdXJsO1xuICAgIGEuZG93bmxvYWQgPSBgYmx1ZXByaW50X2FnZW50XyR7c2VsZWN0ZWRBZ2VudElkfV9tYWtlLmpzb25gO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYSk7XG4gICAgYS5jbGljaygpO1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoYSk7XG4gICAgVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gaWQ9XCJhcmNoaXRlY3R1cmVzXCIgY2xhc3NOYW1lPVwicHktMTYgYmctc2xhdGUtNTAgYm9yZGVyLWIgYm9yZGVyLXNsYXRlLTIwMFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy03eGwgbXgtYXV0byBweC02XCI+XG4gICAgICAgIHsvKiBTZWN0aW9uIEhlYWRlciAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy0zeGwgbWItMTJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1zZW1pYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgdGV4dC1pbmRpZ28tNzAwIG1iLTJcIj5cbiAgICAgICAgICAgIFrDqXJvIETDqXZlbG9wcGVtZW50IGRlIFRlY2hub2xvZ2llXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIHNtOnRleHQtM3hsIGZvbnQtYm9sZCB0cmFja2luZy10aWdodCB0ZXh0LXNsYXRlLTkwMCB0ZXh0LWJhbGFuY2VcIj5cbiAgICAgICAgICAgIFN0YWNrcyBOby1Db2RlICYgQmx1ZXByaW50cyBk4oCZSW50w6lncmF0aW9uXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHNtOnRleHQtYmFzZSB0ZXh0LXNsYXRlLTYwMCBtdC0zIGxlYWRpbmctcmVsYXhlZFwiPlxuICAgICAgICAgICAgVm91cyBuJ2F2ZXogcGFzIGJlc29pbiBkZSBjb2RlciB1biBhbGdvcml0aG1lIG91IGQnaMOpYmVyZ2VyIHVuIHNlcnZldXIuIEwnZW5zZW1ibGUgZGVzIGZsdXggcydhc3NlbWJsZSB2aXN1ZWxsZW1lbnQgZGFucyBNYWtlLmNvbSwgbjhuIG91IFphcGllciBlbiByZWxpYW50IHZvcyBhcHBsaWNhdGlvbnMgbcOpdGllcnMuXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogR2xvYmFsIEFyY2hpdGVjdHVyZSBEaWFncmFtIChJbnRlcmFjdGl2ZSB2aXN1YWwgZmxvdykgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC0yeGwgYm9yZGVyIGJvcmRlci1zbGF0ZS0yMDAgcC02IGxnOnAtOCBtYi0xMCBzaGFkb3ctc21cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBtYi02IHBiLTQgYm9yZGVyLWIgYm9yZGVyLXNsYXRlLTEwMFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtYmFzZSBmb250LWJvbGQgdGV4dC1zbGF0ZS05MDAgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICA8V29ya2Zsb3cgY2xhc3NOYW1lPVwidy01IGgtNSB0ZXh0LWluZGlnby02MDBcIiAvPlxuICAgICAgICAgICAgICAgIDxzcGFuPkxlIFNjaMOpbWEgRGlyZWN0ZXVyIFVuaXZlcnNlbCBk4oCZdW4gQWdlbnQgSUEgUE1FPC9zcGFuPlxuICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc2xhdGUtNTAwIG10LTFcIj5cbiAgICAgICAgICAgICAgICBDb21tZW50IGxlcyBkb25uw6llcyBjaXJjdWxlbnQgZGUgbGEgZGVtYW5kZSBjbGllbnQgw6AgbGEgcsOpc29sdXRpb24gYXV0b21hdGlxdWVcbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoaWRkZW4gc206aW5saW5lLWJsb2NrIHRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LWVtZXJhbGQtNzAwIGJnLWVtZXJhbGQtNTAgcHgtMi41IHB5LTEgcm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLWVtZXJhbGQtMTAwXCI+XG4gICAgICAgICAgICAgIDEwMCUgdmlzdWVsIHNhbnMgcHJvZ3JhbW1hdGlvblxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIDUtU3RlcCBGbG93IEdyaWQgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy01IGdhcC00IHJlbGF0aXZlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCByb3VuZGVkLXhsIGJnLXNsYXRlLTUwIGJvcmRlciBib3JkZXItc2xhdGUtMjAwIHRleHQtbGVmdFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNyBoLTcgcm91bmRlZC1sZyBiZy1zbGF0ZS05MDAgdGV4dC13aGl0ZSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBmb250LW1vbm8gdGV4dC14cyBmb250LWJvbGQgbWItM1wiPlxuICAgICAgICAgICAgICAgIDAxXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1ib2xkIHRleHQtc2xhdGUtOTAwIG1iLTFcIj5Qb2ludCBkZSBDb250YWN0PC9kaXY+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzExcHhdIHRleHQtc2xhdGUtNjAwXCI+XG4gICAgICAgICAgICAgICAgV2hhdHNBcHAsIEZvcm11bGFpcmUgV2ViLCBNYWlsIG91IFNNUyBlbnZvecOpIHBhciBsZSBjbGllbnQuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCByb3VuZGVkLXhsIGJnLXNsYXRlLTUwIGJvcmRlciBib3JkZXItc2xhdGUtMjAwIHRleHQtbGVmdFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNyBoLTcgcm91bmRlZC1sZyBiZy1pbmRpZ28tNjAwIHRleHQtd2hpdGUgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZm9udC1tb25vIHRleHQteHMgZm9udC1ib2xkIG1iLTNcIj5cbiAgICAgICAgICAgICAgICAwMlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtYm9sZCB0ZXh0LXNsYXRlLTkwMCBtYi0xXCI+TWFrZS5jb20gLyBuOG48L2Rpdj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTFweF0gdGV4dC1zbGF0ZS02MDBcIj5cbiAgICAgICAgICAgICAgICBDYXB0dXJlIGxlIFdlYmhvb2sgZXQgb3JjaGVzdHJlIGxhIHPDqXF1ZW5jZSBsb2dpcXVlLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgcm91bmRlZC14bCBiZy1zbGF0ZS01MCBib3JkZXIgYm9yZGVyLXNsYXRlLTIwMCB0ZXh0LWxlZnRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTcgaC03IHJvdW5kZWQtbGcgYmctaW5kaWdvLTYwMCB0ZXh0LXdoaXRlIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGZvbnQtbW9ubyB0ZXh0LXhzIGZvbnQtYm9sZCBtYi0zXCI+XG4gICAgICAgICAgICAgICAgMDNcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LWJvbGQgdGV4dC1zbGF0ZS05MDAgbWItMVwiPkdlbWluaSBBSSArIFJBRzwvZGl2PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsxMXB4XSB0ZXh0LXNsYXRlLTYwMFwiPlxuICAgICAgICAgICAgICAgIEludGVycm9nZSBOb3Rpb24vRkFRLCBhbmFseXNlIGzigJl1cmdlbmNlIGV0IHLDqWRpZ2UgbGEgcsOpcG9uc2UuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCByb3VuZGVkLXhsIGJnLXNsYXRlLTUwIGJvcmRlciBib3JkZXItc2xhdGUtMjAwIHRleHQtbGVmdFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNyBoLTcgcm91bmRlZC1sZyBiZy1zbGF0ZS05MDAgdGV4dC13aGl0ZSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBmb250LW1vbm8gdGV4dC14cyBmb250LWJvbGQgbWItM1wiPlxuICAgICAgICAgICAgICAgIDA0XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1ib2xkIHRleHQtc2xhdGUtOTAwIG1iLTFcIj5Mb2dpY2llbCBNw6l0aWVyPC9kaXY+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzExcHhdIHRleHQtc2xhdGUtNjAwXCI+XG4gICAgICAgICAgICAgICAgUGVubnlsYW5lLCBHb29nbGUgQ2FsZW5kYXIsIEh1YlNwb3QsIFN0cmlwZSBvdSBBaXJ0YWJsZS5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IHJvdW5kZWQteGwgYmctc2xhdGUtNTAgYm9yZGVyIGJvcmRlci1zbGF0ZS0yMDAgdGV4dC1sZWZ0XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy03IGgtNyByb3VuZGVkLWxnIGJnLWVtZXJhbGQtNjAwIHRleHQtd2hpdGUgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZm9udC1tb25vIHRleHQteHMgZm9udC1ib2xkIG1iLTNcIj5cbiAgICAgICAgICAgICAgICAwNVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtYm9sZCB0ZXh0LXNsYXRlLTkwMCBtYi0xXCI+RMOpbm91ZW1lbnQ8L2Rpdj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTFweF0gdGV4dC1zbGF0ZS02MDBcIj5cbiAgICAgICAgICAgICAgICBSw6lwb25zZSBpbnN0YW50YW7DqWUgYXUgY2xpZW50ICsgYWxlcnRlIFNsYWNrIHNpIGJlc29pbi5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBCbHVlcHJpbnQgU2VsZWN0b3IgVGFicyAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIgZ2FwLTIgbWItNlwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkQWdlbnRJZCgnc3VwcG9ydCcpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHgtMy41IHB5LTIgdGV4dC14cyBmb250LXNlbWlib2xkIHJvdW5kZWQtbGcgdHJhbnNpdGlvbi1hbGwgY3Vyc29yLXBvaW50ZXIgd2hpdGVzcGFjZS1ub3dyYXAgJHtcbiAgICAgICAgICAgICAgc2VsZWN0ZWRBZ2VudElkID09PSAnc3VwcG9ydCdcbiAgICAgICAgICAgICAgICA/ICdiZy1pbmRpZ28tNjAwIHRleHQtd2hpdGUgc2hhZG93LXNtJ1xuICAgICAgICAgICAgICAgIDogJ2JnLXdoaXRlIHRleHQtc2xhdGUtNzAwIGhvdmVyOmJnLXNsYXRlLTEwMCBib3JkZXIgYm9yZGVyLXNsYXRlLTIwMCdcbiAgICAgICAgICAgIH1gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEJsdWVwcmludCBTZXJ2aWNlIENsaWVudCAyNC83XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRBZ2VudElkKCdpbnZvaWNpbmcnKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHB4LTMuNSBweS0yIHRleHQteHMgZm9udC1zZW1pYm9sZCByb3VuZGVkLWxnIHRyYW5zaXRpb24tYWxsIGN1cnNvci1wb2ludGVyIHdoaXRlc3BhY2Utbm93cmFwICR7XG4gICAgICAgICAgICAgIHNlbGVjdGVkQWdlbnRJZCA9PT0gJ2ludm9pY2luZydcbiAgICAgICAgICAgICAgICA/ICdiZy1pbmRpZ28tNjAwIHRleHQtd2hpdGUgc2hhZG93LXNtJ1xuICAgICAgICAgICAgICAgIDogJ2JnLXdoaXRlIHRleHQtc2xhdGUtNzAwIGhvdmVyOmJnLXNsYXRlLTEwMCBib3JkZXIgYm9yZGVyLXNsYXRlLTIwMCdcbiAgICAgICAgICAgIH1gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEJsdWVwcmludCBGYWN0dXJhdGlvbiAmIEltcGF5w6lzXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRBZ2VudElkKCdzY2hlZHVsaW5nJyl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BweC0zLjUgcHktMiB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgcm91bmRlZC1sZyB0cmFuc2l0aW9uLWFsbCBjdXJzb3ItcG9pbnRlciB3aGl0ZXNwYWNlLW5vd3JhcCAke1xuICAgICAgICAgICAgICBzZWxlY3RlZEFnZW50SWQgPT09ICdzY2hlZHVsaW5nJ1xuICAgICAgICAgICAgICAgID8gJ2JnLWluZGlnby02MDAgdGV4dC13aGl0ZSBzaGFkb3ctc20nXG4gICAgICAgICAgICAgICAgOiAnYmctd2hpdGUgdGV4dC1zbGF0ZS03MDAgaG92ZXI6Ymctc2xhdGUtMTAwIGJvcmRlciBib3JkZXItc2xhdGUtMjAwJ1xuICAgICAgICAgICAgfWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQmx1ZXByaW50IFByaXNlIGRlIFJlbmRlei1Wb3VzXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRBZ2VudElkKCdsZWFkX2ZvbGxvd3VwJyl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BweC0zLjUgcHktMiB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgcm91bmRlZC1sZyB0cmFuc2l0aW9uLWFsbCBjdXJzb3ItcG9pbnRlciB3aGl0ZXNwYWNlLW5vd3JhcCAke1xuICAgICAgICAgICAgICBzZWxlY3RlZEFnZW50SWQgPT09ICdsZWFkX2ZvbGxvd3VwJ1xuICAgICAgICAgICAgICAgID8gJ2JnLWluZGlnby02MDAgdGV4dC13aGl0ZSBzaGFkb3ctc20nXG4gICAgICAgICAgICAgICAgOiAnYmctd2hpdGUgdGV4dC1zbGF0ZS03MDAgaG92ZXI6Ymctc2xhdGUtMTAwIGJvcmRlciBib3JkZXItc2xhdGUtMjAwJ1xuICAgICAgICAgICAgfWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQmx1ZXByaW50IFN1aXZpIGRlcyBQcm9zcGVjdHNcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIEJsdWVwcmludCBEZXRhaWxlZCBDb25maWd1cmF0aW9uIENhcmQgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC0yeGwgYm9yZGVyIGJvcmRlci1zbGF0ZS0yMDAgcC02IGxnOnAtOCBzaGFkb3ctc21cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgbWQ6aXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBnYXAtNCBtYi02IHBiLTYgYm9yZGVyLWIgYm9yZGVyLXNsYXRlLTEwMFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiB0ZXh0LXhzIHRleHQtc2xhdGUtNTAwIG1iLTFcIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5EaWZmaWN1bHTDqSA6IDxzdHJvbmcgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LXNsYXRlLTgwMFwiPnthY3RpdmVCbHVlcHJpbnQuY29tcGxleGl0eX08L3N0cm9uZz48L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+wrc8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4+T3V0aWxzIDoge2FjdGl2ZUJsdWVwcmludC5wbGF0Zm9ybXMuam9pbignICsgJyl9PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIHRleHQtc2xhdGUtOTAwXCI+XG4gICAgICAgICAgICAgICAge2FjdGl2ZUJsdWVwcmludC50aXRsZX1cbiAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyBzbTp0ZXh0LXNtIHRleHQtc2xhdGUtNjAwIG10LTEgbWF4LXctM3hsIGxlYWRpbmctcmVsYXhlZFwiPlxuICAgICAgICAgICAgICAgIHthY3RpdmVCbHVlcHJpbnQuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHNocmluay0wXCI+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDb3B5SnNvbn1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMS41IHB4LTMgcHktMiB0ZXh0LXhzIGZvbnQtbWVkaXVtIHRleHQtc2xhdGUtNzAwIGJnLXNsYXRlLTEwMCBob3ZlcjpiZy1zbGF0ZS0yMDAgcm91bmRlZC1sZyB0cmFuc2l0aW9uLWNvbG9ycyBjdXJzb3ItcG9pbnRlciB3aGl0ZXNwYWNlLW5vd3JhcFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7Y29waWVkSnNvbiA/IDxDaGVjayBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNSB0ZXh0LWVtZXJhbGQtNjAwXCIgLz4gOiA8Q29weSBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNVwiIC8+fVxuICAgICAgICAgICAgICAgIDxzcGFuPntjb3BpZWRKc29uID8gJ0NvcGnDqSAhJyA6ICdDb3BpZXIgSlNPTid9PC9zcGFuPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZURvd25sb2FkSnNvbn1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMS41IHB4LTMgcHktMiB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSBiZy1zbGF0ZS05MDAgaG92ZXI6Ymctc2xhdGUtODAwIHJvdW5kZWQtbGcgdHJhbnNpdGlvbi1jb2xvcnMgY3Vyc29yLXBvaW50ZXIgd2hpdGVzcGFjZS1ub3dyYXAgc2hhZG93LXhzXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxEb3dubG9hZCBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNVwiIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4+VMOpbMOpY2hhcmdlciBCbHVlcHJpbnQ8L3NwYW4+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbGc6Z3JpZC1jb2xzLTEyIGdhcC04IGl0ZW1zLXN0YXJ0XCI+XG4gICAgICAgICAgICB7LyogU3RlcC1ieS1zdGVwIFNldHVwIEd1aWRlICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzpjb2wtc3Bhbi03IHNwYWNlLXktNFwiPlxuICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LWJvbGQgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIHRleHQtc2xhdGUtOTAwIG1iLTJcIj5cbiAgICAgICAgICAgICAgICDDiXRhcGVzIGRlIENvbmZpZ3VyYXRpb24gUGFzIMOgIFBhc1xuICAgICAgICAgICAgICA8L2g0PlxuXG4gICAgICAgICAgICAgIHthY3RpdmVCbHVlcHJpbnQuc3RlcHMubWFwKChzdCkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYgXG4gICAgICAgICAgICAgICAgICBrZXk9e3N0LnN0ZXBOdW1iZXJ9IFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC00IHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1zbGF0ZS0yMDAgYmctc2xhdGUtNTAvNzAgaG92ZXI6Ymctd2hpdGUgaG92ZXI6c2hhZG93LXhzIHRyYW5zaXRpb24tYWxsXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBtYi0xLjVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInctNSBoLTUgcm91bmRlZC1mdWxsIGJnLWluZGlnby02MDAgdGV4dC13aGl0ZSB0ZXh0LVsxMXB4XSBmb250LWJvbGQgZm9udC1tb25vIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7c3Quc3RlcE51bWJlcn1cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyBmb250LWJvbGQgdGV4dC1zbGF0ZS05MDBcIj57c3QudGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bMTFweF0gZm9udC1zZW1pYm9sZCB0ZXh0LWluZGlnby02MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7c3QudG9vbH1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zbGF0ZS02MDAgbWItMiBsZWFkaW5nLXJlbGF4ZWRcIj5cbiAgICAgICAgICAgICAgICAgICAge3N0LmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMi41IHJvdW5kZWQtbGcgYmctYW1iZXItNTAvNzAgYm9yZGVyIGJvcmRlci1hbWJlci0yMDAvNjAgdGV4dC1bMTFweF0gdGV4dC1hbWJlci05MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZFwiPkNvbnNlaWwgcHJhdGlxdWUgOjwvc3Bhbj4ge3N0LmNvbmZpZ1RpcH1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogSlNPTiBTY2hlbWEgQ29kZSBQcmV2aWV3ICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzpjb2wtc3Bhbi01IGJnLXNsYXRlLTk1MCByb3VuZGVkLXhsIHAtNCB0ZXh0LXNsYXRlLTIwMCBib3JkZXIgYm9yZGVyLXNsYXRlLTgwMFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBtYi0zIHRleHQteHMgZm9udC1tb25vIHRleHQtc2xhdGUtNDAwXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEuNSB0ZXh0LWluZGlnby00MDAgZm9udC1ib2xkXCI+XG4gICAgICAgICAgICAgICAgICA8RmlsZUNvZGUgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5Nb2TDqGxlIE1ha2UuY29tIChFeHRyYWl0IEpTT04pPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5QcmV0IMOgIGwnaW1wb3J0PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8cHJlIGNsYXNzTmFtZT1cInRleHQtWzExcHhdIGZvbnQtbW9ubyBsZWFkaW5nLXJlbGF4ZWQgdGV4dC1zbGF0ZS0zMDAgb3ZlcmZsb3cteC1hdXRvIHAtMyBiZy1zbGF0ZS05MDAgcm91bmRlZC1sZyBtYXgtaC1bMzYwcHhdIGJvcmRlciBib3JkZXItc2xhdGUtODAwXCI+XG4gICAgICAgICAgICAgICAge2FjdGl2ZUJsdWVwcmludC5qc29uU2NoZW1hUHJldmlld31cbiAgICAgICAgICAgICAgPC9wcmU+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IHAtMyByb3VuZGVkLWxnIGJnLXNsYXRlLTkwMCBib3JkZXIgYm9yZGVyLXNsYXRlLTgwMCB0ZXh0LVsxMXB4XSB0ZXh0LXNsYXRlLTQwMFwiPlxuICAgICAgICAgICAgICAgIPCfkqEgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LXNsYXRlLTIwMFwiPkltcG9ydCBkaXJlY3QgZGFucyBNYWtlLmNvbSA6PC9zcGFuPiBDbGlxdWV6IHN1ciBcIkNyZWF0ZSBuZXcgc2NlbmFyaW9cIiDinpQgbWVudSBcIi4uLlwiIOKelCBcIkltcG9ydCBCbHVlcHJpbnRcIiBldCBjb2xsZXogY2Ugc2Now6ltYS5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuIl19