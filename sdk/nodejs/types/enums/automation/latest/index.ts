// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***


export const ContentSourceType = {
    EmbeddedContent: "embeddedContent",
    Uri: "uri",
} as const;

/**
 * Gets or sets the content source type.
 */
export type ContentSourceType = (typeof ContentSourceType)[keyof typeof ContentSourceType];

export const RunbookTypeEnum = {
    Script: "Script",
    Graph: "Graph",
    PowerShellWorkflow: "PowerShellWorkflow",
    PowerShell: "PowerShell",
    GraphPowerShellWorkflow: "GraphPowerShellWorkflow",
    GraphPowerShell: "GraphPowerShell",
} as const;

/**
 * Gets or sets the type of the runbook.
 */
export type RunbookTypeEnum = (typeof RunbookTypeEnum)[keyof typeof RunbookTypeEnum];

export const ScheduleDay = {
    Monday: "Monday",
    Tuesday: "Tuesday",
    Wednesday: "Wednesday",
    Thursday: "Thursday",
    Friday: "Friday",
    Saturday: "Saturday",
    Sunday: "Sunday",
} as const;

/**
 * Day of the occurrence. Must be one of monday, tuesday, wednesday, thursday, friday, saturday, sunday.
 */
export type ScheduleDay = (typeof ScheduleDay)[keyof typeof ScheduleDay];

export const ScheduleFrequency = {
    OneTime: "OneTime",
    Day: "Day",
    Hour: "Hour",
    Week: "Week",
    Month: "Month",
    /**
     * The minimum allowed interval for Minute schedules is 15 minutes.
     */
    Minute: "Minute",
} as const;

/**
 * Gets or sets the frequency of the schedule.
 */
export type ScheduleFrequency = (typeof ScheduleFrequency)[keyof typeof ScheduleFrequency];

export const SkuNameEnum = {
    Free: "Free",
    Basic: "Basic",
} as const;

/**
 * Gets or sets the SKU name of the account.
 */
export type SkuNameEnum = (typeof SkuNameEnum)[keyof typeof SkuNameEnum];
