const React = __vite__cjsImport0_react; const useState = __vite__cjsImport0_react["useState"];const _jsxDEV = __vite__cjsImport3_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=f4bb9b4f";
import { MARKETPLACE_LISTINGS, DUE_DILIGENCE_ITEMS } from "/src/data/listingData.ts";
import { ExternalLink, Copy, Check, Download, ShieldCheck, ArrowRight, CheckCircle2, Briefcase } from "/node_modules/.vite/deps/lucide-react.js?v=f4bb9b4f";
var _jsxFileName = "/app/applet/src/components/ListingHub.tsx";
import __vite__cjsImport3_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=f4bb9b4f";
export const ListingHub = () => {
	const [selectedPlatformId, setSelectedPlatformId] = useState("acquire");
	const [copiedPitch, setCopiedPitch] = useState(false);
	const [copiedTeaser, setCopiedTeaser] = useState(false);
	// Valuation simulation sliders
	const [customArr, setCustomArr] = useState(36e3);
	const [multipleMultiplier, setMultipleMultiplier] = useState(4.5);
	const activeListing = MARKETPLACE_LISTINGS.find((l) => l.platformId === selectedPlatformId) || MARKETPLACE_LISTINGS[0];
	// Calculated dynamic valuation
	const dynamicValuation = Math.round(customArr * multipleMultiplier);
	const platformFeeRate = selectedPlatformId === "acquire" ? .05 : selectedPlatformId === "flippa" ? .08 : .06;
	const netSellerProceeds = Math.round(dynamicValuation * (1 - platformFeeRate));
	const handleCopyPitch = () => {
		navigator.clipboard.writeText(activeListing.fullPitch);
		setCopiedPitch(true);
		setTimeout(() => setCopiedPitch(false), 2e3);
	};
	const handleCopyTeaser = () => {
		navigator.clipboard.writeText(activeListing.shortTeaser);
		setCopiedTeaser(true);
		setTimeout(() => setCopiedTeaser(false), 2e3);
	};
	const handleDownloadCim = () => {
		const cimText = `# DOSSIER DE PRÉSENTATION CONFIDENTIEL (CIM)
PROJET : ${activeListing.listingTitle}
PLATEFORME CIBLE : ${activeListing.platformName}
VALORISATION RECOMMANDÉE : ${activeListing.recommendedPrice.toLocaleString("fr-FR")} ${activeListing.currency}

## 1. RÉSUMÉ EXÉCUTIF (EXECUTIVE SUMMARY)
${activeListing.shortTeaser}

## 2. MODÈLE ÉCONOMIQUE & FINANCES
- Multiple visé : ${activeListing.multipleMetric}
- Modèle de revenus : SaaS récurrent B2B ou Forfaits de déploiement Agence (2 500 € setup + 390 €/mois)
- Marge brute estimée : ${activeListing.financialModel.grossMarginPercent}%
- Taux de rétention : Churn estimé ${activeListing.financialModel.churnRate}

## 3. ACTIFS CÉDÉS LORS DE LA VENTE
${activeListing.assetsIncluded.map((a) => `- ${a}`).join("\n")}

## 4. DESCRIPTION COMPLÈTE DU PRODUIT
${activeListing.fullPitch}

## 5. OPPORTUNITÉS DE CROISSANCE POST-ACQUISITION
${activeListing.growthOpportunities.map((g) => `- ${g}`).join("\n")}

## 6. CONDITIONS DE TRANSITION
- 30 jours d’accompagnement technique et opérationnel inclus.
- Cession pleine et entière de la propriété intellectuelle.
`;
		const blob = new Blob([cimText], { type: "text/markdown;charset=utf-8" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = `dossier_cession_cim_${activeListing.platformId}.md`;
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
		URL.revokeObjectURL(url);
	};
	return /* @__PURE__ */ _jsxDEV("section", {
		id: "listing-hub",
		className: "py-16 bg-white border-b border-slate-200",
		children: /* @__PURE__ */ _jsxDEV("div", {
			className: "max-w-7xl mx-auto px-6",
			children: [
				/* @__PURE__ */ _jsxDEV("div", {
					className: "flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12",
					children: [/* @__PURE__ */ _jsxDEV("div", { children: [
						/* @__PURE__ */ _jsxDEV("div", {
							className: "text-xs font-semibold uppercase tracking-wider text-emerald-700 mb-2",
							children: "Cession & Monétisation de Projet"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 95,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("h2", {
							className: "text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 text-balance",
							children: "Hub de Vente & Fiches de Listing M&A"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 98,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("p", {
							className: "text-sm sm:text-base text-slate-600 mt-2 max-w-2xl leading-relaxed",
							children: [
								"Mettez ce projet en vente immédiatement sur les plateformes de référence (",
								/* @__PURE__ */ _jsxDEV("strong", {
									className: "font-semibold text-slate-800",
									children: "Acquire.com"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 102,
									columnNumber: 89
								}, this),
								", ",
								/* @__PURE__ */ _jsxDEV("strong", {
									className: "font-semibold text-slate-800",
									children: "Flippa"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 102,
									columnNumber: 160
								}, this),
								", ",
								/* @__PURE__ */ _jsxDEV("strong", {
									className: "font-semibold text-slate-800",
									children: "Truster / DotMarket"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 102,
									columnNumber: 226
								}, this),
								") grâce aux fiches descriptives, dossiers de valorisation et templates prêts à soumettre."
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 101,
							columnNumber: 13
						}, this)
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 94,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV("div", {
						className: "flex items-center gap-3 shrink-0",
						children: /* @__PURE__ */ _jsxDEV("button", {
							onClick: handleDownloadCim,
							className: "flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors shadow-xs cursor-pointer whitespace-nowrap",
							children: [/* @__PURE__ */ _jsxDEV(Download, { className: "w-4 h-4" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 112,
								columnNumber: 15
							}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Exporter le Dossier CIM (Markdown)" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 113,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 108,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 107,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 93,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "grid grid-cols-1 md:grid-cols-3 gap-4 mb-8",
					children: MARKETPLACE_LISTINGS.map((listing) => {
						const isSelected = listing.platformId === selectedPlatformId;
						return /* @__PURE__ */ _jsxDEV("div", {
							onClick: () => setSelectedPlatformId(listing.platformId),
							className: `p-5 rounded-2xl border transition-all cursor-pointer relative bg-white ${isSelected ? "border-indigo-600 ring-2 ring-indigo-600/10 shadow-md" : "border-slate-200 hover:border-slate-300 hover:shadow-xs"}`,
							children: [
								/* @__PURE__ */ _jsxDEV("div", {
									className: "flex items-center justify-between mb-3",
									children: [/* @__PURE__ */ _jsxDEV("span", {
										className: "text-sm font-bold text-slate-900",
										children: listing.platformName
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 133,
										columnNumber: 19
									}, this), /* @__PURE__ */ _jsxDEV("span", {
										className: "text-xs font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100",
										children: [
											listing.recommendedPrice.toLocaleString("fr-FR"),
											" ",
											listing.currency
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 136,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 132,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ _jsxDEV("p", {
									className: "text-xs text-slate-600 line-clamp-2 mb-4 leading-relaxed",
									children: listing.shortTeaser
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 141,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "flex items-center justify-between text-xs text-slate-500 pt-3 border-t border-slate-100",
									children: [/* @__PURE__ */ _jsxDEV("span", {
										className: "font-medium",
										children: listing.category
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 146,
										columnNumber: 19
									}, this), /* @__PURE__ */ _jsxDEV("span", {
										className: "text-indigo-600 font-semibold flex items-center gap-1",
										children: [/* @__PURE__ */ _jsxDEV("span", { children: isSelected ? "Sélectionné" : "Voir le kit" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 148,
											columnNumber: 21
										}, this), /* @__PURE__ */ _jsxDEV(ArrowRight, { className: "w-3 h-3" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 149,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 147,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 145,
									columnNumber: 17
								}, this)
							]
						}, listing.platformId, true, {
							fileName: _jsxFileName,
							lineNumber: 123,
							columnNumber: 15
						}, this);
					})
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 119,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12",
					children: [/* @__PURE__ */ _jsxDEV("div", {
						className: "lg:col-span-7 bg-slate-50 rounded-2xl border border-slate-200 p-6 lg:p-8 shadow-xs",
						children: [
							/* @__PURE__ */ _jsxDEV("div", {
								className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-200",
								children: [/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
									className: "flex items-center gap-2 text-xs text-slate-500 mb-1",
									children: [
										/* @__PURE__ */ _jsxDEV("span", { children: ["Plateforme : ", /* @__PURE__ */ _jsxDEV("strong", {
											className: "text-slate-800",
											children: activeListing.platformName
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 164,
											columnNumber: 38
										}, this)] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 164,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ _jsxDEV("span", {
											"aria-hidden": "true",
											children: "·"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 165,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ _jsxDEV("span", { children: ["Multiple : ", activeListing.multipleMetric] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 166,
											columnNumber: 19
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 163,
									columnNumber: 17
								}, this), /* @__PURE__ */ _jsxDEV("h3", {
									className: "text-base sm:text-lg font-bold text-slate-900",
									children: ["Fiche de Listing Optimisée pour ", activeListing.platformName]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 168,
									columnNumber: 17
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 162,
									columnNumber: 15
								}, this), /* @__PURE__ */ _jsxDEV("div", {
									className: "flex items-center gap-2",
									children: /* @__PURE__ */ _jsxDEV("a", {
										href: activeListing.platformUrl,
										target: "_blank",
										rel: "noopener noreferrer",
										className: "flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors border border-indigo-100 whitespace-nowrap",
										children: [/* @__PURE__ */ _jsxDEV("span", { children: ["Créer le listing sur ", activeListing.platformName.split(" ")[0]] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 180,
											columnNumber: 19
										}, this), /* @__PURE__ */ _jsxDEV(ExternalLink, { className: "w-3.5 h-3.5" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 181,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 174,
										columnNumber: 17
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 173,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 161,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "mb-5",
								children: [/* @__PURE__ */ _jsxDEV("label", {
									className: "block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5",
									children: "Titre de l’Annonce (Listing Title)"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 188,
									columnNumber: 15
								}, this), /* @__PURE__ */ _jsxDEV("div", {
									className: "p-3 bg-white rounded-lg border border-slate-200 text-xs sm:text-sm font-semibold text-slate-900",
									children: activeListing.listingTitle
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 191,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 187,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "mb-5",
								children: [/* @__PURE__ */ _jsxDEV("div", {
									className: "flex items-center justify-between mb-1.5",
									children: [/* @__PURE__ */ _jsxDEV("label", {
										className: "text-xs font-semibold uppercase tracking-wider text-slate-500",
										children: "Teaser / Accroche (Short Description)"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 199,
										columnNumber: 17
									}, this), /* @__PURE__ */ _jsxDEV("button", {
										onClick: handleCopyTeaser,
										className: "flex items-center gap-1 text-[11px] font-medium text-slate-600 hover:text-indigo-600",
										children: [copiedTeaser ? /* @__PURE__ */ _jsxDEV(Check, { className: "w-3 h-3 text-emerald-600" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 206,
											columnNumber: 35
										}, this) : /* @__PURE__ */ _jsxDEV(Copy, { className: "w-3 h-3" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 206,
											columnNumber: 84
										}, this), /* @__PURE__ */ _jsxDEV("span", { children: copiedTeaser ? "Copié !" : "Copier l’accroche" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 207,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 202,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 198,
									columnNumber: 15
								}, this), /* @__PURE__ */ _jsxDEV("div", {
									className: "p-3 bg-white rounded-lg border border-slate-200 text-xs text-slate-700 leading-relaxed",
									children: activeListing.shortTeaser
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 210,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 197,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "mb-6",
								children: [/* @__PURE__ */ _jsxDEV("div", {
									className: "flex items-center justify-between mb-1.5",
									children: [/* @__PURE__ */ _jsxDEV("label", {
										className: "text-xs font-semibold uppercase tracking-wider text-slate-500",
										children: "Texte de Présentation Complet (Pitch Deck & FAQ)"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 218,
										columnNumber: 17
									}, this), /* @__PURE__ */ _jsxDEV("button", {
										onClick: handleCopyPitch,
										className: "flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-md hover:bg-slate-100 shadow-2xs",
										children: [copiedPitch ? /* @__PURE__ */ _jsxDEV(Check, { className: "w-3.5 h-3.5 text-emerald-600" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 225,
											columnNumber: 34
										}, this) : /* @__PURE__ */ _jsxDEV(Copy, { className: "w-3.5 h-3.5" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 225,
											columnNumber: 87
										}, this), /* @__PURE__ */ _jsxDEV("span", { children: copiedPitch ? "Texte Copié !" : "Copier tout le pitch" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 226,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 221,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 217,
									columnNumber: 15
								}, this), /* @__PURE__ */ _jsxDEV("pre", {
									className: "p-4 bg-white rounded-xl border border-slate-200 text-xs text-slate-700 whitespace-pre-wrap font-sans leading-relaxed max-h-[320px] overflow-y-auto",
									children: activeListing.fullPitch
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 229,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 216,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "pt-4 border-t border-slate-200",
								children: [/* @__PURE__ */ _jsxDEV("h4", {
									className: "text-xs font-bold uppercase tracking-wider text-slate-900 mb-3",
									children: ["Étapes de Publication sur ", activeListing.platformName]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 236,
									columnNumber: 15
								}, this), /* @__PURE__ */ _jsxDEV("div", {
									className: "space-y-2",
									children: activeListing.checklistSteps.map((step, idx) => /* @__PURE__ */ _jsxDEV("div", {
										className: "flex items-start gap-2.5 p-2.5 bg-white rounded-lg border border-slate-200 text-xs",
										children: [/* @__PURE__ */ _jsxDEV(CheckCircle2, { className: "w-4 h-4 text-emerald-600 shrink-0 mt-0.5" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 245,
											columnNumber: 21
										}, this), /* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
											className: "font-semibold text-slate-900",
											children: step.step
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 247,
											columnNumber: 23
										}, this), /* @__PURE__ */ _jsxDEV("div", {
											className: "text-slate-500 text-[11px]",
											children: step.description
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 248,
											columnNumber: 23
										}, this)] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 246,
											columnNumber: 21
										}, this)]
									}, idx, true, {
										fileName: _jsxFileName,
										lineNumber: 241,
										columnNumber: 19
									}, this))
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 239,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 235,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 160,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV("div", {
						className: "lg:col-span-5 space-y-6",
						children: [/* @__PURE__ */ _jsxDEV("div", {
							className: "bg-slate-900 rounded-2xl text-white p-6 sm:p-7 border border-slate-800 shadow-lg",
							children: [
								/* @__PURE__ */ _jsxDEV("div", {
									className: "flex items-center justify-between pb-3 border-b border-slate-800 mb-5",
									children: [/* @__PURE__ */ _jsxDEV("span", {
										className: "text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold",
										children: "Simulateur de Prix de Cession"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 261,
										columnNumber: 17
									}, this), /* @__PURE__ */ _jsxDEV("span", {
										className: "text-xs text-emerald-400 font-mono font-bold",
										children: "Marché M&A 2026"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 264,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 260,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "mb-6",
									children: [
										/* @__PURE__ */ _jsxDEV("div", {
											className: "text-xs uppercase tracking-wider text-slate-400 mb-1",
											children: "Prix Demandé Estimé (Asking Price)"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 271,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ _jsxDEV("div", {
											className: "text-3xl sm:text-4xl font-bold font-mono text-white tabular-nums",
											children: [
												dynamicValuation.toLocaleString("fr-FR"),
												" ",
												activeListing.currency
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 274,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ _jsxDEV("div", {
											className: "text-xs text-slate-400 mt-1.5",
											children: [
												"Montant net vendeur estimé : ",
												/* @__PURE__ */ _jsxDEV("strong", {
													className: "text-emerald-400 font-mono tabular-nums",
													children: [
														netSellerProceeds.toLocaleString("fr-FR"),
														" ",
														activeListing.currency
													]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 278,
													columnNumber: 48
												}, this),
												" (après commission plateforme)."
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 277,
											columnNumber: 17
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 270,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "space-y-4 pt-4 border-t border-slate-800 mb-6",
									children: [/* @__PURE__ */ _jsxDEV("div", { children: [
										/* @__PURE__ */ _jsxDEV("div", {
											className: "flex items-center justify-between text-xs mb-1",
											children: [/* @__PURE__ */ _jsxDEV("span", {
												className: "text-slate-300",
												children: "ARR / Revenus Prévisionnels Annuels :"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 286,
												columnNumber: 21
											}, this), /* @__PURE__ */ _jsxDEV("span", {
												className: "font-mono font-bold text-indigo-300 tabular-nums",
												children: [
													customArr.toLocaleString("fr-FR"),
													" ",
													activeListing.currency
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 287,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 285,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ _jsxDEV("input", {
											type: "range",
											min: 12e3,
											max: 12e4,
											step: 3e3,
											value: customArr,
											onChange: (e) => setCustomArr(Number(e.target.value)),
											className: "w-full accent-indigo-500 cursor-pointer"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 291,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ _jsxDEV("div", {
											className: "flex justify-between text-[10px] text-slate-500 mt-0.5",
											children: [
												/* @__PURE__ */ _jsxDEV("span", { children: "12k (Phase de lancement)" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 301,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ _jsxDEV("span", { children: "60k (Rythme de croisière)" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 302,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ _jsxDEV("span", { children: "120k" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 303,
													columnNumber: 21
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 300,
											columnNumber: 19
										}, this)
									] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 284,
										columnNumber: 17
									}, this), /* @__PURE__ */ _jsxDEV("div", { children: [
										/* @__PURE__ */ _jsxDEV("div", {
											className: "flex items-center justify-between text-xs mb-1",
											children: [/* @__PURE__ */ _jsxDEV("span", {
												className: "text-slate-300",
												children: "Multiple de Valorisation :"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 309,
												columnNumber: 21
											}, this), /* @__PURE__ */ _jsxDEV("span", {
												className: "font-mono font-bold text-indigo-300 tabular-nums",
												children: [multipleMultiplier.toFixed(1), "x ARR"]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 310,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 308,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ _jsxDEV("input", {
											type: "range",
											min: 2.5,
											max: 6.5,
											step: .1,
											value: multipleMultiplier,
											onChange: (e) => setMultipleMultiplier(Number(e.target.value)),
											className: "w-full accent-indigo-500 cursor-pointer"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 314,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ _jsxDEV("div", {
											className: "flex justify-between text-[10px] text-slate-500 mt-0.5",
											children: [
												/* @__PURE__ */ _jsxDEV("span", { children: "2.5x (Vente rapide)" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 324,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ _jsxDEV("span", { children: "4.5x (Médiane Acquire)" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 325,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ _jsxDEV("span", { children: "6.5x (Premium)" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 326,
													columnNumber: 21
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 323,
											columnNumber: 19
										}, this)
									] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 307,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 283,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "bg-slate-950/70 rounded-xl p-3.5 border border-slate-800 space-y-2 text-xs",
									children: [
										/* @__PURE__ */ _jsxDEV("div", {
											className: "flex justify-between text-slate-300",
											children: [/* @__PURE__ */ _jsxDEV("span", { children: "Marge Brute :" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 334,
												columnNumber: 19
											}, this), /* @__PURE__ */ _jsxDEV("span", {
												className: "font-bold text-emerald-400 font-mono",
												children: [activeListing.financialModel.grossMarginPercent, "%"]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 335,
												columnNumber: 19
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 333,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ _jsxDEV("div", {
											className: "flex justify-between text-slate-300",
											children: [/* @__PURE__ */ _jsxDEV("span", { children: "Coût d'infrastructure mensuel :" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 338,
												columnNumber: 19
											}, this), /* @__PURE__ */ _jsxDEV("span", {
												className: "font-bold text-slate-200 font-mono",
												children: "~42 € / mois"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 339,
												columnNumber: 19
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 337,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ _jsxDEV("div", {
											className: "flex justify-between text-slate-300",
											children: [/* @__PURE__ */ _jsxDEV("span", { children: "Séquestre des fonds (Escrow) :" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 342,
												columnNumber: 19
											}, this), /* @__PURE__ */ _jsxDEV("span", {
												className: "font-bold text-indigo-400",
												children: "100% Garanti"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 343,
												columnNumber: 19
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 341,
											columnNumber: 17
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 332,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 259,
							columnNumber: 13
						}, this), /* @__PURE__ */ _jsxDEV("div", {
							className: "bg-slate-50 rounded-2xl border border-slate-200 p-6",
							children: [/* @__PURE__ */ _jsxDEV("h4", {
								className: "text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-1.5",
								children: [/* @__PURE__ */ _jsxDEV(Briefcase, { className: "w-4 h-4 text-indigo-600" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 351,
									columnNumber: 17
								}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Inventaire des Actifs Cédés" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 352,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 350,
								columnNumber: 15
							}, this), /* @__PURE__ */ _jsxDEV("ul", {
								className: "space-y-2 text-xs text-slate-700",
								children: activeListing.assetsIncluded.map((asset, idx) => /* @__PURE__ */ _jsxDEV("li", {
									className: "flex items-start gap-2",
									children: [/* @__PURE__ */ _jsxDEV(Check, { className: "w-4 h-4 text-emerald-600 shrink-0 mt-0.5" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 357,
										columnNumber: 21
									}, this), /* @__PURE__ */ _jsxDEV("span", { children: asset }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 358,
										columnNumber: 21
									}, this)]
								}, idx, true, {
									fileName: _jsxFileName,
									lineNumber: 356,
									columnNumber: 19
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 354,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 349,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 257,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 158,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "bg-white rounded-2xl border border-slate-200 p-6 lg:p-8 shadow-xs",
					children: [/* @__PURE__ */ _jsxDEV("div", {
						className: "flex items-center justify-between mb-6 pb-4 border-b border-slate-100",
						children: [/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("h3", {
							className: "text-base font-bold text-slate-900 flex items-center gap-2",
							children: [/* @__PURE__ */ _jsxDEV(ShieldCheck, { className: "w-5 h-5 text-emerald-600" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 371,
								columnNumber: 17
							}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Rapport de Due Diligence & Audit Technique" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 372,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 370,
							columnNumber: 15
						}, this), /* @__PURE__ */ _jsxDEV("p", {
							className: "text-xs text-slate-500 mt-1",
							children: "Les éléments que les acheteurs institutionnels et vérificateurs d’Acquire.com analysent avant de faire une offre"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 374,
							columnNumber: 15
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 369,
							columnNumber: 13
						}, this), /* @__PURE__ */ _jsxDEV("span", {
							className: "text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100",
							children: "Audit Prêt pour Cession"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 378,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 368,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV("div", {
						className: "overflow-x-auto",
						children: /* @__PURE__ */ _jsxDEV("table", {
							className: "w-full text-left text-xs border-collapse",
							children: [/* @__PURE__ */ _jsxDEV("thead", { children: /* @__PURE__ */ _jsxDEV("tr", {
								className: "border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider text-[11px]",
								children: [
									/* @__PURE__ */ _jsxDEV("th", {
										className: "py-3 px-4",
										children: "Catégorie"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 387,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ _jsxDEV("th", {
										className: "py-3 px-4",
										children: "Élément Audité"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 388,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ _jsxDEV("th", {
										className: "py-3 px-4",
										children: "Statut"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 389,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ _jsxDEV("th", {
										className: "py-3 px-4",
										children: "Détails pour l'Acquéreur"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 390,
										columnNumber: 19
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 386,
								columnNumber: 17
							}, this) }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 385,
								columnNumber: 15
							}, this), /* @__PURE__ */ _jsxDEV("tbody", {
								className: "divide-y divide-slate-100",
								children: DUE_DILIGENCE_ITEMS.map((item) => /* @__PURE__ */ _jsxDEV("tr", {
									className: "hover:bg-slate-50/70 transition-colors",
									children: [
										/* @__PURE__ */ _jsxDEV("td", {
											className: "py-3.5 px-4 font-semibold text-slate-900 whitespace-nowrap",
											children: item.category
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 396,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ _jsxDEV("td", {
											className: "py-3.5 px-4 text-slate-800 font-medium whitespace-nowrap",
											children: item.title
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 399,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ _jsxDEV("td", {
											className: "py-3.5 px-4 whitespace-nowrap",
											children: /* @__PURE__ */ _jsxDEV("span", {
												className: "inline-flex items-center gap-1 font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded text-[11px] border border-emerald-100",
												children: [/* @__PURE__ */ _jsxDEV(Check, { className: "w-3 h-3" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 404,
													columnNumber: 25
												}, this), /* @__PURE__ */ _jsxDEV("span", { children: item.status }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 405,
													columnNumber: 25
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 403,
												columnNumber: 23
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 402,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ _jsxDEV("td", {
											className: "py-3.5 px-4 text-slate-600 leading-relaxed",
											children: item.notes
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 408,
											columnNumber: 21
										}, this)
									]
								}, item.id, true, {
									fileName: _jsxFileName,
									lineNumber: 395,
									columnNumber: 19
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 393,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 384,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 383,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 367,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 91,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 90,
		columnNumber: 5
	}, this);
};

//# sourceMappingURL=data:application/json;base64,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QUFZO1NBQTRCOzs7OztRQUNwRDs7Ozs7Z0JBQ0M7Ozs7aUJBQ1Asd0JBQUMsU0FBRDtRQUFPLFdBQVU7a0JBQ2Qsb0JBQW9CLEtBQUssU0FDeEIsd0JBQUMsTUFBRDtTQUFrQixXQUFVO21CQUE1QjtVQUNFLHdCQUFDLE1BQUQ7V0FBSSxXQUFVO3FCQUNYLEtBQUs7VUFDSjs7Ozs7VUFDSix3QkFBQyxNQUFEO1dBQUksV0FBVTtxQkFDWCxLQUFLO1VBQ0o7Ozs7O1VBQ0osd0JBQUMsTUFBRDtXQUFJLFdBQVU7cUJBQ1osd0JBQUMsUUFBRDtZQUFNLFdBQVU7c0JBQWhCLENBQ0Usd0JBQUMsT0FBRCxFQUFPLFdBQVUsVUFBVzs7OztzQkFDNUIsd0JBQUMsUUFBRCxZQUFPLEtBQUssT0FBYTs7OztvQkFDckI7Ozs7OztVQUNKOzs7OztVQUNKLHdCQUFDLE1BQUQ7V0FBSSxXQUFVO3FCQUNYLEtBQUs7VUFDSjs7Ozs7U0FDRjtXQWhCSyxLQUFLOzs7O2VBZ0JWLENBQ0w7T0FDSTs7OztlQUNGOzs7Ozs7S0FDSjs7OzthQUNGOzs7Ozs7R0FDRjs7Ozs7O0NBQ0U7Ozs7O0FBRWIiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiTGlzdGluZ0h1Yi50c3giXSwidmVyc2lvbiI6Mywic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTUFSS0VUUExBQ0VfTElTVElOR1MsIERVRV9ESUxJR0VOQ0VfSVRFTVMgfSBmcm9tICcuLi9kYXRhL2xpc3RpbmdEYXRhJztcbmltcG9ydCB7IE1hcmtldHBsYWNlTGlzdGluZyB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IFxuICBCdWlsZGluZzIsIFxuICBFeHRlcm5hbExpbmssIFxuICBDb3B5LCBcbiAgQ2hlY2ssIFxuICBEb3dubG9hZCwgXG4gIFRyZW5kaW5nVXAsIFxuICBTaGllbGRDaGVjaywgXG4gIEZpbGVUZXh0LCBcbiAgRG9sbGFyU2lnbiwgXG4gIENvaW5zLCBcbiAgQXJyb3dSaWdodCwgXG4gIENoZWNrQ2lyY2xlMiwgXG4gIEhlbHBDaXJjbGUsXG4gIEJyaWVmY2FzZVxufSBmcm9tICdsdWNpZGUtcmVhY3QnO1xuXG5leHBvcnQgY29uc3QgTGlzdGluZ0h1YjogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFtzZWxlY3RlZFBsYXRmb3JtSWQsIHNldFNlbGVjdGVkUGxhdGZvcm1JZF0gPSB1c2VTdGF0ZTwnYWNxdWlyZScgfCAnZmxpcHBhJyB8ICd0cnVzdGVyJz4oJ2FjcXVpcmUnKTtcbiAgY29uc3QgW2NvcGllZFBpdGNoLCBzZXRDb3BpZWRQaXRjaF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtjb3BpZWRUZWFzZXIsIHNldENvcGllZFRlYXNlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgLy8gVmFsdWF0aW9uIHNpbXVsYXRpb24gc2xpZGVyc1xuICBjb25zdCBbY3VzdG9tQXJyLCBzZXRDdXN0b21BcnJdID0gdXNlU3RhdGU8bnVtYmVyPigzNjAwMCk7XG4gIGNvbnN0IFttdWx0aXBsZU11bHRpcGxpZXIsIHNldE11bHRpcGxlTXVsdGlwbGllcl0gPSB1c2VTdGF0ZTxudW1iZXI+KDQuNSk7XG5cbiAgY29uc3QgYWN0aXZlTGlzdGluZzogTWFya2V0cGxhY2VMaXN0aW5nID0gTUFSS0VUUExBQ0VfTElTVElOR1MuZmluZCgobCkgPT4gbC5wbGF0Zm9ybUlkID09PSBzZWxlY3RlZFBsYXRmb3JtSWQpIHx8IE1BUktFVFBMQUNFX0xJU1RJTkdTWzBdO1xuXG4gIC8vIENhbGN1bGF0ZWQgZHluYW1pYyB2YWx1YXRpb25cbiAgY29uc3QgZHluYW1pY1ZhbHVhdGlvbiA9IE1hdGgucm91bmQoY3VzdG9tQXJyICogbXVsdGlwbGVNdWx0aXBsaWVyKTtcbiAgY29uc3QgcGxhdGZvcm1GZWVSYXRlID0gc2VsZWN0ZWRQbGF0Zm9ybUlkID09PSAnYWNxdWlyZScgPyAwLjA1IDogc2VsZWN0ZWRQbGF0Zm9ybUlkID09PSAnZmxpcHBhJyA/IDAuMDggOiAwLjA2O1xuICBjb25zdCBuZXRTZWxsZXJQcm9jZWVkcyA9IE1hdGgucm91bmQoZHluYW1pY1ZhbHVhdGlvbiAqICgxIC0gcGxhdGZvcm1GZWVSYXRlKSk7XG5cbiAgY29uc3QgaGFuZGxlQ29weVBpdGNoID0gKCkgPT4ge1xuICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGFjdGl2ZUxpc3RpbmcuZnVsbFBpdGNoKTtcbiAgICBzZXRDb3BpZWRQaXRjaCh0cnVlKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHNldENvcGllZFBpdGNoKGZhbHNlKSwgMjAwMCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ29weVRlYXNlciA9ICgpID0+IHtcbiAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChhY3RpdmVMaXN0aW5nLnNob3J0VGVhc2VyKTtcbiAgICBzZXRDb3BpZWRUZWFzZXIodHJ1ZSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiBzZXRDb3BpZWRUZWFzZXIoZmFsc2UpLCAyMDAwKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVEb3dubG9hZENpbSA9ICgpID0+IHtcbiAgICBjb25zdCBjaW1UZXh0ID0gYCMgRE9TU0lFUiBERSBQUsOJU0VOVEFUSU9OIENPTkZJREVOVElFTCAoQ0lNKVxuUFJPSkVUIDogJHthY3RpdmVMaXN0aW5nLmxpc3RpbmdUaXRsZX1cblBMQVRFRk9STUUgQ0lCTEUgOiAke2FjdGl2ZUxpc3RpbmcucGxhdGZvcm1OYW1lfVxuVkFMT1JJU0FUSU9OIFJFQ09NTUFORMOJRSA6ICR7YWN0aXZlTGlzdGluZy5yZWNvbW1lbmRlZFByaWNlLnRvTG9jYWxlU3RyaW5nKCdmci1GUicpfSAke2FjdGl2ZUxpc3RpbmcuY3VycmVuY3l9XG5cbiMjIDEuIFLDiVNVTcOJIEVYw4lDVVRJRiAoRVhFQ1VUSVZFIFNVTU1BUlkpXG4ke2FjdGl2ZUxpc3Rpbmcuc2hvcnRUZWFzZXJ9XG5cbiMjIDIuIE1PRMOITEUgw4lDT05PTUlRVUUgJiBGSU5BTkNFU1xuLSBNdWx0aXBsZSB2aXPDqSA6ICR7YWN0aXZlTGlzdGluZy5tdWx0aXBsZU1ldHJpY31cbi0gTW9kw6hsZSBkZSByZXZlbnVzIDogU2FhUyByw6ljdXJyZW50IEIyQiBvdSBGb3JmYWl0cyBkZSBkw6lwbG9pZW1lbnQgQWdlbmNlICgyIDUwMCDigqwgc2V0dXAgKyAzOTAg4oKsL21vaXMpXG4tIE1hcmdlIGJydXRlIGVzdGltw6llIDogJHthY3RpdmVMaXN0aW5nLmZpbmFuY2lhbE1vZGVsLmdyb3NzTWFyZ2luUGVyY2VudH0lXG4tIFRhdXggZGUgcsOpdGVudGlvbiA6IENodXJuIGVzdGltw6kgJHthY3RpdmVMaXN0aW5nLmZpbmFuY2lhbE1vZGVsLmNodXJuUmF0ZX1cblxuIyMgMy4gQUNUSUZTIEPDiUTDiVMgTE9SUyBERSBMQSBWRU5URVxuJHthY3RpdmVMaXN0aW5nLmFzc2V0c0luY2x1ZGVkLm1hcCgoYSkgPT4gYC0gJHthfWApLmpvaW4oJ1xcbicpfVxuXG4jIyA0LiBERVNDUklQVElPTiBDT01QTMOIVEUgRFUgUFJPRFVJVFxuJHthY3RpdmVMaXN0aW5nLmZ1bGxQaXRjaH1cblxuIyMgNS4gT1BQT1JUVU5JVMOJUyBERSBDUk9JU1NBTkNFIFBPU1QtQUNRVUlTSVRJT05cbiR7YWN0aXZlTGlzdGluZy5ncm93dGhPcHBvcnR1bml0aWVzLm1hcCgoZykgPT4gYC0gJHtnfWApLmpvaW4oJ1xcbicpfVxuXG4jIyA2LiBDT05ESVRJT05TIERFIFRSQU5TSVRJT05cbi0gMzAgam91cnMgZOKAmWFjY29tcGFnbmVtZW50IHRlY2huaXF1ZSBldCBvcMOpcmF0aW9ubmVsIGluY2x1cy5cbi0gQ2Vzc2lvbiBwbGVpbmUgZXQgZW50acOocmUgZGUgbGEgcHJvcHJpw6l0w6kgaW50ZWxsZWN0dWVsbGUuXG5gO1xuXG4gICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtjaW1UZXh0XSwgeyB0eXBlOiAndGV4dC9tYXJrZG93bjtjaGFyc2V0PXV0Zi04JyB9KTtcbiAgICBjb25zdCB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgYS5ocmVmID0gdXJsO1xuICAgIGEuZG93bmxvYWQgPSBgZG9zc2llcl9jZXNzaW9uX2NpbV8ke2FjdGl2ZUxpc3RpbmcucGxhdGZvcm1JZH0ubWRgO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYSk7XG4gICAgYS5jbGljaygpO1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoYSk7XG4gICAgVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gaWQ9XCJsaXN0aW5nLWh1YlwiIGNsYXNzTmFtZT1cInB5LTE2IGJnLXdoaXRlIGJvcmRlci1iIGJvcmRlci1zbGF0ZS0yMDBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctN3hsIG14LWF1dG8gcHgtNlwiPlxuICAgICAgICB7LyogU2VjdGlvbiBIZWFkZXIgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBtZDppdGVtcy1lbmQganVzdGlmeS1iZXR3ZWVuIGdhcC02IG1iLTEyXCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LXNlbWlib2xkIHVwcGVyY2FzZSB0cmFja2luZy13aWRlciB0ZXh0LWVtZXJhbGQtNzAwIG1iLTJcIj5cbiAgICAgICAgICAgICAgQ2Vzc2lvbiAmIE1vbsOpdGlzYXRpb24gZGUgUHJvamV0XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBzbTp0ZXh0LTN4bCBmb250LWJvbGQgdHJhY2tpbmctdGlnaHQgdGV4dC1zbGF0ZS05MDAgdGV4dC1iYWxhbmNlXCI+XG4gICAgICAgICAgICAgIEh1YiBkZSBWZW50ZSAmIEZpY2hlcyBkZSBMaXN0aW5nIE0mQVxuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gc206dGV4dC1iYXNlIHRleHQtc2xhdGUtNjAwIG10LTIgbWF4LXctMnhsIGxlYWRpbmctcmVsYXhlZFwiPlxuICAgICAgICAgICAgICBNZXR0ZXogY2UgcHJvamV0IGVuIHZlbnRlIGltbcOpZGlhdGVtZW50IHN1ciBsZXMgcGxhdGVmb3JtZXMgZGUgcsOpZsOpcmVuY2UgKDxzdHJvbmcgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LXNsYXRlLTgwMFwiPkFjcXVpcmUuY29tPC9zdHJvbmc+LCA8c3Ryb25nIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1zbGF0ZS04MDBcIj5GbGlwcGE8L3N0cm9uZz4sIDxzdHJvbmcgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LXNsYXRlLTgwMFwiPlRydXN0ZXIgLyBEb3RNYXJrZXQ8L3N0cm9uZz4pIGdyw6JjZSBhdXggZmljaGVzIGRlc2NyaXB0aXZlcywgZG9zc2llcnMgZGUgdmFsb3Jpc2F0aW9uIGV0IHRlbXBsYXRlcyBwcsOqdHMgw6Agc291bWV0dHJlLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIFF1aWNrIEFjdGlvbiB0byBEb3dubG9hZCBEb3NzaWVyICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTMgc2hyaW5rLTBcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRG93bmxvYWRDaW19XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHB4LTQgcHktMi41IHRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlIGJnLXNsYXRlLTkwMCBob3ZlcjpiZy1zbGF0ZS04MDAgcm91bmRlZC1sZyB0cmFuc2l0aW9uLWNvbG9ycyBzaGFkb3cteHMgY3Vyc29yLXBvaW50ZXIgd2hpdGVzcGFjZS1ub3dyYXBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8RG93bmxvYWQgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG4gICAgICAgICAgICAgIDxzcGFuPkV4cG9ydGVyIGxlIERvc3NpZXIgQ0lNIChNYXJrZG93bik8L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIDMgTWFya2V0cGxhY2UgVGFicyAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0zIGdhcC00IG1iLThcIj5cbiAgICAgICAgICB7TUFSS0VUUExBQ0VfTElTVElOR1MubWFwKChsaXN0aW5nKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpc1NlbGVjdGVkID0gbGlzdGluZy5wbGF0Zm9ybUlkID09PSBzZWxlY3RlZFBsYXRmb3JtSWQ7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAga2V5PXtsaXN0aW5nLnBsYXRmb3JtSWR9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRQbGF0Zm9ybUlkKGxpc3RpbmcucGxhdGZvcm1JZCl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcC01IHJvdW5kZWQtMnhsIGJvcmRlciB0cmFuc2l0aW9uLWFsbCBjdXJzb3ItcG9pbnRlciByZWxhdGl2ZSBiZy13aGl0ZSAke1xuICAgICAgICAgICAgICAgICAgaXNTZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICA/ICdib3JkZXItaW5kaWdvLTYwMCByaW5nLTIgcmluZy1pbmRpZ28tNjAwLzEwIHNoYWRvdy1tZCdcbiAgICAgICAgICAgICAgICAgICAgOiAnYm9yZGVyLXNsYXRlLTIwMCBob3Zlcjpib3JkZXItc2xhdGUtMzAwIGhvdmVyOnNoYWRvdy14cydcbiAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG1iLTNcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ib2xkIHRleHQtc2xhdGUtOTAwXCI+XG4gICAgICAgICAgICAgICAgICAgIHtsaXN0aW5nLnBsYXRmb3JtTmFtZX1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1tb25vIGZvbnQtYm9sZCB0ZXh0LWVtZXJhbGQtNjAwIGJnLWVtZXJhbGQtNTAgcHgtMiBweS0wLjUgcm91bmRlZCBib3JkZXIgYm9yZGVyLWVtZXJhbGQtMTAwXCI+XG4gICAgICAgICAgICAgICAgICAgIHtsaXN0aW5nLnJlY29tbWVuZGVkUHJpY2UudG9Mb2NhbGVTdHJpbmcoJ2ZyLUZSJyl9IHtsaXN0aW5nLmN1cnJlbmN5fVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXNsYXRlLTYwMCBsaW5lLWNsYW1wLTIgbWItNCBsZWFkaW5nLXJlbGF4ZWRcIj5cbiAgICAgICAgICAgICAgICAgIHtsaXN0aW5nLnNob3J0VGVhc2VyfVxuICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHRleHQteHMgdGV4dC1zbGF0ZS01MDAgcHQtMyBib3JkZXItdCBib3JkZXItc2xhdGUtMTAwXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LW1lZGl1bVwiPntsaXN0aW5nLmNhdGVnb3J5fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtaW5kaWdvLTYwMCBmb250LXNlbWlib2xkIGZsZXggaXRlbXMtY2VudGVyIGdhcC0xXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntpc1NlbGVjdGVkID8gJ1PDqWxlY3Rpb25uw6knIDogJ1ZvaXIgbGUga2l0J308L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxBcnJvd1JpZ2h0IGNsYXNzTmFtZT1cInctMyBoLTNcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBTZWxlY3RlZCBNYXJrZXRwbGFjZSBNYWluIFdvcmtzcGFjZSAoVHdvIENvbHVtbnMpICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbGc6Z3JpZC1jb2xzLTEyIGdhcC04IGl0ZW1zLXN0YXJ0IG1iLTEyXCI+XG4gICAgICAgICAgey8qIExlZnQgQ29sdW1uOiBSZWFkeS10by1jb3B5IExpc3RpbmcgVGV4dCAoNyBjb2xzKSAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmNvbC1zcGFuLTcgYmctc2xhdGUtNTAgcm91bmRlZC0yeGwgYm9yZGVyIGJvcmRlci1zbGF0ZS0yMDAgcC02IGxnOnAtOCBzaGFkb3cteHNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzbTpmbGV4LXJvdyBzbTppdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGdhcC0zIG1iLTYgcGItNCBib3JkZXItYiBib3JkZXItc2xhdGUtMjAwXCI+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiB0ZXh0LXhzIHRleHQtc2xhdGUtNTAwIG1iLTFcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPlBsYXRlZm9ybWUgOiA8c3Ryb25nIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtODAwXCI+e2FjdGl2ZUxpc3RpbmcucGxhdGZvcm1OYW1lfTwvc3Ryb25nPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPsK3PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+TXVsdGlwbGUgOiB7YWN0aXZlTGlzdGluZy5tdWx0aXBsZU1ldHJpY308L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtYmFzZSBzbTp0ZXh0LWxnIGZvbnQtYm9sZCB0ZXh0LXNsYXRlLTkwMFwiPlxuICAgICAgICAgICAgICAgICAgRmljaGUgZGUgTGlzdGluZyBPcHRpbWlzw6llIHBvdXIge2FjdGl2ZUxpc3RpbmcucGxhdGZvcm1OYW1lfVxuICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgaHJlZj17YWN0aXZlTGlzdGluZy5wbGF0Zm9ybVVybH1cbiAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xLjUgcHgtMyBweS0xLjUgdGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtaW5kaWdvLTcwMCBiZy1pbmRpZ28tNTAgaG92ZXI6YmctaW5kaWdvLTEwMCByb3VuZGVkLWxnIHRyYW5zaXRpb24tY29sb3JzIGJvcmRlciBib3JkZXItaW5kaWdvLTEwMCB3aGl0ZXNwYWNlLW5vd3JhcFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+Q3LDqWVyIGxlIGxpc3Rpbmcgc3VyIHthY3RpdmVMaXN0aW5nLnBsYXRmb3JtTmFtZS5zcGxpdCgnICcpWzBdfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxFeHRlcm5hbExpbmsgY2xhc3NOYW1lPVwidy0zLjUgaC0zLjVcIiAvPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgey8qIExpc3RpbmcgVGl0bGUgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTVcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQteHMgZm9udC1zZW1pYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgdGV4dC1zbGF0ZS01MDAgbWItMS41XCI+XG4gICAgICAgICAgICAgICAgVGl0cmUgZGUgbOKAmUFubm9uY2UgKExpc3RpbmcgVGl0bGUpXG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zIGJnLXdoaXRlIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS0yMDAgdGV4dC14cyBzbTp0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1zbGF0ZS05MDBcIj5cbiAgICAgICAgICAgICAgICB7YWN0aXZlTGlzdGluZy5saXN0aW5nVGl0bGV9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsvKiBTaG9ydCBUZWFzZXIgd2l0aCBDb3B5IGJ1dHRvbiAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBtYi0xLjVcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LXNlbWlib2xkIHVwcGVyY2FzZSB0cmFja2luZy13aWRlciB0ZXh0LXNsYXRlLTUwMFwiPlxuICAgICAgICAgICAgICAgICAgVGVhc2VyIC8gQWNjcm9jaGUgKFNob3J0IERlc2NyaXB0aW9uKVxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ29weVRlYXNlcn1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xIHRleHQtWzExcHhdIGZvbnQtbWVkaXVtIHRleHQtc2xhdGUtNjAwIGhvdmVyOnRleHQtaW5kaWdvLTYwMFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2NvcGllZFRlYXNlciA/IDxDaGVjayBjbGFzc05hbWU9XCJ3LTMgaC0zIHRleHQtZW1lcmFsZC02MDBcIiAvPiA6IDxDb3B5IGNsYXNzTmFtZT1cInctMyBoLTNcIiAvPn1cbiAgICAgICAgICAgICAgICAgIDxzcGFuPntjb3BpZWRUZWFzZXIgPyAnQ29wacOpICEnIDogJ0NvcGllciBs4oCZYWNjcm9jaGUnfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zIGJnLXdoaXRlIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS0yMDAgdGV4dC14cyB0ZXh0LXNsYXRlLTcwMCBsZWFkaW5nLXJlbGF4ZWRcIj5cbiAgICAgICAgICAgICAgICB7YWN0aXZlTGlzdGluZy5zaG9ydFRlYXNlcn1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgey8qIEZ1bGwgUGl0Y2ggRGVzY3JpcHRpb24gd2l0aCBDb3B5IGJ1dHRvbiAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNlwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBtYi0xLjVcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LXNlbWlib2xkIHVwcGVyY2FzZSB0cmFja2luZy13aWRlciB0ZXh0LXNsYXRlLTUwMFwiPlxuICAgICAgICAgICAgICAgICAgVGV4dGUgZGUgUHLDqXNlbnRhdGlvbiBDb21wbGV0IChQaXRjaCBEZWNrICYgRkFRKVxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ29weVBpdGNofVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEuNSBweC0yLjUgcHktMSB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1zbGF0ZS03MDAgYmctd2hpdGUgYm9yZGVyIGJvcmRlci1zbGF0ZS0yMDAgcm91bmRlZC1tZCBob3ZlcjpiZy1zbGF0ZS0xMDAgc2hhZG93LTJ4c1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2NvcGllZFBpdGNoID8gPENoZWNrIGNsYXNzTmFtZT1cInctMy41IGgtMy41IHRleHQtZW1lcmFsZC02MDBcIiAvPiA6IDxDb3B5IGNsYXNzTmFtZT1cInctMy41IGgtMy41XCIgLz59XG4gICAgICAgICAgICAgICAgICA8c3Bhbj57Y29waWVkUGl0Y2ggPyAnVGV4dGUgQ29wacOpICEnIDogJ0NvcGllciB0b3V0IGxlIHBpdGNoJ308L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8cHJlIGNsYXNzTmFtZT1cInAtNCBiZy13aGl0ZSByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItc2xhdGUtMjAwIHRleHQteHMgdGV4dC1zbGF0ZS03MDAgd2hpdGVzcGFjZS1wcmUtd3JhcCBmb250LXNhbnMgbGVhZGluZy1yZWxheGVkIG1heC1oLVszMjBweF0gb3ZlcmZsb3cteS1hdXRvXCI+XG4gICAgICAgICAgICAgICAge2FjdGl2ZUxpc3RpbmcuZnVsbFBpdGNofVxuICAgICAgICAgICAgICA8L3ByZT5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogQ2hlY2tsaXN0IHRvIHB1Ymxpc2ggb24gdGhpcyBwbGF0Zm9ybSAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNCBib3JkZXItdCBib3JkZXItc2xhdGUtMjAwXCI+XG4gICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgdGV4dC1zbGF0ZS05MDAgbWItM1wiPlxuICAgICAgICAgICAgICAgIMOJdGFwZXMgZGUgUHVibGljYXRpb24gc3VyIHthY3RpdmVMaXN0aW5nLnBsYXRmb3JtTmFtZX1cbiAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTJcIj5cbiAgICAgICAgICAgICAgICB7YWN0aXZlTGlzdGluZy5jaGVja2xpc3RTdGVwcy5tYXAoKHN0ZXAsIGlkeCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBrZXk9e2lkeH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1zdGFydCBnYXAtMi41IHAtMi41IGJnLXdoaXRlIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS0yMDAgdGV4dC14c1wiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxDaGVja0NpcmNsZTIgY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LWVtZXJhbGQtNjAwIHNocmluay0wIG10LTAuNVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtc2xhdGUtOTAwXCI+e3N0ZXAuc3RlcH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNTAwIHRleHQtWzExcHhdXCI+e3N0ZXAuZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogUmlnaHQgQ29sdW1uOiBEeW5hbWljIFZhbHVhdGlvbiAmIE0mQSBNdWx0aXBsZXMgKDUgY29scykgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzpjb2wtc3Bhbi01IHNwYWNlLXktNlwiPlxuICAgICAgICAgICAgey8qIFZhbHVhdGlvbiBTaW11bGF0b3IgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXNsYXRlLTkwMCByb3VuZGVkLTJ4bCB0ZXh0LXdoaXRlIHAtNiBzbTpwLTcgYm9yZGVyIGJvcmRlci1zbGF0ZS04MDAgc2hhZG93LWxnXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHBiLTMgYm9yZGVyLWIgYm9yZGVyLXNsYXRlLTgwMCBtYi01XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyBmb250LW1vbm8gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIHRleHQtaW5kaWdvLTQwMCBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgICAgICAgICBTaW11bGF0ZXVyIGRlIFByaXggZGUgQ2Vzc2lvblxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZW1lcmFsZC00MDAgZm9udC1tb25vIGZvbnQtYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgTWFyY2jDqSBNJkEgMjAyNlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgey8qIFByaWNlIERpc3BsYXkgKi99XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14cyB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgdGV4dC1zbGF0ZS00MDAgbWItMVwiPlxuICAgICAgICAgICAgICAgICAgUHJpeCBEZW1hbmTDqSBFc3RpbcOpIChBc2tpbmcgUHJpY2UpXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBzbTp0ZXh0LTR4bCBmb250LWJvbGQgZm9udC1tb25vIHRleHQtd2hpdGUgdGFidWxhci1udW1zXCI+XG4gICAgICAgICAgICAgICAgICB7ZHluYW1pY1ZhbHVhdGlvbi50b0xvY2FsZVN0cmluZygnZnItRlInKX0ge2FjdGl2ZUxpc3RpbmcuY3VycmVuY3l9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc2xhdGUtNDAwIG10LTEuNVwiPlxuICAgICAgICAgICAgICAgICAgTW9udGFudCBuZXQgdmVuZGV1ciBlc3RpbcOpIDogPHN0cm9uZyBjbGFzc05hbWU9XCJ0ZXh0LWVtZXJhbGQtNDAwIGZvbnQtbW9ubyB0YWJ1bGFyLW51bXNcIj57bmV0U2VsbGVyUHJvY2VlZHMudG9Mb2NhbGVTdHJpbmcoJ2ZyLUZSJyl9IHthY3RpdmVMaXN0aW5nLmN1cnJlbmN5fTwvc3Ryb25nPiAoYXByw6hzIGNvbW1pc3Npb24gcGxhdGVmb3JtZSkuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIHsvKiBTbGlkZXJzICovfVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNCBwdC00IGJvcmRlci10IGJvcmRlci1zbGF0ZS04MDAgbWItNlwiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB0ZXh0LXhzIG1iLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS0zMDBcIj5BUlIgLyBSZXZlbnVzIFByw6l2aXNpb25uZWxzIEFubnVlbHMgOjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tb25vIGZvbnQtYm9sZCB0ZXh0LWluZGlnby0zMDAgdGFidWxhci1udW1zXCI+XG4gICAgICAgICAgICAgICAgICAgICAge2N1c3RvbUFyci50b0xvY2FsZVN0cmluZygnZnItRlInKX0ge2FjdGl2ZUxpc3RpbmcuY3VycmVuY3l9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYW5nZVwiXG4gICAgICAgICAgICAgICAgICAgIG1pbj17MTIwMDB9XG4gICAgICAgICAgICAgICAgICAgIG1heD17MTIwMDAwfVxuICAgICAgICAgICAgICAgICAgICBzdGVwPXszMDAwfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y3VzdG9tQXJyfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEN1c3RvbUFycihOdW1iZXIoZS50YXJnZXQudmFsdWUpKX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGFjY2VudC1pbmRpZ28tNTAwIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIHRleHQtWzEwcHhdIHRleHQtc2xhdGUtNTAwIG10LTAuNVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj4xMmsgKFBoYXNlIGRlIGxhbmNlbWVudCk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPjYwayAoUnl0aG1lIGRlIGNyb2lzacOocmUpPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj4xMjBrPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gdGV4dC14cyBtYi0xXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtMzAwXCI+TXVsdGlwbGUgZGUgVmFsb3Jpc2F0aW9uIDo8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbW9ubyBmb250LWJvbGQgdGV4dC1pbmRpZ28tMzAwIHRhYnVsYXItbnVtc1wiPlxuICAgICAgICAgICAgICAgICAgICAgIHttdWx0aXBsZU11bHRpcGxpZXIudG9GaXhlZCgxKX14IEFSUlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFuZ2VcIlxuICAgICAgICAgICAgICAgICAgICBtaW49ezIuNX1cbiAgICAgICAgICAgICAgICAgICAgbWF4PXs2LjV9XG4gICAgICAgICAgICAgICAgICAgIHN0ZXA9ezAuMX1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e211bHRpcGxlTXVsdGlwbGllcn1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRNdWx0aXBsZU11bHRpcGxpZXIoTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBhY2NlbnQtaW5kaWdvLTUwMCBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiB0ZXh0LVsxMHB4XSB0ZXh0LXNsYXRlLTUwMCBtdC0wLjVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+Mi41eCAoVmVudGUgcmFwaWRlKTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+NC41eCAoTcOpZGlhbmUgQWNxdWlyZSk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPjYuNXggKFByZW1pdW0pPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIHsvKiBGaW5hbmNpYWwgUHJvZmlsZSBDYXJkICovfVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXNsYXRlLTk1MC83MCByb3VuZGVkLXhsIHAtMy41IGJvcmRlciBib3JkZXItc2xhdGUtODAwIHNwYWNlLXktMiB0ZXh0LXhzXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiB0ZXh0LXNsYXRlLTMwMFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+TWFyZ2UgQnJ1dGUgOjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LWVtZXJhbGQtNDAwIGZvbnQtbW9ub1wiPnthY3RpdmVMaXN0aW5nLmZpbmFuY2lhbE1vZGVsLmdyb3NzTWFyZ2luUGVyY2VudH0lPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gdGV4dC1zbGF0ZS0zMDBcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPkNvw7t0IGQnaW5mcmFzdHJ1Y3R1cmUgbWVuc3VlbCA6PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtc2xhdGUtMjAwIGZvbnQtbW9ub1wiPn40MiDigqwgLyBtb2lzPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gdGV4dC1zbGF0ZS0zMDBcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPlPDqXF1ZXN0cmUgZGVzIGZvbmRzIChFc2Nyb3cpIDo8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1pbmRpZ28tNDAwXCI+MTAwJSBHYXJhbnRpPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogQXNzZXRzIEluY2x1ZGVkIENhcmQgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXNsYXRlLTUwIHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItc2xhdGUtMjAwIHAtNlwiPlxuICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LWJvbGQgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIHRleHQtc2xhdGUtOTAwIG1iLTMgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEuNVwiPlxuICAgICAgICAgICAgICAgIDxCcmllZmNhc2UgY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LWluZGlnby02MDBcIiAvPlxuICAgICAgICAgICAgICAgIDxzcGFuPkludmVudGFpcmUgZGVzIEFjdGlmcyBDw6lkw6lzPC9zcGFuPlxuICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3BhY2UteS0yIHRleHQteHMgdGV4dC1zbGF0ZS03MDBcIj5cbiAgICAgICAgICAgICAgICB7YWN0aXZlTGlzdGluZy5hc3NldHNJbmNsdWRlZC5tYXAoKGFzc2V0LCBpZHgpID0+IChcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2lkeH0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1zdGFydCBnYXAtMlwiPlxuICAgICAgICAgICAgICAgICAgICA8Q2hlY2sgY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LWVtZXJhbGQtNjAwIHNocmluay0wIG10LTAuNVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPnthc3NldH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBEdWUgRGlsaWdlbmNlIEF1ZGl0IFRhYmxlIChCb3R0b20gU2VjdGlvbikgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC0yeGwgYm9yZGVyIGJvcmRlci1zbGF0ZS0yMDAgcC02IGxnOnAtOCBzaGFkb3cteHNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBtYi02IHBiLTQgYm9yZGVyLWIgYm9yZGVyLXNsYXRlLTEwMFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtYmFzZSBmb250LWJvbGQgdGV4dC1zbGF0ZS05MDAgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICA8U2hpZWxkQ2hlY2sgY2xhc3NOYW1lPVwidy01IGgtNSB0ZXh0LWVtZXJhbGQtNjAwXCIgLz5cbiAgICAgICAgICAgICAgICA8c3Bhbj5SYXBwb3J0IGRlIER1ZSBEaWxpZ2VuY2UgJiBBdWRpdCBUZWNobmlxdWU8L3NwYW4+XG4gICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zbGF0ZS01MDAgbXQtMVwiPlxuICAgICAgICAgICAgICAgIExlcyDDqWzDqW1lbnRzIHF1ZSBsZXMgYWNoZXRldXJzIGluc3RpdHV0aW9ubmVscyBldCB2w6lyaWZpY2F0ZXVycyBk4oCZQWNxdWlyZS5jb20gYW5hbHlzZW50IGF2YW50IGRlIGZhaXJlIHVuZSBvZmZyZVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LWVtZXJhbGQtNzAwIGJnLWVtZXJhbGQtNTAgcHgtMi41IHB5LTEgcm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLWVtZXJhbGQtMTAwXCI+XG4gICAgICAgICAgICAgIEF1ZGl0IFByw6p0IHBvdXIgQ2Vzc2lvblxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy14LWF1dG9cIj5cbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1sZWZ0IHRleHQteHMgYm9yZGVyLWNvbGxhcHNlXCI+XG4gICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiYm9yZGVyLWIgYm9yZGVyLXNsYXRlLTIwMCB0ZXh0LXNsYXRlLTUwMCBmb250LWJvbGQgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIHRleHQtWzExcHhdXCI+XG4gICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHktMyBweC00XCI+Q2F0w6lnb3JpZTwvdGg+XG4gICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHktMyBweC00XCI+w4lsw6ltZW50IEF1ZGl0w6k8L3RoPlxuICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB5LTMgcHgtNFwiPlN0YXR1dDwvdGg+XG4gICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHktMyBweC00XCI+RMOpdGFpbHMgcG91ciBsJ0FjcXXDqXJldXI8L3RoPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgIDx0Ym9keSBjbGFzc05hbWU9XCJkaXZpZGUteSBkaXZpZGUtc2xhdGUtMTAwXCI+XG4gICAgICAgICAgICAgICAge0RVRV9ESUxJR0VOQ0VfSVRFTVMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8dHIga2V5PXtpdGVtLmlkfSBjbGFzc05hbWU9XCJob3ZlcjpiZy1zbGF0ZS01MC83MCB0cmFuc2l0aW9uLWNvbG9yc1wiPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMy41IHB4LTQgZm9udC1zZW1pYm9sZCB0ZXh0LXNsYXRlLTkwMCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmNhdGVnb3J5fVxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMy41IHB4LTQgdGV4dC1zbGF0ZS04MDAgZm9udC1tZWRpdW0gd2hpdGVzcGFjZS1ub3dyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTMuNSBweC00IHdoaXRlc3BhY2Utbm93cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGdhcC0xIGZvbnQtc2VtaWJvbGQgdGV4dC1lbWVyYWxkLTcwMCBiZy1lbWVyYWxkLTUwIHB4LTIgcHktMC41IHJvdW5kZWQgdGV4dC1bMTFweF0gYm9yZGVyIGJvcmRlci1lbWVyYWxkLTEwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrIGNsYXNzTmFtZT1cInctMyBoLTNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW0uc3RhdHVzfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0zLjUgcHgtNCB0ZXh0LXNsYXRlLTYwMCBsZWFkaW5nLXJlbGF4ZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5ub3Rlc31cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG4iXX0=