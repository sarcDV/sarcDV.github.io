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
  table {
    background-color: black; /* Set table background color to black */
    color: white; /* Set text color to white for better contrast */
    border-collapse: collapse; /* Optional: for better border handling */
  }
  th, td {
    padding: 10px; /* Optional: for spacing */
    border: 1px solid #444; /* Optional: for borders */
    background-color: black;
  }
  th {
    background-color: #333; /* Darker background for header cells */
   }
  
# pre {
  #   background-color: #ff0; /* Set background color for code snippets */
  #   color: #000; /* Set text color for code snippets */
  #   padding: 10px; /* Optional: for spacing */
  #   border-radius: 5px; /* Optional: for rounded corners */
  #  }

#    .th, td {
#     padding: 10px; /* Optional: for spacing */
#     border: 1px solid #ccc; /* Optional: for borders */
#     }

#     .th {
#     background-color: #d0d0d0; /* Change header background color */
#     }
---
<!-- <img src="images_and_videos/DuskRise-Logo-White-1.png" alt="Logo" class="logo"/> -->


# SPICH Project: AI-powered Network Detection and Response (NDR)
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
<!-- <img src="images_and_videos/DuskRise-Logo-White-1.png" alt="Logo" class="logo"/> -->


## OVERVIEW

**Definition**: An AI-powered Network and Detection Response (NDR) system is a security solution that uses artificial intelligence to monitor network traffic and detect potential threats in real-time.

**Key Features**:
- **Real-time Monitoring**: Continuously analyzes network traffic for suspicious activities.
- **Threat Detection**: Utilizes machine learning algorithms to identify anomalies and potential threats.
- **Automated Response**: Can automatically respond to detected threats to mitigate risks.
- **Behavioral Analysis**: Establishes a baseline of normal network behavior to identify deviations.
- **Integration**: Works with other security tools and systems for a comprehensive security posture.

---
<!-- <img src="images_and_videos/DuskRise-Logo-White-1.png" alt="Logo" class="logo"/> -->


**Benefits**:
- **Improved Accuracy**: Reduces false positives through advanced AI algorithms.
- **Faster Response Times**: Enables quicker identification and remediation of threats.
- **Enhanced Visibility**: Provides insights into network activities and potential vulnerabilities.
- **Scalability**: Adapts to growing network environments and evolving threats.

**Use Cases**:
- **Intrusion Detection**: Identifying unauthorized access attempts.
- **Data Exfiltration Prevention**: Detecting unauthorized data transfers.
- **Malware Detection**: Identifying malicious software within the network.

---
<!-- <img src="images_and_videos/DuskRise-Logo-White-1.png" alt="Logo" class="logo"/> -->


## IMPLEMENTATION ROADMAP

1. Requirement Analysis
2. Data Collection
3. Data Preprocessing
4. Model Development
5. Model Evaluation
6. Integration with Existing Systems
7. Deployment
8. Monitoring and Maintenance
9. Feedback Loop

---
<!-- <img src="images_and_videos/DuskRise-Logo-White-1.png" alt="Logo" class="logo"/> -->


### REQUIREMENT ANALYSIS

- Identify business objectives and security requirements.
- Gather input from stakeholders (security teams, IT staff, management).
- Define the scope and functionalities of the NDR system.

### DATA COLLECTION

- Identify data sources (network traffic, logs, endpoint data).
- Implement data collection mechanisms (packet capture, log aggregation).
- Ensure compliance with data privacy regulations.


---
<!-- <img src="images_and_videos/DuskRise-Logo-White-1.png" alt="Logo" class="logo"/> -->


### DATA PREPROCESSING

- Clean and normalize the collected data.
- Perform feature extraction and selection.
- Label data for supervised learning (if applicable).

### MODEL DEVELOPMENT

- Choose appropriate AI/ML algorithms (e.g., GNN, RL, anomaly detection).
- Train models using historical data.
- Validate models using cross-validation techniques.


---
<!-- <img src="images_and_videos/DuskRise-Logo-White-1.png" alt="Logo" class="logo"/> -->


### MODEL EVALUATION

- Evaluate model performance using metrics (accuracy, precision, recall, F1-score).
- Conduct stress testing and performance benchmarking.
- Iterate on model tuning and optimization.

### INTEGRATION WITH EXISTING SYSTEMS

- Integrate the NDR system with existing security infrastructure (SIEM, firewalls).
- Ensure interoperability with other security tools.
- Implement APIs for data exchange and communication.

---

<!-- <img src="images_and_videos/DuskRise-Logo-White-1.png" alt="Logo" class="logo"/> -->


### DEPLOYMENT

- Deploy the NDR system in a staging environment for testing.
- Conduct user acceptance testing (UAT) with stakeholders.
- Deploy the system to production after successful testing.

### MONITORING AND MAINTENANCE

- Continuously monitor system performance and detection accuracy.
- Update models with new data and threats regularly.
- Provide ongoing support and maintenance for the system.


### FEEDBACK LOOP

- Gather feedback from users and stakeholders.
- Analyze incidents and adjust models and processes accordingly.
- Iterate on system improvements based on feedback and new threat intelligence.

---
<!-- <img src="images_and_videos/DuskRise-Logo-White-1.png" alt="Logo" class="logo"/> -->


### TO CREATE AN EFFECTIVE AI-POWERED NETWORK DETECTION AND RESPONSE (NDR) SYSTEM

It's important to collect a variety of data sources to ensure comprehensive monitoring and accurate threat detection. Here's why:

**TYPES OF DATA TO COLLECT**:

- **<u>Firewall Logs</u>**: These logs record all traffic passing through the firewall, including allowed and blocked traffic, source and destination IP addresses, port numbers, and protocols[<sup>1</sup>](https://cyberpedia.reasonlabs.com/EN/firewall%20logs.html "Visit source"). They provide a baseline of network activity and help identify unusual patterns.
- **<u>SIEM Logs</u>**: Security Information and Event Management (SIEM) systems aggregate logs from various sources, including firewalls, intrusion detection systems (IDS), antivirus systems, and more[<sup>2</sup>](https://www.paloaltonetworks.com/cyberpedia/what-is-siem-logging? "Visit source"). SIEM logs provide a holistic view of security events across the network.
- **<u>Network Traffic Data</u>**: Capturing raw network packets or traffic metadata allows for deep packet inspection and analysis of network behavior[<sup>3</sup>](https://www.gartner.com/reviews/market/network-detection-and-response). This data helps in identifying anomalies and potential threats.
- **<u>Endpoint Logs</u>**: Logs from endpoint devices (e.g., workstations, servers) can provide insights into user behavior, file access, and application usage. This data is crucial for detecting insider threats and malicious activities.
- **<u>Application Logs</u>**: Logs from applications and services running on the network can reveal unusual activities, errors, and potential vulnerabilities.


---
<!-- <img src="images_and_videos/DuskRise-Logo-White-1.png" alt="Logo" class="logo"/> -->


### Why Combine Firewall and SIEM Logs?

Combining firewall and SIEM logs offers several advantages:

- **Comprehensive Visibility**: By integrating logs from both sources, you get a complete picture of network activity, allowing for more accurate threat detection and response[<sup>1</sup>](https://blog.netwrix.com/2022/12/21/siem-firewalls/?).

- **Correlation of Events**: SIEM systems can correlate events from different sources, helping to identify complex attack patterns that might be missed if only one data source is used[<sup>2</sup>](https://logrhythm.com/blog/logs-to-bring-into-your-siem/?).

- **Enhanced Threat Detection**: The combination of firewall and SIEM logs enables the detection of both external and internal threats, providing a more robust security posture[<sup>1</sup>](https://blog.netwrix.com/2022/12/21/siem-firewalls/?).

- **Automated Response**: With integrated data, the NDR system can automate responses to detected threats, such as blocking malicious traffic or isolating compromised devices[<sup>3</sup>](https://www.fortinet.com/resources/cyberglossary/what-is-ndr?).

In summary, while firewall logs are valuable, combining them with SIEM logs and other data sources enhances the effectiveness of your AI-powered NDR system by providing a more comprehensive and accurate view of network activity and potential threats.

---
<!-- <img src="images_and_videos/DuskRise-Logo-White-1.png" alt="Logo" class="logo"/> -->


# Strategies for Using Only Firewall Logs

If firewall logs are your only data source, don't worry.  
There are still many effective strategies you can implement to build a robust AI-powered NDR system.

---
<!-- <img src="images_and_videos/DuskRise-Logo-White-1.png" alt="Logo" class="logo"/> -->


## 1. Deep Log Analysis

- Utilize advanced analytics to examine patterns in firewall logs.
- Extract features such as IP addresses, port numbers, protocols, and timestamps.
- Employ machine learning models to identify unusual patterns and potential threats.

---
<!-- <img src="images_and_videos/DuskRise-Logo-White-1.png" alt="Logo" class="logo"/> -->


## 2. Feature Engineering

- Create derived features like connection frequency, session duration, and data volume.
- Combine these features to form a comprehensive view of the network activity.

---
<!-- <img src="images_and_videos/DuskRise-Logo-White-1.png" alt="Logo" class="logo"/> -->


## 3. Anomaly Detection

- Use unsupervised learning techniques like clustering and anomaly detection to identify deviations from normal traffic patterns.
- Algorithms like Isolation Forests, One-Class SVM, and Autoencoders can be effective.

---
<!-- <img src="images_and_videos/DuskRise-Logo-White-1.png" alt="Logo" class="logo"/> -->


## 4. Threat Intelligence Integration

- Integrate external threat intelligence feeds with your firewall logs.
- Match IP addresses and domains against known threat indicators to enhance threat detection.

---
<!-- <img src="images_and_videos/DuskRise-Logo-White-1.png" alt="Logo" class="logo"/> -->


## 5. Behavioral Analysis

- Monitor for changes in typical behavior, such as unusual access times or unexpected connections.
- Implement rules and heuristics to detect anomalies.

---
<!-- <img src="images_and_videos/DuskRise-Logo-White-1.png" alt="Logo" class="logo"/> -->


## 6. Visualization Tools

- Use visualization tools to create dashboards and reports that highlight suspicious activity.
- Tools like Kibana, Grafana, or Splunk (for basic free tiers) can help visualize and analyze log data.



--- 
<!-- <img src="images_and_videos/DuskRise-Logo-White-1.png" alt="Logo" class="logo"/> -->


# CICIDS 2017 (Canadian Institute for Cybersecurity Intrusion Detection System)

- **Description**: A dataset that includes various types of attacks and normal traffic, designed for intrusion detection systems.
- **Download Link**: [CICIDS 2017 Dataset](https://www.unb.ca/cic/datasets/ids-2017.html)
- **Instructions**: 
  - Visit the link provided.
  - Scroll down to the "Download" section and follow the instructions to access the dataset.
- **Link**: [Labelling Issues](https://intrusion-detection.distrinet-research.be/WTMC2021/extended_doc.html)  
  The time frames of the attacks listed on the CICIDS2017 webpage are not entirely accurate, and do not allow for exact reproduction of the labelling process used by the CICIDS2017 authors. Instead, we had to manually tune the timing windows until our labelling logic more or less resulted in the same number of flows per class as can be found in the original dataset. To save everybody the trouble of repeating this process, we post a table of our manually tuned attack timing windows. Note that anything that falls outside all attack timing windows is automatically labelled as benign.

---
<!-- <img src="images_and_videos/DuskRise-Logo-White-1.png" alt="Logo" class="logo"/> -->


## Attack Timing Windows

| Attack Class                  | Simulation Date            | Attack Start Time | Attack End Time   |
|-------------------------------|----------------------------|--------------------|--------------------|
| FTP Patator                   | Tuesday, July 4, 2017      | 09:17:00 AM        | 10:30:00 AM        |
| SSH Patator                   | Tuesday, July 4, 2017      | 01:00:00 PM        | 04:11:00 PM        |
| DoS Slowloris                 | Wednesday, July 5, 2017    | 02:23:00 AM        | 10:12:59 AM        |
| DoS SlowHTTPtest              | Wednesday, July 5, 2017    | 10:13:00 AM        | 10:38:00 AM        |
| DoS Hulk                      | Wednesday, July 5, 2017    | 10:39:00 AM        | 11:09:00 AM        |
| DoS GoldenEye                 | Wednesday, July 5, 2017    | 11:10:00 AM        | 11:23:00 AM        |
| Heartbleed                    | Wednesday, July 5, 2017    | 03:11:00 PM        | 03:33:00 PM        |
| Web Attack - Brute Force      | Thursday, July 6, 2017      | 09:10:00 AM        | 10:12:00 AM        |
| Web Attack - XSS              | Thursday, July 6, 2017      | 10:13:00 AM        | 10:37:00 AM        |
| Web Attack - Sql Injection     | Thursday, July 6, 2017      | 10:39:00 AM        | 10:45:00 AM        |
| Infiltration                  | Thursday, July 6, 2017      | 02:15:00 PM        | 03:50:00 PM        |
| Botnet                        | Friday, July 7, 2017        | 09:30:00 AM        | 12:59:59 PM        |
| Port Scan                     | Friday, July 7, 2017        | 12:30:00 PM        | 03:40:00 PM        |
| DDoS                          | Friday, July 7, 2017        | 03:40:00 PM        | 04:30:00 PM        |

---
<!-- <img src="images_and_videos/DuskRise-Logo-White-1.png" alt="Logo" class="logo"/> -->


## CICIDS 2017 and 2018 Labeling Issues

1. **Inconsistent Labeling**: Inconsistencies in how certain attacks or benign activities are labeled can lead to confusion and affect model performance.

2. **Ambiguity in Labels**: Some labels may not clearly define the nature of the attack or benign activity, complicating classification.

3. **Imbalanced Classes**: Imbalance in the number of instances for different classes can lead to biased model performance.

4. **Overlapping Features**: Certain features may overlap between different types of attacks or benign traffic, complicating the labeling process.

5. **Outdated Attack Vectors**: Inclusion of outdated attack vectors can mislead researchers regarding the effectiveness of detection methods.

6. **Lack of Contextual Information**: Insufficient contextual information about the network environment can impact the interpretation of labels.

---
<!-- <img src="images_and_videos/DuskRise-Logo-White-1.png" alt="Logo" class="logo"/> -->


## CICIDS 2017 and 2018 Labeling Issues

### Conclusion

Researchers should be aware of these issues and consider them when developing and evaluating models.

<!--  -->
<!--  -->
--- 

<!-- <img src="images_and_videos/DuskRise-Logo-White-1.png" alt="Logo" class="logo"/> -->


# NDR vs. IDS

Network Detection and Response (NDR) and Intrusion Detection Systems (IDS) are both critical components of cybersecurity, but they serve different purposes and operate in distinct ways.

---
<!-- <img src="images_and_videos/DuskRise-Logo-White-1.png" alt="Logo" class="logo"/> -->


### Intrusion Detection System (IDS)

**Overview**:
- An IDS is a security solution designed to monitor network traffic and system activities for malicious activities or policy violations.
- It can be classified into two main types: Network-based IDS (NIDS) and Host-based IDS (HIDS).

**Key Features**:
- **Detection**: IDS primarily focuses on detecting suspicious activities and potential intrusions. It analyzes traffic patterns, system logs, and other data to identify anomalies or known attack signatures.
- **Alerting**: When an intrusion is detected, the IDS generates alerts to notify administrators of potential security incidents.
- **Passive Response**: IDS typically does not take direct action to block or mitigate threats; it is mainly a monitoring and alerting system.

--- 
<!-- <img src="images_and_videos/DuskRise-Logo-White-1.png" alt="Logo" class="logo"/> -->


### Intrusion Detection System (IDS)

**Types**:
- **Signature-based IDS**: Detects known threats by comparing traffic against a database of signatures (known attack patterns).
- **Anomaly-based IDS**: Establishes a baseline of normal behavior and identifies deviations from this baseline as potential threats.

**Applications**:
- Monitoring network traffic for suspicious activity
- Analyzing logs for signs of unauthorized access
- Alerting security teams to potential threats

---
<!-- <img src="images_and_videos/DuskRise-Logo-White-1.png" alt="Logo" class="logo"/> -->


### Network Detection and Response (NDR)

**Overview**:
- NDR is a more advanced security solution that combines detection capabilities with response mechanisms to address threats in real-time.
- It focuses on monitoring network traffic and using advanced analytics, including machine learning and behavioral analysis, to detect threats.

**Key Features**:
- **Detection and Response**: NDR not only detects threats but also provides automated or manual response capabilities to mitigate those threats.
- **Behavioral Analysis**: NDR solutions often use machine learning and advanced analytics to identify anomalies and suspicious behavior that may indicate a security incident.
- **Contextual Awareness**: NDR systems provide context around detected threats, helping security teams understand the nature and potential impact of an incident.

---
<!-- <img src="images_and_videos/DuskRise-Logo-White-1.png" alt="Logo" class="logo"/> -->


### Network Detection and Response (NDR)

**Applications**:
- Real-time threat detection and response
- Investigation of security incidents
- Continuous monitoring of network traffic for advanced threats

---
<!-- <img src="images_and_videos/DuskRise-Logo-White-1.png" alt="Logo" class="logo"/> -->


### Comparison

| Feature                     | Intrusion Detection System (IDS)         | Network Detection and Response (NDR)    |
|-----------------------------|------------------------------------------|-----------------------------------------|
| **Primary Function**        | Detects and alerts on potential intrusions | Detects threats and responds to them    |
| **Response Capability**     | Passive (alerting only)                  | Active (automated or manual response)   |
| **Detection Methods**       | Signature-based and anomaly-based        | Behavioral analysis, machine learning    |
| **Focus**                   | Monitoring for known threats             | Comprehensive threat detection and response |
| **Contextual Awareness**    | Limited context                          | Provides context around detected threats  |
| **Complexity**              | Generally simpler                        | More complex, often requiring integration with other security tools |

---
<!-- <img src="images_and_videos/DuskRise-Logo-White-1.png" alt="Logo" class="logo"/> -->


### Conclusion

While both IDS and NDR are essential for network security, they serve different roles. IDS is primarily focused on detecting and alerting on potential intrusions, while NDR encompasses a broader approach that includes detection, response, and advanced analytics to address threats in real-time. Organizations often use both systems in conjunction to enhance their overall security posture.

---
<!-- <img src="images_and_videos/DuskRise-Logo-White-1.png" alt="Logo" class="logo"/> -->


## Which AI approach is the most suitable for a NDR
When it comes to Network Detection and Response (NDR) systems, several AI approaches can be employed to enhance threat detection, response capabilities, and overall security posture. The most suitable AI approaches for NDR typically include:

### 1. **Machine Learning (ML)**

- **Supervised Learning**: This approach involves training models on labeled datasets containing examples of both normal and malicious behavior. Algorithms such as decision trees, support vector machines, and neural networks can be used to classify network traffic and identify anomalies.
  
- **Unsupervised Learning**: This is particularly useful for detecting unknown threats. Clustering algorithms (e.g., k-means, DBSCAN) can group similar traffic patterns, helping to identify outliers that may indicate malicious activity.

- **Semi-Supervised Learning**: This combines both labeled and unlabeled data, which can be beneficial when labeled data is scarce. It allows the model to learn from a small amount of known threats while also leveraging a larger set of normal traffic data.

---
<!-- <img src="images_and_videos/DuskRise-Logo-White-1.png" alt="Logo" class="logo"/> -->


### 2. **Deep Learning**

- **Neural Networks**: Deep learning models, particularly recurrent neural networks (RNNs) and convolutional neural networks (CNNs), can be effective for analyzing complex patterns in network traffic data. They can automatically learn features from raw data, making them suitable for high-dimensional datasets.

- **Autoencoders**: These can be used for anomaly detection by learning a compressed representation of normal traffic. When new traffic is introduced, the autoencoder can identify anomalies based on reconstruction errors.

---
<!-- <img src="images_and_videos/DuskRise-Logo-White-1.png" alt="Logo" class="logo"/> -->


### 3. **Behavioral Analysis**

- **Anomaly Detection**: AI techniques can be used to establish a baseline of normal behavior for users and devices on the network. Any significant deviation from this baseline can trigger alerts for potential threats.

- **User and Entity Behavior Analytics (UEBA)**: This approach focuses on monitoring user and entity behavior to detect insider threats or compromised accounts. Machine learning models can analyze patterns of behavior and flag anomalies.

---
<!-- <img src="images_and_videos/DuskRise-Logo-White-1.png" alt="Logo" class="logo"/> -->


### 4. **Natural Language Processing (NLP)**

- **Threat Intelligence Analysis**: NLP can be used to analyze unstructured data from threat intelligence feeds, security logs, and incident reports. This can help in identifying emerging threats and correlating them with network activity.

### 5. **Reinforcement Learning**

- **Automated Response**: Reinforcement learning can be applied to develop systems that learn optimal response strategies to detected threats. The system can be trained to take actions based on the state of the network and the nature of the threat, improving its response over time.

---
<!-- <img src="images_and_videos/DuskRise-Logo-White-1.png" alt="Logo" class="logo"/> -->


### Conclusion

The most suitable AI approach for an NDR system often involves a combination of these techniques. A hybrid model that integrates supervised and unsupervised learning, along with deep learning for complex pattern recognition, can provide robust detection capabilities. Additionally, incorporating behavioral analysis and reinforcement learning can enhance the system's ability to respond to threats effectively.

Ultimately, the choice of AI approach will depend on the specific requirements of the organization, the nature of the network environment, and the types of threats being targeted. A well-rounded NDR solution will leverage multiple AI techniques to create a comprehensive security framework.

---
<!-- <img src="images_and_videos/DuskRise-Logo-White-1.png" alt="Logo" class="logo"/> -->


Self-Organizing Maps (SOMs) are a type of unsupervised neural network that can be used for various tasks, including anomaly detection. They are particularly useful for visualizing high-dimensional data and identifying patterns or clusters within the data. Here’s how SOMs can be applied to anomaly detection:

### Overview of Self-Organizing Maps

1. **Structure**: SOMs consist of a grid of neurons, each representing a point in the input space. The neurons are typically arranged in a two-dimensional lattice.

2. **Training**: During training, input data is presented to the SOM, and the neurons compete to represent the input. The "winning" neuron (the one closest to the input data point) and its neighbors are updated to become more like the input data.

3. **Topology Preservation**: SOMs preserve the topological properties of the input space, meaning that similar input data points will activate nearby neurons on the map.

--- 
<!-- <img src="images_and_videos/DuskRise-Logo-White-1.png" alt="Logo" class="logo"/> -->


### Anomaly Detection Process

1. **Training the SOM**: 
   - Collect a dataset that represents normal behavior.
   - Train the SOM on this dataset, allowing it to learn the underlying patterns and structures.

2. **Mapping New Data**:
   - When new data points are introduced, they are mapped onto the trained SOM.
   - Each data point will activate a specific neuron based on its similarity to the trained patterns.

3. **Identifying Anomalies**:
   - Anomalies can be detected by analyzing the distance between the input data point and the winning neuron. If the distance exceeds a certain threshold, the data point can be considered an anomaly.
   - Another approach is to look at the density of data points in the neighborhood of the winning neuron. If a new data point falls into a sparsely populated area of the map, it may be flagged as an anomaly.

---
<!-- <img src="images_and_videos/DuskRise-Logo-White-1.png" alt="Logo" class="logo"/> -->


### Advantages of Using SOMs for Anomaly Detection

- **Unsupervised Learning**: SOMs do not require labeled data, making them suitable for scenarios where anomalies are rare or unknown.
- **Visualization**: The two-dimensional representation of the SOM allows for easy visualization of clusters and anomalies.
- **Topology Preservation**: The ability to maintain the relationships between data points helps in identifying outliers effectively.

### Considerations

- **Parameter Tuning**: The performance of SOMs can be sensitive to parameters such as the size of the map, learning rate, and neighborhood function.
- **Computational Complexity**: Training SOMs can be computationally intensive, especially for large datasets.
- **Interpretability**: While SOMs provide a visual representation, interpreting the results and understanding the nature of detected anomalies may require additional analysis.

---
<!-- <img src="images_and_videos/DuskRise-Logo-White-1.png" alt="Logo" class="logo"/> -->


### Conclusion

Self-Organizing Maps can be a powerful tool for anomaly detection, particularly in high-dimensional datasets where traditional methods may struggle. By leveraging their ability to cluster and visualize data, SOMs can help identify unusual patterns that may indicate anomalies.

---
<!-- <img src="images_and_videos/DuskRise-Logo-White-1.png" alt="Logo" class="logo"/> -->


## SOM VERSUS VAE

Self-Organizing Maps (SOMs) and Variational Autoencoders (VAEs) are both techniques used in unsupervised learning, but they have different architectures, purposes, and applications. 

| Feature                     | Self-Organizing Maps (SOMs)               | Variational Autoencoders (VAEs)          |
|-----------------------------|-------------------------------------------|------------------------------------------|
| **Type**                    | Unsupervised neural network               | Generative model                         |
| **Architecture**            | Grid of neurons (topological map)        | Encoder-decoder architecture             |
| **Learning Objective**      | Clustering and visualization              | Data reconstruction and generation       |
| **Latent Space**            | Discrete, topological representation      | Continuous, structured representation    |
| **Generative Capability**   | No (primarily for clustering)            | Yes (can generate new samples)          |
| **Interpretability**        | High (visualization of clusters)         | Moderate (latent space can be complex)  |
| **Applications**            | Clustering, anomaly detection, visualization | Image generation, data imputation, anomaly detection |


---
<!-- <img src="images_and_videos/DuskRise-Logo-White-1.png" alt="Logo" class="logo"/> -->



```py
""" Self mapping Topology Network"""
import pandas as pd
import ipaddress
from tqdm import tqdm

def is_internal_ip(ip):
    """Check if the given IP address is an internal IP."""
    try:
        ip_obj = ipaddress.ip_address(ip)
        return ip_obj.is_private
    except ValueError:
        return False

def get_subnet(ip):
    """Get the subnet of the given IP address."""
    try:
        ip_network_obj = ipaddress.ip_network(ip, strict=False)
        return ip_network_obj
    except ValueError:
        return None

def discover_internal_ips(csv_file):
    """Discover internal IPs from the given CSV file."""
    # Read the CSV file
    df = pd.read_csv(csv_file)
    
    # Correct column names
    source_ips = df[' Source IP'].unique()
    destination_ips = df[' Destination IP'].unique()
    
    # Combine source and destination IPs
    all_ips = set(source_ips).union(set(destination_ips))
    
    # Filter internal IPs
    internal_ips = [ip for ip in tqdm(all_ips, desc="Filtering Internal IPs") if is_internal_ip(ip)]
    
    # Check for matching subnets
    matching_subnets = set()
    for src_ip in tqdm(source_ips, desc="Checking Source IPs"):
        for dest_ip in destination_ips:
            if get_subnet(src_ip) == get_subnet(dest_ip):
                matching_subnets.add(get_subnet(src_ip))
    
    return internal_ips, matching_subnets

# Example usage
csv_file_path = './TrafficLabelling/Monday-WorkingHours_pcap_ISCX.csv'  # Replace with your CSV file path
internal_ips, matching_subnets = discover_internal_ips(csv_file_path)

print("Internal IPs found:")
for ip in internal_ips:
    print(ip)

print("\nMatching subnets found:")
for subnet in matching_subnets:
    print(subnet)
```

---
<!-- <img src="images_and_videos/DuskRise-Logo-White-1.png" alt="Logo" class="logo"/> -->


When you detect an anomaly in network flow data (NetFlow), leveraging an AI-powered Network Detection and Response (NDR) system can enhance your response and investigation process. Here’s a structured approach to proceed:
1. **Initial Assessment**:
   - **Verify the Anomaly**: Confirm that the detected anomaly is not a false positive. Review the context of the anomaly, such as the time, affected hosts, and types of traffic involved.
   - **Gather Contextual Information**: Collect additional data related to the anomaly, including logs from firewalls, intrusion detection systems, and endpoint security solutions.
2. **Utilize AI-Powered NDR Capabilities**:
   - **Automated Analysis**: Use the AI capabilities of your NDR solution to analyze the anomaly. The system can correlate the anomaly with historical data, identify patterns, and assess the severity of the threat.
   - **Threat Intelligence Integration**: Leverage threat intelligence feeds integrated into the NDR to determine if the anomaly is associated with known threats or malicious behavior.
3. **Investigation**:
   - **Deep Packet Inspection**: If your NDR supports it, perform deep packet inspection to analyze the content of the traffic associated with the anomaly.
   - **User and Entity Behavior Analytics (UEBA)**: Use UEBA features to assess whether the behavior of users or devices involved in the anomaly deviates from their normal patterns.

---
<!-- <img src="images_and_videos/DuskRise-Logo-White-1.png" alt="Logo" class="logo"/> -->


4. **Response Actions**:
   - **Containment**: If the anomaly is confirmed as malicious, take immediate containment actions, such as isolating affected devices or blocking suspicious IP addresses.
   - **Remediation**: Work on remediation steps, which may include patching vulnerabilities, removing malware, or changing configurations to prevent future occurrences.
5. **Documentation and Reporting**:
   - **Document Findings**: Keep detailed records of the anomaly, investigation steps, and response actions taken. This documentation is crucial for compliance and future reference.
   - **Generate Reports**: Use the reporting features of your NDR to create summaries of the incident for stakeholders and to inform future security strategies.
6. **Post-Incident Review**:
   - **Analyze the Response**: After addressing the anomaly, conduct a post-incident review to evaluate the effectiveness of your response and the performance of the NDR system.
   - **Update Security Policies**: Based on the findings, update your security policies, incident response plans, and training for staff to improve future detection and response efforts.

---
<!-- <img src="images_and_videos/DuskRise-Logo-White-1.png" alt="Logo" class="logo"/> -->


7. **Continuous Improvement**:
   - **Feedback Loop**: Use insights gained from the incident to improve the AI models within the NDR system. This may involve retraining models with new data or adjusting thresholds for anomaly detection.
   - **Regular Monitoring**: Continue to monitor network traffic and anomalies using the NDR, ensuring that the system adapts to evolving threats.
By following these steps, you can effectively leverage an AI-powered NDR to respond to anomalies detected in NetFlow data, enhancing your overall network security posture.

---
<!-- <img src="images_and_videos/DuskRise-Logo-White-1.png" alt="Logo" class="logo"/> -->


## ping example.com 

```sh
ping google.com
PING google.com (216.58.205.46): 56 data bytes
64 bytes from 216.58.205.46: icmp_seq=0 ttl=118 time=11.964 ms
64 bytes from 216.58.205.46: icmp_seq=1 ttl=118 time=15.332 ms
64 bytes from 216.58.205.46: icmp_seq=2 ttl=118 time=16.522 ms
64 bytes from 216.58.205.46: icmp_seq=3 ttl=118 time=15.589 ms
64 bytes from 216.58.205.46: icmp_seq=4 ttl=118 time=13.538 ms
64 bytes from 216.58.205.46: icmp_seq=5 ttl=118 time=13.206 ms
64 bytes from 216.58.205.46: icmp_seq=6 ttl=118 time=14.137 ms
64 bytes from 216.58.205.46: icmp_seq=7 ttl=118 time=17.064 ms
64 bytes from 216.58.205.46: icmp_seq=8 ttl=118 time=16.138 ms
64 bytes from 216.58.205.46: icmp_seq=9 ttl=118 time=14.638 ms
64 bytes from 216.58.205.46: icmp_seq=10 ttl=118 time=12.709 ms
64 bytes from 216.58.205.46: icmp_seq=11 ttl=118 time=14.286 ms
^C
--- google.com ping statistics ---
23 packets transmitted, 23 packets received, 0.0% packet loss
round-trip min/avg/max/stddev = 11.964/14.845/17.566/1.442 ms
```

---
<!-- <img src="images_and_videos/DuskRise-Logo-White-1.png" alt="Logo" class="logo"/> -->


## whois IP_ADDRESS
```sh
whois 216.58.205.46
% IANA WHOIS server
% for more information on IANA, visit http://www.iana.org
% This query returned 1 object

refer:        whois.arin.net

inetnum:      216.0.0.0 - 216.255.255.255
organisation: ARIN
status:       ALLOCATED

whois:        whois.arin.net

changed:      1998-04
source:       IANA

# whois.arin.net

NetRange:       216.58.192.0 - 216.58.223.255
CIDR:           216.58.192.0/19
NetName:        GOOGLE
NetHandle:      NET-216-58-192-0-1
Parent:         NET216 (NET-216-0-0-0-0)
NetType:        Direct Allocation
OriginAS:       AS15169
Organization:   Google LLC (GOGL)
RegDate:        2012-01-27
Updated:        2012-01-27
Ref:            https://rdap.arin.net/registry/ip/216.58.192.0

OrgName:        Google LLC
OrgId:          GOGL
Address:        1600 Amphitheatre Parkway
City:           Mountain View
StateProv:      CA
PostalCode:     94043
Country:        US
RegDate:        2000-03-30
Updated:        2019-10-31
Comment:        Please note that the recommended way to file abuse complaints are located in the following links. 
Comment:        
Comment:        To report abuse and illegal activity: https://www.google.com/contact/
Comment:        
Comment:        For legal requests: http://support.google.com/legal 
Comment:        
Comment:        Regards, 
Comment:        The Google Team
Ref:            https://rdap.arin.net/registry/entity/GOGL

OrgTechHandle: ZG39-ARIN
OrgTechName:   Google LLC
OrgTechPhone:  +1-650-253-0000 
OrgTechEmail:  arin-contact@google.com
OrgTechRef:    https://rdap.arin.net/registry/entity/ZG39-ARIN

OrgAbuseHandle: ABUSE5250-ARIN
OrgAbuseName:   Abuse
OrgAbusePhone:  +1-650-253-0000 
OrgAbuseEmail:  network-abuse@google.com
OrgAbuseRef:    https://rdap.arin.net/registry/entity/ABUSE5250-ARIN
```

---
<!-- <img src="images_and_videos/DuskRise-Logo-White-1.png" alt="Logo" class="logo"/> -->


## dig example.com

```sh
dig google.com

; <<>> DiG 9.10.6 <<>> google.com
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 37351
;; flags: qr rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 1

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 1232
;; QUESTION SECTION:
;google.com.                    IN      A

;; ANSWER SECTION:
google.com.             269     IN      A       216.58.205.46

;; Query time: 22 msec
;; SERVER: 1.1.1.1#53(1.1.1.1)
;; WHEN: Wed Oct 23 15:09:08 CEST 2024
;; MSG SIZE  rcvd: 55
```

---
<!-- <img src="images_and_videos/DuskRise-Logo-White-1.png" alt="Logo" class="logo"/> -->


## nslookup IP_ADDRESS
```sh
nslookup 216.58.205.46
Server:         1.1.1.1
Address:        1.1.1.1#53

Non-authoritative answer:
46.205.58.216.in-addr.arpa      name = lhr48s23-in-f14.1e100.net.
46.205.58.216.in-addr.arpa      name = mil04s24-in-f46.1e100.net.
46.205.58.216.in-addr.arpa      name = mil04s24-in-f14.1e100.net.
46.205.58.216.in-addr.arpa      name = mil07s19-in-f14.1e100.net.

Authoritative answers can be found from:

nslookup google.com   
Server:         1.1.1.1
Address:        1.1.1.1#53

Non-authoritative answer:
Name:   google.com
Address: 142.250.180.174
```
---
<!-- <img src="images_and_videos/DuskRise-Logo-White-1.png" alt="Logo" class="logo"/> -->


EDR, XDR, and NDR are acronyms that refer to different types of advanced 
threat detection and response systems used by organizations to protect 
themselves against cyber threats. Here's a brief explanation of each:

---
<!-- <img src="images_and_videos/DuskRise-Logo-White-1.png" alt="Logo" class="logo"/> -->


1. **EDR (Endpoint Detection and Response)**:
EDR is a type of security solution that focuses on detecting and 
responding to threats at the endpoint level, typically referring to 
laptops, desktops, mobile devices, or servers. EDR solutions monitor 
endpoint activity, detect suspicious behavior, and provide threat 
intelligence to help organizations respond quickly to emerging threats.

---
<!-- <img src="images_and_videos/DuskRise-Logo-White-1.png" alt="Logo" class="logo"/> -->


2. **XDR (Extended Detection and Response)**:
XDR is an advanced version of EDR that expands the detection scope beyond 
just endpoints. It includes not only endpoint monitoring but also network 
detection, cloud detection, and file-based detection, providing a 
comprehensive view of potential threats across all these areas. XDR 
solutions aim to detect and respond to threats earlier and more 
effectively.

---
<!-- <img src="images_and_videos/DuskRise-Logo-White-1.png" alt="Logo" class="logo"/> -->


3. **NDR (Network Detection and Response)**:
NDR is a security solution that focuses on detecting and responding to 
threats in real-time within an organization's network environment. It 
typically includes advanced network monitoring capabilities, threat 
intelligence, and incident response tools to quickly identify potential security breaches or 
malicious activity. NDR solutions are designed to protect the entire network infrastructure from cyber threats.

---
<!-- <img src="images_and_videos/DuskRise-Logo-White-1.png" alt="Logo" class="logo"/> -->

In summary:

- EDR primarily monitors endpoint activity for detection and response.
- XDR goes beyond endpoints, integrating with network and cloud environments for comprehensive threat detection and response.
- NDR is focused on real-time network monitoring and detecting potential security breaches.

---
<!-- <img src="images_and_videos/DuskRise-Logo-White-1.png" alt="Logo" class="logo"/> -->


**AI-Powered EDR Solution: "Sentinel"**

1. **Endpoint Monitoring**: Sentinel uses machine learning algorithms to monitor endpoint activity in real-time, detecting suspicious behavior and anomalies.
2. **Behavioral Analysis**: The solution analyzes user behavior, identifying patterns that may indicate a security threat.
3. **Threat Intelligence**: Sentinel integrates with threat intelligence feeds to provide up-to-date information on known threats and vulnerabilities.
4. **Anomaly Scoring**: A machine learning model assigns an anomaly score to each endpoint, indicating the likelihood of a security breach.
5. **Automated Response**: If an anomaly is detected, Sentinel triggers an automated response, including the ability to quarantine the affected endpoint or initiate a manual investigation.
6. **User Education**: The solution provides user education and awareness tools to prevent insider threats and promote safe computing practices.

**Architecture:**

1. Client-side software installed on endpoints
2. Cloud-based server infrastructure for data storage and processing
3. Integration with existing security tools, such as antivirus software

---
<!-- <img src="images_and_videos/DuskRise-Logo-White-1.png" alt="Logo" class="logo"/> -->


**AI-Powered XDR Solution: "Guardian"**

1. **Network Monitoring**: Guardian uses machine learning algorithms to monitor network traffic in real-time, detecting suspicious activity and anomalies.
2. **Cloud Detection**: The solution analyzes cloud-based data sources for signs of unauthorized access or malicious activity.
3. **File-Based Analysis**: Guardian scans files for malware and other threats using advanced analytics and machine learning.
4. **Endpoint Monitoring**: The solution integrates with endpoint monitoring tools to provide a comprehensive view of potential threats across all environments.
5. **Threat Intelligence**: Guardian feeds into threat intelligence platforms to share information on known threats and vulnerabilities.
6. **Automated Response**: If an anomaly is detected, Guardian triggers an automated response, including the ability to quarantine affected resources or initiate a manual investigation.

**Architecture:**

1. Client-side software installed on endpoints
2. Cloud-based server infrastructure for data storage and processing
3. Integration with existing security tools, such as network monitoring systems

---
<!-- <img src="images_and_videos/DuskRise-Logo-White-1.png" alt="Logo" class="logo"/> -->


**AI-Powered NDR Solution: "Watchman"**

1. **Network Traffic Analysis**: Watchman uses machine learning algorithms to analyze network traffic in real-time, detecting suspicious activity and anomalies.
2. **Anomaly Scoring**: A machine learning model assigns an anomaly score to each packet of data, indicating the likelihood of a security breach.
3. **Behavioral Analysis**: The solution analyzes user behavior, identifying patterns that may indicate a security threat.
4. **Threat Intelligence**: Watchman integrates with threat intelligence feeds to provide up-to-date information on known threats and vulnerabilities.
5. **Automated Response**: If an anomaly is detected, Watchman triggers an automated response, including the ability to block traffic or initiate a manual investigation.
6. **Visual Analytics**: The solution provides visual analytics tools for security teams to investigate and respond to security incidents.

**Architecture:**

1. Cloud-based server infrastructure for data storage and processing
2. Integration with existing network monitoring systems
3. Client-side software installed on edge devices, such as firewalls and routers

---
<!-- <img src="images_and_videos/DuskRise-Logo-White-1.png" alt="Logo" class="logo"/> -->


**Common Components:**

1. **Machine Learning Engine**: A proprietary machine learning engine that analyzes data from various sources to detect anomalies and threats.
2. **Data Analytics Platform**: A cloud-based platform for storing and analyzing data from various sources, including endpoint logs, network traffic, and threat intelligence feeds.
3. **Security Information and Event Management (SIEM) System**: An integrated system for collecting, storing, and analyzing security-related data from various sources.
