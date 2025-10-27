import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 📢 Campaign Management

The **Campaign Management** module in C360 allows you to plan, launch, and monitor marketing campaigns that engage your audience through emails, webinars, and other activities.

To access it:
➡️Go to **Marketing → Campaign** from the left-hand menu.

---

## 📋 Managing Campaigns

The Campaigns section provides a clear overview of all campaigns. You can toggle between **List View** and **Grid View** for easier management.

### 🔎 Top Bar Actions

- **Search** campaigns by name
- **Add** a new campaign
- **Assign** campaigns to user groups
- **Delete** campaigns (single or bulk)
- Toggle between **List / Grid View**

> **✏️ Edit** → Pencil icon  
> **🗑️ Delete** → Trash icon

## 🖥️ Campaign Views

<Tabs>
  <TabItem value="list" label="📄 List View" default>

The **List View** displays campaigns in a structured table format for quick scanning and comparison.

| Field             | Description                          |
| ----------------- | ------------------------------------ |
| **Campaign Name** | Name of the campaign                 |
| **Description**   | Brief summary of the campaign        |
| **Created Date**  | Campaign creation date               |
| **Modified Date** | Last updated date                    |
| **Status**        | Draft / Published / Expired          |
| **Expiration**    | End date of the campaign (if set)    |
| **Actions**       | Assign, Edit, or Add/View Activities |

<figure>
  <img src="/media/marketing/campaign/campaign-list.png" alt="Campaign List View" />
  <figcaption>Campaign List View</figcaption>
</figure>

  </TabItem>

  <TabItem value="grid" label="🔳 Grid View">

The **Grid View** presents campaigns as visual cards with thumbnails and quick actions.

<figure>
  <img src="/media/marketing/campaign/campaign-grid.png" alt="Campaign Grid View" />
  <figcaption>Campaign Grid View</figcaption>
</figure>

  </TabItem>
</Tabs>

## Campaign Flow

```mermaid
flowchart TD
    A[Start Campaign Setup] --> B[Enter Campaign Details & Attributes]
    B --> C[Define Activities for Campaign]

    C --> D{Activity Type?}
    D -->|Single Touch| E[Configure Single-Touch Activity]
    D -->|Multi Touch| F[Design Multi-Touch Workflow]

    E --> G[Assign Activity to Audience]
    F --> G[Assign Workflow to Audience]

    G --> H[Preview & Validate Campaign]
    H --> I{Everything Correct?}
    I -->|Yes| J[Schedule / Launch Campaign]
    I -->|No| K[Edit Campaign / Activities]
    K --> B

```

## 🔍 Search & Filter Campaigns

### Search Campaigns

- Enter a **campaign name** in the search bar
- Press **Enter** or click the **search icon**

<figure>
  <img src="/media/marketing/campaign/campaign-search.png" alt="Search campaigns by name" />
  <figcaption>Search campaigns by name</figcaption>
</figure>

### Filter Campaigns

You can refine campaign results using filters.

<details>
<summary>Available Filters</summary>

- **Country** → Campaign location
- **Language** → Campaign language
- **Industry** → Vertical focus (IT, Healthcare, etc.)
- **Products** → Related products
- **Audiences** → Target segments
- **Campaign Category** → Promotional, Informational, etc.
- **Status** → Draft / Published / Expired
- **Created / Modified Dates** → Time-based filtering

</details>

- **All Campaigns/ My Campaigns / Campaigns Assigned To Me**  

:::note
 - All Campaigns: Created By me/Assigned to me/Created By below users.
 - My Campaigns: Created By me
 - Campaigns Assigned To Me: The Campaign which was assiged to me by someone.
:::

<figure>
  <img src="/media/marketing/campaign/campaign-filter.png" alt="Filter options for campaigns" />
  <figcaption>Filter options for campaigns</figcaption>
</figure>

## 👥 Assigning Campaigns

1. Select one or more campaigns from the list.
2. Click **Assign To** in the top bar.
3. Select the appropriate **user group** and confirm the assignment.

