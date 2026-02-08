import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 📢 Telemarketing Report

It provides a concise summary of telemarketing activities and outcomes, highlighting call performance, agent productivity, and conversion results.

To access it:  
➡️ Go to **Analytics** → **Reports** → **Telemarketing Report** from the left-hand menu. 

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

**Respective Filters** – Filters data by **Campaign and Users**.

  </TabItem>
</Tabs>

**━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━**

## 📊 Executive Dashboard

### 📞 Telemarketing Overview

<Tabs>

  <TabItem value="overview" label="📋 Overview" default>

<!-- >:::note
**The Telemarketing Overview dashboard provides immediate insights into the efficiency of your calling campaigns.**
::: -->
 - **Total Leads Worked**:  The total number of unique leads that have been processed.
 - **Total Calls Attempted**:  Total number of outbound calls made. 
 - **Total Calls Connected**:  The number of calls that were successfully answered.
 - **Connect Rate %**:  The overall percentage of attempts that resulted in a connection.
 - **Appointment Rate %**:  The percentage of calls that resulted in a scheduled appointment.
 - **Not Interested Rate %**:  The percentage of calls where the lead expressed no interest.

 <details>
 <summary><strong>Click to see quick actions</strong></summary>
  - Hover on the "i" icon to see the tooltips.
  - Filter by Date Range.
  - Filter by Campaign and Users.
 </details>

 <figure>
  <img src="/media/analytics/report/telemarketing-report/executive-dashboard/telemarketing-overview/overview-telemarketing-overview.png" alt="telemarketing-overview" />
  <figcaption>Telemarketing Overview</figcaption>
</figure>

  </TabItem>

<TabItem value="performance" label="📈 Performance">

<!-- :::note
**Summary of telemarketing results, highlighting overall call activity, efficiency, and conversion performance**
::: -->
- #### 🗓️ Total Appointment Performance

A summary of appointment-related metrics, showing the total appointments scheduled, completed, and converted, to evaluate overall scheduling effectiveness and sales impact.

<details>
 <summary><strong>Click to see quick actions</strong></summary>
  - Can Toggle between Line chart and Bar chart.
  - Can Toggle between Table view and Chart view.
  - Can perform Search in table view.
  - Can Export/Download the report.
  - Can save the Chart as image.
  - Can Filter by Date Range.
  - Can Filter by Campaign and Users.
 </details>

<figure>
  <img src="/media/analytics/report/telemarketing-report/executive-dashboard/telemarketing-overview/total-appointments-performance.png" alt="total appointments performance" />
  <figcaption>Total Appointments Performance Bar Chart</figcaption>
</figure>

- ##### 🧾 Columns included in the table view.

| Column | Description |
|--------|-------------|
|Period     | Time period bucketed based on the selected date range          |
|From      | Start date of the period          |
|To      | End date of the period           |
|Appointments      | Total number of appointments scheduled           |
|Campaign      | Campaign scope applied to the report (Selected campaigns or all campaigns)           |

<figure>
  <img src="/media/analytics/report/telemarketing-report/executive-dashboard/telemarketing-overview/total-appointments-performance-table-view.png" alt="total appointments performance" />
  <figcaption>Total Appointments Performance Table View</figcaption>
</figure>

---

- #### 🏆 Agent Appointment Performance Ranking

A ranked view of agents based on their appointment performance, comparing scheduled, completed, and converted appointments to identify top performers and improvement areas.

<details>
 <summary><strong>Click to see quick actions</strong></summary>
  - Toggle between Line chart and Bar chart.
  - Toggle between Table view and Chart view.
  - Perform Search in table view.
  - Export/Download the report.
  - Save the Chart as an image.
  - Filter by Date Range.
  - Filter by Campaign and Users.
 </details>

<figure>
  <img src="/media/analytics/report/telemarketing-report/executive-dashboard/telemarketing-overview/agent-appointment-performance-ranking.png" alt="agent appointment performance ranking" />
  <figcaption>Agent Appointment Performance Ranking Bar Chart</figcaption>
