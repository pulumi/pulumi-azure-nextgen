import * as pulumi from "@pulumi/pulumi";
/**
 * The File Share.
 */
export declare class FileShare extends pulumi.CustomResource {
    /**
     * Get an existing FileShare resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): FileShare;
    /**
     * Returns true if the given object is an instance of FileShare.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is FileShare;
    /**
     * The user/group who will have full permission in this share. Active directory email address. Example: xyz@contoso.com or Contoso\xyz.
     */
    readonly adminUser: pulumi.Output<string>;
    /**
     * The data policy
     */
    readonly dataPolicy: pulumi.Output<string>;
    /**
     * Description for file share
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * The local used capacity in Bytes.
     */
    readonly localUsedCapacityInBytes: pulumi.Output<number>;
    /**
     * The monitoring status
     */
    readonly monitoringStatus: pulumi.Output<string>;
    /**
     * The name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The total provisioned capacity in Bytes
     */
    readonly provisionedCapacityInBytes: pulumi.Output<number>;
    /**
     * The Share Status
     */
    readonly shareStatus: pulumi.Output<string>;
    /**
     * The type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * The used capacity in Bytes.
     */
    readonly usedCapacityInBytes: pulumi.Output<number>;
    /**
     * Create a FileShare resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FileShareArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a FileShare resource.
 */
export interface FileShareArgs {
    /**
     * The user/group who will have full permission in this share. Active directory email address. Example: xyz@contoso.com or Contoso\xyz.
     */
    readonly adminUser: pulumi.Input<string>;
    /**
     * The data policy
     */
    readonly dataPolicy: pulumi.Input<string>;
    /**
     * Description for file share
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The device name.
     */
    readonly deviceName: pulumi.Input<string>;
    /**
     * The file server name.
     */
    readonly fileServerName: pulumi.Input<string>;
    /**
     * The manager name
     */
    readonly managerName: pulumi.Input<string>;
    /**
     * The monitoring status
     */
    readonly monitoringStatus: pulumi.Input<string>;
    /**
     * The total provisioned capacity in Bytes
     */
    readonly provisionedCapacityInBytes: pulumi.Input<number>;
    /**
     * The resource group name
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The file share name.
     */
    readonly shareName: pulumi.Input<string>;
    /**
     * The Share Status
     */
    readonly shareStatus: pulumi.Input<string>;
}
