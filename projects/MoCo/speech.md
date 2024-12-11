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