</figure>

- ##### 🧾 Columns included in the table view.

| Column | Description |
|--------|-------------|
|Rank     | Position of the agent based on total number of appointments scheduled (Higher is better).         |
|Agent Name      | Full name of the telemarketing agent.         |
|Total Connection      | Number of calls successfully connected by the agents.           |
|Appointments      | Total number of appointments scheduled by the agent.          |
|Conversion Rate (%)      | Percentage of connected calls that resulted in scheduled appointments.         |
|Campaign      | Campaign scope applied to the report (Selected campaigns or all campaigns).          |

<figure>
  <img src="/media/analytics/report/telemarketing-report/executive-dashboard/telemarketing-overview/agent-appointment-performance-ranking-table-view.png" alt="agent appointment performance ranking" />
  <figcaption> Agent Appointment Performance Ranking Table View</figcaption>
</figure>

  </TabItem>


  <TabItem value="analysis" label="📊 Analysis">


<!-- :::note
**A concise analysis of telemarketing performance, summarizing key trends, efficiency metrics, and conversion insights.**
::: -->
- #### 📉 Telemarketing Funnel Analysis

A visual representation of the telemarketing funnel, showing the flow of leads through each stage from initial contact to conversion, highlighting drop-off points and conversion rates to identify areas for improvement.

<details>
 <summary><strong>Click to see quick actions</strong></summary>
  - Can Toggle between Line chart and Bar chart.
  - Can Toggle between Table view and Chart view.
  - Can perform Search in table view.
  - Can Export/Download the report.
  - Can save the Chart as image.
  - Can Filter by Date Range.
  - Can Filter by Campaign and Users.
 </details>

<figure>
  <img src="/media/analytics/report/telemarketing-report/executive-dashboard/telemarketing-overview/telemarketing-funnel-analysis.png" alt="telemarketing funnel analysis" />
  <figcaption> Telemarketing Funnel Analysis Bar Chart View</figcaption>
</figure>

- ##### 🧾 Columns included in the table view.

| Column | Description |
|--------|-------------|
|Stage     | Telemarketing funnel stage.|
|Count      |  Totals records at this stage. |
|Conversion (%)     |  Percentage conversion from the previous stage to current stage.|
|Drop-off-count     | Number of records lost compared to the previous stage.|
|Drop off (%)      | Percentage drop-off compared to the previous stage.|
|Period     | Selected Reporting period.|
|Campaign     | Campaign applied to the funnel analysis.|
|Agents/Team     | Scope of agents included in the analysis (Selected agents or all agents).|

<figure>
  <img src="/media/analytics/report/telemarketing-report/executive-dashboard/telemarketing-overview/telemarketing-funnel-analysis-table-view.png" alt="telemarketing funnel analysis" />
  <figcaption> Telemarketing Funnel Analysis Table View</figcaption>
</figure>

  </TabItem>

</Tabs>

### 🎯 Campaign Performance

<Tabs>

  <TabItem value="overview" label="📋 Overview" default>

  - #### 📈 Campaign Performance Overview

A high-level summary of campaign results, highlighting reach, engagement, and overall effectiveness.

<details>
 <summary><strong>Click to see quick actions</strong></summary>
  - Can Toggle between Line chart and Bar chart.
  - Can Toggle between Table view and Chart view.
  - Can perform Search in table view.
  - Can Export/Download the report.
  - Can save the Chart as image.
  - Can Filter by Date Range.
  - Can Filter by Campaign and Users.
 </details>

<figure>
  <img src="/media/analytics/report/telemarketing-report/executive-dashboard/campaign-performance/campaign-performance-overview.png" alt="campaign performance overview" />
  <figcaption> Campaign Performance Overview Bar Chart View</figcaption>
</figure>

- ##### 🧾 Columns included in the table view.

