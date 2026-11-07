const React = __vite__cjsImport0_react; const useState = __vite__cjsImport0_react["useState"];const _jsxDEV = __vite__cjsImport3_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=f4bb9b4f";
import { CASE_STUDIES_DATA, AGENCY_STARTUP_GUIDE } from "/src/data/caseStudiesData.ts";
import { BookOpen } from "/node_modules/.vite/deps/lucide-react.js?v=f4bb9b4f";
var _jsxFileName = "/app/applet/src/components/CaseStudiesSection.tsx";
import __vite__cjsImport3_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=f4bb9b4f";
export const CaseStudiesSection = ({ onConfigureAgent }) => {
	const [activeTab, setActiveTab] = useState("cases");
	return /* @__PURE__ */ _jsxDEV("section", {
		id: "cas-metiers",
		className: "py-16 bg-slate-50 border-b border-slate-200",
		children: /* @__PURE__ */ _jsxDEV("div", {
			className: "max-w-7xl mx-auto px-6",
			children: [/* @__PURE__ */ _jsxDEV("div", {
				className: "flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12",
				children: [/* @__PURE__ */ _jsxDEV("div", { children: [
					/* @__PURE__ */ _jsxDEV("div", {
						className: "text-xs font-semibold uppercase tracking-wider text-indigo-700 mb-2",
						children: "Retours d'Expérience & Opportunité de Marché"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 18,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ _jsxDEV("h2", {
						className: "text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 text-balance",
						children: "Cas Clients Réels & Guide Démarrage Agence"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 21,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ _jsxDEV("p", {
						className: "text-sm sm:text-base text-slate-600 mt-2 max-w-2xl",
						children: "Découvrez comment de vraies PME françaises ont transformé leur quotidien, et comment lancer votre propre activité de configuration d'agents IA sans écrire de code."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 24,
						columnNumber: 13
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 17,
					columnNumber: 11
				}, this), /* @__PURE__ */ _jsxDEV("div", {
					className: "flex items-center gap-1 p-1 bg-white border border-slate-200 rounded-xl shrink-0 shadow-2xs",
					children: [/* @__PURE__ */ _jsxDEV("button", {
						onClick: () => setActiveTab("cases"),
						className: `px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${activeTab === "cases" ? "bg-indigo-600 text-white shadow-xs" : "text-slate-600 hover:text-slate-900"}`,
						children: "3 Études de Cas PME"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 31,
						columnNumber: 13
					}, this), /* @__PURE__ */ _jsxDEV("button", {
						onClick: () => setActiveTab("agency_guide"),
						className: `px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${activeTab === "agency_guide" ? "bg-indigo-600 text-white shadow-xs" : "text-slate-600 hover:text-slate-900"}`,
						children: "Guide : Lancer son Agence IA"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 41,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 30,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 16,
				columnNumber: 9
			}, this), activeTab === "cases" ? /* @__PURE__ */ _jsxDEV(
				"div",
				/* Case Studies View */
				{
					className: "space-y-8",
					children: [/* @__PURE__ */ _jsxDEV("div", {
						className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
						children: CASE_STUDIES_DATA.map((cs) => /* @__PURE__ */ _jsxDEV("div", {
							className: "bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow",
							children: [/* @__PURE__ */ _jsxDEV("div", { children: [
								/* @__PURE__ */ _jsxDEV("div", {
									className: "flex items-center justify-between text-xs text-slate-500 mb-2",
									children: [/* @__PURE__ */ _jsxDEV("span", {
										className: "font-semibold text-indigo-700",
										children: cs.sector
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 65,
										columnNumber: 23
									}, this), /* @__PURE__ */ _jsxDEV("span", { children: cs.teamSize.split("(")[0].trim() }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 66,
										columnNumber: 23
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 64,
									columnNumber: 21
								}, this),
								/* @__PURE__ */ _jsxDEV("h3", {
									className: "text-lg font-bold text-slate-900 mb-3",
									children: cs.companyName
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 69,
									columnNumber: 21
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "space-y-3 mb-6 text-xs text-slate-600",
									children: [/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("strong", {
										className: "text-slate-900 font-semibold block mb-0.5",
										children: "Défi initial :"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 75,
										columnNumber: 25
									}, this), /* @__PURE__ */ _jsxDEV("p", {
										className: "leading-relaxed",
										children: cs.challenge
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 78,
										columnNumber: 25
									}, this)] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 74,
										columnNumber: 23
									}, this), /* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("strong", {
										className: "text-slate-900 font-semibold block mb-0.5",
										children: "Solution déployée :"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 82,
										columnNumber: 25
									}, this), /* @__PURE__ */ _jsxDEV("p", {
										className: "leading-relaxed",
										children: cs.solution
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 85,
										columnNumber: 25
									}, this)] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 81,
										columnNumber: 23
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 73,
									columnNumber: 21
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "grid grid-cols-3 gap-2 p-3 bg-slate-50 rounded-xl border border-slate-100 mb-6",
									children: cs.results.map((res, i) => /* @__PURE__ */ _jsxDEV("div", {
										className: "text-center",
										children: [/* @__PURE__ */ _jsxDEV("div", {
											className: "text-base font-bold font-mono text-slate-900 tabular-nums",
											children: res.value
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 93,
											columnNumber: 27
										}, this), /* @__PURE__ */ _jsxDEV("div", {
											className: "text-[10px] font-semibold text-slate-600 leading-tight mt-0.5",
											children: res.label
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 96,
											columnNumber: 27
										}, this)]
									}, i, true, {
										fileName: _jsxFileName,
										lineNumber: 92,
										columnNumber: 25
									}, this))
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 90,
									columnNumber: 21
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "flex flex-wrap gap-1.5 mb-6",
									children: cs.toolsUsed.map((tool, idx) => /* @__PURE__ */ _jsxDEV("span", {
										className: "px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-[10px] font-medium",
										children: tool
									}, idx, false, {
										fileName: _jsxFileName,
										lineNumber: 106,
										columnNumber: 25
									}, this))
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 104,
									columnNumber: 21
								}, this)
							] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 63,
								columnNumber: 19
							}, this), /* @__PURE__ */ _jsxDEV("div", {
								className: "pt-4 border-t border-slate-100",
								children: [
									/* @__PURE__ */ _jsxDEV("p", {
										className: "text-xs italic text-slate-600 leading-relaxed mb-3",
										children: [
											"\"",
											cs.quote.text,
											"\""
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 118,
										columnNumber: 21
									}, this),
									/* @__PURE__ */ _jsxDEV("div", {
										className: "text-xs font-semibold text-slate-900",
										children: cs.quote.author
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 121,
										columnNumber: 21
									}, this),
									/* @__PURE__ */ _jsxDEV("div", {
										className: "text-[11px] text-slate-500",
										children: cs.quote.role
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 124,
										columnNumber: 21
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 117,
								columnNumber: 19
							}, this)]
						}, cs.id, true, {
							fileName: _jsxFileName,
							lineNumber: 59,
							columnNumber: 17
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 57,
						columnNumber: 13
					}, this), /* @__PURE__ */ _jsxDEV("div", {
						className: "bg-white rounded-2xl border border-slate-200 overflow-hidden p-6 lg:p-8 shadow-sm",
						children: /* @__PURE__ */ _jsxDEV("div", {
							className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-center",
							children: [/* @__PURE__ */ _jsxDEV("div", {
								className: "lg:col-span-4 aspect-4/3 rounded-xl overflow-hidden border border-slate-200 bg-slate-100",
								children: /* @__PURE__ */ _jsxDEV("img", {
									src: "/src/assets/images/pme_agency_consultant_1793967325805.jpg",
									alt: "Consultante en automatisation d'entreprise PME",
									referrerPolicy: "no-referrer",
									className: "w-full h-full object-cover"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 136,
									columnNumber: 19
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 135,
								columnNumber: 17
							}, this), /* @__PURE__ */ _jsxDEV("div", {
								className: "lg:col-span-8",
								children: [
									/* @__PURE__ */ _jsxDEV("div", {
										className: "text-xs font-semibold uppercase tracking-wider text-indigo-700 mb-2",
										children: "L'avis d'une dirigeante"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 144,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ _jsxDEV("blockquote", {
										className: "text-lg sm:text-xl font-medium text-slate-900 leading-relaxed mb-4",
										children: "« Nos clients ont l’impression que nous avons embauché deux personnes supplémentaires à temps plein. En réalité, ce sont 3 scénarios Make.com connectés à WhatsApp et Pennylane qui tournent discrètement pour 45 € par mois. »"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 147,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ _jsxDEV("div", {
										className: "text-sm font-bold text-slate-900",
										children: "Delphine Mercier"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 150,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ _jsxDEV("div", {
										className: "text-xs text-slate-500",
										children: "Directrice Associée · Aura Conseil & Stratégie (Lyon)"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 153,
										columnNumber: 19
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 143,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 134,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 133,
						columnNumber: 13
					}, this)]
				},
				void 0,
				true,
				{
					fileName: _jsxFileName,
					lineNumber: 56,
					columnNumber: 11
				},
				this
			) : 
			/* Agency Startup Guide View */
			/* @__PURE__ */ _jsxDEV("div", {
				className: "bg-white rounded-2xl border border-slate-200 p-6 lg:p-10 shadow-sm",
				children: [
					/* @__PURE__ */ _jsxDEV("div", {
						className: "max-w-3xl mb-8",
						children: [
							/* @__PURE__ */ _jsxDEV("div", {
								className: "inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100 mb-3",
								children: [/* @__PURE__ */ _jsxDEV(BookOpen, { className: "w-3.5 h-3.5" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 165,
									columnNumber: 17
								}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Modèle d'Affaires Clé en Main" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 166,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 164,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("h3", {
								className: "text-2xl font-bold text-slate-900",
								children: AGENCY_STARTUP_GUIDE.title
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 168,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("p", {
								className: "text-sm text-slate-600 mt-2 leading-relaxed",
								children: AGENCY_STARTUP_GUIDE.subtitle
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 171,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 163,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ _jsxDEV("div", {
						className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-10",
						children: AGENCY_STARTUP_GUIDE.steps.map((step) => /* @__PURE__ */ _jsxDEV("div", {
							className: "p-6 rounded-xl border border-slate-200 bg-slate-50/70 text-left",
							children: [
								/* @__PURE__ */ _jsxDEV("div", {
									className: "w-8 h-8 rounded-lg bg-indigo-600 text-white font-mono font-bold text-xs flex items-center justify-center mb-3",
									children: step.num
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 182,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ _jsxDEV("h4", {
									className: "text-base font-bold text-slate-900 mb-2",
									children: step.title
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 185,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ _jsxDEV("p", {
									className: "text-xs sm:text-sm text-slate-600 leading-relaxed",
									children: step.desc
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 188,
									columnNumber: 19
								}, this)
							]
						}, step.num, true, {
							fileName: _jsxFileName,
							lineNumber: 178,
							columnNumber: 17
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 176,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ _jsxDEV("div", {
						className: "p-6 rounded-xl bg-slate-900 text-white border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6",
						children: [/* @__PURE__ */ _jsxDEV("div", { children: [
							/* @__PURE__ */ _jsxDEV("div", {
								className: "text-xs font-mono text-indigo-400 uppercase font-semibold mb-1",
								children: "Exemple de Forfait Recommandé"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 198,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "text-xl font-bold",
								children: "Pack « PME Sérénité » : 2 500 € setup + 390 € / mois"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 201,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ _jsxDEV("p", {
								className: "text-xs text-slate-400 mt-1 max-w-xl",
								children: "Comprend : Déploiement de l'agent WhatsApp + Intégration Pennylane/Google Calendar + 1 session de formation + Supervision mensuelle des logs Make.com."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 204,
								columnNumber: 17
							}, this)
						] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 197,
							columnNumber: 15
						}, this), /* @__PURE__ */ _jsxDEV("button", {
							onClick: onConfigureAgent,
							className: "px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 shadow-sm",
							children: "Générer un Devis Type"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 209,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 196,
						columnNumber: 13
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 162,
				columnNumber: 11
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 14,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 13,
		columnNumber: 5
	}, this);
};

//# sourceMappingURL=data:application/json;base64,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O1FBQ0osd0JBQUMsS0FBRDtTQUFHLFdBQVU7bUJBQ1YsS0FBSztRQUNMOzs7OztPQUNBO1NBWkUsS0FBSzs7OzthQVlQLENBQ047S0FDRTs7Ozs7S0FHTCx3QkFBQyxPQUFEO01BQUssV0FBVTtnQkFBZixDQUNFLHdCQUFDLE9BQUQ7T0FDRSx3QkFBQyxPQUFEO1FBQUssV0FBVTtrQkFBaUU7T0FFM0U7Ozs7O09BQ0wsd0JBQUMsT0FBRDtRQUFLLFdBQVU7a0JBQW9CO09BRTlCOzs7OztPQUNMLHdCQUFDLEtBQUQ7UUFBRyxXQUFVO2tCQUF1QztPQUVqRDs7Ozs7TUFDQTs7OztnQkFFTCx3QkFBQyxVQUFEO09BQ0UsU0FBUztPQUNULFdBQVU7aUJBQ1g7TUFFTzs7OztjQUNMOzs7Ozs7SUFDRjs7Ozs7V0FFSjs7Ozs7O0NBQ0U7Ozs7O0FBRWIiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiQ2FzZVN0dWRpZXNTZWN0aW9uLnRzeCJdLCJ2ZXJzaW9uIjozLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDQVNFX1NUVURJRVNfREFUQSwgQUdFTkNZX1NUQVJUVVBfR1VJREUgfSBmcm9tICcuLi9kYXRhL2Nhc2VTdHVkaWVzRGF0YSc7XG5pbXBvcnQgeyBDaGVjaywgUXVvdGUsIEFycm93UmlnaHQsIEJvb2tPcGVuLCBCdWlsZGluZywgQ2hlY2tDaXJjbGUyIH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcblxuaW50ZXJmYWNlIENhc2VTdHVkaWVzU2VjdGlvblByb3BzIHtcbiAgb25Db25maWd1cmVBZ2VudDogKCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IENhc2VTdHVkaWVzU2VjdGlvbjogUmVhY3QuRkM8Q2FzZVN0dWRpZXNTZWN0aW9uUHJvcHM+ID0gKHsgb25Db25maWd1cmVBZ2VudCB9KSA9PiB7XG4gIGNvbnN0IFthY3RpdmVUYWIsIHNldEFjdGl2ZVRhYl0gPSB1c2VTdGF0ZTwnY2FzZXMnIHwgJ2FnZW5jeV9ndWlkZSc+KCdjYXNlcycpO1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gaWQ9XCJjYXMtbWV0aWVyc1wiIGNsYXNzTmFtZT1cInB5LTE2IGJnLXNsYXRlLTUwIGJvcmRlci1iIGJvcmRlci1zbGF0ZS0yMDBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctN3hsIG14LWF1dG8gcHgtNlwiPlxuICAgICAgICB7LyogU2VjdGlvbiBIZWFkZXIgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBtZDppdGVtcy1lbmQganVzdGlmeS1iZXR3ZWVuIGdhcC02IG1iLTEyXCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LXNlbWlib2xkIHVwcGVyY2FzZSB0cmFja2luZy13aWRlciB0ZXh0LWluZGlnby03MDAgbWItMlwiPlxuICAgICAgICAgICAgICBSZXRvdXJzIGQnRXhww6lyaWVuY2UgJiBPcHBvcnR1bml0w6kgZGUgTWFyY2jDqVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgc206dGV4dC0zeGwgZm9udC1ib2xkIHRyYWNraW5nLXRpZ2h0IHRleHQtc2xhdGUtOTAwIHRleHQtYmFsYW5jZVwiPlxuICAgICAgICAgICAgICBDYXMgQ2xpZW50cyBSw6llbHMgJiBHdWlkZSBEw6ltYXJyYWdlIEFnZW5jZVxuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gc206dGV4dC1iYXNlIHRleHQtc2xhdGUtNjAwIG10LTIgbWF4LXctMnhsXCI+XG4gICAgICAgICAgICAgIETDqWNvdXZyZXogY29tbWVudCBkZSB2cmFpZXMgUE1FIGZyYW7Dp2Fpc2VzIG9udCB0cmFuc2Zvcm3DqSBsZXVyIHF1b3RpZGllbiwgZXQgY29tbWVudCBsYW5jZXIgdm90cmUgcHJvcHJlIGFjdGl2aXTDqSBkZSBjb25maWd1cmF0aW9uIGQnYWdlbnRzIElBIHNhbnMgw6ljcmlyZSBkZSBjb2RlLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIFNlZ21lbnRlZCBTd2l0Y2hlciAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xIHAtMSBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLXNsYXRlLTIwMCByb3VuZGVkLXhsIHNocmluay0wIHNoYWRvdy0yeHNcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlVGFiKCdjYXNlcycpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BweC00IHB5LTIgdGV4dC14cyBmb250LXNlbWlib2xkIHJvdW5kZWQtbGcgdHJhbnNpdGlvbi1hbGwgY3Vyc29yLXBvaW50ZXIgd2hpdGVzcGFjZS1ub3dyYXAgJHtcbiAgICAgICAgICAgICAgICBhY3RpdmVUYWIgPT09ICdjYXNlcydcbiAgICAgICAgICAgICAgICAgID8gJ2JnLWluZGlnby02MDAgdGV4dC13aGl0ZSBzaGFkb3cteHMnXG4gICAgICAgICAgICAgICAgICA6ICd0ZXh0LXNsYXRlLTYwMCBob3Zlcjp0ZXh0LXNsYXRlLTkwMCdcbiAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDMgw4l0dWRlcyBkZSBDYXMgUE1FXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlVGFiKCdhZ2VuY3lfZ3VpZGUnKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHgtNCBweS0yIHRleHQteHMgZm9udC1zZW1pYm9sZCByb3VuZGVkLWxnIHRyYW5zaXRpb24tYWxsIGN1cnNvci1wb2ludGVyIHdoaXRlc3BhY2Utbm93cmFwICR7XG4gICAgICAgICAgICAgICAgYWN0aXZlVGFiID09PSAnYWdlbmN5X2d1aWRlJ1xuICAgICAgICAgICAgICAgICAgPyAnYmctaW5kaWdvLTYwMCB0ZXh0LXdoaXRlIHNoYWRvdy14cydcbiAgICAgICAgICAgICAgICAgIDogJ3RleHQtc2xhdGUtNjAwIGhvdmVyOnRleHQtc2xhdGUtOTAwJ1xuICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgR3VpZGUgOiBMYW5jZXIgc29uIEFnZW5jZSBJQVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHthY3RpdmVUYWIgPT09ICdjYXNlcycgPyAoXG4gICAgICAgICAgLyogQ2FzZSBTdHVkaWVzIFZpZXcgKi9cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktOFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIGxnOmdyaWQtY29scy0zIGdhcC02XCI+XG4gICAgICAgICAgICAgIHtDQVNFX1NUVURJRVNfREFUQS5tYXAoKGNzKSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAga2V5PXtjcy5pZH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItc2xhdGUtMjAwIHAtNiBmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiBzaGFkb3cteHMgaG92ZXI6c2hhZG93LW1kIHRyYW5zaXRpb24tc2hhZG93XCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB0ZXh0LXhzIHRleHQtc2xhdGUtNTAwIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtaW5kaWdvLTcwMFwiPntjcy5zZWN0b3J9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntjcy50ZWFtU2l6ZS5zcGxpdCgnKCcpWzBdLnRyaW0oKX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZCB0ZXh0LXNsYXRlLTkwMCBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAge2NzLmNvbXBhbnlOYW1lfVxuICAgICAgICAgICAgICAgICAgICA8L2gzPlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0zIG1iLTYgdGV4dC14cyB0ZXh0LXNsYXRlLTYwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtOTAwIGZvbnQtc2VtaWJvbGQgYmxvY2sgbWItMC41XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIETDqWZpIGluaXRpYWwgOlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsZWFkaW5nLXJlbGF4ZWRcIj57Y3MuY2hhbGxlbmdlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtOTAwIGZvbnQtc2VtaWJvbGQgYmxvY2sgbWItMC41XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFNvbHV0aW9uIGTDqXBsb3nDqWUgOlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsZWFkaW5nLXJlbGF4ZWRcIj57Y3Muc29sdXRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICB7LyogUmVzdWx0cyBNZXRyaWNzICovfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTMgZ2FwLTIgcC0zIGJnLXNsYXRlLTUwIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1zbGF0ZS0xMDAgbWItNlwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtjcy5yZXN1bHRzLm1hcCgocmVzLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1ib2xkIGZvbnQtbW9ubyB0ZXh0LXNsYXRlLTkwMCB0YWJ1bGFyLW51bXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVzLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSBmb250LXNlbWlib2xkIHRleHQtc2xhdGUtNjAwIGxlYWRpbmctdGlnaHQgbXQtMC41XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jlcy5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgey8qIFRvb2xzIHVzZWQgKi99XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgZ2FwLTEuNSBtYi02XCI+XG4gICAgICAgICAgICAgICAgICAgICAge2NzLnRvb2xzVXNlZC5tYXAoKHRvb2wsIGlkeCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpZHh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTIgcHktMC41IGJnLXNsYXRlLTEwMCB0ZXh0LXNsYXRlLTYwMCByb3VuZGVkIHRleHQtWzEwcHhdIGZvbnQtbWVkaXVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3Rvb2x9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIHsvKiBRdW90ZSAqL31cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNCBib3JkZXItdCBib3JkZXItc2xhdGUtMTAwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgaXRhbGljIHRleHQtc2xhdGUtNjAwIGxlYWRpbmctcmVsYXhlZCBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgXCJ7Y3MucXVvdGUudGV4dH1cIlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtc2xhdGUtOTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAge2NzLnF1b3RlLmF1dGhvcn1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMTFweF0gdGV4dC1zbGF0ZS01MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7Y3MucXVvdGUucm9sZX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgey8qIFRlc3RpbW9uaWFsIGhpZ2hsaWdodCB3aXRoIHBob3RvICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLXNsYXRlLTIwMCBvdmVyZmxvdy1oaWRkZW4gcC02IGxnOnAtOCBzaGFkb3ctc21cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIGxnOmdyaWQtY29scy0xMiBnYXAtOCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmNvbC1zcGFuLTQgYXNwZWN0LTQvMyByb3VuZGVkLXhsIG92ZXJmbG93LWhpZGRlbiBib3JkZXIgYm9yZGVyLXNsYXRlLTIwMCBiZy1zbGF0ZS0xMDBcIj5cbiAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiL3NyYy9hc3NldHMvaW1hZ2VzL3BtZV9hZ2VuY3lfY29uc3VsdGFudF8xNzkzOTY3MzI1ODA1LmpwZ1wiXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIkNvbnN1bHRhbnRlIGVuIGF1dG9tYXRpc2F0aW9uIGQnZW50cmVwcmlzZSBQTUVcIlxuICAgICAgICAgICAgICAgICAgICByZWZlcnJlclBvbGljeT1cIm5vLXJlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXJcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmNvbC1zcGFuLThcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LXNlbWlib2xkIHVwcGVyY2FzZSB0cmFja2luZy13aWRlciB0ZXh0LWluZGlnby03MDAgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgICBMJ2F2aXMgZCd1bmUgZGlyaWdlYW50ZVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8YmxvY2txdW90ZSBjbGFzc05hbWU9XCJ0ZXh0LWxnIHNtOnRleHQteGwgZm9udC1tZWRpdW0gdGV4dC1zbGF0ZS05MDAgbGVhZGluZy1yZWxheGVkIG1iLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgwqsgTm9zIGNsaWVudHMgb250IGzigJlpbXByZXNzaW9uIHF1ZSBub3VzIGF2b25zIGVtYmF1Y2jDqSBkZXV4IHBlcnNvbm5lcyBzdXBwbMOpbWVudGFpcmVzIMOgIHRlbXBzIHBsZWluLiBFbiByw6lhbGl0w6ksIGNlIHNvbnQgMyBzY8OpbmFyaW9zIE1ha2UuY29tIGNvbm5lY3TDqXMgw6AgV2hhdHNBcHAgZXQgUGVubnlsYW5lIHF1aSB0b3VybmVudCBkaXNjcsOodGVtZW50IHBvdXIgNDUg4oKsIHBhciBtb2lzLiDCu1xuICAgICAgICAgICAgICAgICAgPC9ibG9ja3F1b3RlPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtYm9sZCB0ZXh0LXNsYXRlLTkwMFwiPlxuICAgICAgICAgICAgICAgICAgICBEZWxwaGluZSBNZXJjaWVyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXNsYXRlLTUwMFwiPlxuICAgICAgICAgICAgICAgICAgICBEaXJlY3RyaWNlIEFzc29jacOpZSDCtyBBdXJhIENvbnNlaWwgJiBTdHJhdMOpZ2llIChMeW9uKVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgLyogQWdlbmN5IFN0YXJ0dXAgR3VpZGUgVmlldyAqL1xuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC0yeGwgYm9yZGVyIGJvcmRlci1zbGF0ZS0yMDAgcC02IGxnOnAtMTAgc2hhZG93LXNtXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTN4bCBtYi04XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LWVtZXJhbGQtNzAwIGJnLWVtZXJhbGQtNTAgcHgtMi41IHB5LTEgcm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLWVtZXJhbGQtMTAwIG1iLTNcIj5cbiAgICAgICAgICAgICAgICA8Qm9va09wZW4gY2xhc3NOYW1lPVwidy0zLjUgaC0zLjVcIiAvPlxuICAgICAgICAgICAgICAgIDxzcGFuPk1vZMOobGUgZCdBZmZhaXJlcyBDbMOpIGVuIE1haW48L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIHRleHQtc2xhdGUtOTAwXCI+XG4gICAgICAgICAgICAgICAge0FHRU5DWV9TVEFSVFVQX0dVSURFLnRpdGxlfVxuICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtc2xhdGUtNjAwIG10LTIgbGVhZGluZy1yZWxheGVkXCI+XG4gICAgICAgICAgICAgICAge0FHRU5DWV9TVEFSVFVQX0dVSURFLnN1YnRpdGxlfVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yIGdhcC02IG1iLTEwXCI+XG4gICAgICAgICAgICAgIHtBR0VOQ1lfU1RBUlRVUF9HVUlERS5zdGVwcy5tYXAoKHN0ZXApID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBrZXk9e3N0ZXAubnVtfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC02IHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1zbGF0ZS0yMDAgYmctc2xhdGUtNTAvNzAgdGV4dC1sZWZ0XCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctOCBoLTggcm91bmRlZC1sZyBiZy1pbmRpZ28tNjAwIHRleHQtd2hpdGUgZm9udC1tb25vIGZvbnQtYm9sZCB0ZXh0LXhzIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAge3N0ZXAubnVtfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtYm9sZCB0ZXh0LXNsYXRlLTkwMCBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgIHtzdGVwLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgc206dGV4dC1zbSB0ZXh0LXNsYXRlLTYwMCBsZWFkaW5nLXJlbGF4ZWRcIj5cbiAgICAgICAgICAgICAgICAgICAge3N0ZXAuZGVzY31cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgey8qIFByaWNpbmcgTW9kZWwgSGlnaGxpZ2h0ICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTYgcm91bmRlZC14bCBiZy1zbGF0ZS05MDAgdGV4dC13aGl0ZSBib3JkZXIgYm9yZGVyLXNsYXRlLTgwMCBmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IGl0ZW1zLXN0YXJ0IG1kOml0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZ2FwLTZcIj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1tb25vIHRleHQtaW5kaWdvLTQwMCB1cHBlcmNhc2UgZm9udC1zZW1pYm9sZCBtYi0xXCI+XG4gICAgICAgICAgICAgICAgICBFeGVtcGxlIGRlIEZvcmZhaXQgUmVjb21tYW5kw6lcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkXCI+XG4gICAgICAgICAgICAgICAgICBQYWNrIMKrIFBNRSBTw6lyw6luaXTDqSDCuyA6IDIgNTAwIOKCrCBzZXR1cCArIDM5MCDigqwgLyBtb2lzXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXNsYXRlLTQwMCBtdC0xIG1heC13LXhsXCI+XG4gICAgICAgICAgICAgICAgICBDb21wcmVuZCA6IETDqXBsb2llbWVudCBkZSBsJ2FnZW50IFdoYXRzQXBwICsgSW50w6lncmF0aW9uIFBlbm55bGFuZS9Hb29nbGUgQ2FsZW5kYXIgKyAxIHNlc3Npb24gZGUgZm9ybWF0aW9uICsgU3VwZXJ2aXNpb24gbWVuc3VlbGxlIGRlcyBsb2dzIE1ha2UuY29tLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ29uZmlndXJlQWdlbnR9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNSBweS0yLjUgYmctaW5kaWdvLTYwMCBob3ZlcjpiZy1pbmRpZ28tNzAwIHRleHQtd2hpdGUgdGV4dC14cyBmb250LXNlbWlib2xkIHJvdW5kZWQtbGcgdHJhbnNpdGlvbi1jb2xvcnMgY3Vyc29yLXBvaW50ZXIgd2hpdGVzcGFjZS1ub3dyYXAgc2hyaW5rLTAgc2hhZG93LXNtXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEfDqW7DqXJlciB1biBEZXZpcyBUeXBlXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuIl19