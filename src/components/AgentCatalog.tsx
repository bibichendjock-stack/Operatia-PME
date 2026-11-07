const React = __vite__cjsImport0_react; const useState = __vite__cjsImport0_react["useState"];const _jsxDEV = __vite__cjsImport3_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=f4bb9b4f";
import { AGENTS_DATA } from "/src/data/agentsData.ts";
import { MessageSquareText, Receipt, CalendarClock, UserCheck, ArrowRight, Check, Cpu, Play, FileCode } from "/node_modules/.vite/deps/lucide-react.js?v=f4bb9b4f";
var _jsxFileName = "/app/applet/src/components/AgentCatalog.tsx";
import __vite__cjsImport3_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=f4bb9b4f";
export const AgentCatalog = ({ onSelectAgentForTest, onViewBlueprint }) => {
	const [selectedAgentId, setSelectedAgentId] = useState("support");
	const activeAgent = AGENTS_DATA.find((a) => a.id === selectedAgentId) || AGENTS_DATA[0];
	const getAgentIcon = (id) => {
		switch (id) {
			case "support": return /* @__PURE__ */ _jsxDEV(MessageSquareText, { className: "w-5 h-5 text-emerald-600" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 29,
				columnNumber: 16
			}, this);
			case "invoicing": return /* @__PURE__ */ _jsxDEV(Receipt, { className: "w-5 h-5 text-amber-600" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 31,
				columnNumber: 16
			}, this);
			case "scheduling": return /* @__PURE__ */ _jsxDEV(CalendarClock, { className: "w-5 h-5 text-blue-600" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 33,
				columnNumber: 16
			}, this);
			case "lead_followup": return /* @__PURE__ */ _jsxDEV(UserCheck, { className: "w-5 h-5 text-violet-600" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 35,
				columnNumber: 16
			}, this);
		}
	};
	return /* @__PURE__ */ _jsxDEV("section", {
		id: "agents",
		className: "py-16 bg-slate-50 border-b border-slate-200",
		children: /* @__PURE__ */ _jsxDEV("div", {
			className: "max-w-7xl mx-auto px-6",
			children: [
				/* @__PURE__ */ _jsxDEV("div", {
					className: "max-w-3xl mb-12",
					children: [
						/* @__PURE__ */ _jsxDEV("div", {
							className: "text-xs font-semibold uppercase tracking-wider text-indigo-700 mb-2",
							children: "Architecture Métier"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 44,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("h2", {
							className: "text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 text-balance",
							children: "Les 4 Agents Fondamentaux pour PME"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 47,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("p", {
							className: "text-sm sm:text-base text-slate-600 mt-3 leading-relaxed",
							children: "Plutôt que d’adopter des logiciels complexes que personne n’utilise, configurez des agents focalisés sur les 4 goulets d’étranglement récurrents de toute petite entreprise."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 50,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 43,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8",
					children: AGENTS_DATA.map((agent) => {
						const isSelected = agent.id === selectedAgentId;
						return /* @__PURE__ */ _jsxDEV("div", {
							onClick: () => setSelectedAgentId(agent.id),
							className: `p-5 rounded-xl border text-left transition-all cursor-pointer bg-white relative ${isSelected ? "border-indigo-600 ring-2 ring-indigo-600/10 shadow-md" : "border-slate-200 hover:border-slate-300 hover:shadow-sm"}`,
							children: [
								/* @__PURE__ */ _jsxDEV("div", {
									className: "flex items-center justify-between mb-3",
									children: [/* @__PURE__ */ _jsxDEV("div", {
										className: "w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center",
										children: getAgentIcon(agent.id)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 70,
										columnNumber: 19
									}, this), /* @__PURE__ */ _jsxDEV("span", {
										className: "text-xs font-semibold text-slate-500",
										children: agent.badge
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 73,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 69,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ _jsxDEV("h3", {
									className: "text-base font-semibold text-slate-900 mb-1 leading-snug",
									children: agent.title
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 78,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ _jsxDEV("p", {
									className: "text-xs text-slate-600 line-clamp-2 mb-3",
									children: agent.tagline
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 81,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "text-xs font-semibold text-indigo-600 flex items-center gap-1",
									children: [/* @__PURE__ */ _jsxDEV("span", { children: isSelected ? "Agent sélectionné" : "Voir les détails" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 86,
										columnNumber: 19
									}, this), /* @__PURE__ */ _jsxDEV(ArrowRight, { className: "w-3 h-3" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 87,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 85,
									columnNumber: 17
								}, this)
							]
						}, agent.id, true, {
							fileName: _jsxFileName,
							lineNumber: 60,
							columnNumber: 15
						}, this);
					})
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 56,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "bg-white rounded-2xl border border-slate-200 p-6 lg:p-8 shadow-sm",
					children: /* @__PURE__ */ _jsxDEV("div", {
						className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-start",
						children: [/* @__PURE__ */ _jsxDEV("div", {
							className: "lg:col-span-7",
							children: [
								/* @__PURE__ */ _jsxDEV("div", {
									className: "flex items-center gap-2 text-xs text-slate-500 mb-2",
									children: [
										/* @__PURE__ */ _jsxDEV("span", { children: "Pilier Opérationnel" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 100,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ _jsxDEV("span", {
											"aria-hidden": "true",
											children: "·"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 101,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ _jsxDEV("span", { children: activeAgent.avgSetupTime }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 102,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ _jsxDEV("span", {
											"aria-hidden": "true",
											children: "·"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 103,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ _jsxDEV("span", {
											className: "font-semibold text-emerald-700",
											children: activeAgent.roiMetric
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 104,
											columnNumber: 17
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 99,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV("h3", {
									className: "text-xl sm:text-2xl font-bold text-slate-900 mb-3",
									children: activeAgent.title
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 107,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV("p", {
									className: "text-sm text-slate-600 leading-relaxed mb-6",
									children: activeAgent.description
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 110,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV("h4", {
									className: "text-xs font-bold uppercase tracking-wider text-slate-900 mb-3",
									children: "Capacités Métier Automatisées"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 114,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV("ul", {
									className: "space-y-2.5 mb-8",
									children: activeAgent.capabilities.map((cap, idx) => /* @__PURE__ */ _jsxDEV("li", {
										className: "flex items-start gap-2.5 text-xs sm:text-sm text-slate-700",
										children: [/* @__PURE__ */ _jsxDEV(Check, { className: "w-4 h-4 text-emerald-600 shrink-0 mt-0.5" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 120,
											columnNumber: 21
										}, this), /* @__PURE__ */ _jsxDEV("span", { children: cap }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 121,
											columnNumber: 21
										}, this)]
									}, idx, true, {
										fileName: _jsxFileName,
										lineNumber: 119,
										columnNumber: 19
									}, this))
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 117,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "flex flex-wrap items-center gap-3",
									children: [/* @__PURE__ */ _jsxDEV("button", {
										onClick: () => onSelectAgentForTest(activeAgent.id),
										className: "flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 active:scale-[0.98] transition-all shadow-sm cursor-pointer whitespace-nowrap",
										children: [/* @__PURE__ */ _jsxDEV(Play, { className: "w-4 h-4 fill-white" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 132,
											columnNumber: 19
										}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Tester cet agent dans le Simulateur" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 133,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 128,
										columnNumber: 17
									}, this), /* @__PURE__ */ _jsxDEV("button", {
										onClick: () => onViewBlueprint(activeAgent.id),
										className: "flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 active:scale-[0.98] rounded-lg transition-all cursor-pointer whitespace-nowrap",
										children: [/* @__PURE__ */ _jsxDEV(FileCode, { className: "w-4 h-4 text-slate-500" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 139,
											columnNumber: 19
										}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Voir le Blueprint Make.com" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 140,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 135,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 127,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 98,
							columnNumber: 13
						}, this), /* @__PURE__ */ _jsxDEV("div", {
							className: "lg:col-span-5 bg-slate-50 rounded-xl p-5 border border-slate-200",
							children: [
								/* @__PURE__ */ _jsxDEV("div", {
									className: "flex items-center justify-between mb-4",
									children: [/* @__PURE__ */ _jsxDEV("h4", {
										className: "text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5",
										children: [/* @__PURE__ */ _jsxDEV(Cpu, { className: "w-4 h-4 text-indigo-600" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 149,
											columnNumber: 19
										}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Outils Existants Interconnectés" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 150,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 148,
										columnNumber: 17
									}, this), /* @__PURE__ */ _jsxDEV("span", {
										className: "text-xs font-medium text-slate-500",
										children: "Sans coder"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 152,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 147,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV("p", {
									className: "text-xs text-slate-600 mb-4 leading-relaxed",
									children: "Cet agent ne nécessite aucun développement sur-mesure. Il s'appuie sur les connecteurs officiels déjà disponibles dans votre entreprise :"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 157,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "space-y-2.5",
									children: activeAgent.noCodeTools.map((tool, idx) => /* @__PURE__ */ _jsxDEV("div", {
										className: "flex items-center justify-between p-2.5 bg-white rounded-lg border border-slate-200 text-xs",
										children: [/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
											className: "font-semibold text-slate-900",
											children: tool.name
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 168,
											columnNumber: 23
										}, this), /* @__PURE__ */ _jsxDEV("div", {
											className: "text-slate-500 text-[11px]",
											children: tool.role
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 169,
											columnNumber: 23
										}, this)] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 167,
											columnNumber: 21
										}, this), /* @__PURE__ */ _jsxDEV("span", {
											className: "text-[10px] font-mono uppercase tracking-wider font-semibold text-slate-400",
											children: tool.category
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 171,
											columnNumber: 21
										}, this)]
									}, idx, true, {
										fileName: _jsxFileName,
										lineNumber: 163,
										columnNumber: 19
									}, this))
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 161,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "mt-5 p-3 rounded-lg bg-indigo-50 border border-indigo-100 text-xs text-indigo-900",
									children: [
										/* @__PURE__ */ _jsxDEV("span", {
											className: "font-semibold",
											children: "Temps moyen de mise en service :"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 179,
											columnNumber: 17
										}, this),
										" ",
										activeAgent.avgSetupTime,
										" avec les modèles préconfigurés."
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 178,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 146,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 96,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 95,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 41,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 40,
		columnNumber: 5
	}, this);
};

//# sourceMappingURL=data:application/json;base64,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QUFLLFdBQVU7cUJBQWdDLEtBQUs7VUFBVTs7OztvQkFDOUQsd0JBQUMsT0FBRDtXQUFLLFdBQVU7cUJBQThCLEtBQUs7VUFBVTs7OztrQkFDekQ7Ozs7b0JBQ0wsd0JBQUMsUUFBRDtXQUFNLFdBQVU7cUJBQ2IsS0FBSztVQUNGOzs7O2tCQUNIO1lBVkU7Ozs7Z0JBVUYsQ0FDTjtRQUNFOzs7OztRQUVMLHdCQUFDLE9BQUQ7U0FBSyxXQUFVO21CQUFmO1VBQ0Usd0JBQUMsUUFBRDtXQUFNLFdBQVU7cUJBQWdCO1VBQXNDOzs7OztVQUFDO1VBQUUsWUFBWTtVQUFhO1NBQy9GOzs7Ozs7T0FDRjs7Ozs7Y0FDRjs7Ozs7O0lBQ0Y7Ozs7O0dBQ0Y7Ozs7OztDQUNFOzs7OztBQUViIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkFnZW50Q2F0YWxvZy50c3giXSwidmVyc2lvbiI6Mywic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQUdFTlRTX0RBVEEgfSBmcm9tICcuLi9kYXRhL2FnZW50c0RhdGEnO1xuaW1wb3J0IHsgQWdlbnRUeXBlIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgXG4gIE1lc3NhZ2VTcXVhcmVUZXh0LCBcbiAgUmVjZWlwdCwgXG4gIENhbGVuZGFyQ2xvY2ssIFxuICBVc2VyQ2hlY2ssIFxuICBBcnJvd1JpZ2h0LCBcbiAgQ2hlY2ssIFxuICBDcHUsIFxuICBQbGF5LCBcbiAgRmlsZUNvZGUgXG59IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5cbmludGVyZmFjZSBBZ2VudENhdGFsb2dQcm9wcyB7XG4gIG9uU2VsZWN0QWdlbnRGb3JUZXN0OiAoYWdlbnRJZDogQWdlbnRUeXBlKSA9PiB2b2lkO1xuICBvblZpZXdCbHVlcHJpbnQ6IChhZ2VudElkOiBBZ2VudFR5cGUpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBBZ2VudENhdGFsb2c6IFJlYWN0LkZDPEFnZW50Q2F0YWxvZ1Byb3BzPiA9ICh7IG9uU2VsZWN0QWdlbnRGb3JUZXN0LCBvblZpZXdCbHVlcHJpbnQgfSkgPT4ge1xuICBjb25zdCBbc2VsZWN0ZWRBZ2VudElkLCBzZXRTZWxlY3RlZEFnZW50SWRdID0gdXNlU3RhdGU8QWdlbnRUeXBlPignc3VwcG9ydCcpO1xuXG4gIGNvbnN0IGFjdGl2ZUFnZW50ID0gQUdFTlRTX0RBVEEuZmluZCgoYSkgPT4gYS5pZCA9PT0gc2VsZWN0ZWRBZ2VudElkKSB8fCBBR0VOVFNfREFUQVswXTtcblxuICBjb25zdCBnZXRBZ2VudEljb24gPSAoaWQ6IEFnZW50VHlwZSkgPT4ge1xuICAgIHN3aXRjaCAoaWQpIHtcbiAgICAgIGNhc2UgJ3N1cHBvcnQnOlxuICAgICAgICByZXR1cm4gPE1lc3NhZ2VTcXVhcmVUZXh0IGNsYXNzTmFtZT1cInctNSBoLTUgdGV4dC1lbWVyYWxkLTYwMFwiIC8+O1xuICAgICAgY2FzZSAnaW52b2ljaW5nJzpcbiAgICAgICAgcmV0dXJuIDxSZWNlaXB0IGNsYXNzTmFtZT1cInctNSBoLTUgdGV4dC1hbWJlci02MDBcIiAvPjtcbiAgICAgIGNhc2UgJ3NjaGVkdWxpbmcnOlxuICAgICAgICByZXR1cm4gPENhbGVuZGFyQ2xvY2sgY2xhc3NOYW1lPVwidy01IGgtNSB0ZXh0LWJsdWUtNjAwXCIgLz47XG4gICAgICBjYXNlICdsZWFkX2ZvbGxvd3VwJzpcbiAgICAgICAgcmV0dXJuIDxVc2VyQ2hlY2sgY2xhc3NOYW1lPVwidy01IGgtNSB0ZXh0LXZpb2xldC02MDBcIiAvPjtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBpZD1cImFnZW50c1wiIGNsYXNzTmFtZT1cInB5LTE2IGJnLXNsYXRlLTUwIGJvcmRlci1iIGJvcmRlci1zbGF0ZS0yMDBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctN3hsIG14LWF1dG8gcHgtNlwiPlxuICAgICAgICB7LyogU2VjdGlvbiBIZWFkZXIgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctM3hsIG1iLTEyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIHRleHQtaW5kaWdvLTcwMCBtYi0yXCI+XG4gICAgICAgICAgICBBcmNoaXRlY3R1cmUgTcOpdGllclxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBzbTp0ZXh0LTN4bCBmb250LWJvbGQgdHJhY2tpbmctdGlnaHQgdGV4dC1zbGF0ZS05MDAgdGV4dC1iYWxhbmNlXCI+XG4gICAgICAgICAgICBMZXMgNCBBZ2VudHMgRm9uZGFtZW50YXV4IHBvdXIgUE1FXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHNtOnRleHQtYmFzZSB0ZXh0LXNsYXRlLTYwMCBtdC0zIGxlYWRpbmctcmVsYXhlZFwiPlxuICAgICAgICAgICAgUGx1dMO0dCBxdWUgZOKAmWFkb3B0ZXIgZGVzIGxvZ2ljaWVscyBjb21wbGV4ZXMgcXVlIHBlcnNvbm5lIG7igJl1dGlsaXNlLCBjb25maWd1cmV6IGRlcyBhZ2VudHMgZm9jYWxpc8OpcyBzdXIgbGVzIDQgZ291bGV0cyBk4oCZw6l0cmFuZ2xlbWVudCByw6ljdXJyZW50cyBkZSB0b3V0ZSBwZXRpdGUgZW50cmVwcmlzZS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiA0IENhcmRzIEdyaWQgLSBTZWxlY3RvciAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy00IGdhcC00IG1iLThcIj5cbiAgICAgICAgICB7QUdFTlRTX0RBVEEubWFwKChhZ2VudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXNTZWxlY3RlZCA9IGFnZW50LmlkID09PSBzZWxlY3RlZEFnZW50SWQ7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAga2V5PXthZ2VudC5pZH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZEFnZW50SWQoYWdlbnQuaWQpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHAtNSByb3VuZGVkLXhsIGJvcmRlciB0ZXh0LWxlZnQgdHJhbnNpdGlvbi1hbGwgY3Vyc29yLXBvaW50ZXIgYmctd2hpdGUgcmVsYXRpdmUgJHtcbiAgICAgICAgICAgICAgICAgIGlzU2VsZWN0ZWQgXG4gICAgICAgICAgICAgICAgICAgID8gJ2JvcmRlci1pbmRpZ28tNjAwIHJpbmctMiByaW5nLWluZGlnby02MDAvMTAgc2hhZG93LW1kJyBcbiAgICAgICAgICAgICAgICAgICAgOiAnYm9yZGVyLXNsYXRlLTIwMCBob3Zlcjpib3JkZXItc2xhdGUtMzAwIGhvdmVyOnNoYWRvdy1zbSdcbiAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG1iLTNcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy05IGgtOSByb3VuZGVkLWxnIGJnLXNsYXRlLTEwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICB7Z2V0QWdlbnRJY29uKGFnZW50LmlkKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtc2xhdGUtNTAwXCI+XG4gICAgICAgICAgICAgICAgICAgIHthZ2VudC5iYWRnZX1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1zZW1pYm9sZCB0ZXh0LXNsYXRlLTkwMCBtYi0xIGxlYWRpbmctc251Z1wiPlxuICAgICAgICAgICAgICAgICAge2FnZW50LnRpdGxlfVxuICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXNsYXRlLTYwMCBsaW5lLWNsYW1wLTIgbWItM1wiPlxuICAgICAgICAgICAgICAgICAge2FnZW50LnRhZ2xpbmV9XG4gICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1pbmRpZ28tNjAwIGZsZXggaXRlbXMtY2VudGVyIGdhcC0xXCI+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj57aXNTZWxlY3RlZCA/ICdBZ2VudCBzw6lsZWN0aW9ubsOpJyA6ICdWb2lyIGxlcyBkw6l0YWlscyd9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPEFycm93UmlnaHQgY2xhc3NOYW1lPVwidy0zIGgtM1wiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIERldGFpbGVkIEZvY3VzIFBhbmVsIGZvciBTZWxlY3RlZCBBZ2VudCAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLXNsYXRlLTIwMCBwLTYgbGc6cC04IHNoYWRvdy1zbVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBsZzpncmlkLWNvbHMtMTIgZ2FwLTggaXRlbXMtc3RhcnRcIj5cbiAgICAgICAgICAgIHsvKiBMZWZ0IENvbHVtbjogQ29yZSBWYWx1ZSAmIENhcGFiaWxpdGllcyAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6Y29sLXNwYW4tN1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHRleHQteHMgdGV4dC1zbGF0ZS01MDAgbWItMlwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPlBpbGllciBPcMOpcmF0aW9ubmVsPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPsK3PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuPnthY3RpdmVBZ2VudC5hdmdTZXR1cFRpbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPsK3PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1lbWVyYWxkLTcwMFwiPnthY3RpdmVBZ2VudC5yb2lNZXRyaWN9PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14bCBzbTp0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC1zbGF0ZS05MDAgbWItM1wiPlxuICAgICAgICAgICAgICAgIHthY3RpdmVBZ2VudC50aXRsZX1cbiAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXNsYXRlLTYwMCBsZWFkaW5nLXJlbGF4ZWQgbWItNlwiPlxuICAgICAgICAgICAgICAgIHthY3RpdmVBZ2VudC5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgdGV4dC1zbGF0ZS05MDAgbWItM1wiPlxuICAgICAgICAgICAgICAgIENhcGFjaXTDqXMgTcOpdGllciBBdXRvbWF0aXPDqWVzXG4gICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzcGFjZS15LTIuNSBtYi04XCI+XG4gICAgICAgICAgICAgICAge2FjdGl2ZUFnZW50LmNhcGFiaWxpdGllcy5tYXAoKGNhcCwgaWR4KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8bGkga2V5PXtpZHh9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQgZ2FwLTIuNSB0ZXh0LXhzIHNtOnRleHQtc20gdGV4dC1zbGF0ZS03MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgPENoZWNrIGNsYXNzTmFtZT1cInctNCBoLTQgdGV4dC1lbWVyYWxkLTYwMCBzaHJpbmstMCBtdC0wLjVcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57Y2FwfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgICAgey8qIERpcmVjdCBBY3Rpb24gQnV0dG9ucyAqL31cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIgZ2FwLTNcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblNlbGVjdEFnZW50Rm9yVGVzdChhY3RpdmVBZ2VudC5pZCl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBweC00IHB5LTIuNSB0ZXh0LXhzIHNtOnRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlIGJnLWluZGlnby02MDAgcm91bmRlZC1sZyBob3ZlcjpiZy1pbmRpZ28tNzAwIGFjdGl2ZTpzY2FsZS1bMC45OF0gdHJhbnNpdGlvbi1hbGwgc2hhZG93LXNtIGN1cnNvci1wb2ludGVyIHdoaXRlc3BhY2Utbm93cmFwXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8UGxheSBjbGFzc05hbWU9XCJ3LTQgaC00IGZpbGwtd2hpdGVcIiAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+VGVzdGVyIGNldCBhZ2VudCBkYW5zIGxlIFNpbXVsYXRldXI8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25WaWV3Qmx1ZXByaW50KGFjdGl2ZUFnZW50LmlkKX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHB4LTQgcHktMi41IHRleHQteHMgc206dGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXNsYXRlLTcwMCBiZy1zbGF0ZS0xMDAgaG92ZXI6Ymctc2xhdGUtMjAwIGFjdGl2ZTpzY2FsZS1bMC45OF0gcm91bmRlZC1sZyB0cmFuc2l0aW9uLWFsbCBjdXJzb3ItcG9pbnRlciB3aGl0ZXNwYWNlLW5vd3JhcFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPEZpbGVDb2RlIGNsYXNzTmFtZT1cInctNCBoLTQgdGV4dC1zbGF0ZS01MDBcIiAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+Vm9pciBsZSBCbHVlcHJpbnQgTWFrZS5jb208L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsvKiBSaWdodCBDb2x1bW46IEV4aXN0aW5nIFRvb2xzIENvbm5lY3RlZCAoTm8tQ29kZSBTdGFjaykgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmNvbC1zcGFuLTUgYmctc2xhdGUtNTAgcm91bmRlZC14bCBwLTUgYm9yZGVyIGJvcmRlci1zbGF0ZS0yMDBcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbWItNFwiPlxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgdGV4dC1zbGF0ZS05MDAgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEuNVwiPlxuICAgICAgICAgICAgICAgICAgPENwdSBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtaW5kaWdvLTYwMFwiIC8+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5PdXRpbHMgRXhpc3RhbnRzIEludGVyY29ubmVjdMOpczwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1tZWRpdW0gdGV4dC1zbGF0ZS01MDBcIj5cbiAgICAgICAgICAgICAgICAgIFNhbnMgY29kZXJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zbGF0ZS02MDAgbWItNCBsZWFkaW5nLXJlbGF4ZWRcIj5cbiAgICAgICAgICAgICAgICBDZXQgYWdlbnQgbmUgbsOpY2Vzc2l0ZSBhdWN1biBkw6l2ZWxvcHBlbWVudCBzdXItbWVzdXJlLiBJbCBzJ2FwcHVpZSBzdXIgbGVzIGNvbm5lY3RldXJzIG9mZmljaWVscyBkw6lqw6AgZGlzcG9uaWJsZXMgZGFucyB2b3RyZSBlbnRyZXByaXNlIDpcbiAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yLjVcIj5cbiAgICAgICAgICAgICAgICB7YWN0aXZlQWdlbnQubm9Db2RlVG9vbHMubWFwKCh0b29sLCBpZHgpID0+IChcbiAgICAgICAgICAgICAgICAgIDxkaXYgXG4gICAgICAgICAgICAgICAgICAgIGtleT17aWR4fSBcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHAtMi41IGJnLXdoaXRlIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS0yMDAgdGV4dC14c1wiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtc2xhdGUtOTAwXCI+e3Rvb2wubmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNTAwIHRleHQtWzExcHhdXCI+e3Rvb2wucm9sZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIGZvbnQtbW9ubyB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgZm9udC1zZW1pYm9sZCB0ZXh0LXNsYXRlLTQwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgIHt0b29sLmNhdGVnb3J5fVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC01IHAtMyByb3VuZGVkLWxnIGJnLWluZGlnby01MCBib3JkZXIgYm9yZGVyLWluZGlnby0xMDAgdGV4dC14cyB0ZXh0LWluZGlnby05MDBcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCI+VGVtcHMgbW95ZW4gZGUgbWlzZSBlbiBzZXJ2aWNlIDo8L3NwYW4+IHthY3RpdmVBZ2VudC5hdmdTZXR1cFRpbWV9IGF2ZWMgbGVzIG1vZMOobGVzIHByw6ljb25maWd1csOpcy5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuIl19