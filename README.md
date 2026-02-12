# 🚀 Salesforce LWC Projects Collection

This repository contains multiple Lightning Web Component (LWC) projects built for learning and practice.

---

## 📚 Component Projects Included

### 1️⃣ Book Search App

A dynamic book search application built using LWC that fetches real-time search data from the Google Books API.  

#### ✨ Features  
- Live search while typing (dynamic search)  
- Debounced API calls (optimized performance)  
- Fetches real-time book data from external API  
- Displays book thumbnail, title, Rating, publish date  
- Handles empty search safely  
- Error handling for failed API responses  
- Reactive UI updates without page refresh  

#### 🧠 Concepts Used   
- Fetch API integration in LWC  
- Debounce technique using setTimeout  
- Dynamic URL parameter handling  
- dynamic fetch value for safe query building  
- Conditional rendering (if:true)  
- Template iteration (for:each)  
- Reactive state management  

### 2️⃣ QuizApp2 Component

An interactive quiz application built using LWC.

#### ✨ Features
- Dynamic question rendering
- Radio button answer selection
- Stores selected answers per question
- Previous / Next navigation
- Score calculation
- Result display at completion
- Clean SLDS-based UI

#### 🧠 Concepts Used
- Reactive properties
- Object-based state management
- Event handling
- Conditional rendering
- Template iteration (`for:each`)
- Controlled navigation logic

---

### 3️⃣ QuizApp1 Component

This Component is similar to QuizApp2 but, here all questions diplayed in Single Screen.

---

### 4️⃣ MemoryGame Component

A fully functional 4x4 memory card matching game.

#### ✨ Features
- 16 cards (8 matching pairs)
- Random shuffle on load/reset
- Flip-to-reveal logic
- Only 2 cards visible at a time
- Automatic hide on mismatch
- Matched cards stay visible
- Score tracking
- Live timer
- Win detection
- Reset functionality
- Stable grid layout using CSS visibility

#### 🧠 Concepts Used
- Array manipulation
- Object state tracking
- Controlled user interaction
- Game state management
- DOM reactivity handling in LWC
- Timer using `setInterval`
- Conditional UI rendering
- CSS visibility control for layout stability

---

## 📂 Project Structure
- force-app/
  - └── main/
    - └── default/
      - └── lwc/
        - ├── book App/
        - ├── quiz App1/
        - ├── quiz App2/
        - └── memory Game Lwc/

## 🛠 Technologies Used

- Salesforce Lightning Web Components (LWC)
- Apex
- JavaScript (ES6)
- SLDS (Salesforce Lightning Design System)
- External REST APIs
- HTML/CSS


## ⭐ Feedback

This repository is built for learning and showcasing LWC development skills.  
Suggestions and feedback are always welcome.