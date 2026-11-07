const React = __vite__cjsImport0_react;const _jsxDEV = __vite__cjsImport2_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=f4bb9b4f";
import { Play, Layers, CheckCircle2, Zap, Laptop } from "/node_modules/.vite/deps/lucide-react.js?v=f4bb9b4f";
var _jsxFileName = "/app/applet/src/components/HeroSection.tsx";
import __vite__cjsImport2_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=f4bb9b4f";
export const HeroSection = ({ onExploreAgents, onLaunchSimulator, onOpenDownload }) => {
	return /* @__PURE__ */ _jsxDEV("section", {
		className: "relative overflow-hidden bg-white border-b border-slate-200 pt-12 pb-16 lg:pt-16 lg:pb-20",
		children: /* @__PURE__ */ _jsxDEV("div", {
			className: "max-w-7xl mx-auto px-6",
			children: [/* @__PURE__ */ _jsxDEV("div", {
				className: "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center",
				children: [/* @__PURE__ */ _jsxDEV("div", {
					className: "lg:col-span-7 flex flex-col justify-center",
					children: [
						/* @__PURE__ */ _jsxDEV("div", {
							className: "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-700 mb-4",
							children: [
								/* @__PURE__ */ _jsxDEV("span", { children: "Révolution IA pour TPE & PME" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 22,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV("span", {
									"aria-hidden": "true",
									children: "·"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 23,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV("span", { children: "100% No-Code" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 24,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 21,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("h1", {
							className: "text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15] mb-6 text-balance",
							children: "Automatisez votre PME avec des Agents IA configurés sur vos outils existants"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 27,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("p", {
							className: "text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl",
							children: [
								"La demande explose. Déployez en quelques heures des agents autonomes pour le ",
								/* @__PURE__ */ _jsxDEV("strong", {
									className: "font-semibold text-slate-900",
									children: "service client 24/7"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 32,
									columnNumber: 92
								}, this),
								", les ",
								/* @__PURE__ */ _jsxDEV("strong", {
									className: "font-semibold text-slate-900",
									children: "relances de factures"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 32,
									columnNumber: 175
								}, this),
								", la ",
								/* @__PURE__ */ _jsxDEV("strong", {
									className: "font-semibold text-slate-900",
									children: "prise de rendez-vous"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 32,
									columnNumber: 258
								}, this),
								" et le ",
								/* @__PURE__ */ _jsxDEV("strong", {
									className: "font-semibold text-slate-900",
									children: "suivi des prospects"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 32,
									columnNumber: 343
								}, this),
								" en reliant simplement Make, WhatsApp, Google Calendar et votre logiciel de facturation."
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 31,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "flex flex-wrap items-center gap-3.5 mb-8",
							children: [
								/* @__PURE__ */ _jsxDEV("button", {
									onClick: onLaunchSimulator,
									className: "flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 active:scale-[0.98] transition-all shadow-sm cursor-pointer whitespace-nowrap",
									children: [/* @__PURE__ */ _jsxDEV(Play, { className: "w-4 h-4 fill-white" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 40,
										columnNumber: 17
									}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Tester le Simulateur en Direct" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 41,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 36,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV("button", {
									onClick: onExploreAgents,
									className: "flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 active:scale-[0.98] rounded-lg transition-all cursor-pointer whitespace-nowrap",
									children: [/* @__PURE__ */ _jsxDEV(Layers, { className: "w-4 h-4 text-slate-500" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 47,
										columnNumber: 17
									}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Explorer les 4 Piliers d’Agents" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 48,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 43,
									columnNumber: 15
								}, this),
								onOpenDownload && /* @__PURE__ */ _jsxDEV("button", {
									onClick: onOpenDownload,
									className: "flex items-center gap-2 px-4 py-3 text-sm font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 active:scale-[0.98] rounded-lg transition-all cursor-pointer whitespace-nowrap shadow-2xs",
									title: "Installer sur PC/Mac ou télécharger le code ZIP",
									children: [/* @__PURE__ */ _jsxDEV(Laptop, { className: "w-4 h-4 text-emerald-600" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 56,
										columnNumber: 19
									}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Télécharger l'App sur PC" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 57,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 51,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 35,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-500 pt-4 border-t border-slate-100",
							children: [
								/* @__PURE__ */ _jsxDEV("div", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ _jsxDEV(CheckCircle2, { className: "w-4 h-4 text-emerald-600 shrink-0" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 65,
										columnNumber: 17
									}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Zéro code requis" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 66,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 64,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ _jsxDEV(CheckCircle2, { className: "w-4 h-4 text-emerald-600 shrink-0" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 69,
										columnNumber: 17
									}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Make.com, WhatsApp & Pennylane" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 70,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 68,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ _jsxDEV(CheckCircle2, { className: "w-4 h-4 text-emerald-600 shrink-0" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 73,
										columnNumber: 17
									}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Installation PC & Mode Hors-ligne" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 74,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 72,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 63,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 20,
					columnNumber: 11
				}, this), /* @__PURE__ */ _jsxDEV("div", {
					className: "lg:col-span-5 relative",
					children: /* @__PURE__ */ _jsxDEV("div", {
						className: "relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100 aspect-16/10 lg:aspect-4/3",
						children: [/* @__PURE__ */ _jsxDEV("img", {
							src: "/src/assets/images/hero_pme_modern_office_1793967325875.jpg",
							alt: "Bureaux modernes d'une petite entreprise connectée avec des outils d'automatisation IA",
							referrerPolicy: "no-referrer",
							className: "w-full h-full object-cover",
							loading: "eager"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 82,
							columnNumber: 15
						}, this), /* @__PURE__ */ _jsxDEV("div", {
							className: "absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent flex flex-col justify-end p-6 text-white",
							children: [
								/* @__PURE__ */ _jsxDEV("div", {
									className: "flex items-center gap-2 text-xs font-medium text-emerald-300 mb-1",
									children: [/* @__PURE__ */ _jsxDEV(Zap, { className: "w-3.5 h-3.5" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 91,
										columnNumber: 19
									}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Automatisation Active" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 92,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 90,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ _jsxDEV("p", {
									className: "text-sm font-semibold text-white",
									children: "Écosystème PME Connecté"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 94,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ _jsxDEV("p", {
									className: "text-xs text-slate-300",
									children: "WhatsApp · Pennylane · Google Calendar · HubSpot"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 97,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 89,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 81,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 80,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 18,
				columnNumber: 9
			}, this), /* @__PURE__ */ _jsxDEV("div", {
				className: "mt-14 pt-8 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8",
				children: [
					/* @__PURE__ */ _jsxDEV("div", { children: [
						/* @__PURE__ */ _jsxDEV("div", {
							className: "text-2xl lg:text-3xl font-bold text-slate-900 font-mono tabular-nums tracking-tight",
							children: "11h à 18h"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 108,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "text-xs font-semibold text-slate-800 mt-1",
							children: "Temps administratif économisé"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 111,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "text-xs text-slate-500 mt-0.5",
							children: "Par semaine et par collaborateur"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 114,
							columnNumber: 13
						}, this)
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 107,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ _jsxDEV("div", { children: [
						/* @__PURE__ */ _jsxDEV("div", {
							className: "text-2xl lg:text-3xl font-bold text-slate-900 font-mono tabular-nums tracking-tight",
							children: "< 90 sec"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 120,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "text-xs font-semibold text-slate-800 mt-1",
							children: "Temps de réponse aux prospects"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 123,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "text-xs text-slate-500 mt-0.5",
							children: "24h/24, y compris le week-end"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 126,
							columnNumber: 13
						}, this)
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 119,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ _jsxDEV("div", { children: [
						/* @__PURE__ */ _jsxDEV("div", {
							className: "text-2xl lg:text-3xl font-bold text-slate-900 font-mono tabular-nums tracking-tight",
							children: "+42%"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 132,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "text-xs font-semibold text-slate-800 mt-1",
							children: "Factures réglées sous 15 jours"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 135,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "text-xs text-slate-500 mt-0.5",
							children: "Grâce aux relances douces & liens Stripe"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 138,
							columnNumber: 13
						}, this)
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 131,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ _jsxDEV("div", { children: [
						/* @__PURE__ */ _jsxDEV("div", {
							className: "text-2xl lg:text-3xl font-bold text-indigo-600 font-mono tabular-nums tracking-tight",
							children: "0 ligne"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 144,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "text-xs font-semibold text-slate-800 mt-1",
							children: "De code informatique"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 147,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "text-xs text-slate-500 mt-0.5",
							children: "Configuration visuelle sur Make ou n8n"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 150,
							columnNumber: 13
						}, this)
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 143,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 106,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 17,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 16,
		columnNumber: 5
	}, this);
};

//# sourceMappingURL=data:application/json;base64,eyJtYXBwaW5ncyI6IkFBQUEsT0FBTyxXQUFXO0FBQ2xCLFNBQVMsTUFBTSxRQUFRLGNBQWMsS0FBSyxjQUFjOzs7QUFReEQsT0FBTyxNQUFNLGVBQTJDLEVBQ3RELGlCQUNBLG1CQUNBLHFCQUNJO0NBQ0osT0FDRSx3QkFBQyxXQUFEO0VBQVMsV0FBVTtZQUNqQix3QkFBQyxPQUFEO0dBQUssV0FBVTthQUFmLENBQ0Usd0JBQUMsT0FBRDtJQUFLLFdBQVU7Y0FBZixDQUVFLHdCQUFDLE9BQUQ7S0FBSyxXQUFVO2VBQWY7TUFDRSx3QkFBQyxPQUFEO09BQUssV0FBVTtpQkFBZjtRQUNFLHdCQUFDLFFBQUQsWUFBTSwrQkFBa0M7Ozs7O1FBQ3hDLHdCQUFDLFFBQUQ7U0FBTSxlQUFZO21CQUFPO1FBQU87Ozs7O1FBQ2hDLHdCQUFDLFFBQUQsWUFBTSxlQUFrQjs7Ozs7T0FDckI7Ozs7OztNQUVMLHdCQUFDLE1BQUQ7T0FBSSxXQUFVO2lCQUE0RztNQUV0SDs7Ozs7TUFFSix3QkFBQyxLQUFEO09BQUcsV0FBVTtpQkFBYjtRQUFrRjtRQUNILHdCQUFDLFVBQUQ7U0FBUSxXQUFVO21CQUErQjtRQUEyQjs7Ozs7UUFBQztRQUFNLHdCQUFDLFVBQUQ7U0FBUSxXQUFVO21CQUErQjtRQUE0Qjs7Ozs7UUFBQztRQUFLLHdCQUFDLFVBQUQ7U0FBUSxXQUFVO21CQUErQjtRQUE0Qjs7Ozs7UUFBQztRQUFPLHdCQUFDLFVBQUQ7U0FBUSxXQUFVO21CQUErQjtRQUEyQjs7Ozs7UUFBQztPQUNwWjs7Ozs7O01BRUgsd0JBQUMsT0FBRDtPQUFLLFdBQVU7aUJBQWY7UUFDRSx3QkFBQyxVQUFEO1NBQ0UsU0FBUztTQUNULFdBQVU7bUJBRlosQ0FJRSx3QkFBQyxNQUFELEVBQU0sV0FBVSxxQkFBc0I7Ozs7bUJBQ3RDLHdCQUFDLFFBQUQsWUFBTSxpQ0FBb0M7Ozs7aUJBQ3BDOzs7Ozs7UUFDUix3QkFBQyxVQUFEO1NBQ0UsU0FBUztTQUNULFdBQVU7bUJBRlosQ0FJRSx3QkFBQyxRQUFELEVBQVEsV0FBVSx5QkFBMEI7Ozs7bUJBQzVDLHdCQUFDLFFBQUQsWUFBTSxrQ0FBcUM7Ozs7aUJBQ3JDOzs7Ozs7UUFDUCxrQkFDQyx3QkFBQyxVQUFEO1NBQ0UsU0FBUztTQUNULFdBQVU7U0FDVixPQUFNO21CQUhSLENBS0Usd0JBQUMsUUFBRCxFQUFRLFdBQVUsMkJBQTRCOzs7O21CQUM5Qyx3QkFBQyxRQUFELFlBQU0sMkJBQThCOzs7O2lCQUM5Qjs7Ozs7O09BRVA7Ozs7OztNQUdMLHdCQUFDLE9BQUQ7T0FBSyxXQUFVO2lCQUFmO1FBQ0Usd0JBQUMsT0FBRDtTQUFLLFdBQVU7bUJBQWYsQ0FDRSx3QkFBQyxjQUFELEVBQWMsV0FBVSxvQ0FBcUM7Ozs7bUJBQzdELHdCQUFDLFFBQUQsWUFBTSxtQkFBc0I7Ozs7aUJBQ3pCOzs7Ozs7UUFDTCx3QkFBQyxPQUFEO1NBQUssV0FBVTttQkFBZixDQUNFLHdCQUFDLGNBQUQsRUFBYyxXQUFVLG9DQUFxQzs7OzttQkFDN0Qsd0JBQUMsUUFBRCxZQUFNLGlDQUFvQzs7OztpQkFDdkM7Ozs7OztRQUNMLHdCQUFDLE9BQUQ7U0FBSyxXQUFVO21CQUFmLENBQ0Usd0JBQUMsY0FBRCxFQUFjLFdBQVUsb0NBQXFDOzs7O21CQUM3RCx3QkFBQyxRQUFELFlBQU0sb0NBQXVDOzs7O2lCQUMxQzs7Ozs7O09BQ0Y7Ozs7OztLQUNGOzs7OztjQUdMLHdCQUFDLE9BQUQ7S0FBSyxXQUFVO2VBQ2Isd0JBQUMsT0FBRDtNQUFLLFdBQVU7Z0JBQWYsQ0FDRSx3QkFBQyxPQUFEO09BQ0UsS0FBSTtPQUNKLEtBQUk7T0FDSixnQkFBZTtPQUNmLFdBQVU7T0FDVixTQUFRO01BQ1Q7Ozs7Z0JBQ0Qsd0JBQUMsT0FBRDtPQUFLLFdBQVU7aUJBQWY7UUFDRSx3QkFBQyxPQUFEO1NBQUssV0FBVTttQkFBZixDQUNFLHdCQUFDLEtBQUQsRUFBSyxXQUFVLGNBQWU7Ozs7bUJBQzlCLHdCQUFDLFFBQUQsWUFBTSx3QkFBMkI7Ozs7aUJBQzlCOzs7Ozs7UUFDTCx3QkFBQyxLQUFEO1NBQUcsV0FBVTttQkFBbUM7UUFFN0M7Ozs7O1FBQ0gsd0JBQUMsS0FBRDtTQUFHLFdBQVU7bUJBQXlCO1FBRW5DOzs7OztPQUNBOzs7OztjQUNGOzs7Ozs7SUFDRjs7OztZQUNGOzs7OzthQUdMLHdCQUFDLE9BQUQ7SUFBSyxXQUFVO2NBQWY7S0FDRSx3QkFBQyxPQUFEO01BQ0Usd0JBQUMsT0FBRDtPQUFLLFdBQVU7aUJBQXNGO01BRWhHOzs7OztNQUNMLHdCQUFDLE9BQUQ7T0FBSyxXQUFVO2lCQUE0QztNQUV0RDs7Ozs7TUFDTCx3QkFBQyxPQUFEO09BQUssV0FBVTtpQkFBZ0M7TUFFMUM7Ozs7O0tBQ0Y7Ozs7O0tBRUwsd0JBQUMsT0FBRDtNQUNFLHdCQUFDLE9BQUQ7T0FBSyxXQUFVO2lCQUFzRjtNQUVoRzs7Ozs7TUFDTCx3QkFBQyxPQUFEO09BQUssV0FBVTtpQkFBNEM7TUFFdEQ7Ozs7O01BQ0wsd0JBQUMsT0FBRDtPQUFLLFdBQVU7aUJBQWdDO01BRTFDOzs7OztLQUNGOzs7OztLQUVMLHdCQUFDLE9BQUQ7TUFDRSx3QkFBQyxPQUFEO09BQUssV0FBVTtpQkFBc0Y7TUFFaEc7Ozs7O01BQ0wsd0JBQUMsT0FBRDtPQUFLLFdBQVU7aUJBQTRDO01BRXREOzs7OztNQUNMLHdCQUFDLE9BQUQ7T0FBSyxXQUFVO2lCQUFnQztNQUUxQzs7Ozs7S0FDRjs7Ozs7S0FFTCx3QkFBQyxPQUFEO01BQ0Usd0JBQUMsT0FBRDtPQUFLLFdBQVU7aUJBQXVGO01BRWpHOzs7OztNQUNMLHdCQUFDLE9BQUQ7T0FBSyxXQUFVO2lCQUE0QztNQUV0RDs7Ozs7TUFDTCx3QkFBQyxPQUFEO09BQUssV0FBVTtpQkFBZ0M7TUFFMUM7Ozs7O0tBQ0Y7Ozs7O0lBQ0Y7Ozs7O1dBQ0Y7Ozs7OztDQUNFOzs7OztBQUViIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkhlcm9TZWN0aW9uLnRzeCJdLCJ2ZXJzaW9uIjozLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUGxheSwgTGF5ZXJzLCBDaGVja0NpcmNsZTIsIFphcCwgTGFwdG9wIH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcblxuaW50ZXJmYWNlIEhlcm9TZWN0aW9uUHJvcHMge1xuICBvbkV4cGxvcmVBZ2VudHM6ICgpID0+IHZvaWQ7XG4gIG9uTGF1bmNoU2ltdWxhdG9yOiAoKSA9PiB2b2lkO1xuICBvbk9wZW5Eb3dubG9hZD86ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBIZXJvU2VjdGlvbjogUmVhY3QuRkM8SGVyb1NlY3Rpb25Qcm9wcz4gPSAoeyBcbiAgb25FeHBsb3JlQWdlbnRzLCBcbiAgb25MYXVuY2hTaW11bGF0b3IsXG4gIG9uT3BlbkRvd25sb2FkIFxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInJlbGF0aXZlIG92ZXJmbG93LWhpZGRlbiBiZy13aGl0ZSBib3JkZXItYiBib3JkZXItc2xhdGUtMjAwIHB0LTEyIHBiLTE2IGxnOnB0LTE2IGxnOnBiLTIwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTd4bCBteC1hdXRvIHB4LTZcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIGxnOmdyaWQtY29scy0xMiBnYXAtMTIgbGc6Z2FwLTE2IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIHsvKiBDb2x1bW4gMTogRWRpdG9yaWFsIFZhbHVlIFByb3Bvc2l0aW9uICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6Y29sLXNwYW4tNyBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIHRleHQtaW5kaWdvLTcwMCBtYi00XCI+XG4gICAgICAgICAgICAgIDxzcGFuPlLDqXZvbHV0aW9uIElBIHBvdXIgVFBFICYgUE1FPC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj7Ctzwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4+MTAwJSBOby1Db2RlPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBzbTp0ZXh0LTR4bCBsZzp0ZXh0LTV4bCBmb250LWJvbGQgdHJhY2tpbmctdGlnaHQgdGV4dC1zbGF0ZS05MDAgbGVhZGluZy1bMS4xNV0gbWItNiB0ZXh0LWJhbGFuY2VcIj5cbiAgICAgICAgICAgICAgQXV0b21hdGlzZXogdm90cmUgUE1FIGF2ZWMgZGVzIEFnZW50cyBJQSBjb25maWd1csOpcyBzdXIgdm9zIG91dGlscyBleGlzdGFudHNcbiAgICAgICAgICAgIDwvaDE+XG5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZSBzbTp0ZXh0LWxnIHRleHQtc2xhdGUtNjAwIGxlYWRpbmctcmVsYXhlZCBtYi04IG1heC13LTJ4bFwiPlxuICAgICAgICAgICAgICBMYSBkZW1hbmRlIGV4cGxvc2UuIETDqXBsb3lleiBlbiBxdWVscXVlcyBoZXVyZXMgZGVzIGFnZW50cyBhdXRvbm9tZXMgcG91ciBsZSA8c3Ryb25nIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1zbGF0ZS05MDBcIj5zZXJ2aWNlIGNsaWVudCAyNC83PC9zdHJvbmc+LCBsZXMgPHN0cm9uZyBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtc2xhdGUtOTAwXCI+cmVsYW5jZXMgZGUgZmFjdHVyZXM8L3N0cm9uZz4sIGxhIDxzdHJvbmcgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LXNsYXRlLTkwMFwiPnByaXNlIGRlIHJlbmRlei12b3VzPC9zdHJvbmc+IGV0IGxlIDxzdHJvbmcgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LXNsYXRlLTkwMFwiPnN1aXZpIGRlcyBwcm9zcGVjdHM8L3N0cm9uZz4gZW4gcmVsaWFudCBzaW1wbGVtZW50IE1ha2UsIFdoYXRzQXBwLCBHb29nbGUgQ2FsZW5kYXIgZXQgdm90cmUgbG9naWNpZWwgZGUgZmFjdHVyYXRpb24uXG4gICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIGdhcC0zLjUgbWItOFwiPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17b25MYXVuY2hTaW11bGF0b3J9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgcHgtNSBweS0zIHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlIGJnLWluZGlnby02MDAgcm91bmRlZC1sZyBob3ZlcjpiZy1pbmRpZ28tNzAwIGFjdGl2ZTpzY2FsZS1bMC45OF0gdHJhbnNpdGlvbi1hbGwgc2hhZG93LXNtIGN1cnNvci1wb2ludGVyIHdoaXRlc3BhY2Utbm93cmFwXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxQbGF5IGNsYXNzTmFtZT1cInctNCBoLTQgZmlsbC13aGl0ZVwiIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4+VGVzdGVyIGxlIFNpbXVsYXRldXIgZW4gRGlyZWN0PC9zcGFuPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uRXhwbG9yZUFnZW50c31cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBweC01IHB5LTMgdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtc2xhdGUtNzAwIGJnLXNsYXRlLTEwMCBob3ZlcjpiZy1zbGF0ZS0yMDAgYWN0aXZlOnNjYWxlLVswLjk4XSByb3VuZGVkLWxnIHRyYW5zaXRpb24tYWxsIGN1cnNvci1wb2ludGVyIHdoaXRlc3BhY2Utbm93cmFwXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxMYXllcnMgY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LXNsYXRlLTUwMFwiIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4+RXhwbG9yZXIgbGVzIDQgUGlsaWVycyBk4oCZQWdlbnRzPC9zcGFuPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAge29uT3BlbkRvd25sb2FkICYmIChcbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbk9wZW5Eb3dubG9hZH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHB4LTQgcHktMyB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1lbWVyYWxkLTgwMCBiZy1lbWVyYWxkLTUwIGhvdmVyOmJnLWVtZXJhbGQtMTAwIGJvcmRlciBib3JkZXItZW1lcmFsZC0yMDAgYWN0aXZlOnNjYWxlLVswLjk4XSByb3VuZGVkLWxnIHRyYW5zaXRpb24tYWxsIGN1cnNvci1wb2ludGVyIHdoaXRlc3BhY2Utbm93cmFwIHNoYWRvdy0yeHNcIlxuICAgICAgICAgICAgICAgICAgdGl0bGU9XCJJbnN0YWxsZXIgc3VyIFBDL01hYyBvdSB0w6lsw6ljaGFyZ2VyIGxlIGNvZGUgWklQXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8TGFwdG9wIGNsYXNzTmFtZT1cInctNCBoLTQgdGV4dC1lbWVyYWxkLTYwMFwiIC8+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5Uw6lsw6ljaGFyZ2VyIGwnQXBwIHN1ciBQQzwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogWmVyby1jb2RlIHRydXN0IGJhZGdlcyAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIGdhcC15LTIgZ2FwLXgtNiB0ZXh0LXhzIHRleHQtc2xhdGUtNTAwIHB0LTQgYm9yZGVyLXQgYm9yZGVyLXNsYXRlLTEwMFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xLjVcIj5cbiAgICAgICAgICAgICAgICA8Q2hlY2tDaXJjbGUyIGNsYXNzTmFtZT1cInctNCBoLTQgdGV4dC1lbWVyYWxkLTYwMCBzaHJpbmstMFwiIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4+WsOpcm8gY29kZSByZXF1aXM8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xLjVcIj5cbiAgICAgICAgICAgICAgICA8Q2hlY2tDaXJjbGUyIGNsYXNzTmFtZT1cInctNCBoLTQgdGV4dC1lbWVyYWxkLTYwMCBzaHJpbmstMFwiIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4+TWFrZS5jb20sIFdoYXRzQXBwICYgUGVubnlsYW5lPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMS41XCI+XG4gICAgICAgICAgICAgICAgPENoZWNrQ2lyY2xlMiBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtZW1lcmFsZC02MDAgc2hyaW5rLTBcIiAvPlxuICAgICAgICAgICAgICAgIDxzcGFuPkluc3RhbGxhdGlvbiBQQyAmIE1vZGUgSG9ycy1saWduZTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHsvKiBDb2x1bW4gMjogQXJjaGl0ZWN0dXJhbCBXb3Jrc3BhY2UgSW1hZ2UgU2xvdCAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmNvbC1zcGFuLTUgcmVsYXRpdmVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgcm91bmRlZC0yeGwgb3ZlcmZsb3ctaGlkZGVuIGJvcmRlciBib3JkZXItc2xhdGUtMjAwIHNoYWRvdy14bCBiZy1zbGF0ZS0xMDAgYXNwZWN0LTE2LzEwIGxnOmFzcGVjdC00LzNcIj5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHNyYz1cIi9zcmMvYXNzZXRzL2ltYWdlcy9oZXJvX3BtZV9tb2Rlcm5fb2ZmaWNlXzE3OTM5NjczMjU4NzUuanBnXCJcbiAgICAgICAgICAgICAgICBhbHQ9XCJCdXJlYXV4IG1vZGVybmVzIGQndW5lIHBldGl0ZSBlbnRyZXByaXNlIGNvbm5lY3TDqWUgYXZlYyBkZXMgb3V0aWxzIGQnYXV0b21hdGlzYXRpb24gSUFcIlxuICAgICAgICAgICAgICAgIHJlZmVycmVyUG9saWN5PVwibm8tcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvdmVyXCJcbiAgICAgICAgICAgICAgICBsb2FkaW5nPVwiZWFnZXJcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgYmctZ3JhZGllbnQtdG8tdCBmcm9tLXNsYXRlLTk1MC83MCB2aWEtc2xhdGUtOTUwLzIwIHRvLXRyYW5zcGFyZW50IGZsZXggZmxleC1jb2wganVzdGlmeS1lbmQgcC02IHRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHRleHQteHMgZm9udC1tZWRpdW0gdGV4dC1lbWVyYWxkLTMwMCBtYi0xXCI+XG4gICAgICAgICAgICAgICAgICA8WmFwIGNsYXNzTmFtZT1cInctMy41IGgtMy41XCIgLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPkF1dG9tYXRpc2F0aW9uIEFjdGl2ZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgw4ljb3N5c3TDqG1lIFBNRSBDb25uZWN0w6lcbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXNsYXRlLTMwMFwiPlxuICAgICAgICAgICAgICAgICAgV2hhdHNBcHAgwrcgUGVubnlsYW5lIMK3IEdvb2dsZSBDYWxlbmRhciDCtyBIdWJTcG90XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogQ2xhaW0tdG8tUHJvb2YgUXVhbnRpdGF0aXZlIE1ldHJpYyBTdHJpcCAoRnVsbC13aWR0aCByb3cgYmVsb3cgaGVybykgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMTQgcHQtOCBib3JkZXItdCBib3JkZXItc2xhdGUtMjAwIGdyaWQgZ3JpZC1jb2xzLTIgbWQ6Z3JpZC1jb2xzLTQgZ2FwLTYgbGc6Z2FwLThcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBsZzp0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC1zbGF0ZS05MDAgZm9udC1tb25vIHRhYnVsYXItbnVtcyB0cmFja2luZy10aWdodFwiPlxuICAgICAgICAgICAgICAxMWggw6AgMThoXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtc2xhdGUtODAwIG10LTFcIj5cbiAgICAgICAgICAgICAgVGVtcHMgYWRtaW5pc3RyYXRpZiDDqWNvbm9taXPDqVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zbGF0ZS01MDAgbXQtMC41XCI+XG4gICAgICAgICAgICAgIFBhciBzZW1haW5lIGV0IHBhciBjb2xsYWJvcmF0ZXVyXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtMnhsIGxnOnRleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LXNsYXRlLTkwMCBmb250LW1vbm8gdGFidWxhci1udW1zIHRyYWNraW5nLXRpZ2h0XCI+XG4gICAgICAgICAgICAgICZsdDsgOTAgc2VjXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtc2xhdGUtODAwIG10LTFcIj5cbiAgICAgICAgICAgICAgVGVtcHMgZGUgcsOpcG9uc2UgYXV4IHByb3NwZWN0c1xuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zbGF0ZS01MDAgbXQtMC41XCI+XG4gICAgICAgICAgICAgIDI0aC8yNCwgeSBjb21wcmlzIGxlIHdlZWstZW5kXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtMnhsIGxnOnRleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LXNsYXRlLTkwMCBmb250LW1vbm8gdGFidWxhci1udW1zIHRyYWNraW5nLXRpZ2h0XCI+XG4gICAgICAgICAgICAgICs0MiVcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1zbGF0ZS04MDAgbXQtMVwiPlxuICAgICAgICAgICAgICBGYWN0dXJlcyByw6lnbMOpZXMgc291cyAxNSBqb3Vyc1xuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zbGF0ZS01MDAgbXQtMC41XCI+XG4gICAgICAgICAgICAgIEdyw6JjZSBhdXggcmVsYW5jZXMgZG91Y2VzICYgbGllbnMgU3RyaXBlXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtMnhsIGxnOnRleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LWluZGlnby02MDAgZm9udC1tb25vIHRhYnVsYXItbnVtcyB0cmFja2luZy10aWdodFwiPlxuICAgICAgICAgICAgICAwIGxpZ25lXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtc2xhdGUtODAwIG10LTFcIj5cbiAgICAgICAgICAgICAgRGUgY29kZSBpbmZvcm1hdGlxdWVcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc2xhdGUtNTAwIG10LTAuNVwiPlxuICAgICAgICAgICAgICBDb25maWd1cmF0aW9uIHZpc3VlbGxlIHN1ciBNYWtlIG91IG44blxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcbiJdfQ==