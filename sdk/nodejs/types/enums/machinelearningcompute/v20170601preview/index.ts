// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***


export const AgentVMSizeTypes = {
    Standard_A0: "Standard_A0",
    Standard_A1: "Standard_A1",
    Standard_A2: "Standard_A2",
    Standard_A3: "Standard_A3",
    Standard_A4: "Standard_A4",
    Standard_A5: "Standard_A5",
    Standard_A6: "Standard_A6",
    Standard_A7: "Standard_A7",
    Standard_A8: "Standard_A8",
    Standard_A9: "Standard_A9",
    Standard_A10: "Standard_A10",
    Standard_A11: "Standard_A11",
    Standard_D1: "Standard_D1",
    Standard_D2: "Standard_D2",
    Standard_D3: "Standard_D3",
    Standard_D4: "Standard_D4",
    Standard_D11: "Standard_D11",
    Standard_D12: "Standard_D12",
    Standard_D13: "Standard_D13",
    Standard_D14: "Standard_D14",
    Standard_D1_v2: "Standard_D1_v2",
    Standard_D2_v2: "Standard_D2_v2",
    Standard_D3_v2: "Standard_D3_v2",
    Standard_D4_v2: "Standard_D4_v2",
    Standard_D5_v2: "Standard_D5_v2",
    Standard_D11_v2: "Standard_D11_v2",
    Standard_D12_v2: "Standard_D12_v2",
    Standard_D13_v2: "Standard_D13_v2",
    Standard_D14_v2: "Standard_D14_v2",
    Standard_G1: "Standard_G1",
    Standard_G2: "Standard_G2",
    Standard_G3: "Standard_G3",
    Standard_G4: "Standard_G4",
    Standard_G5: "Standard_G5",
    Standard_DS1: "Standard_DS1",
    Standard_DS2: "Standard_DS2",
    Standard_DS3: "Standard_DS3",
    Standard_DS4: "Standard_DS4",
    Standard_DS11: "Standard_DS11",
    Standard_DS12: "Standard_DS12",
    Standard_DS13: "Standard_DS13",
    Standard_DS14: "Standard_DS14",
    Standard_GS1: "Standard_GS1",
    Standard_GS2: "Standard_GS2",
    Standard_GS3: "Standard_GS3",
    Standard_GS4: "Standard_GS4",
    Standard_GS5: "Standard_GS5",
} as const;

/**
 * The Azure VM size of the agent VM nodes. This cannot be changed once the cluster is created.
 */
export type AgentVMSizeTypes = (typeof AgentVMSizeTypes)[keyof typeof AgentVMSizeTypes];

export const ClusterType = {
    ACS: "ACS",
} as const;

/**
 * The cluster type.
 */
export type ClusterType = (typeof ClusterType)[keyof typeof ClusterType];

export const Orchestrator = {
    Kubernetes: "Kubernetes",
} as const;

/**
 * Type of orchestrator. It cannot be changed once the cluster is created.
 */
export type Orchestrator = (typeof Orchestrator)[keyof typeof Orchestrator];

export const Status = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * SSL status. Allowed values are Enabled and Disabled.
 */
export type Status = (typeof Status)[keyof typeof Status];

export const SystemServices = {
    Scoring: "Scoring",
    Batch: "Batch",
} as const;

/**
 * The choices of system services.
 */
export type SystemServices = (typeof SystemServices)[keyof typeof SystemServices];
