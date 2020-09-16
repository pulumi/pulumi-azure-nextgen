import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function listControllerConnectionDetails(args: ListControllerConnectionDetailsArgs, opts?: pulumi.InvokeOptions): Promise<ListControllerConnectionDetailsResult>;
export interface ListControllerConnectionDetailsArgs {
    /**
     * Name of the resource.
     */
    readonly name: string;
    /**
     * Resource group to which the resource belongs.
     */
    readonly resourceGroupName: string;
    /**
     * Resource ID of the target container host mapped to the Azure Dev Spaces Controller.
     */
    readonly targetContainerHostResourceId: string;
}
export interface ListControllerConnectionDetailsResult {
    /**
     * List of Azure Dev Spaces Controller connection details.
     */
    readonly connectionDetailsList?: outputs.devspaces.v20190401.ControllerConnectionDetailsResponse[];
}