| Column | Description |
|--------|-------------|
|Campaign    | Name of the campaign.    |
|Total Calls     | Total number of calls made for the campaign.   |
|Connected    | Number of calls successfully connected. |
|Appointments     | Total appointments scheduled for the campaign. |
|Call Back       | Number of calls marked for callback.|
|Not Interested     | Number of calls where lead was not interested.|

<figure>
  <img src="/media/analytics/report/telemarketing-report/executive-dashboard/campaign-performance/campaign-performance-overview-table-view.png" alt="campaign performance overview" />
  <figcaption> Campaign Performance Overview Table View</figcaption>
</figure>

  </TabItem>

  <TabItem value="performance" label="📈 Performance">


- #### 🔗 Campaign Connect Rate Performance

A concise view of call connection rates across campaigns, measuring reach efficiency and contact success.

<details>
 <summary><strong>Click to see quick actions</strong></summary>
  - Can Toggle between Line chart and Bar chart.
  - Can Toggle between Table view and Chart view.
  - Can perform Search in table view.
  - Can Export/Download the report.
  - Can save the Chart as image.
  - Can Filter by Date Range.
  - Can Filter by Campaign and Users.
 </details>

<figure>
  <img src="/media/analytics/report/telemarketing-report/executive-dashboard/campaign-performance/campaign-connect-rate-performance.png" alt="campaign connect rate performance" />
  <figcaption> Campaign Connect Rate Performance Bar Chart View</figcaption>
</figure>

- ##### 🧾 Columns included in the table view.

| Column | Description |
|--------|-------------|
|Campaign    | Name of the campaign.    |
|Total Calls     | Total number of calls made for the campaign.   |
|Connected Calls   | Number of calls successfully connected. |
|Connected Rate (%)    | Percentage of total calls that were successfully connected.|


<figure>
  <img src="/media/analytics/report/telemarketing-report/executive-dashboard/campaign-performance/campaign-connect-rate-performance-table-view.png" alt="campaign connect rate performance" />
  <figcaption> Campaign Connect Rate Performance Table View</figcaption>
</figure>

---

 - #### 📝 Campaign Appointment Rate Performance

A summary of appointment conversion rates by campaign, measuring effectiveness in turning connected calls into scheduled appointments.

<details>
 <summary><strong>Click to see quick actions</strong></summary>
  - Can Toggle between Line chart and Bar chart.
  - Can Toggle between Table view and Chart view.
  - Can perform Search in table view.
  - Can Export/Download the report.
  - Can save the Chart as image.
  - Can Filter by Date Range.
  - Can Filter by Campaign and Users.
 </details>

<figure>
  <img src="/media/analytics/report/telemarketing-report/executive-dashboard/campaign-performance/campaign-appointment-rate-performance.png" alt="campaign appointment rate performance" />
  <figcaption> Campaign Appointment Rate Performance Bar Chart View</figcaption>
</figure>

- ##### 🧾 Columns included in the table view.

| Column | Description |
|--------|-------------|
|Campaign    | Name of the campaign.    |
|Connected Calls     | Number of calls successfully connected.   |
|Appointments  | Total number of appointments scheduled. |
|Appointment Rate (%)    | Percentage of connected calls that resulted in scheduled appointments.|

<figure>
  <img src="/media/analytics/report/telemarketing-report/executive-dashboard/campaign-performance/campaign-appointment-rate-performance-table-view.png" alt="campaign appointment rate performance" />
  <figcaption> Campaign Appointment Rate Performance Table View</figcaption>
</figure>

  </TabItem>

  <TabItem value="analysis" label="📊 Analysis">

- #### 🙉 Campaign Not Interested Rate Performance

A summary of the percentage of contacts marked as not interested across campaigns, indicating lead quality and messaging effectiveness.

