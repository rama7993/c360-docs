import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 🧲 **Lead**

To access **Lead**:  
➡️ Go to **Settings** → **System Configuration** → **Lead** from the Top Bar.

---

## 📊 Lead Score

:::note
Lead scoring ranks potential customers based on their engagement and interest, helping sales teams prioritize the most promising leads.  
:::

<details>
<summary><strong>**Click to view Formula for Total Lead Score (TLS):**</strong></summary>
<p>
TLS = (MRS × MRW) + (LSS × LSW) + (LStS × LStW)

Where:

- **MRS** – Marketing Response Score
- **MRW** – Marketing Response Weightage
- **LSS** – Lead Status Score
- **LSW** – Lead Status Weightage
- **LStS** – Lead Stage Score
- **LStW** – Lead Stage Weightage
</p>
</details>

---

#### 🟢 **1. Lead Status**

Represents the current state of a lead in the sales process. Each status reflects how engaged or interested a lead is.

➡️ You can **add, delete, or modify** lead statuses as needed, and update their scores.

<figure>
  <img src="/media/image15.png" alt="Lead Status Configuration" />
  <figcaption>Lead Status Configuration</figcaption>
</figure>

---

#### 🟣 **2. Lead Stage**

Shows where a lead is in the buyer journey — from acquisition by marketing to qualification and handoff to sales.

➡️ Update scores, assign **color indicators**, and save changes.  
➡️ Color indicators are reflected in the **Lead List table**.

<figure>
  <img src="/media/image2b.png" alt="Lead Stage Configuration" />
  <figcaption>Lead Stage with Color Indicators</figcaption>
</figure>

---

#### 📧 **3. Marketing Response**

Measures how engaged a lead is with marketing activities.  
You can manage and update scores for activities such as:

- Asset Download
- Contact Us Form Submission
- Dynamic Form Submission
- Email Bounced
- Email Link Clicked
- Email Marked Spam
- Email Opened
- Landing Page Visits
- Unsubscribe Link Clicked
- View in Browser Clicked

➡️ Updated scores are reflected in the **Lead Score column** of the leads data table.

<figure>
  <img src="/media/image17.png" alt="Marketing Response Lead Scoring" />
  <figcaption>Marketing Response Lead Scoring</figcaption>
</figure>

---

#### ⚖️ 4. Weight Allocation

Adjust the weightage of each scoring factor as required. Update the percentage values and save changes.

- Marketing Response Weightage (MRW)
- Lead Status Weightage (LSW)
- Lead Stage Weightage (LStW)

<figure>
  <img src="/media/image18.png" alt="Lead Score Weight Allocation" />
  <figcaption>Weight Allocation for Lead Scoring</figcaption>
</figure>

---

#### 🧮 5. Lead Score

View the **Total Lead Score (TLS)** dynamically based on selected Lead Status, Lead Stage, and Marketing Response.

$$
TLS = (MRS \times MRW) + (LSS \times LSW) + (LStS \times LStW)
$$

<figure>
  <img src="/media/image19.png" alt="Lead Score Calculation" />
  <figcaption>Total Lead Score (TLS) Calculation</figcaption>
</figure>

---

## 👥 Lead Assign

The **Lead Assign** section contains two modes:

<Tabs>
  <TabItem value="shark-tank" label="🦈 Shark Tank" default>
    <ul>
      <li>Shark Tank Max Leads Assign 📌</li>
      <li>Shark Tank Duration ⏱️</li>
      <li>Shark Tank Reminder 🔔</li>
    </ul>
    <figure>
      <img src="/media/image20.png" alt="Shark Tank Lead Assignment" />
      <figcaption>Shark Tank Lead Assignment</figcaption>
    </figure>
  </TabItem>

  <TabItem value="round-robin" label="🔄 Round Robin">
    <ul>
      <li>Round Robin Duration ⏱️</li>
      <li>Round Robin Reminder 🔔</li>
    </ul>
    <figure>
      <img src="/media/image21.png" alt="Round Robin Lead Assignment" />
      <figcaption>Round Robin Lead Assignment</figcaption>
    </figure>
  </TabItem>
</Tabs>

:::tip
➡️ After entering values, click **Update** to save and apply the changes.
:::

---

## 🟢 Lead Status

:::note
Defines the current state of a lead or customer interaction in the sales process.  
:::

<details>
<summary><strong>**Fields:**</strong></summary> 
<p>
- **Name** – Title of the lead status  
- **Score** – Numeric value indicating priority/quality  
- **Colour** – Visual indicator for quick identification  
- **Description** – Explanation of the status meaning  
- **Active/Archive (Toggle)** – Mark as active or archive  
</p>
</details>

**Actions:**

<Tabs>
  <TabItem value="save" label="💾 Save" default>
    <p>Click <strong>Save</strong> to store the entry after filling in all details.</p>
  </TabItem>

  <TabItem value="delete" label="🗑️ Delete">
    <p>Click the <strong>Delete</strong> remove a saved entry.</p>
  </TabItem>
</Tabs>

<figure>
  <img src="/media/image22.png" alt="Lead Status Management" />
  <figcaption>Lead Status Management</figcaption>
</figure>

---

## 🏭 Lead Industry

:::note
Represents the industry in which the lead’s company operates.  
:::

<details>
<summary><strong>**Fields:**</strong></summary> 
<p> 
- **Name** – Industry label  
</p>
</details>

**Actions:**

<Tabs>
  <TabItem value="save" label="💾 Save" default>
    <p>Click <strong>Save</strong> to store the entry after filling in all details.</p>
  </TabItem>

  <TabItem value="delete" label="🗑️ Delete">
    <p>Click the <strong>Delete</strong> remove a saved entry.</p>
  </TabItem>
</Tabs>

<figure>
  <img src="/media/image23.png" alt="Lead Industry Configuration" />
  <figcaption>Lead Industry Setup</figcaption>
</figure>

---

## 🌐 Lead Source

:::note
Identifies how a lead was acquired (e.g., marketing campaign, referral, online inquiry).  
:::

<details>
<summary><strong>**Fields:** </strong></summary> 
<p>
- **Name** – Source label  
</p>
</details>

**Actions:**

<Tabs>
  <TabItem value="save" label="💾 Save" default>
    <p>Click <strong>Save</strong> to store the entry after filling in all details.</p>
  </TabItem>

  <TabItem value="delete" label="🗑️ Delete">
    <p>Click the <strong>Delete</strong> remove a saved entry.</p>
  </TabItem>
</Tabs>

<figure>
  <img src="/media/image24.png" alt="Lead Source Configuration" />
  <figcaption>Lead Source Setup</figcaption>
</figure>

---

## 📞 Lead Call Outcome

:::note
Represents the result of a call made during sales or customer interactions.  
:::

<details>
<summary><strong>**Fields:**</strong></summary>  
<p>
- **Name** – Call outcome label  
- **Colour** – Visual indicator for quick identification  
- **Description** – Explanation of the outcome  
</p>
</details>

**Actions:**

<Tabs>
  <TabItem value="save" label="💾 Save" default>
    <p>Click <strong>Save</strong> to store the entry after filling in all details.</p>
  </TabItem>

  <TabItem value="delete" label="🗑️ Delete">
    <p>Click the <strong>Delete</strong> remove a saved entry.</p>
  </TabItem>
</Tabs>

<figure>
  <img src="/media/image2c.png" alt="Lead Call Outcome Configuration" />
  <figcaption>Lead Call Outcome Setup</figcaption>
</figure>
