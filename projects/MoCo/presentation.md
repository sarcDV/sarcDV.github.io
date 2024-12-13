---
marp: true
theme: default
paginate: true
style: |
  section {
    background-color: #ffffff; /* Change background color */
    color: #333; /* Change text color */
    font-size: 20px;
  }
  h1 {
    color: #000000; /* Change H1 color */
  }
  .logo {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 150px; /* Adjust logo size */
  }
  .my-image {
    width: 100px; /* Set the width */
    height: auto; /* Maintain aspect ratio */
    display: block; /* Center the image */
    margin: 0 auto; /* Center the image horizontally */
  }
  .image-row {
    display: flex; /* Use flexbox to arrange images in a row */
    justify-content: space-around; /* Space images evenly */
    align-items: center; /* Center images vertically */
  }
  .image-row img {
    height: 150px; /* Set a fixed height for all images */
    width: auto; /* Maintain aspect ratio */
  }
  .left-align {
    text-align: left; /* Align text to the left */
    font-size: 14px; /* Adjust font size */
  }
  .right-align {
    text-align: right; /* Align text to the left */
    font-size: 14px; /* Adjust font size */
  }
  section::after {
  content: attr(data-marpit-pagination) '/' attr(data-marpit-pagination-total);
  }
  .two-columns {
    display: flex;
    justify-content: space-between;
  }
  .column {
    width: 48%; /* Adjust width as needed */
    padding: 10px;
  }

# # Convert slide deck into HTML
# npx @marp-team/marp-cli@latest slide-deck.md
# npx @marp-team/marp-cli@latest slide-deck.md -o output.html

# # Convert slide deck into PDF
# npx @marp-team/marp-cli@latest slide-deck.md --pdf
# npx @marp-team/marp-cli@latest slide-deck.md -o output.pdf

# # Convert slide deck into PowerPoint document (PPTX)
# npx @marp-team/marp-cli@latest slide-deck.md --pptx
# npx @marp-team/marp-cli@latest slide-deck.md -o output.pptx

# # Watch mode
# npx @marp-team/marp-cli@latest -w slide-deck.md

# # Server mode (Pass directory to serve)
# npx @marp-team/marp-cli@latest -s ./slides 

# - These seem to be too many slides (and also way too much content). You certainly have to reduce the amount and also the complexity.
# - Consider your audience (commission). There are persons with little to no knowledge on MRI, motion correction or AI.
# - You should introduce your topic and goals before you introduce the methods (or MRI - why do you need spins? The more important point may be the acquisition in k-space and consequences). Perhaps motivate with nice and corrupted images.
# - many slides contain too much text ...
# - Leave out details that are not needed to follow and understand the big picture. 
# - Your result slides (many from the papers) are too busy. You will not be able to present all the details. Better pick out example results. You don't need to show all your experiments and results. Simplify your slides.
# - You present the three parts as if they have no connection and are independent. It would be much better to connect them and build a story to include all three aspects (which seems obvious to me).
# ------
# Nice slides but I fully agree with Oliver's comments. 
# It would be good to have a story to tell and don't be shy 
# to present/highlight your impact/novelty. 
# I would condense it to two part and sell the story as working 
# on both ends of the motion correction spectrum, i.e. small 
# involuntary in ultra-high resolution imaging, 
# and gross motion in "clinical/conventional" imaging.
# Maybe start the topic with "motion as the arch enemy of MRI". 
# Then you can say motion comes in "many forms" ... 
# and equally many possibilities to address this challenge. 
# Then I would introduce the vision/mission of your PhD. 
# It should be on motion correction, but given you used 
# something which was available i.e. MPT system and ResNets/known 
# network architectures, you aim was to really test them 
# with an agnostic mindset as well as thoroughly perform 
# quantitative metrics instead of the typical boutique style 
# MoCo studies.
# You could sell the at first seemingly disconnected PMC 7T 
# and RMC clinical projects by saying, as mentioned again, 
# trying to work on the ends of the MoCo MRI spectrum with 
# acquiring (and correcting) motion prospectively as well as 
# using available data. and retrospective correction. 
# # Per project part (if possible combined both RMC projects or 
# point at the last one only shortly) a short set-up, motivation, 
# cohort, voxel-size vs motion amplitude should be given. 
# Then maybe 1 or 2 result images, i.e. MoCo working/failing, 
# and then approx. 2 slides on quantitative assessment/results. 
# For the quantitative stuff, use only one objective per slide, 
# e.g. only AES <OR> gradient entropy for PMC, and take your 
# time walking the audience through the results 
# (i.e. starting by the x/y labels, general trends, 
# interpretation, ...). Again, don't be shy to highlight 
# your contribution to the field. Further, 
# results which are challenging to explain can be left out 
# for the PhD presentation. 
# If referees have question about challenges they will let you know. 
# BTW: I remember you gave a great talk on your PMC @  7T 
# during the final ITN meeting in Magdburg (2016?). 
# The story was with the Ferrari and a race track or so. 
# You have to decide if it is fitting for your defense, 
# but I stuck with me and, as Oliver said, the commission 
# are not experts on the topics.

---
![bg left:17% height:750px](images/3DMPRAGE-sag-ax-corv.png)
## Prospective and Deep Learning Based Retrospective Motion Correction for Magnetic Resonance Imaging

