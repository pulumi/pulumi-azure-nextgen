import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getNamespace(args: GetNamespaceArgs, opts?: pulumi.InvokeOptions): Promise<GetNamespaceResult>;
export interface GetNamespaceArgs {
    /**
     * The namespace name.
     */
    readonly namespaceName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}
/**
 * Description of a Namespace resource.
 */
export interface GetNamespaceResult {
    /**
     * Gets or sets datacenter location of the Namespace.
     */
    readonly location?: string;
    /**
     * Gets or sets name of the Namespace.
     */
    readonly name?: string;
    /**
     * Gets or sets properties of the Namespace.
     */
    readonly properties: outputs.notificationhubs.v20140901.NamespacePropertiesResponse;
    /**
     * Gets or sets tags of the Namespace.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Gets or sets resource type of the Namespace.
     */
    readonly type?: string;
}
