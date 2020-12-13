// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***


export const AlertRuleState = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * The alert rule state.
 */
export type AlertRuleState = (typeof AlertRuleState)[keyof typeof AlertRuleState];

export const Severity = {
    Sev0: "Sev0",
    Sev1: "Sev1",
    Sev2: "Sev2",
    Sev3: "Sev3",
    Sev4: "Sev4",
} as const;

/**
 * The alert rule severity.
 */
export type Severity = (typeof Severity)[keyof typeof Severity];