<details>
 <summary><strong>Click to see quick actions</strong></summary>
  - Can Toggle between Line chart and Bar chart.
  - Can Toggle between Table view and Chart view.
  - Can perform Search in table view.
  - Can Export/Download the report.
  - Can save the Chart as image.
  - Can Filter by Date Range.
  - Can Filter by Campaign and Users.
 </details>

<figure>
  <img src="/media/analytics/report/telemarketing-report/executive-dashboard/campaign-performance/campaign-not-interested-rate-performance.png" alt="campaign not interested rate performance" />
  <figcaption> Campaign Not Interested Rate Performance Bar Chart View</figcaption>
</figure>

- ##### 🧾 Columns included in the table view.

| Column | Description |
|--------|-------------|
|Campaign    | Name of the campaign.    |
|Connected Calls     | Number of calls successfully connected.   |
|Not Interested  | Number of calls marked as not interested.  |
 | Not Interested Rate (%)     | Percentage of connected calls that resulted in a not interested outcome.|

<figure>
  <img src="/media/analytics/report/telemarketing-report/executive-dashboard/campaign-performance/campaign-not-interested-rate-performance-table-view.png" alt="campaign not interested rate performance" />
  <figcaption> Campaign Not Interested Rate Performance Table View</figcaption>
</figure>

  </TabItem>

</Tabs>

**━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━**

## ⚙️ Operation Dashboard

### 👨‍💼 Agent Performance
<Tabs>
   <TabItem value="Overview" label="📈 Overview">

   - #### 👥 Agent Performance Overview

   An in-depth look at individual agent performance metrics, including call volume, connection success, and appointment generation.

   <details>
    <summary><strong>Click to see quick actions</strong></summary>
     - Perform Search in table view.
     - Filter by Date Range.
     - Filter by Campaign and Users.
    </details>

   - ##### 🧾 Columns included in the table view.

   | Column | Description |
   |--------|-------------|
   |Agent      | Full name of the telemarketing agent.         |
   |Calls Made      | Total number of calls attempted by the agent.           |
   |Connections     | Number of calls successfully connected.          |
   |Appointments Set      | Total number of appointments scheduled.          |
   |Conversion (%)     | Percentage of connections that resulted in appointments (appointments ÷ connections * 100)       |
   |IDLE/Under-Utilization (%)     | Percentage of calling window time not utilized for calls(100-Utilization %).        |

   <figure>
     <img src="/media/analytics/report/telemarketing-report/operation-dashboard/agent-performance/agent-performance-overview.png" alt="agent performance overview" />
     <figcaption> Agent Performance Overview</figcaption>
   </figure>

   </TabItem>

  <TabItem value="analysis" label="📊 Analysis">

  - #### 🖼️ Call Window Utilization

  Analysis of call connectivity and success rates across different time windows to optimize calling schedules.

  <details>
   <summary><strong>Click to see quick actions</strong></summary>
    - Can Toggle between Line chart and Bar chart.
    - Can Toggle between Table view and Chart view.
    - Can perform Search in table view.
    - Can Export/Download the report.
    - Can save the Chart as image.
    - Can Filter by Date Range.
    - Can Filter by Campaign and Users.
   </details>

  <figure>
    <img src="/media/analytics/report/telemarketing-report/operation-dashboard/agent-performance/call-window-utilization.png" alt="call window utilization" />
    <figcaption> Call Window Utilization Bar Chart View</figcaption>
  </figure>

  - ##### 🧾 Columns included in the table view.

  | Column | Description |
  |--------|-------------|
  |Agent    | Name of the telemarketing agent.        |
  |Utilization      | Percentage of calling window time utilized for making calls.         |

  <figure>
    <img src="/media/analytics/report/telemarketing-report/operation-dashboard/agent-performance/call-window-utilization-table-view.png" alt="call window utilization table view" />
    <figcaption> Call Window Utilization Table View</figcaption>
  </figure>

  </TabItem>

</Tabs>


### ⏱️ Call Utilization

- #### ⏳ Call Utilization