<div class="left-align">
    M.Sc. Alessandro Sciarra<br>
    Faculty of Natural Sciences, Otto von Guericke University, Magdeburg, Germany<br>
    BMMR Group, MedDigit Group<br>
    Otto von Guericke University, Magdeburg, Germany<br>
</div>
<br>
<div class="right-align">
    <strong>Head of the commission:</strong><br>
    Prof. Dr. Andreas Menzel<br>
    <strong>Reviewers:</strong><br>
    Prof. Dr. Oliver Speck, 
    Prof. Dr. Maxim Zaitsev<br>
    <strong>Members of the Commision:</strong><br>
    PD Dr.-Ing. Philipp Berg, 
    PD Dr.-Ing. Gerald Kasner<br>
</div>

&nbsp;&nbsp;&nbsp; <!-- Add spaces -->
<img src="images/logo_verde.png" alt="Image 1"  height=70px/>
<!-- &nbsp;&nbsp;&nbsp; Add spaces -->
<img src="images/bmmr_logo_RGB_125.png" alt="Image 2"  height=80px/>
<!-- &nbsp;&nbsp;&nbsp; Add spaces -->
<img src="images/himr-logo.png" alt="Image 2"  height=80px/>
<img src="images/eu-flag.png" alt="Image 2"  height=80px/>
<img src="images/MedDigit.png" alt="Image 2"  height=80px/>

<!-- <div class="image-row">
  <img src="logo_verde.png" alt="Image 1" />
  <img src="bmmr_logo_RGB_125.png" alt="Image 2" />
  <img src="Medigit.png" alt="Image 3" />
</div> -->

<!-- Ultra-High Field Magnetic Resonance Imaging: HiMR

Marie Curie Initial Training Network -->
<!-- https://www.nottingham.ac.uk/himr/students/alessandro-sciarra.aspx -->

<!-- ---

#### Outline

- Introduction to MRI
  <!-- + Magnetic Resonance Imaging and MRI@Ultra High Field: a short intro
  + Problem: Motion Artefacts in MRI
  + Solution: Motion Correction in MRI -->
<!-- - Prospective Motion Correction (PMC)  -->
  <!-- + What is PMC and how it works (pros & cons) -->
  <!-- + Goal: Qualitatively And Quantitatively Evaluation of PMC -->
<!-- - Deep Learning Based Retrospective Motion Correction (RMC)
- Structural Imaging with PMC
- Retrospective Motion Artefacts Detection and Correction using Deep Learning 
- Conclusion and Open Questions  -->
<!-- - Goal: why this work?
- Prospective Motion Correction (PMC): State of the art and our setup
- Image Quality Assessment for PMC: Results
- Conclusion
- Deep Learning for Motion Correction: the Retrospective approach
- Evaluation
- conclusion
- Future Work -->
---

![bg right fit](images/motion-foto.jpg)
# What's the problem?
##  Motion! 
### The Enemy of Photographers and MRI Users!

- Please ignore the unfortunate subject in the photos! 😄

- Whether you're taking a selfie with your latest top smartphone (top row) or an old Nokia 3310, motion can always degrade image quality, regardless of the resolution you can achieve.
---
![bg left](images/au70_T1_OFFv.png)
## Magnetic Resonance Imaging 

- A non-invasive imaging technique
- Uses strong magnetic fields and radio waves
- Produces detailed images of organs and tissues

---

###  Motion comes in "many forms" ...
- Motion artefacts in MRI are distortions or errors in the images caused by patient movement during the scanning process.
- These artefacts can be caused by:
  + Patient Movement
  + Physiological Motion
  + Long Scan Times

- Types of Motion Artefacts:
  + Ghosting Artefacts
  + Blurring Artefacts
  + Phase Encoding Artefacts
  <!-- + Chemical Shift Artifacts:  While not purely motion-related, these artefacts can be exacerbated by patient movement and can manifest as misalignment between fat and water signals. -->

![bg right](images/example-motion-artifacts.png)
 
---
![bg left fit](images/tio-motion.png)
# K-Space and Motion Artefacts

- MRI data is acquired in a domain known as k-space, which is a matrix that represents the spatial frequency information of the image. 
- Each point in k-space corresponds to a specific frequency and phase of the MRI signal. 
- The process of filling k-space is crucial for reconstructing the final image.

---
# How Motion Corrupts K-Space

1. Incomplete Data Acquisition
        <!-- If a patient moves during the acquisition of k-space data, the signals collected may not correspond to the same anatomical location. This misalignment leads to inconsistencies in the data, resulting in artifacts in the final image. -->

2. Phase Errors
        <!-- Motion can introduce phase shifts in the acquired signals. Since k-space is sensitive to the phase of the signals, any discrepancies caused by motion can lead to blurring or ghosting effects in the reconstructed image. -->

3. Aliasing
        <!-- If motion occurs while acquiring data from different parts of k-space, it can cause aliasing artifacts. This happens when the data from one part of the image is incorrectly mapped to another part due to the motion, leading to overlapping or repeating structures in the final image. -->

4. Signal Loss
        <!-- Motion can also lead to signal loss in certain areas of the brain, particularly if the motion occurs during the acquisition of specific k-space lines. This can result in areas of the image appearing darker or missing entirely. -->


---
# ... despite this annoying problem there are many possibilities to address this challenge

- Prospective & Retrospective Motion Correction
- Data Acquisition Strategies 
- Deep Learning and/or the combination of deep learning with the previous ones

<!-- #### State-of-the-Art in Motion Correction -->

<!-- | Technique                         | Description                                                                               |
|-----------------------------------|-------------------------------------------------------------------------------------------|
| **Prospective Motion Correction (PMC)** | Real-time adjustments during MRI acquisition.                                            |
| **Retrospective Motion Correction (RMC)** | Post-processing techniques to correct motion artefacts.                                |
| **Data Acquisition Strategies**       | Techniques like PROPELLER, radial/spiral sampling, and fast-imaging methods.              | -->

<!-- #### Recent AI Advances -->

<!-- | AI Technique                      | Description                                                                               |
|-----------------------------------|-------------------------------------------------------------------------------------------|
| **Deep Learning Approaches**          | Neural networks for motion artefact reduction and motion estimation.                      |
| **Self-Supervised Learning**          | Uses motion-guided implicit neural representations for correction.                        |
| **Physics-Informed Models**           | Combines deep learning with physics-based modeling for improved accuracy.                 | -->

---

## Goal of this thesis
<!-- ### Investigate and address the challenge of motion correction in MRI through the application of Prospective Motion Correction (PMC) and Deep Learning-based Retrospective Motion Correction (RMC) methodologies. -->
### Investigate and address the challenge of motion correction in MRI on both ends of the motion correction spectrum:
<!-- - small involuntary in ultra-high resolution imaging, 
- and gross motion in "clinical/conventional" imaging. -->


- **Prospective Motion Correction (PMC)** for  small involuntary motion in ultra-high resolution imaging:
  <!-- + Develop techniques for motion correction at ultra-high field strength (7 Tesla) MRI.
  + Focus on achieving accurate motion correction in a regime of minimal motion.
  + Apply methods exclusively to high-resolution structural brain imaging. -->

- **Deep Learning-Based Retrospective Motion Correction (RMC)** for gross motion in clinical (1.5-3.0 Tesla) imaging:
  <!-- + Evaluate the efficacy of deep learning models in predicting and correcting motion artefacts.
  + Use Structural Similarity Index (SSIM) to quantitatively assess image quality improvements.
  + Develop and test various custom models designed to address specific types of motion artifacts in brain MRI. -->
![bg left fit](images/from_clinical_to_research.jpg)

<!-- ---

## Magnetic Resonance Imaging: 
### How does it work?

1. **Proton spins** initially exhibit random orientations in space. 
2. A **strong magnetic field** induces **alignment** of the proton spins.
3. **Radiofrequency pulses** induce **precession** in a subset of proton spins.
4. Following the pulse, these spins undergo **relaxation** back to their equilibrium orientations, resulting in the **emission** of detectable **signals**.
5. The emitted signals are **acquired** and **processed** to generate a diagnostic image.

![bg right height:650px](images/howMRIworks.gif) -->

<!-- 
```
   +---------------------+    1. Magnetic Fields
   |                     |    MRI Machine: Represents the MRI scanner. 
   |      MRI Machine    |    A superconductive magnet generates a strong static magnetic field.
   |                     |
   +---------------------+
            |
            |  Strong Magnetic Field
            |
            v
   +---------------------+    
   |                     |    Hydrogen Atoms: 
   |   Hydrogen Atoms    |     - The human body is primarily composed of water, which contains hydrogen atoms.
   |   Align with Field  |     - When placed in a strong magnetic field (typically 1.5T to 7T), 
   |                     |       the hydrogen protons align with the direction of the magnetic field.
   +---------------------+
            |
            |  RF Pulses
            |
            v
   +---------------------+     2. Radiofrequency Pulses
   |                     |     Excitation: Once the protons are aligned, the MRI machine sends radiofrequency (RF) pulses into the body. 
   |   Emit Signals      |     These pulses excite the protons, causing them to absorb energy and move to a higher energy state.
   |   as they Relax     |     Relaxation: After the RF pulse is turned off, the protons begin to relax back to their original state, 
   |                     |     releasing energy in the process.
   +---------------------+
            |
            |  Signals Processed
            |                  
            v                  3. Signal Detection
   +---------------------+     Receiving Coils: The released energy is detected by receiving coils in the MRI machine. 
   |                     |     The signals generated depend on the type of tissue and its environment, which allows 
   |   Image Formation   |     for differentiation between various structures in the body.
   |                     |
   +---------------------+     4. Image Reconstruction
                               Fourier Transform: The signals collected are processed using mathematical algorithms, 
                               primarily the Fourier Transform, to convert them into images. T
                               This process reconstructs the spatial information to create detailed cross-sectional images of the body.

``` -->

<!-- ---

## Image acquisition of a $T_2^*$-weighted 2D gradient image. (a) Pulse sequence diagram; (b) k-space 2D-image and (c) reconstructed 2D-image.
![height=16cm](images/FigureImaging2d.png) -->



<!-- | **MIT Research**                      | Combines deep learning and physics to correct motion artifacts in MRI scans.              | -->

<!-- ## Future Directions

