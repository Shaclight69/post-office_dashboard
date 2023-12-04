## Post Office Admin Dashboard w/ Redux Toolkit Query

### Overview

The Post Office Admin Dashboard provides us with three main page sections :

- Client-facing pages with Products, Customers, and Transaction details.
- Sales pages with line charts about an Overview, daily and monthly sales, and a Breakdown shown as a pie chart.
- Management page with administrators' details.

### Technologies and Frameworks :

**Frontend :**

- **_React 18.2.0_**
- **_MaterialUI & MUI Datagrid_**
- **_Nivo Charts_**
- **_Redux Toolkit Query_**

**_Backend :_**

- **_NodeJS_**
- **_ExpressJS_**
- **_Mongoose / MongoDB_**

### Installation

Follow these steps to install and run the project:

1. **Clone the repository**

   Open your terminal and run the following command to clone the repository:

   ```bash
   git clone https://github.com/Shaclight69/post-office_dashboard.git
   ```

2. **Navigate to the project directory**

   ```bash
   cd post-office_dashboard
   ```

3. **Navigate to the client & server directories in seperate terminals**

   ```bash
   cd client
   cd server
   ```

4. **Install their required packages in each one**

   ```bash
   npm i
   ```

5. **Set up the environment variables**

   The project requires the MONGODB_URI & PORT environment variable to be defined. You can do this in a `.env` file in the root of your project:

   ```bash
   MONGO_URL=your_mongodb_uri
   PORT=your_server_port
   ```

6. **Start the server**

   Run the following command to start the server:

   ```bash
   npm run dev
   ```

7. **Start the client**

   Run the following command to start the server:

   ```bash
   npm start
   ```

Now, you should be able to access the project at `http://localhost:3000`.

Please note that the project requires the "m.media-amazon.com" domain to be accessible for image handling. If you are unable to access this domain, you may encounter issues with image loading.
