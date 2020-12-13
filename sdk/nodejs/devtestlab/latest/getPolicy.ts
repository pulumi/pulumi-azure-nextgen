// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getPolicy(args: GetPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetPolicyResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:devtestlab/latest:getPolicy", {
        "expand": args.expand,
        "labName": args.labName,
        "name": args.name,
        "policySetName": args.policySetName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPolicyArgs {
    /**
     * Specify the $expand query. Example: 'properties($select=description)'
     */
    readonly expand?: string;
    /**
     * The name of the lab.
     */
    readonly labName: string;
    /**
     * The name of the policy.
     */
    readonly name: string;
    /**
     * The name of the policy set.
     */
    readonly policySetName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}

/**
 * A Policy.
 */
export interface GetPolicyResult {
    /**
     * The creation date of the policy.
     */
    readonly createdDate: string;
    /**
     * The description of the policy.
     */
    readonly description?: string;
    /**
     * The evaluator type of the policy (i.e. AllowedValuesPolicy, MaxValuePolicy).
     */
    readonly evaluatorType?: string;
    /**
     * The fact data of the policy.
     */
    readonly factData?: string;
    /**
     * The fact name of the policy (e.g. LabVmCount, LabVmSize, MaxVmsAllowedPerLab, etc.
     */
    readonly factName?: string;
    /**
     * The identifier of the resource.
     */
    readonly id: string;
    /**
     * The location of the resource.
     */
    readonly location?: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * The provisioning status of the resource.
     */
    readonly provisioningState: string;
    /**
     * The status of the policy.
     */
    readonly status?: string;
    /**
     * The tags of the resource.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The threshold of the policy (i.e. a number for MaxValuePolicy, and a JSON array of values for AllowedValuesPolicy).
     */
    readonly threshold?: string;
    /**
     * The type of the resource.
     */
    readonly type: string;
    /**
     * The unique immutable identifier of a resource (Guid).
     */
    readonly uniqueIdentifier: string;
}
