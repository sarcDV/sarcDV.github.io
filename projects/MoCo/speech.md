Discorso sulla Correzione del Movimento in Risonanza Magnetica
Buongiorno a tutti. Oggi vi parlerò della correzione del movimento nella Risonanza Magnetica per Immagini.

Introduzione alla Risonanza Magnetica
La Risonanza Magnetica, o MRI, è una tecnica di imaging non invasiva che utilizza forti campi magnetici e onde radio per produrre immagini dettagliate di organi e tessuti. [1]
A differenza delle radiografie o delle scansioni TC, la MRI non utilizza radiazioni ionizzanti, rendendola una procedura sicura per la maggior parte dei pazienti. [1]
Come funziona la Risonanza Magnetica?
Gli spin dei protoni nel corpo inizialmente presentano orientamenti casuali nello spazio. [2]
Un forte campo magnetico induce l'allineamento degli spin dei protoni. [2]
Impulsi di radiofrequenza inducono la precessione in un sottoinsieme di spin dei protoni. [2]
Dopo l'impulso, questi spin subiscono un rilassamento tornando ai loro orientamenti di equilibrio, con conseguente emissione di segnali rilevabili. [2]
I segnali emessi vengono acquisiti ed elaborati per generare un'immagine diagnostica. [2]
Artefatti da Movimento in Risonanza Magnetica
Una delle sfide nella Risonanza Magnetica è la presenza di artefatti da movimento. [3]
Questi artefatti sono distorsioni o errori nelle immagini causati dal movimento del paziente durante il processo di scansione. [3]
Gli artefatti da movimento possono degradare significativamente la qualità dell'immagine, rendendo difficile la diagnosi. [3]
Possono essere causati da movimenti volontari del paziente, movimenti fisiologici involontari o tempi di scansione lunghi. [3]
I tipi comuni di artefatti da movimento includono artefatti ghosting, artefatti di sfocatura e artefatti di codifica di fase. [3]
Gli artefatti di spostamento chimico, sebbene non strettamente correlati al movimento, possono essere esacerbati dal movimento del paziente e manifestarsi come un disallineamento tra i segnali di grasso e acqua. [3]
Tecniche di Correzione del Movimento
Esistono due approcci principali alla correzione del movimento nella Risonanza Magnetica:

Correzione del Movimento Prospettica (PMC):
Comporta il monitoraggio in tempo reale del movimento del paziente durante la scansione mediante sistemi di tracciamento del movimento. [4]
Quando viene rilevato il movimento, i parametri di imaging vengono regolati dinamicamente per compensare il movimento. [4]
Ciò si ottiene utilizzando trasformazioni affini per allineare le immagini in tempo reale. [4]
La PMC è particolarmente vantaggiosa per le scansioni ad alta risoluzione, anche in assenza di movimenti significativi. [5]
Può essere integrata con varie sequenze di imaging; l'efficacia varia a seconda della sequenza e del tipo di movimento. [4]
Correzione del Movimento Retrospettiva (RMC):
Comporta tecniche di post-elaborazione applicate dopo la scansione per correggere gli artefatti da movimento nelle immagini acquisite. [6]
Le tecniche di deep learning stanno mostrando risultati promettenti nella RMC. [6]
Obiettivo della Tesi: Correzione Avanzata del Movimento in Risonanza Magnetica
L'obiettivo generale di questa tesi è quello di investigare e affrontare la sfida della correzione del movimento nella Risonanza Magnetica attraverso l'applicazione di metodologie di Correzione del Movimento Prospettica (PMC) e Correzione del Movimento Retrospettiva (RMC) basata sul Deep Learning. [7]

Correzione del Movimento Prospettica
Questa tesi si concentra sullo sviluppo di tecniche per la correzione del movimento a intensità di campo ultra elevata (7 Tesla) nella Risonanza Magnetica. [7]
L'obiettivo è quello di ottenere una correzione del movimento accurata in un regime di movimento minimo. [7]
I metodi sono applicati esclusivamente all'imaging strutturale del cervello ad alta risoluzione. [7]
Esperimento PMC

