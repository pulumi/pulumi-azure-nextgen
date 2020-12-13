// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getSiteInstanceDeployment(args: GetSiteInstanceDeploymentArgs, opts?: pulumi.InvokeOptions): Promise<GetSiteInstanceDeploymentResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:web/latest:getSiteInstanceDeployment", {
        "id": args.id,
        "instanceId": args.instanceId,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetSiteInstanceDeploymentArgs {
    /**
     * Id of the deployment
     */
    readonly id: string;
    /**
     * Id of web app instance
     */
    readonly instanceId: string;
    /**
     * Name of web app
     */
    readonly name: string;
    /**
     * Name of resource group
     */
    readonly resourceGroupName: string;
}

/**
 * Represents user credentials used for publishing activity
 */
export interface GetSiteInstanceDeploymentResult {
    /**
     * Active
     */
    readonly active?: boolean;
    /**
     * Author
     */
    readonly author?: string;
    /**
     * AuthorEmail
     */
    readonly authorEmail?: string;
    /**
     * Deployer
     */
    readonly deployer?: string;
    /**
     * Detail
     */
    readonly details?: string;
    /**
     * EndTime
     */
    readonly endTime?: string;
    /**
     * Resource Id
     */
    readonly id?: string;
    /**
     * Kind of resource
     */
    readonly kind?: string;
    /**
     * Resource Location
     */
    readonly location: string;
    /**
     * Message
     */
    readonly message?: string;
    /**
     * Resource Name
     */
    readonly name?: string;
    /**
     * StartTime
     */
    readonly startTime?: string;
    /**
     * Status
     */
    readonly status?: number;
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type
     */
    readonly type?: string;
}
