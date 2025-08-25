---
id: lead
title: Lead Management
sidebar_label: Lead
slug: /crm/lead
---

# Lead Management

The **Lead Management** module in C360 helps you track and manage potential customers from first contact until conversion.  
Navigate to **Sales → Leads** in the sidebar to access these functions.

---

## 📋 Viewing Leads

The lead list provides an overview of all existing leads.  
It includes columns such as:

| Column            | Description                                |
| ----------------- | ------------------------------------------ |
| **Action**        | Inline editing, conversion, delete options |
| **Name**          | Lead’s name                                |
| **Company**       | Associated company                         |
| **Phone**         | Contact number                             |
| **Title**         | Job title                                  |
| **Email**         | Email address                              |
| **Industry**      | Industry type                              |
| **Status**        | Current status                             |
| **Lead Rating**   | Quality indicator                          |
| **Lead Stage**    | Stage in the funnel                        |
| **Lead Score**    | Potential value                            |
| **Last Activity** | Most recent interaction                    |

:::tip
You can **sort** columns ascending/descending and **expand to fullscreen** using the maximize button beside the search bar.
:::

<figure>
  <img src="/media/crm/lead/lead-list.png" alt="Lead list with sortable columns and actions" />
  <figcaption>Lead list view</figcaption>
</figure>

---

## 🔍 Searching for Leads

- Enter keywords in fields like _Title, Name, Email, Phone, Company Phone_.
- Click the **Search icon** or press **Enter** to find matching results.

<figure>
  <img src="/media/crm/lead/lead-search.png" alt="Search bar and filters for leads" />
  <figcaption>Search leads</figcaption>
</figure>

---

## 🎯 Filtering Leads

You can filter by:

- Lead Source
- Lead Status
- Lead Stage
- Call Outcome
- Campaign
- Country
- Modified Date
- Industry

:::note
Use the **Active / Archived** toggle to include archived leads.  
You can also filter by **Owned by Me** vs **Assigned to Me**.
:::

<figure>
  <img src="/media/crm/lead/lead-filter.png" alt="Filter panel with multiple criteria and applied chips" />
  <figcaption>Filter leads</figcaption>
</figure>

---

## ⬇️ Downloading Leads

1. Select the checkbox(es) for the desired leads.
2. Click the **Download** icon to export them as a spreadsheet.

<figure>
  <img src="/media/crm/lead/lead-download.png" alt="Download action for selected leads" />
  <figcaption>Download selected leads</figcaption>
</figure>

---

## 👁️ Viewing Lead Details

Click a lead’s name to open the **Lead Detail** page. From here you can:

- Edit lead info
- Convert into a **Contact** (and optionally an **Opportunity**)
- Change the **Owner**
- Assign to a **User or Group**
- View related **Notes, Tasks, Activities**

<figure>
  <img src="/media/crm/lead/lead-detail.png" alt="Lead details with info, notes, tasks and activities" />
  <figcaption>Lead details</figcaption>
</figure>

---

## 🔄 Converting Leads

When a lead is qualified:

1. Click **Convert to Contact**.
2. Review or edit prefilled details.
3. Choose to:
   - Create a **New Contact**
   - Link to an **Existing Contact**
   - Optionally create an **Opportunity**

:::caution
If you don’t select an opportunity, the conversion will only create the contact.
:::

<figure>
  <img src="/media/crm/lead/lead-convert.png" alt="Convert lead to contact and optionally create opportunity" />
  <figcaption>Convert Lead</figcaption>
</figure>

---

## 👤 Assigning or Changing Owner

- Select a lead → Click **Assign To** → Choose a user → **Assign**.
- Select a lead → Click **Change Owner** → Choose a user → **Change Owner**.

:::info
Round Robin & Shark Tank assignments are covered separately in **Shark Tank & Round Robin** docs.
:::

<figure>
  <img src="/media/crm/lead/lead-assign.png" alt="Assign lead to user or change owner" />
  <figcaption>Assign / Change Owner</figcaption>
</figure>

---

## ✏️ Add / Edit Leads

- **Add** → Click **Add Lead** → Fill mandatory fields (marked `*`) → **Save**.
- **Edit** → Click the **pencil** (inline) or open details → **Edit** → **Save**.

<figure>
  <img src="/media/crm/lead/lead-add-edit.png" alt="Add or edit lead form" />
  <figcaption>Add / Edit Lead</figcaption>
</figure>

---

## 📤 Importing Leads (Excel Upload)

1. Go to **Sales → Upload List**.
2. Upload your Excel file.
   - Use **Sample File** for format guidance.
3. Map columns → Click **Next**.
4. Review summary report → Click **Import** to save.

:::tip
On the review step you can select:

- **All** records
- **Only filtered** results (e.g., by deliverability %)
- **Specific** entries
  :::

<figure>
  <img src="/media/crm/lead/lead-import-upload.png" alt="Upload leads from Excel" />
  <figcaption>Upload list</figcaption>
</figure>

<figure>
  <img src="/media/crm/lead/lead-import-map.png" alt="Map Excel columns to lead fields" />
  <figcaption>Field mapping</figcaption>
</figure>

<figure>
  <img src="/media/crm/lead/lead-import-filter.png" alt="Filter imported leads by deliverability" />
  <figcaption>Filter imported leads</figcaption>
</figure>

<figure>
  <img src="/media/crm/lead/lead-import-summary.png" alt="Summary and import confirmation" />
  <figcaption>Import summary</figcaption>
</figure>

---

## 📁 Expected image files

Copy your screenshots into `static/media/crm/lead/` with these names (or update the paths above to match your filenames):

```
lead-list.png
lead-search.png
lead-filter.png
lead-download.png
lead-detail.png
lead-convert.png
lead-assign.png
lead-add-edit.png
lead-import-upload.png
lead-import-map.png
lead-import-filter.png
lead-import-summary.png
```
