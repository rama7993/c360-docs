import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 📞 **Call Manager**

<Tabs>

<TabItem value="agent-calling-window" label= " 🕒 Agent Calling Window">

Define specific time windows during which agents are authorized to make calls.

### 📊 Agent Calling Window List Overview.

<details>
<summary>Click to view Columns Include</summary>
- **Action** → Quick edit and delete functionality.
- **Agent Name** → Full Name of the agent.
- **Time Zone** → The local time setting for a specific geographic region.
- **Calling Window** → The permitted time range during which calls can be made to contacts or leads.
- **Working Days** → The designated days when business operations or activities are performed.
- **Break** → A scheduled pause or rest period during working hours.
- **Status** → Active/Inactive.
</details>

<figure>
  <img src="/media/system-configuration/call-manager/agent-calling-window-list.png" alt="Agent Calling Window Configuration" />
  <figcaption>Agent Calling Window Setup</figcaption>
</figure>

### ⚡ Actions

<Tabs>
  <TabItem value="add agent" label="➕ Add Agent" default>
     - Click on **Add Agent** to create an agent call window.
     - Fill the required fields.
     - Click on **Save** to save the entry.

     :::info
     - Can add up to 10 Breaks.
     :::

<figure>
  <img src="/media/system-configuration/call-manager/agent-calling-window-add.png" alt="AAdd gent Calling Window Configuration" />
  <figcaption>Agent Calling Window Setup</figcaption>
</figure>

  </TabItem>

  <TabItem value="edit agent" label="📝 Edit Agent" default>
     - Click on **Edit Agent** to update an agent call window.
     - Make necessary changes.
     - Click on **Save** to update the agent call window.

     :::info
     - Can add up to 10 Breaks.
     :::

<figure>
  <img src="/media/system-configuration/call-manager/agent-calling-window-edit.png" alt="Update Agent Calling Window Configuration" />
  <figcaption>Edit Agent Calling Window </figcaption>
</figure>

  </TabItem>

  <TabItem value="delete" label="🗑️ Delete">
    - Click on **Delete** icon.
    - Click on **Yes** to confirm the delete process.
 
<figure>
  <img src="/media/system-configuration/call-manager/agent-calling-window-delete.png" alt="Delete Agent Calling Window Configuration" />
  <figcaption>Delete Agent Calling Window </figcaption>
</figure>

  </TabItem>

 <TabItem value="search" label="🔍 Search">
    - Focus on the search field and type the agent name to search.
    - Hit enter.

<figure>
  <img src="/media/system-configuration/call-manager/agent-calling-window-search.png" alt="Search Agent Calling Window Configuration" />
  <figcaption>Search Agent Calling Window</figcaption>
</figure>

  </TabItem>

</Tabs>

</TabItem>

<TabItem value="outcome-time" label= " ⏳ Outcome Time">

Configure the duration settings relative to call outcomes, such as validity periods or expected handling times.

<details>
 <summary><strong>📝 Fields</strong></summary>

- **Outcome** → The specific reason for the call outcome.
- **Assumed Minutes** → The time duration in minutes that is assumed by the agent for a specific outcome.
- **Last Updated By** → Name of the user who last updated the outcome time setting.
- **Date** → On which date the outcome was last updated.
- **Applies When Outcome Logged** → Defines the specific circumstances or conditions under which the outcome time setting takes effect.

</details>

### ⚡ Actions

- Reset : Resets to the default position.
- Update : Can update the **Assumed Minutes** and **Applies When Outcome Logged**

<figure>
  <img src="/media/system-configuration/call-manager/outcome-time.png" alt="Outcome Time" />
  <figcaption>Outcome Time</figcaption>
</figure>

 </TabItem>

</Tabs>
