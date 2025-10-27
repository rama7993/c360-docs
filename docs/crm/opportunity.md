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
  <img src="/media/crm/opportunity/opportunity-list.png" alt="Opportunity List view" />
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
  <img src="/media/crm/opportunity/opportunity-grid.png" alt="Opportunity Grid view" />
  <figcaption>Grid View — opportunities displayed as cards grouped by stage</figcaption>
</figure>

  </TabItem>
</Tabs>
---
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
    src="/media/crm/opportunity/opportunity-grid.png"
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
    src="/media/crm/opportunity/opportunity-search.png"
    alt="Search Opportunities"
  />
  <figcaption>Search opportunities instantly</figcaption>
</figure>

---

### Filter

# Opportunity Filters

You can filter opportunities by:

<details>
<summary>Click to view available opportunity filters</summary>

- **Lead Source** – Opportunities based on where the lead originated (e.g., Website, Referral, Campaign).
- **Opportunity Type** – Categorize opportunities by type (e.g., New Business, Renewal, Upsell).
- **Opportunity Stage** – Filter opportunities according to the sales stage (e.g., Prospecting, Negotiation, Closed Won).
- **Account Name** – View opportunities linked to a specific account or client.

</details>

:::tip

- Toggle between **Active** and **Archived** opportunities.
- Use tabs to switch between **Opportunities Owned by You** vs **Assigned to You**.  
  :::

<figure>
  <img
    src="/media/crm/opportunity/opportunity-filter.png"
    alt="Filter Opportunities"
  />
  <figcaption>Filter opportunities by multiple criteria</figcaption>
</figure>

---

## 🎛️ Filtering Opportunity
<details>
<summary>Click to view available filters</summary>
- **Lead Source** → Origin of the opportunity (Website, Referral, Campaign, etc.)
- **Opportunity Type** → Business type (New, Renewal, Upsell)
- **Opportunity Stage** → Current sales stage (Prospecting → Negotiation → Closed)
- **Account Name** → Specific account or organization
</details>
Other filter options include:

- Viewing **Active** or **Archived** Opportunities using the toggle switch.
- **All Opportunities / My Opportunities / Opportunities Assigned To Me**  

:::note
 - All Opportunities: Created By me/Assigned to me/Created By below users.
 - My Opportunities: Created By me
 - Opportunities Assigned To Me: The Opportunity which was assiged to me by someone.
:::

---

## 🗑️ Deleting Opportunities

1. Select the checkbox(es) beside the Opportunities you want to delete.
2. Click the **Delete** icon .
3. Click on **Yes** from the confirmation pop up if you want to delete.

<figure>
  <img src="/media/crm/opportunity/opportunity-delete.png" alt="Delete action for selected opportunity" />
  <figcaption>Delete selected opportunitys</figcaption>
</figure>

---

## 📂 Downoading Opportunities

1. Select the checkboxes for opportunities.
2. Click the **Download icon**.

<figure>
  <img
    src="/media/crm/opportunity/opportunity-download.png"
    alt="Download Opportunities"
  />
  <figcaption>Export selected opportunities to Excel</figcaption>
</figure>

---

## 📝 Viewing & Managing Opportunity Details

Each opportunity contains a **detailed view** where you can review and update key information.

### Core Details

- **Opportunity Owner** — who manages the opportunity.
- **Opportunity Name** — unique identifier/title of the deal.
- **Account Name** — the customer or account linked to the opportunity.
- **Type, Probability, Amount** — classification (e.g., New Business), closure likelihood, and deal value.
- **Assigned User** — the team member responsible.

### Actions You Can Perform

- **Edit Opportunity**: Update details, change the owner, or adjust the stage.
- **Reassign**: Allocate the opportunity to another user.
- **Add Notes & Tasks**: Log important updates or schedule follow-up actions.
- **Track Activities**: Review past engagements and interactions.

:::note  
Use the **Add Note** or **Add Task** buttons in the top-right corner to capture new updates and ensure smooth follow-ups.  
:::

<figure>
  <img
    src="/media/crm/opportunity/opportunity-details.png"
    alt="Opportunity Details"
  />
  <figcaption>Opportunity detail view with editable fields and related activities</figcaption>
</figure>

---

## 👥 Assigning / Changing Opportunity Owner

<Tabs>
<TabItem value="Assign" label="Assign Opportunity">

1. Select opportunities from the list.
2. Click **Assign To** → choose a user → click **Assign**.

<figure>
  <img
    src="/media/crm/opportunity/opportunity-assign.png"
    alt="Assign Opportunity"
  />
  <figcaption>Assign an opportunity to a user</figcaption>
</figure>

</TabItem>

<TabItem value="Change" label="Change Owner">

1. Select opportunity from the list.
2. Click **Change Owner** → select user → click **Confirm**.

<figure>
  <img
    src="/media/crm/opportunity/opportunity-change owner.png"
    alt="Change Owner"
  />
  <figcaption>Change Owner</figcaption>
</figure>

</TabItem>
</Tabs>

---

## ➕ Add & Edit Opportunities

- **Add**:

  1. Click **Add Opportunity**
  2. Fill required fields
  3. Click **Save**
     :::info
     Opportunity can be generated or created using two ways:
  4. Normal Addition from list Page.
  5. From Lead Convertion.

- **Edit**:
  - Use the **inline edit icon** in the list, OR
  - Open **Opportunity Details** → click **Edit**

:::info  
The **Update button** activates once you make changes.  
:::

<figure>
  <img
    src="/media/crm/opportunity/opportunity-add.png"
    alt="Add Opportunity"
  />
  <figcaption>Create a new opportunity</figcaption>
</figure>
