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

<!-- &nbsp;&nbsp;&nbsp; Add spaces
<img src="images/logo_verde.png" height=70px/></br>
<img src="images/bmmr_logo_RGB_125.png"  height=80px/>
<img src="images/himr-logo.png"  height=80px/>
<img src="images/marie_curie.jpg" height=80px/>
<img src="images/FP7_people.jpg"  height=80px/>
<img src="images/eu-flag.png"  height=80px/>
<img src="images/MedDigit.png" height=80px/> -->
<img src="images/logo_verde.png" height="70px" />
<div style="display: flex; align-items: center;">
    <img src="images/bmmr_logo_RGB_125.png" height="80px" />
    <img src="images/himr-logo.png" height="80px" />
    <img src="images/marie_curie.jpg" height="80px" />
    <img src="images/FP7_people.jpg" height="80px" />
    <img src="images/eu-flag.png" height="80px" />
    <img src="images/MedDigit.png" height="80px" />
</div>

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

- Types of Motion Artefacts:
  + Ghosting Artefacts
  + Blurring Artefacts

![bg right](images/example-motion-artifacts.png)

---
![bg vertical left fit](images/MRacquisition.gif)
![bg left fit](images/mag_pha_image.jpg)
### Image Formation
1. An MRI image is created using strong magnetic fields and radio waves (**pulse sequence**) to excite hydrogen atoms in the body.
2. The excited hydrogen atoms emit signals that are captured during imaging.
3. These signals are acquired in **k-space**, where each point represents different frequency and phase information.
4. The k-space data is transformed to produce detailed images of internal structures. 

Top image: left magnitude k-space, right reconstructed image.
Bottom image: left magnitude k-space, center phase k-space, right reconstructed image.


---

# K-space and Motion Artefacts
1. Movement of the object during imaging causes inconsistencies in phase and amplitude.  
2. These inconsistencies lead to blurring and ghosting in the images.  
3. The nature of the motion artefact depends on the timing of the motion relative to the acquisition.  

![width:1200px](images/MotionCorruptionStacks.gif)
From left: Reconstructed Image, Magnitude (k-space) and Phase (k-space)

---
# Possible solutions (1): Prospective Motion Correction (PMC)
- **Real-Time Monitoring**: Uses motion tracking to detect head movements during scans.

- **Dynamic Adjustments**: Adjusts imaging parameters in real-time to correct detected motion.

- **Affine Transformations**: Aligns images with real-time adjustments for consistency.

- **Integration with Sequences**: Can be used with various imaging sequences; effectiveness varies by sequence and motion type.

**[1]** Maclaren et al. Magn Reson Med. 2013 Mar 1;69(3):621-36. doi: 10.1002/mrm.24314. Epub 2012 May 8. PMID: 22570274.

![bg right:40% height:700px](images/howPMCworks.png)

---
# Possible solutions (2): Retrospective Motion Correction (RMC)

### How RMC Works:
1. **Data Acquisition**: MRI data is collected during patient movement.
2. **Motion Detection**: The system identifies motion artefacts in the data.
3. **Image Reconstruction**: The algorithm adjusts the data to compensate for motion.
4. **Final Image**: Corrected images are reconstructed for clearer anatomical representation.

![](images/RMC.jpg)

---

## Goal of this thesis
### Investigate and address the challenge of motion correction in MRI on both ends of the motion correction spectrum:

- **Quantitative evaluation of PMC in structural imaging** for  small involuntary motion in ultra-high resolution imaging

- **Deep Learning-Based Retrospective Motion Correction (RMC)** for gross motion in clinical (1.5-3.0 Tesla) imaging
![bg left fit](images/from_clinical_to_research.jpg)

--- 
## Study: Evaluating PMC in High-Resolution MRI @7T
- **Novelty & Differences**: 
  + NO INTENTIONAL MOTION to mimic a routine research setting, 
  + MULTIPLE WEIGHTINGS & RESOLUTIONS ($T_1$, $T_2$, $PD$, $T_2^*$), **252** scans in total,
  + LARGER COHORT OF SUBJECTS.
