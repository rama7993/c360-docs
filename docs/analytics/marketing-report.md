import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 📢 Marketing Report

The **Marketing** section in C360 provides access to detailed marketing reports and campaign insights.

To access it:  
➡️ Go to **Analytics** → **Reports** → **Marketing Report** from the left-hand menu.

:::info
- By default, reports are displayed with a date range of **one year back from today**.
:::

**━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━**

## 🧰 Filters

<Tabs>
  <TabItem value="date-range" label="📅 Date Range Filter" default>

**Date Range Filter** – Selects a specific time period for analysis.

  </TabItem>

  <TabItem value="respective-filters" label="🎛️ Respective Filters">

**Respective Filters** – Filters data by **Campaign, Country, Company, and Users**.

:::tip
1. The **Users filter** works only when either **Country** or **Company** is selected.  
2. **Company** is disabled if **Country** is selected, and vice versa.
:::

  </TabItem>
</Tabs>

**━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━**

## 🗂️ Parent Campaign (Outgoing Campaigns)

A **Parent Campaign** is a collection of outgoing marketing activities grouped under one umbrella. It includes efforts such as **emails, telemarketing, and webinars**, enabling better tracking and performance analysis.

<figure>
  <img src="/media/analytics/report/marketing/outgoing-campaign-list.png" alt="Parent Campaign Overview" />
  <figcaption>Parent Campaign Dashboard Overview</figcaption>
</figure>

A typical **Parent Campaign Table** includes:

<details>
  <summary><strong>Campaign Activities</strong></summary>
  <p>List of executed marketing efforts</p>
</details>

<details>
  <summary><strong>Reports</strong></summary>
  <p>Performance metrics and analysis.</p>
</details>

<details>
  <summary><strong>Lead Profiled</strong></summary>
  <p>Leads identified and categorized during the campaign.</p>

  <figure>
  <img src="/media/analytics/report/marketing/lead-profiled.png" alt="lead-profiled" />
  <figcaption>lead-profiled</figcaption>
</figure>
</details>

<details>
  <summary><strong>Opportunity Converted</strong></summary>
  <p>Number of leads successfully converted into opportunities.</p>

  <figure>
  <img src="/media/analytics/report/marketing/opportunity-generated.png" alt="opportunity-generated" />
  <figcaption>leads successfully converted into opportunity </figcaption>
</figure>
</details>

Clicking a **campaign name** opens the **Campaign Performance Report**, which includes **emails sent, opened, and clicked**.

<figure>
  <img src="/media/analytics/report/marketing/campaign-performance-report.png" alt="Campaign Performance Report" />
  <figcaption>Campaign Performance Report</figcaption>
</figure>

<details>
  <summary><strong>Click to see filter options for outgoing campaign</strong></summary>
  <p>
  - <strong>Country</strong><br/>
  - <strong>Company</strong><br/>
  - <strong>Users</strong> (required for Country and Company filters to work)<br/>
  - <strong>Campaign</strong><br/>
  - <strong>Date Range</strong>
  </p>

  :::note
  Country and Company filters only work if a User is selected.
  :::
</details>

---

### 📤 View Outgoing Activities

Click **List Report** under **Campaign Activities** to view the **Campaign Emails** page.

- The **left panel** displays all executed **Single-Touch** and **Multi-Touch** activities.
- The **right panel** shows a table with details such as **Email Name, Subject, Unique Clicks, Unique Opens, and Recipients**.

<figure>
  <img src="/media/analytics/report/marketing/outgoing-activities.png" alt="Outgoing Campaign Activities" />
  <figcaption>Outgoing Campaign Activities Report</figcaption>
</figure>

---

### ✉️ View Outgoing Campaign Email Details

Selecting an email campaign opens a **detailed performance overview**, which includes:

| **Report Summary**     | **Description** |
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
  <img src="/media/analytics/report/marketing/email-details.png" alt="Email Campaign Detailed Report" />
  <figcaption>Email Campaign Detailed Performance Report</figcaption>
</figure>

:::tip
- Reports can be downloaded from each table if data is available.
- Country-wise data can be viewed in both **graph** and **table formats**.
:::

<figure>
  <img src="/media/analytics/report/marketing/country-wise-campaign-report.png" alt="Country-Wise Email Campaign Data" />
  <figcaption>Country-Wise Campaign Report</figcaption>
</figure>

**━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━**

## Campaign Analytics

### 📬 Email Reports (Outgoing Emails)

The **Email Reports** section provides insights into all outgoing email campaigns, tracking:

- **Emails Sent, Opened, Clicked, Bounced, and Unsubscribed**

It includes a table with the following columns:

<details>
  <summary><strong>Click to see columns contained by the email report data table</strong></summary>
  <p>
  - <strong>Email Name</strong><br/>
  - <strong>Subject</strong><br/>
  - <strong>Recipients</strong><br/>
  - <strong>Unique Opens</strong><br/>
  - <strong>Unique Clicks</strong><br/>
  - <strong>Unsubscribed</strong><br/>
  - <strong>Email Bounced</strong>
  </p>