A breakdown of how agents utilize their time during login sessions, categorizing time into working, talk, idle, and break states.

<details>
 <summary><strong>Click to see quick actions</strong></summary>
  - Can Toggle between Line chart and Bar chart.
  - Can Toggle between Table view and Chart view.
  - Can perform Search in table view.
  - Can Export/Download the report.
  - Can save the Chart as image.
  - Can Filter by Date Range.
  - Can Filter by Campaign and Users.
 </details>

<figure>
  <img src="/media/analytics/report/telemarketing-report/operation-dashboard/call-utilization/call-utilization-bar-chart.png" alt="call utilization" />
  <figcaption> Call Utilization Bar Chart View</figcaption>
</figure>

- ##### 🧾 Columns included in the table view.

| Column | Description |
|--------|-------------|
|Agent     | Full name of the agent.         |
|Planned Time (Minutes)      | Total calling window time available based on agent schedule.       |
|Actual Time (Minutes)       | Actual times spent on calls based on call duration.           |
|Gap Time (Minutes)       | Difference between planned and actual calling time.         |
|Utilization (%)      | Percentage of planned calling time actually used (actual ÷ planned * 100).          |

<figure>
  <img src="/media/analytics/report/telemarketing-report/operation-dashboard/call-utilization/call-utilization-table-view.png" alt="call utilization table view" />
  <figcaption> Call Utilization Table View</figcaption>
</figure>

---
- #### ⏰ Appointments by time slot

Distribution of scheduled appointments across different time slots to identify peak booking times.

<details>
 <summary><strong>Click to see quick actions</strong></summary>
  - Can Toggle between Line chart and Bar chart.
  - Can Toggle between Table view and Chart view.
  - Can perform Search in table view.
  - Can Export/Download the report.
  - Can save the Chart as image.
  - Can Filter by Date Range.
  - Can Filter by Campaign and Users.
 </details>

<figure>
  <img src="/media/analytics/report/telemarketing-report/operation-dashboard/call-utilization/appointments-by-time-slot-bar-chart.png" alt="appointments by time slot" />
  <figcaption> Appointments by Time Slot Bar Chart View</figcaption>
</figure>

- ##### 🧾 Columns included in the table view.

| Column | Description |
|--------|-------------|
|Time Slot     | 2-hour time block(e.g., 9-11, 11-13)         |
|Appointments Set      | Number of appointments scheduled during in this time slot.         |
|Connect Rate (%)    | Percentage of calls that connected during this timeslot.           |
|Period        | Date range of the report.       |

<figure>
  <img src="/media/analytics/report/telemarketing-report/operation-dashboard/call-utilization/appointments-by-time-slot-table-view.png" alt="appointments by time slot table view" />
  <figcaption> Appointments by Time Slot Table View</figcaption>
</figure>

**━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━**

## 📑 Telemarketing Reports

### 📞 Telemarketing Overview

- #### 📋 Telemarketing Activity Overview

A snapshot of overall telemarketing activity, summarizing call volume, agent effort, and key operational metrics.

- **Total Leads Worked**: Total number of unique leads that agents have worked on.
- **Total Calls Attempted**: Total number of calls that agents have attempted to make.
- **Total Calls Connected**:Total number of calls that agents have successfully connected.
- **Total Appointments**: Total appointments scheduled by agents.
<details>
 <summary><strong>Click to see quick actions</strong></summary>
  - Hover on the "**i**" icon to see the tooltip.
  - Filter by Date Range.
  - Filter by Campaign and Users.
 </details>

<figure>
  <img src="/media/analytics/report/telemarketing-report/telemarketing-reports/telemarketing-activity-overview.png" alt="telemarketing activity overview" />
  <figcaption> Telemarketing Activity Overview</figcaption>
</figure>

---

- #### 📝 Telemarketing Overview Summary

A brief summary of overall telemarketing performance, highlighting key activity metrics and outcome trends.

