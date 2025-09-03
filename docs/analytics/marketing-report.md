import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Marketing Report

The **Marketing** section in C360 provides access to detailed marketing reports and campaign insights.

To access it:  
➡️ Go to **Analytics** → **Reports** → **Maeketing Reort** from the left-hand menu.

<figure>
  <img src="/media/image22.png" alt="Reports Navigation in Analytics Menu" />
  <figcaption>Accessing Reports from the Analytics Menu</figcaption>
</figure>
:::info

- By default, reports are displayed with a date range of **one year back from today**.

:::

---

## **🧰Filter**

   <Tabs>

  <TabItem value="date-range" label="Date Range Filter" default>

**Date Range Filter** – Selects a specific time period for analysis.

  </TabItem>

  <TabItem value="respective-filters" label="Respective Filters">

**Respective Filters** – Filters data by **Campaign,Country, Company, and Users**.

:::tip

1. The **Users filter** works only when either **Country** or **Company** is selected.
2. **Company** is disabled if **Country** is selected, and vice versa.  
    :::

   </TabItem>

   </Tabs>

   ***

### Parent Campaign (Outgoing Campaigns)

A **Parent Campaign** is a collection of outgoing marketing activities grouped under one umbrella. It includes efforts such as **emails, telemarketing, and webinars**, enabling better tracking and performance analysis.

<figure>
  <img src="/media/image26.png" alt="Parent Campaign Overview" />
  <figcaption>Parent Campaign Dashboard Overview</figcaption>
</figure>

A typical **Parent Campaign Table** includes:

<details>
  <summary><strong>Campaign Activities</strong></summary>
   <p>List of executed marketing efforts </p>
  </details>
  
<details> 
  <summary><strong>Reports</strong></summary>
   <p>Performance metrics and analysis. </p>
  </details>

<details> 
  <summary><strong>Lead Profiled</strong></summary>

   <p>Leads identified and categorized during the campaign.</p>

<figure>
  <img src="/media/image16.png" alt="Parent Campaign Lead Profiled" />
  <figcaption>Lead Profiling Report</figcaption>
</figure>

  </details>

<details> 
   <summary><strong>Opportunity Converted</strong></summary>

   <p>Number of leads successfully converted into opportunities.</p>

   <figure>
  <img src="/media/image17.png" alt="Opportunity Conversion Report" />
  <figcaption>Opportunity Conversion Report</figcaption>
</figure>

  </details>

Clicking a **campaign name** opens the **Campaign Performance Report**, which includes **emails sent, opened, and clicked**.

<figure>
  <img src="/media/image18.png" alt="Campaign Performance Report" />
  <figcaption>Campaign Performance Report</figcaption>
</figure>

<details>
 <summary><strong>Click to see filter options for outgoing campaign </strong></summary>
 <p> 
 - **Country**
- **Company**
- **Users** (required for Country and Company filters to work)
- **Campaign**
- **Date Range**
 </p>

 :::note
  Country and Company filters only work if a User is selected.
  :::
</details>



---

### View Outgoing Activities

Click **List Report** under **Campaign Activities** to view the **Campaign Emails** page.

- The **left panel** displays all executed **Single-Touch** and **Multi-Touch** activities.
- The **right panel** shows a table with details such as **Email Name, Subject, Unique Clicks, Unique Opens, and Recipients**.

<figure>
  <img src="/media/image1b.png" alt="Outgoing Campaign Activities" />
  <figcaption>Outgoing Campaign Activities Report</figcaption>
</figure>

---

### View Outgoing Campaign Email Details

Selecting an email campaign opens a **detailed performance overview**, which includes:

| **Report TSummary**    | **Description** |
|------------------------|-----------------|
| **Overall Dashboard**  | Summary of campaign performance. |
| **Opened**             | Recipients who opened the email. |
| **Click-Through**      | Recipients who clicked links. |
| **Unsubscribed**       | Users who opted out. |
| **Bounce**             | Delivery failures and bounced emails. |
| **Email Not Opened**   | Users who did not open the email. |
| **Spam**               | Emails marked as spam. |
| **Assets**             | Performance of linked assets. |
| **Landing Pages**      | Engagement on landing pages. |
| **Countries**          | Geographic distribution of recipients. |


<figure>
  <img src="/media/image1c.png" alt="Email Campaign Detailed Report" />
  <figcaption>Email Campaign Detailed Performance Report</figcaption>
</figure>
:::tip
- Reports can be downloaded from each table if data is available.
- Country-wise data can be viewed in both **graph** and **table formats**.
:::
<figure>
  <img src="/media/image27.png" alt="Country-Wise Email Campaign Data" />
  <figcaption>Country-Wise Campaign Report</figcaption>
</figure>

---

### Email Reports (Outgoing Emails)

The **Email Reports** section provides insights into all outgoing email campaigns, tracking:

- **Emails Sent, Opened, Clicked, Bounced, and Unsubscribed**

It includes a table with the following columns:
<details>
 <summary><strong>Click to see columns contain by email report data table</strong></summary>
 <p>
 - **Email Name**
- **Subject**
- **Recipients**
- **Unique Opens**
- **Unique Clicks**
- **Unsubscribed**
- **Email Bounced**
</p>
</details>



<figure>
  <img src="/media/image28.png" alt="Outgoing Email Reports" />
  <figcaption>Outgoing Email Reports</figcaption>
</figure>

<details>
 <summary><strong>Click to see filter options for outgoing campaign </strong></summary>
 <p> 
 - **Country**
- **Company**
- **Users** (required for Country and Company filters to work)
- **Campaign**
- **Date Range**
 </p>

 :::note
  Country and Company filters only work if a User is selected.
  :::
</details>


---

### Click Performance (Outgoing Assets)

The **Click Performance** report tracks engagement with outbound assets such as links and documents.

<details>
<summary><strong>Click to see Metrics include </strong></summary>
<p>
- **Action** – Download/preview options
- **Name** – Asset name
- **Visits** – Total visits
- **Unique Visits** – Unique users
- **Last Activity** – Most recent interaction

</p>
</details>

<figure>
  <img src="/media/image29.png" alt="Click Performance Report" />
  <figcaption>Click Performance Report</figcaption>
</figure>

---

### Outgoing Landing Pages

The **Landing Pages** section shows visitor engagement with landing pages linked to campaigns.

<details>
<summary><strong>It includes</strong></summary>

<p>
- **Action** – Download/preview options
- **Name** – Landing page name
- **Unique Count** – Unique visitors
- **Total Count** – Total visits
</p>

</details>
---

### Campaign Dashboards Reports

This section provides a high-level overview of campaign performance with the following reports:

- **Parent Campaign**
- **Email Performance**
- **Email Performance by Partner**
- **Compare Email Over Time**

<figure>
  <img src="/media/image2a.png" alt="Campaign Dashboard Reports" />
  <figcaption>Campaign Dashboard Reports</figcaption>
</figure>

---

### Lead and Opportunity Dashboards Reports

The **Lead & Opportunity Dashboards Reports** track lead progression and sales opportunities within campaigns. Reports include:

- **Leads by Campaign**
- **Campaign Opportunity Dashboard**
- **Leads Profiled by Stage**
- **Opportunity Stage Distribution**

<figure>
  <img src="/media/image2b.png" alt="Lead and Opportunity Dashboard Reports" />
  <figcaption>Lead & Opportunity Dashboard Reports</figcaption>
</figure>
---
