// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getWorkbook(args: GetWorkbookArgs, opts?: pulumi.InvokeOptions): Promise<GetWorkbookResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:insights/v20201020:getWorkbook", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetWorkbookArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the Application Insights component resource.
     */
    readonly resourceName: string;
}

/**
 * An Application Insights workbook definition.
 */
export interface GetWorkbookResult {
    /**
     * Workbook category, as defined by the user at creation time.
     */
    readonly category: string;
    /**
     * The user-defined name (display name) of the workbook.
     */
    readonly displayName: string;
    /**
     * Azure resource Id
     */
    readonly id: string;
    /**
     * Identity used for BYOS
     */
    readonly identity?: outputs.insights.v20201020.ManagedIdentityResponse;
    /**
     * The kind of workbook. Choices are user and shared.
     */
    readonly kind?: string;
    /**
     * Resource location
     */
    readonly location: string;
    /**
     * Azure resource name. This is GUID value. The display name should be assigned within properties field.
     */
    readonly name: string;
    /**
     * Configuration of this particular workbook. Configuration data is a string containing valid JSON
     */
    readonly serializedData: string;
    /**
     * ResourceId for a source resource.
     */
    readonly sourceId?: string;
    /**
     * BYOS Storage Account URI
     */
    readonly storageUri?: string;
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * Date and time in UTC of the last modification that was made to this workbook definition.
     */
    readonly timeModified: string;
    /**
     * Azure resource type
     */
    readonly type: string;
    /**
     * Unique user id of the specific user that owns this workbook.
     */
    readonly userId: string;
    /**
     * Workbook version
     */
    readonly version?: string;
}