<figure>
  <img src="/media/marketing/campaign/campaign-assign.png" alt="Assign campaigns to user groups" />
  <figcaption>Assign campaigns to a user group</figcaption>
</figure>

---

## 🗑️ Deleting Campaign

1. Select the checkbox(es) for the Campaign you want to delete.
2. Click the **Delete** icon .
3. Click on **Yes** from the confirmation pop up if you want to delete.

<figure>
  <img src="/media/marketing/campaign/campaign-delete.png" style={{width:"100%", maxWidth:"650px"}} />
  <figcaption>Delete selected Campaign</figcaption>
</figure>

---

## ✏️ Adding or Editing Campaigns

When creating or editing a campaign, the interface is organized into tabs. Complete the required fields (marked with \*) and click **Save** to proceed.

<Tabs>
  <TabItem value="general" label="General Info" default>

### General Information (Required Fields)

- **Campaign Name** — Title of the campaign
- **Category** — Promotional / Informational / Seasonal
- **Status** — Draft / Published / Expired
- **Description** — Brief summary of the campaign
- **Thumbnail** — Visual identifier
- **Language** — Primary campaign language
- **Estimated Budget** — Planned budget allocation
- **Expiration Date** — Campaign end date (if applicable)

<figure>
  <img src="/media/marketing/campaign/campaign-add-general info.png" alt="Campaign general information" />
  <figcaption>Campaign general information</figcaption>
</figure>

  </TabItem>

  <TabItem value="attributes" label="Attributes">

### Attributes

- **Audiences** — Target segments
- **Products** — Associated products
- **Vertical Industries** — Relevant industries
- **Regions / Countries** — Target geographies

<figure>
  <img src="/media/marketing/campaign/campaign-add-attributes.png" alt="Campaign attributes" />
  <figcaption>Campaign attributes</figcaption>
</figure>

  </TabItem>
</Tabs>

:::note
Once you save the **General Information** and **Attributes**, the **Activities** tab becomes available for configuring campaign activities.
:::

---

## 📑Campaign Activities

Each campaign can include one or more **Activities** (e.g., Emails, Webinars). Activities can be managed in **List View** or **Grid View**, and support the following actions:

- **Preview**
- **Clone**
- **Edit**
- **Delete**
- **Execute**

<Tabs>
  <TabItem value="activities-list" label="📄 List View" default>

The **List View** presents activities in a tabular format for quick scanning.

| Field                  | Description                             |
| ---------------------- | --------------------------------------- |
| **Activity Name**      | Title of the activity                   |
| **Type**               | Email / Webinar                         |
| **Status**             | Draft / Published                       |
| **Flow**               | Single Touch / Multi Touch              |
| **Created / Modified** | Timestamps for creation and last update |
| **Actions**            | Preview, Clone, Edit, Delete, Execute   |

<figure>
  <img src="/media/marketing/campaign/campaign-activity-list.png" alt="Activity list view" />
  <figcaption>Activities displayed in List View</figcaption>
</figure>

  </TabItem>

  <TabItem value="activities-grid" label="🔳 Grid View">

The **Grid View** displays activities as visual cards with key details.  
Use the **⋮ menu** on each card to access available actions:

- Edit
- View Info
- Clone
- Preview
- Delete

<figure>
  <img src="/media/marketing/campaign/campaign-activity-grid.png" alt="Activities grid actions" />
  <figcaption>Activity actions in Grid View</figcaption>
</figure>

  </TabItem>
</Tabs>

---

## 🔎 Search & Filter Activities

### Search Activities

- Enter a **Activity name** in the search bar
- Press **Enter** or click the **search icon**

<figure>
  <img src="/media/marketing/campaign/campaign-activity-search.png" alt="Search activity by name" />
  <figcaption>Search activity by name</figcaption>
</figure>

### Filter Activities

You can refine activity results using filters.

<details>
<summary>Available Filters</summary>
 **Filter** — Narrow results by:
  - **Type** (Email, Webinar, etc.)
  - **Flow** (Single / Multi Touch)
  - **Status** (Draft / Published)
  - **Date Range** (Created / Modified)

</details>

- **All Activities/ My Activities / Activities Assigned To Me**  

