import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 👤 Users

**Users** are individual accounts in **C360**.  
Each user is associated with a **Group**, which defines their access rights, permissions, and responsibilities within the system.

To access Users:

1. Click **Settings** in the header.
2. Navigate to **Account Settings → Users**.
   _(The Groups tab is selected by default)._

---

## 🖥️ User Views

<Tabs defaultValue="list">

<TabItem value="list" label="📋 List View">

- **Columns**: First Name, Last Name, Email, Email Verified, Assigned Group, Actions (Edit/Delete).
- **Sorting**: Click any column header to sort users.
- **Top Features**:

  - **Search bar** → Quickly locate users.
  - **Add button** → Create a new user.
  - **Toggle button** → Switch between List / Tree views
  - **Pencil Icon** → Edit and update the existing user.
  - **Trash Icon** → Remove user.
  - **Envelope Icon** → Verify user.

<figure>
  <img src="/media/account-management/user/user-list.png" alt="User List View" />
  <figcaption>User List View</figcaption>
</figure>

</TabItem>

<TabItem value="tree" label="🌳 Tree View">

- Displays users in a **hierarchical structure** (Parent → Child, if applicable).
- **Edit** → Pencil icon or Edit button in the sidebar
- **Delete** → Trash icon under Actions

<figure>
  <img src="/media/account-management/user/user-tree-view.png" alt="Tree View" />
  <figcaption>User Tree View</figcaption>
</figure>

</TabItem>

</Tabs>

---

## ➕ Add / Edit a User

<details>
<summary>Steps to Add a User</summary>

1. Click **Add User**.
2. Enter the following details:
   - **First Name**
   - **Last Name**
   - **Phone**
   - **Email**
   - **Group Assignment**
3. Provide the associated roles to the user.
4. Click **Save** to complete user creation.

<figure>
  <img src="/media/account-management/user/user-add.png" alt="Add User" />
  <figcaption>Add User</figcaption>
</figure>

</details>

<details>
<summary>Steps to Edit a User</summary>

- Click the **pencil icon** in the user list, or
- Use the **Edit button** on the user’s details page.

<figure>
  <img src="/media/account-management/user/user-edit.png" alt="Edit User" />
  <figcaption>Edit User</figcaption>
</figure>

 </details>

---

## 🔐 Assign a Role to a User

 Assign a predefined role to a user to control their access to specific modules, features, and actions within the CRM system.

 - Go to the Add/Edit User page.
 - Click on Add Role.
 - Select the role from the dropdown.
 - Save / Update the user.

<figure>
  <img src="/media/account-management/user/user-assign-role.png" alt="Assign Role" />
  <figcaption>Assign Role</figcaption>
</figure>

:::note
 
 - You can add up to 10 roles for a user.
:::
---

## 🔍 Search Users

- Enter a **name or keyword** in the search bar.
- Press **Enter** to instantly filter results.

<figure>
  <img src="/media/account-management/user/user-search.png" alt="Search User" />
  <figcaption>Searching for Users</figcaption>
</figure>

---

## 🗑️ Delete User

1. Click the **Delete** icon for the user you want to delete.
2. Click **Yes** in the confirmation pop-up if you want to delete it.

<figure>
  <img src="/media/account-management/user/user-delete.png" alt="Delete User" />
  <figcaption>Delete a User</figcaption>
</figure>

---

## 📄 View User Details

Click a user’s name to open the details sidebar.  
Here you can review:

- **Assigned Group**
- **Email Verification Status**
- **Access Permissions**

<figure>
  <img src="/media/account-management/user/user-details.png" alt="User Details" />
  <figcaption>Details of a User</figcaption>
</figure>

---

## 💡 Best Practices

:::tip
Always assign users to the **appropriate group** to ensure correct access levels and permissions.  
:::

:::warning
Deleting a user **is permanent**. Confirm before proceeding to avoid accidental data loss.  
:::
