import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    { type: "doc", id: "intro", label: "Introduction" },

    {
      type: "category",
      label: "Getting Started",
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "getting-started/launch-guide",
          label: "Launch Guide",
        },
        {
          type: "doc",
          id: "getting-started/home-dashboard",
          label: "Home Dashboard",
        },
        {
          type: "doc",
          id: "getting-started/user-profile",
          label: "User Profile",
        },
      ],
    },

    {
      type: "category",
      label: "Sales",
      collapsed: true,
      items: [
        { type: "doc", id: "sales/lead", label: "Lead" },
        { type: "doc", id: "sales/account", label: "Account" },
        { type: "doc", id: "sales/contact", label: "Contact" },
        { type: "doc", id: "sales/opportunity", label: "Opportunity" },
        { type: "doc", id: "sales/script-wizard", label: "Script Wizard" },
        {
          type: "doc",
          id: "sales/shark-tank-round-robin",
          label: "Shark Tank & Round Robin",
        },
      ],
    },

    {
      type: "category",
      label: "Marketing",
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "marketing/campaign-audience",
          label: "Audience",
        },
        { type: "doc", id: "marketing/campaign", label: "Campaign" },
        {
          type: "doc",
          id: "marketing/email-template",
          label: "Email Template",
        },
        {
          type: "category",
          label: "Social",
          collapsed: true,
          items: [
            {
              type: "doc",
              id: "marketing/social/social-monitoring",
              label: "Social Monitoring",
            },
            {
              type: "doc",
              id: "marketing/social/media-library",
              label: "Media Library",
            },
          ],
        },
        {
          type: "category",
          label: "Components",
          collapsed: true,
          items: [
            { type: "doc", id: "marketing/components/asset", label: "Asset" },
            {
              type: "doc",
              id: "marketing/components/landing-page",
              label: "Landing Page",
            },
            {
              type: "doc",
              id: "marketing/components/form-builder",
              label: "Form Builder",
            },
          ],
        },
      ],
    },

    {
      type: "category",
      label: "Analytics",
      collapsed: true,
      items: [
        {
          type: "category",
          label: "Insights",
          collapsed: true,
          items: [
            {
              type: "doc",
              id: "analytics/sales-dashboard",
              label: "Sales Dashboard",
            },
            {
              type: "doc",
              id: "analytics/marketing-dashboard",
              label: "Marketing Dashboard",
            },
            {
              type: "doc",
              id: "analytics/platform-usage",
              label: "Platform Usage",
            },
          ],
        },
        {
          type: "category",
          label: "Reports",
          collapsed: true,
          items: [
            {
              type: "doc",
              id: "analytics/sales-report",
              label: "Sales Report",
            },
            {
              type: "doc",
              id: "analytics/marketing-report",
              label: "Marketing Report",
            },
          ],
        },
      ],
    },

    {
      type: "category",
      label: "Core Tools",
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "core-tools/activity-insights",
          label: "Activity Insights",
        },
        { type: "doc", id: "core-tools/videos", label: "Videos" },
        { type: "doc", id: "core-tools/notes", label: "Notes" },
        { type: "doc", id: "core-tools/tasks", label: "Tasks" },
        { type: "doc", id: "core-tools/lead-alerts", label: "Lead Alerts" },
      ],
    },

    {
      type: "category",
      label: "Settings",
      collapsed: true,
      items: [
        {
          type: "category",
          label: "User Management",
          items: [
            { type: "doc", id: "settings/user", label: "User" },
            { type: "doc", id: "settings/group", label: "Group" },
          ],
        },
        {
          type: "doc",
          id: "settings/notification-content",
          label: "Notification Content",
        },

        {
          type: "doc",
          id: "settings/lead",
          label: "Lead Configuration",
        },
        {
          type: "doc",
          id: "settings/opportunities",
          label: "Opportunities Configuration",
        },
        {
          type: "doc",
          id: "settings/account-type",
          label: "Account Type",
        },
        { type: "doc", id: "settings/category", label: "Category" },
        {
          type: "doc",
          id: "settings/campaign-attributes",
          label: "Campaign Attributes",
        },
        {
          type: "doc",
          id: "settings/activity-goal",
          label: "Activity Goal",
        },
        { type: "doc", id: "settings/asset-type", label: "Asset Type" },
      ],
    },
  ],
};

export default sidebars;