</details>

<figure>
  <img src="/media/analytics/report/marketing/email-performance.png" alt="Outgoing Email Reports" />
  <figcaption>Outgoing Email Reports</figcaption>
</figure>

<details>
  <summary><strong>Click to see filter options for outgoing campaign</strong></summary>
  <p>
  - <strong>Country</strong><br/>
  - <strong>Company</strong><br/>
  - <strong>Users</strong> (required for Country and Company filters to work)<br/>
  - <strong>Campaign</strong><br/>
  - <strong>Date Range</strong>
  </p>

  :::note
  Country and Company filters only work if a User is selected.
  :::
</details>

---

### 🖱️ Click Performance (Outgoing Assets)

The **Click Performance** report tracks engagement with outbound assets such as links and documents.

<details>
  <summary><strong>Click to see metrics included</strong></summary>
  <p>
  - <strong>Action</strong> – Download/preview options<br/>
  - <strong>Name</strong> – Asset name<br/>
  - <strong>Visits</strong> – Total visits<br/>
  - <strong>Unique Visits</strong> – Unique users<br/>
  - <strong>Last Activity</strong> – Most recent interaction
  </p>
</details>

<figure>
  <img src="/media/analytics/report/marketing/click-performance.png" alt="Click Performance Report" />
  <figcaption>Click Performance Report</figcaption>
</figure>

---

### ⭐ Social Performance 

**Social Performance** represents how well your brand or campaigns are performing across different social media channels based on engagement, reach, and audience growth.

<details>
  <summary><strong>Click to see metrics included</strong></summary>
  <p>
  - <strong>Post Name</strong> – Name of the Post<br/>
  - <strong>Channels</strong> – Post associated with the Social Channel <br/>
  - <strong>Impressions</strong> – The total number of times your social post was displayed on users’ screens — whether or not they interacted with it.<br/>
  - <strong>Engagements</strong> – Total interactions such as likes, comments, shares, clicks, and saves on your posts.<br/>
  - <strong>Clicks</strong> – The number of times users clicked on any link, image, video, or call-to-action (CTA) within your post.
  </p>
</details>

<figure>
  <img src="/media/analytics/report/marketing/social-performance.png" alt="Social Performance Report" />
  <figcaption>Social Performance Report</figcaption>
</figure>

#### 🧩 Social Performance Details

- Click on Post Name to navigate to the **Social Performance Details** Page, where you will find overall performance by percentage and each individual performance by graph blocks.

<figure>
  <img src="/media/analytics/report/marketing/social-performance-details.png" alt="Social Performance details Report" />
  <figcaption>Social Performance Report</figcaption>
</figure>

<details>
<summary>Click to See Available Tabs</summary>
<Tabs>
  <TabItem value="reaction" label="👍 Reaction">
    **Definition:**  
    Indicates how many people have reacted to your post (e.g., liked, loved, celebrated).  
    Reactions show how your audience emotionally responds to your content.

  <figure>
   <img src="/media/analytics/report/marketing/social-performance-details.png" alt="Social Performance details Report" />
   <figcaption>Social Performance Report</figcaption>
  </figure>

  </TabItem>

  <TabItem value="comment" label="💬 Comment">
    **Definition:**  
    Represents the total number of comments made on your post.  
    Comments reflect how engaging or conversation-worthy your post is.

  <figure>
   <img src="/media/analytics/report/marketing/social-performance-details.png" alt="Social Performance details Report" />
   <figcaption>Social Performance Report</figcaption>
  </figure>

  </TabItem>

  <TabItem value="reshare" label="🔁 Reshare">
    **Definition:**  
    Shows how many times your post was reshared by users.  
    Reshares help increase your post’s visibility and reach.

  <figure>
   <img src="/media/analytics/report/marketing/social-performance-details.png" alt="Social Performance details Report" />
   <figcaption>Social Performance Report</figcaption>
  </figure>

  </TabItem>

  <TabItem value="engagements" label="📊 Engagements">
    **Definition:**  
    The sum of all user interactions on your post — including reactions, comments, clicks, and reshares.  
    It’s a key measure of how actively your audience interacts with your content.

  <figure>
   <img src="/media/analytics/report/marketing/social-performance-details.png" alt="Social Performance details Report" />
   <figcaption>Social Performance Report</figcaption>
  </figure>

  </TabItem>

  <TabItem value="impressions" label="👁️ Impressions">
    **Definition:**  
    Indicates how many times your post appeared on users’ screens.  
    Multiple impressions can occur from the same user if they see the post more than once.

   <figure>
   <img src="/media/analytics/report/marketing/social-performance-details.png" alt="Social Performance details Report" />
   <figcaption>Social Performance Report</figcaption>
  </figure>

  </TabItem>

  <TabItem value="members-reached" label="🙋 Members Reached">
    **Definition:**  
    The total number of unique members who saw your post at least once.  
    Unlike impressions, reach counts **unique** viewers only.

  <figure>
   <img src="/media/analytics/report/marketing/social-performance-details.png" alt="Social Performance details Report" />
   <figcaption>Social Performance Report</figcaption>
  </figure>
  
  </TabItem>

