# slide 1
Good morning, everyone, and welcome to my thesis presentation. My name is Alessandro Sciarra, and I am a PhD candidate. Today, I will be discussing "prospective and deep learning based retrospective motion correction for magnetic resonance imaging."

# slide 2
What is MRI?
MRI is a non-invasive imaging technique that uses strong magnetic fields and radio waves to create detailed images of organs and tissues. This safe method allows healthcare professionals to diagnose and monitor various conditions without the need for surgery or exposure to radiation.
We can say that MRI is a powerful tool that enhances our understanding of the human body and improves patient care.

# slide 3
how MRI works?
Initially, proton spins in our body are randomly oriented. When a strong magnetic field is applied, these spins align with the field. Next, radiofrequency pulses induce precession in a subset of these aligned spins, causing them to precess.

Once the pulse is turned off, the spins relax back to their original positions, emitting detectable signals in the process. These signals are then acquired and processed to create detailed diagnostic images.

# slide 4
This slide provides a comprehensive overview of the image acquisition process for a T2*-weighted 2D gradient image in MRI.

- (a) Pulse Sequence Diagram: This diagram illustrates the timing and application of the radiofrequency (RF) pulses and the gradient fields during the MRI scan. The RF pulse is applied first, followed by the slice selection gradient (G_SS), phase encoding gradient (G_PE), and frequency encoding gradient (G_FE). The signal is then acquired during the readout period.

- (b) k-Space 2D Image: This image represents the raw data collected from the MRI scan. The k-space is a frequency domain where data points are sampled along the phase encoding (PE) and frequency encoding (FE) directions. This raw data contains all the information necessary to reconstruct the final image.

- (c) Reconstructed 2D Image: By applying a 2D Fourier Transform (2DFT) to the k-space data, we obtain the reconstructed 2D image. This final image provides detailed anatomical information, which is crucial for diagnosing and understanding various neurological conditions.

# slide 5
motion artefacts in MRI  are distortions or errors in the images caused by various types of movement during the scanning process.

- Causes of Motion Artefacts:
  + Patient Movement: Voluntary or involuntary movements, such as shifting or twitching, can introduce artefacts.
  + Physiological Motion: Natural movements like heartbeat, respiration, or bowel peristalsis can lead to artefacts.
  + Long Scan Times: Extended scan durations increase the likelihood of patient movement and resultant artefacts.

- Types of Motion Artefacts:
  + Ghosting Artefacts: Repetitive patterns or duplications of the original image, often caused by periodic movements.
  + Blurring Artefacts: Loss of image sharpness and detail due to continuous or intermittent movements.
  + Phase Encoding Artefacts: Displacements or streaks in the image arising from inconsistencies during the phase encoding process.
  + Chemical Shift Artifacts: Not purely motion-related but can be worsened by movement, causing misalignment between fat and water signals.

These artefacts can significantly impact the diagnostic quality of MRI images, making it crucial to minimize patient movement and optimize scanning protocols.

# slide 6

State-of-the-Art in Motion Correction
- Prospective Motion Correction (PMC): This technique involves real-time adjustments during MRI acquisition. By tracking and correcting motion in real-time, PMC can significantly reduce artefacts caused by patient movement during the scan.
- Retrospective Motion Correction (RMC): RMC techniques are applied post-processing to correct motion artefacts. This approach allows for the correction of motion artefacts after the scan has been completed, utilizing advanced algorithms to improve image quality.
- Data Acquisition Strategies: Techniques such as PROPELLER, radial/spiral sampling, and fast-imaging methods are utilized to enhance image acquisition. These strategies help in reducing motion artefacts by improving the robustness of the data acquisition process.

Recent AI Advances
- Deep Learning Approaches: These approaches leverage neural networks to reduce motion artefacts and estimate motion. Deep learning models can learn complex patterns and correlations in data, leading to more effective correction of motion artefacts.
- Self-Supervised Learning: This technique employs motion-guided implicit neural representations for correction. It allows the model to learn from unlabelled data, making it highly efficient in adapting to different motion patterns and improving image quality.
- Physics-Informed Models: These models combine deep learning with physics-based modeling for improved accuracy. By integrating physical principles with AI, these models can achieve more precise motion correction and enhance the overall reliability of MRI scans.