L'esperimento ha utilizzato uno scanner MRI per tutto il corpo a 7T (Siemens Healthineers, Erlangen, Germania), una bobina per la testa a 32 canali (Nova Medical, Wilmington, MA, USA) e un sistema di tracciamento ottico del movimento (OMTS), Metria Innovation Inc., Milwaukee, WI, USA. [8]
Sono stati scansionati 21 volontari sani nel corso di due sessioni indipendenti di 75 minuti (14 maschi, 31,5 ± 6,1 anni, e 7 femmine, 27,3 ± 3,4 anni). [8]
Valutazione della Qualità dell'Immagine Soggettiva

Quattro esperti con oltre cinque anni di esperienza nella valutazione della qualità dell'immagine RM hanno esaminato le immagini. [8, 9]
I valutatori hanno eseguito confronti affiancati di immagini con e senza PMC, con presentazioni randomizzate per evitare pregiudizi. [10]
La qualità dell'immagine è stata valutata da 1 (peggiore) a 10 (migliore) in base agli artefatti da movimento. [10]
Valutazione della Qualità dell'Immagine Oggettiva

Le metriche di valutazione oggettiva includevano la forza media del bordo (AES) e l'entropia del gradiente (GE). [10]
L'AES misura la forza media dei bordi in un'immagine, indicando la chiarezza e la nitidezza dei dettagli strutturali. [10]
La GE valuta la casualità e la complessità della distribuzione del gradiente, riflettendo la trama e il contrasto complessivi dell'immagine. [10]
Risultati Chiave del PMC

La PMC migliora significativamente la qualità dell'immagine nelle scansioni ad alta risoluzione. [11]
La maggior parte delle immagini con PMC attivata ha mostrato una qualità elevata o molto elevata. [11]
Solo tre scenari hanno mostrato un miglioramento statisticamente significativo, ma nel complesso le misure soggettive e oggettive indicano una migliore qualità con la PMC. [11]
Cinque gruppi su sei hanno mostrato una qualità dell'immagine superiore con la PMC. [11]
Un gruppo ha mostrato risultati incoerenti tra metriche soggettive e oggettive. [11]
La PMC è vantaggiosa per le scansioni ad alta risoluzione anche in assenza di movimenti deliberati. [5]
È efficace per i partecipanti sani e collaborativi. [5]
Limitazioni del PMC

Un numero limitato di scenari ha mostrato un miglioramento statisticamente significativo. [5]
Alcuni casi hanno mostrato incongruenze tra misure soggettive e oggettive. [5]
La comparabilità dei modelli di movimento per PMC attivata e disattivata non è sempre coerente. [5]
Alcuni gruppi non hanno mostrato una chiara superiorità nelle metriche di qualità dell'immagine. [5]
L'efficacia della PMC diminuisce con livelli di movimento molto elevati. [9]
Sono necessarie ulteriori tecniche o l'integrazione con la RMC per casi estremi o pazienti non collaborativi. [9]
L'efficacia è più pronunciata nei soggetti collaborativi. [9]
Ci sono sfide aggiuntive nell'applicazione della PMC a pazienti non collaborativi senza misure supplementari. [9]
Correzione del Movimento Retrospettiva Basata sul Deep Learning
Questa tesi valuta l'efficacia dei modelli di deep learning nel prevedere e correggere gli artefatti da movimento. [7]
Viene utilizzato l'indice di similarità strutturale (SSIM) per valutare quantitativamente i miglioramenti della qualità dell'immagine. [7]
Vengono sviluppati e testati vari modelli personalizzati progettati per affrontare tipi specifici di artefatti da movimento nella Risonanza Magnetica del cervello. [7]
Intelligenza Artificiale nell'Imaging Medico
L'intelligenza artificiale (IA) è la simulazione dei processi di intelligenza umana da parte di macchine, in particolare sistemi informatici. [12]
Il deep learning è un sottoinsieme dell'IA che utilizza reti neurali con molti livelli per analizzare vari fattori dei dati. [12]
Ruolo dell'IA nella Risonanza Magnetica

