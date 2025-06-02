# Blockchain API – Inlämningsuppgift

Detta projekt är en förenklad blockchain-applikation byggd med **Node.js** som ett **REST API**. Syftet är att efterlikna en blockkedja där man kan skapa, hämta och lista block. Projektet följer MVC-arkitektur och använder testdriven utveckling (TDD).

---

## 🧪 Funktionalitet

### API-endpoints:
| Metod | URL | Beskrivning |
|-------|-----|-------------|
| `POST` | `/api/blocks` | Skapa ett nytt block |
| `GET` | `/api/blocks` | Lista alla block |
| `GET` | `/api/blocks/:index` | Hämta block med specifikt index |

---

## 🛠 Teknikstack & Funktioner

- **Node.js + Express**
- **ES6-moduler**
- **MVC-struktur**
- **Proof of Work** (PoW) för varje block
- **Beständig lagring** i `blockchain.json`
- **Central felhantering** (`errorHandler.js`)
- **Central loggning** till `error.log`
- **TDD med Vitest** (`tests/block.test.js`)
- **Komplex data i blocken** (objekt)

---

## 📦 Installation

```bash
git clone https://github.com/PsyAlien/Inl-mning-blockchain-api.git
cd Inl-mning-blockchain-api
npm install
```

---

## ▶️ Starta server

```bash
node server.js
```

---

## ✅ Testa API med Postman

### Skapa block:
```http
POST http://localhost:3000/api/blocks
Body (JSON):
{
  "data": {
    "user": "Mohammed",
    "message": "Mitt första block"
  }
}
```

### Lista block:
```http
GET http://localhost:3000/api/blocks
```

### Hämta block med index:
```http
GET http://localhost:3000/api/blocks/1
```

---

## 🧪 Köra tester

```bash
npx vitest run
```

---

## 👨‍💻 Av: Mohammed  
Medieinstitutet – Blockchainutbildning  
Inlämningsdatum: [Ditt datum här]