<details>
 <summary><strong>Click to see quick actions</strong></summary>
  - Hover on the **Help** icon to see the tooltip.
  - Perform the search.
  - Filter by Date Range.
  - Filter by Campaign and Users.
 </details>

- ##### 🧾 Columns included in the table view.

| Column | Description |
|--------|-------------|
| Agents   | Name of the telemarketing agent.  |
| Total Lead Worked    | Number of unique leads worked by the agent.   |
|Total Calls Made | Total number of calls attempted by the agent.|
|Connected Calls    | Number of calls successfully connected. |
|Appointments Set    | Total number of appointments scheduled by the agent.   |
| Connect Rate (%)  | Percentage of attended calls that were successfully connected.    |
| Appointment Rate (%)  | Percentage of connected calls that resulted in scheduled appointments.     |


<figure>
  <img src="/media/analytics/report/telemarketing-report/telemarketing-reports/telemarketing-overview-summary.png" alt="telemarketing overview summary" />
  <figcaption> Telemarketing Overview Summary</figcaption>
</figure>

### 📅 Daily Activity Report

A concise summary of daily activities, highlighting key actions, productivity, and performance outcomes.

<details>
 <summary><strong>Click to see quick actions</strong></summary>
  - Hover on the **Help** icon to see the tooltip.
  - Perform the search.
  - Filter by Date Range.
  - Filter by Campaign and Users.
 </details>

- ##### 🧾 Columns included in the table view.

| Column | Description |
|--------|-------------|
| Date  | Date on which the telemarketing activity was performed.  |
| Agent  | Name of the agent.    |
| Leads Attempted  | Number of unique leads attempted by the agent.   |
| Calls Made  | Total number of calls made by the agent.    |
| None Touched  | Calls where no meaningful interaction occurred.    |
| Gatekeeper Touched  | Calls where gatekeeper was contacted instead of the prospect.|
| Prospects Touched  | Calls where the intended prospect was successfully contacted.    |
| MQL  | Number of leads that progressed to Marketing Qualified Lead (MQL) stage.    |
| Appointments Set  | Number of the appointments scheduled by the agent.    |
| Asked to callback  | Number of calls where the prospect requested to call back. |
| Not Interested   | Calls where the prospect expressed no interest. |
| Not Qualified  | Calls resulted in disqualification of the lead.    |

<figure>
  <img src="/media/analytics/report/telemarketing-report/telemarketing-reports/daily-activity-report.png" alt="daily activity report" />
  <figcaption> Daily Activity Report</figcaption>
</figure>

### 🚀 Agent Productivity 

<Tabs>
<TabItem value="performance" label="📈 Performance">

- #### ⚡ Agent Productivity Performance

A concise overview of agent efficiency, measuring output against time and activity to evaluate individual and team productivity.

<details>
 <summary><strong>Click to see quick actions</strong></summary>
  - Toggle between Line chart and Bar chart.
  - Toggle between Table view and Chart view.
  - Perform Search in table view.
  - Export/Download the report.
  - Save the Chart as an image.
  - Reset the modified chart.
  - Filter by Date Range.
  - Filter by Campaign and Users.
 </details>

  :::tip
 - Hover on the Group Bar Chart to see the individual data points.
 :::

<figure>
  <img src="/media/analytics/report/telemarketing-report/telemarketing-reports/agent-productivity/agent-productivity-performance.png" alt="agent productivity performance" />
  <figcaption> Agent Productivity Performance Group Bar Chart View</figcaption>
</figure>

- ##### 🧾 Columns included in the table view.

| Column | Description |
|--------|-------------|
| Agent  | Full name of the telemarketing agent.    |
| Calls/Day  | Average number of calls made per active working day.|
| Connected Rate  | Percentage of attempted calls that were successfully connected.|
| Appointment Rate  | Percentage of connected calls that resulted in scheduled appointments. |

