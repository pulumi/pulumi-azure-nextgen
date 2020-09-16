import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Represents a share on the  Data Box Edge/Gateway device.
 */
export declare class Share extends pulumi.CustomResource {
    /**
     * Get an existing Share resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Share;
    /**
     * Returns true if the given object is an instance of Share.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Share;
    /**
     * Access protocol to be used by the share.
     */
    readonly accessProtocol: pulumi.Output<string>;
    /**
     * Azure container mapping for the share.
     */
    readonly azureContainerInfo: pulumi.Output<outputs.databoxedge.v20190701.AzureContainerInfoResponse | undefined>;
    /**
     * List of IP addresses and corresponding access rights on the share(required for NFS protocol).
     */
    readonly clientAccessRights: pulumi.Output<outputs.databoxedge.v20190701.ClientAccessRightResponse[] | undefined>;
    /**
     * Data policy of the share.
     */
    readonly dataPolicy: pulumi.Output<string | undefined>;
    /**
     * Description for the share.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * Current monitoring status of the share.
     */
    readonly monitoringStatus: pulumi.Output<string>;
    /**
     * The object name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Details of the refresh job on this share.
     */
    readonly refreshDetails: pulumi.Output<outputs.databoxedge.v20190701.RefreshDetailsResponse | undefined>;
    /**
     * Share mount point to the role.
     */
    readonly shareMappings: pulumi.Output<outputs.databoxedge.v20190701.MountPointMapResponse[]>;
    /**
     * Current status of the share.
     */
    readonly shareStatus: pulumi.Output<string>;
    /**
     * The hierarchical type of the object.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Mapping of users and corresponding access rights on the share (required for SMB protocol).
     */
    readonly userAccessRights: pulumi.Output<outputs.databoxedge.v20190701.UserAccessRightResponse[] | undefined>;
    /**
     * Create a Share resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ShareArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Share resource.
 */
export interface ShareArgs {
    /**
     * Access protocol to be used by the share.
     */
    readonly accessProtocol: pulumi.Input<string>;
    /**
     * Azure container mapping for the share.
     */
    readonly azureContainerInfo?: pulumi.Input<inputs.databoxedge.v20190701.AzureContainerInfo>;
    /**
     * List of IP addresses and corresponding access rights on the share(required for NFS protocol).
     */
    readonly clientAccessRights?: pulumi.Input<pulumi.Input<inputs.databoxedge.v20190701.ClientAccessRight>[]>;
    /**
     * Data policy of the share.
     */
    readonly dataPolicy?: pulumi.Input<string>;
    /**
     * Description for the share.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The device name.
     */
    readonly deviceName: pulumi.Input<string>;
    /**
     * Current monitoring status of the share.
     */
    readonly monitoringStatus: pulumi.Input<string>;
    /**
     * The share name.
     */
    readonly name: pulumi.Input<string>;
    /**
     * Details of the refresh job on this share.
     */
    readonly refreshDetails?: pulumi.Input<inputs.databoxedge.v20190701.RefreshDetails>;
    /**
     * The resource group name.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Current status of the share.
     */
    readonly shareStatus: pulumi.Input<string>;
    /**
     * Mapping of users and corresponding access rights on the share (required for SMB protocol).
     */
    readonly userAccessRights?: pulumi.Input<pulumi.Input<inputs.databoxedge.v20190701.UserAccessRight>[]>;
}