# slide 7
Overall Objective
Investigate and address the challenge of motion correction in MRI through the application of PMC and RMC methodologies:
The thesis aims to explore and improve methods for correcting motion artifacts in MRI, utilizing both real-time and post-processing techniques.

Prospective Motion Correction (PMC)
- Develop techniques for motion correction at ultra-high field strength (7 Tesla) MRI: The focus is on enhancing motion correction methods specifically for high-field strength MRI, which presents unique challenges and opportunities.
- Achieve accurate motion correction in a regime of minimal motion: The goal is to develop methods that perform well even with minimal patient movement, ensuring high-quality images.
- Apply methods exclusively to high-resolution structural brain imaging: The techniques are tailored for detailed brain imaging, where motion artifacts can significantly impact diagnostic accuracy.

Deep Learning-Based Retrospective Motion Correction (RMC)
- Evaluate the efficacy of deep learning models in predicting and correcting motion artifacts: The thesis assesses how well deep learning algorithms can identify and rectify motion artifacts in MRI images.
- Use Structural Similarity Index (SSIM) to quantitatively assess image quality improvements: SSIM is employed as a metric to measure the enhancement in image quality achieved by the correction methods.
- Develop and test various custom models designed to address specific types of motion artifacts in brain MRI: Custom deep learning models are created and evaluated to handle different kinds of motion artifacts, aiming to improve the overall reliability of brain MRI.

# slide 8
setup involved in acquiring brain MR images at 7T
- magnet 
- A: Camera (optical tracking system)
- B: head coil
- C: Moiré phase marker

# slide 9
concept and mechanisms of Prospective Motion Correction (PMC) in MRI:
- Real-Time Monitoring: PMC uses motion tracking to detect head movements during scans, ensuring that any motion is promptly identified.
- Dynamic Adjustments: It adjusts imaging parameters in real-time to correct for detected motion, maintaining image quality.
- Affine Transformations: These transformations align the images with real-time adjustments, ensuring consistency and accuracy in the captured images.
- Integration with Sequences: PMC can be integrated with various imaging sequences, though its effectiveness can vary depending on the type of sequence and the nature of the motion.

# slide 10
The experimental setup has been:
- a 7T Whole-Body MRI Scanner from Siemens Healthineers, offering exceptional image resolution and quality.
- a 32-Channel Head Coil from Nova Medical was employed to capture detailed brain images, ensuring high sensitivity and signal clarity.
- the Optical Motion Tracking System (OMTS): An OMTS from Metria Innovation Inc. was used to monitor and track head movements during scans, crucial for implementing motion correction techniques.
- Participant Details: The study involved 21 healthy volunteers (14 males, average age 31.5±6.1 years; 7 females, average age 27.3±3.4 years) who underwent two independent 75-minute scanning sessions. This diverse group helped in assessing the efficacy of the motion correction methods across different individuals and sessions.

# slide 11
The tracking data was averaged to determine the global mean and standard deviation (SD) for each degree of freedom, separately for when Prospective Motion Correction (PMC) was off and on. Specific equations were used to analyze rotations and displacements. Histograms were generated for each of these parameters, and the Mann-Whitney U test was applied for statistical analysis. Scans showing significantly different motion patterns within the same subject were excluded to avoid bias. The outlined procedure involves recording motion patterns, calculating distributions and SD values, averaging SDs, and selecting subjects with similar motion patterns for a fair comparison between PMC off and on. This ensures accurate evaluation of the motion correction effectiveness.

# slide 12
This image compares MRI scans of a brain under two different conditions, labeled "a" and "b," representing "PMC OFF" and "PMC ON." Each scan features a yellow box highlighting a specific region, with an enlarged view of that region shown in an inset.
The text below the images provides average values for three parameters under these conditions:
For "OFF":
Ravg(OFF)=7.2±0.8R_{\text{avg}}(\text{OFF}) = 7.2 \pm 0.8
AESavg(OFF)=2.5±0.1\text{AES}_{\text{avg}}(\text{OFF}) = 2.5 \pm 0.1
GEavg(OFF)=2.0±0.1\text{GE}_{\text{avg}}(\text{OFF}) = 2.0 \pm 0.1
For "ON":
Ravg(ON)=7.7±0.8R_{\text{avg}}(\text{ON}) = 7.7 \pm 0.8
AESavg(ON)=2.6±0.1\text{AES}_{\text{avg}}(\text{ON}) = 2.6 \pm 0.1
GEavg(ON)=2.0±0.1\text{GE}_{\text{avg}}(\text{ON}) = 2.0 \pm 0.1

