# OperatIA PME - Studio d'Agents IA pour Petites Entreprises

Bienvenue dans le code source officiel de **OperatIA PME**, la plateforme d'automatisation par Agents IA (Service client 24/7, Facturation & relances Pennylane/Stripe, Prise de rendez-vous Google Calendar et Suivi des prospects).

## 🚀 Démarrage Rapide sur votre Ordinateur (Mac, Windows, Linux)

### 1. Prérequis
- Node.js version 18 ou supérieure installé ([nodejs.org](https://nodejs.org/)).

### 2. Installation
Ouvrez votre terminal dans le dossier extrait et exécutez :
```bash
npm install
```

### 3. Lancement en Développement
```bash
npm run dev
```
L'application démarre immédiatement sur **http://localhost:3000** !

### 4. Compilation pour Production
```bash
npm run build
```

## 📦 Contenu du Projet
- `src/data/agentsData.ts` : Configurations et prompts des 4 agents clés.
- `src/data/blueprintsData.ts` : Modèles de scénarios Make.com & n8n exportables.
- `src/data/listingData.ts` : Fiches de vente pour Acquire.com, Flippa et Truster.
- `src/components/LiveSimulator.tsx` : Banc d'essai interactif avec simulateur de requêtes.
- `src/components/RoiCalculator.tsx` : Calculateur financier de retour sur investissement.

Conçu pour fonctionner sans dette technique avec Vite, React 19 et Tailwind CSS v4.
