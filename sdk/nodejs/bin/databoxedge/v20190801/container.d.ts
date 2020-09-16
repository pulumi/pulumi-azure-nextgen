import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
/**
 * Represents a container on the  Data Box Edge/Gateway device.
 */
export declare class Container extends pulumi.CustomResource {
    /**
     * Get an existing Container resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Container;
    /**
     * Returns true if the given object is an instance of Container.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Container;
    /**
     * Current status of the container.
     */
    readonly containerStatus: pulumi.Output<string>;
    /**
     * The UTC time when container got created.
     */
    readonly createdDateTime: pulumi.Output<string>;
    /**
     * DataFormat for Container
     */
    readonly dataFormat: pulumi.Output<string>;
    /**
     * The object name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Details of the refresh job on this container.
     */
    readonly refreshDetails: pulumi.Output<outputs.databoxedge.v20190801.RefreshDetailsResponse>;
    /**
     * The hierarchical type of the object.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a Container resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ContainerArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Container resource.
 */
export interface ContainerArgs {
    /**
     * The container name.
     */
    readonly containerName: pulumi.Input<string>;
    /**
     * DataFormat for Container
     */
    readonly dataFormat: pulumi.Input<string>;
    /**
     * The device name.
     */
    readonly deviceName: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The Storage Account Name
     */
    readonly storageAccountName: pulumi.Input<string>;
}
