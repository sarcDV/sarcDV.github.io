// Game parameters
const WORLD_SIZE = 20;
const DRONE_SPEED = 0.9;
const NUM_OBSTACLES = 15;
const TRAINING_EPISODES = 1000;

// RL parameters
const LEARNING_RATE = 0.3;
const DISCOUNT_FACTOR = 0.55;
const EXPLORATION_RATE = 0.9;
const EXPLORATION_DECAY = 0.995;

// Three.js setup
let scene, camera, renderer, drone, coin, obstacles = [];
let episode = 0, steps = 0, successes = 0, totalReward = 0;
let qTable = {};
let isTraining = false;
let isDemoMode = false;

init();

function init() {
    // Scene setup
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x87CEEB); // Sky blue
    
    // Camera setup
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 20, 30);
    camera.lookAt(0, 0, 0);
    
    // Renderer setup
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    
    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 20, 10);
    scene.add(directionalLight);
    
    // Ground
    const groundGeometry = new THREE.PlaneGeometry(WORLD_SIZE * 2, WORLD_SIZE * 2);
    const groundMaterial = new THREE.MeshStandardMaterial({ color: 0x228B22, side: THREE.DoubleSide });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    scene.add(ground);
    
    // Create drone
    createDrone();
    
    // Create coin
    createCoin();
    
    // Create obstacles
    createObstacles();
    
    // Add grid helper
    const gridHelper = new THREE.GridHelper(WORLD_SIZE * 2, WORLD_SIZE * 2);
    scene.add(gridHelper);
    
    // Event listeners
    window.addEventListener('resize', onWindowResize);
    document.getElementById('trainBtn').addEventListener('click', startTraining);
    document.getElementById('resetBtn').addEventListener('click', resetEnvironment);
    document.getElementById('demoBtn').addEventListener('click', toggleDemoMode);
    
    // Start animation loop
    animate();
}

function createDrone() {
    const bodyGeometry = new THREE.BoxGeometry(1, 0.5, 1);
    const bodyMaterial = new THREE.MeshStandardMaterial({ color: 0x333333 });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    
    const rotorGeometry = new THREE.CylinderGeometry(0.5, 0.5, 0.1, 32);
    const rotorMaterial = new THREE.MeshStandardMaterial({ color: 0x888888 });
    
    const rotor1 = new THREE.Mesh(rotorGeometry, rotorMaterial);
    rotor1.position.set(0.7, 0.3, 0.7);
    
    const rotor2 = new THREE.Mesh(rotorGeometry, rotorMaterial);
    rotor2.position.set(-0.7, 0.3, 0.7);
    
    const rotor3 = new THREE.Mesh(rotorGeometry, rotorMaterial);
    rotor3.position.set(0.7, 0.3, -0.7);
    
    const rotor4 = new THREE.Mesh(rotorGeometry, rotorMaterial);
    rotor4.position.set(-0.7, 0.3, -0.7);
    
    drone = new THREE.Group();
    drone.add(body);
    drone.add(rotor1);
    drone.add(rotor2);
    drone.add(rotor3);
    drone.add(rotor4);
    
    // Start at random position
    drone.position.x = Math.random() * WORLD_SIZE - WORLD_SIZE/2;
    drone.position.z = Math.random() * WORLD_SIZE - WORLD_SIZE/2;
    drone.position.y = 2;
    
    scene.add(drone);
}

function createCoin() {
    const geometry = new THREE.CylinderGeometry(0.5, 0.5, 0.1, 32);
    const material = new THREE.MeshStandardMaterial({ color: 0xFFD700 });
    coin = new THREE.Mesh(geometry, material);
    coin.rotation.x = Math.PI / 2;
    
    // Place coin at random position
    resetCoin();
    
    scene.add(coin);
}

function resetCoin() {
    coin.position.x = Math.random() * WORLD_SIZE - WORLD_SIZE/2;
    coin.position.z = Math.random() * WORLD_SIZE - WORLD_SIZE/2;
    coin.position.y = 1;
}