</Tabs>

</details>

---

### 🌐 Outgoing Landing Pages

The **Landing Pages** section shows visitor engagement with landing pages linked to campaigns.

<details>
  <summary><strong>It includes</strong></summary>
  <p>
  - <strong>Action</strong> – Download/preview options<br/>
  - <strong>Name</strong> – Landing page name<br/>
  - <strong>Unique Count</strong> – Unique visitors<br/>
  - <strong>Total Count</strong> – Total visits
  </p>

</details>

<figure>
  <img src="/media/analytics/report/marketing/outgoing-landing-pages.png" alt="outgoing landing pages" />
  <figcaption>Outgoing Landing Pages</figcaption>
</figure>

**━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━**

## 📈 Campaign Dashboard

This section provides a high-level overview of campaign performance with the following reports:

### 🗂️ Parent Campaign

Displays an aggregated summary of all overarching campaigns and their constituent marketing activities.

<Tabs>
  <TabItem value="chart-view" label="📊 Chart View" default>

   <details>
 <summary><strong>Click to see quick actions</strong></summary>
  - Can Toggle between Table view and Chart view.
  - Can Filter the chart by selecting and unselecting the color buttons.
  - Can Export/Download the report.
  - Can Filter by Date Range.
  - Can Filter by Country, Company and Users.
  - Toggle between Line chart and Bar chart.
  - Save the Chart as an image.
  - Can Restore the bar chart.
 </details>

<figure>
  <img src="/media/analytics/report/marketing/campaign-dashboard/parent-campaign-chart-view.png" alt="parent-campaign" />
  <figcaption>Parent Campaign Chart View</figcaption>
</figure>


  </TabItem>

  <TabItem value="table-view" label="📋 Table View">

   <details>
 <summary><strong>Click to see quick actions</strong></summary>
  - Can Toggle between Table view and Chart view.
  - Can Export/Download the report.
  - Can perform search in the table.
  - Can Filter by Date Range.
  - Can Filter by Country, Company and Users.
 </details>

 - ##### 🧾 Columns included in the table view

| Field Name                     | Description |
|----------------------------|-------------|
| Campaign Name              | Unique name used to identify and track a campaign. |
| Email Sent Count           | Total number of emails sent to targeted leads. |
| Lead Profiled Count        | Number of leads captured or enriched through campaign interactions. |
| Opportunity Converted Count| Number of leads converted into sales opportunities. |

 <figure>
  <img src="/media/analytics/report/marketing/campaign-dashboard/parent-campaign-table-view.png" alt="parent-campaign" />
  <figcaption>Parent Campaign Table View</figcaption>
</figure>


  </TabItem>
</Tabs>

---

### 📧 Email Performance

Provides comprehensive metrics on email outreach effectiveness, including delivery, open, and click-through rates.

<Tabs>
  <TabItem value="chart-view" label="📊 Chart View" default>

   <details>
 <summary><strong>Click to see quick actions</strong></summary>
  - Can Toggle between Table view and Chart view.
  - Can Filter the chart by selecting and unselecting the color buttons.
  - Can Export/Download the report.
  - Can Filter by Date Range.
  - Can Filter by Country, Company and Users.
  - Toggle between Line chart and Bar chart.
  - Save the Chart as an image.
  - Can Restore the bar chart.
 </details>

 <figure>
  <img src="/media/analytics/report/marketing/campaign-dashboard/email-performance-chart-view.png" alt="email-performnace" />
  <figcaption>Email Performance Chart View</figcaption>
</figure>


  </TabItem>

  <TabItem value="table-view" label="📋 Table View">

   <details>
 <summary><strong>Click to see quick actions</strong></summary>
  - Can Toggle between Table view and Chart view.
  - Can Export/Download the report.
  - Can perform search in the table.
  - Can Filter by Date Range.
  - Can Filter by Country, Company and Users.
 </details>

 - ##### 🧾 Columns included in the table view

| Field Name            | Description |
|----------------------|-------------|
| Email Name           | Unique identifier assigned to an email campaign or template for tracking and reference. |
| Email Sent Count     | Total number of emails successfully sent to recipients. |
| Email Open Count     | Number of recipients who opened the email, indicating initial engagement. |
| Click Through Count  | Number of clicks on links within the email, reflecting user interaction and interest. |

 <figure>
  <img src="/media/analytics/report/marketing/campaign-dashboard/email-performance-table-view.png" alt="email-performnace" />
  <figcaption>Email Performance Table View</figcaption>
</figure>


  </TabItem>
</Tabs>

---

### 🤝 Email Performance By Partner

Analyzes the success of email marketing campaigns distributed across various partner channels.