- Enhancing generalization across different datasets.
- Reducing the need for extensive training data.
- Integrating AI with real-time MRI systems for better patient outcomes. -->




<!-- ### Assessing the impact of the prospective motion correction using 
### an in-bore optical tracking system, in case of high-resolution 
### structural imaging in regime of quasi-no motion. -->
<!-- - Prospective Motion Correction (PMC):
  + Tackle the problem of motion correction at 7T MRI in a regime of quasi-no-motion, 
  focusing solely on high resolution brain imaging.

- Deep Learning Based Retrospective Motion Correction (RMC):
  + Assess image quality through Structural Similarity Index (SSIM) predictions.
  + Implement motion correction using various ad-hoc models tailored to specific motion artifacts. -->
---
### Prospective Motion Correction

<!-- ![](images/camera-system.png) -->
![](images/MRHardPMC.png)

---
#### Prospective Motion Correction: How Does It Work? [1]

- **Real-Time Monitoring**:
  + Uses motion tracking to detect head movements during scans.

- **Dynamic Adjustments**:
  + Adjusts imaging parameters in real-time to correct detected motion.

- **Affine Transformations**:
  + Aligns images with real-time adjustments for consistency.

- **Integration with Sequences**:
  + Can be used with various imaging sequences; effectiveness varies by sequence and motion type.
 
 
**[1]** Maclaren et al. Magn Reson Med. 2013 Mar 1;69(3):621-36. doi: 10.1002/mrm.24314. Epub 2012 May 8. PMID: 22570274.

![bg right:40% height:700px](images/howPMCworks.png)

<!-- - **Real-Time Monitoring**: 
  + PMC systems utilize motion tracking devices to monitor head movements during the scan.
  + This allows for immediate detection of any changes in position and orientation.
- **Dynamic Adjustments**:
  + Once motion is detected, the imaging system adjusts the acquisition parameters in real-time.
  + This may involve altering the gradient fields or the timing of radio-frequency pulses to compensate for the detected motion.

- **Affine Transformations**:
  + The adjustments made are often based on affine transformations, which help align the images as they are being acquired.
  + This ensures that the images remain consistent and aligned with the intended anatomical structures.

- **Integration with Imaging Sequences**:
  + PMC can be integrated with various imaging sequences.
  + The effectiveness of PMC can vary depending on the specific sequence used and the nature of the motion. -->

<!-- Prospective motion correction (PMC) is a technique used in functional MRI (fMRI) to minimize motion artifacts during imaging. It involves real-time adjustments to the imaging pulse sequence based on detected head movements. By continuously updating the gradients and radio-frequency pulses in response to motion, PMC helps maintain the anatomical integrity of the images being captured. Here’s a breakdown of how it works:

Key Components of Prospective Motion Correction

Real-Time Monitoring:

PMC systems utilize motion tracking devices (like optical or electromagnetic sensors) to monitor head movements during the scan.
This allows for immediate detection of any shifts in position.
Dynamic Adjustments:

Once motion is detected, the imaging system adjusts the acquisition parameters in real-time.
This may involve altering the gradient fields or the timing of radio-frequency pulses to compensate for the detected motion.
Affine Transformations:

The adjustments made are often based on affine transformations, which help align the images as they are being acquired.
This ensures that the images remain consistent and aligned with the intended anatomical structures.
Integration with Imaging Sequences:

PMC can be integrated with various imaging sequences, including echo-planar imaging (EPI) and multiband EPI.

The effectiveness of PMC can vary depending on the specific sequence used and the nature of the motion.

Challenges and Considerations

Precision and Accuracy:

The success of PMC relies heavily on the precision of motion measurement. If the motion is not accurately detected, the corrections may be inadequate.
Continuous validation of PMC methods is essential to ensure they are effective across different imaging scenarios.
Impact of New Imaging Techniques:

As imaging technology evolves, such as with the introduction of multiplexed EPI, existing PMC techniques may need reevaluation.
New sequences may introduce different motion sensitivities that could affect the performance of PMC.
Holistic Approach:

A comprehensive understanding of the entire fMRI process, from acquisition to analysis, is crucial for optimizing PMC.

Collaboration between pulse sequence developers and image processing algorithm designers can lead to better outcomes.

Future Directions

Improved Algorithms:

Ongoing research is focused on developing more sophisticated algorithms that can better handle motion correction in real-time.
This includes exploring machine learning techniques to enhance motion detection and correction capabilities.
Validation and Testing:

There is a need for rigorous testing of PMC methods across various fMRI applications to establish their reliability and effectiveness.
Researchers should demand a higher burden of proof before adopting new PMC techniques in clinical and research settings.
Prospective motion correction represents a significant advancement in fMRI technology, aiming to enhance the quality of brain imaging by addressing the challenges posed by patient movement -->



--- 
# Experimental Setup:
- a 7T whole-body MRI scanner (Siemens Healthineers, Erlangen, Germany)
- a 32-channel head coil (Nova Medical, Wilmington, MA, USA) 
- Optical Motion Tracking System (OMTS), Metria Innovation Inc., Milwaukee, WI, USA
- 21 healthy volunteers were scanned over the course of two independent 75-minute long sessions 
(14 males, 31.5±6.1 years old, and 7 females, 27.3±3.4 years old).
- $T_1$, $T_2$, $PD$ and $T_2^*$-weighted images for each subject were acquired 
<!-- ## 21 Subjects, 
### Sequence parameters