<figure>
  <img src="/media/analytics/report/telemarketing-report/telemarketing-reports/agent-productivity/agent-productivity-performance-table-view.png" alt="agent productivity performance" />
  <figcaption> Agent Productivity Performance Table View</figcaption>
</figure>

</TabItem>

<TabItem value="analysis" label="📊 Analysis">

- #### 🏁 Call Outcomes by Agent

A clear summary of call result distribution by agent, highlighting performance trends, effectiveness, and outcome consistency.

<details>
 <summary><strong>Click to see quick actions</strong></summary>
  - Can Toggle between Line chart and Bar chart.
  - Can Toggle between Table view and Chart view.
  - Can perform Search in table view.
  - Can Export/Download the report.
  - Can Save the Chart as image.
  - Can Reset the modified chart.
  - Can Filter by Date Range.
  - Can Filter by Campaign and Users.
 </details>

 :::tip
 - Hover on the Group Bar Chart to see the individual data points.
 :::

<figure>
  <img src="/media/analytics/report/telemarketing-report/telemarketing-reports/agent-productivity/call-outcomes-by-agent.png" alt="call outcome by agent" />
  <figcaption> Call Outcome By Agent Bar Chart View</figcaption>
</figure>

- ##### 🧾 Columns included in the table view.

| Column | Description |
|--------|-------------|
| Agent   | Name of the telemarketing agent.    |
| Connected Calls  | Total number of calls successfully connected by the agent.     |
| Appointment Rate (%)  | Percentage of connected calls that resulted in scheduled appointments.    |
| Call Back Rate (%)   | Percentage of connected calls that resulted in a call back request.    |
| Not Interested Rate (%) | Percentage of connected calls that marked as not interested.|
| No Response Rate (%)  | Percentage of connected calls with no meaningful response.     |
| Wrong Info Rate (%)  | Percentage of connected calls with incorrect or invalid contact information.    |

<figure>
  <img src="/media/analytics/report/telemarketing-report/telemarketing-reports/agent-productivity/call-outcomes-by-agent-table-view.png" alt="call outcome by agent" />
  <figcaption> Call Outcome By Agent Table View</figcaption>
</figure>

---

- #### ✅ Agent Conversion Quality

An assessment of how effectively agents convert interactions into successful outcomes, focusing on conversion accuracy, consistency, and quality.

<details>
 <summary><strong>Click to see quick actions</strong></summary>
  - Can Toggle between Line chart and Bar chart.
  - Can Toggle between Table view and Chart view.
  - Can perform Search in table view.
  - Can Export/Download the report.
  - Can Save the Chart as image.
  - Can Reset the modified chart.
  - Can Filter by Date Range.
  - Can Filter by Campaign and Users.
 </details>

  :::tip
 - Hover on the Group Bar Chart to see the individual data points.
 :::

<figure>
  <img src="/media/analytics/report/telemarketing-report/telemarketing-reports/agent-productivity/agent-conversion-quality.png" alt="agent conversion quality" />
  <figcaption> Agent Conversion Quality Bar Chart View</figcaption>
</figure>

- ##### 🧾 Columns included in the table view.

| Column | Description |
|--------|-------------|
| Agent  | Name of the telemarketing agent.    |
| Calls Made  | Total number of calls made by the agent.    |
| Connections  | Number of calls successfully connected.    |
| Appointments Set| Total number of appointments scheduled by the agent.    |
| Connect Rate  | Percentage of connected calls that resulted in a connection.     |
| Appointment Rate (%) | Percentage of connected calls that resulted in scheduled appointments.    |

<figure>
  <img src="/media/analytics/report/telemarketing-report/telemarketing-reports/agent-productivity/agent-conversion-quality-table-view.png" alt="agent conversion quality" />
  <figcaption> Agent Conversion Quality Table View</figcaption>
</figure>

</TabItem>

</Tabs>

### 🚫 Not Interested Analysis

- #### ❓ Top Not Interested Reason

