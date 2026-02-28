// File: js/data/stacks.js
window.APP = window.APP || {};
window.APP.STACKS_DATA = {
  "phase1_foundation": {
    "id": "phase1_foundation",
    "name": "Phase 1: Foundation Protocol",
    "peptides": [
      "bpc157",
      "motsc"
    ],
    "primary_goals": [
      "Gut healing (SIBO)",
      "Metabolic priming",
      "Insulin resistance",
      "Foundation for all other protocols"
    ],
    "mechanism": "BPC-157 repairs gut mucosa and modulates gut-brain axis. MOTS-c activates AMPK for metabolic optimization and insulin-independent glucose uptake. This phase addresses root causes before adding complexity",
    "protocol": {
      "bpc157": {
        "dose": "250-500mcg",
        "frequency": "2x daily",
        "administration": "Oral (for SIBO/gut focus)",
        "timing": "Morning and evening, empty stomach",
        "duration": "Weeks 1-4 minimum"
      },
      "motsc": {
        "dose": "5-10mg",
        "frequency": "Weekly",
        "administration": "Subcutaneous",
        "timing": "Once per week",
        "duration": "Ongoing"
      }
    },
    "phase": "Phase 1",
    "duration": "Weeks 1-4",
    "cycling": "BPC-157: 4-8 weeks then assess. MOTS-c: 8-12 weeks on, 4 weeks off",
    "cost_estimate": "$135-220/month",
    "synergy_notes": "Gut healing (BPC-157) is upstream of metabolic issues. MOTS-c provides metabolic support while gut heals",
    "considerations": [
      "Start here before adding other peptides",
      "Oral BPC-157 for direct gut contact",
      "Assess gut symptoms before moving to Phase 2"
    ],
    "ordered": true,
    "stack_status": "All peptides ordered",
    "conversation_tier": "Tier 1 - Foundation"
  },
  "phase2_gh_longevity": {
    "id": "phase2_gh_longevity",
    "name": "Phase 2: GH Axis & Longevity",
    "peptides": [
      "modgrf129",
      "ipamorelin",
      "epitalon",
      "pinealon",
      "semax"
    ],
    "primary_goals": [
      "Visceral fat reduction",
      "GH optimization",
      "Telomere support",
      "Cognitive enhancement",
      "Circadian optimization"
    ],
    "mechanism": "Mod GRF + Ipamorelin create synergistic GH release for visceral fat. Epitalon activates telomerase. Pinealon supports pineal/circadian function. Semax enhances BDNF for cognition",
    "protocol": {
      "modgrf129": {
        "dose": "100-200mcg",
        "frequency": "2-3x daily",
        "timing": "Morning, post-workout, before bed (with Ipamorelin)",
        "administration": "Subcutaneous"
      },
      "ipamorelin": {
        "dose": "100-300mcg",
        "frequency": "2-3x daily",
        "timing": "Same timing as Mod GRF (dose together)",
        "administration": "Subcutaneous"
      },
      "epitalon": {
        "dose": "5-10mg daily",
        "duration": "10-20 days",
        "frequency": "2-3 cycles per year",
        "administration": "Subcutaneous"
      },
      "pinealon": {
        "dose": "10-20mg daily",
        "duration": "10-20 day cycles (coordinate with Epitalon)",
        "administration": "Sublingual",
        "note": "Cycle with Epitalon - both support pineal function"
      },
      "semax": {
        "dose": "300-600mcg",
        "frequency": "1-2x daily",
        "administration": "Intranasal",
        "timing": "Morning for focus"
      }
    },
    "phase": "Phase 2",
    "duration": "Add after 3-4 weeks on Phase 1",
    "cycling": "GH peptides: continuous or 5/2. Bioregulators: cyclic. Semax: 4-6 weeks on, 1-2 weeks off",
    "cost_estimate": "$180-320/month",
    "synergy_notes": "GH stack addresses visceral fat. Bioregulators (Epitalon/Pinealon) work together on circadian/longevity. Semax for cognitive layer",
    "considerations": [
      "Add only after gut is healing (Phase 1)",
      "Dose Mod GRF + Ipamorelin together for synergy",
      "Run Epitalon + Pinealon cycles together",
      "Monitor fasting glucose with GH peptides"
    ],
    "ordered": true,
    "stack_status": "All peptides ordered",
    "conversation_tier": "Tier 1 + Tier 2 - Core Protocol"
  },
  "phase3_option_a_retatrutide": {
    "id": "phase3_option_a_retatrutide",
    "name": "Phase 3 Option A: Metabolic Intensification (Retatrutide)",
    "peptides": [
      "retatrutide"
    ],
    "primary_goals": [
      "Aggressive weight/fat loss",
      "Maximum metabolic impact",
      "Beta cell support",
      "Insulin sensitivity"
    ],
    "mechanism": "Triple agonist (GLP-1/GIP/Glucagon) provides comprehensive metabolic regulation. GLP-1 for appetite/insulin, GIP for adipose remodeling, Glucagon for energy expenditure and hepatic fat oxidation",
    "protocol": {
      "retatrutide": {
        "dose": "Start 1-2mg, titrate to 8-12mg weekly",
        "frequency": "Once weekly",
        "administration": "Subcutaneous",
        "titration": "Increase by 2mg every 4 weeks based on tolerance",
        "timing": "Consistent weekly schedule"
      }
    },
    "phase": "Phase 3 - Optional",
    "duration": "If aggressive metabolic intervention needed",
    "cycling": "Per medical protocol, typically continuous while losing weight",
    "cost_estimate": "$200-350/month",
    "synergy_notes": "Nuclear option for metabolic health. Add only if Phase 1-2 insufficient for visceral fat/insulin goals",
    "considerations": [
      "Requires slow titration",
      "Monitor for GI side effects",
      "Most powerful option for beta cell support",
      "Typically requires medical supervision",
      "Consider if Phases 1-2 don't achieve metabolic goals"
    ],
    "ordered": true,
    "stack_status": "All peptides ordered",
    "conversation_tier": "Phase 3 Option A - Aggressive Metabolic"
  },
  "phase3_option_b_klow": {
    "id": "phase3_option_b_klow",
    "name": "Phase 3 Option B: Enhanced Repair (Klow Blend Alternative)",
    "peptides": [
      "bpc157",
      "tb500",
      "ghkcu",
      "kpv"
    ],
    "primary_goals": [
      "Persistent SIBO/gut inflammation",
      "Systemic tissue repair",
      "Skin/aesthetic benefits",
      "Enhanced anti-inflammatory"
    ],
    "mechanism": "BPC-157 for gut repair, KPV for inflammatory signaling, TB-500 for systemic cell migration, GHK-Cu for collagen/tissue remodeling. Addresses multiple repair pathways simultaneously",
    "protocol": {
      "bpc157": {
        "dose": "250-500mcg",
        "frequency": "2x daily",
        "administration": "Injectable or oral",
        "timing": "Morning and evening"
      },
      "kpv": {
        "dose": "500-1000mcg",
        "frequency": "1-2x daily",
        "administration": "Oral or subcutaneous",
        "timing": "With or separate from BPC-157"
      },
      "tb500": {
        "dose": "2-5mg",
        "frequency": "1-2x weekly",
        "administration": "Subcutaneous or intramuscular",
        "timing": "Flexible"
      },
      "ghkcu": {
        "dose": "1-3mg weekly (injectable) or topical daily",
        "frequency": "Weekly for injectable",
        "administration": "Subcutaneous or topical",
        "timing": "Flexible"
      }
    },
    "phase": "Phase 3 - Optional",
    "duration": "If gut inflammation persists after Phase 1",
    "cycling": "4-8 weeks for acute issues, longer for chronic",
    "cost_estimate": "$180-220/month",
    "synergy_notes": "This is the 'Klow Blend' approach - comprehensive repair stack. Use if gut issues don't fully resolve with BPC-157 alone",
    "considerations": [
      "GHK-Cu provides aesthetic benefits but not essential for gut goals",
      "KPV is the key addition if BPC-157 alone insufficient",
      "TB-500 adds systemic repair layer",
      "More expensive per mg than buying BPC-157 standalone"
    ],
    "ordered": true,
    "stack_status": "All peptides ordered",
    "conversation_tier": "Phase 3 Option B - Persistent Gut Issues"
  },
  "tier1_bang_for_buck": {
    "id": "tier1_bang_for_buck",
    "name": "Tier 1: Best Bang-for-Buck (Core Essentials)",
    "peptides": [
      "bpc157",
      "epitalon"
    ],
    "primary_goals": [
      "SIBO/gut healing",
      "Longevity (telomere support)",
      "Cognitive benefits (via gut-brain axis)",
      "Maximum value for money"
    ],
    "mechanism": "BPC-157 is the clear winner hitting all three original goals (gut, longevity, cognition). Epitalon is best direct longevity play with telomerase activation data",
    "protocol": {
      "bpc157": {
        "dose": "250-500mcg",
        "frequency": "2x daily",
        "administration": "Oral (for gut targeting)",
        "timing": "Morning and evening, empty stomach"
      },
      "epitalon": {
        "dose": "5-10mg daily",
        "duration": "10-20 day cycles",
        "frequency": "2-3 cycles per year",
        "administration": "Subcutaneous"
      }
    },
    "cycling": "BPC-157: 4-8 weeks. Epitalon: 2-3 cycles annually",
    "cost_estimate": "$70-110/month average (Epitalon cyclic)",
    "synergy_notes": "Minimum effective protocol if budget constrained. BPC-157 addresses gut (upstream of many issues). Epitalon for direct longevity intervention",
    "considerations": [
      "Most accessible and affordable",
      "BPC-157 hits all three original goals",
      "Epitalon has best longevity data",
      "Can add other peptides later based on response"
    ],
    "conversation_quote": "BPC-157 \u2014 The Clear Winner. This hits all three of your goals and is the most accessible peptide on the list",
    "ordered": true,
    "stack_status": "All peptides ordered",
    "conversation_tier": "Tier 1 - Highest Impact for Goals"
  },
  "tier2_supporting": {
    "id": "tier2_supporting",
    "name": "Tier 2: Strong Supporting Options",
    "peptides": [
      "pinealon",
      "motsc"
    ],
    "primary_goals": [
      "Cognitive focus",
      "Circadian optimization",
      "Mitochondrial function",
      "Metabolic support"
    ],
    "mechanism": "Pinealon targets CNS tissue and circadian function (relevant to gut motility). MOTS-c addresses mitochondrial dysfunction implicated in aging, cognition, and gut motility",
    "protocol": {
      "pinealon": {
        "dose": "10-20mg daily",
        "duration": "10-20 day cycles",
        "administration": "Sublingual",
        "timing": "Daily during cycle"
      },
      "motsc": {
        "dose": "5-10mg",
        "frequency": "Weekly",
        "administration": "Subcutaneous",
        "timing": "Once per week"
      }
    },
    "cycling": "Pinealon: 10-20 day cycles. MOTS-c: 8-12 weeks on, 4 weeks off",
    "cost_estimate": "$100-180/month",
    "synergy_notes": "Pinealon is easy entry (oral, affordable). MOTS-c compelling for metabolic/mitochondrial layer",
    "considerations": [
      "Pinealon: Less Western research, from Russian bioregulator tradition",
      "MOTS-c: More expensive, less widely available",
      "Both support energy and metabolic health",
      "Add after Tier 1 if goals not fully met"
    ],
    "ordered": true,
    "stack_status": "All peptides ordered",
    "conversation_tier": "Tier 2 - Supporting Options"
  }
};