| **Sequence**        | MPRAGE         | TSE            | TSE            | GRE            | GRE            | GRE            |
|---------------------|----------------|----------------|----------------|----------------|----------------|----------------|
| **Encoding**        | 3D             | 2D             | 2D             | 2D             | 2D             | 2D             |
| **Contrast**        | $T_1$          | $T_2$          | $PD$           | $T_2^*$        | $T_2^*$        | $T_2^*$        |
| **PMC**             | On/Off         | On/Off         | On/Off         | On/Off         | On/Off         | On/Off         |
| **In-plane res. (mm)** | 0.45 iso | 0.28 iso | 0.28 iso | 0.5 iso | 0.35 iso | 0.25 iso |
| **Slice thick. (mm)** | 0.45          | 1.0            | 1.0            | 1.5            | 1.5            | 1.5            |
| **Matrix size (voxel)** | 496 x 496    | 690 x 704      | 690 x 704      | 336 x 448      | 480 x 640      | 672 x 896      |       
| **Voxel vol. (mm$^3$)** | 0.091        | 0.078          | 0.078          | 0.375          | 0.184          | 0.094          |
| **Slices**          | 416            | 15             | 15             | 30             | 30             | 30             |
| **TR (ms)**         | 2820           | 6000           | 6000           | 680            | 680            | 680            |
| **TE (ms)**         | 2.82           | 59.0           | 9.9            | 16.6           | 15.1           | 16.6           |
| **TI (ms)**         | 1050           | -              | -              | -              | -              | -              |
| **Flip angle (deg)**| 5              | 130            | 130            | 30             | 30             | 30             |
| **Bandwidth (Hz/px)** | 170          | 473            | 473            | 60             | 60             | 60             |
| **Total ADC (ms)**  | 5.88           | 2.11           | 2.11           | 16.67          | 16.67          | 16.67          |
| **TA (min:sec)**    | 12:12          | 5:12           | 5:12           | 8:21           | 11:37          | 15:58          |
| **Parallel imaging** | GRAPPA 2       | GRAPPA 2       | GRAPPA 2       | GRAPPA 2       | GRAPPA 2       | GRAPPA 2       | -->


<!-- ---

![bg height:650px](images/slice_3-crop.png) -->

---

![bg height:650px](images/sample_comparison_1.png)

---
![bg right fit](images/Figure_1_SIQA_simplified.jpg)
### Subjective Image Quality Assessment

- **Expert Reviewers**:
  + Four experts with over five years of MR image-quality assessment expertise.
  
- **Blinded Comparison**:
  + Raters performed side-by-side comparisons of images with and without PMC.
  + Image presentations were randomized to avoid bias.

- **Scoring System**:
  + Image quality rated from 1 (worst) to 10 (best) based on motion artefacts.
  <!-- + Scores reflect the degree of corruption due to motion. -->

<!-- ### Statistical Analysis
- **Intraclass Correlation Coefficient (ICC)**:
  + Calculated using Pingouin to assess agreement among raters. -->

---
![bg right:60% height:650px](images/OIQA-crop.png)
## Objective Image Quality Assessment

### Evaluation Metrics
- **Average Edge Strength (AES)**: Measures the average strength of edges in an image, indicating the clarity and sharpness of structural details.
- **Gradient Entropy (GE)**: Evaluates the randomness and complexity of the gradient distribution, reflecting the overall texture and contrast of the image.

---

![bg right fit](images/pmc_paper.png)

- **High-Resolution MRI**:
  + PMC significantly improves image quality in high-resolution scans.
  <!-- + Majority of images with PMC ON showed high or very high quality. -->
  + Only three scenarios showed statistically significant improvement, but overall subjective and objective measures indicate better quality with PMC.

<!-- - **Evaluation Metrics**:
  + Five out of six groups showed higher image quality with PMC.
  + One group showed inconsistent results between subjective and objective metrics. -->

- **Applicability of PMC**:
  + PMC is beneficial for high-resolution scans even in the absence of deliberate motion.
  + Effective for healthy, compliant participants.

<!-- ### Extra:

- **Intentional Motion**:
  + PMC improves image quality even with high levels of motion.
  + Indicates potential use for non-compliant patients (e.g., Parkinson's disease) when combined with additional motion prevention or RMC techniques. -->
---

## Limitations
- **Statistical Significance**:
  + Limited scenarios showed statistically significant improvement.
  + Some cases exhibited inconsistencies between subjective and objective measures.

- **Motion Pattern Variability**:
  + Comparability of motion patterns for PMC ON and OFF not always consistent.
  + Some groups did not show clear superiority in image quality metrics.

- **Extremes of Motion**:
  + PMC's effectiveness decreases with very high levels of motion.
  + Requires further techniques or integration with RMC for extreme cases or non-compliant patients.

- **Patient Compliance**:
  + Effectiveness is more pronounced in compliant subjects.
  + Additional challenges in applying PMC to non-compliant patients without supplementary measures.

<!-- ---

![bg height:450px](images/pmc_paper.png) -->

<!-- --- -->
<!-- # Retrospective Motion Artefacts Detection 
# and Correction Using Deep Learning

--- -->

<!-- ## Introduction to AI in Medical Imaging

- **Artificial Intelligence (AI)**: The simulation of human intelligence processes by machines, especially computer systems.
- **Deep Learning**: A subset of AI that uses neural networks with many layers to analyze various factors of data.

### Role of AI in MRI

- **Data Analysis**: AI algorithms can process and analyze large volumes of MRI data quickly and accurately.
- **Pattern Recognition**: Deep learning models excel at identifying complex patterns in imaging data, including motion artefacts. -->

---

<!-- ### Deep Learning Approaches

- **Convolutional Neural Networks (CNNs)**: Commonly used for image processing tasks, including artifact detection.
- **Generative Adversarial Networks (GANs)**: Can be employed to generate high-quality images from corrupted data.
- **Reinforcement Learning**: Potential for optimizing motion correction strategies in real-time.


### Benefits of Using AI and Deep Learning

- **Improved Accuracy**: Enhanced detection and correction of motion artefacts lead to better image quality.
- **Efficiency**: Reduces the need for repeat scans, saving time and resources.
- **Automation**: Streamlines the workflow in clinical settings, allowing radiologists to focus on diagnosis.

--- -->
# Are we happy with the evaluation metrics used till now?

- The evaluation metrics used for PMC@7T, specifically GE and AES, effectively demonstrate the benefits of the PMC system through comparisons of on vs. off conditions.
  
- However, in general MRI practice, there are no reference images available post-scan for quality assessment.

- Existing no-reference image quality assessment (IQA) metrics are not always compliant with all acquisition types, highlighting the need for more robust evaluation methods.

- To address this gap, it has been developed a novel approach utilizing **deep learning for SSIM prediction**, providing a more reliable assessment of image quality.

<!-- ## Image Quality Assessment Through SSIM Prediction -->
<!-- ### Importance of Image Quality
- Motion artefacts can lower diagnostic accuracy.
- May require repeat scans to avoid misdiagnosis. -->

<!-- ### Image Quality Assessment (IQA) -->
<!-- - **IQA**: Quick, automated process to evaluate MR images.
- Goal: Assess the image quality level 
- Challenges:
  - Time-consuming and subjective evaluation.
  - Varying expertise among readers leads to inconsistent outcomes.
  - Lack of reference images complicates assessment. -->

<!-- ---
###  Advances in IQA
- Reference-free IQA methods emerging, including machine learning approaches.
- No gold standard IQA for MR images yet.

### Proposed Solution
- Development of an automated IQA tool based on SSIM (Structural Similarity Index).
- Tool identifies motion artefacts and measures distortion.
- Applicable to various MR image contrasts (T1, T2, PD, FLAIR).
- Incorporates contrast augmentation for broader weighting range. -->

---
![bg right:60% height:710px](images/corruption.png)
### Methodology
- Two methods to artificially produce corrupted images:
  1. In-house developed method.
  2. Implementation by Shaw et al. using TorchIO library.

### ResNets Models (ready-to-use):
- Two depths used: ResNet-18 and ResNet-101.


---

![bg right:50% height:650px](images/Pipeline001test.png)


### Training Process
1. **Slice Selection**: Random 2D slice (axial, sagittal, or coronal orientation).
2. **Contrast Augmentation**: Randomly apply one of four algorithms:
   - Gamma adjustment, Logarithmic adjustment, Sigmoid adjustment, Adaptive histogram adjustment
3. **Motion Corruption**: Apply motion corruption using:
   - TorchIO or In-house algorithm
4. **SSIM Calculation**: Determine SSIM between input and corrupted images.
5. **Model Training**: Use corrupted image and SSIM for training.

<!-- ---
## Datasets Used
- **Training**: 200 volumes
- **Validation**: 50 volumes
- **Testing**: 50 volumes
- Sources: IXI dataset, Site-A (3T), Site-B (7T), various scanners.
- Resampling for isotropic resolution of 1.00 mm³.

## Training Parameters
- Training conducted with and without contrast enhancement.
- Learning rate: 1e−3
- Batch size: 100
- Loss function: Mean Squared Error (MSE)
- Optimizer: Adam
- Epochs: 2000
- Image size: 256x256 -->
---

## Performance Assessment
- Predicted SSIM vs. ground truth SSIM (10,000 images randomly selected).
- Residuals calculated for model performance.
<!-- - Prediction task converted to classification with 3, 5, and 10 classes.

## Clinical Dataset Testing
- Included images from five subjects with varying scans.
- Subjective quality assessment by an expert using a classification scheme:
  - Class 1: Good quality (SSIM 0.85-1.00)
  - Class 2: Sufficient quality (SSIM 0.60-0.85)
  - Class 3: Insufficient quality (SSIM 0.00-0.60) -->

## Comparison with MRIQC
- MRIQC used as a baseline for comparison.
- Limitations: Only works on properly transformed BIDS format images.
<!-- - Metrics used: CNR, CJV, EFC, QI for structural images.
- SIQA scores averaged and normalized for agreement analysis. -->

<!-- ---

- **CNR**: Contrast-to-noise Ratio, $\text{CNR} = \frac{C}{N}$, where:
  + $C$ = Contrast between the object and background.
  + $N$ = Noise level in the image or signal.

- **CJV**: Coefficient of Joint Variation, $\text{CJV}=\frac{\sigma(WM)+\sigma(GM)}{\mu(WM)-\mu(GM)}$, where $\sigma$ and $\mu$ indicate the standard deviation and the mean intensity of a given tissue.

- **EFC**: Entropy Focus Criterion, $E =-\sum_{j=1}^{S}\frac{B_j}{B_{max}}ln\Big[\frac{B_j}{B_{max}}\Big]$, where $S$ is the number of image pixels and $B_j$ is the modulus of the complex value of the th image pixel, referred to here as the pixel “brightness”. If all the image energy were in one pixel, we would have the largest possible pixel brightness, $B_{max}$ , given by $B_{max}=\sqrt{\sum_{j=1}^{S}B_{j}^2}$

- **QI**: Quality Index, Mortamet B, Bernstein MA, Jack CR Jr, et al. Automatic quality assessment in structural brain magnetic resonance imaging. Magn Reson Med. 2009;62(2):365-372. doi:10.1002/mrm.21992 -->

---

![bg right:50% height:710px](images/SSIM_predicted_examples.png)
# SSIM Prediction and Model Evaluation

---
![bg height:650px](images/regression-residuals.png)
<!-- ## Figures Overview
- **Figure 39**: Example outputs of SSIM predictions.
- **Figure 40**: SSIM vs. ground truth with linear fitting.
- **Figure 41**: Residual distribution analysis.
- **Figure 42**: Confusion matrices for classification tasks.
- **Table 10**: Precision, recall, F1-score, and accuracy. -->
<!-- ---

![bg right:70% height:650px](images/classification-all.png)

### Model Performance
- **Best Performance**: 
ResNet-18 with contrast augmentation
  - Accuracy: 
    - 97% (3 classes)
    - 95% (5 classes)
    - 89% (10 classes)
- **Impact of Contrast Augmentation**:
  - Reduced standard deviation
  - Improved mean SSIM predictions -->

<!-- ---
![bg height:600px](images/FigureSSIM-SIQA.png) -->

<!-- ---
![bg right:70% height:690px](images/MRIQC_results.png) -->

<!-- ### Clinical Data Evaluation
- **Agreement**: 76.6 ± 0.8%
  - ResNet-101: 
    - 75.5% (without contrast)
    - 77.7% (with contrast) -->
<!-- 
### MRIQC Comparison
- **Processed Scans**: 12 of 36 due to non-compliance
- **Agreement Rates**:
  - CNR: 17%
  - CJV: 17%
  - EFC: 33%
  - QI: 75% -->

---

## Discussion
- Contrast augmentation improved performance.
<!-- - Accuracy decreased with more classes. -->
<!-- - Confusion matrices showed higher misclassification rates with more classes. -->

## This work is under review:
IEEE Access, "Automated SSIM Regression for Detection and Quantification of Motion Artefacts in Brain MR Images"

---

## Is PMC Easily Usable in a Clinical Setting?

- **Yes**, but there are several impractical limitations:
  - Requires an optical tracking system
  - Needs custom mouthpieces for each subject
  - Limited field of view of the camera
  - ...

---

## A Solution to Overcome These Limitations

- The RMC (Retrospective Motion Correction) approach utilizes deep learning to address the challenges of PMC.
  
- Trained and Tested deep learning models that can correct motion artefacts in MRI images retrospectively:
  + **Retrospective Motion Correction of MR Images using Prior-Assisted Deep Learning**
  + **Generalised Retrospective Motion Correction (RMC) using Deep Learning and Contrast Augmentation**
<!-- ## Data Preparation -->
<!-- - **Dataset**: 100 participants’ T1, T2, and PD images from IXI Dataset.
- **Artificial Motion Corruption** as done before  -->
  <!-- - Modified TorchIO’s RandomMotion transformation.
  - Simulated movements: rotation from -1.75 to +1.75 degrees (no translation). -->

<!-- ## Image Priors -->
<!-- - **Similar Slices**: 
  - 10 similar slices (same position, same contrast) from different subjects.
  - Used for motion correction of T2-weighted images.
  
<!-- - **Different Contrasts**:  -->
  <!-- - Utilized T1 and PD images from the same subject as priors for motion-corrupted T2 images. --> 
---
<!-- ![bg right:50% vertical width:600px](images/mocoprior_U.PNG)
![bg right:50% width:600px](images/mocoprior_res.PNG) -->

## Retrospective Motion Correction of MR Images using Prior-Assisted Deep Learning


 - **Dataset**: 100 participants’ T1, T2, and PD images from IXI Dataset.
- **Artificial Motion Corruption** as done before
  <!-- - Modified TorchIO’s RandomMotion transformation.
  - Simulated movements: rotation from -1.75 to +1.75 degrees (no translation). -->

- Image Priors (**Similar Slices**): 
  - 10 similar slices (same position, same contrast) from different subjects.
  - Used for motion correction of T2-weighted images.
- **Different Contrasts**:
  - Utilized T1 and PD images from the same subject as priors for motion-corrupted T2 images.
## Network Architectures
- **Baselines**: Modified ReconResNet and U-Net.
- **Prior Supply Techniques**:
  - **Multi-Channel Network**: Concatenated motion-corrupted image with priors.
  - **Dual-Branch Network**: Main branch for corrupted image, auxiliary branch for priors.

---
![bg right:50% height:690px](images/mocoprior_combine.png)
## Results and Discussions
- **Effectiveness**: 
  - Similar slices did not improve motion correction.
  - Different contrasts significantly enhanced motion correction.
  
- **Performance**: 
  - Multi-channel and dual-branch approaches outperformed ReconResNet.
  - Only multi-channel strategy significantly improved U-Net.


---
## Conclusion
- **Key Findings**: 
  - Additional contrast images from the same subject are more beneficial than similar slices from different subjects.
  - Multi-channel and dual-branch approaches showed improvements, especially for ReconResNet.


- **Future Work**: 
  - Explore dual-branch approach and impact of skip connections.
  - Expand dataset and introduce different motion corruption types for robustness.

### 34th Conference on Neural Information Processing Systems (NeurIPS 2020), Vancouver, Canada

![bg right:50% height:720px](images/RetroMoCoDL.png)

---


# Generalised Retrospective Motion Correction (RMC) using Deep Learning and Contrast Augmentation

## Introduction
- Previous methods required image priors, limiting generalisability.
- This extension introduces a deep learning method for RMC in MRI using:
  - ReconResNet model.
  - Novel contrast augmentation and artificial motion corruption techniques.

---
## Methods

### Data
- Collected from 3T and 7T MRI Siemens scanners.
- **Dataset**: 600 training, 160 validation, and 158 testing image volumes.
- Only slices containing brain tissues were considered.

### Data Processing
- Random slice selection from 3D volumes.
- Noise removal and Min-Max normalization.
- Padding and resizing to 256x256.
- Contrast augmentation (as for the SSIM prediction).

---

### Motion Corruption (as for the SSIM prediction)
- Two artificial motion corruption techniques:
  1. **TorchIO Functions**: Random ghosting and motion.
  2. **In-House Method**: Simulates real-world motion corruption using random parameters.

### Model and Training
- Deeper version of ReconResNet with:
  - 64 feature maps, 56 residual blocks, and PReLU activation.
  - Perceptual loss function using a pretrained ResNeXt 101 model.
- Optimized using Adam with a learning rate of 3x10⁻⁴ for 2000 epochs.

<!-- ---
![bg fit](images/testMC_v01-2.png) -->

---
![bg right:50% height:650px](images/resnet56_vol110_146_34_6.png)
## Results and Discussion
- Average SSIM improvement from 0.688 to 0.886.
- Consistent performance across different experimental runs.
- Qualitative results show significant enhancement in image quality.

## Conclusion
- Proposed method demonstrates broad generalisation across various MRI contrasts and artefacts.
- Notable improvements in image quality and robustness.
- Future work may explore combining prospective and retrospective motion correction techniques.

---

# A big thank you to:

<div class="two-columns">
  <div class="column">
  <strong>Prof. Oliver Speck</strong>,                               
    Kathrin Schulze,  Frank Godenschweger,                
    Daniel Stucht, Hendrik Mattern, Astrid Wollrab,
    Yi-Hang Tung, Mahsa Fatahi, Peter Schulze, 
    Sebastian Hupfeld, Renat Yakupov, Oleg Posnansky,
    Urte Kägebein, Yan Arnold, Nicolas Huch, Michel Pohl,
    Uten Yarach, Weiqiang Dou, Shan Yang, Myung-Ho In,
    Dominik Kolmann, Tobias Leutritz, Denis Kokorin,
    Tino-Johannes Lüttge, Falk Lüsebrink-Rindsland
    <br>
    <strong>Prof. Steffen Oeltze-Jafra</strong>, Yannic Waerzeggers,
    Max Dünnwald, Juliane Müller
    <br>
    Special thanks to <strong>Soumick Chatterjee</strong> and <strong>Max Dünnwald</strong>
  </div>
  <div class="column">
    <strong>Funding information</strong><br>
    <img src="images/logo_verde.png" alt="Image 1"  height=70px/>
    <img src="images/bmmr_logo_RGB_125.png" alt="Image 2"  height=80px/>
    <img src="images/himr-logo.png" alt="Image 2"  height=80px/>
    <img src="images/eu-flag.png" alt="Image 2"  height=80px/>
    <img src="images/MedDigit.png" alt="Image 2"  height=80px/><br>
    Initial Training Network, funded by the
    FP7 Marie Curie Actions of the European
    Commission (FP7- PEOPLE- 2012-
    ITN- 316716) and the National Institutes
    of Health (1R01-DA021146), the DFG
    (DFG- MA 9235/1-1), and the federal state
    of Saxony-Anhalt (“I 88”)<br>
    <br>
    <strong></strong>

  </div>
</div>

---

# An extraordinary thank you to:

<div class="two-columns">
  <div class="column">
  <strong>Irene Bartolini (my wife)</strong>,                               
    <br>
  <strong>Agnese & Benedetta (my twin daughters)</strong>,
    <br>
  <strong>and all my family and friends for their invaluable help and support</strong> 
  </div>
  <div class="column">
  </div>
</div>
