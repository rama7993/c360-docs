

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 🏠 Home Dashboard

The **Home Dashboard** is your command center in C360. It gives you a real-time overview of your business performance, alerts, and critical metrics the moment you log in.

## 🧰 Filters

<Tabs>
  <TabItem value="date-range" label="📅 Date Range Filter" default>

**Date Range Filter** – Selects a specific time period for analysis.

  </TabItem>

  <TabItem value="respective-filters" label="🎛️ Respective Filters">

**Respective Filters** – Filters data by **Country, Company and Users**.

:::tip
- User filters are dependent on the Country and Company filters (i.e., if you select a country, it will show only the users of that country, and if you select a company, it will show only the users of that company in the user dropdown). 
- The Country or Company filter alone will not provide any results.
- The Users filter alone will provide results based on the selected users.
:::

  </TabItem>
</Tabs>

---

## 📊 Dashboard Widgets

### 📈 Campaign Pulse Summary

Track the performance of your recent marketing efforts.

- **Campaign Executed**: Total number of active campaigns executed.
- **Email Sent**: Volume of emails sent through the campaign.
- **Asset Clicked**: Engagement metrics for your content.
- **Leads**: Number of leads generated through a campaign which are in the sales and marketing stages.
- **MQLs**: Number of marketing qualified leads generated.
- **Opportunity**: Number of leads (must be part of any campaign) that are converted into opportunities.

:::info
Ascending / Descending % = the percentage increase or decrease of a metric when compared to the previous equivalent time period.
- Formula Used : 
Percentage Change = ((Current Value - Previous Value) / Previous Value) * 100
:::

<details>
 <summary><strong>Click to see quick actions</strong></summary>
  - Click on the "More" link inside the block to see the respective block report.
 </details>

<figure>
  <img src="/media/home/home-dashboard/pulse-summary.png" alt="pulse-summary" />
  <figcaption>Pulse Summary</figcaption>
</figure>

---

### 🔄 Conversion Rate

Measures the percentage of leads that successfully transition into the next stage or become closed-won deals.

- **Leads**: Number of leads generated through a campaign which are in the sales and marketing stages.
- **MQLs**: Number of marketing qualified leads generated from profiled leads.
- **Opportunity**: Number of MQLs that are converted into opportunities.

:::info
Funnel Data is the data that shows how many leads enter each stage (Lead → MQL → Opportunity) and how they convert from one stage to the next.

Example Funnel Data:

| Stage       | Count | Conversion Rate  |
| ----------- | ----- | ---------------- |
| Leads       | 1000  | —                |
| MQL         | 300   | 30% (Lead → MQL) |
| Opportunity | 90    | 30% (MQL → Opp)  |

:::

<details>
 <summary><strong>Click to see quick actions</strong></summary>
  - Click on the menu icon inside the block to see the conversion report.
  - Can observe the chart to see the **Overall Conversion**.
 </details>

<figure>
  <img src="/media/home/home-dashboard/conversion-rate.png" alt="conversion-rate" />
  <figcaption>Conversion Rate</figcaption>
</figure>

---

### 📊 Pipeline Summary 

Provides a high-level overview of all active opportunities, giving you visibility into potential revenue and overall deal health.

- **Total Pipeline**: The total amount of all active opportunities in your pipeline.
- **Opportunity**: Number of leads (must be part of any campaign) that are converted into opportunities.
- **Revenue Won**: Total revenue generated from won opportunities.

:::info
Ascending / Descending % = the percentage increase or decrease of a metric when compared to the previous equivalent time period.
- Formula Used : 
Percentage Change = ((Current Value - Previous Value) / Previous Value) * 100
:::

<details>
 <summary><strong>Click to see quick actions</strong></summary>
  - Click on the "More" link inside the block to see the conversion report.
 </details>

<figure>
  <img src="/media/home/home-dashboard/pipeline-summary.png" alt="pipeline-summary" />
  <figcaption>Pipeline Summary</figcaption>
</figure>

---

### ⏱️ Performance Snapshot

A quick, at-a-glance view of key metrics and indicators to gauge overall effectiveness in real-time.

- ##### 🧾 Columns included in the table view

