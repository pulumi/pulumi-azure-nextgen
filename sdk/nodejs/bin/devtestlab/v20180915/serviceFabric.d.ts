import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
/**
 * A Service Fabric.
 */
export declare class ServiceFabric extends pulumi.CustomResource {
    /**
     * Get an existing ServiceFabric resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ServiceFabric;
    /**
     * Returns true if the given object is an instance of ServiceFabric.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ServiceFabric;
    /**
     * The applicable schedule for the virtual machine.
     */
    readonly applicableSchedule: pulumi.Output<outputs.devtestlab.v20180915.ApplicableScheduleResponse>;
    /**
     * The resource id of the environment under which the service fabric resource is present
     */
    readonly environmentId: pulumi.Output<string | undefined>;
    /**
     * The backing service fabric resource's id
     */
    readonly externalServiceFabricId: pulumi.Output<string | undefined>;
    /**
     * The location of the resource.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * The name of the resource.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The provisioning status of the resource.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * The tags of the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The type of the resource.
     */
    readonly type: pulumi.Output<string>;
    /**
     * The unique immutable identifier of a resource (Guid).
     */
    readonly uniqueIdentifier: pulumi.Output<string>;
    /**
     * Create a ServiceFabric resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServiceFabricArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a ServiceFabric resource.
 */
export interface ServiceFabricArgs {
    /**
     * The resource id of the environment under which the service fabric resource is present
     */
    readonly environmentId?: pulumi.Input<string>;
    /**
     * The backing service fabric resource's id
     */
    readonly externalServiceFabricId?: pulumi.Input<string>;
    /**
     * The name of the lab.
     */
    readonly labName: pulumi.Input<string>;
    /**
     * The location of the resource.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The name of the service fabric.
     */
    readonly name: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The tags of the resource.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The name of the user profile.
     */
    readonly userName: pulumi.Input<string>;
}
