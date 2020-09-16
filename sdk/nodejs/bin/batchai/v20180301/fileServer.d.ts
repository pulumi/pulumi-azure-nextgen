import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Contains information about the File Server.
 */
export declare class FileServer extends pulumi.CustomResource {
    /**
     * Get an existing FileServer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): FileServer;
    /**
     * Returns true if the given object is an instance of FileServer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is FileServer;
    readonly creationTime: pulumi.Output<string>;
    /**
     * Settings for the data disk which would be created for the File Server.
     */
    readonly dataDisks: pulumi.Output<outputs.batchai.v20180301.DataDisksResponse | undefined>;
    /**
     * The location of the resource
     */
    readonly location: pulumi.Output<string>;
    /**
     * Details of the File Server.
     */
    readonly mountSettings: pulumi.Output<outputs.batchai.v20180301.MountSettingsResponse>;
    /**
     * The name of the resource
     */
    readonly name: pulumi.Output<string>;
    /**
     * Possible values: creating - The File Server is getting created. updating - The File Server creation has been accepted and it is getting updated. deleting - The user has requested that the File Server be deleted, and it is in the process of being deleted. failed - The File Server creation has failed with the specified errorCode. Details about the error code are specified in the message field. succeeded - The File Server creation has succeeded.
     */
    readonly provisioningState: pulumi.Output<string>;
    readonly provisioningStateTransitionTime: pulumi.Output<string>;
    /**
     * SSH configuration settings for the VM
     */
    readonly sshConfiguration: pulumi.Output<outputs.batchai.v20180301.SshConfigurationResponse | undefined>;
    /**
     * Represents a resource ID. For example, for a subnet, it is the resource URL for the subnet.
     */
    readonly subnet: pulumi.Output<outputs.batchai.v20180301.ResourceIdResponse | undefined>;
    /**
     * The tags of the resource
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    }>;
    /**
     * The type of the resource
     */
    readonly type: pulumi.Output<string>;
    /**
     * For information about available VM sizes for File Server from the Virtual Machines Marketplace, see Sizes for Virtual Machines (Linux).
     */
    readonly vmSize: pulumi.Output<string | undefined>;
    /**
     * Create a FileServer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FileServerArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a FileServer resource.
 */
export interface FileServerArgs {
    /**
     * Settings for the data disk which would be created for the File Server.
     */
    readonly dataDisks: pulumi.Input<inputs.batchai.v20180301.DataDisks>;
    /**
     * The name of the file server within the specified resource group. File server names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
     */
    readonly fileServerName: pulumi.Input<string>;
    /**
     * The region in which to create the File Server.
     */
    readonly location: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * SSH configuration settings for the VM
     */
    readonly sshConfiguration: pulumi.Input<inputs.batchai.v20180301.SshConfiguration>;
    /**
     * Represents a resource ID. For example, for a subnet, it is the resource URL for the subnet.
     */
    readonly subnet?: pulumi.Input<inputs.batchai.v20180301.ResourceId>;
    /**
     * The user specified tags associated with the File Server.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * For information about available VM sizes for fileservers from the Virtual Machines Marketplace, see Sizes for Virtual Machines (Linux).
     */
    readonly vmSize: pulumi.Input<string>;
}
