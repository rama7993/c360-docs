

# 👤🛡️ Role

A role is a collection of permissions assigned to a user or group that defines:

- Accessible modules/features

- Allowed actions (create, view, edit, delete)

- Data visibility level (own records, team records, all records)

To access Roles:

1. Click **Settings** in the header.
2. Navigate to **Account Settings → Role**.

---

## 📋 Role List View

- **Columns**: Role Name, Description, Actions (Clone/Delete).
- **Sorting**: Click any column header to sort roles.
- **Top Features**:

  - **Search bar** → Quickly locate roles.
  - **Add button** → Create a new role.
  - **Clone Icon** → Clone an existing role.
  - **Trash Icon** → Remove a role.

<figure>
  <img src="/media/account-management/role/role-list.png" alt="Role List" />
  <figcaption>Role List</figcaption>
</figure>

---

## ➕ Add Role

 1. Click on **Add Role**.
 2. Enter the following details:
   - **Role Name**
   - **Description**
 3. Enable the access permissions for the modules and features you want to grant.
 4. Click on **Save**.

 <figure>
  <img src="/media/account-management/role/role-add.png" alt="Role Add" />
  <figcaption>Role Add</figcaption>
</figure>

---

## 📑 Clone Role
 1. Click on **Clone** icon.
 2. Make changes if needed.
 3. Click on **Save**.

 <figure>
  <img src="/media/account-management/role/role-clone.png" alt="Role Clone" />
  <figcaption>Role Clone</figcaption>
</figure>

---

## 🔍 Search Role

 1. Enter a **name or keyword** in the search bar.
 2. Press **Enter** to instantly filter results.

 <figure>
  <img src="/media/account-management/role/role-search.png" alt="Role Search" />
  <figcaption>Role Search</figcaption>
</figure>

---

## 🗑️ Delete Role

1. Click on the **Delete** icon for the role you want to delete.
2. Click on **Yes** in the confirmation pop-up if you want to delete it.

<figure>
  <img src="/media/account-management/role/role-delete.png" alt="Role Delete" />
  <figcaption>Role Delete</figcaption>
</figure>

---

## 🔄 Role Life Cycle

```mermaid
flowchart TD
    A[Role Creation] --> B[Define Role Name & Description]
    B --> C[Assign Module Access]
    C --> D[Set Permissions]
    D --> E[Define Data Access Level]
    E --> F[Assign Features/Capabilities]
    F --> G[Assign Role to Users/Groups]
    G --> H[Role Active / In Use]

    H --> I{Need Changes?}
    I -- Yes --> J[Modify Permissions / Access]
    J --> H

    I -- No --> K{Role Still Required?}
    K -- Yes --> H
    K -- No --> L[Deactivate Role]
    L --> M[Archive / Delete Role]