| Stage         | Description |
|--------------|------------|
| Partner      | A third-party organization or affiliate that helps generate leads or business opportunities through referrals, co-marketing, or reselling. |
| Campaign     | A marketing initiative (email, ads, events, etc.) designed to attract and engage potential leads. |
| Lead         | Number of leads generated through a campaign which are in the sales and marketing stages. |
| MQL          | (Marketing Qualified Lead) A lead that meets predefined marketing criteria based on engagement and profile, indicating higher likelihood to convert. |
| Appointment  | A scheduled meeting or call between the sales team and a qualified lead to discuss requirements or solutions. |
| Opportunity  | A qualified deal in the pipeline with defined needs, budget, and timeline, actively being pursued by the sales team. |
| Pipeline     | The total set of all active opportunities at different stages in the sales process, representing potential revenue. |
| Closed Won   | An opportunity that has been successfully converted into a paying customer or finalized deal. |
| Conversion   | The process or metric representing the movement of leads through stages (e.g., Lead → MQL → Opportunity → Closed Won), often measured as a percentage. |

<figure>
  <img src="/media/home/home-dashboard/performance-snapshot.png" alt="performance-snapshot" />
  <figcaption>Performance Snapshot</figcaption>
</figure>

---


### 🧲 Lead Stage Funnel

Visualizes the progression of leads through various stages of the qualification process, highlighting drop-off points and conversion efficiency.

- **Total Leads**: Number of leads which are associated with any campaign.
- **Marketing Leads**: Number of marketing leads from total leads.
- **MQL**: Number of marketing qualified leads from marketing leads.
- **Appointment**: Number of appointments from MQLs.
- **Opportunity**: Number of opportunities from appointments.

:::info

Funnel Data is the data that shows how many leads enter each stage (Lead → Marketing Lead → MQL → Appointment → Opportunity) and how they convert from one stage to the next.

Example lead stage funnel: 

| Stage           | Count | Conversion % |
| --------------- | ----- | ------------ |
| Total Leads     | 1000  | —            |
| Marketing Leads | 700   | 70%          |
| MQL             | 300   | 42.8%        |
| Appointments    | 150   | 50%          |
| Opportunities   | 75    | 50%          |



:::
<details>
 <summary><strong>Click to see quick actions</strong></summary>
  - Click on the menu icon inside the block to see the lead stage funnel report.
 </details>



<figure>
  <img src="/media/home/home-dashboard/lead-stage-funnel.png" alt="lead-stage-funnel" />
  <figcaption>Lead Stage Funnel</figcaption>
</figure>

---

### 🎯 Opportunity Stage Funnel

Tracks the journey of qualified opportunities through the sales cycle toward closing, helping accurately forecast expected revenue.

- **Total Opportunity**: Number of opportunities from total leads.
- **Prospecting**: Number of prospects from total opportunities.
- **Proposal and Price Quote**: Number of proposals and price quotes from prospects.
- **Negotiation**: Number of negotiations from proposals and price quotes.
- **Closed Won**: Number of closed won opportunities from negotiations.

:::info

Funnel Data is the data that shows how many opportunities enter each stage (Total Opportunity → Prospecting → Proposal and Price Quote → Negotiation → Closed Won) and how they convert from one stage to the next.

Example opportunity stage funnel: 

| Stage                   | Count | Conversion % |
|------------------------|------|-------------|
| Total Opportunities    | 100  | —           |
| Prospecting            | 80   | 80%         |
| Proposal & Price Quote | 50   | 62.5%       |
| Negotiation            | 30   | 60%         |
| Closed Won             | 20   | 66.7%       |

:::

<details>
 <summary><strong>Click to see quick actions</strong></summary>
  - Click on the menu icon inside the block to see the lead stage funnel report.
 </details>

<figure>
  <img src="/media/home/home-dashboard/opportunity-stage-funnel.png" alt="opportunity-stage-funnel" />
  <figcaption>Opportunity Stage Funnel</figcaption>
</figure>

---

### 🛤️ Pipeline Stage

Details the current status and distribution of active deals across your defined sales pipeline stages.

#### Table includes

| Column Name         | Description |
|--------------|------------|
| Stage name     | Name of the opportunity stage. |
| Count   | How many opportunity records belong to a particular stage.|
| Value       | Total amount of opportunity within the stage  |

<details>
 <summary><strong>Click to see quick actions</strong></summary>
  - You can observe the data in pie chart view.
  - Can select and unselect the stage to match the pie chart data.
 </details>


<figure>
  <img src="/media/home/home-dashboard/pipeline-stage.png" alt="pipeline-stage" />
  <figcaption>Pipeline Stage</figcaption>
</figure>

---

### 🚀 Campaign Performance

Evaluates the success of your marketing efforts by analyzing engagement, reach, and ROI for specific campaigns.

