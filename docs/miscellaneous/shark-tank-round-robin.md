# Shark Tank & Round Robin Management

The **C360 Partner Leads Management** module provides two flexible ways of distributing leads:

- **Shark Tank** → Multiple users can claim leads, with admins reviewing claim requests.
- **Round Robin** → Leads are distributed fairly among partners in rotation.

Both methods help ensure **efficient, transparent, and fair lead allocation**.

---

## 🦈 Shark Tank Management

The **Shark Tank** strategy distributes leads to a group of partners or users, who can then **claim ownership** of available leads. Admins control approvals to maintain accountability.

### Assign Leads in Shark Tank

1. Navigate to the **Leads List** in the **C360 Sales** module.
2. Select the leads you want to assign.
3. Click **Assign To**.
4. In the dropdown, choose **Shark Tank**.
5. Select the users or partners who should be eligible to claim leads.

<figure>
  <img src="/media/shark-tank/assign-leads.png" alt="Assign leads in Shark Tank" />
  <figcaption>Assigning leads to Shark Tank</figcaption>
</figure>

Once leads are assigned:

- **For users:**
  - A **Claim Lead** option appears in **Lead Alerts**.
  - Clicking **View** opens the **Claim Leads** table.
  - Users can select leads and click **Claim** to request ownership.
  - A notification is sent once the admin approves or rejects the claim.

<figure>
  <img src="/media/shark-tank/claim-leads-table.png" alt="Claim Leads Table" />
  <figcaption>Claim Leads data table for users</figcaption>
</figure>

<figure>
  <img src="/media/shark-tank/claim-lead-action.png" alt="User claiming a lead" />
  <figcaption>User claiming a lead</figcaption>
</figure>

- **For admins:**
  - A **Claim Review Request** notification appears in **Lead Alerts**.
  - Clicking **View** shows all pending claim requests.
  - Admin can **Approve** (grant ownership) or **Reject** (deny request).
  - Claiming users are notified of the outcome via email.

:::tip
Use the **Claim Review Request** table to efficiently manage and process multiple claims at once.
:::

<figure>
  <img src="/media/shark-tank/claim-review-requests.png" alt="Claim Review Request Table" />
  <figcaption>Admin reviewing pending lead claim requests</figcaption>
</figure>

<figure>
  <img src="/media/shark-tank/claim-review-actions.png" alt="Admin claim approval/rejection" />
  <figcaption>Admin approving or rejecting lead claim requests</figcaption>
</figure>

---

## 🔄 Round Robin Management

The **Round Robin** strategy distributes leads **equally and fairly** across selected users or partners in a rotational order.

This ensures:

- Balanced workloads
- Fair opportunity for every partner
- Transparent tracking of lead allocation

### Assign Leads in Round Robin

1. Open the **Leads List** in the **C360 Partner Leads Management** module.
2. Select the leads to assign.
3. Click **Assign To**.
4. In the dropdown, select **Round Robin**.
5. Choose the users or partners to assign.
   - Drag and reorder them to set the distribution sequence.
   - If the Round Robin duration expires, leads move to the **next user in rotation**.

<figure>
  <img src="/media/round-robin/assign-leads.png" alt="Assign leads in Round Robin" />
  <figcaption>Assigning leads using Round Robin</figcaption>
</figure>

6. Once assigned:
   - The lead status updates to **Round Robin in Progress**.
   - After a user accepts the lead, it changes to **Assigned**.

<figure>
  <img src="/media/round-robin/round-robin-status.png" alt="Round Robin lead status" />
  <figcaption>Status updates after Round Robin assignment</figcaption>
</figure>

- **For users:**
  - They receive an **email notification**.
  - Leads appear in **Lead Alerts**.
  - Users can either **Accept** or **Reject** leads.

<figure>
  <img src="/media/round-robin/lead-alerts.png" alt="Round Robin Lead Alerts" />
  <figcaption>Lead alerts for Round Robin users</figcaption>
</figure>

- **Accept** → Lead is assigned to the user.
- **Reject** → System reassigns the lead and updates notifications accordingly.

---

## ⚙️ Additional Configuration

Both **Shark Tank** and **Round Robin** strategies support:

- **Duration**: Time limit before reassignment occurs.
- **Remaining Time**: Monitor pending time for lead claims.

These settings are managed in:  
**System Configuration → Lead Assign**.

---

:::info Summary

- **Shark Tank** → Competitive claim-based allocation (admin approval required).
- **Round Robin** → Equal rotation-based allocation (automatic assignment).  
  :::
