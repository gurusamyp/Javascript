Perfect 👍
Below is a **more complex, real-world JavaScript project** that goes beyond simple fetch + table.
This includes **multiple async calls, deep object access, filtering, search, loading state, error handling, and dynamic UI updates**.

---

# 🚀 Advanced API Data Dashboard (Vanilla JS)

## 🧠 What Makes This Complex

✔ Multiple async operations
✔ Deep object access
✔ Search + filter
✔ Derived data (computed fields)
✔ Loading & error states
✔ Clean separation of logic
✔ Real-world UI behavior

---

## 🌐 APIs Used (Free)

1. Users

```
https://jsonplaceholder.typicode.com/users
```

2. Posts (linked by userId)

```
https://jsonplaceholder.typicode.com/posts
```

We will **merge both APIs**.

---

## 📁 Project Structure

```
advanced-api-dashboard/
│── index.html
│── script.js
│── style.css
```

---

## 🧩 1️⃣ HTML (Dynamic Controls + Cards)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Advanced API Dashboard</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

<h2>User Dashboard</h2>

<div class="controls">
  <input type="text" id="searchInput" placeholder="Search user name...">
  <select id="cityFilter">
    <option value="">All Cities</option>
  </select>
</div>

<div id="status"></div>
<div id="userContainer"></div>

<script src="script.js"></script>
</body>
</html>
```

---

## 🎨 2️⃣ CSS (Card-based UI)

```css
body {
  font-family: Arial;
  padding: 20px;
}

.controls {
  margin-bottom: 15px;
}

input, select {
  padding: 6px;
  margin-right: 10px;
}

.card {
  border: 1px solid #ccc;
  padding: 12px;
  margin-bottom: 10px;
  border-radius: 6px;
}

.card h3 {
  margin: 0 0 5px;
}

.badge {
  background: #007bff;
  color: white;
  padding: 3px 7px;
  border-radius: 4px;
  font-size: 12px;
}
```

---

## ⚙️ 3️⃣ JavaScript (Advanced Logic)

```js
const USERS_API = "https://jsonplaceholder.typicode.com/users";
const POSTS_API = "https://jsonplaceholder.typicode.com/posts";

const userContainer = document.getElementById("userContainer");
const cityFilter = document.getElementById("cityFilter");
const searchInput = document.getElementById("searchInput");
const statusDiv = document.getElementById("status");

let globalUsers = [];

/* ---------------- FETCH & MERGE DATA ---------------- */

async function loadDashboard() {
  try {
    setStatus("Loading data...");

    const [usersRes, postsRes] = await Promise.all([
      fetch(USERS_API),
      fetch(POSTS_API)
    ]);

    if (!usersRes.ok || !postsRes.ok) {
      throw new Error("Failed to load API data");
    }

    const users = await usersRes.json();
    const posts = await postsRes.json();

    globalUsers = mergeUsersWithPosts(users, posts);

    populateCityFilter(globalUsers);
    renderUsers(globalUsers);

    setStatus("");
  } catch (error) {
    setStatus(error.message);
  }
}

function mergeUsersWithPosts(users, posts) {
  return users.map(user => {
    const userPosts = posts.filter(p => p.userId === user.id);

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      city: user.address?.city ?? "Unknown",
      postCount: userPosts.length
    };
  });
}

/* ---------------- UI HELPERS ---------------- */

function renderUsers(users) {
  userContainer.innerHTML = "";

  if (users.length === 0) {
    userContainer.innerHTML = "<p>No users found</p>";
    return;
  }

  users.forEach(user => {
    userContainer.innerHTML += `
      <div class="card">
        <h3>${user.name}</h3>
        <p>Email: ${user.email}</p>
        <p>City: ${user.city}</p>
        <span class="badge">${user.postCount} Posts</span>
      </div>
    `;
  });
}

function populateCityFilter(users) {
  const cities = [...new Set(users.map(u => u.city))];

  cities.forEach(city => {
    const option = document.createElement("option");
    option.value = city;
    option.textContent = city;
    cityFilter.appendChild(option);
  });
}

function setStatus(message) {
  statusDiv.textContent = message;
}

/* ---------------- FILTER & SEARCH ---------------- */

function applyFilters() {
  const searchText = searchInput.value.toLowerCase();
  const selectedCity = cityFilter.value;

  let filtered = globalUsers.filter(user =>
    user.name.toLowerCase().includes(searchText)
  );

  if (selectedCity) {
    filtered = filtered.filter(user => user.city === selectedCity);
  }

  renderUsers(filtered);
}

/* ---------------- EVENTS ---------------- */

searchInput.addEventListener("input", applyFilters);
cityFilter.addEventListener("change", applyFilters);

/* ---------------- INIT ---------------- */
loadDashboard();
```

---

## 🧠 Key Advanced Concepts Used

| Concept            | Example               |
| ------------------ | --------------------- |
| Parallel API calls | `Promise.all()`       |
| Deep object access | `user.address?.city`  |
| Derived data       | `postCount`           |
| Global state       | `globalUsers`         |
| Search & filter    | Real-time UI          |
| Error handling     | `try/catch`           |
| UI re-render       | Efficient DOM updates |

---

## 🔥 Extra Challenges (Very Advanced)

Try adding:

* 📊 Sort by post count
* 📄 Pagination
* 🧠 Memoized filters
* 💾 LocalStorage cache
* 🧪 Unit tests
* 🌐 Replace API with **Weather / Country API**

---

## 💼 Interview-Ready Explanation

> “I built a dashboard that consumes multiple APIs, merges relational data, applies real-time filters, and renders optimized UI using vanilla JavaScript.”

---

If you want, next I can:

* 🔥 Make this **even harder**
* 🧩 Convert to **module-based architecture**
* ⚡ Add **performance optimizations**
* 🌐 Use **real production API**
* 🧪 Explain every line for interview

Just say the word 👌