<!-- However, these studies focused on a single contrast
and included only small cohorts (1-11 subjects). Thus, a
comprehensive assessment of the performance of PMC for
high- resolution MRI in a larger cohort is missing. To that
end, we acquired data of 21 healthy subjects for four different
sequences at 7 T. To mimic a routine research setting, sub-
jects were asked not to move (unlike most motion- correction
studies that correct for intentional motion). The images were
assessed subjectively through expert ratings and objectively
with image metrics. The aim of this work was to verify and
quantify whether PMC can significantly improve image qual-
ity at 7 T, for healthy compliant subjects and in the regime of
“quasi-no- motion” as introduced by Stucht et al.1 This study
is not meant to assess the performance of PMC for a broader
population of subjects inexperienced with MRI -->
<!-- - 21 healthy volunteers were scanned over the course of two independent 75-minute long sessions 
(14 males, 31.5±6.1 years old, and 7 females, 27.3±3.4 years old).
- $T_1$, $T_2$, $PD$ and $T_2^*$-weighted images for each subject were acquired  -->
![height:400px](images/MRHardPMC.png)

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

---
![bg left fit](images/NoRefIQA.jpg)
# Image Quality Assessment (IQA)
- Limits for **Subjective IQA**: Variability Among Observers, Bias, Limited Reproducibility, Time-Consuming, Lack of Objectivity, ... 
<!-- Influence of Context, Inability to Capture All Aspects, Training and Expertise Required. -->
- Current no-reference IQA metrics do not consistently apply to all MR acquisition types, indicating a need for more robust evaluation methods.

**To address this gap, a novel approach has been developed that leverages deep learning for SSIM prediction, providing a more reliable and accurate assessment of image quality.**

---
# Study: SSIM Prediction for Detection and Quantification of Motion Artefacts in Brain MR Images
![bg right:40% height:650px](images/Pipeline001test.png)

- Collection of motion artifact-free MR scans (from 1.5 to 7.0T)
- **Data Augmentation** (brightness/contrast adjustment)
- Artificial corruption of MR images
- SSIM calculation between corrupted and motion-free images
- Training ResNet models (ResNet-18 and ResNet-101) to predict SSIM using only corrupted images as input and the calculated SSIM value
- Testing models on both artificially corrupted and clinical data
---


# SSIM Predictions and Model Evaluation
![](images/SSIM_prediction.jpg)

## Results:
- Best model: ResNet-18 trained with data augmentation
- Worst model: ResNet-101 trained without data augmentation
- The analysis of clinical data samples revealed that the highest agreement rate between subjective scores and SSIM predictions was 77.7% for ResNet-101 trained with data augmentation.

### This work is under review:
IEEE Access, "Automated SSIM Regression for Detection and Quantification of Motion Artefacts in Brain MR Images"

---
## What does it happen when the extra hardware required by PMC is not available? 
(Like for example in a clinical setting.)
![](images/NoExtraHW.gif)
## Solution: We can use Deep Learning based Retrospective Motion Correction!
<!-- The extra-hardware required by PMC is not available in a clinical setup  -->
<!-- ## BUT WE CAN USE DEEP LEARNING TO TRY TO SOLVE THIS PROBLEM

- The RMC (Retrospective Motion Correction) approach utilizes deep learning to address the challenges of PMC.
  
- Trained and Tested deep learning models that can correct motion artefacts in MRI images retrospectively:
  + **Retrospective Motion Correction of MR Images using Prior-Assisted Deep Learning**
  + **Generalised Retrospective Motion Correction (RMC) using Deep Learning and Contrast Augmentation** -->
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

## Study: Retrospective Motion Correction of MR Images using Prior-Assisted Deep Learning


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

<!-- Chatterjee, Soumick, et al. "Reconresnet: Regularised residual learning for mr image reconstruction of undersampled cartesian and radial data." Computers in biology and medicine 143 (2022): 105321. -->
## Study: Generalised Retrospective Motion Correction (RMC) using Deep Learning and Contrast Augmentation

- Previous methods required image priors, limiting generalisability.
- This extension introduces a deep learning method for RMC in MRI using:
  - ReconResNet model.
  - Novel contrast augmentation and artificial motion corruption techniques.

<!-- ---
## Methods

### Data
- Collected from 3T and 7T MRI Siemens scanners.
- **Dataset**: 600 training, 160 validation, and 158 testing image volumes.
- Only slices containing brain tissues were considered.

### Data Processing
- Random slice selection from 3D volumes.
- Noise removal and Min-Max normalization.
- Padding and resizing to 256x256.
- Contrast augmentation (as for the SSIM prediction). -->

---

<!-- ### Motion Corruption (as for the SSIM prediction)
- Two artificial motion corruption techniques:
  1. **TorchIO Functions**: Random ghosting and motion.
  2. **In-House Method**: Simulates real-world motion corruption using random parameters. -->

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