<Tabs>
  <TabItem value="chart-view" label="📊 Chart View" default>

   <details>
 <summary><strong>Click to see quick actions</strong></summary>
  - Can Toggle between Table view and Chart view.
  - Can Filter the chart by selecting and unselecting the color buttons.
  - Can Export/Download the report.
  - Can Filter by Date Range.
  - Can Filter by Country, Company and Users.
  - Toggle between Line chart and Bar chart.
  - Save the Chart as an image.
  - Can Restore the bar chart.
 </details>

 <figure>
  <img src="/media/analytics/report/marketing/campaign-dashboard/email-performance-by-partner-chart-view.png" alt="email-performnace-by-partner" />
  <figcaption>Email Performance By Partner Chart View</figcaption>
</figure>


  </TabItem>

  <TabItem value="table-view" label="📋 Table View">

   <details>
 <summary><strong>Click to see quick actions</strong></summary>
  - Can Toggle between Table view and Chart view.
  - Can Export/Download the report.
  - Can perform search in the table.
  - Can Filter by Date Range.
  - Can Filter by Country, Company and Users.
 </details>

 - ##### 🧾 Columns included in the table view

| Field Name            | Description |
|----------------------|-------------|
| Partner Name         | Name of the partner associated with the campaign or email activity. |
| Email Sent Count     | Total number of emails successfully sent under the partner’s campaign. |
| Email Open Count     | Number of emails opened by recipients, indicating engagement with the partner’s communication. |
| Click Through Count  | Number of clicks on links within the emails sent by the partner, reflecting user interaction. |

 <figure>
  <img src="/media/analytics/report/marketing/campaign-dashboard/email-performance-by-partner-table-view.png" alt="email-performnace-by-partner" />
  <figcaption>Email Performance By Partner Table View</figcaption>
</figure>


  </TabItem>
</Tabs>

---

### 📈 Compare Email Over Time

Visualizes historical email engagement trends to identify long-term patterns in campaign performance.

<Tabs>
  <TabItem value="chart-view" label="📊 Chart View" default>

   <details>
 <summary><strong>Click to see quick actions</strong></summary>
  - Can Toggle between Table view and Chart view.
  - Can Filter the chart by selecting and unselecting the color buttons.
  - Can Export/Download the report.
  - Can Filter by Date Range.
  - Can Filter by Country, Company and Users.
  - Toggle between Line chart and Bar chart.
  - Save the Chart as an image.
  - Can Restore the bar chart.
 </details>

 <figure>
  <img src="/media/analytics/report/marketing/campaign-dashboard/compare-email-over-time-chart-view.png" alt="compare-email-over-time" />
  <figcaption>Compare Email Over Time Chart View</figcaption>
</figure>


  </TabItem>

  <TabItem value="table-view" label="📋 Table View">

   <details>
 <summary><strong>Click to see quick actions</strong></summary>
  - Can Toggle between Table view and Chart view.
  - Can Export/Download the report.
  - Can perform search in the table.
  - Can Filter by Date Range.
  - Can Filter by Country, Company and Users.
 </details>

 - ##### 🧾 Columns included in the table view

| Field Name         | Description |
|--------------------|-------------|
| Email Name         | Unique identifier assigned to an email campaign or template for tracking and reference. |
| Email Open Rate    | Percentage of recipients who opened the email, indicating the effectiveness of the subject line and timing. |
| Click Through Rate | Percentage of recipients who clicked on links within the email, reflecting engagement and content relevance. |

 <figure>
  <img src="/media/analytics/report/marketing/campaign-dashboard/compare-email-over-time-table-view.png" alt="compare-email-over-time" />
  <figcaption>Compare Email Over Time Table View</figcaption>
</figure>


  </TabItem>
</Tabs>


**━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━**

## 🤝 Lead and Opportunity Dashboard

The **Lead & Opportunity Dashboards Reports** track lead progression and sales opportunities within campaigns. Reports include:

### 🎯 Leads By Campaign

Breaks down lead generation performance to identify which specific campaigns are driving the most pipeline growth.

<Tabs>
  <TabItem value="chart-view" label="📊 Chart View" default>

   <details>
 <summary><strong>Click to see quick actions</strong></summary>
  -Can Toggle between Table view and Chart view.
  - Can Export/Download the report.
  - Can Filter by Date Range.
  - Can Filter by Country, Company and Users.
  - Toggle between Line chart and Bar chart.
  - Save the Chart as an image.
  - Can Restore the bar chart.
 </details>

 <figure>
  <img src="/media/analytics/report/marketing/lead-and-opportunity-dashboard/leads-by-campaign-chart-view.png" alt="leads-by-campaign" />
  <figcaption>Leads By Campaign Chart View</figcaption>
</figure>


  </TabItem>

  <TabItem value="table-view" label="📋 Table View">

   <details>
 <summary><strong>Click to see quick actions</strong></summary>
  - Can Toggle between Table view and Chart view.
  - Can Export/Download the report.
  - Can perform search in the table.
  - Can Filter by Date Range.
  - Can Filter by Country, Company and Users.
 </details>

 - ##### 🧾 Columns included in the table view