Gli algoritmi di intelligenza artificiale possono elaborare e analizzare grandi volumi di dati MRI in modo rapido e accurato. [12]
I modelli di deep learning eccellono nell'identificare schemi complessi nei dati di imaging, inclusi gli artefatti da movimento. [12]
Approcci di Deep Learning
Le reti neurali convoluzionali (CNN) sono comunemente utilizzate per attività di elaborazione delle immagini, inclusa la rilevazione degli artefatti. [13]
Le reti generative avversarie (GAN) possono essere impiegate per generare immagini di alta qualità da dati corrotti. [13]
L'apprendimento per rinforzo ha il potenziale per ottimizzare le strategie di correzione del movimento in tempo reale. [13]
Vantaggi dell'Utilizzo dell'IA e del Deep Learning
Miglioramento della precisione: il rilevamento e la correzione migliorati degli artefatti da movimento portano a una migliore qualità dell'immagine. [13]
Efficienza: riduce la necessità di scansioni ripetute, risparmiando tempo e risorse. [13]
Automazione: semplifica il flusso di lavoro negli ambienti clinici, consentendo ai radiologi di concentrarsi sulla diagnosi. [13]
Valutazione della Qualità dell'Immagine Tramite la Previsione SSIM
Importanza della Qualità dell'Immagine

Gli artefatti da movimento possono ridurre l'accuratezza diagnostica. [14]
Potrebbero essere necessarie scansioni ripetute per evitare diagnosi errate. [14]
Valutazione della Qualità dell'Immagine (IQA)

L'IQA è un processo rapido e automatizzato per valutare le immagini RM. [14]
L'obiettivo è determinare se le immagini sono diagnosticamente affidabili e prive di artefatti. [14]
Sfide dell'IQA

Valutazione dispendiosa in termini di tempo e soggettiva. [14]
La diversa esperienza tra i lettori porta a risultati incoerenti. [14]
La mancanza di immagini di riferimento complica la valutazione. [14]
Proposta di Soluzione

Questa tesi propone lo sviluppo di uno strumento IQA automatizzato basato su SSIM (Structural Similarity Index). [15]

Lo strumento identifica gli artefatti da movimento e misura la distorsione. [15]
È applicabile a vari contrasti di immagini RM (T1, T2, PD, FLAIR). [15]
Incorpora l'aumento del contrasto per una gamma di ponderazione più ampia. [15]
Metodologia per la Previsione SSIM

Sono stati utilizzati due metodi per produrre artificialmente immagini corrotte: [16]
Un metodo sviluppato internamente. [16]
Un'implementazione di Shaw et al. utilizzando la libreria TorchIO. [16]
Sono stati utilizzati modelli ResNets con due profondità: ResNet-18 e ResNet-101. [16]
Processo di Addestramento per la Previsione SSIM

Selezione della fetta: fetta 2D casuale (orientamento assiale, sagittale o coronale). [17]
Aumento del contrasto: applicazione casuale di uno dei quattro algoritmi: regolazione gamma, regolazione logaritmica, regolazione sigmoidea, regolazione adattiva dell'istogramma. [17]
Corruzione da movimento: applicazione della corruzione da movimento utilizzando TorchIO o l'algoritmo interno. [17]
Calcolo SSIM: determinazione dello SSIM tra le immagini di input e quelle corrotte. [17]
Addestramento del modello: utilizzo dell'immagine corrotta e dello SSIM per l'addestramento. [17]
Dataset Utilizzati per la Previsione SSIM

Addestramento: 200 volumi [17]
Convalida: 50 volumi [17]
Test: 50 volumi [17]
Fonti: dataset IXI, Sito-A (3T), Sito-B (7T), vari scanner. [17]
Riassegnazione di campionamento per una risoluzione isotropica di 1,00 mm³. [17]
Parametri di Addestramento per la Previsione SSIM

L'addestramento è stato condotto con e senza aumento del contrasto. [17]
Tasso di apprendimento: 1e−3 [17]
Dimensione del batch: 100 [17]
Funzione di perdita: errore quadratico medio (MSE) [17]
Ottimizzatore: Adam [17]
Epoche: 2000 [17]
Dimensione dell'immagine: 256x256 [17]
Valutazione delle Prestazioni del Modello SSIM

