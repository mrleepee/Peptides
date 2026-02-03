// File: js/data/dosing.js
window.APP = window.APP || {};
window.APP.DOSING_GUIDES = {
  "bpc157": {
    "peptide_id": "bpc157",
    "name": "BPC-157",
    "vial_sizes": ["5mg"],
    "reconstitution": {
      "bac_water": "2mL",
      "concentration": "2.5mg/mL (2500mcg/mL)",
      "units_per_dose": {
        "250mcg": "0.1mL (10 units)",
        "500mcg": "0.2mL (20 units)"
      }
    },
    "typical_dose_range": "250-500mcg per dose",
    "frequency": "1-2x daily",
    "timing": ["Morning (empty stomach)", "Evening (empty stomach)"],
    "weekly_schedule": "Daily for 4-8 weeks",
    "cycling": "4-8 weeks on, assess and continue or take 2-4 week break",
    "administration_route": "Oral (for gut) or Subcutaneous",
    "synergistic_supplements": [
      {"name": "L-Glutamine", "dose": "5-10g daily", "reason": "Gut lining repair, synergistic with BPC-157 for leaky gut"},
      {"name": "Zinc Carnosine", "dose": "75-150mg daily", "reason": "Additional gut mucosal protection"},
      {"name": "Collagen Peptides", "dose": "10-20g daily", "reason": "Provides building blocks for tissue repair"},
      {"name": "Omega-3 (EPA/DHA)", "dose": "2-3g daily", "reason": "Anti-inflammatory, supports tissue healing"}
    ],
    "vial_lasts": "5-10 doses per vial (5mg total)"
  },
  "motsc": {
    "peptide_id": "motsc",
    "name": "MOTS-c",
    "vial_sizes": ["10mg"],
    "reconstitution": {
      "bac_water": "2mL",
      "concentration": "5mg/mL (5000mcg/mL)",
      "units_per_dose": {
        "5mg": "1mL (100 units)",
        "10mg": "2mL (entire vial)"
      }
    },
    "typical_dose_range": "5-15mg per week",
    "frequency": "1-3x weekly",
    "timing": ["Morning (fasted)", "Pre-workout"],
    "weekly_schedule": "Monday/Thursday OR Monday/Wednesday/Friday",
    "cycling": "8-12 weeks on, 4 weeks off",
    "administration_route": "Subcutaneous",
    "synergistic_supplements": [
      {"name": "DHEA", "dose": "25-50mg daily", "reason": "Enhances insulin sensitivity and metabolic effects"},
      {"name": "Berberine", "dose": "500mg 2-3x daily", "reason": "AMPK activation (same pathway as MOTS-c)"},
      {"name": "Alpha-Lipoic Acid", "dose": "600mg daily", "reason": "Mitochondrial support and insulin sensitivity"},
      {"name": "CoQ10", "dose": "200-400mg daily", "reason": "Mitochondrial energy production"},
      {"name": "Magnesium", "dose": "400mg daily", "reason": "Metabolic function and insulin sensitivity"}
    ],
    "vial_lasts": "1 week at 10mg/week, 2 weeks at 5mg/week"
  },
  "ipamorelin": {
    "peptide_id": "ipamorelin",
    "name": "Ipamorelin",
    "vial_sizes": ["5mg"],
    "reconstitution": {
      "bac_water": "2mL",
      "concentration": "2.5mg/mL (2500mcg/mL)",
      "units_per_dose": {
        "100mcg": "0.04mL (4 units)",
        "200mcg": "0.08mL (8 units)",
        "300mcg": "0.12mL (12 units)"
      }
    },
    "typical_dose_range": "100-300mcg per dose, 2-3x daily",
    "frequency": "2-3x daily (dose with Mod GRF)",
    "timing": ["Morning (fasted)", "Post-workout", "Before bed"],
    "weekly_schedule": "Daily OR 5 days on, 2 days off",
    "cycling": "Continuous or 5 days on/2 off",
    "administration_route": "Subcutaneous",
    "synergistic_supplements": [
      {"name": "Mod GRF 1-29", "dose": "100-200mcg per dose", "reason": "ESSENTIAL - dose together for 3-5x greater GH output"},
      {"name": "GABA", "dose": "3-5g before bed dose", "reason": "Enhances GH release"},
      {"name": "L-Arginine", "dose": "5-10g daily", "reason": "Supports GH secretion"},
      {"name": "Zinc", "dose": "30mg daily", "reason": "Required for GH synthesis"}
    ],
    "vial_lasts": "~17 doses at 300mcg (6-day supply at 3x daily)"
  },
  "modgrf129": {
    "peptide_id": "modgrf129",
    "name": "Mod GRF 1-29",
    "vial_sizes": ["5mg"],
    "reconstitution": {
      "bac_water": "2mL",
      "concentration": "2.5mg/mL (2500mcg/mL)",
      "units_per_dose": {
        "100mcg": "0.04mL (4 units)",
        "200mcg": "0.08mL (8 units)"
      }
    },
    "typical_dose_range": "100-200mcg per dose, 2-3x daily",
    "frequency": "2-3x daily (dose with Ipamorelin)",
    "timing": ["Morning (fasted)", "Post-workout", "Before bed"],
    "weekly_schedule": "Daily OR 5 days on, 2 days off",
    "cycling": "Continuous or 5 days on/2 off",
    "administration_route": "Subcutaneous",
    "synergistic_supplements": [
      {"name": "Ipamorelin", "dose": "100-300mcg per dose", "reason": "ESSENTIAL - dose together for synergistic GH release"},
      {"name": "GABA", "dose": "3-5g before bed dose", "reason": "Enhances GH release, especially nighttime pulse"},
      {"name": "Glycine", "dose": "3-5g before bed", "reason": "Supports GH secretion during sleep"},
      {"name": "Vitamin D3", "dose": "5000 IU daily", "reason": "Supports GH receptor sensitivity"}
    ],
    "vial_lasts": "~25 doses at 200mcg (12-day supply at 2x daily)"
  },
  "epitalon": {
    "peptide_id": "epitalon",
    "name": "Epitalon",
    "vial_sizes": ["10mg"],
    "reconstitution": {
      "bac_water": "2mL",
      "concentration": "5mg/mL (5000mcg/mL)",
      "units_per_dose": {
        "5mg": "1mL (100 units)",
        "10mg": "2mL (entire vial, 200 units)"
      }
    },
    "typical_dose_range": "5-10mg daily for 10-20 day cycle",
    "frequency": "Daily during cycle",
    "timing": ["Before bed"],
    "weekly_schedule": "Daily for 10-20 days, then off",
    "cycling": "10-20 day cycles, 2-3 cycles per year (Jan, June, Dec common)",
    "administration_route": "Subcutaneous",
    "synergistic_supplements": [
      {"name": "Pinealon", "dose": "10-20mg daily", "reason": "Cycle together - both support pineal function"},
      {"name": "Melatonin", "dose": "1-5mg before bed", "reason": "Supports pineal function and circadian rhythm"},
      {"name": "NAD+", "dose": "250-500mg daily", "reason": "Cellular repair and longevity pathways"},
      {"name": "Resveratrol", "dose": "500mg daily", "reason": "Activates longevity genes (sirtuins)"}
    ],
    "vial_lasts": "1-2 days per vial"
  },
  "tb500": {
    "peptide_id": "tb500",
    "name": "TB-500",
    "vial_sizes": ["5mg"],
    "reconstitution": {
      "bac_water": "2mL",
      "concentration": "2.5mg/mL",
      "units_per_dose": {
        "2.5mg": "1mL (100 units)",
        "5mg": "2mL (entire vial, 200 units)"
      }
    },
    "typical_dose_range": "2-5mg per dose, 1-2x weekly",
    "frequency": "1-2x weekly",
    "timing": ["Any time (flexible)"],
    "weekly_schedule": "Monday/Thursday OR twice weekly",
    "cycling": "4-8 weeks for acute injury, 8-12 weeks for chronic",
    "administration_route": "Subcutaneous or Intramuscular",
    "synergistic_supplements": [
      {"name": "BPC-157", "dose": "250-500mcg 2x daily", "reason": "Highly synergistic for tissue repair"},
      {"name": "Vitamin C", "dose": "2-3g daily", "reason": "Collagen synthesis"},
      {"name": "Glucosamine/Chondroitin", "dose": "1500mg/1200mg daily", "reason": "Joint and connective tissue support"},
      {"name": "MSM", "dose": "2-3g daily", "reason": "Sulfur for tissue repair"}
    ],
    "vial_lasts": "1-2 doses per vial"
  },
  "kpv": {
    "peptide_id": "kpv",
    "name": "KPV",
    "vial_sizes": ["10mg"],
    "reconstitution": {
      "bac_water": "2mL",
      "concentration": "5mg/mL (5000mcg/mL)",
      "units_per_dose": {
        "500mcg": "0.1mL (10 units)",
        "1000mcg": "0.2mL (20 units)"
      }
    },
    "typical_dose_range": "500-1000mcg per dose, 1-2x daily",
    "frequency": "1-2x daily",
    "timing": ["Morning", "Evening (with or without food)"],
    "weekly_schedule": "Daily for gut inflammation",
    "cycling": "4-8 weeks, then assess",
    "administration_route": "Oral (for gut) or Subcutaneous",
    "synergistic_supplements": [
      {"name": "BPC-157", "dose": "250-500mcg 2x daily", "reason": "ESSENTIAL pairing for SIBO/gut inflammation"},
      {"name": "Quercetin", "dose": "500mg 2x daily", "reason": "Additional anti-inflammatory, mast cell stabilizer"},
      {"name": "Curcumin", "dose": "1000mg daily", "reason": "NF-kB inhibition (same pathway as KPV)"},
      {"name": "Probiotics", "dose": "50+ billion CFU", "reason": "Restore gut microbiome after SIBO treatment"}
    ],
    "vial_lasts": "5-10 doses per vial"
  },
  "ghkcu": {
    "peptide_id": "ghkcu",
    "name": "GHK-Cu",
    "vial_sizes": ["50mg"],
    "reconstitution": {
      "bac_water": "2mL",
      "concentration": "25mg/mL",
      "units_per_dose": {
        "1mg": "0.04mL (4 units)",
        "3mg": "0.12mL (12 units)"
      },
      "note": "More commonly used topically - many don't reconstitute"
    },
    "typical_dose_range": "1-3mg weekly (injectable) or topical daily",
    "frequency": "Weekly for injectable, daily for topical",
    "timing": ["Evening (topical)", "Weekly (injectable)"],
    "weekly_schedule": "Topical daily OR injectable once weekly",
    "cycling": "3 months on, 1 month off (injectable)",
    "administration_route": "Topical (preferred) or Subcutaneous",
    "synergistic_supplements": [
      {"name": "Vitamin C", "dose": "1-2g daily", "reason": "Collagen synthesis"},
      {"name": "Hyaluronic Acid", "dose": "Topical or 100mg oral", "reason": "Skin hydration"},
      {"name": "Copper", "dose": "1-2mg daily (if not getting from GHK-Cu)", "reason": "Required cofactor"},
      {"name": "Retinol/Retinoids", "dose": "Topical", "reason": "Synergistic for skin renewal"}
    ],
    "vial_lasts": "16-50 weeks if injecting, or make topical serum"
  },
  "semax": {
    "peptide_id": "semax",
    "name": "Semax",
    "vial_sizes": ["10mg"],
    "reconstitution": {
      "bac_water": "2mL for nasal spray bottle",
      "concentration": "5mg/mL (5000mcg/mL)",
      "per_spray": "~100-150mcg per spray",
      "units_per_dose": {
        "300mcg": "2-3 sprays",
        "600mcg": "4-6 sprays"
      }
    },
    "typical_dose_range": "300-600mcg per dose, 1-2x daily",
    "frequency": "1-2x daily",
    "timing": ["Morning", "Early afternoon (for focus)"],
    "weekly_schedule": "Daily for 4-6 weeks, then 1-2 week break",
    "cycling": "4-6 weeks on, 1-2 weeks off",
    "administration_route": "Intranasal (nasal spray)",
    "synergistic_supplements": [
      {"name": "Lion's Mane", "dose": "1000mg daily", "reason": "Synergistic BDNF/NGF support"},
      {"name": "Omega-3 (DHA)", "dose": "1-2g daily", "reason": "Brain health and neurotransmitter function"},
      {"name": "Phosphatidylserine", "dose": "300mg daily", "reason": "Cognitive support, reduces cortisol"},
      {"name": "L-Theanine", "dose": "200mg as needed", "reason": "Calm focus, pairs well with Semax"}
    ],
    "vial_lasts": "~7-14 days at 600mcg daily"
  },
  "pinealon": {
    "peptide_id": "pinealon",
    "name": "Pinealon",
    "vial_sizes": ["10mg", "20mg"],
    "reconstitution": {
      "note": "Often comes as sublingual tablets or can be reconstituted",
      "if_reconstituted_10mg": "2mL = 5mg/mL",
      "if_reconstituted_20mg": "2mL = 10mg/mL",
      "sublingual_dose": "10-20mg daily"
    },
    "typical_dose_range": "10-20mg daily",
    "frequency": "Daily during cycle",
    "timing": ["Evening (supports circadian rhythm)"],
    "weekly_schedule": "Daily for 10-20 days, then off",
    "cycling": "10-20 day cycles, coordinate with Epitalon",
    "administration_route": "Sublingual or Oral",
    "synergistic_supplements": [
      {"name": "Epitalon", "dose": "5-10mg daily", "reason": "Cycle together - both support pineal gland"},
      {"name": "Magnesium Threonate", "dose": "2000mg before bed", "reason": "Crosses BBB, supports brain function"},
      {"name": "Melatonin", "dose": "1-5mg", "reason": "Supports pineal function"},
      {"name": "5-HTP", "dose": "100-200mg evening", "reason": "Serotonin precursor, supports mood and sleep"}
    ],
    "vial_lasts": "1-2 days if injectable, or use sublingual form"
  },
  "retatrutide": {
    "peptide_id": "retatrutide",
    "name": "Retatrutide",
    "vial_sizes": ["10mg"],
    "reconstitution": {
      "bac_water": "2mL",
      "concentration": "5mg/mL (5000mcg/mL)",
      "units_per_dose": {
        "2mg": "0.4mL (40 units)",
        "4mg": "0.8mL (80 units)",
        "8mg": "1.6mL (160 units)",
        "12mg": "2.4mL (need 1.5 vials)"
      }
    },
    "typical_dose_range": "Start 2mg, titrate to 8-12mg weekly",
    "frequency": "Once weekly",
    "timing": ["Same day/time each week"],
    "weekly_schedule": "Every Monday (or consistent day)",
    "cycling": "Continuous while losing weight, titrate up slowly",
    "titration_schedule": "Week 1-4: 2mg, Week 5-8: 4mg, Week 9-12: 6mg, Week 13+: 8-12mg",
    "administration_route": "Subcutaneous",
    "synergistic_supplements": [
      {"name": "Electrolytes", "dose": "2-3x daily", "reason": "Prevent dehydration from GI effects"},
      {"name": "Fiber", "dose": "25-30g daily", "reason": "Support GI function"},
      {"name": "Protein Powder", "dose": "30-40g daily", "reason": "Preserve muscle mass during weight loss"},
      {"name": "Multivitamin", "dose": "Daily", "reason": "Prevent deficiencies during calorie restriction"}
    ],
    "vial_lasts": "1-5 weeks depending on dose"
  },
  "thymulin": {
    "peptide_id": "thymulin",
    "name": "Thymulin",
    "vial_sizes": ["20mg"],
    "reconstitution": {
      "bac_water": "2mL",
      "concentration": "10mg/mL",
      "units_per_dose": {
        "1mg": "0.1mL (10 units)",
        "5mg": "0.5mL (50 units)"
      }
    },
    "typical_dose_range": "1-5mg per dose",
    "frequency": "Daily or several times weekly",
    "timing": ["Morning"],
    "weekly_schedule": "Daily or 3-5x weekly",
    "cycling": "Can be continuous or cycled",
    "administration_route": "Subcutaneous",
    "synergistic_supplements": [
      {"name": "Zinc", "dose": "30-50mg daily", "reason": "ESSENTIAL - required for thymulin activity"},
      {"name": "Vitamin D3", "dose": "5000 IU daily", "reason": "Immune function"},
      {"name": "Vitamin C", "dose": "2g daily", "reason": "Immune support"},
      {"name": "Quercetin", "dose": "500mg daily", "reason": "Immune modulation"}
    ],
    "vial_lasts": "4-20 doses per vial"
  },
  "ll37": {
    "peptide_id": "ll37",
    "name": "LL-37",
    "vial_sizes": ["5mg"],
    "reconstitution": {
      "bac_water": "2mL",
      "concentration": "2.5mg/mL (2500mcg/mL)",
      "units_per_dose": {
        "200mcg": "0.08mL (8 units)",
        "500mcg": "0.2mL (20 units)"
      }
    },
    "typical_dose_range": "200-500mcg per dose",
    "frequency": "Daily or 2-3x weekly",
    "timing": ["Can be taken any time"],
    "weekly_schedule": "2-3x weekly for immune support, daily for wound healing",
    "cycling": "Can be used continuously or cyclically depending on application",
    "administration_route": "Subcutaneous injection or topical application",
    "synergistic_supplements": [
      {
        "name": "Zinc",
        "dose": "15-30mg daily",
        "reason": "Essential for immune function and wound healing"
      },
      {
        "name": "Vitamin D3",
        "dose": "4000-5000 IU daily",
        "reason": "Upregulates LL-37 expression naturally"
      },
      {
        "name": "Vitamin C",
        "dose": "1000-2000mg daily",
        "reason": "Supports collagen synthesis and immune function"
      }
    ],
    "vial_lasts": "10-25 doses per 5mg vial depending on dosage"
  },
  "dsip": {
    "peptide_id": "dsip",
    "name": "DSIP",
    "vial_sizes": ["10mg"],
    "reconstitution": {
      "bac_water": "2mL",
      "concentration": "5mg/mL (5000mcg/mL)",
      "units_per_dose": {
        "100mcg": "0.02mL (2 units)",
        "200mcg": "0.04mL (4 units)",
        "300mcg": "0.06mL (6 units)"
      }
    },
    "typical_dose_range": "100-300mcg per dose",
    "frequency": "Before bed for sleep, or 2-3x daily for stress/pain",
    "timing": ["30-60 minutes before bed for sleep", "Throughout day for stress management"],
    "weekly_schedule": "Can be used nightly or as needed for sleep. 2-3x daily for chronic stress/pain",
    "cycling": "Can be used continuously or cyclically. Some use nightly, others use 5 days on, 2 days off",
    "administration_route": "Subcutaneous injection",
    "synergistic_supplements": [
      {
        "name": "Epitalon",
        "dose": "5-10mg daily during cycles",
        "reason": "Synergistic for sleep quality and circadian rhythm regulation"
      },
      {
        "name": "Magnesium Glycinate",
        "dose": "400-600mg before bed",
        "reason": "GABA support, muscle relaxation, deeper sleep"
      },
      {
        "name": "L-Theanine",
        "dose": "200-400mg before bed",
        "reason": "Promotes relaxation and alpha brain waves"
      },
      {
        "name": "Glycine",
        "dose": "3-5g before bed",
        "reason": "Lowers core body temperature, promotes deep sleep"
      },
      {
        "name": "Apigenin",
        "dose": "50mg before bed",
        "reason": "Anxiolytic and sedative effects"
      }
    ],
    "vial_lasts": "33-100 doses per vial depending on dosage"
  },
  "aod9604": {
    "peptide_id": "aod9604",
    "name": "AOD-9604",
    "vial_sizes": ["5mg"],
    "reconstitution": {
      "bac_water": "2mL",
      "concentration": "2.5mg/mL (2500mcg/mL)",
      "units_per_dose": {
        "250mcg": "0.1mL (10 units)",
        "500mcg": "0.2mL (20 units)"
      }
    },
    "typical_dose_range": "250-500mcg per dose",
    "frequency": "1-2x daily",
    "timing": ["Morning on empty stomach", "Pre-workout or before bed"],
    "weekly_schedule": "Daily for 8-12 weeks for fat loss phase",
    "cycling": "8-12 weeks on, 4 weeks off. Can repeat cycles",
    "administration_route": "Subcutaneous injection",
    "synergistic_supplements": [
      {
        "name": "L-Carnitine",
        "dose": "2-3g daily",
        "reason": "Transports fatty acids into mitochondria for burning"
      },
      {
        "name": "Caffeine",
        "dose": "200-400mg pre-workout",
        "reason": "Enhances lipolysis and fat mobilization"
      },
      {
        "name": "Green Tea Extract (EGCG)",
        "dose": "400-600mg daily",
        "reason": "Supports fat oxidation and metabolic rate"
      },
      {
        "name": "Chromium",
        "dose": "200-400mcg daily",
        "reason": "Supports healthy blood sugar and reduces cravings"
      }
    ],
    "vial_lasts": "10-20 doses per 5mg vial depending on dosage"
  }
};