function createObstacles() {
    const obstacleGeometry = new THREE.BoxGeometry(1, 2, 1);
    const obstacleMaterial = new THREE.MeshStandardMaterial({ color: 0x8B4513 });
    
    for (let i = 0; i < NUM_OBSTACLES; i++) {
        const obstacle = new THREE.Mesh(obstacleGeometry, obstacleMaterial);
        
        // Place obstacles randomly but not too close to drone or coin
        let validPosition = false;
        while (!validPosition) {
            obstacle.position.x = Math.random() * WORLD_SIZE - WORLD_SIZE/2;
            obstacle.position.z = Math.random() * WORLD_SIZE - WORLD_SIZE/2;
            obstacle.position.y = 1;
            
            // Check distance to drone and coin
            const droneDist = Math.sqrt(
                Math.pow(obstacle.position.x - drone.position.x, 2) + 
                Math.pow(obstacle.position.z - drone.position.z, 2)
            );
            
            const coinDist = Math.sqrt(
                Math.pow(obstacle.position.x - coin.position.x, 2) + 
                Math.pow(obstacle.position.z - coin.position.z, 2)
            );
            
            if (droneDist > 3 && coinDist > 3) {
                validPosition = true;
            }
        }
        
        obstacles.push(obstacle);
        scene.add(obstacle);
    }
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function startTraining() {
    if (isTraining) return;
    
    isTraining = true;
    isDemoMode = false;
    document.getElementById('status').textContent = 'Training';
    episode = 0;
    successes = 0;
    updateUI();
    
    // Start training loop
    trainEpisode();
}

function trainEpisode() {
    if (episode >= TRAINING_EPISODES || !isTraining) {
        isTraining = false;
        document.getElementById('status').textContent = 'Training Complete';
        return;
    }
    
    episode++;
    steps = 0;
    totalReward = 0;
    
    // Reset positions
    drone.position.x = Math.random() * WORLD_SIZE - WORLD_SIZE/2;
    drone.position.z = Math.random() * WORLD_SIZE - WORLD_SIZE/2;
    resetCoin();
    
    // Run episode
    const episodeInterval = setInterval(() => {
        if (steps > 200) { // Max steps per episode
            clearInterval(episodeInterval);
            setTimeout(trainEpisode, 100);
            return;
        }
        
        steps++;
        updateUI();
        
        // Get current state
        const state = getState();
        
        // Choose action (epsilon-greedy)
        let action;
        if (Math.random() < EXPLORATION_RATE * Math.pow(EXPLORATION_DECAY, episode)) {
            // Explore: random action
            action = Math.floor(Math.random() * 4);
        } else {
            // Exploit: best known action
            action = getBestAction(state);
        }
        
        // Execute action
        const { reward, done } = executeAction(action);
        totalReward += reward;
        
        // Get new state
        const newState = getState();
        
        // Update Q-table
        updateQTable(state, action, reward, newState);
        
        if (done) {
            if (reward > 0) successes++;
            clearInterval(episodeInterval);
            setTimeout(trainEpisode, 100);
        }
    }, 50);
}

function getState() {
    // Simplified state representation: relative position to coin and nearest obstacle
    const dx = coin.position.x - drone.position.x;
    const dz = coin.position.z - drone.position.z;
    
    // Find nearest obstacle
    let minDist = Infinity;
    let obstacleDir = 0; // 0: none, 1: front, 2: right, 3: back, 4: left
    
    obstacles.forEach(obs => {
        const dist = Math.sqrt(
            Math.pow(obs.position.x - drone.position.x, 2) + 
            Math.pow(obs.position.z - drone.position.z, 2)
        );
        
        if (dist < 3 && dist < minDist) {
            minDist = dist;
            const angle = Math.atan2(
                obs.position.z - drone.position.z,
                obs.position.x - drone.position.x
            ) - Math.atan2(dz, dx);
            
            // Simplify obstacle direction relative to drone's heading
            if (angle > -Math.PI/4 && angle <= Math.PI/4) obstacleDir = 1; // front
            else if (angle > Math.PI/4 && angle <= 3*Math.PI/4) obstacleDir = 2; // right
            else if (angle > 3*Math.PI/4 || angle <= -3*Math.PI/4) obstacleDir = 3; // back
            else obstacleDir = 4; // left
        }
    });
    
    // Discretize state for simpler Q-table
    const dirX = dx > 0 ? 1 : -1;
    const dirZ = dz > 0 ? 1 : -1;
    const dist = Math.sqrt(dx*dx + dz*dz) < 5 ? 'near' : 'far';
    
    return `${dirX},${dirZ},${dist},${obstacleDir}`;
}

function getBestAction(state) {
    if (!qTable[state]) {
        qTable[state] = [0, 0, 0, 0]; // Initialize Q-values for this state
        return Math.floor(Math.random() * 4); // Random action if state is new
    }
    
    // Find action with highest Q-value
    let maxQ = -Infinity;
    let bestAction = 0;
    
    for (let i = 0; i < 4; i++) {
        if (qTable[state][i] > maxQ) {
            maxQ = qTable[state][i];
            bestAction = i;
        }
    }
    
    return bestAction;
}

function executeAction(action) {
    // Actions: 0: forward, 1: right, 2: backward, 3: left
    const moveX = [0, 1, 0, -1][action] * DRONE_SPEED;
    const moveZ = [1, 0, -1, 0][action] * DRONE_SPEED;
    
    // Check boundaries
    const newX = drone.position.x + moveX;
    const newZ = drone.position.z + moveZ;
    
    if (Math.abs(newX) > WORLD_SIZE || Math.abs(newZ) > WORLD_SIZE) {
        return { reward: -1, done: true }; // Hit boundary
    }
    
    // Check obstacles
    for (const obs of obstacles) {
        if (Math.abs(obs.position.x - newX) < 1 && Math.abs(obs.position.z - newZ) < 1) {
            return { reward: -1, done: true }; // Hit obstacle
        }
    }
    
    // Move drone
    drone.position.x = newX;
    drone.position.z = newZ;
    
    // Check if reached coin
    const distanceToCoin = Math.sqrt(
        Math.pow(coin.position.x - drone.position.x, 2) + 
        Math.pow(coin.position.z - drone.position.z, 2)
    );
    
    if (distanceToCoin < 1) {
        return { reward: 10, done: true }; // Success!
    }
    
    // Small negative reward for each step to encourage efficiency
    return { reward: -0.1, done: false };
}

function updateQTable(state, action, reward, newState) {
    // Initialize Q-values if states are new
    if (!qTable[state]) qTable[state] = [0, 0, 0, 0];
    if (!qTable[newState]) qTable[newState] = [0, 0, 0, 0];
    
    // Q-learning update
    const bestNextAction = getBestAction(newState);
    const bestNextQ = qTable[newState][bestNextAction];
    
    // Q(s,a) = Q(s,a) + α[r + γ*maxQ(s',a') - Q(s,a)]
    qTable[state][action] += LEARNING_RATE * (
        reward + DISCOUNT_FACTOR * bestNextQ - qTable[state][action]
    );
}

function resetEnvironment() {
    isTraining = false;
    isDemoMode = false;
    
    // Reset drone and coin
    drone.position.x = Math.random() * WORLD_SIZE - WORLD_SIZE/2;
    drone.position.z = Math.random() * WORLD_SIZE - WORLD_SIZE/2;
    resetCoin();
    
    // Reset UI
    episode = 0;
    steps = 0;
    totalReward = 0;
    document.getElementById('status').textContent = 'Exploring';
    updateUI();
}

function toggleDemoMode() {
    isDemoMode = !isDemoMode;
    isTraining = false;
    
    if (isDemoMode) {
        document.getElementById('status').textContent = 'Demo Mode';
        demoEpisode();
    } else {
        document.getElementById('status').textContent = 'Exploring';
    }
}

function demoEpisode() {
    if (!isDemoMode) return;
    
    // Reset positions
    drone.position.x = Math.random() * WORLD_SIZE - WORLD_SIZE/2;
    drone.position.z = Math.random() * WORLD_SIZE - WORLD_SIZE/2;
    resetCoin();
    
    steps = 0;
    updateUI();
    
    const demoInterval = setInterval(() => {
        if (!isDemoMode) {
            clearInterval(demoInterval);
            return;
        }
        
        steps++;
        if (steps > 100) { // Reset after some steps
            clearInterval(demoInterval);
            setTimeout(demoEpisode, 1000);
            return;
        }
        
        // Get state and best action
        const state = getState();
        const action = getBestAction(state);
        
        // Execute action
        const { reward, done } = executeAction(action);
        
        if (done) {
            clearInterval(demoInterval);
            setTimeout(demoEpisode, 1000);
        }
    }, 100);
}

function updateUI() {
    document.getElementById('episode').textContent = episode;
    document.getElementById('steps').textContent = steps;
    document.getElementById('successes').textContent = successes;
    document.getElementById('reward').textContent = totalReward.toFixed(1);
}

function animate() {
    requestAnimationFrame(animate);
    
    // Rotate drone rotors for visual effect
    if (drone.children.length > 1) {
        for (let i = 1; i <= 4; i++) {
            drone.children[i].rotation.y += 0.2;
        }
    }
    
    renderer.render(scene, camera);
}
