import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# Opportunity Management

The **Opportunity Management** module in **C360 CRM** helps you track, manage, and update all sales opportunities in one place.

To access it:  
➡️ Go to **Sales** → **Opportunity** from the left-hand menu.

## 📊 Opportunity Overview

The **Opportunity List** provides a complete overview of all opportunities in the system.  
You can switch between **List View** and **Grid View** depending on your preference.

---

<Tabs>
  <TabItem value="list" label="📋 List View" default>

In **List View**, opportunities are displayed in a table format with sortable columns.

### Columns in List View

| Column                 | Description                                                  |
| ---------------------- | ------------------------------------------------------------ |
| **Action**             | Inline editing options (quick update).                       |
| **Opportunity Name**   | Name of the sales opportunity.                               |
| **Stage**              | Current phase of the sales process.                          |
| **Amount**             | Estimated revenue from the opportunity.                      |
| **Close Date**         | Expected closure date.                                       |
| **Probability**        | Likelihood of closure (set automatically per stage).         |
| **Account Name**       | Associated account/customer.                                 |
| **Opportunity Type**   | Classification: _New Business_, _Renewal_, _Upsell_.         |
| **Opportunity Source** | Origin: _Referral_, _Marketing Campaign_, _Inbound Inquiry_. |
| **Modified At**        | Last modification date.                                      |
| **Last Activity**      | Most recent engagement/interaction.                          |

<figure>
  <img src="/static/media/crm/opportunity/opportunity-list.png" alt="Opportunity List view" />
  <figcaption>List View — tabular format with sortable columns</figcaption>
</figure>

  </TabItem>

  <TabItem value="grid" label="🗂 Grid View">

In **Grid View**, opportunities appear as **cards** arranged by their **stage**.

- Each stage is shown as a **chip** at the top (e.g., Prospecting, Qualification, Negotiation, Closed Won).
- You can **filter opportunities** by clicking on these stage chips.
- Each card displays quick info such as **Opportunity Name, Account, Type, Owner, and Close Date**.
- Use the **ellipsis (⋮)** on a card for quick actions like Edit, Clone, or Delete.

<figure>
  <img src="/static/media/crm/opportunity/opportunity-grid.png" alt="Opportunity Grid view" />
  <figcaption>Grid View — opportunities displayed as cards grouped by stage</figcaption>
</figure>

  </TabItem>
</Tabs>

## 🔄 Opportunity Lifecycle

```mermaid
flowchart LR
    A[New Opportunity] --> B[Prospecting]
    B --> C[Qualification]
    C --> D[Needs Analysis]
    D --> E[Negotiation]
    E --> F[Proposal & Price Quote]
    F --> G[Deal]
    G --> H{Closed?}

    H -->|Won| I[Closed Won ✅]
    H -->|Lost| J[Closed Lost ❌]

    %% Archived/Alternate Exit Paths
    A --> K[Bad Data]
    A --> L[Unqualified Deal]
    B --> M[No Action]
    C --> N[Budget Withdrawn]

```

---

## ⚡ Key Actions on the Opportunity Page

1. 🔍 **Search Opportunities** – Find records by name, phone, or mobile.
2. ➕ **Add Opportunity** – Create new opportunities.
3. 🗑 **Delete** – Select opportunities using checkboxes → click **Delete**.
4. 👤 **Assign / Change Owner** – Reassign opportunities to other users.
5. 📥 **Import** – Upload opportunities via pre-formatted file.
6. 📤 **Export (Download as Spreadsheet)** – Export selected opportunities.
7. ✏️ **Inline Editing** – Update fields directly in the table.
8. 🖥 **Maximize View** – Expand list to full screen.
9. 🗂 **Grid View** – Visualize opportunities with **color-coded stages**.

<figure>
  <img
    src="/static/media/crm/opportunity/opportunity-grid.png"
    alt="Opportunity Grid View"
  />
  <figcaption>Grid view with stage-based color coding</figcaption>
</figure>

---

## 🔍 Searching & Filtering Opportunities

### Search

- Enter **Name**, **Phone**, or **Mobile Number** in the search bar.
- Click the **Search icon**.

<figure>
  <img
    src="/static/media/crm/opportunity/opportunity-search.png"
    alt="Search Opportunities"
  />
  <figcaption>Search opportunities instantly</figcaption>
</figure>

### Filter

You can filter by:

- Lead Source
- Opportunity Type
- Opportunity Stage
- Account Name

:::tip

- Toggle between **Active** and **Archived** opportunities.
- Tabs let you switch between **Opportunities Owned by You** vs **Assigned to You**.  
  :::

<figure>
  <img
    src="/static/media/crm/opportunity/opportunity-filter.png"
    alt="Filter Opportunities"
  />
  <figcaption>Filter opportunities by multiple criteria</figcaption>
</figure>

---

## 📂 Exporting Opportunities

1. Select the checkboxes for opportunities.
2. Click the **Download icon**.

<figure>
  <img
    src="/static/media/crm/opportunity/opportunity-download.png"
    alt="Download Opportunities"
  />
  <figcaption>Export selected opportunities to Excel</figcaption>
</figure>

---

## 📝 Viewing & Managing Opportunity Details

- **Opportunity Owner**
- **Opportunity Name**
- **Account Name**
- **Type, Probability, Amount**
- **Assigned User**

You can also manage:

- Notes
- Tasks
- Activities

:::note  
Click **Add Note** or **Add Task** to log new interactions.  
:::

<figure>
  <img
    src="/static/media/crm/opportunity/opportunity-detail.png"
    alt="Opportunity Details"
  />
  <figcaption>Detailed view of an opportunity</figcaption>
</figure>

---

## 👥 Assigning / Changing Opportunity Owner

<Tabs>
<TabItem value="Assign" label="Assign Opportunity">

1. Select opportunities in the list.
2. Click **Assign To** → choose a user → click **Assign**.

<figure>
  <img
    src="/static/media/crm/opportunity/opportunity-assign.png"
    alt="Assign Opportunity"
  />
  <figcaption>Assign an opportunity to a user</figcaption>
</figure>

</TabItem>

<TabItem value="Change" label="Change Owner">

1. Select the opportunity.
2. Click **Change Owner** → select user → click **Confirm**.

<figure>
  <img
    src="/static/media/crm/opportunity/opportunity-change-owner.png"
    alt="Change Owner"
  />
  <figcaption>Change ownership of an opportunity</figcaption>
</figure>

</TabItem>
</Tabs>

---

## ➕ Adding & Editing Opportunities

- **Add**:

  1. Click **Add Opportunity**
  2. Fill required fields
  3. Click **Save**

- **Edit**:
  - Use the **inline edit icon** in the list, OR
  - Open **Opportunity Details** → click **Edit**

:::info  
The **Update button** activates once you make changes.  
:::

<figure>
  <img
    src="/static/media/crm/opportunity/opportunity-add.png"
    alt="Add Opportunity"
  />
  <figcaption>Create a new opportunity</figcaption>
</figure>

<figure>
  <img
    src="/static/media/crm/opportunity/opportunity-edit.png"
    alt="Edit Opportunity"
  />
  <figcaption>Edit an existing opportunity</figcaption>
</figure>
