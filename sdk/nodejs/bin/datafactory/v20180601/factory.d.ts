import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Factory resource type.
 */
export declare class Factory extends pulumi.CustomResource {
    /**
     * Get an existing Factory resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Factory;
    /**
     * Returns true if the given object is an instance of Factory.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Factory;
    /**
     * Time the factory was created in ISO8601 format.
     */
    readonly createTime: pulumi.Output<string>;
    /**
     * Etag identifies change in the resource.
     */
    readonly eTag: pulumi.Output<string>;
    /**
     * List of parameters for factory.
     */
    readonly globalParameters: pulumi.Output<{
        [key: string]: outputs.datafactory.v20180601.GlobalParameterSpecificationResponse;
    } | undefined>;
    /**
     * Managed service identity of the factory.
     */
    readonly identity: pulumi.Output<outputs.datafactory.v20180601.FactoryIdentityResponse | undefined>;
    /**
     * The resource location.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * The resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Factory provisioning state, example Succeeded.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * Git repo information of the factory.
     */
    readonly repoConfiguration: pulumi.Output<outputs.datafactory.v20180601.FactoryRepoConfigurationResponse | undefined>;
    /**
     * The resource tags.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Version of the factory.
     */
    readonly version: pulumi.Output<string>;
    /**
     * Create a Factory resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FactoryArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Factory resource.
 */
export interface FactoryArgs {
    /**
     * The factory name.
     */
    readonly factoryName: pulumi.Input<string>;
    /**
     * List of parameters for factory.
     */
    readonly globalParameters?: pulumi.Input<{
        [key: string]: pulumi.Input<inputs.datafactory.v20180601.GlobalParameterSpecification>;
    }>;
    /**
     * Managed service identity of the factory.
     */
    readonly identity?: pulumi.Input<inputs.datafactory.v20180601.FactoryIdentity>;
    /**
     * The resource location.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * Git repo information of the factory.
     */
    readonly repoConfiguration?: pulumi.Input<inputs.datafactory.v20180601.FactoryRepoConfiguration>;
    /**
     * The resource group name.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The resource tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