A summary of the most common reasons prospects decline, helping identify objections and improve targeting and messaging strategies.

<details>
 <summary><strong>Click to see quick actions</strong></summary>
  - Can Toggle between Line chart and Bar chart.
  - Can Toggle between Table view and Chart view.
  - Can perform Search in table view.
  - Can Export/Download the report.
  - Can Save the Chart as image.
  - Can Filter by Date Range.
  - Can Filter by Campaign and Users.
 </details>

 <figure>
  <img src="/media/analytics/report/telemarketing-report/telemarketing-reports/not-interested-analysis/top-not-interested-reason.png" alt="top ni reason" />
  <figcaption> Top NI Reason Chart View</figcaption>
</figure>

- ##### 🧾 Columns included in the table view.

| Column | Description |
|--------|-------------|
| Not Interested Reason  | Reason provided by the prospect for declining interest.     |
| Count  | Number of times this reason was recorded.    |


<figure>
  <img src="/media/analytics/report/telemarketing-report/telemarketing-reports/not-interested-analysis/top-not-interested-reason-table-view.png" alt="top ni reason" />
  <figcaption> Top NI Reason Table View</figcaption>
</figure>

---

- #### 📊 NI % by Campaign

A comparison of the “Not Interested” percentage across campaigns, highlighting engagement effectiveness and areas needing optimization.

<details>
 <summary><strong>Click to see quick actions</strong></summary>
  - Toggle between Line chart and Bar chart.
  - Toggle between Table view and Chart view.
  - Perform Search in table view.
  - Export/Download the report.
  - Save the Chart as an image.
  - Filter by Date Range.
  - Filter by Campaign and Users.
 </details>

<figure>
  <img src="/media/analytics/report/telemarketing-report/telemarketing-reports/not-interested-analysis/ni-percentage-by-campaign.png" alt="ni % by campaign" />
  <figcaption> NI % By Campaign Chart View</figcaption>
</figure>

- ##### 🧾 Columns included in the table view.

| Column | Description |
|--------|-------------|
| Campaign  |Name of the Campaign.     |
| Connected Calls | Number of Calls connected for the campaign.    |
| Not Interested   | Number of calls marked as not interested.    |
| Not Interested Rate (%)  | Percentage of connected calls that resulted in a not interested outcome.|

<figure>
  <img src="/media/analytics/report/telemarketing-report/telemarketing-reports/not-interested-analysis/ni-percentage-by-campaign-table-view.png" alt="ni % by campaign" />
  <figcaption> NI % By Campaign Table View</figcaption>
</figure>

---

- #### 👤 NI % by Agent

A breakdown of the “Not Interested” percentage by agent, providing insight into engagement quality and agent-level effectiveness.

<details>
 <summary><strong>Click to see quick actions</strong></summary>
  - Can Toggle between Line chart and Bar chart.
  - Can Toggle between Table view and Chart view.
  - Can perform Search in table view.
  - Can Export/Download the report.
  - Can Save the Chart as image.
  - Can Filter by Date Range.
  - Can Filter by Campaign and Users.
 </details>

<figure>
  <img src="/media/analytics/report/telemarketing-report/telemarketing-reports/not-interested-analysis/ni-percentage-by-agent.png" alt="ni % by agent" />
  <figcaption> NI % By Agent Chart View</figcaption>
</figure>

- ##### 🧾 Columns included in the table view.

| Column | Description |
|--------|-------------|
| Agent  |Name of the Agent.     |
| Connected Calls | Number of Calls connected for the campaign.    |
| Not Interested   | Number of calls marked as not interested.    |
| Not Interested Rate (%)  | Percentage of connected calls that resulted in a not interested outcome.|

<figure>
  <img src="/media/analytics/report/telemarketing-report/telemarketing-reports/not-interested-analysis/ni-percentage-by-agent-table-view.png" alt="ni % by agent" />
  <figcaption> NI % By Agent Table View</figcaption>
</figure>