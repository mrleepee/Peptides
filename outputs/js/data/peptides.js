// File: js/data/peptides.js
window.APP = window.APP || {};
window.APP.PEPTIDES_DATA = {
  "tesamorelin": {
    "id": "tesamorelin",
    "name": "Tesamorelin",
    "type": "GHRH Analogue",
    "category": "Growth Hormone",
    "mechanism": "Binds to GHRH receptors in the pituitary, stimulating pulsatile GH release that mimics natural secretion patterns",
    "half_life": "26-38 minutes",
    "dosing": "1-2mg daily, subcutaneous",
    "administration": "Subcutaneous injection",
    "primary_benefits": [
      "Reduction of visceral adipose tissue",
      "Improved triglyceride profiles",
      "Potential cognitive benefits"
    ],
    "research_findings": "Clinical trials demonstrated 15-20% reduction in trunk fat. FDA-approved for HIV-associated lipodystrophy. Currently being studied for mild cognitive impairment",
    "system_targets": [
      "Endocrine",
      "Metabolic"
    ],
    "accessibility": "Prescription required (FDA-approved)",
    "cost_tier": "high",
    "ordered": false,
    "order_status": "Discussed but not ordered"
  },
  "ipamorelin": {
    "id": "ipamorelin",
    "name": "Ipamorelin",
    "type": "Growth Hormone Secretagogue",
    "category": "Growth Hormone",
    "mechanism": "Stimulates GH release via ghrelin receptors (GHS-R1a) without significantly affecting cortisol, prolactin, or aldosterone",
    "half_life": "~2 hours",
    "dosing": "100-300mcg, 2-3x daily",
    "administration": "Subcutaneous injection",
    "primary_benefits": [
      "Clean GH stimulation",
      "Minimal hunger stimulation",
      "Improved body composition",
      "Enhanced recovery"
    ],
    "research_findings": "One of the most selective secretagogues with minimal side effects. Unlike GHRP-6 or GHRP-2, produces minimal hunger stimulation",
    "system_targets": [
      "Endocrine",
      "Recovery"
    ],
    "accessibility": "Research peptide",
    "cost_tier": "medium",
    "ordered": true,
    "order_status": "Ordered and received"
  },
  "bpc157": {
    "id": "bpc157",
    "name": "BPC-157",
    "type": "Synthetic Peptide",
    "category": "Repair & Recovery",
    "mechanism": "Upregulates growth hormone receptors, promotes angiogenesis via VEGF pathways, modulates nitric oxide systems, interacts with dopaminergic system",
    "half_life": "~4 hours",
    "dosing": "250-500mcg, 1-2x daily",
    "administration": "Injectable or oral",
    "primary_benefits": [
      "Tendon and ligament healing",
      "Gut mucosal repair",
      "SIBO treatment support",
      "Protection against NSAID damage",
      "Neuroprotection",
      "Dopaminergic system support"
    ],
    "research_findings": "Derived from human gastric juice. Stable in gastric acid. Direct gut-brain axis modulation. Supports recovery from dopamine-depleting agents",
    "system_targets": [
      "Digestive",
      "Musculoskeletal",
      "Neurological"
    ],
    "accessibility": "Widely available research peptide",
    "cost_tier": "low",
    "special_notes": "Best bang-for-buck for longevity, gut health (SIBO), and cognitive enhancement",
    "ordered": true,
    "order_status": "Ordered and received"
  },
  "tb500": {
    "id": "tb500",
    "name": "TB-500",
    "type": "Thymosin Beta-4 Fragment",
    "category": "Repair & Recovery",
    "mechanism": "Sequesters G-actin, promoting cell migration and proliferation. Upregulates actin polymerization. Reduces inflammation via NF-\u03baB modulation",
    "half_life": "~10 days (due to actin binding)",
    "dosing": "2-5mg, 1-2x weekly",
    "administration": "Subcutaneous or intramuscular injection",
    "primary_benefits": [
      "Tissue repair and regeneration",
      "Wound healing",
      "Reduced inflammation",
      "Hair regrowth",
      "Cardiac tissue repair"
    ],
    "research_findings": "43-amino-acid peptide naturally occurring in most tissues. Research includes cardiac post-MI studies, wound healing, corneal repair",
    "system_targets": [
      "Musculoskeletal",
      "Cardiovascular",
      "Integumentary"
    ],
    "accessibility": "Research peptide",
    "cost_tier": "medium",
    "ordered": true,
    "order_status": "Ordered and received"
  },
  "ghkcu": {
    "id": "ghkcu",
    "name": "GHK-Cu",
    "type": "Copper Peptide",
    "category": "Aesthetic & Skin Health",
    "mechanism": "Gene modulation affecting over 4,000 genes. Enhances collagen synthesis, promotes tissue remodeling, antioxidant properties",
    "half_life": "Not well established",
    "dosing": "Topical: various concentrations. Injectable: 1-3mg weekly",
    "administration": "Topical or subcutaneous",
    "primary_benefits": [
      "Skin rejuvenation",
      "Collagen synthesis",
      "Wound healing",
      "Hair growth",
      "Anti-inflammatory effects"
    ],
    "research_findings": "Naturally declines with age. Modulates thousands of genes related to tissue repair and inflammation",
    "system_targets": [
      "Integumentary",
      "Aesthetic"
    ],
    "accessibility": "Widely available (topical and research)",
    "cost_tier": "low",
    "ordered": true,
    "order_status": "Ordered and received"
  },
  "motsc": {
    "id": "motsc",
    "name": "MOTS-c",
    "type": "Mitochondrial-derived Peptide",
    "category": "Metabolic & Energy",
    "mechanism": "Activates AMPK pathway, regulates metabolic homeostasis, enhances mitochondrial function, improves insulin sensitivity",
    "half_life": "~8 hours",
    "dosing": "5-15mg, 2-3x weekly",
    "administration": "Subcutaneous injection",
    "primary_benefits": [
      "Enhanced mitochondrial function",
      "Improved insulin sensitivity",
      "Increased energy and endurance",
      "Metabolic optimization",
      "Potential longevity effects"
    ],
    "research_findings": "Encoded in mitochondrial DNA. Acts as exercise mimetic. Research shows metabolic improvements and lifespan extension in animal models",
    "system_targets": [
      "Metabolic",
      "Mitochondrial"
    ],
    "accessibility": "Research peptide",
    "cost_tier": "medium",
    "ordered": true,
    "order_status": "Ordered and received"
  },
  "retatrutide": {
    "id": "retatrutide",
    "name": "Retatrutide",
    "type": "Triple Agonist",
    "category": "Metabolic & Weight Management",
    "mechanism": "Triple agonist of GIP, GLP-1, and glucagon receptors. Comprehensive metabolic regulation",
    "half_life": "~7 days",
    "dosing": "Escalating protocol, typically 2-12mg weekly",
    "administration": "Subcutaneous injection",
    "primary_benefits": [
      "Significant weight loss",
      "Improved metabolic health",
      "Better glycemic control",
      "Reduced appetite",
      "Enhanced fat oxidation"
    ],
    "research_findings": "Clinical trials showed superior weight loss compared to dual agonists. Phase 3 trials ongoing",
    "system_targets": [
      "Metabolic",
      "Endocrine"
    ],
    "accessibility": "Research/prescription",
    "cost_tier": "high",
    "ordered": true,
    "order_status": "Ordered and received"
  },
  "pinealon": {
    "id": "pinealon",
    "name": "Pinealon",
    "type": "Bioregulator Peptide",
    "category": "Longevity & Cognitive",
    "mechanism": "Epigenetic CNS modulation, neuroprotection, circadian rhythm regulation, melatonin synthesis optimization",
    "half_life": "Not well established",
    "dosing": "10-20mg daily, cycled (10-20 days on, break)",
    "administration": "Oral, sublingual, or intranasal",
    "primary_benefits": [
      "Neuroprotection",
      "Cognitive support",
      "Circadian rhythm optimization",
      "Memory consolidation",
      "Stress resilience",
      "Sleep architecture improvement"
    ],
    "research_findings": "From Khavinson's Russian bioregulator research. Small peptides can cross blood-brain barrier",
    "system_targets": [
      "Neurological",
      "Circadian"
    ],
    "accessibility": "Limited (specialized suppliers)",
    "cost_tier": "medium",
    "ordered": true,
    "order_status": "Ordered and received"
  },
  "epitalon": {
    "id": "epitalon",
    "name": "Epitalon",
    "type": "Bioregulator Peptide",
    "category": "Longevity & Anti-Aging",
    "mechanism": "Activates telomerase in somatic cells, stimulates pineal gland function, modulates neuroendocrine system",
    "half_life": "Not well established",
    "dosing": "5-10mg daily for 10-20 day cycles, 2-3 cycles per year",
    "administration": "Subcutaneous injection",
    "primary_benefits": [
      "Telomerase activation",
      "Telomere elongation",
      "Lifespan extension (animal studies)",
      "Improved circadian rhythms",
      "Antioxidant gene expression",
      "Potential anti-cancer properties"
    ],
    "research_findings": "Tetrapeptide (Ala-Glu-Asp-Gly) from Khavinson research. Studies showed increased telomerase activity and telomere elongation in human cell cultures. Animal research demonstrated lifespan extension",
    "system_targets": [
      "Longevity",
      "Endocrine",
      "Cellular"
    ],
    "accessibility": "Research peptide",
    "cost_tier": "medium",
    "special_notes": "Best direct longevity play with telomerase activation data",
    "ordered": true,
    "order_status": "Ordered and received"
  },
  "pancragen": {
    "id": "pancragen",
    "name": "Pancragen",
    "type": "Bioregulator Peptide",
    "category": "Metabolic & Endocrine",
    "mechanism": "Bioregulation of pancreatic cells, supports insulin production and beta cell function. Epigenetic modulation specific to pancreatic tissue",
    "half_life": "Not well established (bioregulator)",
    "dosing": "10-20mg daily for 10-20 day cycles, 2-3 cycles per year",
    "administration": "Subcutaneous injection",
    "primary_benefits": [
      "Beta cell function support",
      "Pancreatic health optimization",
      "Blood sugar regulation support",
      "Protection from metabolic stress",
      "May improve insulin sensitivity",
      "Metabolic syndrome support"
    ],
    "research_findings": "Khavinson bioregulator specific to pancreatic tissue. Part of Russian bioregulator tradition showing organ-specific epigenetic effects. Designed to support pancreatic function and insulin production",
    "system_targets": [
      "Metabolic",
      "Endocrine",
      "Pancreas"
    ],
    "accessibility": "Research peptide (bioregulator suppliers)",
    "cost_tier": "medium",
    "ordered": false,
    "order_status": "Discussed but not ordered",
    "special_notes": "HIGHLY RELEVANT - Directly addresses beta cell support and insulin resistance goals. Pairs excellently with MOTS-c for comprehensive metabolic protocol"
  },
  "cortagen": {
    "id": "cortagen",
    "name": "Cortagen",
    "type": "Bioregulator Peptide",
    "category": "Cognitive Enhancement",
    "mechanism": "Bioregulation of cortical neurons, supports synaptic plasticity and brain tissue function. Epigenetic modulation of cerebral cortex",
    "half_life": "Not well established (bioregulator)",
    "dosing": "10-20mg daily for 10-20 day cycles, 2-3 cycles per year",
    "administration": "Subcutaneous injection or sublingual",
    "primary_benefits": [
      "Enhanced memory and learning",
      "Improved focus and concentration",
      "Protection against cognitive decline",
      "Brain tissue restoration",
      "Recovery from brain injury or stress",
      "Synaptic health optimization"
    ],
    "research_findings": "Khavinson bioregulator targeting cerebral cortex. Focus on cognitive performance and cortical neuron health. Complements Pinealon's broader CNS and circadian effects",
    "system_targets": [
      "Neurological",
      "Cognitive",
      "Cerebral Cortex"
    ],
    "accessibility": "Research peptide (bioregulator suppliers)",
    "cost_tier": "low",
    "ordered": false,
    "order_status": "Discussed but not ordered",
    "special_notes": "Complements Pinealon for comprehensive brain support - Pinealon for circadian/pineal, Cortagen for cognitive performance. Often cycled together"
  },
  "chonluten": {
    "id": "chonluten",
    "name": "Chonluten",
    "type": "Bioregulator Peptide (Tripeptide: Glu-Asp-Gly)",
    "category": "Respiratory & Immune Health",
    "mechanism": "Bioregulation of bronchial epithelial cells, specifically targets respiratory system tissue. Modulates inflammatory pathways and TNF production in immune cells",
    "half_life": "Not well established (bioregulator)",
    "dosing": "10-20mg daily for 10-20 day cycles, 2-3 cycles per year",
    "administration": "Subcutaneous injection",
    "primary_benefits": [
      "Bronchial tissue protection and repair",
      "Respiratory system optimization",
      "Anti-inflammatory effects on immune cells",
      "TNF production modulation",
      "May support lung health and function",
      "Immune system modulation"
    ],
    "research_findings": "Khavinson bioregulator derived from bronchial epithelial cells. Synthetic tripeptide (Glu-Asp-Gly) that targets respiratory system. Research shows it inhibits TNF production in monocytes exposed to inflammatory stimuli (LPS), demonstrating anti-inflammatory properties",
    "system_targets": [
      "Respiratory",
      "Bronchial",
      "Immune",
      "Lungs"
    ],
    "accessibility": "Research peptide (bioregulator suppliers)",
    "cost_tier": "low",
    "ordered": false,
    "order_status": "Discussed but not ordered",
    "special_notes": "Bronchial bioregulator with demonstrated anti-inflammatory effects. Published research (Int. J. Mol. Sci. 2022) shows it reduces TNF and pro-inflammatory cytokine expression in immune cells"
  },
  "livagen": {
    "id": "livagen",
    "name": "Livagen",
    "type": "Bioregulator Peptide",
    "category": "Metabolic & Liver Health",
    "mechanism": "Bioregulation of hepatocytes (liver cells). Supports liver function, detoxification, and hepatic tissue regeneration",
    "half_life": "Not well established (bioregulator)",
    "dosing": "10-20mg daily for 10-20 day cycles, 2-3 cycles per year",
    "administration": "Subcutaneous injection",
    "primary_benefits": [
      "Liver function optimization",
      "Protection from toxins and oxidative stress",
      "May help with fatty liver",
      "Supports detoxification pathways",
      "Hepatic regeneration",
      "Metabolic health via liver support"
    ],
    "research_findings": "Khavinson bioregulator for hepatic tissue. Part of metabolic organ support family. Important for overall metabolic health and longevity as liver function is central to metabolism",
    "system_targets": [
      "Metabolic",
      "Liver",
      "Detoxification"
    ],
    "accessibility": "Research peptide (bioregulator suppliers)",
    "cost_tier": "medium",
    "ordered": false,
    "order_status": "Discussed but not ordered",
    "special_notes": "Pairs excellently with Pancragen for complete metabolic organ support (liver + pancreas). Important for metabolic health and aging"
  },
  "thymulin": {
    "id": "thymulin",
    "name": "Thymulin",
    "type": "Immunomodulator",
    "category": "Immune & Longevity",
    "mechanism": "Essential for T-cell differentiation and maturation, modulates cytokine production, influences neuroendocrine-immune communication. Requires zinc cofactor",
    "half_life": "Not well established",
    "dosing": "1-5mg daily or several times weekly, with zinc supplementation",
    "administration": "Subcutaneous injection",
    "primary_benefits": [
      "Immune reconstitution",
      "T-cell maturation",
      "Autoimmune modulation",
      "Anti-aging (immune senescence)",
      "Wound healing",
      "HPA axis interaction"
    ],
    "research_findings": "Nonapeptide naturally produced by thymic epithelial cells. Levels decrease dramatically with thymic involution, nearly undetectable by age 60",
    "system_targets": [
      "Immune",
      "Endocrine"
    ],
    "accessibility": "Research peptide (limited)",
    "cost_tier": "medium",
    "ordered": true,
    "order_status": "Ordered and received"
  },
  "selank": {
    "id": "selank",
    "name": "Selank",
    "type": "Anxiolytic Nootropic",
    "category": "Cognitive & Mood",
    "mechanism": "Modulates GABA and serotonin systems, influences BDNF expression, immunomodulatory effects",
    "half_life": "~30 minutes (effects last hours)",
    "dosing": "250-500mcg, 1-3x daily",
    "administration": "Intranasal or subcutaneous",
    "primary_benefits": [
      "Anxiety reduction",
      "Mood stabilization",
      "Improved focus",
      "Stress resilience",
      "Neuroprotection",
      "Immune modulation"
    ],
    "research_findings": "Synthetic derivative of tuftsin. Developed in Russia for anxiety disorders without sedation or addiction potential",
    "system_targets": [
      "Neurological",
      "Mood"
    ],
    "accessibility": "Research peptide",
    "cost_tier": "low",
    "ordered": false,
    "order_status": "Discussed but not ordered"
  },
  "semax": {
    "id": "semax",
    "name": "Semax",
    "type": "Nootropic",
    "category": "Cognitive Enhancement",
    "mechanism": "BDNF expression, NGF modulation, dopaminergic and serotonergic system enhancement, neuroprotection",
    "half_life": "~30 minutes (effects last hours)",
    "dosing": "300-600mcg, 1-3x daily",
    "administration": "Intranasal",
    "primary_benefits": [
      "Enhanced focus and concentration",
      "Memory improvement",
      "Neuroprotection",
      "Mood elevation",
      "Reduced cognitive fatigue",
      "Stress adaptation"
    ],
    "research_findings": "ACTH(4-10) analog. Developed in Russia. Well-studied for cognitive enhancement and neuroprotection",
    "system_targets": [
      "Neurological",
      "Cognitive"
    ],
    "accessibility": "Research peptide",
    "cost_tier": "low",
    "ordered": true,
    "order_status": "Ordered and received"
  },
  "kpv": {
    "id": "kpv",
    "name": "KPV",
    "type": "Tripeptide (from \u03b1-MSH)",
    "category": "Anti-Inflammatory & Gut Health",
    "mechanism": "Downregulates NF-\u03baB and MAPK inflammatory signaling pathways. Transported by PepT1 (intestinal peptide transporter) suggesting direct gut tissue uptake",
    "half_life": "Short (minutes to hours)",
    "dosing": "500-1000mcg daily, can be oral or subcutaneous",
    "administration": "Oral (for gut targeting) or subcutaneous",
    "primary_benefits": [
      "Downregulates inflammatory signaling (NF-\u03baB, MAPK)",
      "Demonstrated efficacy in colitis models",
      "Antimicrobial properties for SIBO",
      "Direct gut tissue uptake via PepT1",
      "Complements BPC-157 for gut healing"
    ],
    "research_findings": "Tripeptide derived from alpha-MSH. Mouse colitis studies showed anti-inflammatory efficacy. Can be transported directly into gut tissue via peptide transporter PepT1",
    "system_targets": [
      "Digestive",
      "Immune",
      "Anti-Inflammatory"
    ],
    "accessibility": "Research peptide, widely available",
    "cost_tier": "low",
    "ordered": true,
    "special_notes": "Particularly valuable for SIBO and inflammatory gut conditions when combined with BPC-157",
    "order_status": "Ordered and received"
  },
  "modgrf129": {
    "id": "modgrf129",
    "name": "Mod GRF 1-29 (CJC-1295 no DAC)",
    "type": "GHRH Analogue",
    "category": "Growth Hormone",
    "mechanism": "Modified GHRH (1-29) that stimulates pulsatile GH release without drug affinity complex (DAC). Provides natural GH pulse pattern",
    "half_life": "~30 minutes",
    "dosing": "100-200mcg, 2-3x daily",
    "administration": "Subcutaneous injection",
    "primary_benefits": [
      "Stimulates natural GH release patterns",
      "No DAC means more physiological pulsing",
      "Synergistic with Ipamorelin",
      "Body composition improvement",
      "Visceral fat reduction",
      "Alternative to Tesamorelin"
    ],
    "research_findings": "Modified growth hormone releasing hormone without the drug affinity complex. Provides more natural pulsatile GH release than CJC-1295 with DAC. Often stacked with Ipamorelin for enhanced GH output",
    "system_targets": [
      "Endocrine",
      "Metabolic"
    ],
    "accessibility": "Research peptide, widely available",
    "cost_tier": "medium",
    "ordered": true,
    "special_notes": "Best alternative to Tesamorelin when paired with Ipamorelin. The 'no DAC' version allows natural pulsing vs continuous elevation",
    "order_status": "Ordered and received"
  },
  "ll37": {
    "id": "ll37",
    "name": "LL-37",
    "type": "Antimicrobial Peptide",
    "category": "Immune & Healing",
    "mechanism": "Broad-spectrum antimicrobial activity against bacteria, viruses, and fungi. Modulates immune responses, promotes wound healing, and has anti-biofilm properties",
    "half_life": "~6-8 hours",
    "dosing": "200-500mcg daily or 2-3x weekly",
    "administration": "Subcutaneous injection or topical",
    "primary_benefits": [
      "Antimicrobial and antiviral activity",
      "Wound healing acceleration",
      "Immune system modulation",
      "Anti-inflammatory effects",
      "Biofilm disruption",
      "Skin barrier protection"
    ],
    "research_findings": "Human cathelicidin antimicrobial peptide, part of innate immune system. Shows broad-spectrum antimicrobial activity and wound healing properties. Being studied for chronic wounds, infections, and inflammatory conditions",
    "system_targets": [
      "Immune System",
      "Skin",
      "Wound Healing"
    ],
    "accessibility": "Research peptide",
    "cost_tier": "high",
    "ordered": true,
    "order_status": "Ordered and received"
  },
  "dsip": {
    "id": "dsip",
    "name": "DSIP",
    "type": "Neuropeptide",
    "category": "Sleep & Recovery",
    "mechanism": "Modulates sleep architecture by enhancing delta wave (slow-wave) sleep. Regulates HPA axis, stress hormones, and circadian rhythms. May have neuroprotective and analgesic properties",
    "half_life": "~15-30 minutes (effects last hours)",
    "dosing": "100-300mcg before bed or 2-3x daily for stress",
    "administration": "Subcutaneous injection",
    "primary_benefits": [
      "Enhanced deep sleep (delta wave)",
      "Stress and cortisol modulation",
      "Pain modulation and chronic pain relief",
      "Neuroprotective effects",
      "May help with withdrawal symptoms",
      "Mood stabilization",
      "Adaptogenic properties"
    ],
    "research_findings": "Discovered in 1977 from rabbit brain. Increases slow-wave sleep and modulates HPA axis. Shows promise for stress-related disorders, chronic pain, and insomnia. Some evidence for alcohol/opioid withdrawal support. Exhibits both sedative and stress-protective effects",
    "system_targets": [
      "Nervous System",
      "Sleep",
      "Stress Response",
      "Pain Modulation"
    ],
    "accessibility": "Research peptide",
    "cost_tier": "medium",
    "ordered": true,
    "order_status": "Ordered and received",
    "special_notes": "Unique dual action: promotes sleep but also helps with daytime stress management. Excellent for recovery protocols. Pairs well with Epitalon and Pinealon for comprehensive sleep/circadian support"
  },
  "aod9604": {
    "id": "aod9604",
    "name": "AOD-9604",
    "type": "Growth Hormone Fragment",
    "category": "Metabolic & Fat Loss",
    "mechanism": "Fragment 176-191 of human growth hormone. Stimulates lipolysis (fat breakdown) and inhibits lipogenesis (fat formation) without affecting blood sugar or IGF-1 levels",
    "half_life": "~2 hours",
    "dosing": "250-500mcg daily, typically split into 2 doses",
    "administration": "Subcutaneous injection",
    "primary_benefits": [
      "Enhanced fat loss, especially abdominal fat",
      "No effect on blood sugar or insulin",
      "Does not affect IGF-1 levels",
      "May promote cartilage repair",
      "Improved body composition",
      "Preserves lean muscle mass"
    ],
    "research_findings": "Originally developed as anti-obesity drug. Shows selective fat-reducing effects without the growth-promoting or blood sugar effects of full GH. Does not bind to GH receptors. Australian studies showed significant fat loss, particularly visceral fat",
    "system_targets": [
      "Metabolic",
      "Adipose Tissue"
    ],
    "accessibility": "Research peptide",
    "cost_tier": "medium",
    "ordered": true,
    "order_status": "Ordered and received"
  }
};