- ##### 🧾 Columns included in the table view
| Field Name     | Description |
|----------------|------------|
| Campaign Name  | The name of the marketing campaign used to generate leads (e.g., Summer Sale, Webinar 2026). |
| Channel        | The medium through which the campaign is executed, such as Email, Social Media, Paid Ads, or Events. |
| Partner        | A third-party organization or affiliate contributing to lead generation through referrals or co-marketing efforts. |
| Leads          | Number of leads generated through a campaign which are in the sales and marketing stages. |
| MQL            | (Marketing Qualified Leads) Leads that meet predefined marketing criteria based on engagement and profile fit. |
| SQL            | (Sales Qualified Leads) Leads validated by the sales team as having strong intent and potential to convert. |
| Opportunity    | Number of qualified deals created from SQLs with defined business potential. |
| Pipeline       | Total potential revenue value from all active opportunities generated by the campaign. |

<figure>
  <img src="/media/home/home-dashboard/campaign-performance.png" alt="campaign-performance" />
  <figcaption>Campaign Performance</figcaption>
</figure>

---

### 📢 Channel Performance

Compares the effectiveness of different marketing and sales channels in driving traffic, engagement, and conversions.

- ##### 🧾 Columns included in the table view

| Field Name             | Description |
|-----------------------|------------|
| Channel               | The medium used to run marketing activities, such as Email, Social Media, Paid Ads, Events, or Organic Search. |
| Campaigns             | Specific marketing initiatives executed within a channel to generate leads (e.g., Webinar, Ad Campaign, Email Blast). |
| Lead                  | Number of leads generated through a campaign which are in the sales and marketing stages. |
| MQL                   | (Marketing Qualified Leads) Leads that meet predefined marketing criteria based on engagement and profile fit. |
| Telephone Appointment | Leads who have scheduled or completed a call/meeting with the sales team via phone. |
| Opportunity           | Qualified deals created from leads that show strong intent and business potential. |
| Pipeline              | Total potential revenue value from all active opportunities. |
| Cost                  | Total amount spent on campaigns and channels to acquire leads and opportunities. |
| ROI                   | (Return on Investment) Measure of profitability calculated by comparing revenue generated against campaign cost. |

<figure>
  <img src="/media/home/home-dashboard/channel-performance.png" alt="channel-performance" />
  <figcaption>Channel Performance</figcaption>
</figure>

---

### 📞 Agent Call Outcome

Summarizes the results of calls made by individual sales agents, helping track productivity and communication success rates.

- **Calls Made**: Total number of outbound calls made by agents.
- **Appointment Set**: Number of outbound calls that resulted in setting an appointment.

<details>
 <summary><strong>Click to see quick actions</strong></summary>
  - Click on the menu icon inside the block to see the agent call outcome report.
 </details>


<figure>
  <img src="/media/home/home-dashboard/agent-call-outcome.png" alt="agent-call-outcome" />
  <figcaption>Agent Call Outcome</figcaption>
</figure>

---

### 🎧 Campaign Call Outcome


Aggregates the results of all calls executed as part of a specific telemarketing or outreach campaign.

- **Connected**: Number of calls connected to the intended recipient.
- **Appointments**: Number of calls that resulted in setting an appointment.
- **Call Back**: Number of calls that require a follow-up call.
- **Not Interested**: Number of calls where the recipient expressed no interest in the offer.


<details>
 <summary><strong>Click to see quick actions</strong></summary>
  - Click on the menu icon inside the block to see the campaign call outcome report.
 </details>

<figure>
  <img src="/media/home/home-dashboard/campaign-call-outcome.png" alt="campaign-call-outcome" />
  <figcaption>Campaign Call Outcome</figcaption>
</figure>

---

### 💻 Platform Adoption

Track how well your team is utilizing the C360 platform.

- **Company**: Name of the company from which user belongs.
- **Total**: Total number of users in the company.
- **Active**: Number of active users in the company.
- **InActive**: Number of inactive users in the company.
- **Dormant**: Number of dormant users in the company. 



:::info
- **Active**: Users who have logged in within the last 30 days.
- **InActive**: Users who have not logged in within the last 30 days but have logged in within the last 90 days.
- **Dormant**: Users who have not logged in within the last 90+ days.
:::

<details>
 <summary><strong>Click to see quick actions</strong></summary>
  - You can observe the data in pie chart view.
  - Can select and unselect the options to match the pie chart data.
 </details>

<figure>
  <img src="/media/home/home-dashboard/platform-adoption.png" alt="platform-adoption" />
  <figcaption>Platform Adoption</figcaption>
</figure>

## 🛠️ Customizing Your View

:::info
The Home Dashboard is personalized based on your user role. Sales users see sales-centric widgets, while Marketing users see campaign performance.
:::

:::tip
- Clicking on the **More** will take you to the respective report section.
:::