:::note
 - All Activities: Created By me/Assigned to me/Created By below users.
 - My Activities: Created By me
 - Activities Assigned To Me: The Activities which was assiged to me by someone.
:::

<figure>
  <img src="/media/marketing/campaign/campaign-activity-filter.png" alt="Filter options for activity" />
  <figcaption>Filter options for activity</figcaption>
</figure>

---

## 🔄 Flow Options

Activities can follow one of two flows:

- **Single Touch** — A one-time interaction using a predefined template.
- **Multi Touch** — A sequence of multiple steps in a campaign workflow.

<figure>
  <img src="/media/marketing/campaign/campaign-activity-add.png" alt="Activity Flow options" />
  <figcaption>Single Touch vs. Multi Touch workflows</figcaption>
</figure>

## ➕ Adding or Editing an Activity

To create or modify an activity, navigate to the **Activities** section and click **Add Activity**.

### Required Details

When adding an activity, provide the following information:

- **Name** — a clear, descriptive title
- **Description** — purpose or context for the activity
- **Status** — set as **Draft** or **Published**
- **Flow** — choose **Single Touch** or **Multi Touch**
- **Thumbnail** — optional visual identifier

Click **Save** to finalize. Once saved, the activity can be previewed or executed directly from the **List** or **Grid** view.

---

### 📧 Single Touch Activity

- Select an existing email template from the library, or create a new one.
- Preview your configuration and click **Save**.

<figure>
  <img src="/media/marketing/campaign/campaign-activity-add.png" alt="Add Single Touch Activity" />
  <figcaption>Adding a Single Touch Activity</figcaption>
</figure>

---

### 🔄 Multi Touch Activity

- Choose **Multi Touch** as the flow type.
- Click **Builder** to open the workflow canvas.
- Add steps (emails, webinars, follow-ups) and save your workflow.

<figure>
  <img src="/media/marketing/campaign/campaign-activity-add-multitouch.png" alt="Activity Builder Canvas" />
  <figcaption>Designing a Multi Touch workflow in the Activity Builder</figcaption>
</figure>

---

### 📝 Clone an Activity

- Click the **Clone** icon to duplicate an activity.
- The cloned version is automatically saved as **Draft** for editing.

<figure>
  <img src="/media/marketing/campaign/campaign-activity-clone action.png" alt="Clone Activity Icon" />
  <figcaption>Cloning an activity</figcaption>
</figure>

<figure>
  <img src="/media/marketing/campaign/campaign-activity-after clone.png" alt="Cloned Activity Draft" />
  <figcaption>A cloned activity in Draft status</figcaption>
</figure>

---

### 👥 Assign Activities

1. Select one or more activities from the list.
2. Click **Assign To** and choose a target group.

<figure>
  <img src="/media/marketing/campaign/campaign-activity-assign.png" alt="Assign Activities to Groups" />
  <figcaption>Assigning activities to user groups</figcaption>
</figure>

---

## 🗑️ Deleting Activity

1. Select the checkbox(es) for the Activity you want to delete.
2. Click the **Delete** icon .
3. Click on **Yes** from the confirmation pop up if you want to delete.

<figure>
  <img src="/media/marketing/campaign/campaign-activity-delete.png" style={{width:"100%", maxWidth:"650px"}} />
  <figcaption>Delete selected Activity</figcaption>
</figure>

---

## 🏗 Multi-Touch Campaign — Workflow Builder

The **Workflow Builder** allows you to design automated, multi-step campaigns that combine emails, lead updates, and conditional logic based on user behavior.

<figure>
  <img src="/media/marketing/campaign/campaign-activity-builder canvas.png" alt="Workflow Builder canvas" />
  <figcaption>Workflow Builder Canvas</figcaption>
</figure>

---

### ⚙️ Workflow Components

<Tabs>
  <TabItem value="actions" label="Actions">

Actions define what happens at each step of the workflow:

- **Send Email** — deliver a selected email template to the target audience
- **Inaction (No Action) - Send Email** — follow up if the recipient does not engage
- **Update Lead** — modify lead attributes or status
- **Inaction (No Action) - Update Lead** — take an alternate step if no change occurs

