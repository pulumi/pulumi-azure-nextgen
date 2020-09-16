import * as pulumi from "@pulumi/pulumi";
/**
 * The file server.
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
    /**
     * The backup policy id.
     */
    readonly backupScheduleGroupId: pulumi.Output<string>;
    /**
     * The description of the file server
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * Domain of the file server
     */
    readonly domainName: pulumi.Output<string>;
    /**
     * The name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The storage domain id.
     */
    readonly storageDomainId: pulumi.Output<string>;
    /**
     * The type.
     */
    readonly type: pulumi.Output<string>;
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
     * The backup policy id.
     */
    readonly backupScheduleGroupId: pulumi.Input<string>;
    /**
     * The description of the file server
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The device name.
     */
    readonly deviceName: pulumi.Input<string>;
    /**
     * Domain of the file server
     */
    readonly domainName: pulumi.Input<string>;
    /**
     * The file server name.
     */
    readonly fileServerName: pulumi.Input<string>;
    /**
     * The manager name
     */
    readonly managerName: pulumi.Input<string>;
    /**
     * The resource group name
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The storage domain id.
     */
    readonly storageDomainId: pulumi.Input<string>;
}