These metrics suggest that the brain images are being quantitatively analyzed to assess the effects of motion correction, providing insights into the effectiveness of the intervention.

# slide 13
here the methodology used for the subjective assessment of MRI image quality in the study.
- Expert Reviewers: The assessment was conducted by four experts, each with over five years of experience in MR image-quality evaluation.
- Blinded Comparison: The raters performed side-by-side comparisons of images taken with and without Prospective Motion Correction (PMC). To ensure unbiased results, the images were presented in a randomized order.
- Scoring System: Image quality was rated on a scale from 1 (worst) to 10 (best), with a focus on the presence and severity of motion artefacts.

This structured approach helps to objectively evaluate the effectiveness of motion correction techniques in improving MRI image quality.

# slide 14
instead here the metrics used for the objective assessment of MRI image quality:
- Average Edge Strength (AES): This metric measures the average strength of edges in an image, providing an indication of the clarity and sharpness of structural details. Higher AES values typically denote better-defined edges, reflecting enhanced image quality.
and
- Gradient Entropy (GE): GE evaluates the randomness and complexity of the gradient distribution within the image. It serves as a measure of the overall texture and contrast, with higher GE values suggesting a more detailed and varied image structure.

Together, these metrics help quantify the improvements in image quality achieved through motion correction techniques, offering a clear and objective means of assessment.

# slide 15
In summary these are the key findings of the study on Prospective Motion Correction (PMC) in MRI:
- High-Resolution MRI: The application of PMC notably enhances image quality in high-resolution scans. Most images with PMC activated demonstrated high or very high quality, with only three scenarios showing statistically significant improvements. Overall, both subjective and objective measures indicate superior image quality with PMC.
- Evaluation Metrics: Among six evaluated groups, five showed improved image quality with PMC. However, one group displayed inconsistent results between subjective and objective assessments, highlighting the need for further investigation.
- Applicability of PMC: PMC proves beneficial for high-resolution scans, even without deliberate motion, making it effective for healthy, compliant participants. This suggests PMC's broad applicability in routine clinical MRI practices.

# slide 16
the limitations encountered in the study on Prospective Motion Correction (PMC) in MRI are
- Statistical Significance: While some scenarios showed statistically significant improvements with PMC, there were cases with inconsistencies between subjective and objective measures, indicating mixed results.
- Motion Pattern Variability: The motion patterns for PMC ON and OFF were not always comparable. In some groups, the image quality metrics did not consistently show clear superiority for PMC.
- Extremes of Motion: PMC's effectiveness decreases with very high levels of motion. For extreme cases or non-compliant patients, additional techniques or integration with Retrospective Motion Correction (RMC) are required.
- Patient Compliance: PMC is more effective in compliant subjects. Applying PMC to non-compliant patients poses additional challenges, necessitating supplementary measures to achieve optimal results.

These limitations highlight areas for further research and development to enhance the robustness and applicability of PMC in clinical practice.

# slide 17
this work have been on published on magnetice resonance in medicine with the title:
"Quantitative evaluation of prospective motion correction in healthy subjects at 7T MRI"

# slide 18
following the recent development of Artificial Intelligence (AI) and Deep Learning in medical imaging, specifically in MRI:
- Artificial Intelligence (AI): AI involves the simulation of human intelligence processes by machines, primarily computer systems, to perform tasks that typically require human cognition.
- Deep Learning: A specialized subset of AI, deep learning uses multi-layered neural networks to analyze complex data, enabling the extraction of intricate patterns and insights.

Role of AI in MRI

    Data Analysis: AI algorithms are capable of processing and analyzing large volumes of MRI data swiftly and accurately, improving efficiency and diagnostic capabilities.

    Pattern Recognition: Deep learning models are particularly adept at identifying complex patterns within imaging data, such as motion artefacts, enhancing the quality and reliability of MRI scans.

These advancements highlight the significant impact of AI and deep learning on improving the accuracy and efficiency of medical imaging.
