---
marp: true
theme: default
style: |
  section {
    background-color: #000000; /* Change background color */
    color: #fff; /* Change text color */
    font-size: 22px;
  }
  h1 {
    color: #ffffff; /* Change H1 color */
  }
  .p {
    font-size: 12px; /* Adjust as needed */
  }
  .logo {
    position: absolute;
    top: 30px;
    right: 30px;
    width: 150px; /* Adjust logo size */
  }
  .white-link {
        color: white; /* Set link color to white */
        text-decoration: none; /* Optional: remove underline */
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
---
<!-- <img src="images_videos/DuskRise-Logo-White-1.png" alt="Logo" class="logo"/> -->


# MAIAT: Malware AI Assisted Tool
<!-- ![logo](images_videos/DuskRise-Logo-White-1.png) -->
<div class="left-align">
    Alessandro Sciarra<br>
    <!-- Duskrise Italia Srl European HQ<br> -->
    <!-- Via Ostiense, 92 - 00154 Roma<br> -->
    <a href="mailto:alex.sciarra@dgmail.com" class="white-link">alex.sciarra@gmail.com</a><br>
    <a href="https://sarcdv.github.io/" target="_blank" class="white-link">Visit my Webpage</a><br>
    <!-- <a href="https://www.google.com/maps/search/?api=1&query=Via+Ostiense,+92,+00154+Roma" target="_blank" class="white-link">View on Google Maps</a> -->
</div>


---
<!-- <img src="images_videos/DuskRise-Logo-White-1.png" alt="Logo" class="logo"/> -->


## PROBLEM: Malware Detection and Classification

* A day (or better a hour) with a malware analyst
* Machine Learning approach
* Deep Learning approach 
* The proposed approach 

---
<!-- <img src="images_videos/DuskRise-Logo-White-1.png" alt="Logo" class="logo"/> -->


## A day (or better a hour) with a malware analyst 1

- Malware Analysis Work Flow:
  - **filetype identification**
  - **static analysis**: 
    - Initial inspection of malware files without executing them.
    - Analyzing code structures, libraries, and embedded resources.
  - **dynamic analysis**:
    - Running the malware in a controlled environment.
    - Observing its behavior, network communications, and system changes.
  - **behavioral analysis**:
    - Detailed examination of the malware's actions.
    - Identifying patterns and anomalies in behavior.
  - **YARA rule creation**: 
    - Writing YARA rules to detect malware.
    - Defining strings, conditions, and metadata to match malware signatures.

---
<!-- <img src="images_videos/DuskRise-Logo-White-1.png" alt="Logo" class="logo"/> -->


## A day (or better a hour) with a malware analyst 2

- **Pros**:

    - **Thorough Analysis**: Covers multiple facets like static, dynamic, and behavioral analyses, ensuring comprehensive understanding of the malware.
    - **Safety**: Dynamic analysis in a controlled environment minimizes the risk of spreading malware.
    - **Detailed Insight**: Behavioral analysis provides patterns and anomalies, aiding in accurate detection.
    - **Custom Detection**: YARA rules allow for specific, signature-based identification of threats.

- **Cons**:

    - **Time-Consuming**: Multiple steps can be slow and resource-intensive.
    - **Complexity**: Requires deep technical knowledge and specialized skills.
    - **False Positives/Negatives**: Manual creation of YARA rules can lead to errors in detection.
    - **Resource Intensive**: Setting up controlled environments and analyzing behavior can consume significant computational resources.

---
<!-- <img src="images_videos/DuskRise-Logo-White-1.png" alt="Logo" class="logo"/> -->


## Machine Learning Approach for Malware Detection and Classification

**Basic Workflow** 
1. **Data Collection**: Gather malware and benign samples from various sources.
2. **Data Preparation (Labeling)**: Assign labels (malware/benign) to collected samples.
3. **Data Validation**: Split data into training, validation, and test sets.
4. **Feature Extraction and Engineering**:
   - Extract relevant features from samples.
   - Engineer new features to improve detection.
5. **Train the Model**: Use training data to create a model.
6. **Test the Model**: Evaluate the model on the test set.
7. **Calculate Metrics**: Measure performance using metrics like accuracy, precision, recall, F1 score.

---
<!-- <img src="images_videos/DuskRise-Logo-White-1.png" alt="Logo" class="logo"/> -->


# Pros and Cons of Machine Learning in Malware Detection

## Pros
- **Automated Detection:** Reduces manual effort.
- **Scalability:** Can handle large datasets.
- **Adaptability:** Models can be updated with new data.

## Cons
- **Data Quality:** Requires high-quality labeled data.
- **Complexity:** Feature engineering can be complex and time-consuming.
- **False Positives/Negatives:** Risk of incorrect classifications.
---
<!-- <img src="images_videos/DuskRise-Logo-White-1.png" alt="Logo" class="logo"/> -->


# Deep Learning Approach for Malware Detection and Classification

## Basic Workflow
1. **Data Collection**: Gather malware and benign samples from various sources.
   
2. **Data Preparation (Labeling)**: Assign labels (malware/benign) to collected samples.

3. **Data Validation**: Split data into training, validation, and test sets.

4. **Feature Extraction**: Less manual feature engineering, as deep learning models learn features automatically.

5. **Train the Model**: Use deep learning architectures (e.g., CNNs, RNNs) to train on the data.

6. **Test the Model**: Evaluate the model on the test set.

7. **Calculate Metrics**: Measure performance using metrics like accuracy, precision, recall, F1 score.

---
<!-- <img src="images_videos/DuskRise-Logo-White-1.png" alt="Logo" class="logo"/> -->


## Pros and Cons of Deep Learning in Malware Detection

### Pros
- **Automated Feature Learning:** Reduces need for manual feature extraction.
- **High Accuracy:** Often more accurate, especially with large datasets.
- **Adaptability:** Can be updated with new data to improve detection.

### Cons
- **Resource Intensive:** Requires significant computational power and large datasets.
- **Complexity:** More complex to set up and train.
- **Overfitting:** Can overfit to training data if not carefully managed.
---
<!-- <img src="images_videos/DuskRise-Logo-White-1.png" alt="Logo" class="logo"/> -->


# Comparison: Machine Learning vs. Deep Learning

## Machine Learning
- **Feature Engineering:** Manual process, requires domain expertise.
- **Model Complexity:** Generally simpler models (e.g., decision trees, SVMs).
- **Data Requirements:** Can work with smaller datasets, but feature quality is critical.
- **Performance:** Good, but depends heavily on feature engineering.

## Deep Learning
- **Feature Engineering:** Minimal manual intervention; learns features automatically.
- **Model Complexity:** Complex architectures (e.g., CNNs, RNNs), more computationally intensive.
- **Data Requirements:** Requires large amounts of labeled data.
- **Performance:** Can achieve higher performance, especially with large datasets.
---
<!-- <img src="images_videos/DuskRise-Logo-White-1.png" alt="Logo" class="logo"/> -->


<!-- # Some information about the world of malware: -->
Total amount of Malware and PUA (Potentially Unwanted Application) :skull: :
<div style="text-align: center;">
<img src="images_videos/Total_amount_of_malware_and_PUA.png" alt="Description of the image" height="420"/>
</div>

---
<!-- <img src="images_videos/DuskRise-Logo-White-1.png" alt="Logo" class="logo"/> -->


<!-- # Some information about the world of malware: -->
New malware and PUA per second:
<div style="text-align: center;">
<img src="images_videos/New_malware_and_PUA_per_second.png" alt="Description of the image" height="300"/>
<img src="images_videos/New_malware.png" alt="Description of the image" height="300"/>
</div>

---
<!-- <img src="images_videos/DuskRise-Logo-White-1.png" alt="Logo" class="logo"/> -->


<!-- # Some information about the world of malware: -->
Distribution of malware and PUA by operating system:
<div style="text-align: center;">
<img src="images_videos/Distribution_by_os.png" alt="Description of the image" height="280"/>
<img src="images_videos/filetype_windows.png" alt="Description of the image" height="280"/>
</div>

---
<!-- <img src="images_videos/DuskRise-Logo-White-1.png" alt="Logo" class="logo"/> -->


<!-- # Some information about the world of malware: -->
Malware families and top names (Windows):
<div style="text-align: center;">
<img src="images_videos/malware_families_windows.png" alt="Description of the image" height="280"/>
<img src="images_videos/topMalwareNamesWin.png" alt="Description of the image" height="250"/>
</div>

---
<!-- <img src="images_videos/DuskRise-Logo-White-1.png" alt="Logo" class="logo"/> -->


# The proposed approach
- **Purpose:** Analyze any type of file for malware/PUA detection and classification.
- **Methodology:** Extract information similarly to static analysis. (Current version!!!)

**Key Features**
1. **File Analysis**
   - Extracts detailed information from files.
   - Mimics traditional static analysis techniques.
2. **Leveraging LLM (example: llama3.2)**
   - Utilizes the power of Local Large Language Models.
   - Processes and interprets extracted information.
   - Finds patterns and anomalies.
3. **Detection and Classification**
   - Determines if the analyzed file is malware or a Potentially Unwanted Application (PUA).

---
<!-- <img src="images_videos/DuskRise-Logo-White-1.png" alt="Logo" class="logo"/> -->


## Current Workflow
The proposed approach is currently limited to the detection only, NO CLASSIFICATION YET!! :broken_heart: :broken_heart: :broken_heart:
<img src="images_videos/MAIAT_workflow.png" alt="Description of the image" height="480"/>

---
<!-- <img src="images_videos/DuskRise-Logo-White-1.png" alt="Logo" class="logo"/> -->


## Benefits 😊😊😊
- **Scalable:** Can handle various file types.
- **Accurate:** High precision in detection.
- **Efficient:** Quick analysis and processing.

## Conclusion
- A game-changer in file analysis and malware detection.

---
<!-- <img src="images_videos/DuskRise-Logo-White-1.png" alt="Logo" class="logo"/> -->


## Future Developments

**Next Steps**
1. **Dynamic Analysis**
   - **Info Extraction & Report Generation:**
     - Perform dynamic analysis using a dedicated sandbox.
     - Extract detailed run-time information and generate comprehensive reports.

2. **Specialized Local LLMs**
   - **LLM for Decompiling:**
     - Utilize models like `llm4decompile-9b-v2`.
     - Decompile x86 assembly instructions into higher-level languages like C.

3. **Database for Faster Detection**
   - **Clustering Approach:**
     - Develop a database to store analyzed data.
     - Implement clustering or similar techniques for quicker detection and classification of future threats.

---
<!-- <img src="images_videos/DuskRise-Logo-White-1.png" alt="Logo" class="logo"/> -->


## Vision

- **Enhanced Accuracy:** Improve detection precision with dynamic analysis.
- **Efficiency:** Streamline processes with specialized local LLMs.
- **Scalability:** Build a robust database for faster and more scalable malware detection.

<!-- --- -->
<!-- <img src="images_videos/DuskRise-Logo-White-1.png" alt="Logo" class="logo"/> -->


<!-- ## Current architecture for "Hunting & Investigate"

<img src="images_videos/hunting_investigate.png" alt="Description of the image" height="450"/> -->

---

## Proposed approach

<img src="images_videos/slides_per_CTI_001.jpeg" alt="Description of the image" height="450"/> 


<!-- <img src="images_videos/DuskRise-Logo-White-1.png" alt="Logo" class="logo"/> -->
<!-- 

## New architecture for "Hunting & Investigate"

<img src="images_videos/slides_per_CTI_001.jpeg" alt="Description of the image" height="450"/> -->

<!-- --- -->
<!-- <img src="images_videos/DuskRise-Logo-White-1.png" alt="Logo" class="logo"/> -->


<!-- ## New architecture for "Hunting & Investigate"

- **Investigate** is a VirusTotal wrapper, basically we keep that approach with the signature-based malware detection
- **Sandbox** and **RetroHunt** are combined together

- **AI Detector and Classifier** is a completely new section
- **Be My Analyst** is left as it is -->



<!-- https://gist.github.com/rxaviers/7360908 -->
<!-- ```sh
#!/bin/bash
source ./shell_utils/general_info.sh
source ./shell_utils/pe_analysis.sh
source ./shell_utils/chatbot_start.sh
source ./shell_utils/pdf_analysis.sh
source ./shell_utils/office_analysis.sh
source ./shell_utils/script_analysis.sh
source ./shell_utils/LLM_questioning.sh
source ./shell_utils/Keep_questioning.sh
source ./shell_utils/move_files_to_analysed.sh
source ./shell_utils/LLM_PE_analysis.sh
source ./shell_utils/correct_json.sh
source ./shell_utils/yara_iterate.sh
printf "\e[37m╔═══╗╔═══╗╔═══╗╔═══╗╔═══╗╔═══╗╔═══╗\e[0m \n"
printf "\e[36m║   ║║   ║║   ║║   ║║   ║║   ║║   ║\e[0m \n"
printf "\e[35m║ M ║║ a ║║ l ║║ w ║║ a ║║ r ║║ e ║\e[0m \n"
printf "\e[34m║   ║║   ║║   ║║   ║║   ║║   ║║   ║\e[0m \n"
printf "\e[33m╚═══╝╚═══╝╚═══╝╚═══╝╚═══╝╚═══╝╚═══╝\e[0m \n\n"
printf "\e[32m  AI Assisted (LLM) Analysis Tool  \e[0m \n"
# ....
echo "╔═══╗╔═══╗╔═══╗╔═══╗╔═══╗╔═══╗╔═══╗╔═══╗"
echo "║ A ║║ n ║║ a ║║ l ║║ y ║║ s ║║ i ║║ s ║"
echo "╚═══╝╚═══╝╚═══╝╚═══╝╚═══╝╚═══╝╚═══╝╚═══╝"
echo ""
echo "Select the type of analysis based on the information above:"
echo ""
options=("Archive" "ELF" "OFFICE" "PDF" "PE" "Script" "Quit")
# Display a menu for user selection
select opt in "${options[@]}"
do
    echo ""
    case $opt in
        "Archive")
            echo "You selected Archive analysis"
            echo " " 
            ;;
        "ELF")            
            echo "You selected ELF analysis"
            elf_analysis $1 | tee /dev/tty > ./output/elf_analysis.txt
            echo " "
            chatbot_start $2
            echo " "
            ;;
        "PDF")
            echo " " 
            echo "You selected PDF analysis"
            pdf_analysis $1 | tee /dev/tty > ./output/pdf_analysis.txt
            echo " "
            chatbot_start $2
            echo " "
            # move_files_to_analysed $1
            # rm -rf PDFiD.log
            ;;
        "PE")
            echo " "
            echo "You selected PE analysis"
            pe_analysis $1 | tee /dev/tty > ./output/pe_analysis.txt
            # pecli strings $1 > ./output/pe_strings.txt
            strings $1 > ./output/pe_strings.txt
            # iconv -f ISO-8859-1 -t UTF-8 pe_strings_clean.txt -o pe_strings_utf8.txt
            ## check yara rules:
            yara_iterate ./yaraify-rules ./output/pe_strings.txt > ./output/pe_yara_matching.txt
            gobjdump -D  $1 > ./output/pe_assembly.txt # objdump on linux...
            hexdump -C  $1 > ./output/pe_hex.txt
            echo " "
            echo "Assembly, hex and strings are not shown here, but are saved in separate files:"
            echo " "
            # chatbot_start $1
            LLM_PE_ANALYSIS $1
            extract_json ./output/general_info_TS.json
            extract_json ./output/pe_analysis_TS.json
            extract_json ./output/pe_strings_TS.json
            extract_json ./output/pe_yara_TS.json
            echo " " 
            ;;
        "Script")
            echo " "
            echo "You selected Script analysis"
            script_analysis $1
            echo " "
            echo " codellama is the suggested LLM to analyse script! ;) "
            chatbot_start $1 
            echo " " 
            ;;
        "Quit")
            ##  create a subfolder in analyzed and move the files in the output folder there
            move_files_to_analysed $1
            rm -rf PDFiD.log
            echo "Exiting..."
            echo " " 
            break
            ;;
        *) 
            echo "Invalid option"
            echo " " 
            ;;
    esac
    echo " "
done
echo " " 
``` -->


<!-- <div style="text-align: center;">
<video width="960" height="720" controls>
  <source src="video.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
</div> -->


<!-- &nbsp;&nbsp;&nbsp; <!-- Add spaces 
<img src="DuskRise-Logo-White-1.png" alt="Image 1"  height=70px/> -->
<!-- &nbsp;&nbsp;&nbsp; Add spaces
<img src="bmmr_logo_RGB_125.png" alt="Image 2"  height=80px/>
 &nbsp;&nbsp;&nbsp; Add spaces 
<img src="MedDigit.png" alt="Image 2"  height=80px/> -->

<!-- <div class="image-row">
  <img src="logo_verde.png" alt="Image 1" />
  <img src="bmmr_logo_RGB_125.png" alt="Image 2" />
  <img src="Medigit.png" alt="Image 3" />
</div> -->

<!-- ffmpeg -i input.mov -vcodec h264 -acodec mp2 output.mp4


## Outline

* MRI@Ultra High Field: a short intro
* Scope: Head Motion Leads to Poor Image Quality or 
* Image Quality Assessment
* Prospective Motion Correction
* 
* Retrospective Motion Correction
* 


---

## Slide 2

Content for slide 2. -->