| Field Name            | Description |
|----------------------|-------------|
| Campaign Name        | Unique name assigned to identify and track a marketing campaign. |
| Lead Profiled Count  | Number of leads that have been captured, enriched, or profiled through campaign interactions. |

 <figure>
  <img src="/media/analytics/report/marketing/lead-and-opportunity-dashboard/leads-by-campaign-table-view.png" alt="leads-by-campaign" />
  <figcaption>Leads By Campaign Table View</figcaption>
</figure>

  </TabItem>
</Tabs>

---

### 📊 Campaign Opportunity Dashboard

Monitors the potential value and progression of sales opportunities generated directly from marketing efforts.

<Tabs>
  <TabItem value="chart-view" label="📊 Chart View" default>

   <details>
 <summary><strong>Click to see quick actions</strong></summary>
  - Can Toggle between Table view and Chart view.
  - Can Export/Download the report.
  - Can Filter by Date Range.
  - Can Filter by Country, Company and Users.
  - Toggle between Line chart and Bar chart.
  - Save the Chart as an image.
  - Can Restore the bar chart.
 </details>

 <figure>
  <img src="/media/analytics/report/marketing/lead-and-opportunity-dashboard/campaign-opportunity-dashboard-chart-view.png" alt="campaign-opportunity-dashboard" />
  <figcaption>Campaign Opportunity Dashboard Chart View</figcaption>
</figure>


  </TabItem>

  <TabItem value="table-view" label="📋 Table View">

   <details>
 <summary><strong>Click to see quick actions</strong></summary>
  - Can Toggle between Table view and Chart view.
  - Can Export/Download the report.
  - Can perform search in the table.
  - Can Filter by Date Range.
  - Can Filter by Country, Company and Users.
 </details>

 - ##### 🧾 Columns included in the table view

| Field Name                    | Description |
|------------------------------|-------------|
| Opportunity Name             | Unique identifier assigned to a sales opportunity for tracking and management. |
| Opportunity Converted Count  | Total number of opportunities successfully converted, indicating closed or progressed deals. |

 <figure>
  <img src="/media/analytics/report/marketing/lead-and-opportunity-dashboard/campaign-opportunity-dashboard-table-view.png" alt="campaign-opportunity-dashboard" />
  <figcaption>Campaign Opportunity Dashboard Table View</figcaption>
</figure>


  </TabItem>
</Tabs>

---

### 🔍 Leads Profiled By Stage

Provides a snapshot of lead distribution across various funnel stages to identify conversion bottlenecks.

<Tabs>
  <TabItem value="chart-view" label="📊 Chart View" default>

   <details>
 <summary><strong>Click to see quick actions</strong></summary>
  - Can Toggle between Table view and Chart view.
  - Can Filter the chart by selecting and unselecting the color buttons.
  - Can Export/Download the report.
  - Can Filter by Date Range.
  - Can Filter by Country, Company and Users.
  - Toggle between Line chart and Bar chart.
  - Save the Chart as an image.
  - Can Restore the bar chart.
 </details>

 <figure>
  <img src="/media/analytics/report/marketing/lead-and-opportunity-dashboard/leads-profiled-by-stage-chart-view.png" alt="leads-profiled-by-stage" />
  <figcaption>Lead Profiled By Stage Chart View</figcaption>
</figure>


  </TabItem>

  <TabItem value="table-view" label="📋 Table View">

   <details>
 <summary><strong>Click to see quick actions</strong></summary>
  - Can Toggle between Table view and Chart view.
  - Can Export/Download the report.
  - Can perform search in the table.
  - Can Filter by Date Range.
  - Can Filter by Country, Company and Users.
 </details>

 - ##### 🧾 Columns included in the table view

| Field Name                         | Description |
|----------------------------------|-------------|
| Campaign Name                    | Unique name assigned to identify and track a marketing campaign. |
| Marketing Acquired Lead Count    | Number of leads generated or acquired through marketing efforts for the campaign. |
| Marketing Qualified Lead Count   | Number of leads that meet predefined marketing qualification criteria. |
| Sales Accepted Lead Count        | Number of marketing-qualified leads accepted by the sales team for further follow-up. |
| Sales Qualified Lead Count       | Number of leads validated by sales as having high potential for conversion. |
| Tele-Sales Meeting Count         | Number of meetings or calls scheduled and conducted by the tele-sales team. |
| Sales Accepted Opportunity Count | Number of opportunities accepted by sales for active pursuit. |
| Total Lead Profiled Count        | Total number of leads that have been captured, enriched, or profiled during the campaign. |

 <figure>
  <img src="/media/analytics/report/marketing/lead-and-opportunity-dashboard/leads-profiled-by-stage-table-view.png" alt="leads-profiled-by-stage" />
  <figcaption>Lead Profiled By Stage Table View</figcaption>
</figure>


  </TabItem>
</Tabs>

---

### 📉 Opportunity Stage Distribution

Visualizes the concentration of opportunities within the pipeline stages to aid in revenue forecasting.

