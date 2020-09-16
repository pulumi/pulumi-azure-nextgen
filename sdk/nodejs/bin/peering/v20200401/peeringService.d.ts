import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Peering Service
 */
export declare class PeeringService extends pulumi.CustomResource {
    /**
     * Get an existing PeeringService resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): PeeringService;
    /**
     * Returns true if the given object is an instance of PeeringService.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is PeeringService;
    /**
     * The location of the resource.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The name of the resource.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The PeeringServiceLocation of the Customer.
     */
    readonly peeringServiceLocation: pulumi.Output<string | undefined>;
    /**
     * The MAPS Provider Name.
     */
    readonly peeringServiceProvider: pulumi.Output<string | undefined>;
    /**
     * The provisioning state of the resource.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * The SKU that defines the type of the peering service.
     */
    readonly sku: pulumi.Output<outputs.peering.v20200401.PeeringServiceSkuResponse | undefined>;
    /**
     * The resource tags.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The type of the resource.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a PeeringService resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PeeringServiceArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a PeeringService resource.
 */
export interface PeeringServiceArgs {
    /**
     * The location of the resource.
     */
    readonly location: pulumi.Input<string>;
    /**
     * The PeeringServiceLocation of the Customer.
     */
    readonly peeringServiceLocation?: pulumi.Input<string>;
    /**
     * The name of the peering service.
     */
    readonly peeringServiceName: pulumi.Input<string>;
    /**
     * The MAPS Provider Name.
     */
    readonly peeringServiceProvider?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The SKU that defines the type of the peering service.
     */
    readonly sku?: pulumi.Input<inputs.peering.v20200401.PeeringServiceSku>;
    /**
     * The resource tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