<figure>
  <img src="/media/marketing/campaign/campaign-activity-builder-actions.png" alt="Workflow actions" />
  <figcaption>Workflow Actions</figcaption>
</figure>

  </TabItem>

  <TabItem value="decisions" label="Decisions">

Decisions (triggers) determine the path a user follows in the workflow, based on their behavior:

- **Open Email**
- **Download Asset**
- **Submit Form**
- **Visit Landing Page**

<figure>
  <img src="/media/marketing/campaign/campaign-activity-builder-decissions.png" alt="Workflow decisions" />
  <figcaption>Workflow Decisions</figcaption>
</figure>

  </TabItem>
</Tabs>

---

### 🛠 Building a Workflow

Follow these steps to create a simple multi-touch workflow:

1. Click **Start** — a modal displays available actions (e.g., Send Email, Update Lead).
2. Select an action and configure it:

   - **Name**
   - **Execution Timing** (immediately, after a delay, or at a specific date/time)
   - **Subject**
   - **Sender Name**
   - **Email Template** (choose from library or **Add Email**)

<figure>
  <img src="/media/marketing/campaign/campaign-activity-builder-add action.png" alt="Add action" />
  <figcaption>add action</figcaption>
</figure>
     

3. Preview the configuration and click **Save** to add the block to the workflow canvas.

<figure>
  <img src="/media/marketing/campaign/campaign-activity-builder-add email.png" alt="Add Email modal" />
  <figcaption>Configuring an email block</figcaption>
</figure>

<figure>
  <img src="/media/marketing/campaign/campaign-activity-builder-email preview.png" alt="Preview email modal" />
  <figcaption>Previewing an email before saving</figcaption>
</figure>
---

### 🔀 Managing Workflow Blocks

- Add multiple **actions** and **decisions** to build complex journeys
- Hover over a block to **edit** or **remove** it
- Branch workflows to handle multiple outcomes

<figure>
  <img src="/media/marketing/campaign/campaign-activity-builder-manage block.png" alt="Example branching workflow" />
  <figcaption>Example of a branching workflow</figcaption>
</figure>

<figure>
  <img src="/media/marketing/campaign/campaign-activity-builder-work flow.png" alt="Workflow block controls" />
  <figcaption>Editing and managing workflow blocks</figcaption>
</figure>

---

:::note
Workflows can branch based on conditions and user decisions.  
Always use **Preview** to validate the workflow logic before executing it live.
:::

## 👁 Campaign Preview

1. Click the campaign name in the **Campaign List** to open its details.
2. Use the eye icon to preview campaign activities:
   - **Single Touch** campaigns open in a modal window.
   - **Multi Touch** campaigns open in a new browser tab.

<figure>
  <img src="/media/marketing/campaign/campaign-details.png" alt="Campaign details page" />
  <figcaption>Campaign details page</figcaption>
</figure>

<figure>
  <img src="/media/marketing/campaign/campaign-activity-single-touch-preveiw-modal.png" alt="Single Touch preview modal" />
  <figcaption>Single Touch campaign preview (modal)</figcaption>
</figure>

<figure>
  <img src="/media/marketing/campaign/campaign-activity-multi-touch-preview-tab.png" alt="Multi Touch preview tab" />
  <figcaption>Multi Touch campaign preview (new tab)</figcaption>
</figure>

## 🛠️ Before Executing a Campaign

:::note
Before executing a campaign, ensure you have the following prepared:

1. **Contact Segment / Lead List** — the audience you want to target.
2. **Channels** — such as email templates or webinar setup.
3. **Assets** — supporting materials like landing pages, forms, or creatives.
   :::

## 📤 Executing Campaigns (Sending Emails)

You can execute both **Single Touch** and **Multi Touch** campaigns. The steps below walk you through configuration, testing, audience selection, and scheduling.

---

## ✉️ Execute a Single Touch Campaign

1. **Click Execute** on the activity you want to send.
2. **Configure email settings**:
   - Email name
   - Subject line
   - From name
   - Type (Email / Webinar)
   - Preview text

<figure>
  <img src="/media/marketing/campaign/campaign-activity-single-touch-configure.png" alt="Single touch configure" />
  <figcaption>Single Touch configuration</figcaption>
</figure>

3. **Preview and edit** the content if needed.

<figure>
  <img src="/media/marketing/campaign/campaign-activity-single-touch-preview.png" alt="Preview and edit single touch" />
  <figcaption>Preview and edit</figcaption>
</figure>

4. **Send a test email**:
   - Enter a test recipient address.
   - Click **Test Mail** to verify how it appears.

<figure>
  <img src="/media/marketing/campaign/campaign-activity-single-touch-test mail.png" alt="Single touch test mail" />
  <figcaption>Sending a test mail</figcaption>
</figure>

5. **Choose recipients**:
   - Send to the entire group or select specific leads.
   - Add segments with **Add Segment**.
   - Import leads using a CSV file if needed.

<figure>
  <img src="/media/marketing/campaign/campaign-activity-single-touch-segment.png" alt="Audience selection" />
  <figcaption>Audience selection</figcaption>
</figure>

<figure>
  <img src="/media/marketing/campaign/campaign-activity-single-touch-upload-campaign-list.png" alt="Upload leads CSV" />
  <figcaption>Upload leads (CSV)</figcaption>
</figure>

6. **Schedule the send** (optional):
   - Set a date and time for sending.

<figure>
  <img src="/media/marketing/campaign/campaign-activity-single-touch-send email.png" alt="Schedule send" />
  <figcaption>Scheduling a campaign</figcaption>
</figure>

7. **Confirm send**:  
   After sending, a confirmation modal appears with navigation options back to **Campaign List** or **Outgoing Campaigns**.

<figure>
  <img src="/media/marketing/campaign/campaign-activity-execution-success.png" alt="Send success modal" />
  <figcaption>Confirmation after send</figcaption>
</figure>

---

## 🔀 Execute a Multi Touch Campaign

1. **Click Execute** to open the Builder canvas.

<figure>
  <img src="/media/marketing/campaign/campaign-activity-multi-touch-execution.png" alt="Multi touch execute canvas" />
  <figcaption>Execute on Builder canvas</figcaption>
</figure>

2. **Configure workflow blocks**:

   - Add or edit action blocks.
   - Validate the workflow.

3. Use available options:

   - **Back** — return to Campaign Preview
   - **Update & Close** — save changes and exit
   - **Update & Next** — proceed to Preview

4. **Test each email**:
   - Enter a test recipient address.
   - Send test mails to confirm content.

<figure>
  <img src="/media/marketing/campaign/campaign-activity-multi-touch-test mail.png" alt="Multi touch preview and test mail" />
  <figcaption>Preview and Test Mail</figcaption>
</figure>

5. **Preview stage**:
   - A carousel displays all emails in the workflow.
   - Emails that pass test verification are marked as verified.

<figure>
  <img src="/media/marketing/campaign/campaign-activity-multi-touch-email verifed.png" alt="Multi touch carousel verified" />
  <figcaption>Carousel of verified emails</figcaption>
</figure>

6. **Select recipients**:
   - Send to the entire group or select leads.
   - Import CSV files if required.

<figure>
  <img src="/media/marketing/campaign/campaign-activity-multi-touch-segment.png" alt="Multi touch select audience" />
  <figcaption>Selecting recipients</figcaption>
</figure>

7. **Confirm send**:  
   After execution, a confirmation modal appears with navigation links.

<figure>
  <img src="/media/marketing/campaign/campaign-activity-execution-success.png" alt="Multi touch send success" />
  <figcaption>Send success confirmation</figcaption>
</figure>

---

## 📌 Quick Reference: Activity Management

- **View** — Activity tab inside Campaign
- **Add** — Click **Add Activity**
- **Edit / Clone / Delete** — Use the icons or top actions
- **Preview** — Eye icon
- **Execute** — Execute button per activity

<figure>
  <img src="/media/marketing/campaign/campaign-activity-quick action.png" alt="Activity tab" />
  <figcaption>Activity tab inside Campaign</figcaption>
</figure>
