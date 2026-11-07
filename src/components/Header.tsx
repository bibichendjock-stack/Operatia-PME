const React = __vite__cjsImport0_react;const _jsxDEV = __vite__cjsImport2_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=f4bb9b4f";
import { Bot, ArrowRight, Laptop } from "/node_modules/.vite/deps/lucide-react.js?v=f4bb9b4f";
var _jsxFileName = "/app/applet/src/components/Header.tsx";
import __vite__cjsImport2_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=f4bb9b4f";
export const Header = ({ onOpenConfig, onOpenDownload, activeSection, onNavigate }) => {
	return /* @__PURE__ */ _jsxDEV("header", {
		className: "sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200",
		children: /* @__PURE__ */ _jsxDEV("div", {
			className: "max-w-7xl mx-auto flex items-center justify-between gap-8 px-6 py-3.5",
			children: [
				/* @__PURE__ */ _jsxDEV("a", {
					href: "#",
					onClick: (e) => {
						e.preventDefault();
						onNavigate("hero");
					},
					className: "flex items-center gap-2.5 text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 hover:text-indigo-600 transition-colors",
					children: [/* @__PURE__ */ _jsxDEV("div", {
						className: "w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-sm shadow-sm",
						children: /* @__PURE__ */ _jsxDEV(Bot, { className: "w-5 h-5" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 27,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 26,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV("span", { children: "OperatIA PME" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 29,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 21,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("nav", {
					className: "hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600",
					children: [
						/* @__PURE__ */ _jsxDEV("button", {
							onClick: () => onNavigate("agents"),
							className: `transition-colors whitespace-nowrap shrink-0 ${activeSection === "agents" ? "text-indigo-600 font-semibold" : "hover:text-slate-900"}`,
							children: "Les 4 Agents Clés"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 34,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("button", {
							onClick: () => onNavigate("simulator"),
							className: `transition-colors whitespace-nowrap shrink-0 ${activeSection === "simulator" ? "text-indigo-600 font-semibold" : "hover:text-slate-900"}`,
							children: "Simulateur Live"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 40,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("button", {
							onClick: () => onNavigate("architectures"),
							className: `transition-colors whitespace-nowrap shrink-0 ${activeSection === "architectures" ? "text-indigo-600 font-semibold" : "hover:text-slate-900"}`,
							children: "Stacks No-Code"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 46,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("button", {
							onClick: () => onNavigate("roi"),
							className: `transition-colors whitespace-nowrap shrink-0 ${activeSection === "roi" ? "text-indigo-600 font-semibold" : "hover:text-slate-900"}`,
							children: "Calculateur ROI"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 52,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("button", {
							onClick: () => onNavigate("listing-hub"),
							className: `transition-colors whitespace-nowrap shrink-0 font-medium ${activeSection === "listing-hub" ? "text-indigo-600 font-bold" : "text-emerald-700 hover:text-emerald-800"}`,
							children: "Vendre (Acquire / Flippa)"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 58,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("button", {
							onClick: () => onNavigate("cas-metiers"),
							className: `transition-colors whitespace-nowrap shrink-0 ${activeSection === "cas-metiers" ? "text-indigo-600 font-semibold" : "hover:text-slate-900"}`,
							children: "Cas Clients & Agence"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 64,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 33,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "flex items-center gap-2.5 shrink-0",
					children: [/* @__PURE__ */ _jsxDEV("button", {
						onClick: onOpenDownload,
						className: "flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 active:scale-[0.98] rounded-lg transition-all whitespace-nowrap shrink-0 cursor-pointer border border-slate-200 shadow-2xs",
						title: "Installer comme application sur votre PC ou Mac ou télécharger le ZIP",
						children: [
							/* @__PURE__ */ _jsxDEV(Laptop, { className: "w-3.5 h-3.5 text-indigo-600" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 79,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("span", {
								className: "hidden sm:inline",
								children: "Télécharger l'App"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 80,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("span", {
								className: "sm:hidden",
								children: "Télécharger"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 81,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 74,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV("button", {
						onClick: onOpenConfig,
						className: "flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 active:scale-[0.98] transition-all shadow-sm whitespace-nowrap shrink-0 cursor-pointer",
						children: [/* @__PURE__ */ _jsxDEV("span", { children: "Configurer un Agent" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 88,
							columnNumber: 13
						}, this), /* @__PURE__ */ _jsxDEV(ArrowRight, { className: "w-3.5 h-3.5" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 89,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 84,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 73,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 19,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 18,
		columnNumber: 5
	}, this);
};

//# sourceMappingURL=data:application/json;base64,eyJtYXBwaW5ncyI6IkFBQUEsT0FBTyxXQUFXO0FBQ2xCLFNBQVMsS0FBSyxZQUFZLGNBQWM7OztBQVN4QyxPQUFPLE1BQU0sVUFBaUMsRUFDNUMsY0FDQSxnQkFDQSxlQUNBLGlCQUNJO0NBQ0osT0FDRSx3QkFBQyxVQUFEO0VBQVEsV0FBVTtZQUNoQix3QkFBQyxPQUFEO0dBQUssV0FBVTthQUFmO0lBRUUsd0JBQUMsS0FBRDtLQUNFLE1BQUs7S0FDTCxVQUFVLE1BQU07TUFBRSxFQUFFLGVBQWU7TUFBRyxXQUFXLE1BQU07S0FBRztLQUMxRCxXQUFVO2VBSFosQ0FLRSx3QkFBQyxPQUFEO01BQUssV0FBVTtnQkFDYix3QkFBQyxLQUFELEVBQUssV0FBVSxVQUFXOzs7OztLQUN2Qjs7OztlQUNMLHdCQUFDLFFBQUQsWUFBTSxlQUFrQjs7OzthQUN2Qjs7Ozs7O0lBR0gsd0JBQUMsT0FBRDtLQUFLLFdBQVU7ZUFBZjtNQUNFLHdCQUFDLFVBQUQ7T0FDRSxlQUFlLFdBQVcsUUFBUTtPQUNsQyxXQUFXLGdEQUFnRCxrQkFBa0IsV0FBVyxrQ0FBa0M7aUJBQzNIO01BRU87Ozs7O01BQ1Isd0JBQUMsVUFBRDtPQUNFLGVBQWUsV0FBVyxXQUFXO09BQ3JDLFdBQVcsZ0RBQWdELGtCQUFrQixjQUFjLGtDQUFrQztpQkFDOUg7TUFFTzs7Ozs7TUFDUix3QkFBQyxVQUFEO09BQ0UsZUFBZSxXQUFXLGVBQWU7T0FDekMsV0FBVyxnREFBZ0Qsa0JBQWtCLGtCQUFrQixrQ0FBa0M7aUJBQ2xJO01BRU87Ozs7O01BQ1Isd0JBQUMsVUFBRDtPQUNFLGVBQWUsV0FBVyxLQUFLO09BQy9CLFdBQVcsZ0RBQWdELGtCQUFrQixRQUFRLGtDQUFrQztpQkFDeEg7TUFFTzs7Ozs7TUFDUix3QkFBQyxVQUFEO09BQ0UsZUFBZSxXQUFXLGFBQWE7T0FDdkMsV0FBVyw0REFBNEQsa0JBQWtCLGdCQUFnQiw4QkFBOEI7aUJBQ3hJO01BRU87Ozs7O01BQ1Isd0JBQUMsVUFBRDtPQUNFLGVBQWUsV0FBVyxhQUFhO09BQ3ZDLFdBQVcsZ0RBQWdELGtCQUFrQixnQkFBZ0Isa0NBQWtDO2lCQUNoSTtNQUVPOzs7OztLQUNMOzs7Ozs7SUFHTCx3QkFBQyxPQUFEO0tBQUssV0FBVTtlQUFmLENBQ0Usd0JBQUMsVUFBRDtNQUNFLFNBQVM7TUFDVCxXQUFVO01BQ1YsT0FBTTtnQkFIUjtPQUtFLHdCQUFDLFFBQUQsRUFBUSxXQUFVLDhCQUErQjs7Ozs7T0FDakQsd0JBQUMsUUFBRDtRQUFNLFdBQVU7a0JBQW1CO09BQXVCOzs7OztPQUMxRCx3QkFBQyxRQUFEO1FBQU0sV0FBVTtrQkFBWTtPQUFpQjs7Ozs7TUFDdkM7Ozs7O2VBRVIsd0JBQUMsVUFBRDtNQUNFLFNBQVM7TUFDVCxXQUFVO2dCQUZaLENBSUUsd0JBQUMsUUFBRCxZQUFNLHNCQUF5Qjs7OztnQkFDL0Isd0JBQUMsWUFBRCxFQUFZLFdBQVUsY0FBZTs7OztjQUMvQjs7Ozs7YUFDTDs7Ozs7O0dBQ0Y7Ozs7OztDQUNDOzs7OztBQUVaIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkhlYWRlci50c3giXSwidmVyc2lvbiI6Mywic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJvdCwgQXJyb3dSaWdodCwgTGFwdG9wIH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcblxuaW50ZXJmYWNlIEhlYWRlclByb3BzIHtcbiAgb25PcGVuQ29uZmlnOiAoKSA9PiB2b2lkO1xuICBvbk9wZW5Eb3dubG9hZDogKCkgPT4gdm9pZDtcbiAgYWN0aXZlU2VjdGlvbjogc3RyaW5nO1xuICBvbk5hdmlnYXRlOiAoc2VjdGlvbklkOiBzdHJpbmcpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBIZWFkZXI6IFJlYWN0LkZDPEhlYWRlclByb3BzPiA9ICh7IFxuICBvbk9wZW5Db25maWcsIFxuICBvbk9wZW5Eb3dubG9hZCwgXG4gIGFjdGl2ZVNlY3Rpb24sIFxuICBvbk5hdmlnYXRlIFxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwic3RpY2t5IHRvcC0wIHotNDAgYmctd2hpdGUvOTUgYmFja2Ryb3AtYmx1ci1tZCBib3JkZXItYiBib3JkZXItc2xhdGUtMjAwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTd4bCBteC1hdXRvIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBnYXAtOCBweC02IHB5LTMuNVwiPlxuICAgICAgICB7LyogWm9uZSAxOiBCcmFuZCB0aXRsZSB3b3JkbWFyayAqL31cbiAgICAgICAgPGEgXG4gICAgICAgICAgaHJlZj1cIiNcIiBcbiAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4geyBlLnByZXZlbnREZWZhdWx0KCk7IG9uTmF2aWdhdGUoJ2hlcm8nKTsgfX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMi41IHRleHQtbGcgZm9udC1ib2xkIHRyYWNraW5nLXRpZ2h0IHRleHQtc2xhdGUtOTAwIHdoaXRlc3BhY2Utbm93cmFwIHNocmluay0wIGhvdmVyOnRleHQtaW5kaWdvLTYwMCB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctOCBoLTggcm91bmRlZC1sZyBiZy1pbmRpZ28tNjAwIHRleHQtd2hpdGUgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZm9udC1ib2xkIHRleHQtc20gc2hhZG93LXNtXCI+XG4gICAgICAgICAgICA8Qm90IGNsYXNzTmFtZT1cInctNSBoLTVcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxzcGFuPk9wZXJhdElBIFBNRTwvc3Bhbj5cbiAgICAgICAgPC9hPlxuXG4gICAgICAgIHsvKiBab25lIDI6IDQtNSBjbGVhbiBzaW5nbGUtbGluZSBuYXYgbGlua3MgKi99XG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiaGlkZGVuIGxnOmZsZXggaXRlbXMtY2VudGVyIGdhcC02IHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1zbGF0ZS02MDBcIj5cbiAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25OYXZpZ2F0ZSgnYWdlbnRzJyl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2B0cmFuc2l0aW9uLWNvbG9ycyB3aGl0ZXNwYWNlLW5vd3JhcCBzaHJpbmstMCAke2FjdGl2ZVNlY3Rpb24gPT09ICdhZ2VudHMnID8gJ3RleHQtaW5kaWdvLTYwMCBmb250LXNlbWlib2xkJyA6ICdob3Zlcjp0ZXh0LXNsYXRlLTkwMCd9YH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBMZXMgNCBBZ2VudHMgQ2zDqXNcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25OYXZpZ2F0ZSgnc2ltdWxhdG9yJyl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2B0cmFuc2l0aW9uLWNvbG9ycyB3aGl0ZXNwYWNlLW5vd3JhcCBzaHJpbmstMCAke2FjdGl2ZVNlY3Rpb24gPT09ICdzaW11bGF0b3InID8gJ3RleHQtaW5kaWdvLTYwMCBmb250LXNlbWlib2xkJyA6ICdob3Zlcjp0ZXh0LXNsYXRlLTkwMCd9YH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBTaW11bGF0ZXVyIExpdmVcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25OYXZpZ2F0ZSgnYXJjaGl0ZWN0dXJlcycpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgdHJhbnNpdGlvbi1jb2xvcnMgd2hpdGVzcGFjZS1ub3dyYXAgc2hyaW5rLTAgJHthY3RpdmVTZWN0aW9uID09PSAnYXJjaGl0ZWN0dXJlcycgPyAndGV4dC1pbmRpZ28tNjAwIGZvbnQtc2VtaWJvbGQnIDogJ2hvdmVyOnRleHQtc2xhdGUtOTAwJ31gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFN0YWNrcyBOby1Db2RlXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uTmF2aWdhdGUoJ3JvaScpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgdHJhbnNpdGlvbi1jb2xvcnMgd2hpdGVzcGFjZS1ub3dyYXAgc2hyaW5rLTAgJHthY3RpdmVTZWN0aW9uID09PSAncm9pJyA/ICd0ZXh0LWluZGlnby02MDAgZm9udC1zZW1pYm9sZCcgOiAnaG92ZXI6dGV4dC1zbGF0ZS05MDAnfWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQ2FsY3VsYXRldXIgUk9JXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uTmF2aWdhdGUoJ2xpc3RpbmctaHViJyl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2B0cmFuc2l0aW9uLWNvbG9ycyB3aGl0ZXNwYWNlLW5vd3JhcCBzaHJpbmstMCBmb250LW1lZGl1bSAke2FjdGl2ZVNlY3Rpb24gPT09ICdsaXN0aW5nLWh1YicgPyAndGV4dC1pbmRpZ28tNjAwIGZvbnQtYm9sZCcgOiAndGV4dC1lbWVyYWxkLTcwMCBob3Zlcjp0ZXh0LWVtZXJhbGQtODAwJ31gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFZlbmRyZSAoQWNxdWlyZSAvIEZsaXBwYSlcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25OYXZpZ2F0ZSgnY2FzLW1ldGllcnMnKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHRyYW5zaXRpb24tY29sb3JzIHdoaXRlc3BhY2Utbm93cmFwIHNocmluay0wICR7YWN0aXZlU2VjdGlvbiA9PT0gJ2Nhcy1tZXRpZXJzJyA/ICd0ZXh0LWluZGlnby02MDAgZm9udC1zZW1pYm9sZCcgOiAnaG92ZXI6dGV4dC1zbGF0ZS05MDAnfWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQ2FzIENsaWVudHMgJiBBZ2VuY2VcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9uYXY+XG5cbiAgICAgICAgey8qIFpvbmUgMzogQWN0aW9ucyAoSW5zdGFsbGVyL1TDqWzDqWNoYXJnZXIgc3VyIFBDICsgQ29uZmlndXJlcikgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIuNSBzaHJpbmstMFwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9e29uT3BlbkRvd25sb2FkfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEuNSBweC0zIHB5LTIgdGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtc2xhdGUtNzAwIGJnLXNsYXRlLTEwMCBob3ZlcjpiZy1zbGF0ZS0yMDAgYWN0aXZlOnNjYWxlLVswLjk4XSByb3VuZGVkLWxnIHRyYW5zaXRpb24tYWxsIHdoaXRlc3BhY2Utbm93cmFwIHNocmluay0wIGN1cnNvci1wb2ludGVyIGJvcmRlciBib3JkZXItc2xhdGUtMjAwIHNoYWRvdy0yeHNcIlxuICAgICAgICAgICAgdGl0bGU9XCJJbnN0YWxsZXIgY29tbWUgYXBwbGljYXRpb24gc3VyIHZvdHJlIFBDIG91IE1hYyBvdSB0w6lsw6ljaGFyZ2VyIGxlIFpJUFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPExhcHRvcCBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNSB0ZXh0LWluZGlnby02MDBcIiAvPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGlkZGVuIHNtOmlubGluZVwiPlTDqWzDqWNoYXJnZXIgbCdBcHA8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzbTpoaWRkZW5cIj5Uw6lsw6ljaGFyZ2VyPC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17b25PcGVuQ29uZmlnfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEuNSBweC0zLjUgcHktMiB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSBiZy1pbmRpZ28tNjAwIHJvdW5kZWQtbGcgaG92ZXI6YmctaW5kaWdvLTcwMCBhY3RpdmU6c2NhbGUtWzAuOThdIHRyYW5zaXRpb24tYWxsIHNoYWRvdy1zbSB3aGl0ZXNwYWNlLW5vd3JhcCBzaHJpbmstMCBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW4+Q29uZmlndXJlciB1biBBZ2VudDwvc3Bhbj5cbiAgICAgICAgICAgIDxBcnJvd1JpZ2h0IGNsYXNzTmFtZT1cInctMy41IGgtMy41XCIgLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2hlYWRlcj5cbiAgKTtcbn07XG4iXX0=