<Tabs>
  <TabItem value="chart-view" label="📊 Chart View" default>

   <details>
 <summary><strong>Click to see quick actions</strong></summary>
  - Can Toggle between Table view and Chart view.
  - Can Filter the chart by selecting and unselecting the color buttons.
  - Can Export/Download the report.
  - Can Filter by Date Range.
  - Can Filter by Country, Company and Users.
  - Save the Chart as an image.
  - Can Restore the bar chart.
 </details>

 <figure>
  <img src="/media/analytics/report/marketing/lead-and-opportunity-dashboard/opportunity-stage-distribution-chart-view.png" alt="opportunity-stage-distribution" />
  <figcaption>Opportunity Stage Distribution Chart View</figcaption>
</figure>


  </TabItem>

  <TabItem value="table-view" label="📋 Table View">

   <details>
 <summary><strong>Click to see quick actions</strong></summary>
  - Can Toggle between Table view and Chart view.
  - Can Export/Download the report.
  - Can perform search in the table.
  - Can Filter by Date Range.
  - Can Filter by Country, Company and Users.
 </details>

 - ##### 🧾 Columns included in the table view

| Field Name                 | Description |
|--------------------------|-------------|
| Opportunity Stage Name   | Name of the current stage in the sales pipeline representing the progress of an opportunity. |
| Opportunity Stage Count  | Total number of opportunities present in each stage of the sales pipeline. |

 <figure>
  <img src="/media/analytics/report/marketing/lead-and-opportunity-dashboard/opportunity-stage-distribution-table-view.png" alt="opportunity-stage-distribution" />
  <figcaption>Opportunity Stage Distribution Table View</figcaption>
</figure>


  </TabItem>
</Tabs>

**━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━**

## 📊 Marketing Dashboard 

### ✅ Leads Converted

Tracks the total volume of generated leads that have successfully transitioned into qualified opportunities or customers.

<Tabs>
  <TabItem value="chart-view" label="📊 Chart View" default>

   <details>
 <summary><strong>Click to see quick actions</strong></summary>
  - Can Toggle between Table view and Chart view.
  - Can Export/Download the report.
  - Can Filter the chart by selecting and unselecting the color buttons.
  - Can Filter by Date Range.
  - Can Filter by Country, Company and Users.
  - Toggle between Line chart and Bar chart.
  - Save the Chart as an image.
  - Can Restore the bar chart.
 </details>

 <figure>
  <img src="/media/analytics/report/marketing/marketing-dashboard/leads-converted-chart-view.png" alt="leads-converted" />
  <figcaption>Leads Converted Chart View</figcaption>
</figure>


  </TabItem>

  <TabItem value="table-view" label="📋 Table View">

   <details>
 <summary><strong>Click to see quick actions</strong></summary>
  - Can Toggle between Table view and Chart view.
  - Can Export/Download the report.
  - Can perform search in the table.
  - Can Filter by Date Range.
  - Can Filter by Country, Company and Users.
 </details>

 - ##### 🧾 Columns included in the table view

| Field Name                 | Description |
|---------------------------|-------------|
| Lead Source               | Origin of the lead, indicating how the lead was acquired (e.g., campaign, website, referral). |
| Lead Status               | Current status of the lead within the lifecycle (e.g., New, Contacted, Qualified, Converted). |
| Lead Owner                | User responsible for managing and following up with the lead. |
| First Name                | First name of the lead or contact. |
| Last Name                 | Last name of the lead or contact. |
| Company/Account           | Organization or company associated with the lead or opportunity. |
| Opportunity Amount        | Estimated monetary value of the associated opportunity. |
| Created Date              | Date when the record was initially created in the system. |
| Last Modified Date        | Most recent date when the record was updated. |
| Converted Date            | Date when the lead was successfully converted into an opportunity or customer. |
| Opportunity Owner         | User responsible for managing the opportunity. |
| Opportunity Name          | Unique name assigned to the opportunity for identification and tracking. |
| Opportunity: Account      | Account associated with the opportunity. |
| Opportunity Close Date    | Expected or actual date when the opportunity is closed. |

 <figure>
  <img src="/media/analytics/report/marketing/marketing-dashboard/leads-converted-table-view.png" alt="leads-converted" />
  <figcaption>Leads Converted Table View</figcaption>
</figure>


  </TabItem>
</Tabs>

---

### 📅 Leads Converted By FQ

Analyzes the historical trend of successful lead conversions segmented by financial quarters.

<Tabs>
  <TabItem value="chart-view" label="📊 Chart View" default>

   <details>
 <summary><strong>Click to see quick actions</strong></summary>
 - Can Toggle between Table view and Chart view.
  - Can Export/Download the report.
  - Can Filter by Date Range.
  - Can Filter by Country, Company and Users.
  - Toggle between Line chart and Bar chart.
  - Save the Chart as an image.
  - Can Restore the bar chart.
 </details>

 <figure>
  <img src="/media/analytics/report/marketing/marketing-dashboard/leads-converted-by-fq-chart-view.png" alt="leads-converted-by-fq" />
  <figcaption>Leads Converted By FQ Chart View</figcaption>
