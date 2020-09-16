import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Represents an instance of an Analysis Services resource.
 */
export declare class ServerDetails extends pulumi.CustomResource {
    /**
     * Get an existing ServerDetails resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ServerDetails;
    /**
     * Returns true if the given object is an instance of ServerDetails.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ServerDetails;
    /**
     * A collection of AS server administrators
     */
    readonly asAdministrators: pulumi.Output<outputs.analysisservices.v20160516.ServerAdministratorsResponse | undefined>;
    /**
     * The container URI of backup blob.
     */
    readonly backupBlobContainerUri: pulumi.Output<string | undefined>;
    /**
     * Location of the Analysis Services resource.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The name of the Analysis Services resource.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The current deployment state of Analysis Services resource. The provisioningState is to indicate states for resource provisioning.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * The full name of the Analysis Services resource.
     */
    readonly serverFullName: pulumi.Output<string>;
    /**
     * The SKU of the Analysis Services resource.
     */
    readonly sku: pulumi.Output<outputs.analysisservices.v20160516.ResourceSkuResponse>;
    /**
     * The current state of Analysis Services resource. The state is to indicate more states outside of resource provisioning.
     */
    readonly state: pulumi.Output<string>;
    /**
     * Key-value pairs of additional resource provisioning properties.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The type of the Analysis Services resource.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a ServerDetails resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServerDetailsArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a ServerDetails resource.
 */
export interface ServerDetailsArgs {
    /**
     * A collection of AS server administrators
     */
    readonly asAdministrators?: pulumi.Input<inputs.analysisservices.v20160516.ServerAdministrators>;
    /**
     * The container URI of backup blob.
     */
    readonly backupBlobContainerUri?: pulumi.Input<string>;
    /**
     * Location of the Analysis Services resource.
     */
    readonly location: pulumi.Input<string>;
    /**
     * The name of the Azure Resource group of which a given Analysis Services server is part. This name must be at least 1 character in length, and no more than 90.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Analysis Services server. It must be a minimum of 3 characters, and a maximum of 63.
     */
    readonly serverName: pulumi.Input<string>;
    /**
     * The SKU of the Analysis Services resource.
     */
    readonly sku: pulumi.Input<inputs.analysisservices.v20160516.ResourceSku>;
    /**
     * Key-value pairs of additional resource provisioning properties.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