SSIM previsto vs. SSIM di verità fondamentale (10.000 immagini selezionate casualmente). [18]
Calcolo dei residui per le prestazioni del modello. [18]
Attività di previsione convertita in classificazione con 3, 5 e 10 classi. [18]
Test del Dataset Clinico per la Previsione SSIM

Sono state incluse immagini di cinque soggetti con scansioni diverse. [18]
Valutazione soggettiva della qualità da parte di un esperto utilizzando uno schema di classificazione: [18]
Classe 1: buona qualità (SSIM 0,85-1,00) [18]
Classe 2: qualità sufficiente (SSIM 0,60-0,85) [18]
Classe 3: qualità insufficiente (SSIM 0,00-0,60) [18]
Confronto con MRIQC

MRIQC è stato utilizzato come base di riferimento per il confronto. [19]
Limitazioni: funziona solo su immagini in formato BIDS correttamente trasformate. [19]
Metriche utilizzate: CNR, CJV, EFC, QI per le immagini strutturali. [19]
I punteggi SIQA sono stati mediati e normalizzati per l'analisi della concordanza. [19]
CNR: rapporto contrasto-rumore, , dove: [19]
= contrasto tra l'oggetto e lo sfondo. [19]
= livello di rumore nell'immagine o nel segnale. [19]
CJV: coefficiente di variazione congiunta, , dove e indicano la deviazione standard e l'intensità media di un dato tessuto. [19]
EFC: criterio di focalizzazione dell'entropia, , dove è il numero di pixel dell'immagine e è il modulo del valore complesso del -esimo pixel dell'immagine, qui indicato come "luminosità" del pixel. Se tutta l'energia dell'immagine fosse in un pixel, avremmo la massima luminosità del pixel possibile, , data da. [20]
QI: indice di qualità. [20]
Risultati della Previsione SSIM

Migliori prestazioni: ResNet-18 con aumento del contrasto [21]
Precisione: [21]
97% (3 classi) [21]
95% (5 classi) [21]
89% (10 classi) [21]
Impatto dell'aumento del contrasto: [21]
Deviazione standard ridotta [21]
Previsioni SSIM medie migliorate [21]
Risultati del Confronto con MRIQC

Scansioni elaborate: 12 su 36 a causa della non conformità [19]
Tassi di concordanza: [19]
CNR: 17% [19]
CJV: 17% [19]
EFC: 33% [19]
QI: 75% [19]
Discussione sulla Previsione SSIM

L'aumento del contrasto ha migliorato le prestazioni. [22]
La precisione è diminuita con l'aumentare delle classi. [22]
Le matrici di confusione hanno mostrato tassi di errata classificazione più elevati con l'aumentare delle classi. [22]
Questo lavoro è in fase di revisione: IEEE Access, "Automated SSIM Regression for Detection and Quantification of Motion Artefacts in Brain MR Images". [22]
Correzione Retrospettiva del Movimento delle Immagini RM Utilizzando il Deep Learning Assistito da Prior
Preparazione dei Dati

Dataset: immagini T1, T2 e PD di 100 partecipanti dal dataset IXI. [23]
Corruzione da movimento: [23]
Trasformazione RandomMotion modificata di TorchIO. [23]
Movimenti simulati: rotazione da -1,75 a +1,75 gradi (nessuna traslazione). [23]
Prior delle Immagini

Fette simili: [23]
10 fette simili (stessa posizione, stesso contrasto) da soggetti diversi. [23]
Utilizzate per la correzione del movimento delle immagini pesate in T2. [23]
Contrasti diversi: [23]
Utilizzo di immagini T1 e PD dallo stesso soggetto come prior per le immagini T2 corrotte dal movimento. [23]
Architetture di Rete

Baseline: ReconResNet e U-Net modificate. [23]
Tecniche di fornitura del prior: [23]
Rete multicanale: immagine corrotta dal movimento concatenata con i prior. [23]
Rete a doppio ramo: ramo principale per l'immagine corrotta, ramo ausiliario per i prior. [23]
Risultati e Discussione del Deep Learning Assistito da Prior

Efficacia: [24]
Le fette simili non hanno migliorato la correzione del movimento. [24]
Contrasti diversi hanno migliorato significativamente la correzione del movimento. [24]
Prestazioni: [24]
Gli approcci multicanale e a doppio ramo hanno superato ReconResNet. [24]
Solo la strategia multicanale ha migliorato significativamente U-Net. [24]
Conclusione del Deep Learning Assistito da Prior