</figure>


  </TabItem>

  <TabItem value="table-view" label="📋 Table View">

   <details>
 <summary><strong>Click to see quick actions</strong></summary>
  - Can Toggle between Table view and Chart view.
  - Can Export/Download the report.
  - Can perform search in the table.
  - Can Filter by Date Range.
  - Can Filter by Country, Company and Users.
 </details>

 - ##### 🧾 Columns included in the table view

| Field Name                 | Description |
|---------------------------|-------------|
| Converted Date            | Date when the lead was successfully converted into an opportunity or customer. |
| Lead Source               | Origin of the lead, indicating how it was acquired (e.g., campaign, website, referral). |
| Lead Status               | Current stage of the lead in the lifecycle (e.g., New, Contacted, Qualified, Converted). |
| Lead Owner                | User responsible for managing and following up with the lead. |
| First Name                | First name of the lead or contact. |
| Last Name                 | Last name of the lead or contact. |
| Company/Account           | Organization or company associated with the lead or opportunity. |
| Opportunity Amount        | Estimated monetary value of the associated opportunity. |
| Created Date              | Date when the record was initially created in the system. |
| Last Modified Date        | Most recent date when the record was updated. |
| Opportunity Owner         | User responsible for managing the opportunity. |
| Opportunity Name          | Unique name assigned to the opportunity for identification and tracking. |
| Opportunity: Account      | Account associated with the opportunity. |
| Opportunity Close Date    | Expected or actual date when the opportunity is closed. |

 <figure>
  <img src="/media/analytics/report/marketing/marketing-dashboard/leads-converted-by-fq-table-view.png" alt="leads-converted-by-fq" />
  <figcaption>Leads Converted By FQ Table View</figcaption>
</figure>


  </TabItem>
</Tabs>

---

### 📆 Leads Converted In FQ

Monitors the real-time conversion rate of leads specifically within the current financial quarter.

<Tabs>
  <TabItem value="chart-view" label="📊 Chart View" default>

   <details>
 <summary><strong>Click to see quick actions</strong></summary>
  - Can Toggle between Table view and Chart view.
  - Can Export/Download the report.
  - Can Filter by Date Range.
  - Can Filter by Country, Company and Users.
  - Toggle between Line chart and Bar chart.
  - Save the Chart as an image.
  - Can Restore the bar chart.
 </details>

 <figure>
  <img src="/media/analytics/report/marketing/marketing-dashboard/leads-converted-in-fq-chart-view.png" alt="leads-converted-in-fq" />
  <figcaption>Leads Converted In FQ Chart View</figcaption>
</figure>


  </TabItem>

  <TabItem value="table-view" label="📋 Table View">

   <details>
 <summary><strong>Click to see quick actions</strong></summary>
  - Can Toggle between Table view and Chart view.
  - Can Export/Download the report.
  - Can perform search in the table.
  - Can Filter by Date Range.
  - Can Filter by Country, Company and Users.
 </details>

-##### 🧾 Columns included in the table view

| Field Name                 | Description |
|---------------------------|-------------|
| Lead Source               | Origin of the lead, indicating how the lead was acquired (e.g., campaign, website, referral). |
| Lead Status               | Current status of the lead within the lifecycle (e.g., New, Contacted, Qualified, Converted). |
| Lead Owner                | User responsible for managing and following up with the lead. |
| First Name                | First name of the lead or contact. |
| Last Name                 | Last name of the lead or contact. |
| Company/Account           | Organization or company associated with the lead or opportunity. |
| Opportunity Amount        | Estimated monetary value of the associated opportunity. |
| Created Date              | Date when the record was initially created in the system. |
| Last Modified Date        | Most recent date when the record was updated. |
| Converted Date            | Date when the lead was successfully converted into an opportunity or customer. |
| Opportunity Owner         | User responsible for managing the opportunity. |
| Opportunity Name          | Unique name assigned to the opportunity for identification and tracking. |
| Opportunity: Account      | Account associated with the opportunity. |
| Opportunity Close Date    | Expected or actual date when the opportunity is closed. |

 <figure>
  <img src="/media/analytics/report/marketing/marketing-dashboard/leads-converted-in-fq-table-view.png" alt="leads-converted-in-fq" />
  <figcaption>Leads Converted In FQ Table View</figcaption>
</figure>


  </TabItem>
</Tabs>

---

### ➕ Leads Created In FQ

Measures the total volume of net new leads generated during the active financial quarter.

<Tabs>
  <TabItem value="chart-view" label="📊 Chart View" default>

   <details>
 <summary><strong>Click to see quick actions</strong></summary>
  - Can Toggle between Table view and Chart view.
  - Can Export/Download the report.
  - Can Filter by Date Range.
  - Can Filter by Country, Company and Users.
 </details>

 <figure>
  <img src="/media/analytics/report/marketing/marketing-dashboard/leads-created-in-fq-chart-view.png" alt="leads-created-in-fq" />
  <figcaption>Leads Created In FQ Chart View</figcaption>
</figure>


  </TabItem>

  <TabItem value="table-view" label="📋 Table View">

   <details>
 <summary><strong>Click to see quick actions</strong></summary>
  - Can Toggle between Table view and Chart view.
  - Can Export/Download the report.
  - Can perform search in the table.
  - Can Filter by Date Range.
  - Can Filter by Country, Company and Users.
 </details>

 - ##### 🧾 Columns included in the table view

