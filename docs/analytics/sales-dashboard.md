import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 📊Sales Dashboard

The **Sales Dashboard** in C360 provides visibility into **Leads** and **Opportunities**, helping sales teams monitor performance and identify growth opportunities.  

To access **Sales Dashboard**:  
➡️ Go to **Analytics** → **Insights** → **Sales Dashboard** from the left-hand menu.

---

## 🎛️Filters 


Both sections include a **dropdown menu** for filtering by **Company, Country, and Users**. and The dashboard provides multiple filter options for fiscal periods, months, and days, along with additional customization and graph actions.

:::tip
💡 You can switch between **Date Range** and **Respective Filters** tabs to refine your analysis based on time period or specific criteria.  
:::


<Tabs>
  <TabItem value="date-range" label="Date Range Filter" default>
  <Tabs>
<TabItem value="fiscal-year" label="Fiscal Year">
:::tip
You can choose from the following options:
<details>
<summary><strong>Options</strong></summary>
<p>

- Current FY
- Previous FY
- Next FY
- Current and Previous FY
- Current and Next FY
</p>
</details>
:::

</TabItem>

<TabItem value="fiscal-quarter" label="Fiscal Quarter">

:::tip
You can select from the following options:

<details>
<summary><strong>Options</strong></summary>
<p>
- Current FQ
- Previous FQ
- Next FQ
- Current and Previous FQ
- Current and Previous 2 FQ
- Current and Previous 3 FQ
</p>
</details>
:::
</TabItem>

<TabItem value="calendar-month" label="Calendar Month">
:::tip
You have the following choices:
<details>
<summary><strong>Options</strong></summary>
<p>
- This Month
- Previous Month
- Next Month
- Current and Previous Month
- Current and Next Month
</p>
</details>
:::
</TabItem>

<TabItem value="day" label="Day">
:::tip
You can choose from the following options:
<details>
<summary><strong>Options</strong></summary>
<p>
- Today
- Last 7 days
- Last 15 days
- Last 30 days
- Last 60 days
</p>
</details>
:::
</TabItem>

<TabItem value="custom" label="Custom Date Range">
:::tip
In addition to the predefined options, there is also a **Custom** option where you can manually specify the start and end dates for a custom date range.
:::
</TabItem>
  </Tabs>

  </TabItem>

  <TabItem value="respective-filters" label="Respective Filters">

  - **Respective Filters** – Filters data by **Country, Company, and Users**.  


     :::tip 
      1.The **Users filter** works only when either **Country** or **Company** is selected.  
      2.**Company** is disabled if **Country** is selected, and vice versa.  
     :::
  </TabItem>
</Tabs>

---

## 📈Graph Options

<Tabs>
 <TabItem value="report-link" label="Report Link">
:::tip
Each graph includes a **Report Link** at the end.  
Clicking this link redirects you to a detailed report or additional insights related to the selected graph.
:::
</TabItem>

<TabItem value="default-graphs" label="Default Graphs">
:::tip
To view default graphs without applying any date filters, simply click the **Apply** button after selecting the filter icon.
:::
</TabItem>

<TabItem value="graph-actions" label="Graph Actions">

Each graph includes common actions:

- **Download** → Save the graph as a file
- **Restore** → Reset the graph to its default view

</TabItem>
</Tabs>

---

## 🧲Leads Analytics

<div className="grid grid-cols-2 gap-4">

  <div className="card shadow-md rounded-xl p-4">
    <h4>📊 Engagement Metrics</h4>
    <ul>
      <li><strong>Asset Tracking by User</strong> – Tracks marketing asset usage (e.g., images, videos, documents) by users.</li>
      <li><strong>Hot Leads Without Activity (> 48 hours)</strong> – Highlights hot leads without recent activity.</li>
      <li><strong>Asset Tracking by Customer</strong> – Tracks marketing asset usage by customers.</li>
      <li><strong>Total Leads Created</strong> – Overall volume of leads generated.</li>
    </ul>
  </div>

  <div className="card shadow-md rounded-xl p-4">
    <h4>✅ Conversion Metrics</h4>
    <ul>
      <li><strong>Count of Converted Leads</strong> – Total leads successfully converted into customers.</li>
      <li><strong>Converted Leads by Quarter</strong> – Shows conversion trends by quarter.</li>
      <li><strong>Converted Leads by Lead Owner</strong> – Tracks lead conversions per salesperson.</li>
      <li><strong>Leads by Status & Source</strong> – Pipeline overview segmented by status and source.</li>
    </ul>
  </div>

  <div className="card shadow-md rounded-xl p-4 col-span-2">
    <h4>💰 Revenue Metrics</h4>
    <ul>
      <li><strong>Total Value Converted ($)</strong> – Cumulative revenue from converted leads.</li>
      <li><strong>Total Value Converted per Quarter</strong> – Revenue trends across quarters.</li>
      <li><strong>Value by Opportunity Amount</strong> – Distribution of revenue across opportunity sizes.</li>
      <li><strong>Value by Lead Owner</strong> – Revenue contribution by each salesperson.</li>
      <li><strong>Value by Lead Source</strong> – Revenue generated by different lead sources.</li>
    </ul>
  </div>

</div>



---

## 💼Opportunities Analytics

The Opportunities dashboard provides detailed insights into **revenue, pipeline, and win rates**.

