// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getWebAppDeploymentSlot(args: GetWebAppDeploymentSlotArgs, opts?: pulumi.InvokeOptions): Promise<GetWebAppDeploymentSlotResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:web/v20200901:getWebAppDeploymentSlot", {
        "id": args.id,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "slot": args.slot,
    }, opts);
}

export interface GetWebAppDeploymentSlotArgs {
    /**
     * Deployment ID.
     */
    readonly id: string;
    /**
     * Name of the app.
     */
    readonly name: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    readonly resourceGroupName: string;
    /**
     * Name of the deployment slot. If a slot is not specified, the API gets a deployment for the production slot.
     */
    readonly slot: string;
}

/**
 * User credentials used for publishing activity.
 */
export interface GetWebAppDeploymentSlotResult {
    /**
     * True if deployment is currently active, false if completed and null if not started.
     */
    readonly active?: boolean;
    /**
     * Who authored the deployment.
     */
    readonly author?: string;
    /**
     * Author email.
     */
    readonly authorEmail?: string;
    /**
     * Who performed the deployment.
     */
    readonly deployer?: string;
    /**
     * Details on deployment.
     */
    readonly details?: string;
    /**
     * End time.
     */
    readonly endTime?: string;
    /**
     * Resource Id.
     */
    readonly id: string;
    /**
     * Kind of resource.
     */
    readonly kind?: string;
    /**
     * Details about deployment status.
     */
    readonly message?: string;
    /**
     * Resource Name.
     */
    readonly name: string;
    /**
     * Start time.
     */
    readonly startTime?: string;
    /**
     * Deployment status.
     */
    readonly status?: number;
    /**
     * The system metadata relating to this resource.
     */
    readonly systemData: outputs.web.v20200901.SystemDataResponse;
    /**
     * Resource type.
     */
    readonly type: string;
}