| Field Name         | Description |
|--------------------|-------------|
| Lead Source        | Origin of the lead, indicating how the lead was acquired (e.g., campaign, website, referral). |
| Lead Owner         | User responsible for managing and following up with the lead. |
| First Name         | First name of the lead. |
| Last Name          | Last name of the lead. |
| Title              | Job title or designation of the lead within their organization. |
| Company/Account    | Organization or company associated with the lead. |
| Stage              | Current stage of the lead in the lifecycle (e.g., New, Contacted, Qualified). |
| Street             | Street address of the lead. |
| Email              | Email address of the lead for communication. |

 <figure>
  <img src="/media/analytics/report/marketing/marketing-dashboard/leads-created-in-fq-table-view.png" alt="leads-created-in-fq" />
  <figcaption>Leads Created In FQ Table View</figcaption>
</figure>


  </TabItem>
</Tabs>

---

### 👤 Asset Tracking By User

Illustrates how individual team members or users are engaging with distributed marketing materials.

<Tabs>
  <TabItem value="chart-view" label="📊 Chart View" default>

   <details>
 <summary><strong>Click to see quick actions</strong></summary>
  - Can Toggle between Table view and Chart view.
  - Can Export/Download the report.
  - Can Filter by Date Range.
  - Can Filter by Country, Company and Users.
  - Toggle between Line chart and Bar chart.
  - Save the Chart as an image.
  - Can Restore the bar chart.
 </details>

 <figure>
  <img src="/media/analytics/report/marketing/marketing-dashboard/asset-tracking-by-user-chart-view.png" alt="asset-tracking-by-user" />
  <figcaption>Asset Tracking By User Chart View</figcaption>
</figure>


  </TabItem>

  <TabItem value="table-view" label="📋 Table View">

   <details>
 <summary><strong>Click to see quick actions</strong></summary>
  - Can Toggle between Table view and Chart view.
  - Can Export/Download the report.
  - Can perform search in the table.
  - Can Filter by Date Range.
  - Can Filter by Country, Company and Users.
 </details>

 - ##### 🧾 Columns included in the table view

| Field Name              | Description |
|------------------------|-------------|
| Content Name           | Name or title of the uploaded content used for identification and reference. |
| Content Upload Date    | Date when the content was uploaded to the system. |
| Content Category       | Primary classification of the content (e.g., brochure, whitepaper, video). |
| Content Sub Category   | Secondary classification providing more detailed grouping of the content. |
| Most Recent Views      | Number of views recorded in the most recent activity period. |
| Total Content Download | Total number of times the content has been downloaded by users. |

 <figure>
  <img src="/media/analytics/report/marketing/marketing-dashboard/asset-tracking-by-user-table-view.png" alt="asset-tracking-by-user" />
  <figcaption>Asset Tracking By User Table View</figcaption>
</figure>


  </TabItem>
</Tabs>

---

### 🏢 Asset Tracking By Customer

Evaluates the effectiveness of marketing assets based on direct interactions and engagement from customers.

<Tabs>
  <TabItem value="chart-view" label="📊 Chart View" default>

   <details>
 <summary><strong>Click to see quick actions</strong></summary>
  - Can Toggle between Table view and Chart view.
  - Can Export/Download the report.
  - Can Filter by Date Range.
  - Can Filter by Country, Company and Users.
  - Toggle between Line chart and Bar chart.
  - Save the Chart as an image.
  - Can Restore the bar chart.
 </details>

 <figure>
  <img src="/media/analytics/report/marketing/marketing-dashboard/asset-tracking-by-customer-chart-view.png" alt="asset-tracking-by-customer" />
  <figcaption>Asset Tracking By Customer Chart View</figcaption>
</figure>


  </TabItem>

  <TabItem value="table-view" label="📋 Table View">

   <details>
 <summary><strong>Click to see quick actions</strong></summary>
  - Can Toggle between Table view and Chart view.
  - Can Export/Download the report.
  - Can perform search in the table.
  - Can Filter by Date Range.
  - Can Filter by Country, Company and Users.
 </details>

 - ##### 🧾 Columns included in the table view

| Field Name              | Description |
|------------------------|-------------|
| Content Name           | Name or title of the uploaded content used for identification and reference. |
| Content Upload Date    | Date when the content was uploaded to the system. |
| Content Category       | Primary classification of the content (e.g., brochure, whitepaper, video). |
| Content Sub Category   | Secondary classification providing more detailed grouping of the content. |
| Most Recent Views      | Number of views recorded in the most recent activity period. |
| Total Content Download | Total number of times the content has been downloaded by users. |

 <figure>
  <img src="/media/analytics/report/marketing/marketing-dashboard/asset-tracking-by-customer-table-view.png" alt="asset-tracking-by-customer" />
  <figcaption>Asset Tracking By Customer Table View</figcaption>
</figure>


  </TabItem>
</Tabs>