<div className="grid grid-cols-2 gap-4">

  <div className="card shadow-md rounded-xl p-4">
    <h4>🎯 Executive Sponsor: Key Metrics</h4>
    <ul>
      <li><strong>FYTD Revenue</strong> – Closed-won revenue in the fiscal year-to-date.</li>
      <li><strong>Revenue by Quarter & Month</strong> – Trends across quarters and months.</li>
      <li><strong>Opportunity Pipeline</strong> – Active opportunities excluding Closed Won.</li>
      <li><strong>Top Open Opportunities</strong> – Highest-value open deals.</li>
      <li><strong>Average Opportunity Size</strong> – Typical closed-won deal size.</li>
      <li><strong>Opportunity Win Rate</strong> – Conversion ratio of opportunities to wins.</li>
      <li><strong>Lost Opportunities</strong> – Value of closed-lost opportunities.</li>
      <li><strong>Top 10 Accounts</strong> – Highest revenue & potential accounts.</li>
    </ul>
    <figure>
        <img src="/media/analytics/insight/sales/executive sponsor key matrics.png" alt="Sales Dashboard - Executive Sponsor Metrics" />
        <figcaption>Executive Sponsor – Key Sales Metrics</figcaption>
      </figure>
  </div>

  <div className="card shadow-md rounded-xl p-4">
    <h4>📈 Key Performance Indicators</h4>
    <ul>
      <li><strong>FYTD Revenue</strong> – Total closed-won revenue.</li>
      <li><strong>Revenue by Quarter</strong> – Quarter-wise revenue performance.</li>
      <li><strong>Opportunity Win Rate</strong> – Wins vs. total closed deals.</li>
      <li><strong>Average Opportunity Size</strong> – Typical deal value.</li>
      <li><strong>Average Days to Close</strong> – Sales cycle length.</li>
      <li><strong>Won + High Probability Opens</strong> – Closed-won + promising deals.</li>
      <li><strong>Opportunity Pipeline</strong> – Active opportunity value.</li>
    </ul>
    <figure>
        <img src="/media/analytics/insight/sales/key performance indicator.png" alt="Sales Dashboard - Key Performance Indicators" />
        <figcaption>Key Sales Performance Indicators</figcaption>
      </figure>
  </div>

  <div className="card shadow-md rounded-xl p-4">
    <h4>🔄 Round Robin Dashboard</h4>
    <ul>
      <li><strong>Total Across Partners</strong> – Records, Assigned, In Progress, and Opportunities.</li>
      <li><strong>Performance by Partner</strong> – Lead distribution and partner outcomes.</li>
    </ul>
    <figure>
        <img src="/media/analytics/insight/sales/round robin dashboard.png" alt="Sales Dashboard - Round Robin Metrics" />
        <figcaption>Round Robin – Distribution & Partner Performance</figcaption>
      </figure>
  </div>

  <div className="card shadow-md rounded-xl p-4">
    <h4>👨‍💼 Sales Manager Dashboard</h4>
    <ul>
      <li><strong>Total Closed Amount (FQ)</strong> – Revenue closed this fiscal quarter.</li>
      <li><strong>Amount by Stage</strong> – Deals segmented by stage.</li>
      <li><strong>Top Accounts – Won</strong> – Highest closed-won revenue accounts.</li>
      <li><strong>Top Accounts – Open</strong> – Largest open opportunity accounts.</li>
      <li><strong>Amount Won by Type</strong> – Deal type comparisons across quarters.</li>
      <li><strong>Closed Won by Rep</strong> – Sales rep performance on won deals.</li>
    </ul>
     <figure>
        <img src="/media/analytics/insight/sales/sales manager dashboard.png" alt="Sales Manager Dashboard" />
        <figcaption>Sales Manager – Team Performance Overview</figcaption>
      </figure>
  </div>

  <div className="card shadow-md rounded-xl p-4 col-span-2">
    <h4>📊 Sales Manager: Key Metrics</h4>
    <ul>
      <li><strong>MTD / QTD / FYTD Revenue</strong> – Monthly, quarterly, and yearly closed-won revenue.</li>
      <li><strong>Opportunity Pipeline</strong> – Active deals in the team’s pipeline.</li>
      <li><strong>Sales Rep Leaderboard</strong> – Top performers by revenue.</li>
      <li><strong>New Opportunities Leaderboard</strong> – Reps ranked by new deals.</li>
      <li><strong>Recent Activity Leaderboard</strong> – Rep engagement levels.</li>
      <li><strong>Average Deal Size Leaderboard</strong> – Typical deal value by rep.</li>
      <li><strong>Average Days to Close</strong> – Rep-specific sales cycle.</li>
    </ul>
     <figure>
        <img src="/media/analytics/insight/sales/sales manager key matrics.png" alt="Sales Manager Key Metrics" />
        <figcaption>Sales Manager – Team KPIs</figcaption>
      </figure>
  </div>

  <div className="card shadow-md rounded-xl p-4">
    <h4>🧑‍💼 Sales Representative: Clean Your Room</h4>
    <ul>
      <li><strong>Top Open Opportunities</strong> – Most valuable active deals.</li>
      <li><strong>Your Revenue (FYTD & QTD)</strong> – Contribution to closed-won revenue.</li>
      <li><strong>All-Time Top Accounts</strong> – Accounts with highest historical revenue.</li>
    </ul>
    <figure>
        <img src="/media/analytics/insight/sales/sales represantative clean your room.png" alt="Sales Representative Clean Your Room" />
        <figcaption>Sales Rep – Pipeline & Revenue Insights</figcaption>
      </figure>
  </div>

  <div className="card shadow-md rounded-xl p-4">
    <h4>🦈 Shark Tank Dashboard</h4>
    <ul>
      <li><strong>Total Across Partners</strong> – Records, Assigned, In Progress, and Opportunities.</li>
      <li><strong>Performance by Partner</strong> – Lead performance across partners.</li>
    </ul>
     <figure>
        <img src="/media/analytics/insight/sales/shark tank dashboard.png" alt="Shark Tank Dashboard" />
        <figcaption>Shark Tank – Partner Performance & Lead Tracking</figcaption>
      </figure>
  </div>

</div>


