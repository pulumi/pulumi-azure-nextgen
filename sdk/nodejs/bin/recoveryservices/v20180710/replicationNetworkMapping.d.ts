import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Network Mapping model. Ideally it should have been possible to inherit this class from prev version in InheritedModels as long as there is no difference in structure or method signature. Since there were no base Models for certain fields and methods viz NetworkMappingProperties and Load with required return type, the class has been introduced in its entirety with references to base models to facilitate extensions in subsequent versions.
 */
export declare class ReplicationNetworkMapping extends pulumi.CustomResource {
    /**
     * Get an existing ReplicationNetworkMapping resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ReplicationNetworkMapping;
    /**
     * Returns true if the given object is an instance of ReplicationNetworkMapping.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ReplicationNetworkMapping;
    /**
     * Resource Location
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * Resource Name
     */
    readonly name: pulumi.Output<string>;
    /**
     * The Network Mapping Properties.
     */
    readonly properties: pulumi.Output<outputs.recoveryservices.v20180710.NetworkMappingPropertiesResponse>;
    /**
     * Resource Type
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a ReplicationNetworkMapping resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ReplicationNetworkMappingArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a ReplicationNetworkMapping resource.
 */
export interface ReplicationNetworkMappingArgs {
    /**
     * Primary fabric name.
     */
    readonly fabricName: pulumi.Input<string>;
    /**
     * Network mapping name.
     */
    readonly networkMappingName: pulumi.Input<string>;
    /**
     * Primary network name.
     */
    readonly networkName: pulumi.Input<string>;
    /**
     * Input properties for creating network mapping.
     */
    readonly properties?: pulumi.Input<inputs.recoveryservices.v20180710.CreateNetworkMappingInputProperties>;
    /**
     * The name of the resource group where the recovery services vault is present.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the recovery services vault.
     */
    readonly resourceName: pulumi.Input<string>;
}
