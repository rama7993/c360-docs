import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# **📝Form Builder**

The **Form Builder** in **C360** allows you to design, manage, and assign forms that can be integrated with campaigns, landing pages, and lead management.

To access it:  
➡️ Go to **Co-Marketing** → **Campaign Components** → **Form Builder** from the left-hand menu.

---
## 🗂️ Form Builder Views
- The Forms list provides a complete overview of all created forms.
- Form Builder can be viewed in **Grid View** or **List View**.

<Tabs>

  <TabItem value="grid" label="🔲 Grid View" default>

  - **Grid View** – Shows each form as a card with quick actions **edit**.

  :::tip
   - Hovering on **"i"** icon you can see the Description .
   :::

  <figure>
    <img src="/media/marketing/component/form builder/form-grid.png" style={{width:"100%", maxWidth:"650px"}} />
    <figcaption> Grid View of Form Builder</figcaption>
  </figure>

  </TabItem>

  <TabItem value="list" label="📜 List View">

  - **List View** – Shows Forms in a table with columns like **Name, Status, Created By,Modified By, Preview and Edit**.

  <figure>
    <img src="/media/marketing/component/form builder/form-list.png" style={{width:"100%", maxWidth:"650px"}} />
    <figcaption> List View of Form Builder</figcaption>
  </figure>

  </TabItem>
  
</Tabs>


---

## 🔍Searching for a Form

- Enter a keyword or form name in the **Search bar**.
- Matching results will appear instantly.

<figure>
  <img src="/media/marketing/component/form builder/form-search.png" alt="Form Search Example" />
  <figcaption> Searching for Forms in the List</figcaption>
</figure>

---

## 🎛️Filtering Forms

You can filter Forms by:  
- **Status**   
- **Category**   
- **Created At**   
- **Modified At**
- **All/ My Form / Form Assigned To Me**  

:::note
 - All: Created By me/Assigned to me/Created By below users.
 - My Form: Created By me
 - Form Assigned To Me: The form which was assiged to me by someone.
:::

<figure>
  <img src="/media/marketing/component/form builder/form-filter.png" style={{width:"100%", maxWidth:"650px"}} />
  <figcaption>Filtering forms</figcaption>
</figure>

---

## ✏️Add / Edit a Form

### ⚙️Details Tab

- **Name** – Enter the form title.
- **Successful Submit Action** – Define what happens after submission.
- **Redirect URL** – Page where users are redirected post-submission.
- **Category** – Assign a form category.
- **Status** – Draft / Published.
- **Contact Us** – Enable/Disable toggle.
- **Description** – Provide extra information.

<figure>
  <img src="/media/marketing/component/form builder/form-add.png" alt="Form Details Tab" />
  <figcaption> Form Details Configuration</figcaption>
</figure>

---

### 🧩Fields Tab

- Add and manage different field types: **Text, Select, Date**.
- Fields are categorized as **General Fields** and **Lead Fields with Validation** .
- Options include:
- **Label** – Display text for the field.
- **Default Value** – Pre-filled data.
- **Placeholder** – Example text.
- For **Lead Fields**, select predefined fields and add validations.

##### Text

- **Text Field** is an input field To collect short or medium-length responses from users (names, email addresses, job titles, etc.).

<figure>
  <img src="/media/marketing/component/form builder/form-field-text.png" alt="Lead Field Validation" />
  <figcaption> Configuring Lead Fields and Validations</figcaption>
</figure>

#### Select Field

- **Select Field**  a dropdown to provide a controlled list of options for consistency.
- For **Select fields**, define **Label & Value** for dropdown options.

<figure>
  <img src="/media/marketing/component/form builder/form-field-select.png" alt="Dropdown Field Example" />
  <figcaption> Adding Dropdown Options in a Form</figcaption>
</figure>

- ↔ Fields can be **dragged and reordered**.

<figure>
  <img src="/media/marketing/component/form builder/form-field-reorder.png" alt="Drag and Drop Fields" />
  <figcaption>↔ Reordering Fields with Drag and Drop</figcaption>
</figure>

#### Date

- **Date Field** is an input type that allows users to capture a specific date (and optionally time) in a consistent format.

<figure>
  <img src="/media/marketing/component/form builder/form-field-date.png" alt="Date Fields" />
  <figcaption>↔ Date Field</figcaption>
</figure>

---

### ⚡Actions Tab

Define automated actions that trigger after form submission.

1. 📊 **Modify Campaign Segments** – Add or remove contacts from segments.

   <figure>
     <img src="/media/marketing/component/form builder/form-action-modify campaign segment.png" alt="Modify Campaign Segments" />
     <figcaption> Form Action – Modify Campaign Segments</figcaption>
   </figure>

2. 📂 **Download an Asset** – Provide downloadable content upon form submission.

   <figure>
     <img src="/media/marketing/component/form builder/form-action-download asset.png" alt="Download Asset Action" />
     <figcaption> Form Action – Download Asset</figcaption>
   </figure>

3. 📧 **Send Email to Lead**

   <figure>
     <img src="/media/marketing/component/form builder/form-action-send email to lead.png" />
     <figcaption> Form Action – Send Email to Lead</figcaption>
   </figure>

4. 👤 **Send Email to User**

   <figure>
     <img src="/media/marketing/component/form builder/form-action-send email to user.png" alt="Send Email to User" />
     <figcaption> Form Action – Send Email to User</figcaption>
   </figure>

5. 📤 **Send Form Results** – Send form responses via email with options for **To, CC, BCC, Send to Owner, Send to Contact.**

   <figure>
     <img src="/media/marketing/component/form builder/form-action-send form result.png" alt="Send Form Results Action" />
     <figcaption> Form Action – Send Form Results via Email</figcaption>
   </figure>

- To **edit** or **delete** individual fields/actions, use the icons beside each item.
- Always click **Update** after changes.

<figure>
  <img src="/media/marketing/component/form builder/form-action-edit & delete.png" alt="Edit Form Actions" />
  <figcaption> Editing or Deleting Form Actions</figcaption>
</figure>

---

## 👥Assigning a Form to a Group

- On the Forms list page, select one or more forms.
- Click **Assign To** at the top.
- Choose a group from the dropdown.
- Assigned forms will be linked to that group.

<figure>
  <img src="/media/marketing/component/form builder/form-assign.png" alt="Assign Forms to Group" />
  <figcaption> Assigning a Form to a Group</figcaption>
</figure>

---

## 🗑️ Deleting Form

1. Select the checkbox(es) for the Form you want to delete.
2. Click the **Delete** icon .
3. Click on **Yes** from the confirmation pop up if you want to delete.

<figure>
  <img src="/media/marketing/component/form builder/form-delete.png" style={{width:"100%", maxWidth:"650px"}} />
  <figcaption>Delete selected form</figcaption>
</figure>

---

## 🌐Form Integration with Landing Page

- Go to **Landing Page** under Campaign Components.
- Edit the landing page and click on a text element.
- Select the form from the dropdown to embed it.
- To preview, click the **Eye icon**.

<figure>
  <img src="/media/marketing/component/form builder/form-track.png" alt="Embed Form in Landing Page" />
  <figcaption>Adding Forms into a Landing Page</figcaption>
</figure>

<figure>
  <img src="/media/marketing/component/form builder/form-preview.png" alt="Preview Form in Landing Page" />
  <figcaption>Previewing a Form on the Landing Page</figcaption>
</figure>
