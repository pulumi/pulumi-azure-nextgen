// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getApplication(args: GetApplicationArgs, opts?: pulumi.InvokeOptions): Promise<GetApplicationResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:solutions/v20190701:getApplication", {
        "applicationName": args.applicationName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetApplicationArgs {
    /**
     * The name of the managed application.
     */
    readonly applicationName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    readonly resourceGroupName: string;
}

/**
 * Information about managed application.
 */
export interface GetApplicationResult {
    /**
     * The fully qualified path of managed application definition Id.
     */
    readonly applicationDefinitionId?: string;
    /**
     * The collection of managed application artifacts.
     */
    readonly artifacts: outputs.solutions.v20190701.ApplicationArtifactResponse[];
    /**
     * The  read-only authorizations property that is retrieved from the application package.
     */
    readonly authorizations: outputs.solutions.v20190701.ApplicationAuthorizationResponse[];
    /**
     * The managed application billing details.
     */
    readonly billingDetails: outputs.solutions.v20190701.ApplicationBillingDetailsDefinitionResponse;
    /**
     * The client entity that created the JIT request.
     */
    readonly createdBy: outputs.solutions.v20190701.ApplicationClientDetailsResponse;
    /**
     * The read-only customer support property that is retrieved from the application package.
     */
    readonly customerSupport: outputs.solutions.v20190701.ApplicationPackageContactResponse;
    /**
     * Resource ID
     */
    readonly id: string;
    /**
     * The identity of the resource.
     */
    readonly identity?: outputs.solutions.v20190701.IdentityResponse;
    /**
     * The managed application Jit access policy.
     */
    readonly jitAccessPolicy?: outputs.solutions.v20190701.ApplicationJitAccessPolicyResponse;
    /**
     * The kind of the managed application. Allowed values are MarketPlace and ServiceCatalog.
     */
    readonly kind: string;
    /**
     * Resource location
     */
    readonly location?: string;
    /**
     * ID of the resource that manages this resource.
     */
    readonly managedBy?: string;
    /**
     * The managed resource group Id.
     */
    readonly managedResourceGroupId?: string;
    /**
     * The managed application management mode.
     */
    readonly managementMode: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * Name and value pairs that define the managed application outputs.
     */
    readonly outputs: any;
    /**
     * Name and value pairs that define the managed application parameters. It can be a JObject or a well formed JSON string.
     */
    readonly parameters?: any;
    /**
     * The plan information.
     */
    readonly plan?: outputs.solutions.v20190701.PlanResponse;
    /**
     * The managed application provisioning state.
     */
    readonly provisioningState: string;
    /**
     * The publisher tenant Id.
     */
    readonly publisherTenantId: string;
    /**
     * The SKU of the resource.
     */
    readonly sku?: outputs.solutions.v20190701.SkuResponse;
    /**
     * The read-only support URLs property that is retrieved from the application package.
     */
    readonly supportUrls: outputs.solutions.v20190701.ApplicationPackageSupportUrlsResponse;
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type
     */
    readonly type: string;
    /**
     * The client entity that last updated the JIT request.
     */
    readonly updatedBy: outputs.solutions.v20190701.ApplicationClientDetailsResponse;
}
