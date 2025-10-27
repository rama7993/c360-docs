import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# Account Management

The **Account Management** module in **C360 CRM** helps you track, manage, and update all sales Account in one place.

To access it:  
➡️ Go to **Sales** → **Account** from the left-hand menu.

---

## 📊 Accounts Overview

The **Account list** provides an overview of all existing Accont.

It includes columns such as:

| Column                    | Description                                                                                                 |
| ------------------------- | ----------------------------------------------------------------------------------------------------------- |
| **Action**                | Provides options for inline editing.                                                                        |
| **Name**                  | The name of the associated account.                                                                         |
| **Related Contacts**      | Displays the number of related contacts. Clicking on the count will show all associated contacts            |
| **Related Opportunities** | Displays the number of related opportunities. Clicking on the count will show all associated opportunities. |
| **Account Owner**         | The owner of the account.                                                                                   |
| **Account Type**          | Account Type refers to the category assigned to an account                                                  |
| **Phone**                 | The primary phone number associated with the account                                                        |
| **Email**                 | The primary email address associated with the account.                                                      |
| **Country**               | The country associated with the account.                                                                    |
| **Modified At**           | The last modification date of the account.                                                                  |
| **Last Contracted**       | The date of the most recent contract or agreement made with the account.                                    |
| **Costume Fields**        | A custom field is an additional field you create to store business-specific information                     |

:::tip
You can **sort** columns ascending/descending and **expand to fullscreen** using the maximize button beside the search bar.
:::

<figure>
  <img src="/media/crm/account/account-list.png" alt="Account list with sortable columns and actions" />
  <figcaption>Account list view</figcaption>
</figure>

---

## 🔍 Searching for Accounts

- Enter keywords in fields like _Title, Name, Email, Phone, Company Phone_.
- Click the **Search icon** or press **Enter** to find matching results.

<figure>
  <img src="/media/crm/account/account-search.png" alt="Search bar  for  Account" />
  <figcaption>Search Account</figcaption>
</figure>
---

## 🎛️ Filtering Accounts

You can filter by:
<details>
<summary>Click to view available filters</summary>
- Account Owner
- Account Type
- Industry Type
- Countries
- Costume Field One
- Costume Field Two
- Costume Field Three
- Costume Field Four
- Costume Field Five
</details>
Other filter options include:

- Viewing **Active** or **Archived** Accounts using the toggle switch.
- **All Accounts/ My Accounts / Accounts Assigned To Me**  

:::note
 - All Accounts: Created By me/Assigned to me/Created By below users.
 - My Accounts: Created By me
 - Accounts Assigned To Me: The Accounts which was assiged to me by someone.
:::

<figure>
  <img src="/media/crm/account/account-filter.png" alt="Filter panel with multiple criteria and applied chips" />
  <figcaption>Filter Account</figcaption>
</figure>

---


## 🗑️ Deleting Accounts

1. Select the checkbox(es) beside the Account you want to delete.
2. Click the **Delete** icon .
3. Click on **Yes** from the confirmation pop up if you want to delete.

<figure>
  <img src="/media/crm/account/account-delete.png" alt="Delete action for selected account" />
  <figcaption>Delete selected accounts</figcaption>
</figure>

---

## ⬇️ Downloading Accounts

1. Select the checkbox(es) for the desired leads.
2. Click the **Download** icon to export them as a spreadsheet.

<figure>
  <img src="/media/crm/account/account-filter.png" alt="Download action for selected accounts" />
  <figcaption>Download Selected Account</figcaption>
</figure>

---

## 👁️ Viewing Account Details

Click a Account's name to open the **Account Detail** page. From here you can:

- Edit Account info
- Change the **Owner**
- Assign to a **User or Group**
- View related **Activities**

The Account Information section shows important details about an account, such as:

- Account type

- Contact information

- Website address

- Number of employees

- Annual revenue

- Industry

- Address

<figure>
  <img src="/media/crm/account/account-details.png" alt="Details about an account" />
  <figcaption> Account Details</figcaption>
</figure>

You can view more information about an account—such as associated contacts and opportunities—by expanding the respective sections (accordions).

<figure>
  <img src="/media/crm/account/account-related contact.png" alt="Contacts related to an individual accounts" />
  <figcaption> Related Contact</figcaption>
</figure>

<figure>
  <img src="/media/crm/account/account-related opportunity.png" alt="Opportunities related to an individual accounts" />
  <figcaption>Related Opportunity </figcaption>
</figure>

---

## 👥 Assigning / Changing Account Owner

<Tabs>
<TabItem value="Assign" label="Assign Account">

1. Select Accounts from the list.
2. Click **Assign To** → choose a user → click **Assign**.

<figure>
  <img src="/media/crm/account/account-assign.png" alt="Assign accounts" />
  <figcaption>Assign account to a user</figcaption>
</figure>

</TabItem>

<TabItem value="Change" label="Change Owner">

1. Select Accounts from the list .
2. Click **Change Owner** → select user → click **Confirm**.

<figure>
  <img src="/media/crm/account/account-change owner.png" alt="Change owner" />
  <figcaption>Change account owner</figcaption>
</figure>

</TabItem>
</Tabs>

---

## ✏️ Add / Edit Accounts

- **Add** → Click **Add Accounts** → Fill mandatory fields (marked `*`) → **Save**.
- **Edit** → Click the **pencil** (inline) or open details → **Edit** → **Save**.

:::info
  Account can be generated or Added  using three ways:
  1. Normal Addition from list Page.
  2. Via Import Account.
  3. During Lead Convertion(if new).
    :::

<figure>
  <img src="/media/crm/account/account-add.png" alt="Add/Edit an account" />
  <figcaption>Add/Edit an Account</figcaption>
</figure>

---

## 📤 Importing Accounts (Excel Upload)

1. Go to **Sales → Upload List**.
2. Select **Contact and Accounts**.
3. Upload your Excel file.
   - Use **Sample File** for format guidance.
4. Map columns → Click **Next**.
5. Review summary report → Click **Import** to save.

:::tip
On the review step you can select:

- **All** records
- **Only filtered** results (e.g., by deliverability %)
- **Specific** entries
  :::

  <figure>
  <img src="/media/crm/account/account-contact-choose data.png" alt="Upload account from Excel" />
  <figcaption>Choose Data</figcaption>
</figure>

<figure>
  <img src="/media/crm/account/account-contact-map field.png" alt="Map Excel columns to account fields" />
  <figcaption>Field mapping</figcaption>
</figure>

<figure>
  <img src="/media/crm/account/account-contact-confirm & import.png" alt="Summary and import confirmation" />
  <figcaption>Confirm & Import</figcaption>
</figure>

  ***
