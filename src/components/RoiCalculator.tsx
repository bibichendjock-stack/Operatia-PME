const React = __vite__cjsImport0_react; const useState = __vite__cjsImport0_react["useState"];const _jsxDEV = __vite__cjsImport2_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=f4bb9b4f";
import { Calculator, TrendingUp, Clock, Euro, ArrowRight } from "/node_modules/.vite/deps/lucide-react.js?v=f4bb9b4f";
var _jsxFileName = "/app/applet/src/components/RoiCalculator.tsx";
import __vite__cjsImport2_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=f4bb9b4f";
export const RoiCalculator = ({ onConfigureAgent }) => {
	// Input states
	const [teamSize, setTeamSize] = useState(4);
	const [hoursPerWeekPerPerson, setHoursPerWeekPerPerson] = useState(8);
	const [hourlyCost, setHourlyCost] = useState(42);
	const [unpaidInvoicesAnnual, setUnpaidInvoicesAnnual] = useState(24e3);
	// Calculations
	// Agent automates approximately 70% of repetitive operational manual tasks
	const automationRate = .7;
	const hoursSavedWeekly = teamSize * hoursPerWeekPerPerson * automationRate;
	const hoursSavedMonthly = Math.round(hoursSavedWeekly * 4.33);
	const hoursSavedAnnually = Math.round(hoursSavedWeekly * 50);
	// Financial gain from saved labor/time
	const annualTimeCostSaved = Math.round(hoursSavedAnnually * hourlyCost);
	// Cash recovered from overdue invoices (average +42% recovered faster)
	const cashRecoveredAnnually = Math.round(unpaidInvoicesAnnual * .42);
	// Annual tool stack cost (Make.com Pro 19€/m + Gemini API ~8€/m + Twilio/WhatsApp ~15€/m = ~42€/m => 504€/year)
	const annualToolCost = 504;
	const totalAnnualBenefit = annualTimeCostSaved + cashRecoveredAnnually;
	const netRoiMultiplier = Math.round((totalAnnualBenefit - annualToolCost) / annualToolCost);
	return /* @__PURE__ */ _jsxDEV("section", {
		id: "roi",
		className: "py-16 bg-white border-b border-slate-200",
		children: /* @__PURE__ */ _jsxDEV("div", {
			className: "max-w-7xl mx-auto px-6",
			children: [/* @__PURE__ */ _jsxDEV("div", {
				className: "max-w-3xl mb-12",
				children: [
					/* @__PURE__ */ _jsxDEV("div", {
						className: "text-xs font-semibold uppercase tracking-wider text-indigo-700 mb-2",
						children: "Rentabilité & Gain de Temps"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 39,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ _jsxDEV("h2", {
						className: "text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 text-balance",
						children: "Calculateur de ROI & Économies pour votre PME"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 42,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ _jsxDEV("p", {
						className: "text-sm sm:text-base text-slate-600 mt-3 leading-relaxed",
						children: "Évaluez en quelques clics le nombre d’heures libérées chaque mois pour votre équipe et la trésorerie sécurisée grâce à l'automatisation par agents no-code."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 45,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 38,
				columnNumber: 9
			}, this), /* @__PURE__ */ _jsxDEV("div", {
				className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-start",
				children: [/* @__PURE__ */ _jsxDEV("div", {
					className: "lg:col-span-6 bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6",
					children: [
						/* @__PURE__ */ _jsxDEV("h3", {
							className: "text-base font-bold text-slate-900 flex items-center gap-2 pb-3 border-b border-slate-200",
							children: [/* @__PURE__ */ _jsxDEV(Calculator, { className: "w-5 h-5 text-indigo-600" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 54,
								columnNumber: 15
							}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Paramètres de votre Entreprise" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 55,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 53,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("div", { children: [
							/* @__PURE__ */ _jsxDEV("div", {
								className: "flex items-center justify-between mb-2",
								children: [/* @__PURE__ */ _jsxDEV("label", {
									className: "text-xs font-semibold text-slate-800",
									children: "Collaborateurs opérationnels"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 61,
									columnNumber: 17
								}, this), /* @__PURE__ */ _jsxDEV("span", {
									className: "text-sm font-bold font-mono text-indigo-600 tabular-nums",
									children: [
										teamSize,
										" ",
										teamSize > 1 ? "personnes" : "personne"
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 64,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 60,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("input", {
								type: "range",
								min: 1,
								max: 20,
								step: 1,
								value: teamSize,
								onChange: (e) => setTeamSize(Number(e.target.value)),
								className: "w-full accent-indigo-600 cursor-pointer"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 68,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "flex justify-between text-[11px] text-slate-400 mt-1",
								children: [
									/* @__PURE__ */ _jsxDEV("span", { children: "1 personne" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 78,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ _jsxDEV("span", { children: "10 personnes" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 79,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ _jsxDEV("span", { children: "20 personnes" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 80,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 77,
								columnNumber: 15
							}, this)
						] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 59,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("div", { children: [
							/* @__PURE__ */ _jsxDEV("div", {
								className: "flex items-center justify-between mb-2",
								children: [/* @__PURE__ */ _jsxDEV("label", {
									className: "text-xs font-semibold text-slate-800",
									children: "Heures passées sur les tâches répétitives / sem / pers"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 87,
									columnNumber: 17
								}, this), /* @__PURE__ */ _jsxDEV("span", {
									className: "text-sm font-bold font-mono text-indigo-600 tabular-nums",
									children: [hoursPerWeekPerPerson, "h / semaine"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 90,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 86,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("input", {
								type: "range",
								min: 2,
								max: 25,
								step: 1,
								value: hoursPerWeekPerPerson,
								onChange: (e) => setHoursPerWeekPerPerson(Number(e.target.value)),
								className: "w-full accent-indigo-600 cursor-pointer"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 94,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "text-[11px] text-slate-500 mt-1",
								children: "(Support FAQ, devis manuels, relances impayés, calage rdv)"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 103,
								columnNumber: 15
							}, this)
						] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 85,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("div", { children: [
							/* @__PURE__ */ _jsxDEV("div", {
								className: "flex items-center justify-between mb-2",
								children: [/* @__PURE__ */ _jsxDEV("label", {
									className: "text-xs font-semibold text-slate-800",
									children: "Coût horaire moyen chargé (€)"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 111,
									columnNumber: 17
								}, this), /* @__PURE__ */ _jsxDEV("span", {
									className: "text-sm font-bold font-mono text-indigo-600 tabular-nums",
									children: [hourlyCost, " € / heure"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 114,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 110,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("input", {
								type: "range",
								min: 25,
								max: 90,
								step: 1,
								value: hourlyCost,
								onChange: (e) => setHourlyCost(Number(e.target.value)),
								className: "w-full accent-indigo-600 cursor-pointer"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 118,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "flex justify-between text-[11px] text-slate-400 mt-1",
								children: [
									/* @__PURE__ */ _jsxDEV("span", { children: "25 €/h (TPE)" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 128,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ _jsxDEV("span", { children: "50 €/h (PME)" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 129,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ _jsxDEV("span", { children: "90 €/h (Cadre / Consultant)" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 130,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 127,
								columnNumber: 15
							}, this)
						] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 109,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("div", { children: [
							/* @__PURE__ */ _jsxDEV("div", {
								className: "flex items-center justify-between mb-2",
								children: [/* @__PURE__ */ _jsxDEV("label", {
									className: "text-xs font-semibold text-slate-800",
									children: "Volume annuel de retards de paiement / impayés (€)"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 137,
									columnNumber: 17
								}, this), /* @__PURE__ */ _jsxDEV("span", {
									className: "text-sm font-bold font-mono text-indigo-600 tabular-nums",
									children: [unpaidInvoicesAnnual.toLocaleString("fr-FR"), " € / an"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 140,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 136,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("input", {
								type: "range",
								min: 0,
								max: 1e5,
								step: 2e3,
								value: unpaidInvoicesAnnual,
								onChange: (e) => setUnpaidInvoicesAnnual(Number(e.target.value)),
								className: "w-full accent-indigo-600 cursor-pointer"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 144,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "text-[11px] text-slate-500 mt-1",
								children: "Retards au-delà de 30 jours impactant votre trésorerie"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 153,
								columnNumber: 15
							}, this)
						] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 135,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 52,
					columnNumber: 11
				}, this), /* @__PURE__ */ _jsxDEV("div", {
					className: "lg:col-span-6 bg-slate-900 rounded-2xl text-white p-6 sm:p-8 flex flex-col justify-between shadow-xl border border-slate-800",
					children: [/* @__PURE__ */ _jsxDEV("div", { children: [
						/* @__PURE__ */ _jsxDEV("div", {
							className: "flex items-center justify-between pb-4 border-b border-slate-800 mb-6",
							children: [/* @__PURE__ */ _jsxDEV("span", {
								className: "text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold",
								children: "Bilan Estimatif Annuel"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 163,
								columnNumber: 17
							}, this), /* @__PURE__ */ _jsxDEV("span", {
								className: "text-xs text-emerald-400 font-mono font-bold flex items-center gap-1",
								children: [/* @__PURE__ */ _jsxDEV(TrendingUp, { className: "w-3.5 h-3.5" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 167,
									columnNumber: 19
								}, this), /* @__PURE__ */ _jsxDEV("span", { children: ["ROI Net : x", netRoiMultiplier] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 168,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 166,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 162,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "mb-8",
							children: [
								/* @__PURE__ */ _jsxDEV("div", {
									className: "text-xs uppercase tracking-wider text-slate-400 mb-1",
									children: "Valeur Totale Générée par An"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 174,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "text-4xl sm:text-5xl font-bold font-mono tracking-tight text-white tabular-nums",
									children: [totalAnnualBenefit.toLocaleString("fr-FR"), " €"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 177,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ _jsxDEV("p", {
									className: "text-xs text-slate-400 mt-2",
									children: [
										"Gain de temps valorisé (",
										annualTimeCostSaved.toLocaleString("fr-FR"),
										" €) + Trésorerie d'impayés recouvrée (",
										cashRecoveredAnnually.toLocaleString("fr-FR"),
										" €)."
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 180,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 173,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "grid grid-cols-2 gap-4 pt-6 border-t border-slate-800 mb-6",
							children: [/* @__PURE__ */ _jsxDEV("div", { children: [
								/* @__PURE__ */ _jsxDEV("div", {
									className: "flex items-center gap-1.5 text-xs text-slate-400 mb-1",
									children: [/* @__PURE__ */ _jsxDEV(Clock, { className: "w-3.5 h-3.5 text-indigo-400" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 189,
										columnNumber: 21
									}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Heures libérées" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 190,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 188,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "text-2xl font-bold font-mono text-indigo-300 tabular-nums",
									children: [hoursSavedMonthly, "h / mois"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 192,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "text-[11px] text-slate-500 mt-0.5",
									children: [
										"Soit ",
										hoursSavedAnnually,
										"h par an"
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 195,
									columnNumber: 19
								}, this)
							] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 187,
								columnNumber: 17
							}, this), /* @__PURE__ */ _jsxDEV("div", { children: [
								/* @__PURE__ */ _jsxDEV("div", {
									className: "flex items-center gap-1.5 text-xs text-slate-400 mb-1",
									children: [/* @__PURE__ */ _jsxDEV(Euro, { className: "w-3.5 h-3.5 text-emerald-400" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 202,
										columnNumber: 21
									}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Coût Outils No-Code" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 203,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 201,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "text-2xl font-bold font-mono text-emerald-400 tabular-nums",
									children: "~42 € / mois"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 205,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "text-[11px] text-slate-500 mt-0.5",
									children: "(Make Pro + Gemini API)"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 208,
									columnNumber: 19
								}, this)
							] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 200,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 186,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "space-y-2 text-xs text-slate-300 bg-slate-950/70 p-4 rounded-xl border border-slate-800 mb-6",
							children: [
								/* @__PURE__ */ _jsxDEV("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ _jsxDEV("span", { children: "Réduction du temps de réponse client :" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 217,
										columnNumber: 19
									}, this), /* @__PURE__ */ _jsxDEV("strong", {
										className: "text-white font-mono",
										children: "-92%"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 218,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 216,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ _jsxDEV("span", { children: "Baisse des rendez-vous manqués (No-show) :" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 221,
										columnNumber: 19
									}, this), /* @__PURE__ */ _jsxDEV("strong", {
										className: "text-white font-mono",
										children: "-65%"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 222,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 220,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ _jsxDEV("span", { children: "Délai moyen d'encaissement des factures :" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 225,
										columnNumber: 19
									}, this), /* @__PURE__ */ _jsxDEV("strong", {
										className: "text-white font-mono",
										children: "-18 jours"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 226,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 224,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 215,
							columnNumber: 15
						}, this)
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 161,
						columnNumber: 13
					}, this), /* @__PURE__ */ _jsxDEV("button", {
						onClick: onConfigureAgent,
						className: "w-full py-3 bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] text-white font-semibold text-xs sm:text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer",
						children: [/* @__PURE__ */ _jsxDEV("span", { children: "Déployer cette configuration pour ma PME" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 235,
							columnNumber: 15
						}, this), /* @__PURE__ */ _jsxDEV(ArrowRight, { className: "w-4 h-4" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 236,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 231,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 160,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 50,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 36,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 35,
		columnNumber: 5
	}, this);
};

//# sourceMappingURL=data:application/json;base64,eyJtYXBwaW5ncyI6IkFBQUEsT0FBTyxTQUFTLGdCQUFnQjtBQUNoQyxTQUFTLFlBQVksWUFBWSxPQUFPLE1BQW1CLGtCQUFrQjs7O0FBTTdFLE9BQU8sTUFBTSxpQkFBK0MsRUFBRSx1QkFBdUI7O0NBRW5GLE1BQU0sQ0FBQyxVQUFVLGVBQWUsU0FBaUIsQ0FBQztDQUNsRCxNQUFNLENBQUMsdUJBQXVCLDRCQUE0QixTQUFpQixDQUFDO0NBQzVFLE1BQU0sQ0FBQyxZQUFZLGlCQUFpQixTQUFpQixFQUFFO0NBQ3ZELE1BQU0sQ0FBQyxzQkFBc0IsMkJBQTJCLFNBQWlCLElBQUs7OztDQUk5RSxNQUFNLGlCQUFpQjtDQUN2QixNQUFNLG1CQUFtQixXQUFXLHdCQUF3QjtDQUM1RCxNQUFNLG9CQUFvQixLQUFLLE1BQU0sbUJBQW1CLElBQUk7Q0FDNUQsTUFBTSxxQkFBcUIsS0FBSyxNQUFNLG1CQUFtQixFQUFFOztDQUczRCxNQUFNLHNCQUFzQixLQUFLLE1BQU0scUJBQXFCLFVBQVU7O0NBR3RFLE1BQU0sd0JBQXdCLEtBQUssTUFBTSx1QkFBdUIsR0FBSTs7Q0FHcEUsTUFBTSxpQkFBaUI7Q0FFdkIsTUFBTSxxQkFBcUIsc0JBQXNCO0NBQ2pELE1BQU0sbUJBQW1CLEtBQUssT0FBTyxxQkFBcUIsa0JBQWtCLGNBQWM7Q0FFMUYsT0FDRSx3QkFBQyxXQUFEO0VBQVMsSUFBRztFQUFNLFdBQVU7WUFDMUIsd0JBQUMsT0FBRDtHQUFLLFdBQVU7YUFBZixDQUVFLHdCQUFDLE9BQUQ7SUFBSyxXQUFVO2NBQWY7S0FDRSx3QkFBQyxPQUFEO01BQUssV0FBVTtnQkFBc0U7S0FFaEY7Ozs7O0tBQ0wsd0JBQUMsTUFBRDtNQUFJLFdBQVU7Z0JBQTRFO0tBRXRGOzs7OztLQUNKLHdCQUFDLEtBQUQ7TUFBRyxXQUFVO2dCQUEyRDtLQUVyRTs7Ozs7SUFDQTs7Ozs7YUFFTCx3QkFBQyxPQUFEO0lBQUssV0FBVTtjQUFmLENBRUUsd0JBQUMsT0FBRDtLQUFLLFdBQVU7ZUFBZjtNQUNFLHdCQUFDLE1BQUQ7T0FBSSxXQUFVO2lCQUFkLENBQ0Usd0JBQUMsWUFBRCxFQUFZLFdBQVUsMEJBQTJCOzs7O2lCQUNqRCx3QkFBQyxRQUFELFlBQU0saUNBQW9DOzs7O2VBQ3hDOzs7Ozs7TUFHSix3QkFBQyxPQUFEO09BQ0Usd0JBQUMsT0FBRDtRQUFLLFdBQVU7a0JBQWYsQ0FDRSx3QkFBQyxTQUFEO1NBQU8sV0FBVTttQkFBdUM7UUFFakQ7Ozs7a0JBQ1Asd0JBQUMsUUFBRDtTQUFNLFdBQVU7bUJBQWhCO1VBQ0c7VUFBUztVQUFFLFdBQVcsSUFBSSxjQUFjO1NBQ3JDOzs7OztnQkFDSDs7Ozs7O09BQ0wsd0JBQUMsU0FBRDtRQUNFLE1BQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLE1BQU07UUFDTixPQUFPO1FBQ1AsV0FBVyxNQUFNLFlBQVksT0FBTyxFQUFFLE9BQU8sS0FBSyxDQUFDO1FBQ25ELFdBQVU7T0FDWDs7Ozs7T0FDRCx3QkFBQyxPQUFEO1FBQUssV0FBVTtrQkFBZjtTQUNFLHdCQUFDLFFBQUQsWUFBTSxhQUFnQjs7Ozs7U0FDdEIsd0JBQUMsUUFBRCxZQUFNLGVBQWtCOzs7OztTQUN4Qix3QkFBQyxRQUFELFlBQU0sZUFBa0I7Ozs7O1FBQ3JCOzs7Ozs7TUFDRjs7Ozs7TUFHTCx3QkFBQyxPQUFEO09BQ0Usd0JBQUMsT0FBRDtRQUFLLFdBQVU7a0JBQWYsQ0FDRSx3QkFBQyxTQUFEO1NBQU8sV0FBVTttQkFBdUM7UUFFakQ7Ozs7a0JBQ1Asd0JBQUMsUUFBRDtTQUFNLFdBQVU7bUJBQWhCLENBQ0csdUJBQXNCLGFBQ25COzs7OztnQkFDSDs7Ozs7O09BQ0wsd0JBQUMsU0FBRDtRQUNFLE1BQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLE1BQU07UUFDTixPQUFPO1FBQ1AsV0FBVyxNQUFNLHlCQUF5QixPQUFPLEVBQUUsT0FBTyxLQUFLLENBQUM7UUFDaEUsV0FBVTtPQUNYOzs7OztPQUNELHdCQUFDLE9BQUQ7UUFBSyxXQUFVO2tCQUFrQztPQUU1Qzs7Ozs7TUFDRjs7Ozs7TUFHTCx3QkFBQyxPQUFEO09BQ0Usd0JBQUMsT0FBRDtRQUFLLFdBQVU7a0JBQWYsQ0FDRSx3QkFBQyxTQUFEO1NBQU8sV0FBVTttQkFBdUM7UUFFakQ7Ozs7a0JBQ1Asd0JBQUMsUUFBRDtTQUFNLFdBQVU7bUJBQWhCLENBQ0csWUFBVyxZQUNSOzs7OztnQkFDSDs7Ozs7O09BQ0wsd0JBQUMsU0FBRDtRQUNFLE1BQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLE1BQU07UUFDTixPQUFPO1FBQ1AsV0FBVyxNQUFNLGNBQWMsT0FBTyxFQUFFLE9BQU8sS0FBSyxDQUFDO1FBQ3JELFdBQVU7T0FDWDs7Ozs7T0FDRCx3QkFBQyxPQUFEO1FBQUssV0FBVTtrQkFBZjtTQUNFLHdCQUFDLFFBQUQsWUFBTSxlQUFrQjs7Ozs7U0FDeEIsd0JBQUMsUUFBRCxZQUFNLGVBQWtCOzs7OztTQUN4Qix3QkFBQyxRQUFELFlBQU0sOEJBQWlDOzs7OztRQUNwQzs7Ozs7O01BQ0Y7Ozs7O01BR0wsd0JBQUMsT0FBRDtPQUNFLHdCQUFDLE9BQUQ7UUFBSyxXQUFVO2tCQUFmLENBQ0Usd0JBQUMsU0FBRDtTQUFPLFdBQVU7bUJBQXVDO1FBRWpEOzs7O2tCQUNQLHdCQUFDLFFBQUQ7U0FBTSxXQUFVO21CQUFoQixDQUNHLHFCQUFxQixlQUFlLE9BQU8sR0FBRSxTQUMxQzs7Ozs7Z0JBQ0g7Ozs7OztPQUNMLHdCQUFDLFNBQUQ7UUFDRSxNQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxNQUFNO1FBQ04sT0FBTztRQUNQLFdBQVcsTUFBTSx3QkFBd0IsT0FBTyxFQUFFLE9BQU8sS0FBSyxDQUFDO1FBQy9ELFdBQVU7T0FDWDs7Ozs7T0FDRCx3QkFBQyxPQUFEO1FBQUssV0FBVTtrQkFBa0M7T0FFNUM7Ozs7O01BQ0Y7Ozs7O0tBQ0Y7Ozs7O2NBR0wsd0JBQUMsT0FBRDtLQUFLLFdBQVU7ZUFBZixDQUNFLHdCQUFDLE9BQUQ7TUFDRSx3QkFBQyxPQUFEO09BQUssV0FBVTtpQkFBZixDQUNFLHdCQUFDLFFBQUQ7UUFBTSxXQUFVO2tCQUEyRTtPQUVyRjs7OztpQkFDTix3QkFBQyxRQUFEO1FBQU0sV0FBVTtrQkFBaEIsQ0FDRSx3QkFBQyxZQUFELEVBQVksV0FBVSxjQUFlOzs7O2tCQUNyQyx3QkFBQyxRQUFELGFBQU0sZUFBWSxnQkFBdUI7Ozs7Z0JBQ3JDOzs7OztlQUNIOzs7Ozs7TUFHTCx3QkFBQyxPQUFEO09BQUssV0FBVTtpQkFBZjtRQUNFLHdCQUFDLE9BQUQ7U0FBSyxXQUFVO21CQUF1RDtRQUVqRTs7Ozs7UUFDTCx3QkFBQyxPQUFEO1NBQUssV0FBVTttQkFBZixDQUNHLG1CQUFtQixlQUFlLE9BQU8sR0FBRSxJQUN6Qzs7Ozs7O1FBQ0wsd0JBQUMsS0FBRDtTQUFHLFdBQVU7bUJBQWI7VUFBMkM7VUFDaEIsb0JBQW9CLGVBQWUsT0FBTztVQUFFO1VBQXVDLHNCQUFzQixlQUFlLE9BQU87VUFBRTtTQUN6Sjs7Ozs7O09BQ0E7Ozs7OztNQUdMLHdCQUFDLE9BQUQ7T0FBSyxXQUFVO2lCQUFmLENBQ0Usd0JBQUMsT0FBRDtRQUNFLHdCQUFDLE9BQUQ7U0FBSyxXQUFVO21CQUFmLENBQ0Usd0JBQUMsT0FBRCxFQUFPLFdBQVUsOEJBQStCOzs7O21CQUNoRCx3QkFBQyxRQUFELFlBQU0sa0JBQXFCOzs7O2lCQUN4Qjs7Ozs7O1FBQ0wsd0JBQUMsT0FBRDtTQUFLLFdBQVU7bUJBQWYsQ0FDRyxtQkFBa0IsVUFDaEI7Ozs7OztRQUNMLHdCQUFDLE9BQUQ7U0FBSyxXQUFVO21CQUFmO1VBQW1EO1VBQzNDO1VBQW1CO1NBQ3RCOzs7Ozs7T0FDRjs7OztpQkFFTCx3QkFBQyxPQUFEO1FBQ0Usd0JBQUMsT0FBRDtTQUFLLFdBQVU7bUJBQWYsQ0FDRSx3QkFBQyxNQUFELEVBQU0sV0FBVSwrQkFBZ0M7Ozs7bUJBQ2hELHdCQUFDLFFBQUQsWUFBTSxzQkFBeUI7Ozs7aUJBQzVCOzs7Ozs7UUFDTCx3QkFBQyxPQUFEO1NBQUssV0FBVTttQkFBNkQ7UUFFdkU7Ozs7O1FBQ0wsd0JBQUMsT0FBRDtTQUFLLFdBQVU7bUJBQW9DO1FBRTlDOzs7OztPQUNGOzs7O2VBQ0Y7Ozs7OztNQUdMLHdCQUFDLE9BQUQ7T0FBSyxXQUFVO2lCQUFmO1FBQ0Usd0JBQUMsT0FBRDtTQUFLLFdBQVU7bUJBQWYsQ0FDRSx3QkFBQyxRQUFELFlBQU0seUNBQTRDOzs7O21CQUNsRCx3QkFBQyxVQUFEO1VBQVEsV0FBVTtvQkFBdUI7U0FBWTs7OztpQkFDbEQ7Ozs7OztRQUNMLHdCQUFDLE9BQUQ7U0FBSyxXQUFVO21CQUFmLENBQ0Usd0JBQUMsUUFBRCxZQUFNLDZDQUFnRDs7OzttQkFDdEQsd0JBQUMsVUFBRDtVQUFRLFdBQVU7b0JBQXVCO1NBQVk7Ozs7aUJBQ2xEOzs7Ozs7UUFDTCx3QkFBQyxPQUFEO1NBQUssV0FBVTttQkFBZixDQUNFLHdCQUFDLFFBQUQsWUFBTSw0Q0FBK0M7Ozs7bUJBQ3JELHdCQUFDLFVBQUQ7VUFBUSxXQUFVO29CQUF1QjtTQUFpQjs7OztpQkFDdkQ7Ozs7OztPQUNGOzs7Ozs7S0FDRjs7OztlQUVMLHdCQUFDLFVBQUQ7TUFDRSxTQUFTO01BQ1QsV0FBVTtnQkFGWixDQUlFLHdCQUFDLFFBQUQsWUFBTSwyQ0FBOEM7Ozs7Z0JBQ3BELHdCQUFDLFlBQUQsRUFBWSxXQUFVLFVBQVc7Ozs7Y0FDM0I7Ozs7O2FBQ0w7Ozs7O1lBQ0Y7Ozs7O1dBQ0Y7Ozs7OztDQUNFOzs7OztBQUViIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIlJvaUNhbGN1bGF0b3IudHN4Il0sInZlcnNpb24iOjMsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENhbGN1bGF0b3IsIFRyZW5kaW5nVXAsIENsb2NrLCBFdXJvLCBTaGllbGRDaGVjaywgQXJyb3dSaWdodCB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5cbmludGVyZmFjZSBSb2lDYWxjdWxhdG9yUHJvcHMge1xuICBvbkNvbmZpZ3VyZUFnZW50OiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgUm9pQ2FsY3VsYXRvcjogUmVhY3QuRkM8Um9pQ2FsY3VsYXRvclByb3BzPiA9ICh7IG9uQ29uZmlndXJlQWdlbnQgfSkgPT4ge1xuICAvLyBJbnB1dCBzdGF0ZXNcbiAgY29uc3QgW3RlYW1TaXplLCBzZXRUZWFtU2l6ZV0gPSB1c2VTdGF0ZTxudW1iZXI+KDQpO1xuICBjb25zdCBbaG91cnNQZXJXZWVrUGVyUGVyc29uLCBzZXRIb3Vyc1BlcldlZWtQZXJQZXJzb25dID0gdXNlU3RhdGU8bnVtYmVyPig4KTtcbiAgY29uc3QgW2hvdXJseUNvc3QsIHNldEhvdXJseUNvc3RdID0gdXNlU3RhdGU8bnVtYmVyPig0Mik7XG4gIGNvbnN0IFt1bnBhaWRJbnZvaWNlc0FubnVhbCwgc2V0VW5wYWlkSW52b2ljZXNBbm51YWxdID0gdXNlU3RhdGU8bnVtYmVyPigyNDAwMCk7XG5cbiAgLy8gQ2FsY3VsYXRpb25zXG4gIC8vIEFnZW50IGF1dG9tYXRlcyBhcHByb3hpbWF0ZWx5IDcwJSBvZiByZXBldGl0aXZlIG9wZXJhdGlvbmFsIG1hbnVhbCB0YXNrc1xuICBjb25zdCBhdXRvbWF0aW9uUmF0ZSA9IDAuNztcbiAgY29uc3QgaG91cnNTYXZlZFdlZWtseSA9IHRlYW1TaXplICogaG91cnNQZXJXZWVrUGVyUGVyc29uICogYXV0b21hdGlvblJhdGU7XG4gIGNvbnN0IGhvdXJzU2F2ZWRNb250aGx5ID0gTWF0aC5yb3VuZChob3Vyc1NhdmVkV2Vla2x5ICogNC4zMyk7XG4gIGNvbnN0IGhvdXJzU2F2ZWRBbm51YWxseSA9IE1hdGgucm91bmQoaG91cnNTYXZlZFdlZWtseSAqIDUwKTsgLy8gNTAgd29yayB3ZWVrc1xuXG4gIC8vIEZpbmFuY2lhbCBnYWluIGZyb20gc2F2ZWQgbGFib3IvdGltZVxuICBjb25zdCBhbm51YWxUaW1lQ29zdFNhdmVkID0gTWF0aC5yb3VuZChob3Vyc1NhdmVkQW5udWFsbHkgKiBob3VybHlDb3N0KTtcblxuICAvLyBDYXNoIHJlY292ZXJlZCBmcm9tIG92ZXJkdWUgaW52b2ljZXMgKGF2ZXJhZ2UgKzQyJSByZWNvdmVyZWQgZmFzdGVyKVxuICBjb25zdCBjYXNoUmVjb3ZlcmVkQW5udWFsbHkgPSBNYXRoLnJvdW5kKHVucGFpZEludm9pY2VzQW5udWFsICogMC40Mik7XG5cbiAgLy8gQW5udWFsIHRvb2wgc3RhY2sgY29zdCAoTWFrZS5jb20gUHJvIDE54oKsL20gKyBHZW1pbmkgQVBJIH444oKsL20gKyBUd2lsaW8vV2hhdHNBcHAgfjE14oKsL20gPSB+NDLigqwvbSA9PiA1MDTigqwveWVhcilcbiAgY29uc3QgYW5udWFsVG9vbENvc3QgPSA1MDQ7XG5cbiAgY29uc3QgdG90YWxBbm51YWxCZW5lZml0ID0gYW5udWFsVGltZUNvc3RTYXZlZCArIGNhc2hSZWNvdmVyZWRBbm51YWxseTtcbiAgY29uc3QgbmV0Um9pTXVsdGlwbGllciA9IE1hdGgucm91bmQoKHRvdGFsQW5udWFsQmVuZWZpdCAtIGFubnVhbFRvb2xDb3N0KSAvIGFubnVhbFRvb2xDb3N0KTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGlkPVwicm9pXCIgY2xhc3NOYW1lPVwicHktMTYgYmctd2hpdGUgYm9yZGVyLWIgYm9yZGVyLXNsYXRlLTIwMFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy03eGwgbXgtYXV0byBweC02XCI+XG4gICAgICAgIHsvKiBTZWN0aW9uIEhlYWRlciAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy0zeGwgbWItMTJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1zZW1pYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgdGV4dC1pbmRpZ28tNzAwIG1iLTJcIj5cbiAgICAgICAgICAgIFJlbnRhYmlsaXTDqSAmIEdhaW4gZGUgVGVtcHNcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgc206dGV4dC0zeGwgZm9udC1ib2xkIHRyYWNraW5nLXRpZ2h0IHRleHQtc2xhdGUtOTAwIHRleHQtYmFsYW5jZVwiPlxuICAgICAgICAgICAgQ2FsY3VsYXRldXIgZGUgUk9JICYgw4ljb25vbWllcyBwb3VyIHZvdHJlIFBNRVxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBzbTp0ZXh0LWJhc2UgdGV4dC1zbGF0ZS02MDAgbXQtMyBsZWFkaW5nLXJlbGF4ZWRcIj5cbiAgICAgICAgICAgIMOJdmFsdWV6IGVuIHF1ZWxxdWVzIGNsaWNzIGxlIG5vbWJyZSBk4oCZaGV1cmVzIGxpYsOpcsOpZXMgY2hhcXVlIG1vaXMgcG91ciB2b3RyZSDDqXF1aXBlIGV0IGxhIHRyw6lzb3JlcmllIHPDqWN1cmlzw6llIGdyw6JjZSDDoCBsJ2F1dG9tYXRpc2F0aW9uIHBhciBhZ2VudHMgbm8tY29kZS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBsZzpncmlkLWNvbHMtMTIgZ2FwLTggaXRlbXMtc3RhcnRcIj5cbiAgICAgICAgICB7LyogU2xpZGVycyBJbnB1dCBQYW5lbCAoNiBjb2xzKSAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmNvbC1zcGFuLTYgYmctc2xhdGUtNTAgcm91bmRlZC0yeGwgYm9yZGVyIGJvcmRlci1zbGF0ZS0yMDAgcC02IHNtOnAtOCBzcGFjZS15LTZcIj5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1ib2xkIHRleHQtc2xhdGUtOTAwIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHBiLTMgYm9yZGVyLWIgYm9yZGVyLXNsYXRlLTIwMFwiPlxuICAgICAgICAgICAgICA8Q2FsY3VsYXRvciBjbGFzc05hbWU9XCJ3LTUgaC01IHRleHQtaW5kaWdvLTYwMFwiIC8+XG4gICAgICAgICAgICAgIDxzcGFuPlBhcmFtw6h0cmVzIGRlIHZvdHJlIEVudHJlcHJpc2U8L3NwYW4+XG4gICAgICAgICAgICA8L2gzPlxuXG4gICAgICAgICAgICB7LyogU2xpZGVyIDE6IFRlYW0gc2l6ZSAqL31cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG1iLTJcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtc2xhdGUtODAwXCI+XG4gICAgICAgICAgICAgICAgICBDb2xsYWJvcmF0ZXVycyBvcMOpcmF0aW9ubmVsc1xuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGQgZm9udC1tb25vIHRleHQtaW5kaWdvLTYwMCB0YWJ1bGFyLW51bXNcIj5cbiAgICAgICAgICAgICAgICAgIHt0ZWFtU2l6ZX0ge3RlYW1TaXplID4gMSA/ICdwZXJzb25uZXMnIDogJ3BlcnNvbm5lJ31cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwicmFuZ2VcIlxuICAgICAgICAgICAgICAgIG1pbj17MX1cbiAgICAgICAgICAgICAgICBtYXg9ezIwfVxuICAgICAgICAgICAgICAgIHN0ZXA9ezF9XG4gICAgICAgICAgICAgICAgdmFsdWU9e3RlYW1TaXplfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGVhbVNpemUoTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGFjY2VudC1pbmRpZ28tNjAwIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiB0ZXh0LVsxMXB4XSB0ZXh0LXNsYXRlLTQwMCBtdC0xXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+MSBwZXJzb25uZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3Bhbj4xMCBwZXJzb25uZXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4+MjAgcGVyc29ubmVzPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogU2xpZGVyIDI6IEhvdXJzIHNwZW50IHBlciBwZXJzb24gb24gcmVwZXRpdGl2ZSB0YXNrcyAqL31cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG1iLTJcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtc2xhdGUtODAwXCI+XG4gICAgICAgICAgICAgICAgICBIZXVyZXMgcGFzc8OpZXMgc3VyIGxlcyB0w6JjaGVzIHLDqXDDqXRpdGl2ZXMgLyBzZW0gLyBwZXJzXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtYm9sZCBmb250LW1vbm8gdGV4dC1pbmRpZ28tNjAwIHRhYnVsYXItbnVtc1wiPlxuICAgICAgICAgICAgICAgICAge2hvdXJzUGVyV2Vla1BlclBlcnNvbn1oIC8gc2VtYWluZVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJyYW5nZVwiXG4gICAgICAgICAgICAgICAgbWluPXsyfVxuICAgICAgICAgICAgICAgIG1heD17MjV9XG4gICAgICAgICAgICAgICAgc3RlcD17MX1cbiAgICAgICAgICAgICAgICB2YWx1ZT17aG91cnNQZXJXZWVrUGVyUGVyc29ufVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SG91cnNQZXJXZWVrUGVyUGVyc29uKE51bWJlcihlLnRhcmdldC52YWx1ZSkpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBhY2NlbnQtaW5kaWdvLTYwMCBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMTFweF0gdGV4dC1zbGF0ZS01MDAgbXQtMVwiPlxuICAgICAgICAgICAgICAgIChTdXBwb3J0IEZBUSwgZGV2aXMgbWFudWVscywgcmVsYW5jZXMgaW1wYXnDqXMsIGNhbGFnZSByZHYpXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsvKiBTbGlkZXIgMzogQXZlcmFnZSBob3VybHkgbG9hZGVkIGNvc3QgKi99XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBtYi0yXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LXNsYXRlLTgwMFwiPlxuICAgICAgICAgICAgICAgICAgQ2/Du3QgaG9yYWlyZSBtb3llbiBjaGFyZ8OpICjigqwpXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtYm9sZCBmb250LW1vbm8gdGV4dC1pbmRpZ28tNjAwIHRhYnVsYXItbnVtc1wiPlxuICAgICAgICAgICAgICAgICAge2hvdXJseUNvc3R9IOKCrCAvIGhldXJlXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInJhbmdlXCJcbiAgICAgICAgICAgICAgICBtaW49ezI1fVxuICAgICAgICAgICAgICAgIG1heD17OTB9XG4gICAgICAgICAgICAgICAgc3RlcD17MX1cbiAgICAgICAgICAgICAgICB2YWx1ZT17aG91cmx5Q29zdH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEhvdXJseUNvc3QoTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGFjY2VudC1pbmRpZ28tNjAwIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiB0ZXh0LVsxMXB4XSB0ZXh0LXNsYXRlLTQwMCBtdC0xXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+MjUg4oKsL2ggKFRQRSk8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4+NTAg4oKsL2ggKFBNRSk8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4+OTAg4oKsL2ggKENhZHJlIC8gQ29uc3VsdGFudCk8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsvKiBTbGlkZXIgNDogT3ZlcmR1ZSBpbnZvaWNlcyBwZXIgeWVhciAqL31cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG1iLTJcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtc2xhdGUtODAwXCI+XG4gICAgICAgICAgICAgICAgICBWb2x1bWUgYW5udWVsIGRlIHJldGFyZHMgZGUgcGFpZW1lbnQgLyBpbXBhecOpcyAo4oKsKVxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGQgZm9udC1tb25vIHRleHQtaW5kaWdvLTYwMCB0YWJ1bGFyLW51bXNcIj5cbiAgICAgICAgICAgICAgICAgIHt1bnBhaWRJbnZvaWNlc0FubnVhbC50b0xvY2FsZVN0cmluZygnZnItRlInKX0g4oKsIC8gYW5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwicmFuZ2VcIlxuICAgICAgICAgICAgICAgIG1pbj17MH1cbiAgICAgICAgICAgICAgICBtYXg9ezEwMDAwMH1cbiAgICAgICAgICAgICAgICBzdGVwPXsyMDAwfVxuICAgICAgICAgICAgICAgIHZhbHVlPXt1bnBhaWRJbnZvaWNlc0FubnVhbH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFVucGFpZEludm9pY2VzQW5udWFsKE51bWJlcihlLnRhcmdldC52YWx1ZSkpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBhY2NlbnQtaW5kaWdvLTYwMCBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMTFweF0gdGV4dC1zbGF0ZS01MDAgbXQtMVwiPlxuICAgICAgICAgICAgICAgIFJldGFyZHMgYXUtZGVsw6AgZGUgMzAgam91cnMgaW1wYWN0YW50IHZvdHJlIHRyw6lzb3JlcmllXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogUmVzdWx0cyBLUEkgUGFuZWwgKDYgY29scykgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzpjb2wtc3Bhbi02IGJnLXNsYXRlLTkwMCByb3VuZGVkLTJ4bCB0ZXh0LXdoaXRlIHAtNiBzbTpwLTggZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW4gc2hhZG93LXhsIGJvcmRlciBib3JkZXItc2xhdGUtODAwXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBwYi00IGJvcmRlci1iIGJvcmRlci1zbGF0ZS04MDAgbWItNlwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1tb25vIHVwcGVyY2FzZSB0cmFja2luZy13aWRlciB0ZXh0LWluZGlnby00MDAgZm9udC1zZW1pYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgQmlsYW4gRXN0aW1hdGlmIEFubnVlbFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZW1lcmFsZC00MDAgZm9udC1tb25vIGZvbnQtYm9sZCBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMVwiPlxuICAgICAgICAgICAgICAgICAgPFRyZW5kaW5nVXAgY2xhc3NOYW1lPVwidy0zLjUgaC0zLjVcIiAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+Uk9JIE5ldCA6IHh7bmV0Um9pTXVsdGlwbGllcn08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICB7LyogQmlnIEtQSSAqL31cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi04XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHVwcGVyY2FzZSB0cmFja2luZy13aWRlciB0ZXh0LXNsYXRlLTQwMCBtYi0xXCI+XG4gICAgICAgICAgICAgICAgICBWYWxldXIgVG90YWxlIEfDqW7DqXLDqWUgcGFyIEFuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBzbTp0ZXh0LTV4bCBmb250LWJvbGQgZm9udC1tb25vIHRyYWNraW5nLXRpZ2h0IHRleHQtd2hpdGUgdGFidWxhci1udW1zXCI+XG4gICAgICAgICAgICAgICAgICB7dG90YWxBbm51YWxCZW5lZml0LnRvTG9jYWxlU3RyaW5nKCdmci1GUicpfSDigqxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc2xhdGUtNDAwIG10LTJcIj5cbiAgICAgICAgICAgICAgICAgIEdhaW4gZGUgdGVtcHMgdmFsb3Jpc8OpICh7YW5udWFsVGltZUNvc3RTYXZlZC50b0xvY2FsZVN0cmluZygnZnItRlInKX0g4oKsKSArIFRyw6lzb3JlcmllIGQnaW1wYXnDqXMgcmVjb3V2csOpZSAoe2Nhc2hSZWNvdmVyZWRBbm51YWxseS50b0xvY2FsZVN0cmluZygnZnItRlInKX0g4oKsKS5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIHsvKiBHcmlkIE1ldHJpY3MgKi99XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtNCBwdC02IGJvcmRlci10IGJvcmRlci1zbGF0ZS04MDAgbWItNlwiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xLjUgdGV4dC14cyB0ZXh0LXNsYXRlLTQwMCBtYi0xXCI+XG4gICAgICAgICAgICAgICAgICAgIDxDbG9jayBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNSB0ZXh0LWluZGlnby00MDBcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5IZXVyZXMgbGliw6lyw6llczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgZm9udC1tb25vIHRleHQtaW5kaWdvLTMwMCB0YWJ1bGFyLW51bXNcIj5cbiAgICAgICAgICAgICAgICAgICAge2hvdXJzU2F2ZWRNb250aGx5fWggLyBtb2lzXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMTFweF0gdGV4dC1zbGF0ZS01MDAgbXQtMC41XCI+XG4gICAgICAgICAgICAgICAgICAgIFNvaXQge2hvdXJzU2F2ZWRBbm51YWxseX1oIHBhciBhblxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMS41IHRleHQteHMgdGV4dC1zbGF0ZS00MDAgbWItMVwiPlxuICAgICAgICAgICAgICAgICAgICA8RXVybyBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNSB0ZXh0LWVtZXJhbGQtNDAwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+Q2/Du3QgT3V0aWxzIE5vLUNvZGU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIGZvbnQtbW9ubyB0ZXh0LWVtZXJhbGQtNDAwIHRhYnVsYXItbnVtc1wiPlxuICAgICAgICAgICAgICAgICAgICB+NDIg4oKsIC8gbW9pc1xuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzExcHhdIHRleHQtc2xhdGUtNTAwIG10LTAuNVwiPlxuICAgICAgICAgICAgICAgICAgICAoTWFrZSBQcm8gKyBHZW1pbmkgQVBJKVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIHsvKiBRdWFsaXRhdGl2ZSBJbXBhY3RzICovfVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMiB0ZXh0LXhzIHRleHQtc2xhdGUtMzAwIGJnLXNsYXRlLTk1MC83MCBwLTQgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLXNsYXRlLTgwMCBtYi02XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPlLDqWR1Y3Rpb24gZHUgdGVtcHMgZGUgcsOpcG9uc2UgY2xpZW50IDo8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZm9udC1tb25vXCI+LTkyJTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5CYWlzc2UgZGVzIHJlbmRlei12b3VzIG1hbnF1w6lzIChOby1zaG93KSA6PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGZvbnQtbW9ub1wiPi02NSU8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+RMOpbGFpIG1veWVuIGQnZW5jYWlzc2VtZW50IGRlcyBmYWN0dXJlcyA6PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGZvbnQtbW9ub1wiPi0xOCBqb3Vyczwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ29uZmlndXJlQWdlbnR9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweS0zIGJnLWluZGlnby02MDAgaG92ZXI6YmctaW5kaWdvLTcwMCBhY3RpdmU6c2NhbGUtWzAuOThdIHRleHQtd2hpdGUgZm9udC1zZW1pYm9sZCB0ZXh0LXhzIHNtOnRleHQtc20gcm91bmRlZC14bCB0cmFuc2l0aW9uLWFsbCBzaGFkb3ctbWQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTIgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3Bhbj5Ew6lwbG95ZXIgY2V0dGUgY29uZmlndXJhdGlvbiBwb3VyIG1hIFBNRTwvc3Bhbj5cbiAgICAgICAgICAgICAgPEFycm93UmlnaHQgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuIl19