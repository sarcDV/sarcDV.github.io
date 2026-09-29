const graphData = {
  // 1. Configurazione visiva dei gruppi di nodi
    groups: {
    // Nodo Centrale (Pillola / Badge Elegante con Ombra Luminosa)
    core: { 
      shape: 'box',
      shapeProperties: { borderRadius: 12 },
      color: {
        background: '#1e1b4b',
        border: '#6366f1',
        highlight: { background: '#312e81', border: '#818cf8' },
        hover: { background: '#2e1065', border: '#a855f7' }
      },
      margin: { top: 16, bottom: 16, left: 24, right: 24 },
      borderWidth: 2,
      shadow: { enabled: true, color: 'rgba(99, 102, 241, 0.4)', size: 18, x: 0, y: 0 },
      font: { color: '#ffffff', size: 16, face: 'Inter', multi: true, bold: { color: '#6366f1' } }
    },

    // Hub / Macro-Aree (Rettangoli arrotondati scuri con bordo colorato)
    area: { 
      shape: 'box',
      shapeProperties: { borderRadius: 8 },
      color: {
        background: '#0f172a',
        border: '#3b82f6',
        highlight: { background: '#1e293b', border: '#60a5fa' },
        hover: { background: '#1e293b', border: '#60a5fa' }
      },
      margin: { top: 12, bottom: 12, left: 16, right: 16 },
      borderWidth: 1.5,
      shadow: { enabled: true, color: 'rgba(59, 130, 246, 0.2)', size: 10, x: 0, y: 0 },
      font: { color: '#f8fafc', size: 13, face: 'Inter' }
    },

    // Esperienze Lavorative (Card compatte dark)
    experience: { 
      shape: 'box',
      shapeProperties: { borderRadius: 6 },
      color: {
        background: '#020617',
        border: '#8b5cf6',
        highlight: { background: '#0f172a', border: '#a78bfa' },
        hover: { background: '#0f172a', border: '#a78bfa' }
      },
      margin: { top: 10, bottom: 10, left: 14, right: 14 },
      borderWidth: 1.5,
      shadow: { enabled: true, color: 'rgba(139, 92, 246, 0.15)', size: 8, x: 0, y: 0 },
      font: { color: '#e2e8f0', size: 12, face: 'Inter' }
    },

    // Progetti in Evidenza (Badge Smeraldo)
    project: { 
      shape: 'box',
      shapeProperties: { borderRadius: 6 },
      color: {
        background: '#2d0321',
        border: '#b910a0',
        highlight: { background: '#200445', border: '#34d399' },
        hover: { background: '#064e3b', border: '#34d399' }
      },
      margin: { top: 8, bottom: 8, left: 12, right: 12 },
      borderWidth: 1.5,
      shadow: { enabled: true, color: 'rgba(16, 185, 129, 0.2)', size: 8, x: 0, y: 0 },
      font: { color: '#083621', size: 11, face: 'Inter' }
    },

    // Skill Tecniche (Piccoli punti / capsule minimali)
    skill: { 
      shape: 'box',
      shapeProperties: { borderRadius: 4 },
      color: {
        background: '#0f172a',
        border: '#334155',
        highlight: { background: '#1e293b', border: '#475569' },
        hover: { background: '#1e293b', border: '#475569' }
      },
      margin: { top: 6, bottom: 6, left: 10, right: 10 },
      borderWidth: 1,
      font: { color: '#94a3b8', size: 11, face: 'Inter' }
    }
  },

  // 2. Nodi del Grafo
  nodes: [
    // LIVELLO 0: In cima alla pagina
    { id: 'me', label: 'Alessandro Sciarra, PhD\nPhysicist & AI Researcher', group: 'core', level: 0 },

    // LIVELLO 1: Le 4 Macro-Aree
    { id: 'area_med_imaging', label: '🩺 Medical Imaging & Physics', group: 'area', level: 1, hidden: true },
    { id: 'area_ai_cyber', label: '🛡️ AI & Cybersecurity', group: 'area', level: 1, hidden: true },
    { id: 'area_skincare', label: '✨ AI Skincare & MedTech', group: 'area', level: 1, hidden: true },
    { id: 'area_edu', label: '🎓 Academic Background', group: 'area', level: 1, hidden: true },

    // LIVELLO 2: Ruoli ed Esperienze principali (in ordine di rilevanza / cronologico)
    { id: 'exp_metaltronica', label: 'Senior Imaging Engineer (R&D)\n@ Metaltronica S.p.A.', group: 'experience', level: 2, hidden: true },
    { id: 'exp_clairclinique', label: 'Co-Founder & Lead AI Architect\n@ ClairClinique S.r.l.', group: 'experience', level: 2, hidden: true },
    { id: 'exp_freelance', label: 'AI Solutions Developer\nFreelance', group: 'experience', level: 2, hidden: true },
    { id: 'exp_deas', label: 'Senior Data Scientist\n@ Deas S.p.a.', group: 'experience', level: 3, hidden: true },
    { id: 'exp_ovgu', label: 'Research Associate / AI Scientist\n@ OvGU Magdeburg', group: 'experience', level: 3, hidden: true },
    { id: 'exp_ovgu_assistant', label: 'Research Assistant\n@ OvGU Magdeburg', group: 'experience', level: 4, hidden : true},
    { id: 'exp_ovgu_phd', label: 'EARLY-STAGE RESEARCHER,\n MARIE-CURIE FELLOWSHIP\n@ OvGU Magdeburg', group: 'experience', level: 5, hidden : true},
    { id: 'exp_ieo', label: 'Research Assistant\n@ IEO Milano', group: 'experience', level: 6, hidden : true},
    { id: 'exp_univaq', label: 'Research Assistant\n@ Univ. dell\'Aquila', group: 'experience', level: 7, hidden : true},   

    // LIVELLO 3: Progetti e Prodotti chiave
    //{ id: 'proj_inteldigest', label: 'Project: IntelDigest (OSINT)', group: 'project', level: 3, hidden: true },
    { id: 'proj_maiat', label: 'Project: MAIAT (Malware AI)', group: 'project', level: 4, hidden: true },
    { id: 'proj_fileanalysis', label: 'Project: File Analyzer Web App', group: 'project', level: 5, hidden: true },
    { id: 'proj_osint_monitor', label: 'Project: OSINT Global Monitor', group: 'project', level: 6, hidden: true },
    // { id: 'proj_neurotwin', label: 'Project: NeuroTwin (Digital Twin)', group: 'project', level: 4, hidden: true },
    //{ id: 'proj_adagio_simphonie', label: 'Products: Simphonie & Adagio', group: 'project', level: 3, hidden: true },

    // LIVELLO 4: Skill e Toolset specifici
    /* { id: 'skill_mc_cuda', label: 'Monte Carlo & CUDA (GPU)', group: 'skill', level: 4, hidden: true },
    { id: 'skill_dbt_mri', label: 'DBT & Medical MRI', group: 'skill', level: 4, hidden: true },
    { id: 'skill_llm_rag', label: 'LLMs, RAG & Agents', group: 'skill', level: 4, hidden: true },
    { id: 'skill_malware', label: 'Malware Analysis & Threat Intel', group: 'skill', level: 4, hidden: true },
 */
    { id: 'phd_thesis', label: 'Ph.D. Thesis', group: 'experience', level: 2, hidden: true },
    { id: 'master_thesis', label: 'Master Thesis', group: 'experience', level: 3 , hidden: true},
    { id: 'erasmus_placement', label: 'Erasmus Placement', group: 'experience', level: 4 , hidden: true},
    { id: 'internship', label: 'Internship @NanoCat S.r.l.', group: 'experience', level: 5, hidden: true },
    { id: 'bachelor_thesis', label: 'Bachelor Thesis', group: 'experience', level: 6, hidden: true }

],
  // 3. Collegamenti (Edges)
  edges: [
    // Collegamenti Centro -> Hub
    { from: 'me', to: 'area_med_imaging', width: 3 },
    { from: 'me', to: 'area_ai_cyber', width: 3 },
    { from: 'me', to: 'area_skincare', width: 3 },
    { from: 'me', to: 'area_edu', width: 2 },

    // Area Medical Imaging & Physics
    { from: 'area_med_imaging', to: 'exp_metaltronica' },
    { from: 'exp_metaltronica', to: 'exp_ovgu' },
    { from: 'exp_ovgu', to: 'exp_ovgu_assistant' },
    { from: 'exp_ovgu_assistant', to: 'exp_ovgu_phd' },
    { from: 'exp_ovgu_phd', to: 'exp_ieo' },
    { from: 'exp_ieo', to: 'exp_univaq' },
    //{ from: 'exp_metaltronica', to: 'skill_mc_cuda' },
    //{ from: 'exp_metaltronica', to: 'skill_dbt_mri' },
    //{ from: 'exp_ovgu', to: 'proj_neurotwin' },

    // Area AI & Cybersecurity
    { from: 'area_ai_cyber', to: 'exp_freelance' },
    { from: 'exp_freelance', to: 'exp_deas' },
    { from: 'exp_deas', to: 'proj_maiat' },
    { from: 'proj_maiat', to: 'proj_fileanalysis' },
    { from: 'proj_maiat', to: 'proj_osint_monitor' },
    //{ from: 'exp_deas', to: 'skill_malware' },
    //{ from: 'exp_freelance', to: 'skill_llm_rag' },
    //{ from: 'exp_freelance', to: 'proj_inteldigest' },
    //{ from: 'exp_freelance', to: 'proj_fileanalysis' },

    // Area Skincare & MedTech
    { from: 'area_skincare', to: 'exp_clairclinique' },
    { from: 'exp_clairclinique', to: 'proj_adagio_simphonie' },

    // Connessioni Tecniche generali
    //{ from: 'skill_mc_cuda', to: 'skill_python_matlab' },
    //{ from: 'skill_llm_rag', to: 'skill_python_matlab' },

    // Collegamenti Tesi
    { from: 'area_edu', to: 'phd_thesis' },
    { from: 'phd_thesis', to: 'master_thesis' },
    { from: 'master_thesis', to: 'erasmus_placement' },
    { from: 'erasmus_placement', to: 'internship' },
    { from: 'internship', to: 'bachelor_thesis' }
  ],

  // 4. Schede Dettagliate per ciascun nodo
  details: {
    'me': {
      title: 'Alessandro Sciarra, PhD',
      subtitle: 'Physicist & AI Researcher',
      tags: ['PhD in Physics', 'GPU Computing', 'AI Systems Architecture', 'Medical Imaging', 'Cybersecurity', 'Malware Analysis', 'Digital Twins', 'OSINT', 'LLM & RAG', 'Deep Learning'],
      summaryEN: 'Physicist, researcher and AI developer with more than 10 years of experience across academia and industry. Specialized in complex AI systems, GPU-accelerated Monte Carlo simulations and advanced medical image processing (DBT and MRI). In recent years, expanded research and development activities toward cybersecurity applications, with a particular interest in malware analysis, threat intelligence, OSINT and autonomous AI agents.', 
      summaryIT: 'Fisico, ricercatore e sviluppatore AI con oltre 10 anni di esperienza tra accademia e industria. Specializzato nello sviluppo di sistemi complessi basati su intelligenza artificiale, simulazioni Monte Carlo accelerate su GPU ed elaborazione avanzata di immagini mediche (DBT e MRI). Negli ultimi anni ha esteso la propria attività alla cybersecurity applicata, con particolare interesse per malware analysis, threat intelligence, OSINT e agenti AI autonomi.',
      links: [
        { label: 'Personal Webpage 1 / Sito Personale 1', url: 'https://sarcdv.github.io/' },
        { label: 'Personal Webpage 2 / Sito Personale 2', url: 'https://xelasaed-crypto.github.io/' },
        { label: 'Scientific Publications / Pubblicazioni Scientifiche', url: 'https://sarcdv.github.io/publications/publications.html' },
        { label: 'Profilo LinkedIn', url: 'https://www.linkedin.com/in/alessandro-sciarra-ph-d-52171a208' },
        { label: 'Github 1', url: 'https://github.com/sarcdv' },
        { label: 'Github 2', url: 'https://github.com/xelasaed-crypto/' },
        //{ label: 'ORCID Profile', url: 'https://orcid.org/0000-0002-1247-2772' }
      ]
    },
    'exp_metaltronica': {
      title: 'Senior Imaging Engineer, R&D',
      subtitle: 'Metaltronica S.p.A. | Gennaio 2026 - In corso',
      tags: ['GPU Monte Carlo', 'DBT', 'Medical Physics', 'CUDA', 'Image Processing Pipelines', '3D Reconstruction', 'X-Ray Mammography'],
      summaryEN: 'Responsible for the strategic development and management of advanced medical imaging technologies, focusing on GPU-accelerated simulations and processing pipelines grounded in physics. Key responsibilities include:\n\n' +
                 '• Monte Carlo GPU Simulations: Leading the development and GPU implementation of Monte Carlo algorithms (MC-GPU) to optimize radiation transport models and enhance Digital Breast Tomosynthesis (DBT) accuracy.\n' +
                 '• Image Processing Pipelines: Designing, optimizing, and deploying end-to-end image processing frameworks and 3D reconstruction pipelines for high-precision diagnostic imaging.\n' +
                 '• High-Performance CUDA Computing: Leveraging CUDA to accelerate heavy computational tasks, drastically reducing execution times for simulations and image processing workflows.\n' +
                 '• Applied Medical Physics: Applying fundamental imaging physics to drive software innovation, refine system performance, and maximize diagnostic image quality for patient care.',
      summaryIT: 'Sviluppo strategico e gestione di tecnologie avanzate di imaging medicale, con focus su simulazioni GPU-accelerate e pipeline di elaborazione basate sulla fisica dei sistemi X-ray. Attività principali:\n\n' +
                 '• Simulazioni Monte Carlo su GPU: Sviluppo e implementazione su GPU di algoritmi Monte Carlo per la modellazione del trasporto di radiazione e l\'ottimizzazione della Tomosintesi Mammaria (DBT).\n' +
                 '• Pipeline di Image Processing: Progettazione e ottimizzazione di framework di elaborazione e ricostruzione 3D delle immagini per garantire la massima accuratezza diagnostica.\n' +
                 '• Calcolo Ad Alte Prestazioni con CUDA: Utilizzo di CUDA per accelerare il calcolo computazionale, riducendo drasticamente i tempi di esecuzione delle simulazioni e dell\'image processing.\n' +
                 '• Fisica Medico-Nucleare Applicata: Integrazione dei principi fisici dell\'imaging nell\'architettura software per guidare l\'innovazione tecnologica e migliorare la qualità diagnostica.',
      links: [
        { label: 'Metaltronica S.p.A. Official Site', url: 'https://www.metaltronica.com' }
      ]
    },
    'exp_clairclinique': {
      title: 'Co-Founder & Lead AI Solutions Architect',
      subtitle: 'ClairClinique S.r.l. | Giugno 2025 - Marzo 2026',
      tags: ['AI Architecture', 'Computer Vision', 'Deep Learning', 'Biometrics', 'Mobile AI', 'Cloud Ecosystem', 'Product Strategy'],
      summaryEN: 'Led the strategic vision, AI architecture, and product engineering for proprietary personalized skincare solutions. Key responsibilities included:\n\n' +
                 '• Simphonie Platform: Spearheaded the architecture and deployment of a cloud-based AI ecosystem paired with the Opera device to process biometric data and generate dynamic, personalized skincare formulations.\n' +
                 '• Adagio Mobile Application: Directed the engineering of a mobile application leveraging deep learning and real-time computer vision facial scanning for instant, personalized skin diagnostics.\n' +
                 '• Technical & Strategic Leadership: Bridged high-level product vision with deep technical execution, aligning AI model deployment with commercial goals and user experience.',
      summaryIT: 'Gestione della visione strategica, dell\'architettura AI e dello sviluppo prodotti per tecnologie proprietarie di skincare personalizzata. Attività principali:\n\n' +
                 '• Piattaforma Simphonie: Progettazione e sviluppo di un ecosistema AI in cloud integrato con il dispositivo Opera per l\'elaborazione di dati biometrici e la generazione di routine di skincare su misura.\n' +
                 '• Mobile App Adagio: Direzione dello sviluppo di un\'applicazione mobile basata su deep learning e scansione facciale in tempo reale tramite computer vision per l\'analisi personalizzata della pelle.\n' +
                 '• Leadership Tecnico-Scientifica: Connessione tra visione di prodotto e implementazione architetturale AI, allineando lo sviluppo software alle strategie di business.',
      links: [
        { label: 'ClairClinique Official Site', url: 'https://clairclinique.com' }
      ]
    },
    'exp_deas': {
      title: 'Senior Data Scientist',
      subtitle: 'Deas S.p.a. | Marzo 2023 - Settembre 2024',
      tags: ['Cybersecurity', 'IDPS', 'Data Exfiltration', 'Graph Models', 'Malware Analysis', 'LLM & RAG', 'Teaching'],
      summaryEN: 'Led the research and development of Machine & Deep Learning solutions for advanced cybersecurity applications. Key responsibilities included:\n\n' +
                 '• AI-Powered Security: Designed and developed AI models for automatic malware detection/classification and graph-based models for real-time data exfiltration detection.\n' +
                 '• Intrusion Detection: Engineered an AI-driven Intrusion Detection and Prevention System (IDPS) and automated data analysis pipelines.\n' +
                 '• LLM & RAG Integration: Implemented Retrieval-Augmented Generation (RAG) models to optimize LLM responses via authoritative knowledge bases, integrating them into chatbots and malware analysis workflows.\n' +
                 '• AI-Assisted Malware Analysis: Applied LLMs to assist and accelerate malware analysis tasks.\n' +
                 '• Education: Conducted teaching activities on "AI for Cybersecurity".',
      summaryIT: 'Responsabile della ricerca e dello sviluppo di soluzioni di Machine & Deep Learning per applicazioni avanzate di cybersecurity. Attività principali:\n\n' +
                 '• AI applicata alla Sicurezza: Sviluppo di modelli AI per il rilevamento e la classificazione automatica del malware e modelli basati su grafi per il rilevamento in tempo reale della data exfiltration.\n' +
                 '• Rilevamento Intra-Rete: Progettazione di un sistema AI-based di Intrusion Detection and Prevention (IDPS) e pipeline di analisi automatizzata dei dati.\n' +
                 '• Integrazione LLM & RAG: Implementazione di modelli Retrieval-Augmented Generation (RAG) per ottimizzare le risposte degli LLM tramite basi di conoscenza autorevoli, integrandoli in chatbot e workflow di analisi.\n' +
                 '• Malware Analysis Assistita da AI: Utilizzo di Large Language Models per l\'analisi automatizzata e guidata del malware.\n' +
                 '• Formazione: Attività di docenza sul tema "AI per la Cybersecurity".',
      links: [
        { label: 'Deas S.p.a. Official Site', url: 'https://deas.it' }
      ]
    },
    'exp_ovgu': {
      title: 'Research Associate, AI Scientist',
      subtitle: 'MedDigit Group, Otto-von-Guericke University | Settembre 2018 - Febbraio 2023',
      tags: ['Medical Imaging', 'Deep Learning', 'fMRI', 'Image Enhancement', 'Anomaly Detection', 'Matlab & SPM', 'Teaching'],
      summaryEN: 'Led research on Machine & Deep Learning methods applied to medical imaging analysis and neuroimaging pipelines. Key responsibilities included:\n\n' +
                 '• Image Enhancement & Synthesis: Developed ML/DL algorithms for automated image enhancement, data imputation, and missing modality synthesis in medical applications.\n' +
                 '• Super-Resolution & Reconstruction: Implemented models for super-resolution, motion artifact removal, and contrast translation across medical imaging modalities.\n' +
                 '• Computer Vision Tasks: Applied AI for anomaly detection, high-accuracy image classification, and multi-class anatomical segmentation.\n' +
                 '• Automated Pipeline Engineering: Designed and deployed end-to-end processing pipelines for automated magnetic resonance imaging (MRI) analysis.\n' +
                 '• Academic Teaching: Taught in the "Integrative Neuroscience" program, focusing on functional MRI (fMRI) theory and data processing using Matlab and SPM (Statistical Parametric Mapping).',
      summaryIT: 'Attività di ricerca e sviluppo su metodologie di Machine e Deep Learning applicate all\'analisi di immagini mediche e neuroimaging. Attività principali:\n\n' +
                 '• Enhancement e Sintesi di Immagini: Sviluppo di algoritmi ML/DL per il miglioramento automatico delle immagini, l\'imputazione dei dati mancanti e la sintesi di modalità di imaging.\n' +
                 '• Super-Resolution e Ricostruzione: Implementazione di modelli per super-resolution, rimozione degli artefatti da movimento e contrast translation.\n' +
                 '• Computer Vision Applicata: Modellazione per il rilevamento di anomalie, classificazione e segmentazione anatomica di immagini mediche.\n' +
                 '• Pipeline di Analisi MRI: Progettazione di pipeline automatizzate per l\'elaborazione e l\'analisi di immagini di risonanza magnetica.\n' +
                 '• Attività Didattica: Docenza nel corso "Integrative Neuroscience" su teoria ed elaborazione dati fMRI tramite Matlab e il toolbox SPM (Statistical Parametric Mapping).',
      links: [
        { label: 'MedDigit Group - OvGU', url: 'https://www.med.ovgu.de/' }
      ]
    },
    'exp_ovgu_assistant': {
      title: 'Research Assistant',
      subtitle: 'Dept. of Biomedical Magnetic Resonance, OvGU | Novembre 2016 - Agosto 2018',
      tags: ['MRI', 'ETL', 'Motion Correction', 'Image Reconstruction', 'Quality Assessment', 'Machine Learning', 'Data Analysis'],
      summaryEN: 'Conducted research on data analysis and processing techniques for advanced magnetic resonance imaging (MRI). Key responsibilities included:\n\n' +
                 '• Data Analysis & ETL: Designed and implemented ETL (Extract, Transform, Load) pipelines leveraging machine learning algorithms for complex data processing.\n' +
                 '• Prospective Motion Correction: Developed strategies and tools for prospective motion artifact correction in MRI acquisitions.\n' +
                 '• Image Reconstruction: Engineered specialized processing pipelines for MRI data reconstruction.\n' +
                 '• Automated Quality Control: Built an automated framework for magnetic resonance image quality assessment and validation.',
      summaryIT: 'Attività di ricerca e sviluppo focalizzata sull\'analisi dati e sull\'ottimizzazione delle tecniche di risonanza magnetica (MRI). Attività principali:\n\n' +
                 '• Analisi Dati & ETL: Sviluppo di pipeline ETL (Extract, Transform, Load) basate su algoritmi di machine learning per l\'elaborazione di dataset complessi.\n' +
                 '• Correzione Prospectica del Movimento: Progettazione di metodologie per la correzione in tempo reale (prospectiva) degli artefatti da movimento in MRI.\n' +
                 '• Ricostruzione Immagini MR: Sviluppo di pipeline software per la ricostruzione di immagini di risonanza magnetica.\n' +
                 '• Valutazione Qualitativa Automatica: Implementazione di un framework automatizzato per il controllo di qualità e la validazione delle immagini MR.',
      links: [
        { label: 'BMMR OvGU Department', url: 'https://www.bmmr.ovgu.de/' }
      ]
    },
    'exp_ovgu_phd': {
      title: 'Early-Stage Researcher (Marie-Curie Fellow)',
      subtitle: 'Dept. of Biomedical Magnetic Resonance, OvGU | Novembre 2013 - Ottobre 2016',
      tags: ['MRI', '7T & 3T Siemens', 'Optical Tracking', 'fMRI', 'Python & MATLAB', 'fMRI / SPM / FSL', 'Signal Processing'],
      summaryEN: 'Conducted cutting-edge neuroimaging research as a Marie-Curie Fellow on ultra-high field MRI scanners. Key responsibilities included:\n\n' +
                 '• Prospective Motion Correction: Developed and integrated prospective motion correction techniques in MRI using high-precision optical tracking systems.\n' +
                 '• Signal & Image Processing: Performed advanced data analysis and image processing using Python, MATLAB, SPM, FSL, and ImageJ.\n' +
                 '• Protocol Optimization: Designed and optimized acquisition protocols for high & ultra-high resolution in-vivo structural imaging and functional MRI (task & resting-state fMRI).\n' +
                 '• Web App Development: Built a web-based application for crowdsourced and expert subjective MR image quality assessment.\n' +
                 '• Ultra-High Field Expertise: Hands-on operational expertise on 7T Siemens Magnetom and 3T Siemens Skyra MRI scanners.',
      summaryIT: 'Attività di ricerca avanzata nel neuroimaging come Marie-Curie Fellow su scanner MRI a campo ultra-alto. Attività principali:\n\n' +
                 '• Correzione Prospectica del Movimento: Sviluppo e integrazione di tecniche per la correzione prospectica del movimento in MRI tramite sistemi di tracciamento ottico.\n' +
                 '• Elaborazione Segnali e Immagini: Analisi ed elaborazione di dati complessi mediante Python, MATLAB, SPM, FSL e ImageJ.\n' +
                 '• Ottimizzazione dei Protocolli: Progettazione e calibrazione di protocolli per imaging strutturale in-vivo ad altissima risoluzione e fMRI (task e resting-state).\n' +
                 '• Sviluppo Web Application: Progettazione di un\'applicazione web per la valutazione soggettiva e il controllo di qualità delle immagini MR.\n' +
                 '• Esperienza su Tomografi ad Alto Campo: Operatività e gestione avanzata di scanner MRI 7T Siemens Magnetom e 3T Siemens Skyra.',
      links: [
        { label: 'BMMR OvGU Department', url: 'https://www.bmmr.ovgu.de/' }
      ]
    },
    'exp_ieo': {
      title: 'Research Assistant',
      subtitle: 'IEO - European Institute of Oncology | Aprile 2012 - Marzo 2013',
      tags: ['Clinical MRI', 'Prostate Cancer', 'MATLAB & C++', 'GUI Development', 'Protocol Optimization', '1.5T Siemens Avanto', 'Teaching'],
      summaryEN: 'Conducted research and development on clinical MRI applications and quantitative imaging for oncology. Key responsibilities included:\n\n' +
                 '• Clinical Protocol Engineering: Developed and standardized multiparametric MRI protocols for prostate cancer diagnostics (SWI, DTI, ASL, bi-exponential diffusion models).\n' +
                 '• Sequence Optimization: Optimized research and clinical imaging protocols (Diffusion, Perfusion, SWI, T1/T2/T2* mapping) on 1.5T Siemens Magnetom Avanto scanners.\n' +
                 '• Software & GUI Development: Engineered custom signal and image processing algorithms and developed interactive GUIs in MATLAB and C++ for clinical data analysis.\n' +
                 '• Scanner Operations: High-level operational expertise on 1.5T Siemens Magnetom Avanto platforms.\n' +
                 '• Academic Teaching: Taught coursework on MRI Physics for radiographers at the University of Milan.',
      summaryIT: 'Attività di ricerca e sviluppo su applicazioni cliniche di risonanza magnetica e imaging quantitativo in oncologia. Attività principali:\n\n' +
                 '• Protocolli Clinici Oncologici: Sviluppo e standardizzazione di protocolli MRI multiparametrici per la diagnosi del tumore alla prostata (SWI, DTI, ASL, diffusione bi-esponenziale).\n' +
                 '• Ottimizzazione Sequenze: Calibrazione e ottimizzazione di protocolli di imaging clinico e di ricerca (Diffusione, Perfusione, SWI, mappatura T1/T2/T2*) su scanner 1.5T Siemens Avanto.\n' +
                 '• Sviluppo Software e GUI: Progettazione di algoritmi di elaborazione segnali/immagini e creazione di interfacce grafiche (GUI) in MATLAB e C++ per l\'analisi dati clinici.\n' +
                 '• Gestione Tomografi: Operatività e gestione avanzata di scanner MRI 1.5T Siemens Magnetom Avanto.\n' +
                 '• Docenza Universitaria: Insegnamento nel corso di Fisica della Risonanza Magnetica per le professioni sanitarie (Università degli Studi di Milano).',
      links: [
        { label: 'European Institute of Oncology (IEO)', url: 'https://www.ieo.it/' }
      ]
    },
    'exp_univaq': {
      title: 'Research Assistant',
      subtitle: 'Dept. of Health Sciences, University of L’Aquila | Settembre 2010 - Marzo 2012',
      tags: ['RF Coil Design', 'HTS Superconductors', 'PCB Design', 'NMR Hardware', 'Preclinical MRI', 'fMRI', 'Fluorescence Microscopy'],
      summaryEN: 'Conducted interdisciplinary research spanning MRI analysis, preclinical imaging, and custom radiofrequency (RF) hardware development. Key responsibilities included:\n\n' +
                 '• Hardware & RF Development: Designed and manufactured high-temperature superconducting (HTS) RF coils for 0.14T scanners and custom NMR hardware utilizing PCB design, oscilloscopes, spectrum analyzers, and network analyzers.\n' +
                 '• Preclinical & Cellular Research: Applied quantitative MRI, fMRI, and fluorescence microscopy to study lipid droplets in human brain tumor cells and Parkinson’s disease (PD) mechanisms in rat models.\n' +
                 '• Preclinical Scanner Operations: Maintained intermediate operational expertise on a 2.35T Bruker preclinical MRI scanner.\n' +
                 '• Advanced Analytical Methods: Developed novel computational and image analysis methods for processing MR and optical microscopy data.',
      summaryIT: 'Attività di ricerca interdisciplinare focalizzata sull\'analisi di dati MRI, imaging preclinico e sviluppo hardware di radiofrequenza (RF) personalizzato. Attività principali:\n\n' +
                 '• Sviluppo Hardware & Bobine RF: Progettazione e realizzazione di bobine RF ad alta temperatura di superconduzione (HTS) per scanner da 0.14T e componenti NMR personalizzati tramite progettazione PCB, analizzatori di rete, analizzatori di spettro e oscilloscopi.\n' +
                 '• Ricerca Preclinica e Cellulare: Applicazione di MRI, fMRI e microscopia a fluorescenza per lo studio dei droplet lipidici in cellule tumorali cerebrali umane e di modelli ratto per la malattia di Parkinson (PD).\n' +
                 '• Gestione Tomografi Preclinici: Operatività e gestione di scanner MRI preclinico Bruker 2.35T.\n' +
                 '• Metodologie di Analisi Avanzate: Sviluppo di nuovi metodi di elaborazione e analisi dati per immagini di risonanza magnetica e microscopia ottica.',
      links: [
        { label: 'University of L\'Aquila (UNIVAQ)', url: 'https://www.univaq.it/' }
      ]
    },
    'erasmus_placement': {
      title: 'Erasmus Placement Researcher',
      subtitle: 'Forschungszentrum Jülich | Gennaio 2010 - Giugno 2010',
      tags: ['T2* Mapping', 'Parkinson\'s Disease', 'Quantitative MRI', '3T Siemens', 'Iron Deposition', 'Neuroimaging'],
      summaryEN: 'Research activity focused on quantitative MRI techniques for neurodegenerative diseases. Key project:\n\n' +
                 '• Quantitative T2* Mapping: Investigated iron deposition in Parkinson\'s disease using advanced quantitative T2* relaxometry mapping.\n' +
                 '• In-Vivo 3T MRI Study: Acquired, processed, and analyzed high-field in-vivo MR datasets on a 3T Siemens platform at the Jülich Research Center.',
      summaryIT: 'Attività di ricerca incentrata su tecniche di risonanza magnetica quantitativa applicate alle malattie neurodegenerative. Progetto principale:\n\n' +
                 '• Mappatura T2* Quantitativa: Studio dell\'accumulo di ferro nella malattia di Parkinson tramite mappatura quantitativa del tempo di rilassamento T2*.\n' +
                 '• Studio In-Vivo su MRI 3T: Acquisizione, elaborazione e analisi di dataset di risonanza magnetica in-vivo ad alto campo su scanner 3T presso il Forschungszentrum Jülich.',
      links: [
        { label: 'Forschungszentrum Jülich', url: 'https://www.fz-juelich.de/' }
      ]
    },

    'internship': {
      title: 'R&D Engineering Intern',
      subtitle: 'NANOCAT S.r.l. / University of L’Aquila | Febbraio 2007 - Aprile 2007',
      tags: ['Nanotechnology', 'Thin Films', 'Sol-Gel Spin Coating', 'High-k Dielectrics', 'MEMS', 'PCB Design'],
      summaryEN: 'Hands-on R&D internship in nanotechnology, material science, and custom electronics. Key responsibilities included:\n\n' +
                 '• Nanocomposite Synthesis: Synthesized and characterized Hafnium Oxide ($HfO_2$) and Hafnium Tantalum Oxide ($HfTaO_x$) nanocomposite thin films via sol-gel spin coating process as high-k dielectric materials for MEMS applications.\n' +
                 '• Electronics & PCB Design: Designed, developed, and fabricated custom PCBs dedicated to electrical measurements and dielectric characterization.',
      summaryIT: 'Tirocinio di ricerca e sviluppo in nanotecnologie, scienza dei materiali ed elettronica applicata. Attività principali:\n\n' +
                 '• Sintesi di Nanocompositi: Sintesi e caratterizzazione di film sottili nanocompositi in Ossido di Afnio ($HfO_2$) e Ossido di Afnio-Tantalio ($HfTaO_x$) tramite processo sol-gel spin coating per l\'impiego come materiali ad alta costante dielettrica (high-k) in applicazioni MEMS.\n' +
                 '• Progettazione Elettronica & PCB: Progettazione, sviluppo e realizzazione di schede PCB dedicate alla caratterizzazione elettrica dei materiali.',
      links: [
        { label: 'University of L\'Aquila (UNIVAQ)', url: 'https://www.univaq.it/' }
      ]
    },
    /* 'exp_ovgu': {
      title: 'Research Associate & AI Scientist',
      subtitle: 'OvGU Magdeburg | Settembre 2018 - Febbraio 2023',
      tags: ['Ph.D. Thesis', 'Super-resolution', 'Motion Artifacts', 'Deep Learning'],
      summary: 'Sviluppo di algoritmi per il miglioramento automatico delle immagini MRI, sintesi dei dati mancanti, super-resolution, e rimozione degli artefatti da movimento cerebrale tramite Deep Learning.',
      links: [
        { label: 'Ph.D. Thesis Link', url: 'http://dx.doi.org/10.25673/118596' },
        { label: 'Ph.D. Thesis Presentation', url: 'https://sarcdv.github.io/projects/MoCo/presentation.html#1'}
      ]
    }, */
    /* 'proj_inteldigest': {
      title: 'IntelDigest',
      subtitle: 'OSINT Automation & LLM Intelligence',
      tags: ['OSINT', 'Vector Search', 'Domain LLM', 'Threat Assessment'],
      summary: 'Sistema di intelligenza OSINT modulare che combina raccolta automatizzata di fonti, recupero vettoriale e LLM di dominio per generare report di livello analitico e valutazioni sulle minacce.',
      links: [
        { label: 'IntelDigest Details', url: 'https://sarcdv.github.io/' }
      ]
    }, */
    'proj_maiat': {
      title: 'MAIAT',
      subtitle: 'Malware Analysis and Intelligence Tool',
      tags: ['Autonomous Agents', 'Malware Detection', 'Behavioral Analysis', 'Threat Intelligence', 'Cybersecurity AI', 'Static & Dynamic Analysis'],
      summaryEN: 'An autonomous AI agent-based framework designed for advanced malware detection, dynamic/static behavioral analysis, and threat attribution.',
      summaryIT: 'Framework autonomo basato su agenti AI per il rilevamento avanzato del malware, l\'analisi comportamentale dinamica/statica e l\'attribuzione delle minacce.',
      links: [
        { label: 'MAIAT Project Page', url: 'https://sarcdv.github.io/projects/MAIAT/index.html' },
        { label: 'MAIAT Presentation', url: 'https://sarcdv.github.io/projects/MAIATpresentation/presentation.html' },
        { label: 'MAIAT Blog Post', url: 'https://sarcdv.github.io/projects/Posts/maiat.html' }
      ]
    },
    /* 'proj_neurotwin': {
      title: 'NeuroTwin',
      subtitle: 'Digital Brain Twins in Healthcare',
      tags: ['Digital Twin', 'AI Healthcare', 'Predictive Modeling'],
      summary: 'Utilizzo di modelli di intelligenza artificiale per la creazione di gemelli digitali del cervello, abilitando predizioni accurate, monitoraggio continuo e terapie personalizzate in neurologia.',
      links: [
        { label: 'NeuroTwin Details', url: 'https://sarcdv.github.io/projects/NeuroTwin/index.html' }
      ]
    }, */
    'area_edu': {
      title: 'Academical Education / Formazione Accademica',
      subtitle: 'Ph.D., M.Sc., B.Sc. in Physics',
      tags: ['Otto-von-Guericke University', 'Università dell\'Aquila', 'Jülich Center'],
      summaryEN: 'Academic career developed across Italy and Germany, culminating in a PhD in Physics focused on advanced MRI methodologies and machine learning applications. Author and co-author of scientific publications, contributor to international research projects and recipient of a Marie Curie Fellowship. Extensive experience in scientific communication, teaching and multidisciplinary collaboration between physics, computer science, engineering and life sciences. Ph.D. in Physics (OvGU Magdeburg, 2013-2024), M.Sc. in Physics (Univ. dell\'Aquila, 2006-2010), Erasmus Placement (Jülich Research Center, 2010), B.Sc. in Physics (Univ. dell\'Aquila, 2001-2006)',
      summaryIT: 'Percorso accademico sviluppato tra Italia e Germania, culminato con un dottorato di ricerca in Fisica focalizzato su metodologie avanzate di risonanza magnetica e applicazioni del machine learning. Autore e coautore di pubblicazioni scientifiche, partecipante a progetti di ricerca internazionali e beneficiario di una borsa Marie Curie. Ampia esperienza nella comunicazione scientifica, nell\'insegnamento e nella collaborazione multidisciplinare tra fisica, informatica, ingegneria e scienze della vita. Dottorato in Fisica (OvGU Magdeburg, 2013-2024), Laurea Specialistica in Fisica (Univ. dell\'Aquila, 2006-2010), Erasmus Placement (Jülich Research Center, 2010), Laurea Triennale in Fisica (Univ. dell\'Aquila, 2001-2006)',
      links: [
        //{ label: 'Ph.D. Thesis Link', url: 'http://dx.doi.org/10.25673/118596' },
        //{ label: 'Ph.D. Thesis Presentation', url: 'https://sarcdv.github.io/projects/MoCo/presentation.html#1'}
      ]
    },
    'phd_thesis': {
      title: 'Ph.D. Thesis',
      subtitle: 'Prospective and deep learning based retrospective motion correction for brain magnetic resonance imaging',
      tags: ['MRI', 'Machine Learning', 'Deep Learning'],
      summaryEN: 'Magnetic Resonance Imaging (MRI) is one of the most important medical\
        imaging technique used every day world wide for clinical and research purposes.\
        It’s a non-invasive method and uses non ionising radiation. Compared with\
        other imaging techniques, such as Computed Tomography, MRI requires a longer\
        acquisition time. The long acquisition times can lead to have images degraded in\
        term of quality, because, subjects tend to move. The motion during the scan is the\
        cause of blurring and ghosting in the MR images. To avoid or to limit the presence\
        of motion artefacts (blurring or ghosting), there are available several approaches,\
        such as Prospective Motion Correction (PMC), Retrospective Motion Correction\
        (RMC) methods, etc..\
        The first part of this thesis work is aimed at assessing the impact of the prospective\
        motion correction using an in-bore optical tracking system, in case of high-resolution\
        structural imaging in regime of quasi-no motion. All the work was carried out at ultra\
         high field MRI, 7T. The structural imaging is only about ultra high\
        resolution imaging using several types of image weighting, specifically: T1, T2, T2*\
        and PD.\
        Considering the tremendous amount of attention received by machine and deep\
        learning over the last few years when applied to medical imaging, in this thesis\
        work it is also presented a second part where several preliminary deep learning retrospective\
        based motion artefacts detection and correction approaches were tested,\
        once more only for structural brain imaging. There are two sections, one dedicated\
        to the Image Quality Assessment (IQA) based on the Structural Similarity Index\
        Measure (SSIM) prediction through a deployment of a neural network and one last\
        section containing the application of several neural networks (i.e. Residual Network (ResNet)\
        and U-Network (U-Net)) for the retrospective correction of motion artefacts.',
      summaryIT: 'La risonanza magnetica (RM) è una delle più importanti tecniche di diagnostica\
       per immagini utilizzate quotidianamente in tutto il mondo, sia in ambito clinico che di ricerca.\
        Si tratta di una metodica non invasiva che impiega radiazioni non ionizzanti. \
        Rispetto ad altre tecniche di imaging, come la tomografia computerizzata, \
        la RM richiede tempi di acquisizione più lunghi. Tali tempistiche prolungate \
        possono comportare un degrado della qualità delle immagini, poiché i soggetti \
        tendono a muoversi; il movimento durante la scansione è infatti causa di sfocatura \
        (*blurring*) e artefatti fantasma (*ghosting*). Per evitare o limitare la presenza \
        di artefatti da movimento (sfocatura o *ghosting*), sono disponibili diversi approcci, \
        quali la correzione prospettica del movimento (PMC) e la correzione \
        retrospettiva del movimento (RMC). La prima parte di questo lavoro di tesi mira a valutare \
        l\'impatto della correzione prospettica del movimento mediante un sistema di \
        tracciamento ottico interno al magnete (*in-bore*), nel contesto dell\'imaging \
        strutturale ad alta risoluzione in condizioni di movimento quasi nullo. L\'intero lavoro \
        è stato condotto utilizzando un sistema RM ad altissimo campo (7 Tesla). L\'imaging strutturale \
        in questione si concentra sull\'acquisizione ad altissima risoluzione impiegando diverse\
        pesature dell\'immagine, nello specifico: T1, T2, T2* e PD. Considerando \
        il notevole interesse suscitato negli ultimi anni dal *machine learning* e \
        dal *deep learning* applicati alla diagnostica per immagini, la tesi presenta\
        anche una seconda parte in cui sono stati testati diversi approcci preliminari basati sul \
        *deep learning* per il rilevamento e la correzione retrospettiva degli artefatti da movimento, \
        sempre nell\'ambito dell\'imaging cerebrale strutturale. Questa sezione si articola in due parti:\
         una dedicata alla valutazione della qualità dell\'immagine (IQA) basata sulla stima dell\'indice \
         di similarità strutturale (SSIM) tramite una rete neurale, e un\'ultima sezione riguardante \
         l\'applicazione di diverse reti neurali (come la *Residual Network* o ResNet e la *U-Network* o U-Net)\
          per la correzione retrospettiva degli artefatti da movimento.',
      
      links: [
        { label: 'Ph.D. Thesis Link', url: 'http://dx.doi.org/10.25673/118596' },
        { label: 'Ph.D. Thesis Presentation', url: 'https://sarcdv.github.io/projects/MoCo/presentation.html#1'}
      ]
    },
    'area_skincare': {
      title: 'AI Skincare & MedTech',
      subtitle: 'Innovative Solutions for Personalized Skin Health',
      tags: ['Skin Care', 'Personalized Cream & Serum', 'AI & Computer Vision', 'Mobile App'],
      summary: '',
      links: []
    },
    'area_ai_cyber': {
      title: 'Artificial Intelligence & Cybersecurity',
      subtitle: 'Research & Applied AI in Security',
      tags: ['Cybersecurity', 'IDPS', 'Data Exfiltration', 'Malware Analysis', 'Graph Models', 'RAG', 'OSINT'],
      summaryEN: 'Research and development experience in Artificial Intelligence, Machine Learning, and LLMs applied to complex cybersecurity challenges. Core activities include AI-powered Intrusion Detection and Prevention Systems (IDPS), real-time data exfiltration detection using graph-based models, automated malware analysis, and Threat Intelligence. Specialized in building autonomous AI agents, Retrieval-Augmented Generation (RAG) frameworks for security workflows, and OSINT automation to enhance threat response, decision support, and security research.',
      summaryIT: 'Esperienza di ricerca e sviluppo nell\'ambito dell\'Intelligenza Artificiale, Machine Learning e LLM applicati a sfide complesse di cybersecurity. Le attività principali comprendono lo sviluppo di sistemi Intrusion Detection and Prevention (IDPS) basati su AI, il rilevamento in tempo reale della data exfiltration tramite modelli su grafi, l\'analisi automatizzata del malware e la Threat Intelligence. Specializzato nella realizzazione di agenti AI autonomi, framework Retrieval-Augmented Generation (RAG) per workflow di sicurezza e automazione OSINT a supporto del processo decisionale e della security research.',
      links: [
        //{ label: 'IntelDigest (OSINT Tool)', url: 'https://sarcdv.github.io/' },
        //{ label: 'MAIAT (Malware Analysis Agent)', url: 'https://sarcdv.github.io/' }
      ]
    }, 
    'exp_freelance': {
      title: 'AI Solutions Developer & Consultant',
      subtitle: 'Freelance | Ottobre 2024 - Dicembre 2025',
      tags: ['AI Agents', 'Multimodal RAG', 'NDR & Malware', 'CTI & OSINT', 'Digital Twins', 'Full-Lifecycle'],
      summaryEN: 'Engineered and deployed end-to-end AI solutions and architectures across cybersecurity, healthcare, and media domains. Key achievements include:\n\n' +
                 '• AI Agents & RAG Systems: Architected custom AI Agents, RAG, and Multimodal-RAG frameworks for domain-specific automation and virtual assistants.\n' +
                 '• Applied ML/DL Solutions: Engineered AI-driven Network Detection and Response (NDR) tools, virtual malware analyst agents, and digital twins.\n' +
                 '• CTI & Threat Analysis: Developed LLM-based pipelines for automated Cyber Threat Intelligence (CTI), OSINT collection, and full malware analysis (static, dynamic, behavioral) on PE, ELF, and MS-Office files.\n' +
                 '• End-to-End Delivery: Managed the complete development lifecycle from initial concept and prototyping to full production deployment.',
      summaryIT: 'Progettazione e deployment di soluzioni e architetture AI end-to-end per i settori cybersecurity, healthcare e media. Attività principali:\n\n' +
                 '• Agenti AI e Sistemi RAG: Sviluppo di Agenti AI autonomi, framework RAG e RAG Multimodali per l\'automazione di processo e l\'assistenza virtuale.\n' +
                 '• Soluzioni ML/DL Applicate: Realizzazione di strumenti AI-powered per Network Detection and Response (NDR), virtual malware analyst e sistemi Digital Twin.\n' +
                 '• Threat Intelligence & OSINT: Sviluppo di pipeline basate su LLM per Cyber Threat Intelligence (CTI), investigazioni OSINT e analisi malware completa (statica, dinamica e comportamentale) su file PE, ELF e MS-Office.\n' +
                 '• Ciclo di Vita Completo: Gestione dell\'intero processo di sviluppo, dal concept iniziale e prototipazione fino al deployment in produzione.',
      links: [
        { label: 'IntelDigest (OSINT Framework)', url: 'https://sarcdv.github.io/' },
        { label: 'MAIAT (Malware Analysis Agent)', url: 'https://sarcdv.github.io/' }
      ]
    },
    'area_skincare': {
      title: 'AI Skincare & MedTech (Entrepreneurship & Innovation)',
      subtitle: 'Area tematica | Fondazione startup & Tecnologie MedTech',
      tags: ['Entrepreneurship', 'Startup Founder', 'AI Skincare', 'Biometric Analysis', 'Computer Vision', 'Product Strategy', 'Edge & Cloud AI'],
      summaryEN: 'Represents my transition into tech entrepreneurship as Co-Founder and Lead AI Architect. This area focuses on pioneering AI-driven dermatological and cosmetic solutions by bridging advanced computer vision, biometric signal analysis, and IoT hardware integration into scalable commercial platforms.',
      summaryIT: 'Rappresenta il debutto nel mondo dell\'imprenditoria tech in qualità di Co-Founder e Lead AI Architect. Quest\'area sintetizza la convergenza tra intelligenza artificiale, analisi biometrica e dispositivi fisici per la creazione di soluzioni dermatologiche e cosmetiche ad altissima personalizzazione.',
      links: [
        { label: 'ClairClinique S.r.l.', url: 'https://clairclinique.com' }
      ]
    },
    'area_med_imaging': {
      title: 'Medical Imaging & Computational Physics',
      subtitle: 'Advanced Solutions for Medical Imaging and Research',
      tags: ['Medical Imaging', 'Physics', 'Monte Carlo Simulations', 'GPU Computing'],
      summaryEN: 'More than a decade of experience in medical imaging research and development, spanning MRI, Digital Breast Tomosynthesis (DBT), image reconstruction and quantitative image analysis. Experienced in GPU-accelerated Monte Carlo simulations, scientific computing and the development of advanced image-processing pipelines for both academic and industrial environments. Strong background in computational physics, signal processing and data-driven modelling.',
      summaryIT: 'Oltre dieci anni di esperienza nella ricerca e sviluppo in ambito imaging medicale, con attività che spaziano dalla risonanza magnetica (MRI) alla Digital Breast Tomosynthesis (DBT), dalla ricostruzione di immagini all\'analisi quantitativa. Esperto in simulazioni Monte Carlo accelerate su GPU, calcolo scientifico e sviluppo di pipeline avanzate per l\'elaborazione delle immagini in contesti sia accademici che industriali. Solido background in fisica computazionale, elaborazione del segnale e modellazione basata sui dati.',
      links: []
    }, 
    'master_thesis': {
      title: 'Master Thesis',
      subtitle: 'Development of high field MRI methods for the quantification of iron in human brain.',
      tags: ['MRI', 'Iron Quantification', 'High Field Imaging'],
      summaryEN: 'The thesis focused on the development and optimization of high-field MRI techniques for the accurate quantification of iron content in the human brain. This involved advanced imaging protocols, data acquisition strategies, and post-processing algorithms to enhance sensitivity and specificity in detecting iron deposits, which are relevant in various neurological conditions.',
      summaryIT: 'La tesi si è concentrata sullo sviluppo e l\'ottimizzazione di tecniche di risonanza magnetica ad alto campo per la quantificazione accurata del contenuto di ferro nel cervello umano. Ciò ha comportato l\'utilizzo di protocolli di imaging avanzati, strategie di acquisizione dei dati e algoritmi di post-elaborazione per migliorare la sensibilità e la specificità nella rilevazione dei depositi di ferro, rilevanti in diverse condizioni neurologiche.',
      links: []
    },
    'bachelor_thesis': {
      title: 'Bachelor Thesis',
      subtitle: 'Study by electronic spectroscopy and electrical measurements of the interaction between films of carbon nanotubes and organic molecules.',
      tags: ['Carbon Nanotubes', 'Electronic Spectroscopy', 'Organic Molecules'],
      summaryEN: 'The thesis investigated the interactions between carbon nanotube films and various organic molecules using electronic spectroscopy and electrical measurements. The study aimed to understand the electronic properties and potential applications of these hybrid materials in nanotechnology and electronics.',
      summaryIT: 'La tesi ha studiato le interazioni tra film di nanotubi di carbonio e diverse molecole organiche utilizzando spettroscopia elettronica e misurazioni elettriche. L\'obiettivo dello studio era comprendere le proprietà elettroniche e le potenziali applicazioni di questi materiali ibridi nella nanotecnologia e nell\'elettronica.',
      links: []
    },
    'proj_fileanalysis': {
      title: 'File Analyzer Web App',
      subtitle: 'Rust & Web-Based Malware / File Analysis Tool',
      tags: ['Rust', 'Web Security', 'File Analysis', 'Malware Analysis', 'Static Analysis', 'Web App'],
      summaryEN: 'A high-performance web application built with Rust designed for rapid static file inspection, security analysis, and payload metadata extraction.',
      summaryIT: 'Un\'applicazione web ad alte prestazioni sviluppata in Rust progettata per l\'ispezione statica rapida dei file, l\'analisi di sicurezza e l\'estrazione di metadati.',
      links: [
        { label: 'GitHub Repository', url: 'https://github.com/sarcDV/RustFileAnalyzerWebApp' }
      ]
    },

    'proj_osint_monitor': {
      title: 'OSINT Global Monitor',
      subtitle: 'Real-Time Intelligence Dashboard',
      tags: ['OSINT', 'AI Intelligence', 'PHP & JS', 'Puter.js', 'Threat Assessment', 'Interactive Map', 'Server-Side Caching'],
      summaryEN: 'A real-time OSINT intelligence platform utilizing interactive geographical mapping and AI to generate automated country threat reports, session-isolated analytical chat, and server-side cached threat assessments.',
      summaryIT: 'Piattaforma di intelligence OSINT in tempo reale che utilizza mappe geografiche interattive e AI per generare report automatizzati di minaccia per paese, chat analitica isolata per sessione e valutazioni memorizzate lato server.',
      links: [
        { label: 'GitHub Repository', url: 'https://github.com/xelasaed-crypto/mini-demo-en' }
      ]
    },
}
};