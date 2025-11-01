### **API Contract for CampusConnect MVP**

#### **1. Auth Service**
*   **Base URL:** `/api/auth`

| Purpose | Method | Path | Request Body | Protected? |
| :--- | :--- | :--- | :--- | :--- |
| Register a new user | `POST` | `/register` | `{ "username", "email", "password" }` | No |
| Log in a user | `POST` | `/login` | `{ "email", "password" }` | No |
| Get user profile | `GET` | `/profile` | (none) | Yes |

#### **2. Events Service**
*   **Base URL:** `/api/events`

| Purpose | Method | Path | Request Body | Protected? |
| :--- | :--- | :--- | :--- | :--- |
| Get all events | `GET` | `/` | (none) | No |
| Get a single event | `GET` | `/:id` | (none) | No |
| Create a new event | `POST` | `/` | `{ "title", "date", "location", "description" }` | Yes |
| Update an event | `PUT` | `/:id` | `{ "title", "date", "location", "description" }` | Yes |
| Delete an event | `DELETE`| `/:id` | (none) | Yes |
| RSVP to an event | `POST` | `/:id/rsvp` | (none) | Yes |

#### **3. Lost & Found Service**
*   **Base URL:** `/api/items`

| Purpose | Method | Path | Request Body | Protected? |
| :--- | :--- | :--- | :--- | :--- |
| Get all items (can filter) | `GET` | `/?status=lost` | (none) | No |
| Get a single item | `GET` | `/:id` | (none) | No |
| Post a new item | `POST` | `/` | `{ "status", "title", "location", "description" }` | Yes |
| Update a posted item | `PUT` | `/:id` | `{ "title", "location", "description" }` | Yes |
| Delete a posted item | `DELETE`| `/:id` | (none) | Yes |

---

## **4. Chat Service**

-   **Base URL:** `/api/chat`
-   **Purpose:** Manages private, one-on-one conversations related to Lost & Found items.

### **REST API Endpoints**

These endpoints are for creating and retrieving conversation history.

| Purpose | Method | Path | Request Body | Protected? |
| :--- | :--- | :--- | :--- | :--- |
| Start a new conversation | `POST` | `/conversations` | `{ "itemId", "receiverId" }` | Yes |
| Get all of a user's conversations | `GET` | `/conversations` | (none) | Yes |
| Get message history for a conversation| `GET` | `/conversations/:id/messages` | (none) | Yes |

### **WebSocket Events**

These events are for real-time message exchange.

| Event Name | Direction | Payload | Description |
| :--- | :--- | :--- | :--- |
| `joinConversation` | Client → Server | `{ "conversationId" }` | Client joins a specific conversation room to listen for messages. |
| `sendMessage` | Client → Server | `{ "conversationId", "text" }` | Client sends a new message to a conversation. |
| `receiveMessage` | Server → Client | `{ "senderId", "text", "timestamp" }` | Server broadcasts a new message to the other client in the room. |

---