Risultati chiave: [25]
Le immagini a contrasto aggiuntive dello stesso soggetto sono più vantaggiose delle fette simili di soggetti diversi. [25]
Gli approcci multicanale e a doppio ramo hanno mostrato miglioramenti, in particolare per ReconResNet. [25]
Lavori futuri: [25]
Esplorare l'approccio a doppio ramo e l'impatto delle connessioni di salto. [25]
Espandere il dataset e introdurre diversi tipi di corruzione da movimento per la robustezza. [25]
Questo lavoro è stato presentato alla 34a Conferenza sui Sistemi di Elaborazione delle Informazioni Neurali (NeurIPS 2020), Vancouver, Canada. [25]
Correzione Retrospettiva del Movimento (RMC) Generalizzata Utilizzando il Deep Learning e l'Aumento del Contrasto
Introduzione

I metodi precedenti richiedevano prior delle immagini, limitando la generalizzabilità. [26]
Questa ricerca introduce un metodo di deep learning per la RMC nella Risonanza Magnetica utilizzando: [26]
Modello ReconResNet. [26]
Nuove tecniche di aumento del contrasto e di corruzione artificiale del movimento. [26]
Metodi

Dati: [26]
Raccolti da scanner MRI Siemens 3T e 7T. [26]
Dataset: 600 volumi di immagini per l'addestramento, 160 per la convalida e 158 per il test. [26]
Sono state considerate solo le fette contenenti tessuti cerebrali. [26]
Elaborazione dei dati: [26]
Selezione casuale delle fette dai volumi 3D. [26]
Rimozione del rumore e normalizzazione Min-Max. [26]
Padding e ridimensionamento a 256x256. [26]
Aumento del contrasto (come per la previsione SSIM). [26]
Corruzione da movimento (come per la previsione SSIM): [27]
Due tecniche di corruzione artificiale del movimento: [27]
Funzioni TorchIO: ghosting casuale e movimento. [27]
Metodo interno: simula la corruzione del movimento del mondo reale utilizzando parametri casuali. [27]
Modello e addestramento: [27]
Versione più profonda di ReconResNet con: [27]
64 mappe di caratteristiche, 56 blocchi residui e attivazione PReLU. [27]
Funzione di perdita percettiva utilizzando un modello ResNeXt 101 preaddestrato. [27]
Ottimizzato utilizzando Adam con un tasso di apprendimento di 3x10⁻⁴ per 2000 epoche. [27]
Risultati e Discussione della RMC Generalizzata

Miglioramento medio dello SSIM da 0,688 a 0,886. [28]
Prestazioni costanti in diverse esecuzioni sperimentali. [28]
I risultati qualitativi mostrano un miglioramento significativo della qualità dell'immagine. [28]
Conclusione della RMC Generalizzata

Il metodo proposto dimostra un'ampia generalizzazione su vari contrasti e artefatti MRI. [28]
Notevoli miglioramenti nella qualità dell'immagine e nella robustezza. [28]
I lavori futuri potrebbero esplorare la combinazione di tecniche di correzione del movimento prospettiche e retrospettive. [28]
Conclusione Generale
Gli artefatti da movimento sono una sfida significativa nella Risonanza Magnetica, ma i progressi nelle tecniche di correzione del movimento prospettiche e retrospettive, in particolare quelle che sfruttano l'IA e il deep learning, stanno fornendo soluzioni efficaci.
Questi progressi promettono di migliorare la qualità dell'immagine, l'accuratezza diagnostica e l'efficienza nella Risonanza Magnetica, a beneficio di pazienti e operatori sanitari.
La continua ricerca e sviluppo in questo settore perfezionerà ulteriormente queste tecniche e ne amplierà l'applicabilità a vari scenari clinici.
Grazie per l'attenzione. Spero che questa presentazione vi abbia fornito una migliore comprensione della correzione del movimento nella Risonanza Magnetica e degli entusiasmanti progressi che si stanno compiendo attraverso l'IA e il deep learning.
